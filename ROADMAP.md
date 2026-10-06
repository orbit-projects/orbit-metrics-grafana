# Roadmap

## Implemented

- Native Grafana App plugin with Orbit overview page.
- Runtime and HTTP traffic dashboards backed by Grafana's built-in Prometheus data source.
- Local Grafana provisioning and deterministic dashboard-contract tests.

## Release gates

- Hosted CI and supported Grafana-version compatibility checks.
- Grafana plugin signing, artifact integrity, and provenance.
- Validation in a representative Orbit + Prometheus + Grafana deployment, including route authorization and dashboard query behavior.
- Load and operational review for the full metrics scrape and dashboard path.
