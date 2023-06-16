---
# expand_section_list is the list of default expanded sections.
expand_section_list: ['Introduction', 'Get Started']
---

## Introduction

### [What is Bytebase](/introduction/what-is-bytebase)

### [Use Cases](/introduction/use-cases)

### [Supported Databases](/introduction/supported-databases)

## Get Started

### [5 Mins Quick Start](/get-started/quick-start)

### [Try Bytebase Cloud](/get-started/cloud)

### [Self-host Bytebase](/get-started/install/overview)

#### [Option 1 Docker (5 seconds)](/get-started/install/deploy-with-docker)

#### [Option 2 Deploy to Kubernetes](/get-started/install/deploy-to-kubernetes)

#### [Option 3 Deploy to sealos](/get-started/install/deploy-to-sealos)

#### [Option 4 Deploy to Rainbond](/get-started/install/deploy-to-rainbond)

#### [Option 5 Deploy to render](/get-started/install/deploy-to-render)

#### [Option 6 Installation Script](/get-started/install/installation-script)

#### [Option 7 Build from Source Code](/get-started/install/build-from-source-code)

#### [Configure External PostgreSQL](/get-started/install/external-postgres)

#### [Configure External URL](/get-started/install/external-url)

### First Schema Change

#### [Step 1 - Register Accounts](/get-started/step-by-step/register-accounts)

#### [Step 2 - Manage Members](/get-started/step-by-step/manage-members)

#### [Step 3 - Set up Environments](/get-started/step-by-step/set-up-environments)

#### [Step 4 - Add an Instance](/get-started/step-by-step/add-an-instance)

#### [Step 5 - Create a Project](/get-started/step-by-step/create-a-project)

#### [Step 6 - Change Schema ](/get-started/step-by-step/change-schema)

### [Manage with Terraform](/get-started/terraform)

---

## Core Concepts

### [Data Model](/concepts/data-model)

### [Roles and Permissions](/concepts/roles-and-permissions)

### [Schema Change Workflow](/concepts/schema-change-workflow)

### [Migration Types](/concepts/migration-types)

### [Tenant Database](/concepts/tenant-database)

### [Grouping](/concepts/grouping)

---

## [SQL Review](/sql-review/overview)

### [SQL Advisor](/sql-review/sql-advisor/overview)

#### [UI](/sql-review/sql-advisor/ui)

#### [API](/sql-review/sql-advisor/api)

#### [GitHub Action](/sql-review/sql-advisor/github-action)

#### [GitHub App](/sql-review/sql-advisor/github-app)

#### [GitOps CI](/sql-review/sql-advisor/gitops-ci)

### [Review Policy](/sql-review/review-policy/overview)

#### [Create Schema Review Policy](/sql-review/review-policy/create-schema-review-policy)

#### [Schema Review Check in the Issue](/sql-review/review-policy/schema-review-check-in-the-issue)

#### [View Schema Review Policy](/sql-review/review-policy/view-schema-review-policy)

#### [Edit Schema Review Policy](/sql-review/review-policy/edit-schema-review-policy)

#### [Disable and Delete Schema Review Policy](/sql-review/review-policy/disable-delete-policy)

### [Review Rules](/sql-review/review-rules)

## Change Database

### [Change Workflow](/change-database/change-workflow)

### [Batch Change](/change-database/batch-change)

### [State-based Migration](/change-database/state-based-migration)

### [Drift Detection](/change-database/drift-detection)

### [Schema Editor](/change-database/schema-editor)

### [Schema Diagram](/change-database/schema-diagram)

### [Migration History](/change-database/migration-history)

### [Synchronize Schema](/change-database/synchronize-schema)

### [Rollback Data Changes](/change-database/rollback-data-changes)

### [Online Schema Migration for MySQL](/change-database/online-schema-migration-for-mysql)

### [Change Secret](/change-database/secret)

### [Project Webhook](/change-database/webhook)

## [Query Data with SQL Editor](/sql-editor/overview)

### [Manage SQL Scripts with Sheet](/sql-editor/manage-sql-scripts)

### [Run and EXPLAIN Query](/sql-editor/run-queries)

### [Anonymize Data](/sql-editor/anonymize-data)

### [Admin Mode](/sql-editor/admin-mode)

### [Explore Schema](/sql-editor/explore-schema)

### [ChatSQL](/sql-editor/chatsql)

## Secure Data

### [Data Query Approval Flow](/security/data-query)

### [Data Export Approval Flow](/security/data-export)

### [Anonymize Data](/security/anonymize-data)

### [Database Access Control](/security/database-access-control)

### [Watermark](/security/watermark)

### [Audit Log](/security/audit-log)

## [VCS Integration (GitOps)](/vcs-integration/overview)

### [Add Git Provider](/vcs-integration/add-git-provider)

#### [Self-host GitLab EE/CE](/vcs-integration/self-host-gitlab)

#### [GitLab.com](/vcs-integration/gitlab-com)

#### [GitHub.com](/vcs-integration/github-com)

#### [Bitbucket.org](/vcs-integration/bitbucket-org)

### [Enable GitOps Workflow in Project](/vcs-integration/enable-gitops-workflow)

### [Name and Organize Schema Files](/vcs-integration/name-and-organize-schema-files)

### [Batch Change Tenant Databases](/vcs-integration/tenant-gitops)

### [Troubleshoot](/vcs-integration/troubleshoot)

## [Slow Query](/slow-query/overview)

### [Enable slow query log for MySQL](/slow-query/enable-slow-query-log-for-mysql)

### [Enable pg_stat_statements for PostgreSQL](/slow-query/enable-pg-stat-statements-for-postgresql)

### [Index Advisor](/slow-query/index-advisor)

## Disaster Recovery

### [Backup](/disaster-recovery/backup)

### [Restore from Backup](/disaster-recovery/restore-from-backup)

### [Point-in-time Recovery for MySQL](/disaster-recovery/point-in-time-recovery-for-mysql)

### [Backup Retention Policy](/disaster-recovery/backup-retention-policy)

---

## Administration

### [Production Setup](/administration/production-setup)

### [Back up Data](/administration/back-up-data)

### [Environment Policy](/administration/environment-policy/overview)

#### [Environment Tier](/administration/environment-policy/tier)

#### [Rollout Policy](/administration/environment-policy/rollout-policy)

#### [Backup Schedule Policy](/administration/environment-policy/backup-schedule-policy)

### [Single Sign-On](/administration/sso/overview)

#### [OAuth 2.0](/administration/sso/oauth2)

#### [OpenID Connect (OIDC)](/administration/sso/oidc)

### [Two-Factor Authentication](/administration/2fa)

### [Anomaly Center](/administration/anomaly-center)

### [Risk Center](/administration/risk-center)

### [Custom Approval](/administration/custom-approval)

### [Custom Roles](/administration/custom-roles)

### [External Approval](/administration/external-approval)

### [Customize Logo](/administration/customize-logo)

### [SMTP and Email Delivery](/administration/mail-delivery)

### [Archive](/administration/archive)

---

## Reference

### [Server Startup Options](/reference/command-line)

### [Schema Definition Language](/reference/schema-definition-language)

### [Error Code](/reference/error-code/overview)

#### [Error Code for Bytebase Core](/reference/error-code/core)

#### [Error Code for SQL Advisor](/reference/error-code/advisor)

---

## API

### [Getting Started](/api/overview)

### [SQL Advise](/api/sql-advise)

---

## CLI

### [Getting Started](/cli/overview)

### [Integrate with GitLab CI](/cli/integrate-with-gitlab)

### [Reference](/cli/reference)

---

## How-To

### SQL Review Guide

#### [PostgreSQL](/how-to/sql-review/postgres-sql-review-guide)

### Workflow

#### [GitOps with Feature Branch](/how-to/workflow/gitops-feature-branch)

### Integrations

#### [Supabase](/how-to/integrations/supabase)

#### [Render](/how-to/integrations/render)

#### [Neon](/how-to/integrations/neon)

### ClickHouse

#### [How to Create a Database](/how-to/clickhouse/how-to-create-a-database-clickhouse)

#### [How to Create a Table](/how-to/clickhouse/how-to-create-a-table-clickhouse)

#### [How to List Tables from a Database](/how-to/clickhouse/how-to-list-tables-from-a-database-clickhouse)

#### [How to Rename a Table](/how-to/clickhouse/how-to-rename-a-table-clickhouse)

### Spanner

#### [How to Find Project ID and Instance ID](/how-to/spanner/how-to-find-project-id-and-instance-id)

#### [How to Create a Service Account for Bytebase](/how-to/spanner/how-to-create-a-service-account-for-bytebase)

---

## [Tutorials](/tutorials/overview)

### General

#### [Change Management using Bytebase Cloud](/tutorials/database-change-management-using-bytebase-cloud)

#### [Change Management with GitHub using Bytebase Cloud](/tutorials/database-change-management-with-github-using-bytebase-cloud)

#### [Database Change Management with Risk-Adjusted Approval Flow](/tutorials/database-change-management-with-risk-adjusted-approval-flow)

#### [How to Configure Database Access Control](/tutorials/how-to-configure-database-access-control-and-data-anonymization-for-developer)

#### [How to Synchronize Database Schemas](/tutorials/how-to-synchronize-database-schemas)

### GitOps

#### [Manage Databases in Bytebase with Terraform](/tutorials/manage-databases-in-bytebase-with-terraform)

#### [How to integrate SQL Review into GitLab / GitHub](/tutorials/how-to-integrate-sql-review-into-gitlab-github-ci)

#### [The Database CI/CD Best Practice with GitHub](/tutorials/database-cicd-best-practice-with-github)

#### [How to Setup Database CI/CD with GitHub Actions](/tutorials/github-database-cicd-part-1-sql-review-github-actions)

#### [How to Setup Database CI/CD with GitHub Database GitOps](/tutorials/github-database-cicd-part-2-github-database-gitops)

#### [How to Setup Database CI/CD with GitHub: Put Them Together](/tutorials/github-database-cicd-part-3-put-them-together)

### MySQL

#### [Change Management with MySQL](/tutorials/database-change-management-with-mysql)

#### [Change Management with MySQL and GitHub](/tutorials/database-change-management-with-mysql-and-github)

#### [Run a Local MySQL Instance](/tutorials/local-mysql-instance)

### MariaDB

#### [Change Management with MariaDB](/tutorials/database-change-management-with-mariadb)

#### [Change Management with MariaDB and GitHub](/tutorials/database-change-management-with-mariadb-and-github)

### Amazone Aurora

#### [Change Management with Amazon Aurora](/tutorials/database-change-management-with-amazon-aurora)

#### [Change Management with Amazon Aurora and GitHub](/tutorials/database-change-management-with-amazon-aurora-and-github)

### PostgreSQL

#### [Change Management with PostgreSQL](/tutorials/database-change-management-with-postgresql)

#### [Change Management with PostgreSQL and GitHub](/tutorials/database-change-management-with-postgresql-and-github)

### Snowflake

#### [Change Management with Snowflake](/tutorials/database-change-management-with-snowflake)

#### [Change Management with Snowflake and GitHub](/tutorials/database-change-management-with-snowflake-and-github)

### TiDB

#### [Change Management with TiDB](/tutorials/database-change-management-with-tidb)

#### [Change Management with TiDB and GitHub](/tutorials/database-change-management-with-tidb-and-github)

### MongoDB

#### [Change Management with MongoDB](/tutorials/database-change-management-with-mongodb)

#### [Change Management with MongoDB and GitHub](/tutorials/database-change-management-with-mongodb-and-github)

### Redis

#### [Change Management with Redis](/tutorials/database-change-management-with-redis)

#### [Change Management with Redis and GitHub](/tutorials/database-change-management-with-redis-and-github)

### ClickHouse

#### [Change Management with ClickHouse](/tutorials/database-change-management-with-clickhouse)

#### [Change Management with ClickHouse and GitHub](/tutorials/database-change-management-with-clickhouse-and-github)

### Spanner

#### [Change Management with Spanner](/tutorials/database-change-management-with-spanner)

#### [Change Management with Spanner and GitHub](/tutorials/database-change-management-with-spanner-and-github)

---

## [FAQ](/faq)

## [Document Write Guide](/document-write-guide)
