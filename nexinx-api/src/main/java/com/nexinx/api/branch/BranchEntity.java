/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.branch;
import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.Instant;

@Entity
@Table(name = "branch")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class BranchEntity extends PanacheEntityBase {
    @Id
    @SequenceGenerator(name = "BranchSeq", sequenceName = "Branch_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "BranchSeq")
    private Long id;

    @Column(name = "branch_name")
    private String branchName;

    @Column(name = "branch_code")
    private String branchCode;

    @Column(name = "branch_country")
    private String branchCountry;

    @Column(name = "branch_region")
    private String branchRegion;

    @Column(name = "branch_city")
    private String branchCity;

    @Column(name = "branch_phone")
    private String branchPhone;

    @Column(name = "branch_email")
    private String branchEmail;

    @Column(name = "epaper_count")
    private String epaperCount;

    @Column(name = "station_count")
    private String stationCount;

    @Column(name = "organization_id")
    private String organizationId;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;
}
