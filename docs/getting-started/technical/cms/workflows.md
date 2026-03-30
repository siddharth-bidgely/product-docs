# Content Workflows

The CMS uses state machines to manage content lifecycle — from creation through review to publication.

## Recommendation Review Workflow

```mermaid
stateDiagram-v2
    [*] --> TODO
    TODO --> READY_FOR_QA : Submit for review
    READY_FOR_QA --> TODO : Return for edits
    READY_FOR_QA --> READY_TO_PUBLISH : Approve
    READY_TO_PUBLISH --> [*] : Publish
```

### Actions by Role

| State | Content Creator | Content Publisher |
|-------|----------------|-------------------|
| TODO | Save, Edit | Save, Edit |
| READY_FOR_QA | (read only) | Approve, Return |
| READY_TO_PUBLISH | (read only) | Publish |

## Draft/Publish Versioning

Content types that support draft/publish maintain two versions:

- **Draft** — Working version being edited
- **Published** — Live version visible to external consumers

Changes to a published item create a "Modified" state until explicitly published or discarded.

## Config Registry Workflow

Configurations follow an approval workflow:

```mermaid
stateDiagram-v2
    [*] --> TODO
    TODO --> READY_FOR_QA : Submit
    READY_FOR_QA --> APPROVED : Approve
    READY_FOR_QA --> REJECTED : Reject
    REJECTED --> TODO : Reopen
```
