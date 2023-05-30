import Route from '@/lib/route';

const SEO_PAGES_DATA = {
  TECHLEAD: {
    title: 'Improve team velocity and reduce risk',
    description:
      'Teams using Bytebase will automatically follow industry best practice for managing database schema changes. Tech leads will see an improved development velocity and reduced outages caused by database changes.',
  },
  DBA: {
    title: '10x DBA operational efficiency',
    description:
      'Bytebase provides a collaborative web-console and cohensive workflow to allow DBA to manage database tasks and handle developer tickets much more efficently than traditonal tools.',
  },
  DEVELOPER: {
    title: 'Holistic view of database schema changes',
    description:
      'Regardless of working as an IC in a team or managing your own side project, developers using Bytebase will have a holistic view of all the related database info, the ongoing database schema change tasks and the past database migration history.',
  },
  MYSQL: {
    title: 'MySQL + Bytebase',
    description:
      "MySQL is the world's most popular open source database. Bytebase supports MySQL database natively to manage schema changes, backups, record migration history and etc.",
    linkText: 'More about MySQL.',
    linkUrl: 'https://www.mysql.com/',
    linkTarget: '_blank',
  },
  POSTGRES: {
    title: 'PostgreSQL + Bytebase',
    description:
      "PostgreSQL is the world's most advanced open source relational database. Bytebase supports PostgreSQL database natively to manage schema changes, backups, record migration history and etc.",
    linkText: 'More about PostgreSQL.',
    linkUrl: 'https://www.postgresql.org/',
    linkTarget: '_blank',
  },
  CLICKHOUSE: {
    title: 'ClickHouse + Bytebase',
    description:
      'ClickHouse is an open-source, high performance columnar OLAP database management system for real-time analytics using SQL.',
    linkText: 'More about ClickHouse.',
    linkUrl: 'https://clickhouse.com/',
    linkTarget: '_blank',
  },
  TIDB: {
    title: 'TiDB + Bytebase',
    description:
      'TiDB is an open-source, cloud-native, distributed SQL database for elastic scale and real-time analytics. Bytebase supports TiDB database natively to manage schema changes, backups, record migration history and etc.',
    linkText: 'More about TiDB.',
    linkUrl: 'https://www.pingcap.com/',
    linkTarget: '_blank',
  },
  SNOWFLAKE: {
    title: 'Snowflake + Bytebase',
    description: 'Snowflake-feature',
    linkText: 'More about Snowflake.',
    linkUrl: 'https://www.snowflake.com/en/',
    linkTarget: '_blank',
  },
  GITLAB: {
    title: 'GitLab + Bytebase Database-as-Code',
    description:
      'Bytebase integrates with GitLab to allow team to manage database migration scripts in the GitLab repository. Migration pipeline is triggered on observing new migration script push event.',
    linkText: 'View detailed guide.',
    linkUrl: `${Route.DOCS_GITLAB}/`,
  },
  GITHUB: {
    title: 'GitHub + Bytebase Database-as-Code',
    description:
      'Bytebase integrates with GitHub to allow team to manage database migration scripts in the GitHub repository. Migration pipeline is triggered on observing new migration script push event.',
    linkText: 'View detailed guide.',
    linkUrl: `${Route.DOCS_GITHUB}/`,
  },
  SLACK: {
    title: 'Slack + Bytebase',
    description:
      'Bytebase supports webhook to post database schema related events to the configured Slack channel. Those webhook events are specifically customized for Slack in order to display the optimal format.',
  },
  DISCORD: {
    title: 'Discord + Bytebase',
    description:
      'Bytebase supports webhook to post database schema related events to the configured Discord channel. Those webhook events are specifically customized for Discord in order to display the optimal format.',
  },
  TEAMS: {
    title: 'Teams + Bytebase',
    description:
      'Bytebase supports webhook to post database schema related events to the configured Microsoft Teams channel. Those webhook events are specifically customized for Teams in order to display the optimal format.',
  },
  DINGTALK: {
    title: 'DingTalk + Bytebase',
    description:
      'Bytebase supports webhook to post database schema related events to the configured DingTalk group. Those webhook events are specifically customized for DingTalk in order to display the optimal format.',
  },
  LARK: {
    title: 'Lark + Bytebase',
    description:
      'Bytebase supports webhook to post database schema related events to the configured Feishu group. Those webhook events are specifically customized for Feishu in order to display the optimal format.',
  },
  WECOM: {
    title: 'WeCom + Bytebase',
    description: 'integration.wecom-',
  },
};

export default SEO_PAGES_DATA;
