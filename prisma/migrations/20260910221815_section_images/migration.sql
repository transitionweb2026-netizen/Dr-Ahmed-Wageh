-- Independent, named image slots for every place that used to share the
-- doctor's portrait (every Hero page variant, the About-page quote
-- portrait, the Technologies section, the Why Choose section).
CREATE TABLE "public"."SectionImage" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAltEn" TEXT NOT NULL,
    "imageAltAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SectionImage_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "SectionImage_key_key" ON "public"."SectionImage"("key");

ALTER TABLE "public"."SectionImage" ENABLE ROW LEVEL SECURITY;
