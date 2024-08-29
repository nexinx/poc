/*
 * Copyright (c) 2024 nexinx. All rights reserved.
 */
package com.nexinx.api.user;

import com.nexinx.api.common.PasswordUtils;
import io.quarkus.hibernate.reactive.panache.Panache;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;

import java.time.Instant;
import java.util.Base64;
import java.util.List;

import static jakarta.ws.rs.core.Response.Status.CREATED;
import static jakarta.ws.rs.core.Response.Status.NOT_FOUND;
import static jakarta.ws.rs.core.Response.Status.NO_CONTENT;
import static org.jboss.resteasy.reactive.RestResponse.Status.INTERNAL_SERVER_ERROR;
import static org.jboss.resteasy.reactive.RestResponse.StatusCode.CONFLICT;

@ApplicationScoped
public class UserService {
    private static final Logger LOGGER = Logger.getLogger(UserResource.class.getName());

    public Uni<List<UserEntity>> getAllUser() {
        return UserEntity.listAll();
    }

    public Uni<UserEntity> findItemById(Long id) {
        return UserEntity.findById(id);
    }

    public Uni<List<UserEntity>> findAllByPage(int limit, int offset) {
        return UserEntity.findAll().page(limit, offset).list();
    }

    public Uni<Response> createUser(UserEntity user) {
        return UserEntity.findByEmail(user.getUserEmail())
                .onItem().ifNotNull().transform(existingUser -> {
                    return Response.ok(CONFLICT).entity(409).build();
                })
                .onItem().ifNull().switchTo(() -> {
                    // Email does not exist, proceed with user creation
                    try {
                        byte[] salt = PasswordUtils.generateSalt();
                        String encryptedPassword = PasswordUtils.hashPassword(user.getUserPass(), salt);
                        user.setUserSalt(Base64.getEncoder().encodeToString(salt));
                        user.setUserPass(encryptedPassword);
                    } catch (Exception e) {
                        return Uni.createFrom().item(() -> Response.status(INTERNAL_SERVER_ERROR).entity("Error encrypting password").build());
                    }
                    return Panache.withTransaction(user::persist)
                            .replaceWith(() -> Response.ok(user).status(CREATED).build());
                });
    }

    public Uni<Response> updateUser(Long id, UserEntity updatedUser) {
        return Panache.withTransaction(() ->
                updatedUser.<UserEntity>findById(id)
                        .onItem().ifNotNull().transform(entity -> {
                            entity.setUserFirstName(updatedUser.getUserFirstName());
                            entity.setUserLastName(updatedUser.getUserLastName());
                            entity.setUserEmail(updatedUser.getUserEmail());
                            entity.setUserPass(updatedUser.getUserPass());
                            entity.setUserSalt(updatedUser.getUserSalt());
                            entity.setUserMobile(updatedUser.getUserMobile());
                            entity.setUserRoles(updatedUser.getUserRoles());
                            entity.setIsActive(updatedUser.getIsActive());
                            entity.setIsVerified(updatedUser.getIsVerified());
                            entity.setValidUntil(updatedUser.getValidUntil());
                            entity.setLastLogin(updatedUser.getLastLogin());
                            entity.setPasswordRequestedAt(updatedUser.getPasswordRequestedAt());
                            entity.setCreatedAt(updatedUser.getCreatedAt());
                            entity.setUpdatedAt(Instant.now());
                            entity.persist();
                            return Response.ok(entity).build();
                        }).onItem().ifNull().continueWith(Response.ok().status(NOT_FOUND)::build)
        );
    }

    public Uni<Response> deleteUser(Long id) {
        return Panache.withTransaction(() -> UserEntity.deleteById(id))
                .map(deleted -> deleted ? Response.ok().status(NO_CONTENT).build() : Response.ok().status(NOT_FOUND).build());
    }
}
