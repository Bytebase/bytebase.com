const Route = {
  INDEX: '/',
  ABOUT: '/about',
  USECASES: '/usecases',
  PRICING: '/pricing',
  BRAND: '/about#brand-kit',
  TECHSTACK: '/techstack',
  SQL_REVIEW_GUIDE: '/sql-review-guide',
  BYTEBASE_PLUS: '/bytebase-plus',
  DEMO: '/request-demo',
  CONFIRM_DEMO: '/confirm-demo',

  // seo pages
  DBA: '/usecase/dba',
  DEVELOPER: '/usecase/developer',
  TECHLEAD: '/usecase/techlead',

  // terms
  REFUND: '/refund',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  SLA: '/sla',
  JOBS: '/about#crew',
  CONTACTS: '/contact-us',

  DATABASE_GLOSSARY: '/database-glossary',
  CHANGELOG: '/changelog',
  TUTORIAL: '/tutorial',
  BLOG: '/blog',
  BLOG_CATEGORY: '/blog/category',

  // docs
  DOCS: '/docs',
  DOCS_SELF_HOST: '/docs/get-started/self-host',
  DOCS_CONCEPT: '/docs/concepts/data-model',
  DOCS_DB: '/docs/introduction/supported-databases',
  DOCS_API: '/docs/api/overview',
  DOCS_CLI: '/docs/cli/overview',
  DOCS_HOW_TO: '/docs/how-to/sql-review/postgres-sql-review-guide',
  SQL_GITHUB_APP: '/docs/sql-review/sql-advisor/github-app',
  DOCS_CHANGE_DATABASE: '/docs/change-database/change-workflow',
  DOCS_SQL_ADVISOR: '/docs/sql-review/sql-advisor/overview',
  DOCS_SQL_EDITOR: '/docs/sql-editor/overview',
  DOCS_SECURITY: '/docs/security/data-access-control',
  DOCS_INDEX_ADVISOR: '/docs/slow-query/overview',
  DOCS_ANOMALY_CENTER: '/docs/administration/anomaly-center',
  DOCS_DRIFT_DETECTION: '/docs/change-database/drift-detection',
  DOCS_DISASTER_RECOVERY: '/docs/disaster-recovery/backup',
  DOCS_VCS_INTEGRATION: '/docs/vcs-integration/overview',
  DOCS_BATCH_CHANGE: '/docs/change-database/batch-change',
  DOCS_ONLINE_SHEMA_CHANGE: '/docs/change-database/online-schema-migration-for-mysql',
  DOCS_PITR: '/docs/disaster-recovery/point-in-time-recovery-for-mysql',
  DOCS_RBAC: '/docs/concepts/roles-and-permissions',
  DOCS_SSO: '/docs/administration/sso/overview',
  DOCS_GITLAB: '/docs/vcs-integration/self-host-gitlab/',
  DOCS_GITHUB: '/docs/vcs-integration/github-com/',
  DOCS_BITBUCKET: '/docs/vcs-integration/bitbucket-org/',

  // comparison
  VS_LIQUIBASE: '/blog/bytebase-vs-liquibase',
  VS_FLYWAY: '/blog/bytebase-vs-flyway',
  VS_NAVICAT: '/blog/stop-using-navicat',
  PG_VS_MYSQL: '/blog/postgres-vs-mysql',

  // databases
  DATABASE_MYSQL: '/database/mysql',
  DATABASE_POSTGRES: '/database/postgres',
  DATABASE_SNOWFLAKE: '/database/snowflake',
  DATABASE_ORACLE: '/database/oracle',
  DATABASE_SQLSERVER: '/database/sqlserver',
  DATABASE_MONGO: '/database/mongo',
  DATABASE_REDIS: '/database/redis',
  DATABASE_REDSHIFT: '/database/redshift',
  DATABASE_TIDB: '/database/tidb',
  DATABASE_CLICKHOUSE: '/database/clickhouse',
  DATABASE_MARIADB: '/database/mariadb',
  DATABASE_SPANNER: '/database/spanner',
  DATABASE_OCEANBASE: '/database/oceanbase',

  // integrations
  INTEGRATION_GITLAB: '/integration/gitlab',
  INTEGRATION_GITHUB: '/integration/github',
  INTEGRATION_BITBUCKET: '/integration/bitbucket',
  INTEGRATION_SLACK: '/integration/slack',
  INTEGRATION_DISCORD: '/integration/discord',
  INTEGRATION_TEAMS: '/integration/teams',
  INTEGRATION_DINGTALK: '/integration/dingtalk',
  INTEGRATION_LARK: '/integration/lark',
  INTEGRATION_WECOM: '/integration/wecom',

  // usecases
  SOLUTIONS: '/solutions',
  USECASE_DBA: '/usecase/dba',
  USECASE_TECHLEAD: '/usecase/techlead',
  USECASE_DEVELOPER: '/usecase/developer',

  // external
  LIVE_DEMO: 'https://demo.bytebase.com',
  DISCORD: 'https://discord.com/invite/huyw7gRsyA',
  TWITTER: 'https://twitter.com/Bytebase',
  GITHUB: 'https://github.com/bytebase/bytebase',
  STAR_HISTORY: 'https://star-history.com/#bytebase/bytebase',
  DB_COST: 'https://www.dbcost.com/',
  SQL_CHAT: 'https://www.sqlchat.ai/',
};

export default Route;
