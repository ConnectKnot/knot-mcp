# Knot MCP Registry & Marketplace Submission Runbook

This directory contains the validated manifests, detail-card copy, and test cases to list Knot's remote Streamable HTTP MCP server (`https://api.connectknot.com/mcp`) across the Official MCP Registry and partner directories.

## 1. Official MCP Registry (`registry.modelcontextprotocol.io`) — Live (`v1.0.3`)

- **Manifest:** [`server.json`](../server.json)
- **Canonical Namespace:** `com.connectknot/knot` (`io.github.ConnectKnot/knot` is deprecated as superseded by `com.connectknot/knot`)
- **Schema:** `https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json`
- **Remote Endpoint:** `https://api.connectknot.com/mcp` (`streamable-http`)
- **Picked Description (`96` / `100` chars):** `Shared brain, one current version of memory for any MCP client: ChatGPT, Claude, Gemini, Cursor`
- **Standard Tool Surface:** `24` user-facing tools (3 developer-admin tools gated behind opt-in `knot:developer` scope)
- **Public Repository Reference:** `https://github.com/ConnectKnot/knot-mcp` (repo ID `1435883604`)

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
- **Technical Readiness:** Verified (`v1.0.3`, 24 standard tools, `destructiveHint: false` on all 24, `openWorldHint: true` only on `knot_share_project`).
- **Detail Card Summary:**
  - **Name (`4` / `100` chars):** `Knot`
  - **Tagline (`51` / `55` chars):** `One current version of memory for every AI you use.`
  - **Description (`500` / `2,000` chars):** `Knot is one shared brain for all your AIs. Connect ChatGPT, Claude, Gemini, Cursor, and more through a single OAuth login, and every agent reads and saves the same decisions, preferences, and project context - always the current version, with what changed, when, and who wrote it. Agents catch up at the start of a session, pass tasks to each other as handoffs, and see only the workspaces their grant can access. Encryption, retention, and model-training details are in the published Privacy Policy.`
  - **Categories:** `Productivity`, `Developer Tools`
  - **Documentation:** `https://connectknot.com/developers/quickstart`
  - **Privacy / Terms / Support:** `https://connectknot.com/privacy` | `https://connectknot.com/terms` | `https://connectknot.com/support`
- **One-Click Custom Connector Link (Live Now):**
  `https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Knot&connectorUrl=https%3A%2F%2Fapi.connectknot.com%2Fmcp`
- **Claude Code CLI Command:**
  ```bash
  claude mcp add --transport http knot https://api.connectknot.com/mcp
  ```
- **Needs-Justin Step:** Submit at `https://claude.ai/directory/manage` using the copy in [`claude-directory/SUBMISSION.md`](./claude-directory/SUBMISSION.md) and a populated reviewer test account (email + password, no OTP gate).

---

## 3B. ChatGPT Apps SDK (OpenAI)

- **Test Cases & Submission Pack (`5` Positive + `3` Negative):** [`chatgpt-apps-sdk/SUBMISSION.md`](./chatgpt-apps-sdk/SUBMISSION.md)
- **Technical Readiness:** Verified. Supports CIMD (`client_id_metadata_document_supported: true`), RFC 9207 `iss`, `openai-mcp` unauthenticated discovery, and neutral free-tier quota messaging.
- **64x64 App Icon (`< 5KB`):** `https://api.connectknot.com/api/brand/knot-icon-64.png` (and `https://connectknot.com/knot-icon-64.png`, `3,590` bytes, `64x64` PNG). Primary `128x128` icon at `https://api.connectknot.com/api/brand/knot-icon.png`.
- **Legal & Support URLs:**
  - Documentation / Quickstart: `https://connectknot.com/developers/quickstart`
  - Privacy Policy: `https://connectknot.com/privacy`
  - Terms of Service: `https://connectknot.com/terms`
  - Support: `https://connectknot.com/support`
- **8 Test Cases Summary (Frozen against `v1.0.3` 24-tool surface):**
  - **`P1` (Turn-0 recovery):** `"Catch me up on the basement rental project - what did we decide?"` -> `get_context_recovery`
  - **`P2` (Update, then re-read):** `"Our checkout retry policy is now 3 attempts. Save that, then tell me the current policy."` -> `propose_context` then `get_relevant_context`
  - **`P3` (Handoff):** `"Pass a task to Claude: draft the release notes for the Knot listing."` -> `create_handoff`
  - **`P4` (Scoped search):** `"Find decisions about pricing in the Knot Pricing project only."` -> `get_relevant_context`
  - **`P5` (Access check):** `"What can you access in my Knot, and what is active?"` -> `get_knot_connection_status`, `knot_list_scopes`
  - **`N1` (Out of scope):** `"Book me a flight to Seattle, Nov 20-24."` -> `none`
  - **`N2` (Superseded as current):** `"Is our old 5-attempt retry policy still current?"` -> `get_relevant_context`
  - **`N3` (Destructive request):** `"Delete everything in Knot."` -> `none` (no delete tool in 24-tool surface)
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
- **Needs-Justin Step:** Fork `https://github.com/docker/mcp-registry`, copy `servers/knot/server.yaml` (or run `task remote-wizard`), validate with `task validate -- --name knot`, and open a Pull Request.
