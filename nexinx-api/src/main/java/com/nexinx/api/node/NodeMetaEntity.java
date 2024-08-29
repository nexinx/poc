/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.node;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import io.smallrye.mutiny.Uni;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;

@Data
@Entity
@Table(name = "node_meta")
@EqualsAndHashCode(callSuper = false)
public class NodeMetaEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "node_id")
    private String nodeId;

    @Column(name = "node_image", columnDefinition = "TEXT")
    private String nodeImage;

    @Column(name = "node_template", columnDefinition = "TEXT")
    private String nodeTemplate;

    @Column(name = "epaper_id")
    private String epaperId;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;

    public static Uni<NodeMetaEntity> findByNodeId(String nodeId) {
        return find("nodeId", nodeId).firstResult();
    }
}


