package com.nexinx.api.common.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.smallrye.mutiny.CompositeException;
import jakarta.inject.Inject;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import org.jboss.logging.Logger;

@Provider
public class GlobalExceptionMapper implements ExceptionMapper<Throwable> {

    private static final Logger LOGGER = Logger.getLogger(GlobalExceptionMapper.class.getName());

    @Inject
    ObjectMapper objectMapper;

    @Override
    public Response toResponse(Throwable throwable) {
        LOGGER.error("Failed to handle request", throwable);
        int code = 500;

        if (throwable instanceof WebApplicationException) {
            code = ((WebApplicationException) throwable).getResponse().getStatus();
        }

        if (throwable instanceof NotFoundException) {
            code = Response.Status.NOT_FOUND.getStatusCode();
        }

        if (throwable instanceof CompositeException) {
            throwable = ((CompositeException) throwable).getCause();
        }

        ObjectNode exceptionJson = objectMapper.createObjectNode();
        exceptionJson.put("exceptionType", throwable.getClass().getName());
        exceptionJson.put("code", code);

        if (throwable.getMessage() != null) {
            exceptionJson.put("error", throwable.getMessage());
        }

        return Response.status(code)
                .entity(exceptionJson)
                .build();
    }
}
