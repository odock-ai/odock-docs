# Media To Capture — Flow Studio, Security Console, Model Catalog, Plugins

Every gif/screenshot placeholder for these doc sections is an MDX comment
(`{/* GIF: ... */}`), so no broken image or stray link renders. Use this as the
capture checklist.

To fill one in: capture the asset, save it to `public/gifs/<name>.gif` or
`public/images/<name>.png`, then replace the `{/* GIF: ... */}` comment with:

```
![<description>](/gifs/<name>.gif)
```

## Flow Studio

| # | Asset | Description | Used in |
| - | --- | --- | --- |
| 1 | `/gifs/flow-studio-library.gif` | Flow Studio library — flow cards with the organisation-wide activation switch | [content/docs/plugins/flow-studio/index.mdx](content/docs/plugins/flow-studio/index.mdx) |
| 2 | `/gifs/flow-studio-library.gif` | Flow Studio library — flow cards with the organisation-wide activation switch | [content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx](content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx) |
| 3 | `/gifs/flow-studio-create-flow.gif` | Creating a new flow from the library | [content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx](content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx) |
| 4 | `/gifs/flow-studio-if-node.gif` | Adding and configuring the If node | [content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx](content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx) |
| 5 | `/gifs/flow-studio-complete-graph.gif` | Completed pre-route graph: If → Route Model → Send Webhook, false branch straight to end | [content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx](content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx) |
| 6 | `/gifs/flow-studio-activate-org.gif` | Switching a flow to Org-wide active from the library | [content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx](content/docs/plugins/flow-studio/tutorials/build-your-first-flow.mdx) |
| 7 | `/gifs/flow-studio-key-automation-tab.gif` | API key Automation tab — flow picker | [content/docs/plugins/flow-studio/tutorials/activate-a-key-flow.mdx](content/docs/plugins/flow-studio/tutorials/activate-a-key-flow.mdx) |
| 8 | `/gifs/flow-studio-read-trace.gif` | Reading a flow trace against the canvas | [content/docs/plugins/flow-studio/tutorials/debug-a-flow-run.mdx](content/docs/plugins/flow-studio/tutorials/debug-a-flow-run.mdx) |

Note: #1 and #2 use the same asset. Capture once and reuse it.

## Security Console

| # | Asset | Description | Used in |
| - | --- | --- | --- |
| 9 | `/gifs/security-console-overview.gif` | Security Console overview — stat tiles, activity timeline, and heatmap | [content/docs/security-and-guardrails/safetysec-engine/security-console.mdx](content/docs/security-and-guardrails/safetysec-engine/security-console.mdx) |
| 10 | `/gifs/security-console-actor-profile.gif` | Opening a threat actor's profile | [content/docs/security-and-guardrails/safetysec-engine/security-console.mdx](content/docs/security-and-guardrails/safetysec-engine/security-console.mdx) |
| 11 | `/gifs/security-console-add-block.gif` | Adding a manual block from the console | [content/docs/security-and-guardrails/safetysec-engine/blocklist-and-threat-actors.mdx](content/docs/security-and-guardrails/safetysec-engine/blocklist-and-threat-actors.mdx) |
| 12 | `/gifs/security-console-configuration.gif` | Configuration tab — mode, thresholds, module toggles, and redaction pattern chips | [content/docs/security-and-guardrails/safetysec-engine/policy-configuration.mdx](content/docs/security-and-guardrails/safetysec-engine/policy-configuration.mdx) |

## Model Catalog

| # | Asset | Description | Used in |
| - | --- | --- | --- |
| 13 | `/gifs/model-catalog-org-sync.gif` | Syncing models into an organisation's catalog, choosing between provider and Odock Catalog sources | [content/docs/models-and-mcp/model-catalog/sync-to-your-organisation.mdx](content/docs/models-and-mcp/model-catalog/sync-to-your-organisation.mdx) |

## Plugins

| # | Asset | Description | Used in |
| - | --- | --- | --- |
| 14 | `/gifs/plugins-marketplace-grid.gif` | Marketplace grid — cards with images, tier badges, and filters | [content/docs/plugins/marketplace.mdx](content/docs/plugins/marketplace.mdx) |
| 15 | `/gifs/plugins-profile-tabs.gif` | Plugin profile — configuration, Admin Variables, Access, and Keys tabs | [content/docs/plugins/marketplace.mdx](content/docs/plugins/marketplace.mdx) |
| 16 | `/gifs/plugins-board-layout.gif` | Plugin board — columns per stage, lane sections, locked baseline rows | [content/docs/plugins/plugin-board.mdx](content/docs/plugins/plugin-board.mdx) |
| 17 | `/gifs/plugins-key-chain.gif` | API key Plugins section — key plugin chain with a read-only organisation banner | [content/docs/plugins/api-key-plugin-chain.mdx](content/docs/plugins/api-key-plugin-chain.mdx) |
| 18 | `/gifs/plugins-activate-and-configure.gif` | Activating a plugin and setting its configuration and admin variables | [content/docs/plugins/tutorials/activate-a-marketplace-plugin.mdx](content/docs/plugins/tutorials/activate-a-marketplace-plugin.mdx) |
| 19 | `/gifs/plugins-board-drag-drop.gif` | Dragging a plugin card into a stage column and lane section | [content/docs/plugins/tutorials/build-an-organisation-plugin-board.mdx](content/docs/plugins/tutorials/build-an-organisation-plugin-board.mdx) |
| 20 | `/gifs/plugins-key-bind.gif` | Adding a plugin to an API key's plugin chain and setting its execution variables | [content/docs/plugins/tutorials/bind-a-plugin-to-an-api-key.mdx](content/docs/plugins/tutorials/bind-a-plugin-to-an-api-key.mdx) |

## Total

20 references, 19 unique assets (flow-studio-library.gif is reused once).

The Model Catalog and Plugins sections do not document platform/admin-side curation — public docs stay scoped to organisation-level work, so no admin-only pages or assets are listed.
