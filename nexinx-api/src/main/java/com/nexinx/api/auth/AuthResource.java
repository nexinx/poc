/*
 * Copyright (c) 2024 nexinx All rights reserved.
 */
package com.nexinx.api.auth;

import com.nexinx.api.user.UserEntity;
import com.nexinx.api.user.UserService;
import io.smallrye.mutiny.Uni;
import jakarta.annotation.security.PermitAll;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpSession;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;


@Path("/auth")
@ApplicationScoped
public class AuthResource {

    @Inject
    AuthService authService;

    @Inject
    UserService userService;


    @POST
    @Path("/register")
    @Consumes("application/json")
    public Uni<Response> createEntry(UserEntity user) {
        if (user == null || user.getId() != null) {
            throw new WebApplicationException("Id was invalidly set on request.", 422);
        }
        return userService.createUser(user);
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Uni<Response> login(@FormParam("username") String username, @FormParam("password") String password) {
        return authService.authenticateUser(username, password);
    }

    @POST
    @Path("/logout")
    @PermitAll
    public Response logout() {
//        session.invalidate();
        return Response.ok("Logged out").build();
    }
}
