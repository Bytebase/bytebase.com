---
title: "PlanetScale vs. Neon: the Continued Saga between MySQL and PostgreSQL"
author: Tianzhou
published_at: 2023/08/04 09:00
feature_image: /content/blog/planetscale-vs-neon/cover.webp
tags: Industry
featured: true
description: 'An extensive comparison between PlanetScale and Neon on architecture, compatibility, developer workflow,
scalability, operability, integration, compliance, pricing and more.'
---

The [2023 Stack Overflow survey](https://survey.stackoverflow.co/2023/) shows that PostgreSQL has taken
over the first place spot from MySQL and become the most admired, desired database.

![stackoverflow](/content/blog/planetscale-vs-neon/stackoverflow.webp)

It seems that the love-hate relationship between MySQL and PostgreSQL will never end. From native
MySQL vs. PostgreSQL, to distributed TiDB vs. CockroachDB, to cloud-native AWS Aurora vs. GCP AlloyDB, and now we
are entering the next chapter, the serverless, developer-oriented PlanetScale vs. Neon.

![planetscale](/content/blog/planetscale-vs-neon/planetscale.webp)

![neon](/content/blog/planetscale-vs-neon/neon.webp)

At Bytebase, we work with the MySQL / PostgreSQL ecosystems extensively. Our founders also build [Google Cloud SQL](https://cloud.google.com/sql), one of the largest hosted MySQL & Postgres cloud services.

Below we give an extensive comparison between PlanetScale and Neon from the following dimensions:

- [Architecture](#architecture)
- [Compatibility](#compatibility)
- [Developer Workflow](#developer-workflow)
- [Scalability](#scalability)
- [Operability](#operability)
- [Integration](#integration)
- [Compliance](#compliance)
- [Open Source](#open-source)
- [Pricing](#pricing)
- [Funding](#funding)

## Architecture

PlanetScale is a distributed database based on [Vitess](https://vitess.io/). Vitess is a shared-nothing
architecture where each shard contains a MySQL primary node and set of replicas. VTGate proxy routes
the application request to the respective shard.

![vitess-arch](/content/blog/planetscale-vs-neon/vitess-arch.webp)

Neon is a shared-storage architecture. It seperates the compute and storage. The compute part is
just normal PostgreSQL server, the storage part is a custom-built multi-tenant storage system shared
by all Postgres compute nodes.

![neon-arch](/content/blog/planetscale-vs-neon/neon-arch.webp)

## Compatibility

**[PlanetScale's MySQL compatibility](https://planetscale.com/docs/reference/mysql-compatibility) is constrained.**

1. [Underlying Vitess limitations](https://vitess.io/docs/15.0/reference/compatibility/mysql-compatibility/). Vitess shared-nothing architecture carries inherent compatibility limitations. Features requiring session maintenance or cross-shard operation are challenging to implement.

1. Product trade-off. e.g. To support online DDL, PlanetScale disallows foreign key entirely, which is more strict than Vitess' foreign key limitation.

1. Cloud operating model. No super privilege or LOAD DATA INFILE to access host file system.

**Neon is [mostly compatible](https://neon.tech/docs/reference/compatibility) with vanilla PostgreSQL.**

Neon rebuilds the paging layer and just lightly changes the Postgres codebase. Neon's compatibility is only constrained by its cloud operating model, which are similar to other hosted database services (no superuser or host file system access).

## Developer Workflow

Both PlanetScale and Neon are targetting developers, and they are telling the same developer workflow story in different ways.

PlanetScale's story emphasizes the end-to-end experience, from branching, to schema migration, monitoring and revert.

![planetscale-workflow](/content/blog/planetscale-vs-neon/planetscale-workflow.webp)

Neon's story highlights the single branching feature. Their purpose-built paging layer has copy-on-write (CoW), which makes branching instantaneous and cost-effective.

![neon-branch](/content/blog/planetscale-vs-neon/neon-branch.webp)

## Scalability

PlanetScale, as its name suggests, is planet-scale. The shared-nothing architecture grants near-linear
scalability. The underlying Vitess is originally developed inside YouTube to handle scalability
challenge and it's been battle tested in other large internet companies ([1](https://slack.engineering/scaling-datastores-at-slack-with-vitess/), [2](https://www.cncf.io/case-studies/jdcom-vitess/)).

Neon can not scale as much as PlanetScale. After all, it's a single node PostgreSQL instance. But
this single node can scale up very well. Neon separates the storage and compute, thus each can scale individually. And in the cloud, storage is infinite, compute is abundant, thus the scalability
is only constrained by the network bandwidth. The separated architecture also infers elasticity, scale-to-zero
is as easy as scale-up.

## Operability

**PlanetScale provides a complete managed database service. It tries to take care of every aspect of using the
database.**

![planetscale-menu](/content/blog/planetscale-vs-neon/planetscale-menu.webp)

- **Deploy requests** and **Branches** for database change workflow.
- **Insights** for monitoring.
- **Boost** for speeding up query performance.
- **Revert** for reverting the change.
- **Console** for mysql CLI experience in the browser.
- **Backup** for disaster recovery.

**Neon is relatively new and provides essentials.**

- Disaster recovery is provided by its branching feature.
- A visual SQL Editor to interact with the database.

![neon-sql-editor](/content/blog/planetscale-vs-neon/neon-sql-editor.webp)

The SQL Editor is neat. Here Neon embeds an external view from [explain.dalibo.com](https://explain.dalibo.com/) to display the query plan. It looks a bit strange visually, but serve the purpose well.

## Integration

PlanetScale itself is already a comprehensive database platform. Its [doc site](https://planetscale.com/docs) also lists a handful standard database integrations:

- Application frameworks from major languages.

- Monitoring with Datadog.

- Data transfer via Airbyte, Stitch, Hightouch.

Neon hasn't accumulated many standard database integrations yet. But Neon's unique capabilities unlocks new integration frontiers:

- [Snaplet](https://docs.snaplet.dev/tutorials/neon/) uses Neon to instantaneously prepare production database snapshot for testing environment.

- [Replit](https://neon.tech/blog/neon-replit-integration) leverages Neon's scale-to-zero to offer its users a minimum cost database service.

- [Vercel](https://neon.tech/blog/neon-vercel-integration) pairs with Neon's database branching to provide a realistic preview deployment in minutes instead of hours.

## Compliance

PlanetScale has [SOC 2 type 2 and HIPAA](https://planetscale.com/docs/concepts/security). Neon has completed [SOC 2 Type 1](https://neon.tech/docs/security/security-overview) so far.

## Open Source

PlanetScale and Neon choose identical strategy, open souce their database codebase under the same liberal license and only charge the cloud service.

PlanetScale is based on a [Vitess fork](https://github.com/planetscale/vitess) under Apache-2.0. The team once built [gh-ost](https://github.com/github/gh-ost), the
best online schema migration tool for MySQL and probably among all open source RDBMS. They also open sourced [beam](https://github.com/planetscale/beam), a message board web app to showcase PlanetScale.

Neon also [open sources](https://github.com/neondatabase/neon) its entire database codebase under Apache-2.0 license.

## Pricing

PlanetScale employs a usage-based pricing on row reads/writes. This is atypical for a database service and raises [controversial](https://news.ycombinator.com/item?id=30457960). On one hand, it brings extra incentive for people to optimize queries, on the other hand, bad queries
are inevitable and MySQL query optimizer is also [flawed](https://news.ycombinator.com/item?id=29455852). To offset this concern, PlanetScale
recently introduced a new [Scaler Pro tier](https://planetscale.com/blog/announcing-scaler-pro) for unlimited row reads/writes.

![planetscale-pricing](/content/blog/planetscale-vs-neon/planetscale-pricing.webp)

Neon offers a usage-based pricing based on 4 metrics: **active compute time**, **data storage**, **data transfer out** and **data written**.
This pricing model is more tranditional and predictable. Neon also provides a pricing calculator to estimate the cost.

![neon-pricing](/content/blog/planetscale-vs-neon/neon-pricing.webp)

## Funding

Both are well-funded companies led by industry veterans. PlanetScale has raised $105M so far, while Neon nabs $103M (including a very recent [$46M series B](https://neon.tech/blog/series-b-funding)).

## PlanetScale or Neon

|                    | PlanetScale                                                              | Neon                                                                     |
| ------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Architecture       | Shared-nothing, sharded compute and storage unit                         | Shared-storage, separated compute and storage                            |
| Compatibility      | Limited by the underlying shared-nothing architecture                    | Near-compatiable                                                         |
| Developer Workflow | End-to-end experience                                                    | Instantaneous and cost-effective branching                               |
| Scalability        | Scale out to near infinite                                               | Scale up to an extent, scale-to-zero elasticity                          |
| Operability        | Comprehensive, polished tooling                                          | Essential, pragmatic tooling                                             |
| Integration        | Typical database integrations                                            | Novel integrations enabled by instant branching and elasticity           |
| Compliance         | SOC 2 type 2, HIPAA                                                      | SOC2 Type 1                                                              |
| Open Source        | Close-sourced paid cloud service; Open-sourced database under Apache-2.0 | Close-sourced paid cloud service; Open-sourced database under Apache-2.0 |
| Pricing            | Row reads/writes + storage + HA                                          | Computation + storage + data transfer                                    |
| Funding            | $105M                                                                    | $103M                                                                    |

Overall, PlanetScale provides a cohensive experience for every database tasks. Originally, it's a hosted MySQL-compatiable Vitess service only for hyperscalers. Since [pivoting to developers](https://planetscale.com/blog/announcing-planetscale-the-database-for-developers), PlanetScale has
transformed into an advanced serverless database platform that happens to speak the MySQL dialect.

Neon debuted later, and has a very similar value proposition as the new PlanetScale. Unlike PlanetScale,
Neon knows its targetting audiences from day 1, and purposefully builds the technology catering to them:

- Git like branch management, in particular, the instant branching including both schema and data.
- Serverless database with autoscaling up and down.
- Embrace the rise of Postgres and maintain near-perfect Postgres compatibility.

## Beyond PlanetScale and Neon

Today, when choosing the database system for your next project, the very first thing to consider is
no longer between [Postgres vs. MySQL](/blog/postgres-vs-mysql). Instead, it's whether to choose
RDBMS or other genres. RDBMS still domainates the database market by shares, however, ironically,
this space doesn't advance as much as other database segments in the cloud era. Customers do have [a plethora of choices](/blog/database-as-a-service-dbaas-provider/), but none is coming close to MongoDB Altas for NoSQL
or Snowflake for OLAP.

PlanetScale and Neon are similar to each other, they are also similar to MongoDB / Snowflake:

- Like MongoDB, PlanetScale uses shared-nothing architecture, provides
  a comprehensive database platform, is developer obsessed, and can tell great product stories.

- Like Snowflake, Neon brings the novel shared-storage architecture to the staggering OLTP space, uses Postgres dialect, and also values developer experience.

Both PlanetScale and Neon could become the next MongoDB / Snowflake for modern RDBMS database-as-a-service (DBaaS). We've all been waiting too long for this.

---

FWIW, if you still prefer vanilla MySQL/Postgres and want PlanetScale's database change workflow or Neon's visual SQL Editor, please check out [Bytebase](/). Bytebase is a database tool for all mainstream databases, covering database change, query, security and governance all-in-one. It provides more customizable [change workflow](/docs/concepts/database-change-workflow/) and visual SQL Editor integrated with [access control](/docs/security/data-access-control/) and [data masking](/docs/security/mask-data/).

![bytebase](/content/blog/planetscale-vs-neon/bytebase.webp)

## Further Readings

- [Announcing PlanetScale: The database for developers](https://planetscale.com/blog/announcing-planetscale-the-database-for-developers)
- [PlanetScale increases plans to include billions of reads](https://news.ycombinator.com/item?id=30457960)
- [Neon – Serverless Postgres](https://news.ycombinator.com/item?id=31536827)
- [Architecture decisions in Neon](https://neon.tech/blog/architecture-decisions-in-neon)
- [Postgres vs. MySQL](/blog/postgres-vs-mysql)
- [Postgres vs. MongoDB](/blog/postgres-vs-mongodb)
- [Database as a Service (DBaaS) Provider](/blog/database-as-a-service-dbaas-provider/)
