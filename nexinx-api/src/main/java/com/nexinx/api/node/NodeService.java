/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.node;

import com.nexinx.api.common.XslTemplateRenderer;
import com.nexinx.api.common.bean.NodeBean;
import io.quarkus.hibernate.reactive.panache.Panache;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;

import java.time.Instant;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import static jakarta.ws.rs.core.Response.Status.CREATED;
import static jakarta.ws.rs.core.Response.Status.NOT_FOUND;
import static jakarta.ws.rs.core.Response.Status.NO_CONTENT;

@ApplicationScoped
public class NodeService {
    private static final Logger LOGGER = Logger.getLogger(NodeService.class.getName());

    @Inject
    XslTemplateRenderer xslTemplateRenderer;

    public Uni<List<NodeEntity>> getAllNode() {
        return NodeEntity.listAll();
    }


    /**
     * Combine NodeEntity and NodeMetaEntity in Single Query
     *
     * @param id
     * @return
     */
    public Uni<NodeBean> findItemByIdNodeAndMeta(Long id) {
        Uni<NodeEntity> nodeEntityUni = NodeEntity.findById(id);
        return nodeEntityUni.onItem().transformToUni(nodeEntity -> {
            if (nodeEntity == null) {
                // Handle case where NodeEntity is not found
                LOGGER.error("NodeEntity not found for id: " + id);
                return Uni.createFrom().nullItem();
            } else {
                return NodeMetaEntity.findByNodeId(nodeEntity.getId().toString())
                        .onItem().transform(nodeMetaEntity -> {
                            if (nodeMetaEntity == null) {
                                LOGGER.error("NodeMetaEntity not found for NodeEntity id: " + nodeEntity.getId());
                                return null;
                            } else {
                                return new NodeBean()
                                        .setNodeId(nodeEntity.getId())
                                        .setNodeImage(nodeMetaEntity.getNodeImage())
                                        .setNodeTemplate(nodeMetaEntity.getNodeTemplate())
                                        .setNodeAttribute(nodeEntity.getNodeAttribute())
                                        .setNodeCoordinate(nodeEntity.getNodeCoordinate())
                                        .setProcessingStatus(nodeEntity.getProcessingStatus())
                                        .setTemplateName(nodeEntity.getTemplateName())
                                        .setTemplateId(nodeMetaEntity.getId())
                                        .setLinkedRack(nodeEntity.getLinkedRack())
                                        .setEpaperCount(nodeEntity.getEpaperCount())
                                        .setBranchId(nodeEntity.getBranchId())
                                        .setEpaperId(nodeMetaEntity.getEpaperId());
                            }
                        });
            }
        }).onFailure().invoke(ex -> LOGGER.error("Failed to fetch NodeEntity or NodeMetaEntity for id: " + id, ex));
    }

    public Uni<NodeEntity> findItemById(Long id) {
        return NodeEntity.findById(id);
    }

    public Uni<NodeMetaEntity> findNodeMetaById(Long id) {
        return NodeMetaEntity.findByNodeId(id.toString());
    }


    public Uni<List<NodeEntity>> findAllByPage(int limit, int offset) {
        return NodeEntity.findAll().page(limit, offset).list();
    }

    /**
     * Save Product Node and Node Meta Together
     *
     * @param node
     * @return
     */
    public Uni<Response> createNode(NodeBean node) {
        NodeEntity entity = new NodeEntity();
        entity.setNodeAttribute(node.getNodeAttribute());
        entity.setNodeCoordinate(node.getNodeCoordinate());
        entity.setTemplateName(node.getTemplateName());
        entity.setLinkedRack(node.getLinkedRack());
        entity.getProcessingStatus();
        return Panache.withTransaction(() -> entity.persist().replaceWith(entity)
        ).flatMap(persistedEntity -> {
            NodeMetaEntity metaEntity = new NodeMetaEntity();
            metaEntity.setNodeId(persistedEntity.getId().toString()); // Set the ID from the persisted NodeEntity
            metaEntity.setNodeImage(node.getNodeImage());
            metaEntity.setNodeTemplate(node.getNodeTemplate());
            return Panache.withTransaction(() -> metaEntity.persist().replaceWith(persistedEntity));
        }).map(persistedEntity ->
                Response.ok(persistedEntity).status(CREATED).build()
        );
    }

    public Uni<Response> updateNode(Long id, NodeEntity updatedNode) {
        return Panache.withTransaction(() ->
                updatedNode.<NodeEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {
                            entity.setNodeAttribute(updatedNode.getNodeAttribute());
                            entity.setNodeCoordinate(updatedNode.getNodeCoordinate());
                            entity.setProcessingStatus(updatedNode.getProcessingStatus());
                            entity.setTemplateName(updatedNode.getTemplateName());
                            entity.setLinkedRack(updatedNode.getLinkedRack());
                            entity.setEpaperCount(updatedNode.getEpaperCount());
                            entity.setBranchId(updatedNode.getBranchId());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }

//    public Uni<Response> deleteNode(Long id) {
//        return Panache.withTransaction(() -> NodeEntity.deleteById(id))
//                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
//    }

    /**
     * Delete NodeEntity and NodeMeta Entity By Id
     *
     * @param id
     * @return
     */
    public Uni<Response> deleteNode(Long id) {
        return Panache.withTransaction(() -> {
            return NodeEntity.deleteById(id)
                    .flatMap(deletedNodeEntity -> {
                        if (deletedNodeEntity) {
                            return NodeMetaEntity.delete("nodeId", id)
                                    .map(deletedNodeMetaEntity -> {
                                        return Response.ok().status(NO_CONTENT).build(); // Return success response
                                    });
                        } else {
                            return Uni.createFrom().item(Response.ok().status(NO_CONTENT).build());
                        }
                    });
        });
    }

    public CompletableFuture<String> buildTemplateFromNode(String template, String jsonAttributes) {
        return xslTemplateRenderer.buildTemplateFromJson(template, jsonAttributes);
    }



    public Uni<Response> updateNodeTemplate(Long id, NodeBean updatedNode) {
        return Panache.withTransaction(() ->

                NodeEntity.<NodeEntity>findById(id)
                        .onItem().ifNotNull().transformToUni(entity -> {
                            entity.setNodeAttribute(updatedNode.getNodeAttribute());
                            entity.setUpdatedAt(Instant.now());

                            return entity.persist().chain(() ->
                                    NodeMetaEntity.findByNodeId(id.toString()).onItem().ifNotNull().invoke(metaEntity -> {
                                        metaEntity.setNodeImage(updatedNode.getNodeImage());
                                        metaEntity.setUpdatedAt(Instant.now());
                                        metaEntity.persist();
                                    })
                            ).replaceWith(Response.ok(entity).build());
                        }).onItem().ifNull().continueWith(Response.status(Response.Status.NOT_FOUND)::build)
        );
    }
}
