---
title: Production Setup
---

This page describes how to setup Bytebase in production environment.

[System Requirements](/docs/faq/##system-requirements)

## Enable HTTPS and WebSocket

You can use [Caddy](https://caddyserver.com/docs/quick-starts/reverse-proxy) or [Nginx](https://www.nginx.com/). Check out the [configuration example](/docs/get-started/self-host/#configuration).

## Configure External URL

See [Configure External URL](/docs/get-started/install/external-url).

## Store metadata in External PostgreSQL

See [Configure External PostgreSQL](/docs/get-started/install/external-postgres).

## Kubernetes

### Use Persistent Volume

If Bytebase is configured to store either metadata or the backups on the local disk, then you must use [Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes). Local disk cannot persist state and can also cause frequent pod eviction due to disk pressure during backup.

```plain
Status: Failed
Reason: Evicted
Message: Pod The node had condition: [DiskPressure].
```

## Cloud vendor stack

If you self-host Bytebase in the cloud provider, below is the recommended stack.

### AWS

- EC2 + RDS for PostgreSQL.
- ECS/EKS + RDS for PostgreSQL.
- (Less common) Fargate + RDS for PostgreSQL.

### GCP

- GCE + Cloud SQL for PostgreSQL.
- GKE + Cloud SQL for PostgreSQL.
