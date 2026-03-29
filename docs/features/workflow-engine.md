# Workflow Engine

## Overview

The Workflow Engine is a visual tool for designing and managing automated workflows within DETO. Workflows are built as node graphs — each node represents an action or decision point, and connections between nodes define the sequence in which those actions occur.

Product teams use the Workflow Engine to automate multi-step processes such as content approval chains, notification sequences, or data processing pipelines without writing code.

## Key Capabilities

- **Build visual workflows** — Drag-and-drop nodes onto a canvas and connect them to define a process
- **Configure node actions** — Set what each node does: send a notification, update a record, trigger a downstream step
- **Manage workflow positions** — Rearrange nodes on the canvas for clarity and maintainability
- **Activate and deactivate workflows** — Control whether a workflow is running or paused
- **Edit existing workflows** — Modify node configurations and connections without recreating the workflow from scratch
- **View workflow history** — Inspect past runs and their outcomes

## User Guide

### Creating a New Workflow

1. Navigate to **Workflow Engine** from the main navigation.
2. Click **New Workflow** and enter a name and optional description.
3. The canvas opens with a start node already placed.
4. Drag action nodes from the panel on the left onto the canvas.
5. Connect nodes by drawing a line from one node's output to the next node's input.
6. Configure each node by clicking it and filling in the required fields.
7. Click **Save Draft** to save your work, or **Activate** to start running the workflow.

![Building a workflow on the visual canvas](image-placeholder)

### Editing a Workflow

1. Select a workflow from the list.
2. The canvas opens showing the current node graph.
3. Drag nodes to reposition, click connections to delete them, or click any node to edit its configuration.
4. Click **Save** to update the workflow.

![Editing an existing workflow](image-placeholder)

### Activating and Deactivating a Workflow

1. From the workflow list, locate the workflow you want to change.
2. Click the **Activate** toggle to start the workflow or **Deactivate** to pause it.
3. The status indicator on the row updates immediately.

![Activating a workflow](image-placeholder)

## Configuration Options

- **Node types** — The available node types (notifications, data updates, triggers) are determined by the platform; contact your system administrator to request additional node types
- **Access control** — Creating and activating workflows may be restricted to specific roles

## Related Features

- [Config Registry](config-registry.md) — Workflows can trigger configuration changes through the registry
- [Recommendations](recommendations.md) — Workflows can automate the approval and publishing of recommendations
- [Survey Builder](survey-builder.md) — Workflows can be triggered by survey completion events
