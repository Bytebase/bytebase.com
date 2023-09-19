---
title: Access Unmasked data
---

<EnterpriseOnlyBlock />

`Workspace Owner` and `DBA` can grant access to unmasked data to specific users.

1. Go to a table detail page, and click the **pen icon** in the row.
    ![bb-table-detail-click-masking-pen](/content/docs/security/data-masking/bb-table-detail-click-masking-pen.webp)
2. Choose `Full` as the **Masking Level**. You'll see this in **SQL Editor**.
    ![bb-masking-full](/content/docs/security/data-masking/bb-masking-full.webp)
3. Click **Grant Access**. Choose `None` as the **Masking Level** and pick a user. Click **Confirm**.
    ![bb-masking-grant-access](/content/docs/security/data-masking/bb-masking-grant-access.webp)
4. Log in as the granted user, query or export in **SQL Editor.** You'll see the unmasked data.