import { FEATURES } from './features';

const PLANS = {
  COMMUNITY: 'Community',
  PRO: 'Pro',
  ENTERPRISE: 'Enterprise',
};

const PRICING_PLANS = new Map([
  //Change Management
  ['STATE_BASED_CHANGE', 'COMMUNITY'],
  ['MIGRATION_BASED_CHANGE', 'COMMUNITY'],
  ['SQL_REVIEW', 'COMMUNITY'],
  ['CHANGELIST', 'COMMUNITY'],
  ['CHANGE_HISTORY', 'COMMUNITY'],
  ['TERRAFORM', 'COMMUNITY'],
  ['SCHEDULE_CHANGE', 'PRO'],
  ['ROLLOUT_POLICY', 'PRO'],
  ['SYNCHRONIZE_SCHEMA', 'COMMUNITY'],
  ['ONLINE_SCHEMA_CHANGE', 'PRO'],
  ['BATCH_CHANGE', 'ENTERPRISE'],
  ['CUSTOM_APPROVAL', 'ENTERPRISE'],

  //Not in the pricing page
  ['DRIFT_DETECTION', 'ENTERPRISE'],
  ['ROLLBACK_DATA_CHANGES', 'COMMUNITY'],

  //SQL Editor
  ['AUTO_COMPLETE', 'COMMUNITY'],
  ['SCHEMA_EDITOR', 'COMMUNITY'],
  ['SCHEMA_DIAGRAM', 'COMMUNITY'],
  ['CSV_JSON_EXPORT', 'COMMUNITY'],
  ['ADMIN_MODE', 'COMMUNITY'],
  ['SAVED_SQL', 'COMMUNITY'],
  ['BATCH_QUERY', 'ENTERPRISE'],
  ['READONLY_CONNECTION', 'ENTERPRISE'],

  //Collaboration
  ['INBOX_NOTIFICATION', 'COMMUNITY'],
  ['UI_SQL_REVIEW', 'COMMUNITY'],
  ['SHARED_SQL', 'PRO'],
  ['WEBHOOK_INTEGRATION', 'COMMUNITY'],
  ['GITOPS_WORKFLOW', 'COMMUNITY'],

  //Data Security & Compliance
  ['RBAC', 'COMMUNITY'],
  ['SLOW_QUERY', 'COMMUNITY'],
  ['ARCHIVING', 'COMMUNITY'],
  ['BACKUP_POLICY', 'PRO'],
  ['SECRET_VARIABLE', 'PRO'],
  ['EXTERNAL_SECRET_MANAGER', 'ENTERPRISE'],
  ['SSO', 'ENTERPRISE'],
  ['SCIM', 'ENTERPRISE'],
  ['2FA', 'ENTERPRISE'],
  ['SSH_TUNNEL', 'ENTERPRISE'],
  ['QUERY_EXPORT_APPROVAL_WORKFLOW', 'ENTERPRISE'],
  ['ENVIRONMENT_TIER', 'ENTERPRISE'],
  ['DATA_MASKING', 'ENTERPRISE'],
  ['DATA_ACCESS_CONTROL', 'ENTERPRISE'],
  ['WATERMARK', 'ENTERPRISE'],
  ['AUDIT_LOG', 'ENTERPRISE'],
  ['SIGNUP_RESTRICTION', 'ENTERPRISE'],
  ['SIGNIN_FREQUENCY', 'ENTERPRISE'],
  ['ANOMALY_CENTER', 'COMMUNITY'],

  //AI Assistant
  ['QUERY_WITH_NATURAL_LANGUAGE', 'COMMUNITY'],
  ['EXPLAIN_SQL', 'COMMUNITY'],
  ['INDEX_ADVISOR', 'COMMUNITY'],

  //Bespoke
  ['SUPPORT', 'ENTERPRISE'],
  ['CUSTOM_LOGO', 'ENTERPRISE'],
  ['ROADMAP_PRIORITIZATION', 'ENTERPRISE'],
  ['CUSTOM_MSA', 'ENTERPRISE'],

  //Not in the pricing page
  ['CUSTOM_ROLES', 'ENTERPRISE'],
  ['ANNOUNCEMENT', 'ENTERPRISE'],
]);

export { PRICING_PLANS, FEATURES, PLANS };
