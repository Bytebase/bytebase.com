---
title: Connect Your Database
---

To allow Bytebase to manage your different [database systems](/docs/introduction/supported-databases),
you need to supply Bytebase with the connection info.

<HintBlock type="info">

Only **Workspace Owner** or **Workspace DBA** role can configure instance.

</HintBlock>

## Connect to the instance on the same host

<HintBlock type="info">

If you run Bytebase inside Docker and try to connect to a database instance on the same host, then
you need to set host as [host.docker.internal](https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host).
</HintBlock>

![connect-local-docker](/content/docs/get-started/instance/connect-local-docker.webp)

- If you run Bytebase without Docker and try to connect to a database instance on the same host, then
  you need to set host as `127.0.0.1`

![connect-local-no-docker](/content/docs/get-started/instance/connect-local-no-docker.webp)

## Connect to the instance from Bytebase Cloud

<IncludeBlock url="/docs/get-started/install/whitelist-bytebase-ip"></IncludeBlock>

## Configure SSL

SSL connection configuration only supports PostgreSQL, MySQL, TiDB and ClickHouse for now.

## Configure SSH tunnel

<PricingPlanBlock feature_name='SSH_TUNNEL' />

To protect their databases, some hosting providers block direct remote access. However, they often enable SSH, which allows users to connect to their servers remotely using an SSH client. If you want to connect to a database on one of these servers from Bytebase, you will need to create an SSH tunnel. This will allow you to connect to the database without compromising security.

![ssh explain](/content/docs/get-started/instance/ssh-explain.webp)

1. After filling in the standard database connection information, click **SSH Connection** > **Tunnel + Private Key**.
2. Fill in the SSH connection information. The **Private Key** is used to authenticate the SSH connection. You can also use a password instead.
   ![ssh tunnelling](/content/docs/get-started/instance/bb-instance-ssh-connection.webp)
3. Click **Test Connection**. If the connection is successful, click **Create** to create this instance.

## Configure read-only connection

<PricingPlanBlock feature_name='READONLY_CONNECTION' />/>

To separate from admin connection, you can configure read-only connections used by SQL Editor once an instance is added. This separation can be configured at the database user/role access control level or replication instance level.

1. Create a new role with read-only access or a read-replica instance.
1. Click **Create** or **+** on **Connection info**.
1. Enter read-only connection info. If this is a read-replica instance, you need to enter its host and port information.
1. Click **Update** to finish the configuration.
1. Click **+** to add more, or click trash icon to delete.

![bb-instance-read-only-connection](/content/docs/get-started/instance/bb-instance-read-only-connection.webp)

## Use secret manager

<PricingPlanBlock feature_name='EXTERNAL_SECRETE_MANAGER' />

By defauilt, Bytebase stores the database credentials in an obfuscated format. You can also instruct
Bytebase to fetch the database credential from an external secret manager.

![external-secret-manager-flow](/content/docs/get-started/instance/external-secret-manager-flow.webp)

1. User tries to access database from Bytebase.
1. Bytebase calls the external secret manager to fetch the corresponding password.
1. Bytebase fetches the password and connect the database.

![external-secret-manager-config](/content/docs/get-started/instance/external-secret-manager-config.webp)

You supply the external secret manager endpoint by enclosing it with the mustache `{{` `}}`, e.g `{{http://example.com/secrets/mydbkey}}`

**Sample request**

Usually `mydbkey` is unique for each database and used for exchanging the password for that database.

```bash
curl "http://example.com/secrets/mydbkey"
```

**Expected response**

Bytebase expects the following JSON response from the external secret manager. The `payload.data` is the
base64-encoded contents of the database password.

```json
{
  "payload": {
    "data": "xxx"
  }
}
```

## PostgreSQL

If the connecting instance is managed by the cloud provider, then SUPERUSER is not available and you should create the role via that provider's admin console. The created role will have provider specific restricted semi-SUPERUSER privileges:

- In [AWS RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.PostgreSQL.CommonDBATasks.Roles.html#Appendix.PostgreSQL.CommonDBATasks.Roles.rds_superuser), the roll is `rds_superuser`.

- In [Google Cloud SQL](https://cloud.google.com/sql/docs/postgres/users), the role is `cloudsqlsuperuser`.

You should grant Bytebase privileges with that semi-SUPERUSER role, e.g.:

```sql
-- For AWS RDS
GRANT rds_superuser TO bytebase
```

```sql
-- For Google Cloud SQL
GRANT cloudsqlsuperuser TO bytebase
```

Besides, you may need to grant Bytebase privileges with `GRANT role_name TO bytebase;` for all existing roles. Otherwise, Bytebase may not access existing databases or tables.

## Google Cloud Spanner

For connecting to Google Cloud Spanner, you need to provide the following info:

1. Google cloud project ID.
1. Google cloud Spanner instance ID.
1. Google cloud service account credentials.

![spanner](/content/docs/get-started/instance/spanner.webp)

### Specify Google Cloud Project ID and Spanner Instance ID

![Spanner database detail page](/content/docs/get-started/instance/spanner-url.webp)

From the Spanner database detail page, you can get the project ID and the instance ID from the URL.

For example, the project ID and instance ID are `spanner-test-3717002` and `spanner-bb1` respectively for the above database.

### Create a Google Cloud Service Account as the Credential

1. Go to [Google Cloud console](https://console.cloud.google.com/).
1. Click **APIs & Services** and then **Credentials**. You might have to click **Menu** on the top left first.
1. Click **Create Credentials** and then **Service account**.
1. For **Service account name**, enter a name for the service account.
1. Click **Create and Continue**.
1. For **Select a role**, select **Cloud Spanner Database Admin** for the service account.
1. Click **Done**.
1. Click the created service account.
1. At the top, click **Keys** and then **Add Key** and then **Create new key**. Make sure the key type is set to **JSON** and click **Create**.
1. You'll get a message that the service account's private key JSON file was downloaded to your computer. Make a note of the file name and where your browser saves it. You'll need it later.

Upload the JSON file to the `Credentials` input.

## Oracle

For managing Oracle database, Bytebase provides two manage modes: **Manage based on database** and **Manage based on schema**.
You can choose the manage mode when adding an instance or in the instance detail page.

### Manage based on database

In this mode, Bytebase will manage the database as a whole.

- For normal Oracle instance, we treat the Oracle database as a Bytebase database.
- For CDB instance, we treat the CDB and all PDBs as Bytebase databases.
- For PDB instance, we treat the PDB as a Bytebase database.

### Manage based on schema

In this mode, Bytebase will manage the schema as a whole.

- For any Oracle database, we treat the Oracle schema as a Bytebase database.
