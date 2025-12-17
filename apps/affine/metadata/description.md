## AFFiNE (self-hosted)

AFFiNE is an open-source, all-in-one workspace that combines:
- Documents / notes
- Whiteboards
- Databases (tables)
- Knowledge management workflows

This Runtipi app deploys the official server image along with:
- Redis (cache / background coordination)
- Postgres (pgvector-enabled) for persistence
- A one-shot migration/predeploy job that runs before the main server starts

### Data persistence

All data is stored under this app’s data directory:

- `storage/` → uploads & blobs
- `config/` → AFFiNE config
- `postgres/` → database files

### First start

1. Install the app
2. Wait for the migration job to complete (runs automatically)
3. Open the UI on the configured port

### Optional: external URL

If you plan to access AFFiNE through a reverse proxy, set **External URL** (or Hostname + HTTPS) so the server can generate correct outbound links.
