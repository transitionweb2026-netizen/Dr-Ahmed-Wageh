import {
  CalendarClock,
  MessagesSquare,
  Stethoscope,
  Users2,
  Video,
  Workflow,
} from "lucide-react";
import type { Service } from "./types";

export const services: Service[] = [
  {
    icon: Stethoscope,
    name: "Pain Consultation & Diagnosis",
    description:
      "A thorough first visit to understand your symptoms and reach an accurate, confident diagnosis.",
  },
  {
    icon: Workflow,
    name: "Personalized Treatment Planning",
    description:
      "A step-by-step care plan built around your condition, lifestyle, and treatment goals.",
  },
  {
    icon: Users2,
    name: "Multidisciplinary Coordination",
    description:
      "Coordinated care with physiotherapists and specialists when your condition calls for it.",
  },
  {
    icon: CalendarClock,
    name: "Ongoing Progress Reviews",
    description:
      "Scheduled follow-ups to track improvement and fine-tune your treatment along the way.",
  },
  {
    icon: Video,
    name: "Telehealth Follow-Ups",
    description:
      "Remote consultations for routine check-ins, so ongoing care fits around your schedule.",
  },
  {
    icon: MessagesSquare,
    name: "Patient Education & Support",
    description:
      "Clear explanations of your condition and treatment, so you understand every step of care.",
  },
];
