/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.branch;

import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;
import org.jboss.logging.Logger;

@Path("branchs")
@Produces("application/json")
@Consumes("application/json")
public class BranchResource {
    private static final Logger LOGGER = Logger.getLogger(BranchResource.class.getName());
    @Inject
    BranchService service;

    @Operation(operationId = "AllElement", summary = "show all element")
    @APIResponses(
            value = {
                    @APIResponse(
                            responseCode = "200",
                            description = "Show all element."
                    )
            }
    )
    @GET
    public Uni<List<BranchEntity>> getAllEntry() {
        return service.getAllBranchs();
    }


    @Operation(operationId = "SingleElement", summary = "show single element")
    @APIResponses(
            value = {
                    @APIResponse(
                            responseCode = "200",
                            description = "Show single element."
                    )
            }
    )
    @GET
    @Path("{key}")
    public Uni<BranchEntity> getSingleEntry(@PathParam("key") Long key) {
        return service.findItemById(key);
    }

    @GET
    @Path("branch-name")
    public Uni<Map<String, Long>> getBranchName() {
        return service.getBranchName();
    }


    @Operation(operationId = "ElementShowByPage", summary = "show element by page")
    @APIResponses(
            value = {
                    @APIResponse(
                            responseCode = "209",
                            description = "Show element by page."
                    )
            }
    )
    @GET
    @Path("/{limit}/{offset}")
    // limit= item per page, offset = page number. if 6 element and per page 3 than total 2 page. so limit = 3, page =1 but url param=0 and page 2 but url param= 3
    public Uni<List<BranchEntity>> getEntryByPage(@PathParam("limit") int limit, @PathParam("offset") int offset) {
        return service.findAllByPage(limit, offset);
    }

    @Operation(operationId = "create", summary = "create entry")
    @APIResponses(
            value = {
                    @APIResponse(
                            responseCode = "201",
                            description = "Entry created."
                    ),
                    @APIResponse(
                            responseCode = "406",
                            description = "Entry not created."
                    ),
                    @APIResponse(
                            responseCode = "401",
                            description = "Unauthorized to create entry."
                    )
            }
    )
    @POST
    public Uni<Response> createEntry(BranchEntity branch) {
        if (branch == null || branch.getId() != null) {
            throw new WebApplicationException("Id was invalidly set on request.", 422);
        }
        return service.createBranch(branch);
    }

    @APIResponses(
            value = {
                    @APIResponse(
                            responseCode = "204",
                            description = "Entry updated."
                    ),
                    @APIResponse(
                            responseCode = "401",
                            description = "Unauthorized to update entry."
                    )
            }
    )
    @PUT
    @Path("{key}")
    public Uni<Response> updateEntry(@PathParam("key") Long key, BranchEntity branch) {
        LOGGER.info("Updating branch entry with key " + key);
        if (branch == null || branch.getBranchName() == null) {
            throw new WebApplicationException("Branch name was not set on request.", 422);
        }
        return service.updateBranch(key, branch);
    }

    @DELETE
    @Path("{key}")
    @Operation(summary = "delete entry via its key")
    @APIResponses(
            value = {
                    @APIResponse(
                            responseCode = "201",
                            description = "Entry deleted."
                    ),
                    @APIResponse(
                            responseCode = "406",
                            description = "Entry not deleted."
                    ),
                    @APIResponse(
                            responseCode = "401",
                            description = "Unauthorized to delete entry for plant"
                    )
            }
    )
    public Uni<Response> deleteEntry(@PathParam("key") Long key) {
        return service.deleteBranch(key);
    }
}
