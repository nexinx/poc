/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.node;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.PrePersist;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;


@Data
@Entity
@Table(name = "node")
@EqualsAndHashCode(callSuper = false)
public class NodeEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "node_attribute", columnDefinition = "TEXT")
    private String nodeAttribute;

    @Column(name = "node_coordinate", columnDefinition = "TEXT")
    private String nodeCoordinate;

    @Column(name = "processing_status")
    private String processingStatus;

    @Column(name = "template_name")
    private String templateName;

    @Column(name = "linked_rack")
    private String linkedRack;

    @Column(name = "epaper_count")
    private String epaperCount;

    @Column(name = "branch_id")
    private String branchId;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;

    @PrePersist
    private void prePersist() {
        if (processingStatus == null) {
            processingStatus = "INACTIVE";
        }
    }
}
