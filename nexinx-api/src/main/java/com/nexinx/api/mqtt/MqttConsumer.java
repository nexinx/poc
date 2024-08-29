package com.nexinx.api.mqtt;

import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.eclipse.microprofile.reactive.messaging.Message;
import org.jboss.logging.Logger;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;


public class MqttConsumer {

    private static final Logger LOGGER = Logger.getLogger(MqttConsumer.class);

    @Incoming("esl-message-in")
    protected CompletionStage<Void> receiveMessage(Message<byte[]>  message) {
        return CompletableFuture.runAsync(() -> this.processMessageAsync(message))
            .exceptionally(e -> {
                LOGGER.error("Incoming message could not process due to exception ", e);
                message.nack(e); // Negatively acknowledge the message in case of failure
                return null;
            });
    }

      protected void processMessageAsync(Message<byte[]> incomingMessage) {
        try {
            byte[] payload = incomingMessage.getPayload();
            String messageString = new String(payload);  // Convert byte[] to String
            
            LOGGER.info("Received raw message: " + messageString);
        
        } catch (Exception e) {
            LOGGER.error("Error processing message", e);
            incomingMessage.nack(e);
        }
    }
}
