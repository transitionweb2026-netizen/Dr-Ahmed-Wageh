-- iconName is unused by the current image-card design for these three
-- models (the field is stripped before it ever reaches a client
-- component), but was still a required column with no default, so the
-- generic CMS "Add New" form — which has no icon field for these models —
-- threw a Prisma validation error ("Argument iconName is missing") on
-- every attempt to create a new Condition/TreatmentOption/Service.
ALTER TABLE "public"."Condition" ALTER COLUMN "iconName" DROP NOT NULL;
ALTER TABLE "public"."TreatmentOption" ALTER COLUMN "iconName" DROP NOT NULL;
ALTER TABLE "public"."Service" ALTER COLUMN "iconName" DROP NOT NULL;

-- Same failure mode for WrittenReview/Article: "date" was required with no
-- default and no admin form field, so creating either via the CMS threw
-- "Argument date is missing". A DB-level default makes creation safe by
-- itself; the admin form also gains a real Date field (see admin-schema.ts)
-- so the value is actually editable, not just silently defaulted.
ALTER TABLE "public"."WrittenReview" ALTER COLUMN "date" SET DEFAULT now();
ALTER TABLE "public"."Article" ALTER COLUMN "date" SET DEFAULT now();
