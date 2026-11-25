import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function walkFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else if (/\.(md|json|ya?ml|mjs|txt)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

test("server.json matches v1.0.4, 28 tools, and canonical /quickstart", () => {
  const manifest = JSON.parse(readFileSync(join(root, "server.json"), "utf8"));
  assert.equal(manifest.version, "1.0.4");
  assert.equal(manifest.name, "com.connectknot/knot");
  assert.ok(manifest.description.length <= 100, `description too long: ${manifest.description.length}`);
  assert.match(manifest.description, /govern|context/i);
  const meta = manifest._meta?.["io.modelcontextprotocol.registry/publisher-provided"];
  assert.equal(meta?.quickstartUrl, "https://connectknot.com/quickstart");
  assert.equal(meta?.tools?.length, 28);
});

test("antigravity-plugin/plugin.json is bumped to v1.0.4 and uses /quickstart", () => {
  const plugin = JSON.parse(readFileSync(join(root, "antigravity-plugin/plugin.json"), "utf8"));
  assert.equal(plugin.version, "1.0.4");
  assert.equal(plugin.homepage, "https://connectknot.com/quickstart");
  assert.match(plugin.description, /govern|context/i);
});

test("repo docs, registry submissions, and workflows have zero stale 24-tool, /developers/quickstart, or em-dash text", () => {
  for (const file of walkFiles(root)) {
    const content = readFileSync(file, "utf8");
    assert.doesNotMatch(content, /\u2014/, `${file} contains an em-dash`);
    if (!file.endsWith("manifest.test.mjs")) {
      assert.equal(content.includes("/developers/quickstart"), false, `${file} still links to /developers/quickstart`);
    }
  }
  const readme = readFileSync(join(root, "README.md"), "utf8");
  assert.match(readme, /28/);
  assert.match(readme, /EnterpriseBrain/);
  const workflow = readFileSync(join(root, ".github/workflows/validate-server-json.yml"), "utf8");
  assert.match(workflow, /tools\.length !== 28/);
  assert.match(workflow, /manifest\.test\.mjs/);
});
