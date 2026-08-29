import { config } from "dotenv";
config({ path: ".env.local" });

import { createAdminClient } from "../lib/supabase/admin";

async function main() {
  const admin = createAdminClient();
  const { data: existing } = await admin.storage.listBuckets();
  if (existing?.some((b) => b.id === "site-videos")) {
    console.log("Bucket 'site-videos' already exists.");
    return;
  }

  const { data, error } = await admin.storage.createBucket("site-videos", {
    public: true,
    fileSizeLimit: 50 * 1024 * 1024,
    allowedMimeTypes: ["video/mp4", "video/webm", "video/ogg", "video/quicktime"],
  });

  if (error) {
    console.error("Failed to create bucket:", error.message);
    process.exit(1);
  }
  console.log("Created bucket:", data);
}

main();
