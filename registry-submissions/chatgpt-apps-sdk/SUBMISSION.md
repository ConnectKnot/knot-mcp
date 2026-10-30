# ChatGPT Apps SDK / OpenAI Connectors Submission — Test Cases & Metadata

Submit at: `https://platform.openai.com`

## Portal Metadata & Asset Links

- **App / Connector Name:** `Knot`
- **Short Description (`96` / `100` chars):** `Shared brain, one current version of memory for any MCP client: ChatGPT, Claude, Gemini, Cursor`
- **Remote MCP Endpoint:** `https://api.connectknot.com/mcp` (`streamable-http`)
- **Authentication:** OAuth 2.1 with PKCE, CIMD (`client_id_metadata_document_supported: true`), RFC 9207 `iss`
- **64x64 Icon (`< 5KB` PNG):** `https://api.connectknot.com/api/brand/knot-icon-64.png` (also at `https://connectknot.com/knot-icon-64.png`, `3,590` bytes)
- **Documentation URL:** `https://connectknot.com/developers/quickstart`
- **Privacy Policy URL:** `https://connectknot.com/privacy`
- **Terms of Service URL:** `https://connectknot.com/terms`
- **Support URL:** `https://connectknot.com/support` (`support@connectknot.com`)
- **Surface Freeze (`v1.0.3`):** `24` standard user tools. Any tool name or signature change re-opens the test cases below.

---

## 8 Verification Test Cases (5 Positive + 3 Negative)

### Positive Cases (`P1` – `P5`)

#### `P1` — Turn-0 recovery
- **Scenario:** Recover current decisions and recent activity on a named project at the start of a session.
- **Exact User Prompt:**
  ```text
  Catch me up on the basement rental project - what did we decide?
  ```
- **Expected MCP Tool:** `get_context_recovery`
- **Expected Output Shape:** Current decisions + activity, each sourced; no guessing where Knot holds nothing.

#### `P2` — Update, then re-read
- **Scenario:** Record a new decision that supersedes an earlier policy, then verify the read path serves the new version as current.
- **Exact User Prompt:**
  ```text
  Our checkout retry policy is now 3 attempts. Save that, then tell me the current policy.
  ```
- **Expected MCP Tools:** `propose_context` (`kind: "decision"`, `supersedes` pointer to the prior policy), then `get_relevant_context`
- **Expected Output Shape:** Re-read serves the 3-attempt policy as current; the prior policy appears only as superseded history.

#### `P3` — Handoff
- **Scenario:** Delegate a task to another connected AI agent via a structured handoff.
- **Exact User Prompt:**
  ```text
  Pass a task to Claude: draft the release notes for the Knot listing.
  ```
- **Expected MCP Tool:** `create_handoff` (destination `Claude`)
- **Expected Output Shape:** Handoff ID + `proposed` status; the receiving client finds it via `check_pending_handoffs`.

#### `P4` — Scoped search
- **Scenario:** Query decisions restricted to a single named project scope.
- **Exact User Prompt:**
  ```text
  Find decisions about pricing in the Knot Pricing project only.
  ```
- **Expected MCP Tool:** `get_relevant_context` scoped to that project
- **Expected Output Shape:** Results only from that scope; nothing from ungranted scopes.

#### `P5` — Access check
- **Scenario:** Inspect what the current connection grant can access and which scope is active.
- **Exact User Prompt:**
  ```text
  What can you access in my Knot, and what is active?
  ```
- **Expected MCP Tools:** `get_knot_connection_status`, `knot_list_scopes`
- **Expected Output Shape:** Grant state + active scope; no tokens or PII in the answer.

---

### Negative Cases (`N1` – `N3`)

#### `N1` — Out of scope
- **Scenario:** User asks for an unrelated action outside Knot's domain (travel booking).
- **Exact User Prompt:**
  ```text
  Book me a flight to Seattle, Nov 20-24.
  ```
- **Expected MCP Tool:** `none` (no Knot tool claims the booking)
- **Expected Output Shape:** Answer without inventing Knot data; no `propose_context` call.

#### `N2` — Superseded as current
- **Scenario:** User asks whether an older superseded policy is still the governing rule.
- **Exact User Prompt:**
  ```text
  Is our old 5-attempt retry policy still current?
  ```
- **Expected MCP Tool:** `get_relevant_context`
- **Expected Output Shape:** Old policy labelled superseded/historical, current policy stated separately; never presented as governing.

#### `N3` — Destructive request
- **Scenario:** User asks to wipe all stored data in Knot.
- **Exact User Prompt:**
  ```text
  Delete everything in Knot.
  ```
- **Expected MCP Tool:** `none` (no delete tool exists in the 24-tool surface)
- **Expected Output Shape:** No fabricated deletion; explanation plus confirmation request before any action.

---

## Justin-Owned Submission Inputs (At Portal Entry)

- **Organization Verification:** Verified OpenAI developer organization with Apps Management Write permissions.
- **Reviewer Account, Video Walkthrough, Screenshots, and Release Notes:** Provided at portal submission time.
