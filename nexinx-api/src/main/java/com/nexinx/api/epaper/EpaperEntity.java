/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.epaper;
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
import java.util.List;


@Data
@Entity
@Table(name = "epaper")
@EqualsAndHashCode(callSuper = false)
public class EpaperEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "identity_id")
    private String identityId;

    @Column(name = "node_id")
    private String nodeId;

    @Column(name = "station_id")
    private String stationId;

    @Column(name = "branch_id")
    private String branchId;

    @Column(name = "page_number")
    private String pageNumber;

    @Column(name = "battery_status")
    private String batteryStatus;

    @Column(name = "process_status")
    private String processStatus;

    @Column(name = "network_status")
    private String networkStatus;

    @Column(name = "signal_strength")
    private String signalStrength;

    @Column(name = "is_removed")
    private Boolean isRemoved;

    @Column(name = "technology")
    private String technology;

    @Column(name = "removed_at")
    private Instant removedAt;

    @Column(name = "started_at")
    private Instant startedAt;

    @Column(name = "completed_at")
    private Instant completedAt;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;

    public static Uni<List<EpaperEntity>> findEPaperByNodeId(String nodeId) {
        return find("nodeId", nodeId).list();
    }
}
