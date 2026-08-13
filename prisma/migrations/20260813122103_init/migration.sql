-- CreateTable
CREATE TABLE "ContentField" (
    "id" TEXT NOT NULL,
    "namespace" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "valueEn" TEXT NOT NULL,
    "valueAr" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "nameEn" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "firstNameEn" TEXT NOT NULL,
    "firstNameAr" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "shortIntroEn" TEXT NOT NULL,
    "shortIntroAr" TEXT NOT NULL,
    "bioParagraphsEn" TEXT[],
    "bioParagraphsAr" TEXT[],
    "quoteEn" TEXT NOT NULL,
    "quoteAr" TEXT NOT NULL,
    "credentialsEn" TEXT[],
    "credentialsAr" TEXT[],
    "portraitUrl" TEXT NOT NULL,
    "portraitAltEn" TEXT NOT NULL,
    "portraitAltAr" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "phoneDisplay" TEXT NOT NULL,
    "phoneHref" TEXT NOT NULL,
    "whatsappHref" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "addressLine1En" TEXT NOT NULL,
    "addressLine1Ar" TEXT NOT NULL,
    "addressLine2En" TEXT NOT NULL,
    "addressLine2Ar" TEXT NOT NULL,
    "mapEmbedQuery" TEXT NOT NULL,
    "emergencyNoteEn" TEXT NOT NULL,
    "emergencyNoteAr" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingHour" (
    "id" TEXT NOT NULL,
    "contactId" INTEGER NOT NULL DEFAULT 1,
    "daysEn" TEXT NOT NULL,
    "daysAr" TEXT NOT NULL,
    "hoursEn" TEXT NOT NULL,
    "hoursAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "WorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlobalSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "logoUrl" TEXT,
    "logoAltEn" TEXT,
    "logoAltAr" TEXT,
    "faviconUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlobalSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntroVideo" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "posterLabelEn" TEXT NOT NULL,
    "posterLabelAr" TEXT NOT NULL,
    "posterImageUrl" TEXT NOT NULL,
    "posterImageAltEn" TEXT NOT NULL,
    "posterImageAltAr" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntroVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAltEn" TEXT NOT NULL,
    "imageAltAr" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "detailedDescriptionEn" TEXT NOT NULL,
    "detailedDescriptionAr" TEXT NOT NULL,
    "symptomsEn" TEXT[],
    "symptomsAr" TEXT[],
    "evaluationEn" TEXT NOT NULL,
    "evaluationAr" TEXT NOT NULL,
    "treatmentApproachEn" TEXT NOT NULL,
    "treatmentApproachAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentOption" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAltEn" TEXT NOT NULL,
    "imageAltAr" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "detailedDescriptionEn" TEXT NOT NULL,
    "detailedDescriptionAr" TEXT NOT NULL,
    "howItWorksEn" TEXT NOT NULL,
    "howItWorksAr" TEXT NOT NULL,
    "benefitsEn" TEXT[],
    "benefitsAr" TEXT[],
    "suitableForEn" TEXT NOT NULL,
    "suitableForAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TreatmentOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAltEn" TEXT NOT NULL,
    "imageAltAr" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "detailedDescriptionEn" TEXT NOT NULL,
    "detailedDescriptionAr" TEXT NOT NULL,
    "highlightsEn" TEXT[],
    "highlightsAr" TEXT[],
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentStep" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TreatmentStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stat" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "labelEn" TEXT NOT NULL,
    "labelAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhyChoosePoint" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhyChoosePoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WrittenReview" (
    "id" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "locationEn" TEXT,
    "locationAr" TEXT,
    "rating" INTEGER NOT NULL,
    "textEn" TEXT NOT NULL,
    "textAr" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "isHomeFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WrittenReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoReview" (
    "id" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "posterLabelEn" TEXT NOT NULL,
    "posterLabelAr" TEXT NOT NULL,
    "posterImageUrl" TEXT NOT NULL,
    "posterImageAltEn" TEXT NOT NULL,
    "posterImageAltAr" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoItem" (
    "id" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionAr" TEXT,
    "posterLabelEn" TEXT NOT NULL,
    "posterLabelAr" TEXT NOT NULL,
    "posterImageUrl" TEXT NOT NULL,
    "posterImageAltEn" TEXT NOT NULL,
    "posterImageAltAr" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "isHomeFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "excerptEn" TEXT NOT NULL,
    "excerptAr" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "readTimeEn" TEXT NOT NULL,
    "readTimeAr" TEXT NOT NULL,
    "categoryEn" TEXT NOT NULL,
    "categoryAr" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAltEn" TEXT NOT NULL,
    "imageAltAr" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isHomeFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaqItem" (
    "id" TEXT NOT NULL,
    "questionEn" TEXT NOT NULL,
    "questionAr" TEXT NOT NULL,
    "answerEn" TEXT NOT NULL,
    "answerAr" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FaqItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavItem" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "NavItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "labelEn" TEXT NOT NULL,
    "labelAr" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeoMeta" (
    "id" TEXT NOT NULL,
    "pageSlug" TEXT NOT NULL,
    "ogImageUrl" TEXT,
    "ogImageAlt" TEXT,
    "canonicalPathOverride" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeoMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContentField_namespace_idx" ON "ContentField"("namespace");

-- CreateIndex
CREATE UNIQUE INDEX "ContentField_namespace_key_key" ON "ContentField"("namespace", "key");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "NavItem_key_key" ON "NavItem"("key");

-- CreateIndex
CREATE UNIQUE INDEX "SeoMeta_pageSlug_key" ON "SeoMeta"("pageSlug");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- AddForeignKey
ALTER TABLE "WorkingHour" ADD CONSTRAINT "WorkingHour_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
