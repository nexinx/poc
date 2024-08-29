/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.station;

import io.quarkus.hibernate.reactive.panache.Panache;
import io.quarkus.hibernate.reactive.panache.common.WithSession;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.core.Response;

import java.time.Instant;
import java.util.List;

import static jakarta.ws.rs.core.Response.Status.CREATED;
import static jakarta.ws.rs.core.Response.Status.NOT_FOUND;
import static jakarta.ws.rs.core.Response.Status.NO_CONTENT;

@ApplicationScoped
public class StationService {

    @WithSession
    public Uni<List<StationEntity>> getAllStations() {
        return StationEntity.listAll();
    }

    public Uni<StationEntity> findItemById(Long id) {
        return StationEntity.findById(id);
    }

    public Uni<List<StationEntity>> findAllByPage(int limit, int offset) {
        return StationEntity.findAll().page(limit, offset).list();
    }

    public Uni<Response> createStation(StationEntity Station) {
        return Panache.withTransaction(() ->
                Station.persist().replaceWith(() -> Response.ok(Station).status(CREATED).build()));
    }

    public Uni<Response> updateStation(Long id, StationEntity Station) {
        return Panache.withTransaction(() ->
                Station.<StationEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {

                            entity.setStationId(Station.getStationId());
                            entity.setBranchId(Station.getBranchId());
                            entity.setStationIp(Station.getStationIp());
                            entity.setStationPort(Station.getStationPort());
                            entity.setIsActive(Station.getIsActive());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }


    public Uni<Response> deleteStation(Long id) {
        return Panache.withTransaction(() -> StationEntity.deleteById(id))
                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
    }
}
