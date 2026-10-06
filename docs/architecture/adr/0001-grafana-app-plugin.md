# ADR 0001: Use a Grafana App plugin for Orbit dashboards

- Status: accepted
- Date: 2026-10-06

## Context

Orbit already exposes Core metric snapshots through the optional Prometheus exporter. Grafana has a built-in Prometheus data source. A custom data source would require Orbit to introduce a second query API, while provisioning-only assets would not provide the requested installable Grafana plugin experience.

## Decision

Build a native Grafana App plugin using Grafana's TypeScript tooling. Bundle Orbit runtime and HTTP dashboards, and query Prometheus through the built-in data source. Do not add a backend, custom query protocol, or credential handling.

## Consequences

Grafana deployments can install and enable the app to receive the Orbit overview and dashboards. Operators still configure Prometheus scraping and the Grafana data source. Dashboard queries must evolve with Orbit's metric contract. Grafana's plugin signing and version compatibility requirements remain external release gates.
