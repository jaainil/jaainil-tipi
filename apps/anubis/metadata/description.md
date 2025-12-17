## Anubis

Anubis is a proof-of-work based reverse proxy designed to mitigate abusive bots and scrapers while allowing legitimate users to pass through.

It sits in front of an upstream service (such as Nginx) and challenges clients with a computational puzzle before granting access.

### Features

- Proof-of-work bot mitigation
- Lightweight and fast
- Metrics endpoint support
- Configurable bot policies
- Easy integration with existing web services

### Usage Notes

- Place your `botPolicy.yaml` file inside the `bot-policy` directory
- Static content or upstream services are served by the bundled Nginx container
- The Anubis web interface is exposed on port 8080
