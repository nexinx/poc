/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.node;

import com.nexinx.api.common.bean.NodeBean;
import com.nexinx.api.common.bean.TemplateBean;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import io.smallrye.mutiny.Uni;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;

import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
import org.jboss.logging.Logger;

@Path("nodes")
@Produces("application/json")
@Consumes("application/json")
public class NodeResource {
    private static final Logger LOGGER = Logger.getLogger(NodeResource.class.getName());

    @Inject
    NodeService service;


    @GET
    public Uni<List<NodeEntity>> getAllEntry() {
        return service.getAllNode();
    }

    @GET
    @Path("{id}")
    public Uni<NodeEntity> getSingleEntry(@PathParam("id") Long id) {
        return service.findItemById(id);
    }

    @GET
    @Path("/node-resource/{id}")
    public Uni<NodeBean> getSingleNodeAndMeta(@PathParam("id") Long id) {
        return service.findItemByIdNodeAndMeta(id);
    }

    @GET
    @Path("/{limit}/{offset}")
    // limit= item per page, offset = page number. if 6 element and per page 3 than total 2 page. so limit = 3, page =1 but url param=0 and page 2 but url param= 3
    public Uni<List<NodeEntity>> getEntryByPage(int limit, int offset) {
        return service.findAllByPage(limit, offset);
    }

    @POST
    public Uni<Response> createEntry(NodeBean node) {
        if (node == null) {
            throw new WebApplicationException("Id was invalidly set on request.", 422);
        }
        return service.createNode(node);
    }

    @PUT
    @Path("{key}")
    public Uni<Response> updateEntry(@PathParam("key") Long key, NodeEntity node) {
        if ( node == null || node.getNodeAttribute() == null) {
            throw new WebApplicationException("Node name was not set on request.", 422);
        }
        return service.updateNode(key, node);
    }

    @DELETE
    @Path("{key}")
    public Uni<Response> deleteEntry(@PathParam("key") Long key) {
        return service.deleteNode(key);
    }


    @POST
    @Path("/build-node-template")
    public Uni<Response> buildTemplate(TemplateBean bean) {
        Uni<NodeMetaEntity> entityUni = service.findNodeMetaById(bean.getTemplateId());

        return entityUni.onItem().transform(entity -> {
            CompletableFuture<String> base64Image = service.buildTemplateFromNode(entity.getNodeTemplate(), bean.getTemplateAttribute());
            return Response.ok(base64Image.join()).build();

        }).onFailure().recoverWithItem(error -> {
            // Handle any errors during entity retrieval
            return Response.status(Response.Status.NOT_FOUND).entity("Template Error").build();
        });
    }


    @PUT
    @Path("/update-node-template/{id}")
    public Uni<Response> updateTemplate(@PathParam("id") Long id, NodeBean bean) {
        LOGGER.info(bean.nodeAttribute);
        LOGGER.info("Updating Template entry with key " + id);
        return service.updateNodeTemplate(id, bean);
    }
}
