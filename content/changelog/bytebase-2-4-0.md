---
title: Bytebase 2.4.0
author: Ningjing
published_at: 2023/07/06 17:21:21
feature_image: /content/changelog/2-4-0-banner.webp
description: 'Support data access control for query and export at workspace level, and support custom approval'
---

## 🚀 New Features

- Support [data access control for query and export at workspace level](/docs/security/data-access-control/), and support custom approval.
- Support Snowflake Task, Stream objects and data access control.
- Support Redshift datashare query, data access control, and data anonymization.
- Support data export as `INSERT` DML script.
- Issue comment supports markdown.

## 🎄 Enhancements

- Increase SQL script sheet display size to 1M.
- SQL Editor admin mode supports keeping connection session.
- Query results in SQL Editor are disallowed to copy.
- Support `force` option archiving instances and projects.
- Issue status activity sorting is more precise.

## 💰 Pricing
- Support granular binding between instance and paid features. Users can import all instances into Bytebase to manage, meanwhile, they can just purchase fewer instance licenses and assign them a subset of instances requiring advanced features. [https://www.bytebase.com/docs/administration/license/](/docs/administration/license/)

- Change Free Plan to allow up to 20 users.

## 📰 Fresh off the press
- Schema change tools Flyway and Liquibase both exist for a long time, which one is better for you? Read [the comparison](/blog/flyway-vs-liquibase/).
- What is database migration and what's the future trend for it? Check out [our latest guide](/blog/what-is-database-migration/). 
- To identify differences in the object structure within MySQL, and synchronize specific objects across multiple databases, you need [Schema Compare Tools](/blog/top-mysql-schema-compare-tools-2023/).
- Google Cloud SQL is a great choice for organizations that need a full-managed relational database service. In order to get the best value for your money, it is essential to understand the [pricing structure](/blog/understanding-google-cloud-sql-pricing/).
  
## 📕 Installation and Upgrade

Follow [Installation](/docs/get-started/self-host). If you are upgrading from a previous version, restart after obtaining the latest release binary.
