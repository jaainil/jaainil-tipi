## Borgitory

Borgitory is a web-based interface for managing BorgBackup repositories and backup sources.

It allows you to configure, browse, and manage Borg backups through a simple web UI.

### Features

- Web UI for BorgBackup
- Manage backup sources and repositories
- Browse archives and snapshots
- Uses FUSE for repository access

### ⚠️ Important Notes

- This app requires **SYS_ADMIN** capability and **/dev/fuse**
- Backup sources and repositories must be placed inside the app’s managed volumes
- Arbitrary host filesystem access is not permitted by Runtipi

### Storage Layout

- `/app/data` → Borgitory configuration
- `/sources` → Backup source data (read-only)
- `/repos` → Borg repositories (read-only)

This app is intended for advanced users.
