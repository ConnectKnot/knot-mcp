# Publishing `server.json` to the Official MCP Registry

`com.connectknot/knot` is the canonical namespace on `registry.modelcontextprotocol.io` (`io.github.ConnectKnot/knot` is deprecated).

## Pre-Publish Checklist

1. Confirm `server.json` version is incremented (the registry rejects overwrites of an existing version).
2. Confirm `description` is `<= 100` characters (`96` chars: `"Shared brain, one current version of memory for any MCP client: ChatGPT, Claude, Gemini, Cursor"`).
3. Confirm `_meta["io.modelcontextprotocol.registry/publisher-provided"].tools` matches the `24` standard user-facing tools returned by `https://api.connectknot.com/mcp` before sign-in.
4. Confirm `https://api.connectknot.com/.well-known/mcp-registry-auth` returns the Ed25519 public key record.

## Publish Commands

```bash
mcp-publisher login http --domain connectknot.com --private-key "$KNOT_REGISTRY_KEY"
mcp-publisher publish server.json
```

Verify the published entry:

```bash
curl -sS "https://registry.modelcontextprotocol.io/v0/servers?search=connectknot" | jq .
```
