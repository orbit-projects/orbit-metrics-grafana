# Development

Requires Node.js 22 through 24 and npm 10 or later. The plugin was scaffolded with the official `@grafana/create-plugin` tool and uses its webpack, Jest, Playwright, and plugin packaging setup. Do not edit files in `.config/`; use the Grafana plugin-tools extension mechanisms when configuration changes are needed.

Run local checks:

```bash
npm ci
npm run typecheck
npm run lint
npm run test:ci
npm run build
```

Run the local Grafana container with `npm run server`. The Playwright suite uses `@grafana/plugin-e2e`; test against the minimum Grafana version in `src/plugin.json` and a current development image before release. Local build and unit-test results do not replace hosted compatibility checks, plugin signing, artifact integrity, provenance, or deployment validation.

When changing dashboard queries, verify metric names and labels against Orbit Core diagnostics and the Prometheus exporter. Add dashboard JSON checks for every new metric dependency and update this documentation when installation or security assumptions change.
