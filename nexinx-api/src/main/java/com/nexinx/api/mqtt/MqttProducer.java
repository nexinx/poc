package com.nexinx.api.mqtt;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;



import java.util.UUID;

@Path("/mqtt")
public class MqttProducer {

    @Channel("esl-message-out")
    Emitter<String> quoteRequestEmitter;

    @POST
    @Path("/send")
    @Produces(MediaType.TEXT_PLAIN)
    public String createRequest() {
        UUID uuid = UUID.randomUUID();
        quoteRequestEmitter.send(uuid.toString());
        return uuid.toString();
    }


//  @Channel("quotes") Multi<Quote> quotes;



}
