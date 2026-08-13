/**
 * Initial content migration: reads the site's existing, unmodified data files
 * and message JSON and inserts them as the CMS's starting content, so the
 * live site looks identical the moment the frontend switches to reading from
 * the database. Safe to re-run — collection tables are cleared and
 * recreated from source each time; singleton tables are upserted.
 *
 * Re-running this AFTER content has been edited via /admin will overwrite
 * those edits back to the original site content — that's expected for a
 * migration script, not a general-purpose reset tool.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";
import { nameForIcon } from "../lib/cms/iconRegistry";

import { conditions as conditionsEn } from "../data/conditions";
import { conditions as conditionsAr } from "../data/ar/conditions";
import { treatmentOptions as treatmentsEn } from "../data/treatments";
import { treatmentOptions as treatmentsAr } from "../data/ar/treatments";
import { services as servicesEn } from "../data/services";
import { services as servicesAr } from "../data/ar/services";
import { treatmentSteps as stepsEn } from "../data/treatmentSteps";
import { treatmentSteps as stepsAr } from "../data/ar/treatmentSteps";
import { stats as statsEn } from "../data/stats";
import { stats as statsAr } from "../data/ar/stats";
import { whyChooseUs as whyChooseEn } from "../data/whyChooseUs";
import { whyChooseUs as whyChooseAr } from "../data/ar/whyChooseUs";
import { technologies as technologiesEn } from "../data/technologies";
import { technologies as technologiesAr } from "../data/ar/technologies";
import { faqItems as faqEn } from "../data/faq";
import { faqItems as faqAr } from "../data/ar/faq";
import {
  writtenReviews as writtenReviewsEn,
  featuredWrittenReviews as featuredWrittenReviewsEn,
  videoReviews as videoReviewsEn,
} from "../data/reviews";
import { writtenReviews as writtenReviewsAr, videoReviews as videoReviewsAr } from "../data/ar/reviews";
import {
  introVideo as introVideoEn,
  galleryVideos as galleryVideosEn,
  homeVideos as homeVideosEn,
} from "../data/videos";
import { introVideo as introVideoAr, galleryVideos as galleryVideosAr } from "../data/ar/videos";
import { featuredArticle as featuredArticleEn, articles as articlesEn, homeArticles as homeArticlesEn } from "../data/articles";
import { featuredArticle as featuredArticleAr, articles as articlesAr } from "../data/ar/articles";
import { doctor as doctorEn } from "../data/doctor";
import { doctor as doctorAr } from "../data/ar/doctor";
import { contact as contactEn } from "../data/contact";
import { contact as contactAr } from "../data/ar/contact";
import { mainNav } from "../data/nav";
import { socialLinks } from "../data/social";
import { doctorImages } from "../data/images";

import messagesEn from "../messages/en.json";
import messagesAr from "../messages/ar.json";

const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL });
const prisma = new PrismaClient({ adapter });

const PAGE_SLUGS = ["home", "about", "services", "reviews", "videos", "articles", "contact"] as const;

function zip<A, B>(a: readonly A[], b: readonly B[], label: string): Array<[A, B]> {
  if (a.length !== b.length) {
    throw new Error(`${label}: EN/AR array length mismatch (${a.length} vs ${b.length})`);
  }
  return a.map((item, i) => [item, b[i]]);
}

function flatten(obj: Record<string, unknown>, prefix = ""): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.push([path, v]);
    else if (v && typeof v === "object") out.push(...flatten(v as Record<string, unknown>, path));
  }
  return out;
}

async function seedContentFields() {
  const rows: { namespace: string; key: string; valueEn: string; valueAr: string }[] = [];
  const en = messagesEn as Record<string, Record<string, unknown>>;
  const ar = messagesAr as Record<string, Record<string, unknown>>;

  for (const namespace of Object.keys(en)) {
    const enLeaves = new Map(flatten(en[namespace]));
    const arLeaves = new Map(flatten(ar[namespace] ?? {}));
    for (const [key, valueEn] of enLeaves) {
      const valueAr = arLeaves.get(key);
      if (valueAr === undefined) {
        console.warn(`  ! missing AR translation for ${namespace}.${key} — skipped`);
        continue;
      }
      rows.push({ namespace, key, valueEn, valueAr });
    }
  }

  await prisma.contentField.deleteMany();
  await prisma.contentField.createMany({ data: rows });
  console.log(`  contentField: ${rows.length} rows (${Object.keys(en).length} namespaces)`);
}

async function seedDoctor() {
  await prisma.doctor.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      nameEn: doctorEn.name,
      nameAr: doctorAr.name,
      firstNameEn: doctorEn.firstName,
      firstNameAr: doctorAr.firstName,
      titleEn: doctorEn.title,
      titleAr: doctorAr.title,
      shortIntroEn: doctorEn.shortIntro,
      shortIntroAr: doctorAr.shortIntro,
      bioParagraphsEn: [...doctorEn.bioParagraphs],
      bioParagraphsAr: [...doctorAr.bioParagraphs],
      quoteEn: doctorEn.quote,
      quoteAr: doctorAr.quote,
      credentialsEn: [...doctorEn.credentials],
      credentialsAr: [...doctorAr.credentials],
      portraitUrl: doctorImages.portrait,
      portraitAltEn: doctorEn.portraitAlt,
      portraitAltAr: doctorAr.portraitAlt,
    },
    update: {},
  });
  console.log("  doctor: 1 row");
}

async function seedContact() {
  await prisma.workingHour.deleteMany();
  await prisma.contact.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      phoneDisplay: contactEn.phoneDisplay,
      phoneHref: contactEn.phoneHref,
      whatsappHref: contactEn.whatsappHref,
      email: contactEn.email,
      addressLine1En: contactEn.addressLine1,
      addressLine1Ar: contactAr.addressLine1,
      addressLine2En: contactEn.addressLine2,
      addressLine2Ar: contactAr.addressLine2,
      mapEmbedQuery: contactEn.mapEmbedQuery,
      emergencyNoteEn: contactEn.emergencyNote,
      emergencyNoteAr: contactAr.emergencyNote,
    },
    update: {},
  });
  const hours = zip(contactEn.workingHours, contactAr.workingHours, "contact.workingHours");
  await prisma.workingHour.createMany({
    data: hours.map(([en, ar], order) => ({
      contactId: 1,
      daysEn: en.days,
      daysAr: ar.days,
      hoursEn: en.hours,
      hoursAr: ar.hours,
      order,
    })),
  });
  console.log(`  contact: 1 row + ${hours.length} working hours`);
}

async function seedGlobalSettings() {
  await prisma.globalSettings.upsert({
    where: { id: 1 },
    create: { id: 1 }, // logo/favicon start unset — Logo.tsx keeps its current icon+text default
    update: {},
  });
  console.log("  globalSettings: 1 row (logo unset, keeps current default rendering)");
}

async function seedIntroVideo() {
  await prisma.introVideo.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      titleEn: introVideoEn.title,
      titleAr: introVideoAr.title,
      descriptionEn: introVideoEn.description,
      descriptionAr: introVideoAr.description,
      posterLabelEn: introVideoEn.posterLabel,
      posterLabelAr: introVideoAr.posterLabel,
      posterImageUrl: introVideoEn.posterImage,
      posterImageAltEn: doctorEn.portraitAlt,
      posterImageAltAr: doctorAr.portraitAlt,
      videoUrl: introVideoEn.videoUrl,
    },
    update: {},
  });
  console.log("  introVideo: 1 row");
}

async function seedConditions() {
  await prisma.condition.deleteMany();
  const pairs = zip(conditionsEn, conditionsAr, "conditions");
  await prisma.condition.createMany({
    data: pairs.map(([en, ar], order) => ({
      iconName: nameForIcon(en.icon),
      imageUrl: en.image,
      imageAltEn: en.name,
      imageAltAr: ar.name,
      nameEn: en.name,
      nameAr: ar.name,
      descriptionEn: en.description,
      descriptionAr: ar.description,
      detailedDescriptionEn: en.detailedDescription,
      detailedDescriptionAr: ar.detailedDescription,
      symptomsEn: [...en.symptoms],
      symptomsAr: [...ar.symptoms],
      evaluationEn: en.evaluation,
      evaluationAr: ar.evaluation,
      treatmentApproachEn: en.treatmentApproach,
      treatmentApproachAr: ar.treatmentApproach,
      order,
    })),
  });
  console.log(`  condition: ${pairs.length} rows`);
}

async function seedTreatmentOptions() {
  await prisma.treatmentOption.deleteMany();
  const pairs = zip(treatmentsEn, treatmentsAr, "treatmentOptions");
  await prisma.treatmentOption.createMany({
    data: pairs.map(([en, ar], order) => ({
      iconName: nameForIcon(en.icon),
      imageUrl: en.image,
      imageAltEn: en.name,
      imageAltAr: ar.name,
      nameEn: en.name,
      nameAr: ar.name,
      descriptionEn: en.description,
      descriptionAr: ar.description,
      detailedDescriptionEn: en.detailedDescription,
      detailedDescriptionAr: ar.detailedDescription,
      howItWorksEn: en.howItWorks,
      howItWorksAr: ar.howItWorks,
      benefitsEn: [...en.benefits],
      benefitsAr: [...ar.benefits],
      suitableForEn: en.suitableFor,
      suitableForAr: ar.suitableFor,
      order,
    })),
  });
  console.log(`  treatmentOption: ${pairs.length} rows`);
}

async function seedServices() {
  await prisma.service.deleteMany();
  const pairs = zip(servicesEn, servicesAr, "services");
  await prisma.service.createMany({
    data: pairs.map(([en, ar], order) => ({
      iconName: nameForIcon(en.icon),
      imageUrl: en.image,
      imageAltEn: en.name,
      imageAltAr: ar.name,
      nameEn: en.name,
      nameAr: ar.name,
      descriptionEn: en.description,
      descriptionAr: ar.description,
      detailedDescriptionEn: en.detailedDescription,
      detailedDescriptionAr: ar.detailedDescription,
      highlightsEn: [...en.highlights],
      highlightsAr: [...ar.highlights],
      order,
    })),
  });
  console.log(`  service: ${pairs.length} rows`);
}

async function seedTreatmentSteps() {
  await prisma.treatmentStep.deleteMany();
  const pairs = zip(stepsEn, stepsAr, "treatmentSteps");
  await prisma.treatmentStep.createMany({
    data: pairs.map(([en, ar], order) => ({
      number: en.number,
      titleEn: en.title,
      titleAr: ar.title,
      descriptionEn: en.description,
      descriptionAr: ar.description,
      order,
    })),
  });
  console.log(`  treatmentStep: ${pairs.length} rows`);
}

async function seedStats() {
  await prisma.stat.deleteMany();
  const pairs = zip(statsEn, statsAr, "stats");
  await prisma.stat.createMany({
    data: pairs.map(([en, ar], order) => ({
      iconName: nameForIcon(en.icon),
      value: en.value,
      labelEn: en.label,
      labelAr: ar.label,
      order,
    })),
  });
  console.log(`  stat: ${pairs.length} rows`);
}

async function seedWhyChoosePoints() {
  await prisma.whyChoosePoint.deleteMany();
  const pairs = zip(whyChooseEn, whyChooseAr, "whyChooseUs");
  await prisma.whyChoosePoint.createMany({
    data: pairs.map(([en, ar], order) => ({
      iconName: nameForIcon(en.icon),
      titleEn: en.title,
      titleAr: ar.title,
      descriptionEn: en.description,
      descriptionAr: ar.description,
      order,
    })),
  });
  console.log(`  whyChoosePoint: ${pairs.length} rows`);
}

async function seedTechnologies() {
  await prisma.technology.deleteMany();
  const pairs = zip(technologiesEn, technologiesAr, "technologies");
  await prisma.technology.createMany({
    data: pairs.map(([en, ar], order) => ({
      iconName: nameForIcon(en.icon),
      titleEn: en.title,
      titleAr: ar.title,
      descriptionEn: en.description,
      descriptionAr: ar.description,
      order,
    })),
  });
  console.log(`  technology: ${pairs.length} rows`);
}

async function seedFaqItems() {
  await prisma.faqItem.deleteMany();
  const pairs = zip(faqEn, faqAr, "faq");
  await prisma.faqItem.createMany({
    data: pairs.map(([en, ar], order) => ({
      questionEn: en.question,
      questionAr: ar.question,
      answerEn: en.answer,
      answerAr: ar.answer,
      order,
    })),
  });
  console.log(`  faqItem: ${pairs.length} rows`);
}

async function seedWrittenReviews() {
  await prisma.writtenReview.deleteMany();
  const pairs = zip(writtenReviewsEn, writtenReviewsAr, "writtenReviews");
  const homeFeaturedIds = new Set(featuredWrittenReviewsEn.map((r) => r.id));
  await prisma.writtenReview.createMany({
    data: pairs.map(([en, ar], order) => ({
      nameEn: en.name,
      nameAr: ar.name,
      locationEn: en.location ?? null,
      locationAr: ar.location ?? null,
      rating: en.rating,
      textEn: en.text,
      textAr: ar.text,
      date: new Date(en.date),
      avatarUrl: en.avatar,
      isHomeFeatured: homeFeaturedIds.has(en.id),
      order,
    })),
  });
  console.log(`  writtenReview: ${pairs.length} rows (${homeFeaturedIds.size} home-featured)`);
}

async function seedVideoReviews() {
  await prisma.videoReview.deleteMany();
  const pairs = zip(videoReviewsEn, videoReviewsAr, "videoReviews");
  await prisma.videoReview.createMany({
    data: pairs.map(([en, ar], order) => ({
      titleEn: en.title,
      titleAr: ar.title,
      posterLabelEn: en.posterLabel,
      posterLabelAr: ar.posterLabel,
      posterImageUrl: en.posterImage,
      posterImageAltEn: en.title,
      posterImageAltAr: ar.title,
      videoUrl: en.videoUrl,
      order,
    })),
  });
  console.log(`  videoReview: ${pairs.length} rows`);
}

async function seedVideoItems() {
  await prisma.videoItem.deleteMany();
  const pairs = zip(galleryVideosEn, galleryVideosAr, "galleryVideos");
  const homeFeaturedIds = new Set(homeVideosEn.map((v) => v.id));
  await prisma.videoItem.createMany({
    data: pairs.map(([en, ar], order) => ({
      titleEn: en.title,
      titleAr: ar.title,
      descriptionEn: en.description ?? null,
      descriptionAr: ar.description ?? null,
      posterLabelEn: en.posterLabel,
      posterLabelAr: ar.posterLabel,
      posterImageUrl: en.posterImage,
      posterImageAltEn: en.title,
      posterImageAltAr: ar.title,
      videoUrl: en.videoUrl,
      isHomeFeatured: homeFeaturedIds.has(en.id),
      order,
    })),
  });
  console.log(`  videoItem: ${pairs.length} rows (${homeFeaturedIds.size} home-featured)`);
}

async function seedArticles() {
  await prisma.article.deleteMany();
  const featuredPair: [typeof featuredArticleEn, typeof featuredArticleAr] = [featuredArticleEn, featuredArticleAr];
  const pairs = zip(articlesEn, articlesAr, "articles");
  const homeFeaturedSlugs = new Set(homeArticlesEn.map((a) => a.slug));

  const rows = [
    {
      slug: featuredPair[0].slug,
      titleEn: featuredPair[0].title,
      titleAr: featuredPair[1].title,
      excerptEn: featuredPair[0].excerpt,
      excerptAr: featuredPair[1].excerpt,
      date: new Date(featuredPair[0].date),
      readTimeEn: featuredPair[0].readTime,
      readTimeAr: featuredPair[1].readTime,
      categoryEn: featuredPair[0].category,
      categoryAr: featuredPair[1].category,
      imageUrl: featuredPair[0].image,
      imageAltEn: featuredPair[0].title,
      imageAltAr: featuredPair[1].title,
      isFeatured: true,
      isHomeFeatured: false,
      order: -1,
    },
    ...pairs.map(([en, ar], order) => ({
      slug: en.slug,
      titleEn: en.title,
      titleAr: ar.title,
      excerptEn: en.excerpt,
      excerptAr: ar.excerpt,
      date: new Date(en.date),
      readTimeEn: en.readTime,
      readTimeAr: ar.readTime,
      categoryEn: en.category,
      categoryAr: ar.category,
      imageUrl: en.image,
      imageAltEn: en.title,
      imageAltAr: ar.title,
      isFeatured: false,
      isHomeFeatured: homeFeaturedSlugs.has(en.slug),
      order,
    })),
  ];
  await prisma.article.createMany({ data: rows });
  console.log(`  article: ${rows.length} rows (1 featured, ${homeFeaturedSlugs.size} home-featured)`);
}

async function seedNavItems() {
  await prisma.navItem.deleteMany();
  await prisma.navItem.createMany({
    data: mainNav.map((item, order) => ({ key: item.key, href: item.href, order })),
  });
  console.log(`  navItem: ${mainNav.length} rows`);
}

async function seedSocialLinks() {
  await prisma.socialLink.deleteMany();
  await prisma.socialLink.createMany({
    data: socialLinks.map((link, order) => ({
      platform: link.platform,
      labelEn: link.label,
      labelAr: link.label, // platform names (Facebook, Instagram...) are identical in AR usage today
      href: link.href,
      order,
    })),
  });
  console.log(`  socialLink: ${socialLinks.length} rows`);
}

async function seedSeoMeta() {
  await prisma.seoMeta.deleteMany();
  await prisma.seoMeta.createMany({
    data: PAGE_SLUGS.map((pageSlug) => ({ pageSlug })),
  });
  console.log(`  seoMeta: ${PAGE_SLUGS.length} rows (title/description come from ContentField["Meta"], og image unset)`);
}

async function main() {
  console.log("Seeding CMS database from current site content...\n");
  await seedContentFields();
  await seedDoctor();
  await seedContact();
  await seedGlobalSettings();
  await seedIntroVideo();
  await seedConditions();
  await seedTreatmentOptions();
  await seedServices();
  await seedTreatmentSteps();
  await seedStats();
  await seedWhyChoosePoints();
  await seedTechnologies();
  await seedFaqItems();
  await seedWrittenReviews();
  await seedVideoReviews();
  await seedVideoItems();
  await seedArticles();
  await seedNavItems();
  await seedSocialLinks();
  await seedSeoMeta();
  console.log("\nDone.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
