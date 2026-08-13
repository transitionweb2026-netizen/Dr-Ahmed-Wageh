import { resolveIcon } from "./iconRegistry";
import type {
  Article,
  Condition,
  Contact,
  FaqItem,
  IconPoint,
  NavItem,
  Service,
  SocialLink,
  Stat,
  TreatmentOption,
  TreatmentStep,
  VideoItem,
  VideoReview,
  WrittenReview,
} from "@/data/types";
import type * as Prisma from "@/lib/generated/prisma/models";

const isAr = (locale: string) => locale === "ar";

function fmtDate(date: Date): string {
  // Stored as @db.Date (UTC midnight) — matches the "YYYY-MM-DD" strings the
  // original data files used.
  return date.toISOString().slice(0, 10);
}

export function mapDoctor(row: Prisma.DoctorModel, locale: string) {
  const ar = isAr(locale);
  return {
    name: ar ? row.nameAr : row.nameEn,
    firstName: ar ? row.firstNameAr : row.firstNameEn,
    title: ar ? row.titleAr : row.titleEn,
    shortIntro: ar ? row.shortIntroAr : row.shortIntroEn,
    bioParagraphs: ar ? row.bioParagraphsAr : row.bioParagraphsEn,
    quote: ar ? row.quoteAr : row.quoteEn,
    credentials: ar ? row.credentialsAr : row.credentialsEn,
    portraitUrl: row.portraitUrl,
    portraitAlt: ar ? row.portraitAltAr : row.portraitAltEn,
  };
}

export function mapContact(
  row: Prisma.ContactModel & { workingHours: Prisma.WorkingHourModel[] },
  locale: string
): Contact {
  const ar = isAr(locale);
  return {
    phoneDisplay: row.phoneDisplay,
    phoneHref: row.phoneHref,
    whatsappHref: row.whatsappHref,
    email: row.email,
    addressLine1: ar ? row.addressLine1Ar : row.addressLine1En,
    addressLine2: ar ? row.addressLine2Ar : row.addressLine2En,
    mapEmbedQuery: row.mapEmbedQuery,
    emergencyNote: ar ? row.emergencyNoteAr : row.emergencyNoteEn,
    workingHours: [...row.workingHours]
      .sort((a, b) => a.order - b.order)
      .map((h) => ({ days: ar ? h.daysAr : h.daysEn, hours: ar ? h.hoursAr : h.hoursEn })),
  };
}

export function mapGlobalSettings(row: Prisma.GlobalSettingsModel, locale: string) {
  const ar = isAr(locale);
  return {
    logoUrl: row.logoUrl,
    logoAlt: (ar ? row.logoAltAr : row.logoAltEn) ?? "",
    faviconUrl: row.faviconUrl,
  };
}

export function mapIntroVideo(row: Prisma.IntroVideoModel, locale: string) {
  const ar = isAr(locale);
  return {
    title: ar ? row.titleAr : row.titleEn,
    description: ar ? row.descriptionAr : row.descriptionEn,
    posterLabel: ar ? row.posterLabelAr : row.posterLabelEn,
    posterImage: row.posterImageUrl,
    videoUrl: row.videoUrl,
  };
}

export function mapCondition(row: Prisma.ConditionModel, locale: string): Condition {
  const ar = isAr(locale);
  return {
    icon: resolveIcon(row.iconName),
    image: row.imageUrl,
    name: ar ? row.nameAr : row.nameEn,
    description: ar ? row.descriptionAr : row.descriptionEn,
    detailedDescription: ar ? row.detailedDescriptionAr : row.detailedDescriptionEn,
    symptoms: ar ? row.symptomsAr : row.symptomsEn,
    evaluation: ar ? row.evaluationAr : row.evaluationEn,
    treatmentApproach: ar ? row.treatmentApproachAr : row.treatmentApproachEn,
  };
}

export function mapTreatmentOption(row: Prisma.TreatmentOptionModel, locale: string): TreatmentOption {
  const ar = isAr(locale);
  return {
    icon: resolveIcon(row.iconName),
    image: row.imageUrl,
    name: ar ? row.nameAr : row.nameEn,
    description: ar ? row.descriptionAr : row.descriptionEn,
    detailedDescription: ar ? row.detailedDescriptionAr : row.detailedDescriptionEn,
    howItWorks: ar ? row.howItWorksAr : row.howItWorksEn,
    benefits: ar ? row.benefitsAr : row.benefitsEn,
    suitableFor: ar ? row.suitableForAr : row.suitableForEn,
  };
}

export function mapService(row: Prisma.ServiceModel, locale: string): Service {
  const ar = isAr(locale);
  return {
    icon: resolveIcon(row.iconName),
    image: row.imageUrl,
    name: ar ? row.nameAr : row.nameEn,
    description: ar ? row.descriptionAr : row.descriptionEn,
    detailedDescription: ar ? row.detailedDescriptionAr : row.detailedDescriptionEn,
    highlights: ar ? row.highlightsAr : row.highlightsEn,
  };
}

export function mapTreatmentStep(row: Prisma.TreatmentStepModel, locale: string): TreatmentStep {
  const ar = isAr(locale);
  return {
    number: row.number,
    title: ar ? row.titleAr : row.titleEn,
    description: ar ? row.descriptionAr : row.descriptionEn,
  };
}

export function mapStat(row: Prisma.StatModel, locale: string): Stat {
  const ar = isAr(locale);
  return {
    icon: resolveIcon(row.iconName),
    value: row.value,
    label: ar ? row.labelAr : row.labelEn,
  };
}

export function mapIconPoint(row: Prisma.WhyChoosePointModel | Prisma.TechnologyModel, locale: string): IconPoint {
  const ar = isAr(locale);
  return {
    icon: resolveIcon(row.iconName),
    title: ar ? row.titleAr : row.titleEn,
    description: ar ? row.descriptionAr : row.descriptionEn,
  };
}

export function mapWrittenReview(row: Prisma.WrittenReviewModel, locale: string): WrittenReview {
  const ar = isAr(locale);
  return {
    id: row.id,
    name: ar ? row.nameAr : row.nameEn,
    location: (ar ? row.locationAr : row.locationEn) ?? undefined,
    rating: row.rating,
    text: ar ? row.textAr : row.textEn,
    date: fmtDate(row.date),
    avatar: row.avatarUrl,
  };
}

export function mapVideoReview(row: Prisma.VideoReviewModel, locale: string): VideoReview {
  const ar = isAr(locale);
  return {
    id: row.id,
    title: ar ? row.titleAr : row.titleEn,
    posterLabel: ar ? row.posterLabelAr : row.posterLabelEn,
    posterImage: row.posterImageUrl,
    videoUrl: row.videoUrl,
  };
}

export function mapVideoItem(row: Prisma.VideoItemModel, locale: string): VideoItem {
  const ar = isAr(locale);
  return {
    id: row.id,
    title: ar ? row.titleAr : row.titleEn,
    description: (ar ? row.descriptionAr : row.descriptionEn) ?? undefined,
    posterLabel: ar ? row.posterLabelAr : row.posterLabelEn,
    posterImage: row.posterImageUrl,
    videoUrl: row.videoUrl,
  };
}

export function mapArticle(row: Prisma.ArticleModel, locale: string): Article {
  const ar = isAr(locale);
  return {
    slug: row.slug,
    title: ar ? row.titleAr : row.titleEn,
    excerpt: ar ? row.excerptAr : row.excerptEn,
    date: fmtDate(row.date),
    readTime: ar ? row.readTimeAr : row.readTimeEn,
    category: ar ? row.categoryAr : row.categoryEn,
    image: row.imageUrl,
  };
}

export function mapFaqItem(row: Prisma.FaqItemModel, locale: string): FaqItem {
  const ar = isAr(locale);
  return {
    question: ar ? row.questionAr : row.questionEn,
    answer: ar ? row.answerAr : row.answerEn,
  };
}

export function mapNavItem(row: Prisma.NavItemModel): NavItem {
  return { key: row.key as NavItem["key"], href: row.href };
}

export function mapSocialLink(row: Prisma.SocialLinkModel, locale: string): SocialLink {
  const ar = isAr(locale);
  return {
    platform: row.platform as SocialLink["platform"],
    label: ar ? row.labelAr : row.labelEn,
    href: row.href,
  };
}
