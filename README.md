# Knot MCP Server

**Governed shared context across all your AIs and enterprise VPCs.**

Knot (`https://api.connectknot.com/mcp`) is a remote Streamable HTTP Model Context Protocol (MCP) server with OAuth 2.1 + PKCE authentication. Connect ChatGPT, Claude, Cursor, Gemini, Kiro, Perplexity, VS Code, Windsurf, and Google Antigravity so your decisions stay on one active `v2` truth with deterministic `v1 -> v2` supersession lineage, scoped permissions, immediate shredding for uploaded documents and URLs, and self-hosted deployment via **Knot EnterpriseBrain**.

- **Website:** [https://connectknot.com](https://connectknot.com)
- **Quickstart & SDKs:** [https://connectknot.com/quickstart](https://connectknot.com/quickstart)
- **Enterprise Self-Hosted VPC (EnterpriseBrain):** [https://connectknot.com/enterprise-brain](https://connectknot.com/enterprise-brain)
- **CARMA-16 Whitepaper:** [https://connectknot.com/whitepaper](https://connectknot.com/whitepaper)
- **Privacy Policy:** [https://connectknot.com/privacy](https://connectknot.com/privacy)
- **Terms of Service:** [https://connectknot.com/terms](https://connectknot.com/terms)
- **Support:** [https://connectknot.com/support](https://connectknot.com/support)
- **Remote MCP Endpoint:** `https://api.connectknot.com/mcp` (`streamable-http`)
- **Official MCP Registry:** `com.connectknot/knot` (`io.github.ConnectKnot/knot` deprecated)

---

## 1-Click Install

- **Claude Desktop / Web:** `https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Knot&connectorUrl=https%3A%2F%2Fapi.connectknot.com%2Fmcp`
- **Cursor:** `https://cursor.com/install-mcp?name=Knot&config=eyJ1cmwiOiJodHRwczovL2FwaS5jb25uZWN0a25vdC5jb20vbWNwIn0%3D`
- **VS Code:** `https://vscode.dev/redirect/mcp/install?name=Knot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapi.connectknot.com%2Fmcp%22%7D`
- **Kiro IDE:** `https://kiro.dev/launch/mcp/add?name=Knot&config=%7B%22url%22%3A%22https%3A%2F%2Fapi.connectknot.com%2Fmcp%22%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D`
- **Claude Code CLI:**
  ```bash
  claude mcp add --transport http knot https://api.connectknot.com/mcp
  ```

---

## Standard `mcp.json` Configuration (OAuth 2.1)

For Cursor, VS Code, Windsurf, Cline, Antigravity, or Claude Desktop:

```json
{
  "mcpServers": {
    "knot": {
      "type": "http",
      "url": "https://api.connectknot.com/mcp"
    }
  }
}
```

When your AI client connects for the first time, it discovers `https://api.connectknot.com/.well-known/oauth-protected-resource` and opens your browser to sign in and approve access on [connectknot.com](https://connectknot.com).

For self-hosted regulated deployments, run **Knot EnterpriseBrain** inside your AWS, GCP, Azure, or on-prem VPC (`KNOT_DEPLOYMENT_MODE=self_hosted`) and point internal clients at your private `/mcp` URL with customer KMS keys and zero outbound egress. See [https://connectknot.com/enterprise-brain](https://connectknot.com/enterprise-brain).

---

## Synced MCP Tool Surface (28 Standard Tools)

Standard user connections expose **28 capability-gated tools** across 5 groups. Developer-admin tools remain gated behind opt-in developer scopes.

| Tool Group | Tools |
| :--- | :--- |
| **Turn-0 Recovery & Retrieval (`6`)** | `get_context_recovery`, `get_relevant_context`, `get_shared_understanding`, `search_context`, `list_context`, `get_context` |
| **Multi-Domain Governed Writes (`4`)** | `batch_propose_context`, `propose_context`, `sync_context_snapshot`, `propose_board_card` |
| **Shredded Multimodal & URL Ingestion (`4`)** | `create_ingest_drop`, `get_ingest_drop_status`, `ingest_url`, `purge_ingest_receipt` |
| **Cross-Agent Handoffs & Activity (`7`)** | `report_active_state`, `get_active_state`, `create_handoff`, `check_pending_handoffs`, `list_handoffs`, `update_handoff_status`, `context_diff` |
| **Workspace Scope & Sharing (`7`)** | `knot_list_scopes`, `knot_set_active_scope`, `knot_rename_project`, `knot_share_project`, `knot_list_members`, `knot_list_shared_updates`, `get_knot_connection_status` |

---

## License

[MIT](./LICENSE) © [Knot](https://connectknot.com)
