## Aptabase Dev Stack

This app provides the required infrastructure services for running Aptabase in a development or self-hosted environment.

### Included Services

- **PostgreSQL 15** – primary relational database
- **ClickHouse** – analytics and event storage
- **Mailcatcher** – local SMTP server with web UI

### Ports

- PostgreSQL: `5432` (internal)
- ClickHouse HTTP: `8123` (internal)
- Mailcatcher SMTP: `1025` (internal)
- Mailcatcher Web UI: `1080` (exposed)

### Usage

Other Tipi apps can connect to these services using:
- `postgres:5432`
- `clickhouse:8123`
- `mailcatcher:1025`

All data is stored in persistent Tipi-managed volumes.
