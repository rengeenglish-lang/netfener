"use client";

import { Clock, Eye, EyeOff, Volume2 } from "lucide-react";

/** The dark bar across the top of the TOEFL test screen. */
export function ToeflBar({
  section,
  counter,
  timeLeft,
  hideTime,
  onToggleTime,
  volume,
  onVolume,
  onBack,
  onNext,
  nextLabel = "Next",
  nextDisabled,
  backDisabled,
  extra,
}: {
  section: string;
  counter?: string;
  timeLeft?: number;
  hideTime?: boolean;
  onToggleTime?: () => void;
  volume?: number;
  onVolume?: (v: number) => void;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  backDisabled?: boolean;
  /** Anything else for the right-hand side, such as a recording indicator. */
  extra?: React.ReactNode;
}) {
  return (
    <header lang="en" className="bg-[#1f3347] text-white">
      <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="rounded bg-white/10 px-2 py-1 text-[11px] font-black tracking-wider">NETFENER</span>
          <span className="text-sm font-extrabold tracking-wide">TOEFL iBT<span className="ml-1 font-semibold text-white/70">practice</span></span>
          <span className="hidden text-sm text-white/60 sm:inline">|</span>
          <span className="text-sm font-bold">{section}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {extra}
          {onVolume && volume !== undefined ? (
            <label className="mr-1 inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-xs font-bold">
              <Volume2 size={14} aria-hidden="true" /> Volume
              <input type="range" min={0} max={1} step={0.1} value={volume} onChange={(e) => onVolume(Number(e.target.value))} className="w-16 accent-white" aria-label="Volume" />
            </label>
          ) : null}
          {onBack ? <BarButton onClick={onBack} disabled={backDisabled}>Back</BarButton> : null}
          {onNext ? <BarButton onClick={onNext} disabled={nextDisabled} primary>{nextLabel}</BarButton> : null}
        </div>
      </div>
      {counter || timeLeft !== undefined ? (
        <div className="flex items-center justify-between border-t border-white/10 bg-[#2a4560] px-4 py-1.5 text-xs font-bold">
          <span>{counter}</span>
          {timeLeft !== undefined ? (
            <span className="inline-flex items-center gap-2 tabular-nums">
              {onToggleTime ? (
                <button type="button" onClick={onToggleTime} className="inline-flex items-center gap-1 rounded-full border border-white/25 px-2 py-0.5 font-bold hover:bg-white/10">
                  {hideTime ? <Eye size={12} aria-hidden="true" /> : <EyeOff size={12} aria-hidden="true" />} {hideTime ? "Show Time" : "Hide Time"}
                </button>
              ) : null}
              {hideTime ? null : (
                <span className={`inline-flex items-center gap-1 ${timeLeft < 120 ? "text-amber-300" : ""}`}>
                  <Clock size={12} aria-hidden="true" /> {formatClock(timeLeft)}
                </span>
              )}
            </span>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}

function BarButton({ children, onClick, disabled, primary }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; primary?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`min-w-20 rounded-full px-4 py-1.5 text-sm font-extrabold transition disabled:cursor-not-allowed disabled:opacity-40 ${primary ? "bg-white text-[#1f3347] hover:bg-sky-50" : "border border-white/40 text-white hover:bg-white/10"}`}
    >
      {children}
    </button>
  );
}

export function formatClock(seconds: number) {
  const s = Math.max(0, Math.ceil(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s % 60)}`;
}
