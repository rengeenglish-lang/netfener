import type { Pic, Scene } from "@/content/cambridge-tests/types";

const SCENE_BG: Record<Scene["bg"], string> = {
  park: "linear-gradient(#bfe6ff 0%, #bfe6ff 45%, #9bd67a 45%, #7cc35a 100%)",
  garden: "linear-gradient(#cdeeff 0%, #cdeeff 40%, #a6dd84 40%, #86c766 100%)",
  farm: "linear-gradient(#d6f0ff 0%, #d6f0ff 42%, #e8d38a 42%, #cdb46a 100%)",
  beach: "linear-gradient(#a9dcff 0%, #a9dcff 40%, #5fb3e6 40%, #5fb3e6 62%, #f4dd9c 62%, #ecd08a 100%)",
  room: "linear-gradient(#fdf3e3 0%, #fdf3e3 68%, #d9b98c 68%, #caa877 100%)",
  kitchen: "linear-gradient(#fff6e8 0%, #fff6e8 60%, #e9e2d6 60%, #ddd3c3 100%)",
  classroom: "linear-gradient(#eef6ff 0%, #eef6ff 66%, #c9b08c 66%, #b89c76 100%)",
  street: "linear-gradient(#cfe9ff 0%, #cfe9ff 50%, #b9bec6 50%, #9aa1ab 100%)",
};

const CARD_COLOURS = ["#fff4d6", "#e3f6ee", "#e5efff", "#fde7f0", "#efe7ff", "#ffe9dc"];

/** A big emoji on a soft coloured card, like a flashcard. */
export function PicCard({ pic, i = 0, size = "lg" }: { pic: Pic; i?: number; size?: "md" | "lg" }) {
  const glyphs = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(pic.e)].length;
  if (glyphs > 1) {
    // A story panel: several emoji side by side in a wider frame.
    return (
      <div className="flex w-48 shrink-0 flex-col items-center justify-center gap-1 rounded-3xl border-2 border-white px-3 py-4 shadow-sm" style={{ background: CARD_COLOURS[i % CARD_COLOURS.length] }} aria-hidden="true">
        <span className="whitespace-nowrap text-4xl leading-none tracking-wide">{pic.e}</span>
        {pic.label ? <span className="rounded-full bg-white/80 px-2 text-xs font-black text-slate-700">{pic.label}</span> : null}
      </div>
    );
  }
  return (
    <div
      className={`flex shrink-0 flex-col items-center justify-center rounded-3xl border-2 border-white shadow-sm ${size === "lg" ? "h-28 w-28" : "h-20 w-20"}`}
      style={{ background: CARD_COLOURS[i % CARD_COLOURS.length] }}
      aria-hidden="true"
    >
      <span className={`leading-none ${size === "lg" ? "text-6xl" : "text-4xl"}`}>{pic.e}</span>
      {pic.label ? <span className="mt-1 rounded-full bg-white/80 px-2 text-xs font-black text-slate-700">{pic.label}</span> : null}
    </div>
  );
}

/** A simple picture made of emoji placed on a coloured background. */
export function SceneView({ scene, label }: { scene: Scene; label: string }) {
  return (
    <div role="img" aria-label={label} className="relative mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-3xl border-4 border-white shadow-md" style={{ background: SCENE_BG[scene.bg] }}>
      {scene.items.map((it, k) => (
        <span key={k} className="absolute -translate-x-1/2 -translate-y-1/2 leading-none" style={{ left: `${it.x}%`, top: `${it.y}%`, fontSize: `${it.size ?? 2}rem` }} aria-hidden="true">
          {it.e}
        </span>
      ))}
    </div>
  );
}
