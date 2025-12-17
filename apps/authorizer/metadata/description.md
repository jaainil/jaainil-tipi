## Authorizer

Authorizer is an open-source authentication and authorization service that helps you secure your applications with minimal setup.

### Features

- JWT-based authentication
- OAuth and social login support
- Custom access token scripting
- SQLite support for simple deployments
- Admin dashboard and APIs

### Configuration

This deployment uses:
- **SQLite** as the database backend
- **Production mode** enabled
- A custom access token script for adding extra claims

All persistent data is stored in a Runtipi-managed volume.
