import { test } from "node:test";
import assert from "node:assert/strict";
import { isKeyPoint, tokenizeKeyTerms } from "@/lib/key-terms";

const terms = (text: string) => tokenizeKeyTerms(text).filter((t) => t.kind === "term").map((t) => t.value);

test("quoted forms and capitalised words become key terms", () => {
  assert.deepEqual(terms("Geçmiş için 'must have V3' kullanılır ve fiil MUTLAKA yalındır."), ["'must have V3'", "MUTLAKA"]);
  assert.deepEqual(terms("Doğru cevap 'has risen'dır."), ["'has risen'"]);
  assert.deepEqual(terms("'can't have V3' kesin olumsuz çıkarımdır."), ["'can't have V3'"]);
});

test("Turkish suffix apostrophes and acronyms are left alone", () => {
  assert.deepEqual(terms("YDS'deki her soru ÖSYM'nin YDS formatındadır."), []);
  assert.equal(tokenizeKeyTerms("YDS'de it's fine").map((t) => t.value).join(""), "YDS'de it's fine");
});

test("long quotes are example sentences, not terms", () => {
  const tokens = tokenizeKeyTerms('Örnek: "The committee approved the new budget yesterday."');
  assert.deepEqual(tokens.map((t) => t.kind), ["text", "quote"]);
});

test("rule and warning sentences are key points", () => {
  assert.ok(isKeyPoint("Dikkat: 'rise' nesne almaz."));
  assert.ok(isKeyPoint("Sonuç olarak, önce zamanı belirleyin."));
  assert.ok(!isKeyPoint("Modal fiiller cümleye anlam katar."));
});
