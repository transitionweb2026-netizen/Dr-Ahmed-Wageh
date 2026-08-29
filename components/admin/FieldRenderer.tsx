import type { FieldGroup, FieldType } from "@/lib/cms/admin-schema";
import { ImageField } from "./ImageField";
import { VideoField } from "./VideoField";

const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-brand-950 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

function toListText(value: unknown): string {
  return Array.isArray(value) ? value.join("\n") : "";
}

function toScalarText(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function TextControl({
  name,
  type,
  defaultValue,
  dir,
}: {
  name: string;
  type: FieldType;
  defaultValue: string;
  dir?: "rtl" | "ltr";
}) {
  if (type === "textarea" || type === "list") {
    return (
      <textarea
        name={name}
        defaultValue={defaultValue}
        dir={dir}
        rows={type === "list" ? 5 : 4}
        placeholder={type === "list" ? "One item per line" : undefined}
        className={inputClass}
      />
    );
  }
  if (type === "number") {
    return <input type="number" name={name} defaultValue={defaultValue} className={inputClass} />;
  }
  if (type === "date") {
    return <input type="date" name={name} defaultValue={defaultValue} className={inputClass} />;
  }
  return <input type="text" name={name} defaultValue={defaultValue} dir={dir} className={inputClass} />;
}

export function FieldRenderer({
  field,
  values,
}: {
  field: FieldGroup;
  values: Record<string, unknown>;
}) {
  if (field.type === "image") {
    return <ImageField name={field.key!} label={field.label} defaultValue={toScalarText(values[field.key!])} />;
  }

  if (field.type === "video") {
    return <VideoField name={field.key!} label={field.label} defaultValue={toScalarText(values[field.key!])} />;
  }

  if (field.type === "boolean") {
    const checked = Boolean(values[field.key!]);
    return (
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <input type="checkbox" name={field.key!} defaultChecked={checked} className="h-4 w-4 rounded border-slate-300 text-brand-600" />
        {field.label}
      </label>
    );
  }

  if (field.enKey || field.arKey) {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-700">{field.label}</span>
        <div className="grid gap-3 sm:grid-cols-2">
          {field.enKey && (
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400">English</span>
              <TextControl
                name={field.enKey}
                type={field.type}
                defaultValue={field.type === "list" ? toListText(values[field.enKey]) : toScalarText(values[field.enKey])}
              />
            </div>
          )}
          {field.arKey && (
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400">Arabic (RTL)</span>
              <TextControl
                name={field.arKey}
                type={field.type}
                dir="rtl"
                defaultValue={field.type === "list" ? toListText(values[field.arKey]) : toScalarText(values[field.arKey])}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{field.label}</label>
      <TextControl
        name={field.key!}
        type={field.type}
        defaultValue={field.type === "list" ? toListText(values[field.key!]) : toScalarText(values[field.key!])}
      />
    </div>
  );
}
