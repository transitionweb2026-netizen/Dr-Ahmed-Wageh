"use client";

import { useMemo, useState } from "react";
import { iconRegistry } from "@/lib/cms/iconRegistry";

// Shown before the admin searches, so the picker doesn't dump 1500+ icons
// on open — the full lucide-react set is still reachable by typing.
const DEFAULT_ICON_NAMES = [
  "Shield",
  "ShieldCheck",
  "Users",
  "Award",
  "Heart",
  "HeartPulse",
  "Activity",
  "Stethoscope",
  "CheckCircle2",
  "BadgeCheck",
  "Clock",
  "Star",
  "ThumbsUp",
  "Zap",
  "Target",
  "Sparkles",
  "TrendingUp",
  "Syringe",
  "Pill",
  "Scan",
  "Radio",
  "Waves",
  "Bone",
  "Brain",
  "Microscope",
  "ClipboardCheck",
  "Gauge",
  "CircleHelp",
].filter((name) => name in iconRegistry);

export function IconField({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const allNames = useMemo(() => Object.keys(iconRegistry).sort(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEFAULT_ICON_NAMES;
    return allNames.filter((n) => n.toLowerCase().includes(q)).slice(0, 120);
  }, [query, allNames]);

  const SelectedIcon = iconRegistry[value] ?? iconRegistry.CircleHelp;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-brand-600">
          <SelectedIcon className="h-6 w-6" strokeWidth={1.8} />
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-500">{value || "No icon selected"}</span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-fit rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-brand-700 transition-colors hover:bg-brand-50"
          >
            Change Icon
          </button>
        </div>
      </div>
      <input type="hidden" name={name} value={value} />

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose an icon"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-950/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h3 className="font-display text-base font-semibold text-brand-950">Choose an icon</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                Close
              </button>
            </div>
            <div className="border-b border-slate-100 px-5 py-3">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search icons (e.g. heart, shield, clock)…"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-brand-950 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div className="grid grid-cols-5 gap-2 overflow-y-auto p-5 sm:grid-cols-7">
              {results.map((iconName) => {
                const Icon = iconRegistry[iconName];
                const isSelected = iconName === value;
                return (
                  <button
                    key={iconName}
                    type="button"
                    title={iconName}
                    onClick={() => {
                      setValue(iconName);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-slate-600 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 ${
                      isSelected ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </button>
                );
              })}
              {results.length === 0 && (
                <p className="col-span-full py-8 text-center text-sm text-slate-400">
                  No icons match &ldquo;{query}&rdquo;.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
