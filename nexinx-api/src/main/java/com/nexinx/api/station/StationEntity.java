/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.station;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;

@Data
@Entity
@Table(name = "station")
@EqualsAndHashCode(callSuper = false)
public class StationEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "station_id")
    private String stationId;

    @Column(name = "station_ip")
    private String stationIp;

    @Column(name = "station_port")
    private String stationPort;

    @Column(name = "is_Active")
    private String isActive;

    @Column(name = "branch_id")
    private String branchId;

    @Column(name = "branch_name")
    private String branchName;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;
}