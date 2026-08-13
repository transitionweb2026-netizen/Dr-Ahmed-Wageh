export function LocationLabel({ parts }: { parts: string[] }) {
  return (
    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
      {parts.join("  /  ")}
    </p>
  );
}
