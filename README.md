# Knot MCP Server

**One shared brain for all your AIs.**

Knot (`https://api.connectknot.com/mcp`) is a remote Model Context Protocol (MCP) server with OAuth 2.1 + PKCE authentication. Connect ChatGPT, Claude, Cursor, VS Code, Cline, Windsurf, Antigravity, and Gemini so your decisions, project state, and vetted context carry across every AI you use without starting over.

- **Website:** [https://connectknot.com](https://connectknot.com)
- **Developer Quickstart:** [https://connectknot.com/developers/quickstart](https://connectknot.com/developers/quickstart)
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

---

## Synced MCP Tool Surface (24 Standard Tools)

Standard user connections expose **24 capability-gated tools** across 4 groups. Three additional developer-admin tools (`knot_provision_developer_app`, `knot_list_developer_apps`, `knot_rotate_developer_credential`) are gated behind the opt-in `knot:developer` scope.

| Tool Group | Tools |
| :--- | :--- |
| **Turn-0 Recovery & Retrieval (`6`)** | `get_context_recovery`, `get_relevant_context`, `get_shared_understanding`, `search_context`, `list_context`, `get_context` |
| **Multi-Domain Contributions (`4`)** | `batch_propose_context`, `propose_context`, `sync_context_snapshot`, `propose_board_card` |
| **Cross-Agent Handoffs & Activity (`7`)** | `report_active_state`, `get_active_state`, `create_handoff`, `check_pending_handoffs`, `list_handoffs`, `update_handoff_status`, `context_diff` |
| **Workspace Scope & Sharing (`7`)** | `knot_list_scopes`, `knot_set_active_scope`, `knot_rename_project`, `knot_share_project`, `knot_list_members`, `knot_list_shared_updates`, `get_knot_connection_status` |

---

## License

[MIT](./LICENSE) © [Knot](https://connectknot.com)
