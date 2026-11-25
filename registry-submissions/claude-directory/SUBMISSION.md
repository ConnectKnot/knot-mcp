# Claude Connectors Directory Submission: Detail Card Copy

Submit at: `https://claude.ai/directory/manage`

## Portal Detail Card Fields

| Field | Limit | Value | Length |
| :--- | :--- | :--- | :--- |
| **Name** | `<= 100` chars | `Knot` | `4` chars |
| **Tagline** | `<= 55` chars | `Governed shared context for every AI you use.` | `45` chars |
| **Description** | `<= 2,000` chars | See verbatim block below | `492` chars |
| **Remote MCP Endpoint** | HTTPS URI | `https://api.connectknot.com/mcp` | HTTPS |
| **Transport** | Protocol | `streamable-http` | Streamable HTTP |
| **Authentication** | OAuth | OAuth 2.1 with PKCE & Dynamic Client Registration | OAuth 2.1 |
| **Suggested Categories** | Directory | `Productivity`, `Developer Tools` | 2 categories |
| **Documentation URL** | HTTPS URI | `https://connectknot.com/quickstart` | HTTPS |
| **Agent Instructions URL** | HTTPS URI | `https://connectknot.com/agents.md` | HTTPS |
| **Enterprise VPC URL** | HTTPS URI | `https://connectknot.com/enterprise-brain` | HTTPS |
| **Privacy Policy URL** | HTTPS URI | `https://connectknot.com/privacy` | HTTPS |
| **Terms of Service URL** | HTTPS URI | `https://connectknot.com/terms` | HTTPS |
| **Support URL** | HTTPS URI | `https://connectknot.com/support` (`support@connectknot.com`) | HTTPS |
| **Primary Brand Icon (`512x512` PNG)** | PNG | `https://api.connectknot.com/api/brand/knot-icon.png` | `78,387` bytes |
| **Medium Brand Icon (`128x128` PNG)** | PNG | `https://api.connectknot.com/favicon.png` | `13,806` bytes |
| **Compact Icon (`64x64` PNG < 5KB)** | PNG | `https://api.connectknot.com/api/brand/knot-icon-64.png` | `3,590` bytes |

---

## Verbatim Copy Blocks

### Name (`4` / `100` chars)
```text
Knot
```

### Tagline (`45` / `55` chars)
```text
Governed shared context for every AI you use.
```

### Description (`492` / `2,000` chars)
```text
Knot is governed context infrastructure for all your AIs. Connect ChatGPT, Claude, Gemini, Cursor, and enterprise agents through OAuth 2.1, and every AI reads and updates the same decisions, constraints, and specs on one active v2 truth with full v1->v2 supersession history. Drop PDFs or URLs to extract clean quoted facts while shredding raw files immediately, hand off tasks cleanly, and deploy self-hosted EnterpriseBrain in your VPC. Encryption and training details are in the Privacy Policy.
```

---

## Tool Surface & Annotation Verification (`v1.0.4`)

- **Standard User Grant Surface:** `28` tools (read, retrieval, governed `v1 -> v2` proposals, shredded document/URL ingestion, cross-AI handoffs, and workspace scopes).
- **Gated Developer Surface:** Developer-admin tools remain gated behind opt-in developer OAuth scopes and are not advertised on standard user grants.

## Justin-Owned Submission Inputs (At Portal Entry)

- **Reviewer Test Account:** Populated email + password account (no OTP gate) for Anthropic directory reviewers.
- **Screenshots / Demo Media:** Portal-requested screenshots or walkthrough clip if prompted.
