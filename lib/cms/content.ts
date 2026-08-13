import { cache } from "react";
import { prisma } from "@/lib/prisma";
import * as map from "./mappers";

// ============================================================================
// Messages (next-intl replacement) — ContentField rows are stored as
// (namespace = top-level JSON key, key = dotted path below it, e.g.
// namespace "Hero", key "home.title"). Reconstruct the same nested shape
// messages/en.json and messages/ar.json used to have, so i18n/request.ts can
// hand it to NextIntlClientProvider unchanged.
// ============================================================================
function setPath(obj: Record<string, unknown>, path: string, value: string) {
  const segments = path.split(".");
  let node = obj;
  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i];
    if (typeof node[seg] !== "object" || node[seg] === null) node[seg] = {};
    node = node[seg] as Record<string, unknown>;
  }
  node[segments[segments.length - 1]] = value;
}

export const getMessages = cache(async (locale: string): Promise<Record<string, unknown>> => {
  const rows = await prisma.contentField.findMany();
  const isAr = locale === "ar";
  const messages: Record<string, unknown> = {};
  for (const row of rows) {
    if (typeof messages[row.namespace] !== "object" || messages[row.namespace] === null) {
      messages[row.namespace] = {};
    }
    setPath(messages[row.namespace] as Record<string, unknown>, row.key, isAr ? row.valueAr : row.valueEn);
  }
  return messages;
});

// ============================================================================
// Singletons
// ============================================================================
const getDoctorRow = cache(() => prisma.doctor.findUniqueOrThrow({ where: { id: 1 } }));
export async function getDoctor(locale: string) {
  return map.mapDoctor(await getDoctorRow(), locale);
}

const getContactRow = cache(() =>
  prisma.contact.findUniqueOrThrow({ where: { id: 1 }, include: { workingHours: true } })
);
export async function getContact(locale: string) {
  return map.mapContact(await getContactRow(), locale);
}

const getGlobalSettingsRow = cache(() => prisma.globalSettings.findUniqueOrThrow({ where: { id: 1 } }));
export async function getGlobalSettings(locale: string) {
  return map.mapGlobalSettings(await getGlobalSettingsRow(), locale);
}

const getIntroVideoRow = cache(() => prisma.introVideo.findUniqueOrThrow({ where: { id: 1 } }));
export async function getIntroVideo(locale: string) {
  return map.mapIntroVideo(await getIntroVideoRow(), locale);
}

// ============================================================================
// Collections
// ============================================================================
const getConditionRows = cache(() => prisma.condition.findMany({ orderBy: { order: "asc" } }));
export async function getConditions(locale: string) {
  return (await getConditionRows()).map((r) => map.mapCondition(r, locale));
}

const getTreatmentOptionRows = cache(() => prisma.treatmentOption.findMany({ orderBy: { order: "asc" } }));
export async function getTreatmentOptions(locale: string) {
  return (await getTreatmentOptionRows()).map((r) => map.mapTreatmentOption(r, locale));
}

const getServiceRows = cache(() => prisma.service.findMany({ orderBy: { order: "asc" } }));
export async function getServices(locale: string) {
  return (await getServiceRows()).map((r) => map.mapService(r, locale));
}

const getTreatmentStepRows = cache(() => prisma.treatmentStep.findMany({ orderBy: { order: "asc" } }));
export async function getTreatmentSteps(locale: string) {
  return (await getTreatmentStepRows()).map((r) => map.mapTreatmentStep(r, locale));
}

const getStatRows = cache(() => prisma.stat.findMany({ orderBy: { order: "asc" } }));
export async function getStats(locale: string) {
  return (await getStatRows()).map((r) => map.mapStat(r, locale));
}

const getWhyChoosePointRows = cache(() => prisma.whyChoosePoint.findMany({ orderBy: { order: "asc" } }));
export async function getWhyChooseUs(locale: string) {
  return (await getWhyChoosePointRows()).map((r) => map.mapIconPoint(r, locale));
}

const getTechnologyRows = cache(() => prisma.technology.findMany({ orderBy: { order: "asc" } }));
export async function getTechnologies(locale: string) {
  return (await getTechnologyRows()).map((r) => map.mapIconPoint(r, locale));
}

const getFaqItemRows = cache(() => prisma.faqItem.findMany({ orderBy: { order: "asc" } }));
export async function getFaqItems(locale: string) {
  return (await getFaqItemRows()).map((r) => map.mapFaqItem(r, locale));
}

const getWrittenReviewRows = cache(() => prisma.writtenReview.findMany({ orderBy: { order: "asc" } }));
export async function getWrittenReviews(locale: string) {
  return (await getWrittenReviewRows()).map((r) => map.mapWrittenReview(r, locale));
}
export async function getFeaturedWrittenReviews(locale: string) {
  return (await getWrittenReviewRows())
    .filter((r) => r.isHomeFeatured)
    .map((r) => map.mapWrittenReview(r, locale));
}

const getVideoReviewRows = cache(() => prisma.videoReview.findMany({ orderBy: { order: "asc" } }));
export async function getVideoReviews(locale: string) {
  return (await getVideoReviewRows()).map((r) => map.mapVideoReview(r, locale));
}

const getVideoItemRows = cache(() => prisma.videoItem.findMany({ orderBy: { order: "asc" } }));
export async function getGalleryVideos(locale: string) {
  return (await getVideoItemRows()).map((r) => map.mapVideoItem(r, locale));
}
export async function getHomeVideos(locale: string) {
  return (await getVideoItemRows())
    .filter((r) => r.isHomeFeatured)
    .map((r) => map.mapVideoItem(r, locale));
}

const getArticleRows = cache(() => prisma.article.findMany({ orderBy: { order: "asc" } }));
export async function getArticles(locale: string) {
  return (await getArticleRows()).map((r) => map.mapArticle(r, locale));
}
export async function getFeaturedArticle(locale: string) {
  const featured = (await getArticleRows()).find((r) => r.isFeatured);
  return featured ? map.mapArticle(featured, locale) : undefined;
}
export async function getHomeArticles(locale: string) {
  return (await getArticleRows())
    .filter((r) => r.isHomeFeatured)
    .map((r) => map.mapArticle(r, locale));
}

const getNavItemRows = cache(() => prisma.navItem.findMany({ orderBy: { order: "asc" } }));
export async function getNavItems() {
  return (await getNavItemRows()).map(map.mapNavItem);
}

const getSocialLinkRows = cache(() => prisma.socialLink.findMany({ orderBy: { order: "asc" } }));
export async function getSocialLinks(locale: string) {
  return (await getSocialLinkRows()).map((r) => map.mapSocialLink(r, locale));
}

const getSeoMetaRow = cache((slug: string) => prisma.seoMeta.findUnique({ where: { pageSlug: slug } }));
export async function getSeoMeta(slug: string) {
  return getSeoMetaRow(slug);
}
