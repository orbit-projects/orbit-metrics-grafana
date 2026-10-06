# Architecture

Orbit Metrics Grafana is a native, frontend-only Grafana App plugin. It contains a small overview page and two bundled dashboard definitions. The dashboard panels query Grafana's built-in Prometheus data source using Orbit metric names.

```text
Orbit Core diagnostics
        │
        ▼
orbit-metrics-prometheus  ── /metrics ──►  Prometheus  ──►  Grafana built-in Prometheus data source
                                                                  │
                                                                  ▼
                                                      orbit-metrics-grafana dashboards
```

Orbit Core owns diagnostics and its stable metric snapshots. `orbit-metrics` provides the provider-neutral exporter contract. `orbit-metrics-prometheus` owns Prometheus exposition and the optional protected scrape route. This repository owns Grafana app assets and dashboard queries only.

The plugin deliberately does not implement a Grafana data source, backend, metrics endpoint, or storage. A custom Grafana data source would need a separate query API and adds no value for Prometheus, which Grafana already supports. There is no runtime dependency on Python or Orbit Core.

The app manifest includes dashboard JSON and the plugin's root page. Keep dashboard queries aligned with metric names, label sets, and histogram behavior in the Core diagnostics implementation and Prometheus exporter. Dashboard state is provisioned by Grafana when the app is enabled; users should customize copies if they need independently managed dashboards.
