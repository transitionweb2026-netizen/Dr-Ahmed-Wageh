// Config-driven admin schema: one definition per content domain describes
// its fields well enough to render a generic editor and run a generic
// Server Action against it, instead of hand-building a bespoke page per
// domain. `model` matches the Prisma Client delegate name exactly.

export type FieldType = "text" | "textarea" | "list" | "image" | "number" | "boolean";

export interface FieldGroup {
  label: string;
  type: FieldType;
  /** Bilingual pair — most content fields. */
  enKey?: string;
  arKey?: string;
  /** Non-bilingual field (image URL, numeric order, rating, href, etc). */
  key?: string;
}

export interface ModelConfig {
  model: string;
  kind: "singleton" | "collection";
  label: string;
  fields: FieldGroup[];
  /** Which field's EN value represents a collection item in list view. */
  titleKey?: string;
  imageKey?: string;
}

export interface SectionConfig {
  slug: string;
  label: string;
  model: ModelConfig;
}

export interface TextGroup {
  namespace: string;
  /** Restrict to ContentField rows whose key starts with "<prefix>." */
  keyPrefix?: string;
  label: string;
}

export interface PageConfig {
  slug: string;
  label: string;
  /** Hero/CTA/heading copy — lives in ContentField, edited as EN/AR text pairs. */
  textGroups: TextGroup[];
  sections: SectionConfig[];
}

// Hero/CTA copy and every other short label live in ContentField (the
// Meta/Hero/CTA/etc. translation namespaces), not their own tables, so
// they're edited via the "Page Text" editor rather than this schema.

const conditionModel: ModelConfig = {
  model: "condition",
  kind: "collection",
  label: "Conditions We Treat",
  titleKey: "nameEn",
  imageKey: "imageUrl",
  fields: [
    { label: "Image", type: "image", key: "imageUrl" },
    { label: "Image Alt Text", type: "text", enKey: "imageAltEn", arKey: "imageAltAr" },
    { label: "Name", type: "text", enKey: "nameEn", arKey: "nameAr" },
    { label: "Short Description (card)", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    {
      label: "Detailed Description (popup)",
      type: "textarea",
      enKey: "detailedDescriptionEn",
      arKey: "detailedDescriptionAr",
    },
    { label: "Main Symptoms", type: "list", enKey: "symptomsEn", arKey: "symptomsAr" },
    { label: "How Dr. Wagih Evaluates This", type: "textarea", enKey: "evaluationEn", arKey: "evaluationAr" },
    {
      label: "Treatment Approach",
      type: "textarea",
      enKey: "treatmentApproachEn",
      arKey: "treatmentApproachAr",
    },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const treatmentOptionModel: ModelConfig = {
  model: "treatmentOption",
  kind: "collection",
  label: "Treatment Options",
  titleKey: "nameEn",
  imageKey: "imageUrl",
  fields: [
    { label: "Image", type: "image", key: "imageUrl" },
    { label: "Image Alt Text", type: "text", enKey: "imageAltEn", arKey: "imageAltAr" },
    { label: "Name", type: "text", enKey: "nameEn", arKey: "nameAr" },
    { label: "Short Description (card)", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    {
      label: "Detailed Description (popup)",
      type: "textarea",
      enKey: "detailedDescriptionEn",
      arKey: "detailedDescriptionAr",
    },
    { label: "How It Works", type: "textarea", enKey: "howItWorksEn", arKey: "howItWorksAr" },
    { label: "Key Benefits", type: "list", enKey: "benefitsEn", arKey: "benefitsAr" },
    { label: "Who It's Suitable For", type: "textarea", enKey: "suitableForEn", arKey: "suitableForAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const serviceModel: ModelConfig = {
  model: "service",
  kind: "collection",
  label: "Services",
  titleKey: "nameEn",
  imageKey: "imageUrl",
  fields: [
    { label: "Image", type: "image", key: "imageUrl" },
    { label: "Image Alt Text", type: "text", enKey: "imageAltEn", arKey: "imageAltAr" },
    { label: "Name", type: "text", enKey: "nameEn", arKey: "nameAr" },
    { label: "Short Description (card)", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    {
      label: "Detailed Description (popup)",
      type: "textarea",
      enKey: "detailedDescriptionEn",
      arKey: "detailedDescriptionAr",
    },
    { label: "What's Included", type: "list", enKey: "highlightsEn", arKey: "highlightsAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const treatmentStepModel: ModelConfig = {
  model: "treatmentStep",
  kind: "collection",
  label: "Treatment Steps",
  titleKey: "titleEn",
  fields: [
    { label: "Step Number", type: "text", key: "number" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Description", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const statModel: ModelConfig = {
  model: "stat",
  kind: "collection",
  label: "Statistics",
  titleKey: "labelEn",
  fields: [
    { label: "Icon (lucide-react name)", type: "text", key: "iconName" },
    { label: "Value", type: "text", key: "value" },
    { label: "Label", type: "text", enKey: "labelEn", arKey: "labelAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const whyChoosePointModel: ModelConfig = {
  model: "whyChoosePoint",
  kind: "collection",
  label: "Why Choose Dr. Wagih — Points",
  titleKey: "titleEn",
  fields: [
    { label: "Icon (lucide-react name)", type: "text", key: "iconName" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Description", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const technologyModel: ModelConfig = {
  model: "technology",
  kind: "collection",
  label: "Latest Technologies",
  titleKey: "titleEn",
  fields: [
    { label: "Icon (lucide-react name)", type: "text", key: "iconName" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Description", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const faqItemModel: ModelConfig = {
  model: "faqItem",
  kind: "collection",
  label: "FAQ",
  titleKey: "questionEn",
  fields: [
    { label: "Question", type: "text", enKey: "questionEn", arKey: "questionAr" },
    { label: "Answer", type: "textarea", enKey: "answerEn", arKey: "answerAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const writtenReviewModel: ModelConfig = {
  model: "writtenReview",
  kind: "collection",
  label: "Written Reviews",
  titleKey: "nameEn",
  imageKey: "avatarUrl",
  fields: [
    { label: "Reviewer Photo", type: "image", key: "avatarUrl" },
    { label: "Reviewer Name", type: "text", enKey: "nameEn", arKey: "nameAr" },
    { label: "Reviewer Location", type: "text", enKey: "locationEn", arKey: "locationAr" },
    { label: "Rating (1-5)", type: "number", key: "rating" },
    { label: "Review Text", type: "textarea", enKey: "textEn", arKey: "textAr" },
    { label: "Featured on Main Page", type: "boolean", key: "isHomeFeatured" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const videoReviewModel: ModelConfig = {
  model: "videoReview",
  kind: "collection",
  label: "Video Reviews",
  titleKey: "titleEn",
  imageKey: "posterImageUrl",
  fields: [
    { label: "Video Thumbnail", type: "image", key: "posterImageUrl" },
    { label: "Thumbnail Alt Text", type: "text", enKey: "posterImageAltEn", arKey: "posterImageAltAr" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Poster Label", type: "text", enKey: "posterLabelEn", arKey: "posterLabelAr" },
    { label: "Video URL", type: "text", key: "videoUrl" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const videoItemModel: ModelConfig = {
  model: "videoItem",
  kind: "collection",
  label: "Videos",
  titleKey: "titleEn",
  imageKey: "posterImageUrl",
  fields: [
    { label: "Video Thumbnail", type: "image", key: "posterImageUrl" },
    { label: "Thumbnail Alt Text", type: "text", enKey: "posterImageAltEn", arKey: "posterImageAltAr" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Description", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    { label: "Poster Label / Category", type: "text", enKey: "posterLabelEn", arKey: "posterLabelAr" },
    { label: "Video URL", type: "text", key: "videoUrl" },
    { label: "Featured on Main Page", type: "boolean", key: "isHomeFeatured" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const articleModel: ModelConfig = {
  model: "article",
  kind: "collection",
  label: "Articles",
  titleKey: "titleEn",
  imageKey: "imageUrl",
  fields: [
    { label: "Thumbnail Image", type: "image", key: "imageUrl" },
    { label: "Image Alt Text", type: "text", enKey: "imageAltEn", arKey: "imageAltAr" },
    { label: "Slug (URL id)", type: "text", key: "slug" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Excerpt / Description", type: "textarea", enKey: "excerptEn", arKey: "excerptAr" },
    { label: "Read Time", type: "text", enKey: "readTimeEn", arKey: "readTimeAr" },
    { label: "Category", type: "text", enKey: "categoryEn", arKey: "categoryAr" },
    { label: "Featured (Articles page hero)", type: "boolean", key: "isFeatured" },
    { label: "Featured on Main Page", type: "boolean", key: "isHomeFeatured" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const navItemModel: ModelConfig = {
  model: "navItem",
  kind: "collection",
  label: "Navigation",
  titleKey: "key",
  fields: [
    { label: "Key (must match translation key)", type: "text", key: "key" },
    { label: "URL", type: "text", key: "href" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const socialLinkModel: ModelConfig = {
  model: "socialLink",
  kind: "collection",
  label: "Social Links",
  titleKey: "platform",
  fields: [
    { label: "Platform (facebook/instagram/tiktok/youtube/whatsapp)", type: "text", key: "platform" },
    { label: "Label", type: "text", enKey: "labelEn", arKey: "labelAr" },
    { label: "URL", type: "text", key: "href" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const workingHourModel: ModelConfig = {
  model: "workingHour",
  kind: "collection",
  label: "Working Hours",
  titleKey: "daysEn",
  fields: [
    { label: "Days", type: "text", enKey: "daysEn", arKey: "daysAr" },
    { label: "Hours", type: "text", enKey: "hoursEn", arKey: "hoursAr" },
    { label: "Display Order", type: "number", key: "order" },
  ],
};

const seoMetaModel: ModelConfig = {
  model: "seoMeta",
  kind: "collection",
  label: "SEO — Per Page",
  titleKey: "pageSlug",
  imageKey: "ogImageUrl",
  fields: [
    { label: "Page Slug (home/about/services/reviews/videos/articles/contact)", type: "text", key: "pageSlug" },
    { label: "Social Share Image (OG Image)", type: "image", key: "ogImageUrl" },
    { label: "Social Share Image Alt Text", type: "text", key: "ogImageAlt" },
    { label: "Canonical URL Override (leave blank for default)", type: "text", key: "canonicalPathOverride" },
  ],
};

export const doctorModel: ModelConfig = {
  model: "doctor",
  kind: "singleton",
  label: "Doctor Profile",
  fields: [
    { label: "Full Name", type: "text", enKey: "nameEn", arKey: "nameAr" },
    { label: "First Name", type: "text", enKey: "firstNameEn", arKey: "firstNameAr" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Short Intro", type: "textarea", enKey: "shortIntroEn", arKey: "shortIntroAr" },
    { label: "Bio Paragraphs", type: "list", enKey: "bioParagraphsEn", arKey: "bioParagraphsAr" },
    { label: "Quote", type: "textarea", enKey: "quoteEn", arKey: "quoteAr" },
    { label: "Credentials", type: "list", enKey: "credentialsEn", arKey: "credentialsAr" },
    { label: "Portrait Image", type: "image", key: "portraitUrl" },
    { label: "Portrait Alt Text", type: "text", enKey: "portraitAltEn", arKey: "portraitAltAr" },
  ],
};

export const contactModel: ModelConfig = {
  model: "contact",
  kind: "singleton",
  label: "Contact Information",
  fields: [
    { label: "Phone (display)", type: "text", key: "phoneDisplay" },
    { label: "Phone (tel: link)", type: "text", key: "phoneHref" },
    { label: "WhatsApp Link", type: "text", key: "whatsappHref" },
    { label: "Email", type: "text", key: "email" },
    { label: "Address Line 1", type: "text", enKey: "addressLine1En", arKey: "addressLine1Ar" },
    { label: "Address Line 2", type: "text", enKey: "addressLine2En", arKey: "addressLine2Ar" },
    { label: "Map Search Query", type: "text", key: "mapEmbedQuery" },
    { label: "Emergency / Availability Note", type: "text", enKey: "emergencyNoteEn", arKey: "emergencyNoteAr" },
  ],
};

export const globalSettingsModel: ModelConfig = {
  model: "globalSettings",
  kind: "singleton",
  label: "Global Settings",
  fields: [
    { label: "Logo Image", type: "image", key: "logoUrl" },
    { label: "Logo Alt Text", type: "text", enKey: "logoAltEn", arKey: "logoAltAr" },
    { label: "Favicon Image", type: "image", key: "faviconUrl" },
  ],
};

export const introVideoModel: ModelConfig = {
  model: "introVideo",
  kind: "singleton",
  label: "Intro Video",
  fields: [
    { label: "Poster Image", type: "image", key: "posterImageUrl" },
    { label: "Poster Image Alt Text", type: "text", enKey: "posterImageAltEn", arKey: "posterImageAltAr" },
    { label: "Title", type: "text", enKey: "titleEn", arKey: "titleAr" },
    { label: "Description", type: "textarea", enKey: "descriptionEn", arKey: "descriptionAr" },
    { label: "Poster Label", type: "text", enKey: "posterLabelEn", arKey: "posterLabelAr" },
    { label: "Video URL", type: "text", key: "videoUrl" },
  ],
};

export const PAGES: PageConfig[] = [
  {
    slug: "main",
    label: "Main",
    textGroups: [
      { namespace: "Hero", keyPrefix: "home", label: "Hero" },
      { namespace: "AboutIntro", label: "About Doctor (intro teaser)" },
      { namespace: "Conditions", label: "Conditions We Treat (heading)" },
      { namespace: "TreatmentSteps", label: "Treatment Steps (heading)" },
      { namespace: "Statistics", label: "Statistics (disclaimer)" },
      { namespace: "TreatmentOptions", keyPrefix: "home", label: "Treatment Options (heading)" },
      { namespace: "WhyChoose", label: "Why Choose Dr. Wagih (heading)" },
      { namespace: "MainReviews", label: "Patient Experiences (heading)" },
      { namespace: "VideosSection", keyPrefix: "home", label: "Videos (heading)" },
      { namespace: "FaqArticles", label: "FAQ + Articles (heading)" },
      { namespace: "CTA", keyPrefix: "home", label: "CTA" },
    ],
    sections: [
      { slug: "conditions", label: "Conditions We Treat", model: conditionModel },
      { slug: "treatment-steps", label: "Treatment Steps", model: treatmentStepModel },
      { slug: "statistics", label: "Statistics", model: statModel },
      { slug: "treatment-options", label: "Treatment Options", model: treatmentOptionModel },
      { slug: "why-choose", label: "Why Choose Dr. Wagih", model: whyChoosePointModel },
      { slug: "video-reviews", label: "Patient Experiences — Videos", model: videoReviewModel },
      { slug: "written-reviews", label: "Patient Experiences — Reviews", model: writtenReviewModel },
      { slug: "faq", label: "FAQ", model: faqItemModel },
    ],
  },
  {
    slug: "about",
    label: "About Doctor",
    textGroups: [
      { namespace: "Hero", keyPrefix: "about", label: "Hero" },
      { namespace: "Quote", label: "Doctor Quote" },
      { namespace: "AboutText", label: "About Doctor (heading)" },
      { namespace: "Technologies", label: "Latest Technologies (heading)" },
      { namespace: "Statistics", label: "Statistics (disclaimer)" },
      { namespace: "CTA", keyPrefix: "about", label: "CTA" },
    ],
    sections: [
      { slug: "doctor", label: "Doctor Profile & Quote", model: doctorModel },
      { slug: "intro-video", label: "About Video", model: introVideoModel },
      { slug: "technologies", label: "Latest Technologies", model: technologyModel },
      { slug: "statistics", label: "Statistics", model: statModel },
    ],
  },
  {
    slug: "services",
    label: "Services",
    textGroups: [
      { namespace: "Hero", keyPrefix: "services", label: "Hero" },
      { namespace: "Services", label: "Services (heading)" },
      { namespace: "TreatmentOptions", keyPrefix: "services", label: "Treatment Options (heading)" },
      { namespace: "CTA", keyPrefix: "services", label: "CTA" },
    ],
    sections: [
      { slug: "services", label: "Services", model: serviceModel },
      { slug: "treatment-options", label: "Treatment Options", model: treatmentOptionModel },
    ],
  },
  {
    slug: "reviews",
    label: "Reviews",
    textGroups: [
      { namespace: "Hero", keyPrefix: "reviews", label: "Hero" },
      { namespace: "VideoReviewsSection", label: "Video Reviews (heading)" },
      { namespace: "WrittenReviewsSection", label: "Written Reviews (heading)" },
      { namespace: "CTA", keyPrefix: "reviews", label: "CTA" },
    ],
    sections: [
      { slug: "video-reviews", label: "Video Reviews", model: videoReviewModel },
      { slug: "written-reviews", label: "Written Reviews", model: writtenReviewModel },
    ],
  },
  {
    slug: "videos",
    label: "Videos",
    textGroups: [
      { namespace: "Hero", keyPrefix: "videos", label: "Hero" },
      { namespace: "VideosSection", keyPrefix: "videosPage", label: "Videos (heading)" },
      { namespace: "CTA", keyPrefix: "videos", label: "CTA" },
    ],
    sections: [{ slug: "videos", label: "Videos", model: videoItemModel }],
  },
  {
    slug: "articles",
    label: "Articles",
    textGroups: [
      { namespace: "Hero", keyPrefix: "articles", label: "Hero" },
      { namespace: "FeaturedArticle", label: "Featured Article (heading)" },
      { namespace: "ArticlesGrid", label: "Articles Grid (heading)" },
      { namespace: "CTA", keyPrefix: "articles", label: "CTA" },
    ],
    sections: [{ slug: "articles", label: "Articles", model: articleModel }],
  },
  {
    slug: "contact",
    label: "Contact Us",
    textGroups: [
      { namespace: "Hero", keyPrefix: "contact", label: "Hero" },
      { namespace: "Contact", label: "Contact Section (heading)" },
      { namespace: "ContactForm", label: "Contact Form (labels)" },
    ],
    sections: [
      { slug: "contact", label: "Contact Information", model: contactModel },
      { slug: "working-hours", label: "Working Hours", model: workingHourModel },
    ],
  },
];

export const GLOBAL_TEXT_GROUPS: TextGroup[] = [
  { namespace: "Meta", label: "Site-wide SEO Defaults" },
  { namespace: "Nav", label: "Navigation Labels" },
  { namespace: "Footer", label: "Footer" },
  { namespace: "Video", label: "Video Player Labels" },
  { namespace: "VideoLightbox", label: "Video Popup Labels" },
  { namespace: "DetailModal", label: "Popup Close Button" },
];

export const GLOBAL_MODELS: ModelConfig[] = [doctorModel, contactModel, globalSettingsModel, seoMetaModel];

export function findSection(pageSlug: string, sectionSlug: string): SectionConfig | undefined {
  return PAGES.find((p) => p.slug === pageSlug)?.sections.find((s) => s.slug === sectionSlug);
}

export function findModel(modelName: string): ModelConfig | undefined {
  for (const page of PAGES) {
    for (const section of page.sections) {
      if (section.model.model === modelName) return section.model;
    }
  }
  return GLOBAL_MODELS.find((m) => m.model === modelName);
}
