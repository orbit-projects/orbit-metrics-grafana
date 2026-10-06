// Copyright 2026-present Orbit Contributors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0

import React from 'react';
import type { AppRootProps } from '@grafana/data';
import pluginJson from '../../plugin.json';

const runtimeDashboard = '/d/orbit-runtime/orbit-runtime-overview';
const httpDashboard = '/d/orbit-http/orbit-http-traffic';

function App(_props: AppRootProps) {
  return (
    <main style={{ maxWidth: 960, padding: 24 }}>
      <h1>Orbit Metrics</h1>
      <p>
        Explore runtime health and HTTP traffic from Orbit applications. These dashboards use
        Grafana&apos;s built-in Prometheus data source and the metrics exported by{' '}
        <code>orbit-metrics-prometheus</code>.
      </p>
      <section aria-labelledby="prometheus-setup-heading">
        <h2 id="prometheus-setup-heading">Connect Prometheus</h2>
        <p>
          Configure a Prometheus data source that scrapes the Orbit application&apos;s{' '}
          <code>/metrics</code> endpoint. The default endpoint requires the{' '}
          <code>orbit.metrics.read</code> role; protect it with an authenticated scrape identity or a
          trusted network boundary.
        </p>
      </section>
      <nav aria-label="Orbit dashboards">
        <ul>
          <li>
            <a href={runtimeDashboard}>Runtime overview</a>
          </li>
          <li>
            <a href={httpDashboard}>HTTP traffic</a>
          </li>
        </ul>
      </nav>
      <p>
        Plugin ID: <code>{pluginJson.id}</code>
      </p>
    </main>
  );
}

export default App;
