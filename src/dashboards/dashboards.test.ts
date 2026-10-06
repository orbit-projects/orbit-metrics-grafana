// Copyright 2026-present Orbit Contributors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0

import httpDashboard from './orbit-http-traffic.json';
import runtimeDashboard from './orbit-runtime-overview.json';
import pluginJson from '../plugin.json';

type Panel = { id: number; title: string; targets: Array<{ expr: string }> };

const includedDashboards = pluginJson.includes.filter((entry) => entry.type === 'dashboard');

describe('Orbit dashboard bundle', () => {
  it('declares the dashboards in plugin metadata', () => {
    expect(includedDashboards).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Orbit Runtime Overview',
          path: 'dashboards/orbit-runtime-overview.json',
        }),
        expect.objectContaining({
          name: 'Orbit HTTP Traffic',
          path: 'dashboards/orbit-http-traffic.json',
        }),
      ])
    );
  });

  it('uses unique panel IDs and the shared Prometheus data source', () => {
    for (const dashboard of [runtimeDashboard, httpDashboard]) {
      const panels = dashboard.panels as Panel[];
      const ids = panels.map((panel) => panel.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(panels.length).toBeGreaterThan(0);
      expect(panels.every((panel) => panel.targets.length > 0)).toBe(true);
    }
  });

  it('queries metric families exported by Orbit Core', () => {
    const expressions = [runtimeDashboard, httpDashboard]
      .flatMap((dashboard) => dashboard.panels as Panel[])
      .flatMap((panel) => panel.targets.map((target) => target.expr));

    for (const metric of [
      'orbit_http_requests_total',
      'orbit_http_responses_total',
      'orbit_http_request_duration_seconds_bucket',
      'orbit_services_registered',
      'orbit_plugins_enabled',
      'orbit_tasks_failed',
      'orbit_container_resolution_failures_total',
      'orbit_service_health',
    ]) {
      expect(expressions.some((expression) => expression.includes(metric))).toBe(true);
    }
  });
});
