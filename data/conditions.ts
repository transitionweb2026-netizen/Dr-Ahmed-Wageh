import {
  Activity,
  Bone,
  Brain,
  Footprints,
  Radiation,
  Zap,
} from "lucide-react";
import type { Condition } from "./types";

export const conditions: Condition[] = [
  {
    icon: Activity,
    name: "Chronic Back Pain",
    description:
      "Long-standing lower and upper back pain assessed and treated with a structured, evidence-based plan.",
  },
  {
    icon: Zap,
    name: "Neck & Cervical Pain",
    description:
      "Stiffness, nerve irritation, and postural strain in the neck addressed with targeted care.",
  },
  {
    icon: Radiation,
    name: "Sciatica & Nerve Pain",
    description:
      "Radiating leg pain and nerve-related discomfort managed through precise, guided treatment.",
  },
  {
    icon: Bone,
    name: "Joint & Arthritis Pain",
    description:
      "Knee, hip, and shoulder joint pain, including arthritis-related discomfort and stiffness.",
  },
  {
    icon: Brain,
    name: "Migraine & Headache Disorders",
    description:
      "Recurring headache and migraine patterns evaluated with a whole-person diagnostic approach.",
  },
  {
    icon: Footprints,
    name: "Sports & Activity Injuries",
    description:
      "Strains, overuse injuries, and post-activity pain treated to restore safe, confident movement.",
  },
];
