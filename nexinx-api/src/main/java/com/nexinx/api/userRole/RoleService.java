/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.userRole;

import io.quarkus.hibernate.reactive.panache.Panache;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;

import java.time.Instant;
import java.util.List;

import static jakarta.ws.rs.core.Response.Status.*;

@ApplicationScoped
public class RoleService {
    private static final Logger LOGGER = Logger.getLogger(RoleResource.class.getName());

    public Uni<List<RoleEntity>> getAllRole() {
        return RoleEntity.listAll();
    }

    public Uni<RoleEntity> findItemById(Long id) {
        return RoleEntity.findById(id);
    }

    public Uni<List<RoleEntity>> findAllByPage(int limit, int offset) {
        return RoleEntity.findAll().page(limit, offset).list();
    }

    public Uni<Response> createRole(RoleEntity role) {
        return Panache.withTransaction(role::persist)
                .replaceWith(() -> Response.ok(role).status(CREATED).build());
    }

    public Uni<Response> updateRole(Long id, RoleEntity updateRole) {
        return Panache.withTransaction(() ->
                updateRole.<RoleEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {
                            entity.setRoleName(updateRole.getRoleName());
                            entity.setRoleDescription(updateRole.getRoleDescription());
                            entity.setCreatedAt(updateRole.getCreatedAt());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }

    public Uni<Response> deleteRole(Long id) {
        return Panache.withTransaction(() -> RoleEntity.deleteById(id))
                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
    }
}
