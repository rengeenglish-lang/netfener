"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Headphones, RotateCcw, Shield, XCircle } from "lucide-react";
import type { CambridgeLevel, Paper, Part, Task } from "@/content/cambridge-tests/types";
import { normalise, scaleEstimate, shields, taskItems } from "@/content/cambridge-tests/registry";
import { COLOUR_CSS, PicCard, SceneView } from "./Pictures";

type Answers = Record<string, string>;

type Props = { testTitle: string; level: CambridgeLevel; levelName: string; colour: string; paper: Paper; libraryHref: string; otherPapers: { href: string; name: string }[] };

const LETTERS = "ABCDEFGH";

/** A stable shuffle, so the order of options never gives the answer away but stays the same on every visit. */
function order(n: number, seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

/** Jumbled letters for the spelling task (never the word itself). */
function jumble(word: string, seed: string) {
  const letters = word.split("");
  let o = order(letters.length, seed);
  if (o.every((v, i) => v === i) && letters.length > 1) o = [...o.slice(1), o[0]];
  return o.map((i) => letters[i]);
}

const key = (p: number, i: number | string) => `${p}:${i}`;
const words = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

/** Splits text on {n} gaps and renders a control for each. */
function GapText({ paragraphs, render }: { paragraphs: string[]; render: (gap: number) => React.ReactNode }) {
  return (
    <div className="space-y-3 text-lg leading-10">
      {paragraphs.map((para, k) => (
        <p key={k}>
          {para.split(/\{(\d+)\}/).map((chunk, j) => (j % 2 === 1 ? <Fragment key={j}>{render(Number(chunk))}</Fragment> : <Fragment key={j}>{chunk}</Fragment>))}
        </p>
      ))}
    </div>
  );
}

function Choice({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-2xl border-2 px-4 py-2.5 text-left text-base font-semibold transition ${selected ? "border-[color:var(--cam)] bg-[color:var(--cam-soft)]" : "border-slate-200 bg-white hover:border-slate-300"}`}
    >
      {children}
    </button>
  );
}

function YesNo({ value, onChange }: { value?: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-2">
      {[
        ["yes", "✔", "yes"],
        ["no", "✘", "no"],
      ].map(([v, icon, label]) => (
        <button
          key={v}
          type="button"
          aria-pressed={value === v}
          aria-label={label}
          onClick={() => onChange(v)}
          className={`h-12 w-14 rounded-2xl border-2 text-xl font-black ${value === v ? (v === "yes" ? "border-emerald-500 bg-emerald-100 text-emerald-700" : "border-rose-500 bg-rose-100 text-rose-700") : "border-slate-200 bg-white text-slate-500"}`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

const inputCls = "rounded-xl border-2 border-slate-300 bg-white px-3 py-1.5 text-base font-semibold outline-none focus:border-[color:var(--cam)]";

/** One part of the paper, rendered by task type. */
function PartView({ part, p, answers, set, seed }: { part: Part; p: number; answers: Answers; set: (k: string, v: string) => void; seed: string }) {
  const t = part.task;
  const a = (i: number | string) => answers[key(p, i)];
  switch (t.kind) {
    case "listen-lines": {
      const tags = t.scene.items.flatMap((it) => (it.tag ? [it.tag] : []));
      return (
        <div className="space-y-5">
          <SceneView scene={t.scene} label="Picture for this part" />
          <div className="grid gap-3 sm:grid-cols-2">
            {t.items.map((it, i) => (
              <div key={i} className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <p className="min-w-20 text-lg font-black">{i + 1}. {it.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <button key={tag} type="button" aria-pressed={a(i) === tag} aria-label={`${it.name} is ${tag}`} onClick={() => set(key(p, i), tag)} className={`h-10 w-10 rounded-xl border-2 font-black ${a(i) === tag ? "border-[color:var(--cam)] bg-[color:var(--cam-soft)]" : "border-slate-200 bg-white"}`}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "listen-tick":
      return (
        <div className="space-y-4">
          {t.items.map((it, i) => (
            <div key={i} className="space-y-3 rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-lg font-bold">{i + 1}. {it.question}</p>
              <div className="flex flex-wrap gap-3">
                {it.pics.map((pic, k) => (
                  <button key={k} type="button" aria-pressed={a(i) === String(k)} aria-label={`Picture ${LETTERS[k]}`} onClick={() => set(key(p, i), String(k))} className={`relative rounded-[1.7rem] border-4 ${a(i) === String(k) ? "border-[color:var(--cam)]" : "border-transparent"}`}>
                    <PicCard pic={pic} i={k} size="md" />
                    <span className="absolute left-1 top-1 rounded-md bg-white/90 px-1.5 text-xs font-black">{LETTERS[k]}</span>
                    {a(i) === String(k) ? <span className="absolute -right-1 -top-1 rounded-full bg-[color:var(--cam)] px-1.5 text-sm font-black text-white">✔</span> : null}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "listen-colour": {
      const tags = t.scene.items.flatMap((it) => (it.tag ? [it.tag] : []));
      const marks: Record<string, string> = {};
      t.items.forEach((_, i) => {
        if (a(i) && a(`c${i}`)) marks[a(i)] = a(`c${i}`);
      });
      return (
        <div className="space-y-5">
          <SceneView scene={t.scene} label="Picture to colour" marks={marks} />
          <div className="space-y-3">
            {t.items.map((_, i) => (
              <div key={i} className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <span className="text-lg font-black">{i + 1}.</span>
                <div className="flex flex-wrap gap-1.5" aria-label={`Object for ${i + 1}`}>
                  {tags.map((tag) => (
                    <button key={tag} type="button" aria-pressed={a(i) === tag} onClick={() => set(key(p, i), tag)} className={`h-9 w-9 rounded-xl border-2 font-black ${a(i) === tag ? "border-[color:var(--cam)] bg-[color:var(--cam-soft)]" : "border-slate-200 bg-white"}`}>
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5" aria-label={`Colour for ${i + 1}`}>
                  {t.colours.map((c) => (
                    <button key={c} type="button" aria-pressed={a(`c${i}`) === c} aria-label={c} title={c} onClick={() => set(key(p, `c${i}`), c)} className={`h-9 w-9 rounded-full border-4 ${a(`c${i}`) === c ? "border-slate-800" : "border-white"} shadow`} style={{ background: COLOUR_CSS[c] }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "picture-yesno":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {t.items.map((it, i) => (
            <div key={i} className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm">
              <PicCard pic={it.pic} i={i} size="md" />
              <div className="flex-1 space-y-2">
                <p className="text-lg font-bold">{i + 1}. {it.text}</p>
                <YesNo value={a(i)} onChange={(v) => set(key(p, i), v)} />
              </div>
            </div>
          ))}
        </div>
      );
    case "scene-yesno":
      return (
        <div className="space-y-5">
          <SceneView scene={t.scene} label="Picture for this part" />
          {t.items.map((it, i) => (
            <div key={i} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-lg font-bold">{i + 1}. {it.text}</p>
              <YesNo value={a(i)} onChange={(v) => set(key(p, i), v)} />
            </div>
          ))}
        </div>
      );
    case "spell":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {t.items.map((it, i) => (
            <div key={i} className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm">
              <PicCard pic={it.pic} i={i} size="md" />
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-500">{i + 1}.</p>
                <div className="flex flex-wrap gap-1" aria-label="Letters">
                  {jumble(it.answer, `${seed}-${p}-${i}`).map((l, k) => (
                    <span key={k} className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--cam-soft)] text-lg font-black">{l}</span>
                  ))}
                </div>
                <input className={inputCls} value={a(i) ?? ""} onChange={(e) => set(key(p, i), e.target.value)} aria-label={`Word ${i + 1}`} autoComplete="off" spellCheck={false} />
              </div>
            </div>
          ))}
        </div>
      );
    case "word-bank":
      return (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2 rounded-3xl bg-white p-4 shadow-sm">
            {t.bank.map((b) => (
              <span key={b.word} className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--cam-soft)] px-3 py-1.5 text-base font-bold">
                {b.e ? <span aria-hidden="true">{b.e}</span> : null}
                {b.word}
              </span>
            ))}
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            {t.title ? <h3 className="mb-2 text-xl font-black">{t.title}</h3> : null}
            <GapText
              paragraphs={t.text}
              render={(g) => (
                <select className={inputCls} value={a(g - 1) ?? ""} onChange={(e) => set(key(p, g - 1), e.target.value)} aria-label={`Gap ${g}`}>
                  <option value="">({g}) ……</option>
                  {t.bank.map((b) => (
                    <option key={b.word} value={b.word}>{b.word}</option>
                  ))}
                </select>
              )}
            />
          </div>
          {t.titleQuestion ? (
            <div className="space-y-2 rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-lg font-bold">Now choose the best name for the story.</p>
              {order(t.titleQuestion.options.length, `${seed}-${p}-title`).map((o) => (
                <Choice key={o} selected={a("t") === String(o)} onClick={() => set(key(p, "t"), String(o))}>{t.titleQuestion!.options[o]}</Choice>
              ))}
            </div>
          ) : null}
        </div>
      );
    case "short-answer":
      return (
        <div className="space-y-5">
          {t.scene ? <SceneView scene={t.scene} label="Picture for this part" /> : null}
          {t.text ? (
            <div className="space-y-3 rounded-3xl bg-white p-5 text-lg leading-8 shadow-sm">
              {t.text.map((para, k) => <p key={k}>{para}</p>)}
            </div>
          ) : null}
          {t.items.map((it, i) => (
            <div key={i} className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
              {it.pic ? <PicCard pic={it.pic} i={i} size="md" /> : null}
              <p className="flex-1 text-lg font-bold">{i + 1}. {it.question}</p>
              <input className={inputCls} value={a(i) ?? ""} onChange={(e) => set(key(p, i), e.target.value)} aria-label={`Answer ${i + 1}`} autoComplete="off" />
            </div>
          ))}
        </div>
      );
    case "definitions":
      return (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2 rounded-3xl bg-white p-4 shadow-sm">
            {t.bank.map((b) => (
              <span key={b.word} className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--cam-soft)] px-3 py-1.5 text-base font-bold">
                {b.e ? <span aria-hidden="true">{b.e}</span> : null}
                {b.word}
              </span>
            ))}
          </div>
          {t.items.map((it, i) => (
            <div key={i} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-3 shadow-sm">
              <p className="flex-1 text-lg font-bold">{i + 1}. {it.text}</p>
              <select className={inputCls} value={a(i) ?? ""} onChange={(e) => set(key(p, i), e.target.value)} aria-label={`Word for ${i + 1}`}>
                <option value="">Choose…</option>
                {t.bank.map((b) => (
                  <option key={b.word} value={b.word}>{b.word}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      );
    case "dialogue":
      return (
        <div className="space-y-4">
          {t.items.map((it, i) => (
            <div key={i} className="space-y-2 rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-lg"><span className="font-black text-[color:var(--cam)]">{t.speakers[0]}:</span> {it.line}</p>
              <p className="text-sm font-bold text-slate-500">{i + 1}. {t.speakers[1]}:</p>
              <div className="grid gap-2">
                {order(it.options.length, `${seed}-${p}-${i}`).map((o) => (
                  <Choice key={o} selected={a(i) === String(o)} onClick={() => set(key(p, i), String(o))}>{it.options[o]}</Choice>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "mcq":
      return (
        <div className="space-y-5">
          {t.text ? (
            <article className="space-y-3 rounded-3xl bg-white p-5 text-lg leading-8 shadow-sm">
              {t.text.title ? <h3 className="text-xl font-black">{t.text.title}</h3> : null}
              {t.text.paragraphs.map((para, k) => <p key={k}>{para}</p>)}
            </article>
          ) : null}
          {t.items.map((it, i) => (
            <div key={i} className="space-y-3 rounded-3xl bg-white p-4 shadow-sm">
              {it.notice ? (
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-amber-50 p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">{it.notice.genre}</p>
                  {it.notice.lines.map((l, k) => <p key={k} className={k === 0 && it.notice!.lines.length > 1 && l === l.toUpperCase() ? "font-black" : ""}>{l}</p>)}
                </div>
              ) : null}
              <p className="text-lg font-bold">{i + 1}. {it.question}</p>
              <div className="grid gap-2">
                {order(it.options.length, `${seed}-${p}-${i}`).map((o, k) => (
                  <Choice key={o} selected={a(i) === String(o)} onClick={() => set(key(p, i), String(o))}>
                    <span className="mr-2 font-black text-slate-400">{LETTERS[k]}</span>
                    {it.options[o]}
                  </Choice>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "cloze-mc":
      return (
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          {t.title ? <h3 className="mb-2 text-xl font-black">{t.title}</h3> : null}
          <GapText
            paragraphs={t.text}
            render={(g) => {
              const gap = t.gaps[g - 1];
              return (
                <select className={inputCls} value={a(g - 1) ?? ""} onChange={(e) => set(key(p, g - 1), e.target.value)} aria-label={`Gap ${g}`}>
                  <option value="">({g}) ……</option>
                  {order(gap.options.length, `${seed}-${p}-${g}`).map((o) => (
                    <option key={o} value={String(o)}>{gap.options[o]}</option>
                  ))}
                </select>
              );
            }}
          />
        </div>
      );
    case "open-cloze":
      return (
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          {t.title ? <h3 className="mb-2 text-xl font-black">{t.title}</h3> : null}
          <GapText
            paragraphs={t.text}
            render={(g) => <input className={`${inputCls} w-32`} value={a(g - 1) ?? ""} placeholder={`(${g})`} onChange={(e) => set(key(p, g - 1), e.target.value)} aria-label={`Gap ${g}`} autoComplete="off" />}
          />
        </div>
      );
    case "matching":
      return (
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3">
            {t.options.map((o, k) => (
              <div key={k} className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="font-black"><span className="mr-2 rounded-lg bg-[color:var(--cam-soft)] px-2">{LETTERS[k]}</span>{o.title}</p>
                <p className="mt-1 leading-7">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {t.items.map((it, i) => (
              <div key={i} className="space-y-2 rounded-3xl bg-white p-4 shadow-sm">
                <p className="font-bold">{i + 1}. {it.text}</p>
                <div className="flex flex-wrap gap-2">
                  {t.options.map((_, k) => (
                    <button key={k} type="button" aria-pressed={a(i) === String(k)} onClick={() => set(key(p, i), String(k))} className={`h-10 w-10 rounded-xl border-2 font-black ${a(i) === String(k) ? "border-[color:var(--cam)] bg-[color:var(--cam-soft)]" : "border-slate-200 bg-white"}`}>
                      {LETTERS[k]}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "gapped-text": {
      const shown = order(t.sentences.length, `${seed}-${p}-sentences`);
      return (
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-xl font-black">{t.title}</h3>
            <GapText
              paragraphs={t.text}
              render={(g) => (
                <select className={inputCls} value={a(g - 1) ?? ""} onChange={(e) => set(key(p, g - 1), e.target.value)} aria-label={`Gap ${g}`}>
                  <option value="">({g}) …</option>
                  {shown.map((orig, k) => (
                    <option key={orig} value={String(orig)}>{LETTERS[k]}</option>
                  ))}
                </select>
              )}
            />
          </div>
          <ol className="space-y-2">
            {shown.map((orig, k) => (
              <li key={orig} className="rounded-2xl bg-white p-3 shadow-sm"><span className="mr-2 font-black text-[color:var(--cam)]">{LETTERS[k]}</span>{t.sentences[orig]}</li>
            ))}
          </ol>
        </div>
      );
    }
    case "writing": {
      const text = a("w") ?? "";
      return (
        <div className="space-y-5">
          {t.scene ? <SceneView scene={t.scene} label="Picture for this task" /> : null}
          {t.pics ? (
            <div className="flex flex-wrap justify-center gap-4">
              {t.pics.map((pic, k) => <PicCard key={k} pic={pic} i={k} />)}
            </div>
          ) : null}
          {t.input ? (
            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-amber-50 p-5 leading-7">
              {t.input.from ? <p className="text-sm"><b>From:</b> {t.input.from}</p> : null}
              {t.input.subject ? <p className="mb-2 text-sm"><b>{t.input.from ? "Subject:" : ""}</b> {t.input.subject}</p> : null}
              {t.input.lines.map((l, k) => <p key={k}>{l}</p>)}
            </div>
          ) : null}
          {t.prompts ? (
            <ul className="list-disc space-y-1 pl-6 text-lg">
              {t.prompts.map((pr, k) => <li key={k}>{pr}</li>)}
            </ul>
          ) : null}
          <div>
            <textarea className="min-h-56 w-full rounded-3xl border-2 border-slate-300 bg-white p-4 text-lg leading-8 outline-none focus:border-[color:var(--cam)]" value={text} onChange={(e) => set(key(p, "w"), e.target.value)} aria-label="Your answer" spellCheck={false} />
            <p className={`mt-1 text-sm font-bold ${words(text) >= t.minWords ? "text-emerald-600" : "text-slate-500"}`}>Words: {words(text)} / {t.minWords}+</p>
          </div>
        </div>
      );
    }
  }
}

/** Marks every scored item: [correct?, the right answer to show]. */
function mark(task: Task, p: number, answers: Answers, seed: string): { ok: boolean; right: string; given: string }[] {
  const a = (i: number | string) => answers[key(p, i)] ?? "";
  switch (task.kind) {
    case "listen-lines":
      return task.items.map((it, i) => ({ ok: a(i) === it.answer, right: `${it.name} → ${it.answer}`, given: a(i) ? `${it.name} → ${a(i)}` : "" }));
    case "listen-tick":
      return task.items.map((it, i) => ({ ok: a(i) === String(it.answer), right: `${LETTERS[it.answer]} ${it.pics[it.answer].e}`, given: a(i) ? `${LETTERS[Number(a(i))]} ${it.pics[Number(a(i))].e}` : "" }));
    case "listen-colour":
      return task.items.map((it, i) => ({ ok: a(i) === it.answer && a(`c${i}`) === it.colour, right: `${it.answer} – ${it.colour}`, given: a(i) || a(`c${i}`) ? `${a(i) || "?"} – ${a(`c${i}`) || "?"}` : "" }));
    case "picture-yesno":
    case "scene-yesno":
      return task.items.map((it, i) => ({ ok: a(i) === (it.answer ? "yes" : "no"), right: it.answer ? "yes ✔" : "no ✘", given: a(i) }));
    case "spell":
      return task.items.map((it, i) => ({ ok: normalise(a(i)) === it.answer, right: it.answer, given: a(i) }));
    case "word-bank": {
      const rows = task.answers.map((ans, i) => ({ ok: a(i) === ans, right: ans, given: a(i) }));
      if (task.titleQuestion) rows.push({ ok: a("t") === String(task.titleQuestion.answer), right: task.titleQuestion.options[task.titleQuestion.answer], given: a("t") ? task.titleQuestion.options[Number(a("t"))] : "" });
      return rows;
    }
    case "short-answer":
      return task.items.map((it, i) => ({ ok: it.answers.map(normalise).includes(normalise(a(i))), right: it.answers[0], given: a(i) }));
    case "definitions":
      return task.items.map((it, i) => ({ ok: a(i) === it.answer, right: it.answer, given: a(i) }));
    case "dialogue":
    case "mcq":
      return task.items.map((it, i) => ({ ok: a(i) === String(it.answer), right: it.options[it.answer], given: a(i) ? it.options[Number(a(i))] : "" }));
    case "cloze-mc":
      return task.gaps.map((g, i) => ({ ok: a(i) === String(g.answer), right: g.options[g.answer], given: a(i) ? g.options[Number(a(i))] : "" }));
    case "open-cloze":
      return task.answers.map((acc, i) => ({ ok: acc.includes(normalise(a(i))), right: acc.join(" / "), given: a(i) }));
    case "matching":
      return task.items.map((it, i) => ({ ok: a(i) === String(it.answer), right: LETTERS[it.answer], given: a(i) ? LETTERS[Number(a(i))] : "" }));
    case "gapped-text": {
      const pos = (orig: number) => LETTERS[order(task.sentences.length, `${seed}-${p}-sentences`).indexOf(orig)];
      return task.answers.map((ans, i) => ({ ok: a(i) === String(ans), right: `${pos(ans)} – ${task.sentences[ans]}`, given: a(i) ? pos(Number(a(i))) : "" }));
    }
    case "writing":
      return [];
  }
}

export function CambridgeRunner({ testTitle, level, levelName, colour, paper, libraryHref, otherPapers }: Props) {
  const [phase, setPhase] = useState<"intro" | "test" | "done">("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [endAt, setEndAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [showSample, setShowSample] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (phase !== "test") return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  const set = (k: string, v: string) => setAnswers((prev) => ({ ...prev, [k]: v }));
  const start = () => {
    setEndAt(Date.now() + paper.minutes * 60_000);
    setNow(Date.now());
    setPhase("test");
  };
  const restart = () => {
    setAnswers({});
    setIdx(0);
    setShowSample({});
    setPhase("intro");
  };

  const left = Math.max(0, Math.round((endAt - now) / 1000));
  const style = { "--cam": colour, "--cam-soft": `${colour}22` } as React.CSSProperties;
  const part = paper.parts[idx];
  const scored = paper.parts.reduce((n, pt) => n + taskItems(pt.task), 0);
  const young = level === "starters" || level === "movers" || level === "flyers";

  if (phase === "intro") {
    return (
      <main lang="en" style={style} className="min-h-screen bg-[color:var(--cam-soft)] px-4 py-10">
        <div className="mx-auto max-w-2xl space-y-6 rounded-[2rem] bg-white p-8 text-center shadow-lg">
          <p className="text-sm font-black uppercase tracking-widest" style={{ color: colour }}>{levelName}</p>
          <h1 className="text-3xl font-black text-slate-800">{testTitle}</h1>
          <p className="text-xl font-bold text-slate-600">{paper.name}</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-bold">
            <span className="rounded-full bg-slate-100 px-4 py-2">{paper.parts.length} parts</span>
            <span className="rounded-full bg-slate-100 px-4 py-2">{paper.minutes} minutes</span>
            {scored ? <span className="rounded-full bg-slate-100 px-4 py-2">{scored} questions</span> : null}
          </div>
          {paper.id === "listening" ? <p className="font-bold text-slate-700" lang="tr">🎧 Kulaklık tak. Her bölümün başında bir kayıt var; gerçek sınavdaki gibi her kaydı iki kez dinleyebilirsin.</p> : null}
          <p className="text-slate-600" lang="tr">Süre bittiğinde test kapanmaz; kendi hızında devam edebilirsin. Bitirdiğinde cevapların puanlanır{young ? " ve kalkan (shield) sayın gösterilir" : ""}. Yazma görevlerini örnek cevapla karşılaştırırsın.</p>
          <button type="button" onClick={start} className="rounded-full px-8 py-3 text-lg font-black text-white shadow" style={{ background: colour }}>Start ▶</button>
          <p><Link href={libraryHref} className="text-sm font-bold underline" lang="tr">← Test kütüphanesi</Link></p>
        </div>
      </main>
    );
  }

  if (phase === "done") {
    const rows = paper.parts.map((pt, p) => ({ pt, p, marks: mark(pt.task, p, answers, testTitle) }));
    const right = rows.reduce((n, r) => n + r.marks.filter((m) => m.ok).length, 0);
    const share = scored ? right / scored : 0;
    const estimate = !young && scored ? scaleEstimate(level as "key" | "preliminary", share) : null;
    return (
      <main lang="en" style={style} className="min-h-screen bg-[color:var(--cam-soft)] px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <section className="rounded-[2rem] bg-white p-8 text-center shadow-lg">
            <p className="text-sm font-black uppercase tracking-widest" style={{ color: colour }}>{levelName} · {paper.name}</p>
            {scored ? (
              <>
                <p className="mt-3 text-5xl font-black text-slate-800">{right} / {scored}</p>
                {young ? (
                  <div className="mt-4 flex justify-center gap-1" aria-label={`${shields(share)} shields out of 5`}>
                    {Array.from({ length: 5 }, (_, k) => (
                      <Shield key={k} size={36} aria-hidden="true" fill={k < shields(share) ? colour : "none"} color={colour} />
                    ))}
                  </div>
                ) : estimate ? (
                  <p className="mt-3 text-lg font-bold text-slate-600">Practice estimate: <span style={{ color: colour }}>{estimate.score}</span> · {estimate.grade}</p>
                ) : null}
              </>
            ) : (
              <p className="mt-3 text-lg font-bold text-slate-600" lang="tr">Bu kâğıt yazma görevlerinden oluşuyor: cevaplarını aşağıdaki örneklerle karşılaştır.</p>
            )}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={restart} className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-5 py-2 font-bold"><RotateCcw size={16} aria-hidden="true" /> Try again</button>
              {otherPapers.map((o) => (
                <Link key={o.href} href={o.href} className="rounded-full px-5 py-2 font-bold text-white" style={{ background: colour }}>Go to {o.name} →</Link>
              ))}
              <Link href={libraryHref} className="rounded-full border-2 border-slate-200 px-5 py-2 font-bold" lang="tr">Kütüphane</Link>
            </div>
          </section>
          {rows.map(({ pt, p, marks }) => (
            <section key={p} className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black">{pt.title}{marks.length ? ` · ${marks.filter((m) => m.ok).length}/${marks.length}` : ""}</h2>
              {marks.length ? (
                <ol className="mt-3 space-y-1.5">
                  {marks.map((m, k) => (
                    <li key={k} className="flex items-start gap-2">
                      {m.ok ? <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" aria-label="correct" /> : <XCircle size={20} className="mt-0.5 shrink-0 text-rose-600" aria-label="wrong" />}
                      <span>
                        <b>{k + 1}.</b> {m.ok ? m.right : <>{m.given ? <span className="text-rose-700 line-through">{m.given}</span> : <span className="text-slate-400">no answer</span>} → <b className="text-emerald-700">{m.right}</b></>}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : pt.task.kind === "writing" ? (
                <div className="mt-3 space-y-3">
                  <p className="text-sm font-bold text-slate-500">Your answer ({words(answers[key(p, "w")] ?? "")} words)</p>
                  <p className="whitespace-pre-line rounded-2xl bg-slate-50 p-4">{answers[key(p, "w")] || "—"}</p>
                  <p className="text-sm font-black">Check your writing</p>
                  <ul className="list-disc space-y-1 pl-6">{pt.task.checklist.map((c, k) => <li key={k}>{c}</li>)}</ul>
                  <button type="button" onClick={() => setShowSample((s) => ({ ...s, [p]: !s[p] }))} className="text-sm font-bold underline">{showSample[p] ? "Hide" : "Show"} a sample answer</button>
                  {showSample[p] ? <p className="whitespace-pre-line rounded-2xl p-4" style={{ background: `${colour}14` }}>{pt.task.sample}</p> : null}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main lang="en" style={style} className="min-h-screen bg-[color:var(--cam-soft)]">
      <header className="sticky top-0 z-10 text-white shadow" style={{ background: colour }}>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-white/20 px-2 py-1 text-[11px] font-black tracking-wider">NETFENER</span>
            <span className="font-black">{levelName}</span>
            <span className="hidden text-white/80 sm:inline">· {paper.name}</span>
          </div>
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-black ${left === 0 ? "animate-pulse" : ""}`}>
            <Clock size={15} aria-hidden="true" /> {left === 0 ? "Time is up" : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`}
          </span>
        </div>
        <nav aria-label="Parts" className="mx-auto flex max-w-5xl flex-wrap gap-1.5 px-4 pb-3">
          {paper.parts.map((pt, k) => (
            <button key={k} type="button" onClick={() => setIdx(k)} aria-current={k === idx ? "step" : undefined} className={`rounded-full px-3 py-1 text-xs font-black ${k === idx ? "bg-white text-slate-800" : "bg-white/20"}`}>
              {pt.title.split(" · ")[0]}
            </button>
          ))}
        </nav>
      </header>
      <div className="mx-auto max-w-5xl space-y-5 px-4 py-8">
        <div>
          <h2 className="text-2xl font-black text-slate-800">{part.title}</h2>
          <p className="mt-1 text-lg font-semibold text-slate-600">{part.task.instruction}</p>
        </div>
        {part.audio ? (
          <div className="flex flex-wrap items-center gap-3 rounded-3xl bg-white p-4 shadow-sm">
            <Headphones size={22} aria-hidden="true" style={{ color: colour }} />
            <audio key={part.audio} controls preload="none" src={part.audio} className="w-full max-w-md">
              Your browser cannot play this recording.
            </audio>
            <span className="text-sm font-bold text-slate-500">Listen twice.</span>
          </div>
        ) : null}
        <PartView part={part} p={idx} answers={answers} set={set} seed={testTitle} />
        <div className="flex justify-between pt-4">
          <button type="button" disabled={idx === 0} onClick={() => setIdx(idx - 1)} className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-5 py-2.5 font-black disabled:opacity-40"><ArrowLeft size={18} aria-hidden="true" /> Back</button>
          {idx < paper.parts.length - 1 ? (
            <button type="button" onClick={() => setIdx(idx + 1)} className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-black text-white" style={{ background: colour }}>Next <ArrowRight size={18} aria-hidden="true" /></button>
          ) : (
            <button type="button" onClick={() => setPhase("done")} className="rounded-full px-6 py-2.5 font-black text-white" style={{ background: colour }}>Finish ✓</button>
          )}
        </div>
      </div>
    </main>
  );
}
