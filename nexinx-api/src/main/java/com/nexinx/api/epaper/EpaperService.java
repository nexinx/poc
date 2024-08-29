/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.epaper;
import io.quarkus.hibernate.reactive.panache.Panache;

import io.quarkus.hibernate.reactive.panache.common.WithSession;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;

import java.time.Instant;
import java.util.List;

import static jakarta.ws.rs.core.Response.Status.CREATED;
import static jakarta.ws.rs.core.Response.Status.NOT_FOUND;
import static jakarta.ws.rs.core.Response.Status.NO_CONTENT;

@ApplicationScoped
public class EpaperService {

    private static final Logger LOGGER = Logger.getLogger(EpaperService.class.getName());

    @WithSession
    public Uni<List<EpaperEntity>> getAllEpaper() {
        LOGGER.info("Fetching all ePapers");
        return EpaperEntity.listAll();
    }

    @WithSession
    public Uni<EpaperEntity> findItemById(Long id) {
        LOGGER.info("Fetching Single ePaper");
        return EpaperEntity.findById(id);
    }


    @WithSession
    public Uni<List<EpaperEntity>> findItemByNodeId(Long id) {
        LOGGER.info("Fetching Single ePaper With Node Id " + id );
        return EpaperEntity.findEPaperByNodeId(id.toString());
    }


    public Uni<List<EpaperEntity>> findAllByPage(int limit, int offset) {
        return EpaperEntity.findAll().page(limit, offset).list();
    }

    public Uni<Response> createEpaper(EpaperEntity epaper) {
        return Panache.withTransaction(() ->
                epaper.persist().replaceWith(() -> Response.ok(epaper).status(CREATED).build()));
    }

    public Uni<Response> updateEpaper(Long id, EpaperEntity updatedEpaper) {
        return Panache.withTransaction(() ->
                updatedEpaper.<EpaperEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {
                            entity.setIdentityId(updatedEpaper.getIdentityId());
                            entity.setNodeId(updatedEpaper.getNodeId());
                            entity.setStationId(updatedEpaper.getStationId());
                            entity.setPageNumber(updatedEpaper.getPageNumber());
                            entity.setBatteryStatus(updatedEpaper.getBatteryStatus());
                            entity.setProcessStatus(updatedEpaper.getProcessStatus());
                            entity.setNetworkStatus(updatedEpaper.getNetworkStatus());
                            entity.setSignalStrength(updatedEpaper.getSignalStrength());
                            entity.setIsRemoved(updatedEpaper.getIsRemoved());
                            entity.setTechnology(updatedEpaper.getTechnology());
                            entity.setRemovedAt(updatedEpaper.getRemovedAt());
                            entity.setStartedAt(updatedEpaper.getStartedAt());
                            entity.setCompletedAt(updatedEpaper.getCompletedAt());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }
    public Uni<Response> deleteEpaper(Long id) {
        return Panache.withTransaction(() -> EpaperEntity.deleteById(id))
                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
    }
}
