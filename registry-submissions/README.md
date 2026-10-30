# Knot MCP Registry & Marketplace Submission Runbook

This directory contains the validated manifests and submission artifacts to list Knot's remote Streamable HTTP MCP server (`https://api.connectknot.com/mcp`) across the Official MCP Registry and partner marketplaces.

## 1. Official MCP Registry (`registry.modelcontextprotocol.io`) — Highest Leverage

- **Manifest:** [`/server.json`](../../server.json)
- **Canonical Namespace:** `com.connectknot/knot` (`io.github.ConnectKnot/knot` is deprecated as superseded by `com.connectknot/knot`)
- **Schema:** `https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json`
- **Remote Endpoint:** `https://api.connectknot.com/mcp` (`streamable-http`)
- **Standard Tool Surface:** `24` user-facing tools (3 developer-admin tools gated behind opt-in `knot:developer` scope)
- **Public Repository Reference:** `https://github.com/ConnectKnot/knot-mcp` (repo ID `1435883604`)

### Needs-Justin Steps (Publisher CLI):
1. Install `mcp-publisher`:
   ```bash
   brew install mcp-publisher
   ```
2. Log in with HTTP authentication. The public key is already served at
   `https://api.connectknot.com/.well-known/mcp-registry-auth`, so no DNS record is needed. You need the matching
   private key on this machine:
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

- **Technical Readiness:** Verified. `https://api.connectknot.com/mcp` uses Streamable HTTP, OAuth 2.1 with PKCE, dynamic client registration, and explicit `title`, `readOnlyHint`, `destructiveHint`, and `openWorldHint` annotations on all 24 standard tools (`destructiveHint: false` on all 24; `openWorldHint: true` only on `knot_share_project`).
- **One-Click Custom Connector Link (Live Now):**
  `https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Knot&connectorUrl=https%3A%2F%2Fapi.connectknot.com%2Fmcp`
- **Claude Code CLI Command:**
  ```bash
  claude mcp add --transport http knot https://api.connectknot.com/mcp
  ```
- **Needs-Justin Step:** Submit `https://api.connectknot.com/mcp` in the Claude Organization / Directory submission portal with a dedicated reviewer test account (email + password, no OTP gate).

---

## 3B. ChatGPT Apps SDK (OpenAI)

- **Technical Readiness:** Verified. Supports CIMD (`client_id_metadata_document_supported: true`), RFC 9207 `iss`, `openai-mcp` unauthenticated discovery, and neutral free-tier quota messaging.
- **64x64 App Icon (<5KB):** [`/artifacts/knot/public/knot-icon-64.png`](../../artifacts/knot/public/knot-icon-64.png) (`3,590` bytes, `64x64` PNG) and served at `https://api.connectknot.com/api/brand/knot-icon-64.png` (512x512 icon at `https://api.connectknot.com/api/brand/knot-icon.png`).
- **Legal & Support URLs:**
  - Privacy Policy: `https://connectknot.com/privacy`
  - Terms of Service: `https://connectknot.com/terms`
  - Support: `https://connectknot.com/support`
  - Documentation / Quickstart: `https://connectknot.com/developers/quickstart`

---

## 4. Cline MCP Marketplace

- **Submission Package:** [`cline-marketplace/SUBMISSION.md`](./cline-marketplace/SUBMISSION.md)
- **Needs-Justin Step:** Open a new issue at `https://github.com/cline/mcp-marketplace/issues/new` using the fields in `SUBMISSION.md`.

---

## 5. Docker MCP Registry (`docker/mcp-registry`)

- **Manifest:** [`docker-mcp-registry/servers/knot/server.yaml`](./docker-mcp-registry/servers/knot/server.yaml)
- **Needs-Justin Step:** Fork `https://github.com/docker/mcp-registry`, copy `servers/knot/server.yaml` (or run `task remote-wizard`), validate with `task validate -- --name knot`, and open a Pull Request.
