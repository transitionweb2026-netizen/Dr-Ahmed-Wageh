"use client";

import { useRef, useState, useTransition } from "react";
import { uploadImage } from "@/lib/cms/admin-actions";

export function ImageField({
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
    const fd = new FormData();
    fd.set("file", file);
    startTransition(async () => {
      const result = await uploadImage(fd);
      if (result.error) setError(result.error);
      if (result.url) setUrl(result.url);
      if (inputRef.current) inputRef.current.value = "";
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={url} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-[10px] text-slate-400">No image</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            disabled={pending}
            className="text-xs text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-brand-700 hover:file:bg-brand-100"
          />
          {pending && <span className="text-xs text-brand-600">Uploading…</span>}
          {error && <span className="text-xs text-red-600">{error}</span>}
          {url && !pending && (
            <button
              type="button"
              onClick={() => setUrl("")}
              className="w-fit text-xs text-slate-500 underline hover:text-slate-700"
            >
              Remove image
            </button>
          )}
        </div>
      </div>
      <input type="hidden" name={name} value={url} />
    </div>
  );
}
