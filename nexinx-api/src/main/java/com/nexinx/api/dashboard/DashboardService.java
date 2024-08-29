/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.dashboard;

import com.nexinx.api.branch.BranchEntity;
import com.nexinx.api.epaper.EpaperEntity;
import com.nexinx.api.node.NodeEntity;
import com.nexinx.api.rack.RackEntity;
import com.nexinx.api.station.StationEntity;
import com.nexinx.api.template.TemplateEntity;
import com.nexinx.api.user.UserEntity;
import io.quarkus.hibernate.reactive.panache.common.WithSession;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.HashMap;
import java.util.Map;

@ApplicationScoped
public class DashboardService {

    @WithSession
    public Uni<Map<String, Long>> getTotals() {
        Map<String, Long> totals = new HashMap<>();
        return NodeEntity.count()
                .flatMap(nodeCount -> {
                    totals.put("total_nodes", nodeCount);
                    return EpaperEntity.count();
                })
                .flatMap(epaperCount -> {
                    totals.put("total_epapers", epaperCount);
                    return StationEntity.count();
                })
                .flatMap(stationCount -> {
                    totals.put("total_stations", stationCount);
                    return TemplateEntity.count();
                })
                .flatMap(templateCount -> {
                    totals.put("total_templates", templateCount);
                    return RackEntity.count();
                })
                .flatMap(rackCount -> {
                    totals.put("total_racks", rackCount);
                    return UserEntity.count();
                })
                .flatMap(userCount -> {
                    totals.put("total_users", userCount);
                    return BranchEntity.count();
                })
                .map(branchCount -> {
                    totals.put("total_branches", branchCount);
                    return totals;
                });
    }
}
