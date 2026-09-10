-- The two decorative collage images behind the doctor's quote on the About
-- page were hardcoded (data/images.ts), not CMS-controlled. One shared row
-- since QuoteSection renders once (About page only).
CREATE TABLE "public"."QuoteSectionImages" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "primaryImageUrl" TEXT NOT NULL,
    "primaryImageAltEn" TEXT NOT NULL,
    "primaryImageAltAr" TEXT NOT NULL,
    "secondaryImageUrl" TEXT NOT NULL,
    "secondaryImageAltEn" TEXT NOT NULL,
    "secondaryImageAltAr" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuoteSectionImages_pkey" PRIMARY KEY ("id")
);

-- CTASection always reused the doctor's portrait for its background image
-- with no way to set a distinct image per page. One row per page variant.
CREATE TABLE "public"."CtaImage" (
    "id" TEXT NOT NULL,
    "variant" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAltEn" TEXT NOT NULL,
    "imageAltAr" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CtaImage_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CtaImage_variant_key" ON "public"."CtaImage"("variant");

ALTER TABLE "public"."QuoteSectionImages" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."CtaImage" ENABLE ROW LEVEL SECURITY;
