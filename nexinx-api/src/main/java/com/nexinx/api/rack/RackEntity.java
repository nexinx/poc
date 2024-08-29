/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.rack;
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
@Table(name = "rack")
@EqualsAndHashCode(callSuper = false)
public class RackEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "rack_name")
    private String rackName;

    @Column(name = "rack_details")
    private String rackDetails;

    @Column(name = "rack_area")
    private String rackArea;

    @Column(name = "rack_image")
    private String rackImage;

    @Column(name = "epaper_count")
    private String epaperCount;

    @Column(name = "station_count")
    private String stationCount;

    @Column(name = "branch_id")
    private String storeId;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;
}