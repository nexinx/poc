package com.nexinx.api.common.bean;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class NodeBean {

    @JsonProperty("nodeId")
    public Long nodeId;

    @JsonProperty("nodeImage")
    public String nodeImage;

    @JsonProperty("nodeTemplate")
    public String nodeTemplate;

    @JsonProperty("nodeAttribute")
    public String nodeAttribute;

    @JsonProperty("nodeCoordinate")
    public String nodeCoordinate;

    @JsonProperty("processingStatus")
    public String processingStatus;

    @JsonProperty("templateName")
    public String templateName;

    @JsonProperty("templateId")
    public Long templateId;

    @JsonProperty("linkedRack")
    public String linkedRack;

    @JsonProperty("epaperCount")
    public String epaperCount;

    @JsonProperty("branchId")
    public String branchId;

    @Column(name = "epaperId")
    public String epaperId;
}
