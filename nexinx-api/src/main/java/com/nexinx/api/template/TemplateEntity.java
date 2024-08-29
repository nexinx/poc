/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.template;
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
@Table(name = "template")
@EqualsAndHashCode(callSuper = false)
public class TemplateEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "template_name")
    private String templateName;

    @Column(name = "template_size")
    private String templateSize;

    @Column(name = "template_attribute", columnDefinition = "TEXT")
    private String templateAttribute;

    @Column(name = "template_raw", columnDefinition = "TEXT")
    private String templateRaw;

    @Column(name = "linked_node")
    private String linkedProduct;

    @Column(name = "created_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMPTZ DEFAULT NOW()")
    private Instant updatedAt;
}
