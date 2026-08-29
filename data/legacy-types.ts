import type { LucideIcon } from "lucide-react";

// Types for the retired data/*.ts and data/ar/*.ts source files, used only
// by prisma/seed.ts to migrate legacy content into columns that the CMS
// still writes/reads (Condition.evaluation, TreatmentOption.howItWorks,
// etc.) but that data/types.ts — the live frontend contract — no longer
// exposes, since their modal sections were removed from the UI. The
// underlying DB columns are untouched; only these two files still need the
// full legacy shape, so it's kept here rather than reintroduced into
// data/types.ts and its ~15 other importers.

export interface LegacyCondition {
  icon: LucideIcon;
  image: string;
  name: string;
  description: string;
  detailedDescription: string;
  symptoms: string[];
  evaluation: string;
  treatmentApproach: string;
}

export interface LegacyTreatmentOption {
  icon: LucideIcon;
  image: string;
  name: string;
  description: string;
  detailedDescription: string;
  howItWorks: string;
  benefits: string[];
  suitableFor: string;
}

export interface LegacyService {
  icon: LucideIcon;
  image: string;
  name: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
}
