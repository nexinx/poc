/*
 * Copyright (c) 2024 nexinx. All rights reserved.
 */
package com.nexinx.api.user;
import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import io.smallrye.mutiny.Uni;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;


@Data
@Entity
@Table(name = "users")
@EqualsAndHashCode(callSuper = false)
public class UserEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_fname")
    private String userFirstName;

    @Column(name = "user_lname")
    private String userLastName;

    @Column(name = "user_email", unique = true)
    private String userEmail;

    @Column(name = "user_pass")
    private String userPass;

    @Column(name = "user_salt")
    private String userSalt;

    @Column(name = "user_mobile")
    private String userMobile;

    @Column(name = "user_Roles")
    private String userRoles;

    @Column(name = "is_Active")
    private Boolean isActive;

    @Column(name = "is_verified")
    private Boolean isVerified;

    @Column(name = "valid_until")
    private Instant validUntil;

    @Column(name = "last_login")
    private Instant lastLogin;

    @Column(name = "password_requested_at")
    private Instant passwordRequestedAt;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;

    // Static methods for querying
    public static Uni<UserEntity> findByEmail(String userEmail) {
        return find("userEmail", userEmail).firstResult();
    }

    @PrePersist
    @PreUpdate
    private void ensureEmailIsLowercase() {
        if (userEmail != null) {
            userEmail = userEmail.toLowerCase();
        }
    }

    public boolean validatePassword(String password) {
        return this.userPass.equals(password);
    }
//    public Set<String> getRoles() {
//        return Stream.of(userRoles.split(",")).collect(Collectors.toSet());
//    }
}