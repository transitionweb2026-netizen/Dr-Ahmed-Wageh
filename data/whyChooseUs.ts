import {
  BadgeCheck,
  HeartHandshake,
  Microscope,
  Target,
  TimerReset,
  UserCheck,
} from "lucide-react";
import type { IconPoint } from "./types";

export const whyChooseUs: IconPoint[] = [
  {
    icon: Target,
    title: "Precise, Evidence-Based Diagnosis",
    description:
      "Every treatment plan starts with a clear understanding of the true source of your pain.",
  },
  {
    icon: UserCheck,
    title: "Personalized Care Plans",
    description:
      "No generic protocols — your plan is built around your body, history, and goals.",
  },
  {
    icon: Microscope,
    title: "Modern Diagnostic Technology",
    description:
      "Access to up-to-date diagnostic tools that support faster, more accurate decisions.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Approach",
    description:
      "You're treated as a partner in your care, with time to ask questions and understand options.",
  },
  {
    icon: BadgeCheck,
    title: "Minimally Invasive First",
    description:
      "Conservative and minimally invasive options are always explored before more invasive steps.",
  },
  {
    icon: TimerReset,
    title: "Committed Long-Term Follow-Up",
    description:
      "Care doesn't stop at relief — ongoing follow-up helps keep your progress on track.",
  },
];
