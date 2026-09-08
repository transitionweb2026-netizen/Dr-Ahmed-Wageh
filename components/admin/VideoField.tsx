"use client";

import { useRef, useState, useTransition } from "react";
import { uploadFileDirect } from "@/lib/cms/uploadToStorage";

export function VideoField({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue: string;
}) {
  const [url, setUrl] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    startTransition(async () => {
      const result = await uploadFileDirect("site-videos", file);
      if (result.error) setError(result.error);
      if (result.url) setUrl(result.url);
      if (inputRef.current) inputRef.current.value = "";
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex aspect-video w-full max-w-xs shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {url ? (
            <video src={url} controls className="h-full w-full object-cover" />
          ) : (
            <span className="text-xs text-slate-400">No video</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            type="file"
            accept="video/*"
            onChange={handleFile}
            disabled={pending}
            className="text-xs text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-brand-700 hover:file:bg-brand-100"
          />
          {pending && <span className="text-xs text-brand-600">Uploading… this can take a moment for larger files.</span>}
          {error && <span className="text-xs text-red-600">{error}</span>}
          {url && !pending && (
            <button
              type="button"
              onClick={() => setUrl("")}
              className="w-fit text-xs text-slate-500 underline hover:text-slate-700"
            >
              Remove video
            </button>
          )}
        </div>
      </div>
      <input type="hidden" name={name} value={url} />
    </div>
  );
}
