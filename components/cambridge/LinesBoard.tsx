"use client";

import { useState } from "react";
import { Eraser } from "lucide-react";
import type { Scene } from "@/content/cambridge-tests/types";
import { SCENE_BG } from "./Pictures";

/** One colour per name, so every line can be told apart. */
export const LINE_COLOURS = ["#e11d48", "#2563eb", "#16a34a", "#9333ea", "#ea580c", "#0891b2", "#ca8a04"];

/** The picture sits in the middle of the board; names sit above and below it, as on the exam paper. */
const PIC_TOP = 16;
const PIC_HEIGHT = 68;

function namePositions(n: number) {
  const top = Math.ceil(n / 2);
  const bottom = n - top;
  const row = (count: number, y: number) => Array.from({ length: count }, (_, k) => ({ x: ((k + 1) * 100) / (count + 1), y }));
  return [...row(top, 7), ...row(bottom, 93)];
}

type Props = {
  scene: Scene;
  names: string[];
  /** The person (tag) each name is joined to, by name index. */
  value: (string | undefined)[];
  onChange: (nameIndex: number, tag: string | undefined) => void;
  /** After marking: true/false per name shows the line green or red. */
  marks?: boolean[];
  /** After marking: the right person for each name, drawn faintly where the learner's line was wrong or missing. */
  correct?: string[];
};

/**
 * "Listen and draw lines": tap a name, then tap a person (or the other way round) and a coloured line joins them.
 * Tapping the same pair again removes the line; joining a person to a new name moves the line.
 */
export function LinesBoard({ scene, names, value, onChange, marks, correct }: Props) {
  const [picked, setPicked] = useState<{ kind: "name"; i: number } | { kind: "tag"; tag: string } | null>(null);
  const spots = namePositions(names.length);
  const people = scene.items.filter((it) => it.tag);
  const at = (tag: string) => {
    const it = people.find((p) => p.tag === tag)!;
    return { x: it.x, y: PIC_TOP + (it.y * PIC_HEIGHT) / 100 };
  };
  const readOnly = Boolean(marks);

  const join = (i: number, tag: string) => {
    if (value[i] === tag) onChange(i, undefined);
    else {
      value.forEach((t, k) => {
        if (k !== i && t === tag) onChange(k, undefined); // one line per person
      });
      onChange(i, tag);
    }
    setPicked(null);
  };
  const tapName = (i: number) => {
    if (readOnly) return;
    if (picked?.kind === "tag") join(i, picked.tag);
    else setPicked(picked?.kind === "name" && picked.i === i ? null : { kind: "name", i });
  };
  const tapPerson = (tag: string) => {
    if (readOnly) return;
    if (picked?.kind === "name") join(picked.i, tag);
    else setPicked(picked?.kind === "tag" && picked.tag === tag ? null : { kind: "tag", tag });
  };

  return (
    <div className="space-y-2">
      <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl select-none sm:aspect-[16/11]">
        <div className="absolute inset-x-0 overflow-hidden rounded-3xl border-4 border-white shadow-md" style={{ top: `${PIC_TOP}%`, height: `${PIC_HEIGHT}%`, background: SCENE_BG[scene.bg] }} aria-hidden="true">
          {scene.items.map((it, k) =>
            it.tag ? null : (
              <span key={k} className="absolute -translate-x-1/2 -translate-y-1/2 leading-none" style={{ left: `${it.x}%`, top: `${it.y}%`, fontSize: `${it.size ?? 2}rem` }}>
                {it.e}
              </span>
            ),
          )}
        </div>

        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {marks && correct
            ? correct.map((tag, i) => {
                if (marks[i]) return null;
                const a = spots[i];
                const b = at(tag);
                return <line key={`c${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#64748b" strokeWidth={2.5} strokeDasharray="2 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />;
              })
            : null}
          {value.map((tag, i) => {
            if (!tag || !people.some((p) => p.tag === tag)) return null;
            const a = spots[i];
            const b = at(tag);
            const colour = marks ? (marks[i] ? "#16a34a" : "#dc2626") : LINE_COLOURS[i % LINE_COLOURS.length];
            return (
              <g key={i}>
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeWidth={7} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={colour} strokeWidth={4} strokeLinecap="round" strokeDasharray={marks && !marks[i] ? "6 5" : undefined} vectorEffect="non-scaling-stroke" />
              </g>
            );
          })}
        </svg>

        {people.map((it) => {
          const p = at(it.tag!);
          const owner = value.findIndex((t) => t === it.tag);
          const ring = picked?.kind === "tag" && picked.tag === it.tag ? "#0f172a" : owner >= 0 ? (marks ? (marks[owner] ? "#16a34a" : "#dc2626") : LINE_COLOURS[owner % LINE_COLOURS.length]) : undefined;
          return (
            <button
              key={it.tag}
              type="button"
              onClick={() => tapPerson(it.tag!)}
              aria-label={`Person ${it.tag}${owner >= 0 ? `, joined to ${names[owner]}` : ""}`}
              aria-pressed={picked?.kind === "tag" && picked.tag === it.tag}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full leading-none transition-transform hover:scale-110"
              style={{ left: `${p.x}%`, top: `${p.y}%`, fontSize: `${it.size ?? 2}rem`, boxShadow: ring ? `0 0 0 0.08em white, 0 0 0 0.16em ${ring}` : undefined, background: ring ? "rgba(255,255,255,0.6)" : undefined }}
            >
              {it.e}
            </button>
          );
        })}

        {names.map((name, i) => {
          const s = spots[i];
          const colour = LINE_COLOURS[i % LINE_COLOURS.length];
          const active = picked?.kind === "name" && picked.i === i;
          const joined = Boolean(value[i]);
          return (
            <button
              key={name}
              type="button"
              onClick={() => tapName(i)}
              aria-pressed={active}
              aria-label={`${name}${joined ? `, joined to person ${value[i]}` : ""}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border-[3px] px-3 py-1 text-base font-black shadow-sm transition sm:px-4 sm:text-xl ${active ? "scale-110" : ""}`}
              style={{ left: `${s.x}%`, top: `${s.y}%`, borderColor: colour, background: active ? colour : joined ? `${colour}22` : "white", color: active ? "white" : "#1e293b" }}
            >
              {name}
            </button>
          );
        })}
      </div>
      {readOnly ? null : (
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-500" lang="tr">
          <p>{picked ? (picked.kind === "name" ? `Şimdi resimde ${names[picked.i]} kim? Kişiye dokun.` : "Şimdi bu kişinin adına dokun.") : "Bir isme, sonra resimdeki kişiye dokun: aralarına çizgi çizilir. Silmek için aynı ikiliye tekrar dokun."}</p>
          <button type="button" onClick={() => names.forEach((_, i) => value[i] && onChange(i, undefined))} className="inline-flex items-center gap-1 rounded-full border-2 border-slate-200 bg-white px-3 py-1 font-bold text-slate-600">
            <Eraser size={14} aria-hidden="true" /> Clear lines
          </button>
        </div>
      )}
    </div>
  );
}
