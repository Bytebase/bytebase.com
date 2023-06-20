---
title: Supported Databases and Features
description: The Bytebase supported databases and corresponding feature matrix
---

## Supported Databases

Bytebase officially supports the following major versions for each supported database engine:

- MySQL - 5.7 and 8.0
- PostgreSQL - 12.0, 13.0, 14.0
- TiDB - 5.0
- ClickHouse - 21.0
- Snowflake
- MongoDB - 4.0, 5.0, 6.0
- Spanner
- Redis - 6.0, 6.2, 7.0
- Oracle - 21c at least
- Microsoft SQL Server - 2019 at least
- MariaDB - 10.7 at least
- OceanBase - 3.x and 4.x, MySQL tenant

Bytebase usually works fine with older database versions, we just won't support features specific to those older versions. We may add other open source databases in the future.

## Feature Matrix

### Change Workflow

| Feature    | [UI & GitOps Workflow](/docs/concepts/database-change-workflow) | [Migration History](/docs/change-database/migration-history) | [Batch Change](/docs/change-database/batch-change) | [SQL Lint](/docs/sql-review/review-policy/overview) |
| ---------- | --------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------- | --------------------------------------------------- |
| MySQL      | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |
| PostgreSQL | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |
| TiDB       | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |
| ClickHouse | ✔️                                                              | ✔️                                                           | ✔️                                                 |                                                     |
| Snowflake  | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |
| MongoDB    | ✔️                                                              | ✔️                                                           | ✔️                                                 |                                                     |
| Spanner    | ✔️                                                              | ✔️                                                           | ✔️                                                 |                                                     |
| Redis      | ✔️                                                              | ✔️                                                           | ✔️                                                 |                                                     |
| Oracle     | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |
| SQL Server | ✔️                                                              | ✔️                                                           | ✔️                                                 |                                                     |
| MariaDB    | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |
| OceanBase  | ✔️                                                              | ✔️                                                           | ✔️                                                 | ✔️                                                  |

### Schema Management

| Feature    | [Schema Synchronization](/docs/change-database/synchronize-schema) | [Schema Editor](/docs/change-database/schema-editor) | [State-based Migration](/docs/change-database/state-based-migration) | [Online Schema Change](/docs/change-database/online-schema-migration-for-mysql) |
| ---------- | ------------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| MySQL      | ✔️                                                                 | ✔️                                                   | ✔️                                                                   | ✔️                                                                              |
| PostgreSQL | ✔️                                                                 | ✔️                                                   | ✔️                                                                   |                                                                                 |
| TiDB       | ✔️                                                                 | ✔️                                                   | ✔️                                                                   |                                                                                 |
| ClickHouse |                                                                    |                                                      |                                                                      |                                                                                 |
| Snowflake  |                                                                    |                                                      |                                                                      |                                                                                 |
| MongoDB    |                                                                    |                                                      |                                                                      |                                                                                 |
| Spanner    |                                                                    |                                                      |                                                                      |                                                                                 |
| Redis      |                                                                    |                                                      |                                                                      |                                                                                 |
| Oracle     |                                                                    |                                                      |                                                                      |                                                                                 |
| SQL Server |                                                                    |                                                      |                                                                      |                                                                                 |
| MariaDB    |                                                                    |                                                      |                                                                      |                                                                                 |
| OceanBase  |                                                                    |                                                      |                                                                      |                                                                                 |

### SQL Editor

| Feature    | [Sheet Management](/docs/sql-editor/manage-sql-scripts) | [Query Mode](/docs/sql-editor/run-queries) | [Admin Mode](/docs/sql-editor/admin-mode) | [ChatSQL](/docs/sql-editor/chatsql) |
| ---------- | ------------------------------------------------------- | ------------------------------------------ | ----------------------------------------- | ----------------------------------- |
| MySQL      | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| PostgreSQL | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| TiDB       | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| ClickHouse | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| Snowflake  | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| MongoDB    | ✔️                                                      |                                            | ✔️                                        | ✔️                                  |
| Spanner    | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| Redis      | ✔️                                                      |                                            | ✔️                                        | ✔️                                  |
| Oracle     | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| SQL Server | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| MariaDB    | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |
| OceanBase  | ✔️                                                      | ✔️                                         | ✔️                                        | ✔️                                  |

### Security

| Feature    | [RBAC](/docs/concepts/roles-and-permissions) | [Audit Log](/docs/security/audit-log) | [Database Access Control](/docs/security/database-access-control) | [Data Anonymization](/docs/security/anonymize-data) |
| ---------- | -------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------- |
| MySQL      | ✔️                                           | ✔️                                    | ✔️                                                                | ✔️                                                  |
| PostgreSQL | ✔️                                           | ✔️                                    | ✔️                                                                | ✔️                                                  |
| TiDB       | ✔️                                           | ✔️                                    | ✔️                                                                | ✔️                                                  |
| ClickHouse | ✔️                                           | ✔️                                    | ✔️                                                                |                                                     |
| Snowflake  | ✔️                                           | ✔️                                    | ✔️                                                                |                                                     |
| MongoDB    | ✔️                                           | ✔️                                    | ✔️                                                                |                                                     |
| Spanner    | ✔️                                           | ✔️                                    | ✔️                                                                |                                                     |
| Redis      | ✔️                                           | ✔️                                    | ✔️                                                                |                                                     |
| Oracle     | ✔️                                           | ✔️                                    | ✔️                                                                | ✔️                                                  |
| SQL Server | ✔️                                           | ✔️                                    | ✔️                                                                |                                                     |
| MariaDB    | ✔️                                           | ✔️                                    | ✔️                                                                | ✔️                                                  |
| OceanBase  | ✔️                                           | ✔️                                    | ✔️                                                                | ✔️                                                  |

### Disaster Recovery

| Feature    | [Local Backup and Restore](/docs/disaster-recovery/backup) | [Cloud Backup](/docs/disaster-recovery/backup-restore-database/backup/#cloud-storage) | [Data Change Rollback](/docs/change-database/rollback-data-changes) | [Point-in-time Recovery (PITR)](/docs/disaster-recovery/point-in-time-recovery-for-mysql) |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| MySQL      | ✔️                                                         | ✔️                                                                                    | ✔️                                                                  | ✔️                                                                                        |
| PostgreSQL | ✔️                                                         | ✔️                                                                                    |                                                                     |                                                                                           |
| TiDB       | ✔️                                                         | ✔️                                                                                    |                                                                     |                                                                                           |
| ClickHouse |                                                            |                                                                                       |                                                                     |                                                                                           |
| Snowflake  | ✔️                                                         | ✔️                                                                                    |                                                                     |                                                                                           |
| MongoDB    |                                                            |                                                                                       |                                                                     |                                                                                           |
| Spanner    |                                                            |                                                                                       |                                                                     |                                                                                           |
| Redis      |                                                            |                                                                                       |                                                                     |                                                                                           |
| Oracle     |                                                            |                                                                                       |                                                                     |                                                                                           |
| SQL Server |                                                            |                                                                                       |                                                                     |                                                                                           |
| MariaDB    | ✔️                                                         | ✔️                                                                                    |                                                                     |                                                                                           |
| OceanBase  |                                                            |                                                                                       |                                                                     |                                                                                           |

### Anomaly Detection

| Feature    | Connection Failure | [Drift Detection](/docs/change-database/drift-detection) | [Backup Policy Violation](/docs/administration/environment-policy/backup-schedule-policy) | [Backup Missing](/docs/disaster-recovery/backup-restore-database/backup) |
| ---------- | ------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| MySQL      | ✔️                 | ✔️                                                       | ✔️                                                                                        | ✔️                                                                       |
| PostgreSQL | ✔️                 | ✔️                                                       | ✔️                                                                                        | ✔️                                                                       |
| TiDB       | ✔️                 | ✔️                                                       | ✔️                                                                                        | ✔️                                                                       |
| ClickHouse | ✔️                 | ✔️                                                       |                                                                                           |                                                                          |
| Snowflake  | ✔️                 | ✔️                                                       | ✔️                                                                                        | ✔️                                                                       |
| MongoDB    | ✔️                 |                                                          |                                                                                           |                                                                          |
| Spanner    | ✔️                 | ✔️                                                       |                                                                                           |                                                                          |
| Redis      | ✔️                 |                                                          |                                                                                           |                                                                          |
| Oracle     | ✔️                 | ✔️                                                       |                                                                                           |                                                                          |
| SQL Server | ✔️                 | ✔️                                                       |                                                                                           |                                                                          |
| MariaDB    | ✔️                 | ✔️                                                       | ✔️                                                                                        | ✔️                                                                       |
| OceanBase  | ✔️                 | ✔️                                                       |                                                                                           |                                                                          |
