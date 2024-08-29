/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.userRole;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import io.smallrye.mutiny.Uni;

import java.util.List;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;

import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
import org.jboss.logging.Logger;

@Path("roles")
@Produces("application/json")
@Consumes("application/json")
public class RoleResource {
    private static final Logger LOGGER = Logger.getLogger(RoleResource.class.getName());
    @Inject
    RoleService service;


    @GET
    public Uni<List<RoleEntity>> getAllEntry() {
        return service.getAllRole();
    }

    @Path("{id}")
    public Uni<RoleEntity> getSingleEntry(@PathParam("id") Long id) {
        return service.findItemById(id);
    }

    @GET
    @Path("/{limit}/{offset}")
    // limit= item per page, offset = page number. if 6 element and per page 3 than total 2 page. so limit = 3, page =1 but url param=0 and page 2 but url param= 3
    public Uni<List<RoleEntity>> getEntryByPage(int limit, int offset) {
        return service.findAllByPage(limit, offset);
    }

    @POST
    public Uni<Response> createEntry(RoleEntity role) {
        if (role == null || role.getId() != null) {
            throw new WebApplicationException("Id was invalidly set on request.", 422);
        }
        return service.createRole(role);
    }

    @PUT
    @Path("{key}")
    public Uni<Response> updateEntry(@PathParam("key") Long key, RoleEntity role) {
        if (role == null) {
            throw new WebApplicationException("User name was not set on request.", 422);
        }
        return service.updateRole(key, role);
    }

    @DELETE
    @Path("{key}")
    public Uni<Response> deleteEntry(@PathParam("key") Long key) {
        return service.deleteRole(key);
    }
}
