import { doctor as doctorEn } from "@/data/doctor";
import { doctor as doctorAr } from "@/data/ar/doctor";
import { services as servicesEn } from "@/data/services";
import { services as servicesAr } from "@/data/ar/services";
import { conditions as conditionsEn } from "@/data/conditions";
import { conditions as conditionsAr } from "@/data/ar/conditions";
import { treatmentOptions as treatmentOptionsEn } from "@/data/treatments";
import { treatmentOptions as treatmentOptionsAr } from "@/data/ar/treatments";
import { treatmentSteps as treatmentStepsEn } from "@/data/treatmentSteps";
import { treatmentSteps as treatmentStepsAr } from "@/data/ar/treatmentSteps";
import { stats as statsEn } from "@/data/stats";
import { stats as statsAr } from "@/data/ar/stats";
import { whyChooseUs as whyChooseUsEn } from "@/data/whyChooseUs";
import { whyChooseUs as whyChooseUsAr } from "@/data/ar/whyChooseUs";
import { technologies as technologiesEn } from "@/data/technologies";
import { technologies as technologiesAr } from "@/data/ar/technologies";
import { faqItems as faqItemsEn } from "@/data/faq";
import { faqItems as faqItemsAr } from "@/data/ar/faq";
import { contact as contactEn } from "@/data/contact";
import { contact as contactAr } from "@/data/ar/contact";
import {
  writtenReviews as writtenReviewsEn,
  featuredWrittenReviews as featuredWrittenReviewsEn,
  videoReviews as videoReviewsEn,
} from "@/data/reviews";
import {
  writtenReviews as writtenReviewsAr,
  featuredWrittenReviews as featuredWrittenReviewsAr,
  videoReviews as videoReviewsAr,
} from "@/data/ar/reviews";
import {
  introVideo as introVideoEn,
  galleryVideos as galleryVideosEn,
  homeVideos as homeVideosEn,
} from "@/data/videos";
import {
  introVideo as introVideoAr,
  galleryVideos as galleryVideosAr,
  homeVideos as homeVideosAr,
} from "@/data/ar/videos";
import {
  featuredArticle as featuredArticleEn,
  articles as articlesEn,
  homeArticles as homeArticlesEn,
} from "@/data/articles";
import {
  featuredArticle as featuredArticleAr,
  articles as articlesAr,
  homeArticles as homeArticlesAr,
} from "@/data/ar/articles";

type Locale = string;
const isAr = (locale: Locale) => locale === "ar";

export const getDoctor = (locale: Locale) => (isAr(locale) ? doctorAr : doctorEn);
export const getServices = (locale: Locale) => (isAr(locale) ? servicesAr : servicesEn);
export const getConditions = (locale: Locale) => (isAr(locale) ? conditionsAr : conditionsEn);
export const getTreatmentOptions = (locale: Locale) =>
  isAr(locale) ? treatmentOptionsAr : treatmentOptionsEn;
export const getTreatmentSteps = (locale: Locale) =>
  isAr(locale) ? treatmentStepsAr : treatmentStepsEn;
export const getStats = (locale: Locale) => (isAr(locale) ? statsAr : statsEn);
export const getWhyChooseUs = (locale: Locale) => (isAr(locale) ? whyChooseUsAr : whyChooseUsEn);
export const getTechnologies = (locale: Locale) => (isAr(locale) ? technologiesAr : technologiesEn);
export const getFaqItems = (locale: Locale) => (isAr(locale) ? faqItemsAr : faqItemsEn);
export const getContact = (locale: Locale) => (isAr(locale) ? contactAr : contactEn);

export const getWrittenReviews = (locale: Locale) =>
  isAr(locale) ? writtenReviewsAr : writtenReviewsEn;
export const getFeaturedWrittenReviews = (locale: Locale) =>
  isAr(locale) ? featuredWrittenReviewsAr : featuredWrittenReviewsEn;
export const getVideoReviews = (locale: Locale) =>
  isAr(locale) ? videoReviewsAr : videoReviewsEn;

export const getIntroVideo = (locale: Locale) => (isAr(locale) ? introVideoAr : introVideoEn);
export const getGalleryVideos = (locale: Locale) =>
  isAr(locale) ? galleryVideosAr : galleryVideosEn;
export const getHomeVideos = (locale: Locale) => (isAr(locale) ? homeVideosAr : homeVideosEn);

export const getFeaturedArticle = (locale: Locale) =>
  isAr(locale) ? featuredArticleAr : featuredArticleEn;
export const getArticles = (locale: Locale) => (isAr(locale) ? articlesAr : articlesEn);
export const getHomeArticles = (locale: Locale) => (isAr(locale) ? homeArticlesAr : homeArticlesEn);
