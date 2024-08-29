/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.branch;

import io.quarkus.hibernate.reactive.panache.Panache;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.core.Response;

import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static jakarta.ws.rs.core.Response.Status.NO_CONTENT;
import static jakarta.ws.rs.core.Response.Status.CREATED;
import static jakarta.ws.rs.core.Response.Status.NOT_FOUND;


@ApplicationScoped
public class BranchService {

    public Uni<List<BranchEntity>> getAllBranchs() {
        return BranchEntity.listAll();
    }

    public Uni<BranchEntity> findItemById(Long id) {
        return BranchEntity.findById(id);
    }

    public Uni<Map<String, Long>> getBranchName() {
        Map<String, Long> branchNameIndex = new HashMap<>();
        return BranchEntity.<BranchEntity>listAll()
                .onItem().transformToUni(branchEntities -> {
                    branchEntities.stream()
                            .peek(entity -> branchNameIndex.put(entity.getBranchName(), entity.getId()))
                            .map(BranchEntity::getBranchName)
                            .collect(Collectors.toList());
                    return Uni.createFrom().item(branchNameIndex);
                });
    }


    public Uni<List<BranchEntity>> findAllByPage(int limit, int offset) {
        return BranchEntity.findAll().page(limit, offset).list();
    }

    public Uni<Response> createBranch(BranchEntity branch) {
        return Panache.withTransaction(() ->
                branch.persist().replaceWith(() -> Response.ok(branch).status(CREATED).build()));
    }

    public Uni<Response> updateBranch(Long id, BranchEntity Branch) {
        return Panache.withTransaction(() ->
                Branch.<BranchEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {

                            entity.setBranchName(Branch.getBranchName());
                            entity.setBranchCode(Branch.getBranchCode());
                            entity.setBranchCountry(Branch.getBranchCountry());
                            entity.setBranchRegion(Branch.getBranchRegion());
                            entity.setBranchCity(Branch.getBranchCity());
                            entity.setBranchPhone(Branch.getBranchPhone());
                            entity.setBranchEmail(Branch.getBranchEmail());
                            entity.setEpaperCount(Branch.getEpaperCount());
                            entity.setStationCount(Branch.getStationCount());
                            entity.setOrganizationId(Branch.getOrganizationId());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }


    public Uni<Response> deleteBranch(Long id) {
        return Panache.withTransaction(() -> BranchEntity.deleteById(id))
                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
    }
}