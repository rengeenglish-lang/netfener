import { test } from "node:test";
import assert from "node:assert/strict";
import { matches, searchSite } from "@/server/services/site-search.service";

test("matching is Turkish-aware and needs every word", () => {
  assert.ok(matches("yokdil saglik", "YÖKDİL Sağlık Bilimleri"));
  assert.ok(matches("DENEME", "Online denemeler"));
  assert.ok(!matches("yds fen", "YDS Önemli Kelimeler"));
});

test("guests see paid results as denied with a sign-in link, free pages as free", async () => {
  const results = await searchSite("deneme", null);
  const page = results.find((r) => r.href === "/denemeler");
  assert.equal(page?.access, "free");
  const yds = results.find((r) => r.kind === "Deneme" && r.title.startsWith("YDS"));
  assert.equal(yds?.access, "denied");
  assert.ok(yds?.unlockHref?.startsWith("/sign-in"));
});

test("staff accounts get access to plan content", async () => {
  const results = await searchSite("deneme", { id: "staff-check", role: "ADMIN" });
  const yds = results.find((r) => r.kind === "Deneme" && r.title.startsWith("YDS"));
  assert.equal(yds?.access, "granted");
});

test("a single English word also offers a dictionary entry; short queries return nothing", async () => {
  const results = await searchSite("mitigate", null);
  assert.ok(results.some((r) => r.kind === "Sözlük" && r.href === "/sozluk/mitigate"));
  assert.deepEqual(await searchSite("a", null), []);
});
