/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.common.bean;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TemplateBean {

    @JsonProperty("templateId")
    public Long templateId;

    @JsonProperty("templateAttribute")
    public String templateAttribute;
}
