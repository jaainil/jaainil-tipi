## AnythingLLM

AnythingLLM is an all-in-one AI workspace that lets you chat with your documents, manage knowledge bases, and connect to popular LLM providers.

It supports document ingestion, embeddings, vector search, and conversational interfaces in a single self-hosted application.

### Features

- Chat with PDFs, text files, and documents
- Multiple LLM provider support
- Built-in document ingestion and indexing
- Persistent storage for embeddings and uploads
- Web-based UI

### Storage

This app uses multiple persistent volumes:

- Server data and embeddings
- Collector hot directory for ingestion
- Collector output directory

All data is stored safely inside the Runtipi app directory.
