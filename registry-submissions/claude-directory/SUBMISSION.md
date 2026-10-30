# Claude Connectors Directory Submission — Detail Card Copy

Submit at: `https://claude.ai/directory/manage`

## Portal Detail Card Fields

| Field | Limit | Value | Length |
| :--- | :--- | :--- | :--- |
| **Name** | `<= 100` chars | `Knot` | `4` chars |
| **Tagline** | `<= 55` chars | `One current version of memory for every AI you use.` | `51` chars |
| **Description** | `<= 2,000` chars | See verbatim block below | `500` chars |
| **Remote MCP Endpoint** | HTTPS URI | `https://api.connectknot.com/mcp` | — |
| **Transport** | — | `streamable-http` | — |
| **Authentication** | — | OAuth 2.1 with PKCE & Dynamic Client Registration | — |
| **Suggested Categories** | — | `Productivity`, `Developer Tools` | — |
| **Documentation URL** | HTTPS URI | `https://connectknot.com/developers/quickstart` | — |
| **Agent Instructions URL** | HTTPS URI | `https://connectknot.com/agents.md` | — |
| **Privacy Policy URL** | HTTPS URI | `https://connectknot.com/privacy` | — |
| **Terms of Service URL** | HTTPS URI | `https://connectknot.com/terms` | — |
| **Support URL** | HTTPS URI | `https://connectknot.com/support` (`support@connectknot.com`) | — |
| **Primary Brand Icon (`128x128` PNG)** | PNG | `https://api.connectknot.com/api/brand/knot-icon.png` | `8,546` bytes |
| **Fallback Compact Icon (`64x64` PNG < 5KB)** | PNG | `https://api.connectknot.com/api/brand/knot-icon-64.png` | `3,590` bytes |

---

## Verbatim Copy Blocks

### Name (`4` / `100` chars)
```text
Knot
```

### Tagline (`51` / `55` chars)
```text
One current version of memory for every AI you use.
```

### Description (`500` / `2,000` chars)
```text
Knot is one shared brain for all your AIs. Connect ChatGPT, Claude, Gemini, Cursor, and more through a single OAuth login, and every agent reads and saves the same decisions, preferences, and project context - always the current version, with what changed, when, and who wrote it. Agents catch up at the start of a session, pass tasks to each other as handoffs, and see only the workspaces their grant can access. Encryption, retention, and model-training details are in the published Privacy Policy.
```

---

## Tool Surface & Annotation Verification (`v1.0.3`)

- **Standard User Grant Surface:** `24` tools (`destructiveHint: false` on all 24; `openWorldHint: true` only on `knot_share_project`; `title` and `readOnlyHint` present on all 24).
- **Gated Developer Surface:** `3` developer-admin tools (`knot_create_developer_app`, `knot_list_developer_apps`, `knot_rotate_developer_key`) are gated behind the opt-in `knot:developer` OAuth scope and are not advertised on standard user grants.

## Justin-Owned Submission Inputs (At Portal Entry)

- **Reviewer Test Account:** Populated email + password account (no OTP gate) for Anthropic directory reviewers.
- **Screenshots / Demo Media:** Portal-requested screenshots or walkthrough clip if prompted.
