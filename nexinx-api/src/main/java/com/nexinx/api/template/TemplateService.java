/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.template;

import com.nexinx.api.common.XslTemplateRenderer;

import io.quarkus.hibernate.reactive.panache.Panache;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.Response;

import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import static jakarta.ws.rs.core.Response.Status.CREATED;
import static jakarta.ws.rs.core.Response.Status.NOT_FOUND;
import static jakarta.ws.rs.core.Response.Status.NO_CONTENT;


@ApplicationScoped
public class TemplateService {

    /**
     * Extract all element of Template entity
     *
     * @return
     */

    @Inject
    XslTemplateRenderer xslTemplateRenderer;

    public Uni<List<TemplateEntity>> getAllTemplate() {
        return TemplateEntity.listAll();
    }

    public Uni<TemplateEntity> findItemById(Long id) {
        return TemplateEntity.findById(id);
    }

    /**
     * Retrieve all TemplateEntity instances asynchronously
     *
     * @return
     */
    public Uni<Map<String, Long>> getAllTemplateNames() {
        Map<String, Long> templateNameIndex = new HashMap<>();
        return TemplateEntity.<TemplateEntity>listAll()
                .onItem().transformToUni(templateEntities -> {
                    // Map TemplateEntity instances to their names and IDs
                    templateEntities.stream()
                            .peek(entity -> templateNameIndex.put(entity.getTemplateName(), entity.getId()))
                            .map(TemplateEntity::getTemplateName)
                            .collect(Collectors.toList());
                    // Return the map of template names and IDs wrapped in a Uni
                    return Uni.createFrom().item(templateNameIndex);
                });
    }

//    public Uni<List<String>> getAllTemplateNames() {
//        return TemplateEntity.<TemplateEntity>listAll()
//                .onItem().transformToUni(templateEntities -> {
//                    // Map TemplateEntity instances to their names and collect them into a list
//                    List<String> templateNames = templateEntities.stream()
//                            .map(TemplateEntity::getTemplateName)
//                            .collect(Collectors.toList()); // Collect names into a list
//                    return Uni.createFrom().item(templateNames); // Return the list as a Uni
//                });
//    }

    public Uni<List<TemplateEntity>> findAllByPage(int limit, int offset) {
        return TemplateEntity.findAll().page(limit, offset).list();
    }

    public Uni<Response> createTemplate(TemplateEntity template) {
        return Panache.withTransaction(() ->
                template.persist().replaceWith(() -> Response.ok(template).status(CREATED).build()));
    }

    public Uni<Response> updateTemplate(Long id, TemplateEntity updatedTemplate) {
        return Panache.withTransaction(() ->
                updatedTemplate.<TemplateEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {
                            entity.setTemplateName(updatedTemplate.getTemplateName());
                            entity.setTemplateSize(updatedTemplate.getTemplateSize());
                            entity.setTemplateAttribute(updatedTemplate.getTemplateAttribute());
                            entity.setTemplateRaw(updatedTemplate.getTemplateRaw());
                            entity.setLinkedProduct(updatedTemplate.getLinkedProduct());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }

    public Uni<Response> deleteTemplate(Long id) {
        return Panache.withTransaction(() -> TemplateEntity.deleteById(id))
                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
    }


    public CompletableFuture<String> buildTemplate(String template, String jsonAttributes) {
        return xslTemplateRenderer.buildTemplateFromJson(template, jsonAttributes);
    }


    public CompletableFuture<Map<String, String>> extractTemplateAttribute(String template) {
        return xslTemplateRenderer.extractTemplateAttribute(template);
    }
}
