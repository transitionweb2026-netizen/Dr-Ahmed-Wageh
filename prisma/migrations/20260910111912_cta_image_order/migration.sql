-- Every other collection model has an "order" column that the generic admin
-- list query always sorts by; CtaImage was missing it, which crashed the
-- "CTA Card Images" admin list page with a Prisma validation error.
ALTER TABLE "public"."CtaImage" ADD COLUMN "order" INTEGER NOT NULL DEFAULT 0;
