---
title: FAQ
---

## How to reach us?

- 💬 Join our [Discord Community](https://discord.gg/huyw7gRsyA)
- 📧 Email us at [support@bytebase.com](mailto:support@bytebase.com)
- 🎫 Open [GitHub Issue](https://github.com/bytebase/bytebase/issues)
- 🤠 Find us on [@Bytebase](https://twitter.com/bytebase)

## Supported languages

English, 简体中文, Español, 日本語, Tiếng Việt

## System requirements

Bytebase is lightweight and has no external dependency. For normal workload, 1 CPU core and 2 GB RAM are sufficient.

If you use Docker, please upgrade to at least [20.10.24](https://docs.docker.com/engine/release-notes/20.10/#201024).

## Supported database and versions

See [Supported Databases](/docs/introduction/supported-databases).

## Supported version control systems (VCS) and providers

See [Git Provider](/docs/vcs-integration/self-host-gitlab).

## How Bytebase stores the database credentials

In order to perform database operations on users' behalf, Bytebase needs users to provide the database credentials.
By default, Bytebase stored the supplied credentials in the obfuscated format. For the Enterprise plan, you can
instruct Bytebase to [use the external secret manager](/docs/get-started/instance/#use-secret-manager).

## How to enable https

You can use [Caddy](https://caddyserver.com/docs/quick-starts/reverse-proxy) or [Nginx](https://www.nginx.com/).

## How to enable debug mode

<HintBlock type="warning">

Debug mode is a global setting and is only supposed to be used for troubleshooting.

</HintBlock>

Debug mode emits more detailed logs on the backend as well as returning more verbose logs to the frontend.

### Enable --debug on startup

You can pass [--debug](/docs/reference/command-line#--debug) when starting Bytebase.

### Toggle debug mode at runtime

If you are an OWNER or DBA, you can also toggle debug mode at runtime. The toggle is under the top-right profile dropdown

<p align="center">
<img src="/content/docs/FAQ/troubleshoot-debug-mode.webp" width="50%" />
</p>

## Does Bytebase support post action after applying a change to the database

1. You can configure [project webhook](/docs/change-database/webhook/#supported-webhook-endpoints) to observe events.

1. If you use GitOps workflow, there is a [schema write-back](https://www.bytebase.com/docs/vcs-integration/add-gitops-connector/#schema-change-type-required) feature where Bytebase will write back the full
   schema to the specified file in the repository, and you can configure a pipeline to listen on that
   file change. You can follow [this tutorial](/docs/tutorials/database-change-management-with-mysql-and-github/#step-5-change-schema-for-mysql-by-pushing-sql-schema-change-files-to-github) to learn the entire GitOps workflow.

## Which data does Bytebase collect?

_You can disable the collection by passing [`--disable-metric`](/docs/reference/command-line/#disable-sample) on startup_.

- Anonymised usage data.
- The registered email and name of the first member in the workspace.
