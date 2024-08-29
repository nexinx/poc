/*
 * Copyright (c) 2024 nexinx. All rights reserved.
 */
package com.nexinx.api.auth;

import com.nexinx.api.common.ConfigService;
import com.nexinx.api.common.PasswordUtils;
import com.nexinx.api.user.UserEntity;
import io.quarkus.hibernate.reactive.panache.Panache;
import io.quarkus.hibernate.reactive.panache.common.WithSession;
import io.quarkus.hibernate.reactive.panache.common.WithTransaction;
import io.smallrye.jwt.build.Jwt;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpSession;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

import static jakarta.ws.rs.core.Response.Status.CREATED;
import static org.jboss.resteasy.reactive.RestResponse.Status.INTERNAL_SERVER_ERROR;


@ApplicationScoped
public class AuthService {
    private static final Logger LOGGER = Logger.getLogger(AuthService.class.getName());

//    @Context
//    HttpSession session;

    @Inject
    ConfigService configService;

    @WithSession
    public Uni<Response> authenticateUser(String username, String password) {
        return UserEntity.find("userEmail", username).firstResult()
                .onItem().transformToUni(user -> {
                    if (user == null) {
                        return Uni.createFrom().item(Response.status(Response.Status.UNAUTHORIZED).entity("User not found").build());
                    }
                    try {
                        UserEntity userEntity = (UserEntity) user;
                        if (PasswordUtils.verifyPassword(password, userEntity.getUserPass(), userEntity.getUserSalt())) {

                            String token = generateJwt(username);
//                            session.setAttribute("token", token);
                            return Uni.createFrom().item(Response.ok(token).build());
                        } else {
                            return Uni.createFrom().item(Response.status(Response.Status.UNAUTHORIZED).entity("Invalid credentials").build());
                        }
                    } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
                        LOGGER.error("Error verifying credentials", e);
                        return Uni.createFrom().item(Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Error verifying credentials").build());
                    }
                });
    }

    /**
     * Generate Json Web Token(JWT)
     * @param username
     * @return
     */
    private String generateJwt(String username) {
        return Jwt.issuer(configService.getJwtIssuer())
                .upn(username)
                .groups("USER")
                .expiresAt(System.currentTimeMillis() / 1000 + configService.getJwtTokenExpire()) // expires in 1 hour
                .sign();
    }
}
