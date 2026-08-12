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
  name: string;
  description: string;
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
  name: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
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

export interface SocialLink {
  platform: "facebook" | "instagram" | "tiktok" | "youtube" | "whatsapp";
  label: string;
  href: string;
}
