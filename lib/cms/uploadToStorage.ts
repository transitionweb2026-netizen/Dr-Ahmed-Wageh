import { createClient } from "@/lib/supabase/client";
import { createUploadTicket } from "@/lib/cms/admin-actions";

/**
 * Uploads a file straight from the browser to Supabase Storage using a
 * short-lived signed URL/token issued by createUploadTicket. The file bytes
 * never pass through a Vercel Server Action body — only the tiny ticket
 * request/response does — so this works regardless of file size, unlike
 * sending the file itself as FormData to a Server Action (blocked by
 * Vercel's own ~4.5MB Serverless Function body limit in production).
 */
export async function uploadFileDirect(
  bucket: "site-images" | "site-videos",
  file: File
): Promise<{ url?: string; error?: string }> {
  const ticket = await createUploadTicket(bucket, file.name, file.type, file.size);
  if ("error" in ticket) return { error: ticket.error };

  const supabase = createClient();
  const { error } = await supabase.storage.from(bucket).uploadToSignedUrl(ticket.path, ticket.token, file);
  if (error) return { error: error.message };

  return { url: ticket.publicUrl };
}
