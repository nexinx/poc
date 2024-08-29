/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.template;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexinx.api.common.bean.TemplateBean;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import io.smallrye.mutiny.Uni;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.logging.Logger;

import jakarta.inject.Inject;
import org.jboss.logmanager.Level;

@Path("templates")
@Produces("application/json")
@Consumes("application/json")
public class TemplateResource {
    private static final Logger LOGGER = Logger.getLogger(TemplateResource.class.getName());
    @Inject
    TemplateService service;

    @GET
    public Uni<List<TemplateEntity>> getAllEntry() {
        return service.getAllTemplate();
    }

    @GET
    @Path("/{id}")
    public Uni<TemplateEntity> getSingleEntry(@PathParam("id") Long id) {
        return service.findItemById(id);
    }


    @GET
    @Path("/template-name")
    public Uni<Map<String, Long>> getTemplateName() {
        return service.getAllTemplateNames();
    }

    @GET
    @Path("/{limit}/{offset}")
    // limit= item per page, offset = page number. if 6 element and per page 3 than total 2 page. so limit = 3, page =1 but url param=0 and page 2 but url param= 3
    public Uni<List<TemplateEntity>> getEntryByPage(int limit, int offset) {
        return service.findAllByPage(limit, offset);
    }

    @POST
    @Path("/renderer")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Uni<Response> fileUpload(InputStream fileStream) {
        return Uni.createFrom().item(() -> {
            try {
                byte[] fileContent = readInputStream(fileStream);
                String template = new String(fileContent, StandardCharsets.UTF_8);

                int startIndex = template.indexOf("<?xml");
                int endIndex = template.indexOf("</xsl:stylesheet>") + "</xsl:stylesheet>".length();

                if (startIndex != -1 && endIndex != -1 && startIndex < endIndex) {
                    String extractedXml = template.substring(startIndex, endIndex);

                    // Asynchronously convert XML to base64 using xmlImage service
                    CompletableFuture<Map<String, String>> future = service.extractTemplateAttribute(extractedXml);
                    String json = new ObjectMapper().writeValueAsString(future.join());

                    return Response.ok(json).build();
                } else {
                    LOGGER.warning("Invalid template: there is an error on template or tags are messing");
                    return Response.status(Response.Status.BAD_REQUEST).entity("Invalid template: Start or end tag not found or invalid order.").build();
                }
            } catch (IOException e) {
                LOGGER.log(Level.SEVERE, "Error processing template", e);
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Failed to process template: " + e.getMessage()).build();
            }
        });
    }

    private byte[] readInputStream(InputStream inputStream) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = inputStream.read(buffer)) != -1) {
            outputStream.write(buffer, 0, bytesRead);
        }
        return outputStream.toByteArray();
    }


    @POST
    @Path("/buildTemplate")
    public Uni<Response> buildTemplate(TemplateBean bean) {
        Uni<TemplateEntity> entityUni = service.findItemById(bean.getTemplateId());
        return entityUni.onItem().transform(entity -> {
            CompletableFuture<String> base64Image = service.buildTemplate(entity.getTemplateRaw(), bean.getTemplateAttribute());
            if (bean.getTemplateAttribute().isEmpty()) {
                base64Image = service.buildTemplate(entity.getTemplateRaw(), entity.getTemplateAttribute());
            }
            // Return a response with the processed content
            return Response.ok(base64Image.join()).build();
        }).onFailure().recoverWithItem(error -> {
            // Handle any errors during entity retrieval
            return Response.status(Response.Status.NOT_FOUND).entity("Template not found").build();
        });
    }

//    @POST
//    @Path("/buildTemplate}")
//    public Uni<Response> buildTemplateFromJson(TemplateBean templateBean) {
//        Uni<TemplateEntity> entityUni = service.findItemById(templateBean.getTemplateId());
//        return entityUni.onItem().transform(entity -> {
//            CompletableFuture<String> base64Image = service.buildTemplate(entity.getTemplateRaw(), templateBean.getTemplateAttribute());
//            // Return a response with the processed content
//            return Response.ok(base64Image.join()).build();
//        }).onFailure().recoverWithItem(error -> {
//            // Handle any errors during entity retrieval
//            return Response.status(Response.Status.NOT_FOUND).entity("Template not found").build();
//        });
//    }


    @POST
    public Uni<Response> createEntry(TemplateEntity template) {
        if (template == null || template.getId() != null) {
            throw new WebApplicationException("Id was invalidly set on request.", 422);
        }
        LOGGER.info("A template is created");
        return service.createTemplate(template);
    }

    @PUT
    @Path("{key}")
    public Uni<Response> updateEntry(@PathParam("key") Long key, TemplateEntity template) {
        if (template == null || template.getTemplateAttribute() == null) {
            throw new WebApplicationException("Product name was not set on request.", 422);
        }
        LOGGER.info("A Template is updated with id: " + key);
        return service.updateTemplate(key, template);
    }

    @DELETE
    @Path("{key}")
    public Uni<Response> deleteEntry(@PathParam("key") Long key) {
        return service.deleteTemplate(key);
    }
}
