"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteCollectionItem } from "@/lib/cms/admin-actions";

export function DeleteButton({
  model,
  id,
  redirectTo,
}: {
  model: string;
  id: string;
  redirectTo: string;
}) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (!window.confirm("Delete this item? This cannot be undone.")) return;
        startTransition(async () => {
          await deleteCollectionItem(model, id);
          router.push(redirectTo);
        });
      }}
      className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Deleting…" : "Delete"}
    </button>
  );
}
