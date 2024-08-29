/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.station;

import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import io.quarkus.security.Authenticated;
import io.smallrye.mutiny.Uni;

import java.util.List;


import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;

import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
import org.jboss.logging.Logger;



@Path("stations")
@Produces("application/json")
@Consumes("application/json")
public class StationResource {

    private static final Logger LOGGER = Logger.getLogger(StationResource.class.getName());

    @Inject
    StationService service;


    @GET
    public Uni<List<StationEntity>> getAllEntry() {
        return service.getAllStations();
    }


    @Path("{id}")
    public Uni<StationEntity> getSingleEntry(@PathParam("id") Long id) {
        return service.findItemById(id);
    }

    @GET
    @Path("/{limit}/{offset}")
    // limit= item per page, offset = page number. if 6 element and per page 3 than total 2 page. so limit = 3, page =1 but url param=0 and page 2 but url param= 3
    public Uni<List<StationEntity>> getEntryByPage(int limit, int offset) {
        return service.findAllByPage(limit, offset);
    }

    @POST
    public Uni<Response> createEntry(StationEntity station) {
        if (station == null) {
            throw new WebApplicationException("Id was invalidly set on request.", 422);
        }
        LOGGER.info("New Station is created");
        return service.createStation(station);
    }

    @PUT
    @Path("{key}")
    public Uni<Response> updateEntry(@PathParam("key") Long key, StationEntity station) {
        if (station == null) {
            throw new WebApplicationException("Station data in empty.", 422);
        }
        LOGGER.info("A station is updated with id: " + key);
        return service.updateStation(key, station);
    }

    @DELETE
    @Path("{key}")
    public Uni<Response> deleteEntry(@PathParam("key") Long key) {
        LOGGER.info("A Station is deleted with id: " + key);
        return service.deleteStation(key);
    }
}
