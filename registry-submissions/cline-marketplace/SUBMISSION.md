# Cline MCP Marketplace Submission — Knot

Submit at: `https://github.com/cline/mcp-marketplace/issues/new`

## Submission Fields

- **Server Name:** Knot
- **Namespace / ID:** `com.connectknot/knot` (and `io.github.ConnectKnot/knot`)
- **Repository URL:** `https://github.com/ConnectKnot/knot-mcp`
- **Website / Documentation URL:** `https://connectknot.com/developers/quickstart`
- **Agent Instructions (`llms-installation.md` / `agents.md`):** `https://connectknot.com/agents.md`
- **Logo / Icon (512x512 PNG):** `https://api.connectknot.com/api/brand/knot-icon.png`
- **Transport:** Remote Streamable HTTP (`https://api.connectknot.com/mcp`)
- **Authentication:** OAuth 2.1 with PKCE & Dynamic Client Registration (no manual API key required)
- **Short Description (<=100 chars):**
  Shared memory across ChatGPT, Claude, Cursor, and Gemini. OAuth 2.1 context & supersession.

## Recommended Cline MCP Configuration (`cline_mcp_settings.json`)

```json
{
  "mcpServers": {
    "knot": {
      "url": "https://api.connectknot.com/mcp",
      "type": "streamableHttp"
    }
  }
}
```
