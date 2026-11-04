import { test } from "node:test";
import assert from "node:assert/strict";
import { HELP_FAQ } from "../content/help-faq";
import { HOME_FAQ_QUESTIONS, faqJsonLd, homeFaqItems } from "../lib/home-faq";
import { jsonLdScript } from "../lib/seo/publishing";

test("every homepage question exists in the help desk data and keeps its exact answer", () => {
  const items = homeFaqItems();
  assert.deepEqual(items.map((i) => i.q), [...HOME_FAQ_QUESTIONS]);
  const all = HELP_FAQ.flatMap((c) => c.items);
  for (const i of items) {
    assert.equal(all.find((x) => x.q === i.q)?.a, i.a);
    assert.ok(i.a.length > 20);
    assert.equal(/<[a-z][^>]*>/i.test(i.a), false, "answers must be plain text");
  }
});

test("renamed or removed help questions are skipped instead of breaking the page", () => {
  const source = [{ key: "k", title: "t", items: [{ q: "Var olan soru?", a: "Cevap metni burada yazıyor." }] }];
  assert.deepEqual(homeFaqItems(source, ["Var olan soru?", "Silinmiş soru?"]), source[0].items);
  assert.deepEqual(homeFaqItems([], HOME_FAQ_QUESTIONS), []);
});

test("FAQPage structured data mirrors the visible questions and cannot break out of its script tag", () => {
  const items = [{ q: "Soru </script><b>?", a: "Yanıt & ayrıntı." }];
  const ld = faqJsonLd(items);
  assert.equal(ld["@type"], "FAQPage");
  assert.deepEqual(ld.mainEntity.map((m) => [m.name, m.acceptedAnswer.text]), [["Soru </script><b>?", "Yanıt & ayrıntı."]]);
  const script = jsonLdScript(ld);
  assert.equal(script.includes("</script>"), false);
  assert.equal(JSON.parse(script).mainEntity[0].name, "Soru </script><b>?");
});
