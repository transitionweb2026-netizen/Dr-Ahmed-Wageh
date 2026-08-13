import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: "main" | "about" | "services" | "reviews" | "videos" | "articles" | "contact";
  href: string;
}

export interface IconPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Condition {
  icon: LucideIcon;
  image: string;
  name: string;
  description: string;
  detailedDescription: string;
  symptoms: string[];
  evaluation: string;
  treatmentApproach: string;
}

export interface TreatmentStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface TreatmentOption {
  icon: LucideIcon;
  image: string;
  name: string;
  description: string;
  detailedDescription: string;
  howItWorks: string;
  benefits: string[];
  suitableFor: string;
}

export interface Service {
  icon: LucideIcon;
  image: string;
  name: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
}

export interface WrittenReview {
  id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface VideoReview {
  id: string;
  title: string;
  posterLabel: string;
  posterImage: string;
  videoUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  posterLabel: string;
  posterImage: string;
  videoUrl: string;
}

export interface IntroVideo {
  title: string;
  description: string;
  posterLabel: string;
  posterImage: string;
  videoUrl: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Contact {
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  mapEmbedQuery: string;
  emergencyNote: string;
  workingHours: { days: string; hours: string }[];
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "tiktok" | "youtube" | "whatsapp";
  label: string;
  href: string;
}
