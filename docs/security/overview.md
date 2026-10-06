# Security

The plugin is frontend-only and stores no credentials. It sends no telemetry and makes no requests to Orbit applications. Grafana executes its dashboard queries against the configured Prometheus data source.

Protect Prometheus and the Orbit `/metrics` route. The route may disclose operational and service-health information and requires `orbit.metrics.read` by default. Use an authenticated scraper, TLS, and network controls. Do not set the Prometheus route's roles to empty unless another trusted control enforces the same access boundary.

The app does not change Grafana permissions, data-source credentials, alert rules, or tenant boundaries. Review Grafana organization and folder permissions, Prometheus access, and dashboard visibility before enabling it for users. Report vulnerabilities through the private process in [SECURITY.md](../../SECURITY.md), not public issues.
