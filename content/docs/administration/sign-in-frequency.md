---
title: Sign-in Frequency
feature_name: SIGNIN_FREQUENCY
---

This document shows you how to configure **Sign-in Frequency** to your workspace. It specifies the period that users are required to sign in again.

## Prerequisites

- **Workspace Owner** or **Workspace DBA** role

## Procedure

1. Click **Settings** on the top bar.
2. Click **General** under **Workspace**, and scroll down to the **Security** section.
3. Choose between `Hour(s)` and `Day(s)`.
4. Click `+`,`-` or input a number to set the **Sign-in Frequency**.

![sign-in-frequency](/content/docs/administration/sign-in-frequency/bb-sign-in-frequency.webp)


<HintBlock type="info">

You need to restart Bytebase and re-login to make the change take effect.

</HintBlock>