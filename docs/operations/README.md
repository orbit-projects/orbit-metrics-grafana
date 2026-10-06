# Operations

Install this plugin using the package produced by Grafana's plugin build/signing flow. A production Grafana instance must trust the plugin signature; do not enable unsigned plugin loading outside local development. Restart Grafana after changing `plugin.json` or replacing the plugin bundle so Grafana reloads the manifest and dashboard includes.

Configure a Prometheus data source in Grafana, then configure Prometheus to scrape each Orbit application's `/metrics` endpoint. `orbit-metrics-prometheus` is an independently installed Orbit plugin and the endpoint requires `orbit.metrics.read` by default. Provision the scrape identity, route authorization, TLS, and network policy through your deployment's approved secret and configuration systems.

Enable the Orbit Metrics app in Grafana to import its dashboards. Dashboard includes are managed by the plugin; copy a dashboard before making changes that should be owned separately. The package does not provision Prometheus or mutate existing Grafana data sources.

The local `npm run server` environment enables anonymous Grafana access and unsigned plugins to simplify development. Treat it as a disposable local environment and do not reuse its settings or credentials in deployments.
