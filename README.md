# Knot MCP Server

**One shared brain for all your AIs.**

Knot (`https://api.connectknot.com/mcp`) is a remote Model Context Protocol (MCP) server with OAuth 2.1 + PKCE authentication. Connect ChatGPT, Claude, Cursor, VS Code, Cline, Windsurf, and Gemini so your decisions, project state, and vetted context carry across every AI you use without starting over.

- **Website:** [https://connectknot.com](https://connectknot.com)
- **Developer Quickstart:** [https://connectknot.com/developers/quickstart](https://connectknot.com/developers/quickstart)
- **Remote MCP Endpoint:** `https://api.connectknot.com/mcp` (`streamable-http`)
- **Official MCP Registry:** `com.connectknot/knot` & `io.github.ConnectKnot/knot`

---

## 1-Click Install

- **Cursor:** `cursor://anysphere.cursor-deeplink/mcp/install?name=knot&config=eyJ1cmwiOiJodHRwczovL2FwaS5jb25uZWN0a25vdC5jb20vbWNwIn0%3D`
- **VS Code:** `vscode:mcp/install?%7B%22name%22%3A%22knot%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapi.connectknot.com%2Fmcp%22%7D`
- **Claude Code CLI:**
  ```bash
  claude mcp add --transport http knot https://api.connectknot.com/mcp
  ```

---

## Standard `mcp.json` Configuration (OAuth 2.1)

For Cursor, VS Code, Windsurf, Cline, or Claude Desktop:

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

## Core MCP Tools

| Tool | Description |
| :--- | :--- |
| `get_relevant_context` | Point-in-time factual retrieval of active, historical, or trajectory context across your personal or shared project Knots. |
| `get_context_recovery` | Full cross-AI session recovery to pick up where another AI left off. |
| `propose_context` / `batch_propose_context` | Save durable facts, decisions, constraints, and goals with explicit supersession lineage (`updates_ref` / `supersedes_context_id`). |
| `create_handoff` / `check_pending_handoffs` | Hand off structured multi-step tasks between connected AI agents (e.g., Claude -> Cursor). |
| `knot_list_scopes` / `knot_set_active_scope` | Switch between your Personal Knot and collaborative Team Shared Knots. |

---

## License

MIT © [Knot](https://connectknot.com)
