# Knot Plugin for Google Antigravity

One-click remote MCP connection to **Knot** (`https://api.connectknot.com/mcp`) for Google Antigravity.

## What You Get

- **Cross-AI Context Governance**: Keep Antigravity, Claude, ChatGPT, Gemini, and Cursor aligned on active `v1 -> v2` architectural decisions, schemas, and project state.
- **Structured Handoffs**: Pass multi-step tasks between agents (`create_handoff`, `check_pending_handoffs`, `update_handoff_status`).
- **28 Synced MCP Tools**: Standard user OAuth 2.1 grants expose 28 context, ingestion (with immediate raw-file shredding), scope, sharing, handoff, and board tools.

## Authentication

When enabled in Antigravity, Knot authenticates via **OAuth 2.1 with PKCE** against `https://api.connectknot.com` (RFC 9728 protected resource metadata at `https://api.connectknot.com/.well-known/oauth-protected-resource`). You can also connect self-hosted **Knot EnterpriseBrain** in your VPC with Bearer tokens or mTLS.

## Bundle Layout

- `plugin.json`: Antigravity plugin manifest (`v1.0.4`).
- `mcp_config.json` / `mcp.json`: Remote Streamable HTTP MCP configuration pointing to `https://api.connectknot.com/mcp`.
- `assets/logo.png`: 128x128 PNG brand icon.

## Links

- **Quickstart & Tool Reference**: https://connectknot.com/quickstart
- **EnterpriseBrain Self-Hosted VPC**: https://connectknot.com/enterprise-brain
- **Agent Discovery (`AGENTS.md`)**: https://connectknot.com/agents.md
- **Privacy Policy**: https://connectknot.com/privacy
- **Terms of Service**: https://connectknot.com/terms
- **Support**: https://connectknot.com/support
