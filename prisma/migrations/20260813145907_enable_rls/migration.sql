-- Enable Row Level Security on every table, with no policies attached.
--
-- This app never queries these tables through Supabase's PostgREST/REST
-- API — all reads (frontend) and writes (admin Server Actions) go through
-- Prisma over a direct Postgres connection as the table-owning `postgres`
-- role, which always bypasses RLS regardless of whether it's enabled.
--
-- Enabling RLS with zero policies is therefore the correct fix: it makes
-- PostgREST deny all access to the `anon` and `authenticated` roles (the
-- ones the public NEXT_PUBLIC_SUPABASE_ANON_KEY authenticates as), closing
-- off direct table read/write access via the REST API, while leaving the
-- app's own Prisma-based access completely unaffected.
ALTER TABLE "public"."_prisma_migrations" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."ContentField" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Doctor" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Contact" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."WorkingHour" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."GlobalSettings" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."IntroVideo" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Condition" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."TreatmentOption" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Service" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."TreatmentStep" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Stat" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."WhyChoosePoint" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Technology" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."WrittenReview" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."VideoReview" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."VideoItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Article" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."FaqItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."NavItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."SocialLink" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."SeoMeta" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."AdminUser" ENABLE ROW LEVEL SECURITY;
