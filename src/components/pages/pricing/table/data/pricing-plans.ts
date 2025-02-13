import { Plan } from '@/types/pricing';
import Route from '@/lib/route';

const COLORS = {
  community: '#172136',
  pro: '#3DB8F5',
  enterprise: '#5647EB',
};

const PLANS: { free: Plan; pro: Plan; enterprise: Plan } = {
  free: {
    title: 'community',
    description: `Standardized Procedure`,
    buttonText: 'Deploy in 5 Minutes',
    buttonTheme: 'primary-outline',
    buttonUrl: '/docs/get-started/self-host/#docker',
    changeManagement: {
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      'data-rollback': true,
      changelist: true,
      'change-history': true,
      terraform: true,
      schedule: false,
      'online-schema-change': false,
      'rollout-policy': { value: 'Basic', tooltip: 'Automatic' },
      'issue-setting': { value: 'Basic', tooltip: 'Labels' },
      synchronize: { value: 'Basic', tooltip: 'Sync from the latest schema version' },
      'batch-change': { value: 'Basic', tooltip: 'Multi-environment change' },
      'custom-approval': false,
      'password-restriction': false,
    },
    sql: {
      'auto-complete': true,
      'schema editor': true,
      'schema-diagram': true,
      csv: true,
      admin: true,
      script: true,
      chat: true,
      batch: false,
      connection: false,
    },
    collaboration: {
      ui: true,
      shared: true,
      gitops: {
        value: 'Basic',
        tooltip: 'GitOps CI/CD, SQL Review CI',
      },
      im: {
        value: 'Basic',
        tooltip: 'IM + Custom Webhook',
      },
    },
    security: {
      sso: false,
      rbac: true,
      'slow-query': true,
      archiving: true,
      'secret-variable': false,
      'signup-restriction': false,
      'secret-manager': false,
      scim: false,
      twofa: false,
      ssh: false,
      'query-and-export-workflow': false,
      environment: false,
      masking: false,
      'database-permission': false,
      watermark: false,
      'audit-log': false,
      'signin-frequency': false,
      anomaly: { value: 'Basic', tooltip: 'Connection failure' },
    },
    aiAssistant: {
      'query-with-natural-language': true,
      'explain-sql': true,
      'suggest-sql': true,
      'index-advisor': true,
    },
    bespoke: {
      support: 'Community',
      logo: false,
      roadmap: false,
      msa: false,
    },
  },
  pro: {
    title: 'pro',
    description: 'Advanced Collaboration',
    buttonText: 'Buy Now',
    buttonTheme: 'primary-outline',
    buttonUrl: Route.PRO_PAYMENT,
    additionalDescription: 'Monthly subscription, cancel anytime',
    changeManagement: {
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      'data-rollback': true,
      changelist: true,
      'change-history': true,
      terraform: true,
      schedule: true,
      'online-schema-change': true,
      'rollout-policy': { value: 'Advanced', tooltip: 'Automatic + Manual Review' },
      'issue-setting': {
        value: 'Advanced',
        tooltip: 'Title, label enforcement, auto backup, auto resolve',
      },
      synchronize: { value: 'Advanced', tooltip: 'Sync from arbitrary schema version' },
      'batch-change': {
        value: 'Advanced',
        tooltip: 'Multi-environment + Multi-region / Multi-tenancy change',
      },
      'custom-approval': false,
      'password-restriction': false,
    },
    sql: {
      'auto-complete': true,
      'schema editor': true,
      'schema-diagram': true,
      csv: true,
      admin: true,
      script: true,
      chat: true,
      batch: false,
      connection: false,
    },
    collaboration: {
      ui: true,
      shared: true,
      gitops: {
        value: 'Advanced',
        tooltip: 'Basic + Latest Schema Write-back, SQL Scripts Sync',
      },
      im: {
        value: 'Basic',
        tooltip: 'IM + Custom Webhook',
      },
    },
    security: {
      sso: {
        value: 'Basic',
        tooltip: 'Google & GitHub',
      },
      rbac: true,
      'slow-query': true,
      archiving: true,
      'secret-variable': true,
      'signup-restriction': true,
      'secret-manager': false,
      scim: false,
      twofa: false,
      ssh: false,
      'query-and-export-workflow': false,
      environment: false,
      masking: false,
      'database-permission': false,
      watermark: false,
      'audit-log': false,
      'signin-frequency': false,
      anomaly: { value: 'Basic', tooltip: 'Connection failure' },
    },
    aiAssistant: {
      'query-with-natural-language': true,
      'explain-sql': true,
      'suggest-sql': true,
      'index-advisor': true,
    },
    bespoke: {
      support: 'Email',
      logo: false,
      roadmap: false,
      msa: false,
    },
  },
  enterprise: {
    title: 'enterprise',
    description: 'Security and Compliance',
    buttonText: 'Contact Us',
    buttonTheme: 'primary-filled',
    buttonUrl: '/contact-us',
    additionalDescription: 'Free trial for 14 days',
    changeManagement: {
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      'data-rollback': true,
      changelist: true,
      'change-history': true,
      terraform: true,
      schedule: true,
      'online-schema-change': true,
      'rollout-policy': { value: 'Advanced', tooltip: 'Automatic + Manual Review' },
      'issue-setting': {
        value: 'Advanced',
        tooltip: 'Title, label enforcement, auto backup, auto resolve',
      },
      synchronize: { value: 'Advanced', tooltip: 'Sync from arbitrary schema version' },
      'batch-change': {
        value: 'Advanced',
        tooltip: 'Multi-environment + Multi-region / Multi-tenancy change',
      },
      'custom-approval': true,
      'password-restriction': true,
    },
    sql: {
      'auto-complete': true,
      'schema editor': true,
      'schema-diagram': true,
      csv: true,
      admin: true,
      script: true,
      chat: true,
      batch: true,
      connection: true,
    },
    collaboration: {
      ui: true,
      shared: true,
      gitops: {
        value: 'Advanced',
        tooltip: 'Basic + Latest Schema Write-back, SQL Scripts Sync',
      },
      im: {
        value: 'Advanced',
        tooltip: 'Basic + IM Approval',
      },
    },
    security: {
      sso: {
        value: 'Advanced',
        tooltip: 'Google, GitHub, GitLab, Microsoft, Okta, etc',
      },
      rbac: true,
      'slow-query': true,
      archiving: true,
      'secret-variable': true,
      'signup-restriction': true,
      'secret-manager': true,
      scim: true,
      twofa: true,
      ssh: true,
      'query-and-export-workflow': true,
      environment: true,
      masking: true,
      'database-permission': true,
      watermark: true,
      'audit-log': true,
      'signin-frequency': true,
      anomaly: { value: 'Advanced', tooltip: 'Basic + Schema drift detection' },
    },
    aiAssistant: {
      'query-with-natural-language': true,
      'explain-sql': true,
      'suggest-sql': true,
      'index-advisor': true,
    },
    bespoke: {
      support: 'Dedicated line with SLA',
      logo: true,
      roadmap: true,
      msa: true,
    },
  },
};

const LABELS = [
  {
    title: 'Change Management',
    items: {
      'state-based-change': 'State-based change',
      'migration-based-change': 'Migration-based change',
      'sql-check': '100+ automated SQL lint',
      'data-rollback': 'Data rollback',
      changelist: 'Changelist',
      'change-history': 'Change history',
      terraform: 'Terraform integration',
      schedule: 'Scheduled rollout',
      'online-schema-change': 'Online schema change',
      'rollout-policy': 'Rollout policy',
      'issue-setting': 'Issue setting',
      synchronize: 'Synchronize schema between databases',
      'batch-change': 'Batch change',
      'custom-approval': 'Custom approval workflow',
      'password-restriction': 'Password restriction',
    },
  },
  {
    title: 'SQL Editor',
    items: {
      'auto-complete': 'Auto complete',
      'schema editor': 'Schema editor',
      'schema-diagram': 'Schema diagram',
      csv: 'SQL / CSV / JSON / XML export',
      admin: 'Admin mode',
      script: 'Saved SQL script',
      chat: 'Query using natural language',
      batch: 'Batch query multiple databases',
      connection: 'Separate read-only connections',
    },
  },
  {
    title: 'Collaboration',
    items: {
      ui: 'UI based SQL review',
      shared: 'Shared SQL script',
      gitops: 'GitOps workflow',
      im: 'IM integration',
    },
  },
  {
    title: 'Data Security & Compliance',
    items: {
      sso: 'Single sign-on (SSO)',
      rbac: 'RBAC',
      'slow-query': 'Slow query',
      archiving: 'Archiving',
      'secret-variable': 'Secret variable',
      'signup-restriction': 'Self-signup restriction',
      'secret-manager': 'External secret manager',
      scim: 'SCIM',
      twofa: 'Two-factor authentication (2FA)',
      ssh: 'SSH tunnel',
      'query-and-export-workflow': 'Query and export approval workflow',
      environment: 'Environment tier',
      masking: 'Dynamic data masking',
      'database-permission': 'Fine-grained database permission',
      watermark: 'Watermark',
      'audit-log': 'Audit log',
      'signin-frequency': 'Sign-in frequency',
      anomaly: 'Anomaly detection',
    },
  },
  {
    title: 'AI Assistant',
    items: {
      'query-with-natural-language': 'Query with natural language',
      'explain-sql': 'Explain SQL',
      'suggest-sql': 'Suggest SQL',
      'index-advisor': 'Index advisor',
    },
  },
  {
    title: 'Bespoke',
    items: {
      support: 'Support',
      logo: 'Custom logo',
      roadmap: 'Roadmap prioritization',
      msa: 'Custom MSA',
    },
  },
];

export { PLANS, LABELS, COLORS };
