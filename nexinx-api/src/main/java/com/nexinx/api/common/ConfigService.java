/*
 * Copyright (c) 2024 nexinx All rights reserved.
 */
package com.nexinx.api.common;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.ext.Provider;
import lombok.Getter;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@ApplicationScoped
@Provider
public class ConfigService {

    /**
     * Jwt url issuer validation
     */
    @Getter
    @ConfigProperty(name = "mp.jwt.verify.issuer")
    protected String jwtIssuer;


    @Getter
    @ConfigProperty(name = "jwt.token.expire")
    protected Long jwtTokenExpire;
}
