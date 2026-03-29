# RBAC & Permissions

The CMS implements role-based access control (RBAC) to manage who can create, edit, review, and publish content.

## Roles

| Role | Description | Capabilities |
|------|-------------|-------------|
| Content Creator | Creates and edits content | Create drafts, edit, save |
| Content Publisher | Reviews and publishes content | All Creator capabilities + publish, unpublish |
| Utility Admin | Manages utility-specific settings | View and modify utility configurations |

## Permission Policies

Access is enforced at the API route level via policies:

| Policy | Applied To | Description |
|--------|-----------|-------------|
| Recommendation Create | Recommendation creation | Requires Content Creator role + valid utility |
| Recommendation Publish | Publish/unpublish | Requires Content Publisher role |
| Recommendation Update | Bulk updates | Requires Content Creator role |
| Config Approve | Config approval workflow | Requires authorized role |
| Config Submit | Config submission | Requires authorized role |
| Survey Template Publish | Survey publishing | Requires Content Publisher role |
| Migration Internal | Migration endpoints | Internal service access only |
