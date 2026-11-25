# Knot MCP Registry & Marketplace Submission Runbook

This directory contains the validated manifests, detail-card copy, and test cases to list Knot's remote Streamable HTTP MCP server (`https://api.connectknot.com/mcp`) across the Official MCP Registry and partner directories.

## 1. Official MCP Registry (`registry.modelcontextprotocol.io`, `v1.0.5`)

- **Manifest:** [`server.json`](../server.json)
- **Canonical Namespace:** `com.connectknot/knot` (`io.github.ConnectKnot/knot` is deprecated as superseded by `com.connectknot/knot`)
- **Schema:** `https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json`
- **Remote Endpoint:** `https://api.connectknot.com/mcp` (`streamable-http`)
- **Picked Description (`96` / `100` chars):** `One shared brain for ChatGPT, Claude, Gemini & Cursor: current decisions & VPC (connectknot.com)`
- **Standard Tool Surface:** `28` user-facing tools (including multimodal/URL shredded ingestion; developer-admin tools remain gated behind opt-in developer scopes)
- **Public Repository Reference:** `https://github.com/ConnectKnot/knot-mcp` (repo ID `1435883604`)
- **Enterprise Self-Hosted Option:** `Knot EnterpriseBrain` (`https://connectknot.com/enterprise-brain`)

### Publisher CLI Steps:
1. Install `mcp-publisher`:
   ```bash
   brew install mcp-publisher
   ```
2. Log in with HTTP authentication. The public key is served at `https://api.connectknot.com/.well-known/mcp-registry-auth`, so no DNS record is needed. Use the matching private key:
   ```bash
   mcp-publisher login http --domain connectknot.com --private-key "$KNOT_REGISTRY_KEY"
   ```
   *(Note: `mcp-publisher` stores only the most recent login token, so run `login` and `publish` together as a pair.)*
3. Publish from the repository root:
   ```bash
   mcp-publisher publish server.json
   ```
4. Verify listing status at `https://registry.modelcontextprotocol.io/v0/servers?search=connectknot`.

---

## 2. GitHub MCP Registry (VS Code & GitHub Copilot 1-Click Install)

- **Source:** Automatically ingests active servers from the Official MCP Registry (`registry.modelcontextprotocol.io`).
- **One-Click Install Deep Link (Live Now):**
  `https://vscode.dev/redirect/mcp/install?name=Knot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapi.connectknot.com%2Fmcp%22%7D`

---

## 3. Claude Connectors Directory (Anthropic)

- **Detail Card & Submission Pack:** [`claude-directory/SUBMISSION.md`](./claude-directory/SUBMISSION.md)
- **Technical Readiness:** Verified (`v1.0.4`, 28 standard tools, `destructiveHint: false` on read/propose surface, `openWorldHint: true` only where outbound URL fetch/share applies).
- **Detail Card Summary:**
  - **Name (`4` / `100` chars):** `Knot`
  - **Tagline (`54` / `55` chars):** `Governed shared context for every AI you use.`
  - **Categories:** `Productivity`, `Developer Tools`
  - **Documentation:** `https://connectknot.com/quickstart`
  - **Enterprise VPC:** `https://connectknot.com/enterprise-brain`
  - **Privacy / Terms / Support:** `https://connectknot.com/privacy` | `https://connectknot.com/terms` | `https://connectknot.com/support`
- **One-Click Custom Connector Link (Live Now):**
  `https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Knot&connectorUrl=https%3A%2F%2Fapi.connectknot.com%2Fmcp`
- **Claude Code CLI Command:**
  ```bash
  claude mcp add --transport http knot https://api.connectknot.com/mcp
  ```
- **Needs-Justin Step:** Submit at `https://claude.ai/directory/manage` using [`claude-directory/SUBMISSION.md`](./claude-directory/SUBMISSION.md) and a populated reviewer test account.

---

## 3B. ChatGPT Apps SDK (OpenAI)

- **Test Cases & Submission Pack (`5` Positive + `3` Negative):** [`chatgpt-apps-sdk/SUBMISSION.md`](./chatgpt-apps-sdk/SUBMISSION.md)
- **Technical Readiness:** Verified. Supports CIMD (`client_id_metadata_document_supported: true`), RFC 9207 `iss`, `openai-mcp` unauthenticated discovery, and neutral free-tier quota messaging.
- **64x64 App Icon (`< 5KB` PNG):** `https://api.connectknot.com/api/brand/knot-icon-64.png` (`https://connectknot.com/knot-icon-64.png`, `3,590` bytes, `64x64` PNG).
- **Legal & Support URLs:**
  - Documentation / Quickstart: `https://connectknot.com/quickstart`
  - Privacy Policy: `https://connectknot.com/privacy`
  - Terms of Service: `https://connectknot.com/terms`
  - Support: `https://connectknot.com/support`
- **Needs-Justin Step:** Submit at `https://platform.openai.com` with [`chatgpt-apps-sdk/SUBMISSION.md`](./chatgpt-apps-sdk/SUBMISSION.md), reviewer credentials, video walkthrough, screenshots, and release notes.

---

## 3C. Google Antigravity Plugin Bundle

- **Bundle Directory:** [`../antigravity-plugin/`](../antigravity-plugin/README.md) (`plugin.json`, `mcp_config.json`, `mcp.json`, `assets/logo.png`)

---

## 4. Cline MCP Marketplace

- **Submission Package:** [`cline-marketplace/SUBMISSION.md`](./cline-marketplace/SUBMISSION.md)
- **Needs-Justin Step:** Open a new issue at `https://github.com/cline/mcp-marketplace/issues/new` using the fields in `SUBMISSION.md`.

---

## 5. Docker MCP Registry (`docker/mcp-registry`)

- **Manifest:** [`docker-mcp-registry/servers/knot/server.yaml`](./docker-mcp-registry/servers/knot/server.yaml)
- **Needs-Justin Step:** Fork `https://github.com/docker/mcp-registry`, copy `servers/knot/server.yaml`, validate with `task validate -- --name knot`, and open a Pull Request.
