import {
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Microscope,
  Syringe,
  Waves,
} from "lucide-react";
import type { TreatmentOption } from "./types";

export const treatmentOptions: TreatmentOption[] = [
  {
    icon: Syringe,
    name: "Interventional Pain Procedures",
    description:
      "Precise, image-guided injections that target the exact source of pain with minimal downtime.",
  },
  {
    icon: Waves,
    name: "Ultrasound-Guided Therapy",
    description:
      "Real-time imaging used to deliver treatment accurately to muscles, joints, and soft tissue.",
  },
  {
    icon: Dumbbell,
    name: "Physical Rehabilitation Programs",
    description:
      "Structured movement and strengthening plans that support lasting recovery, not just relief.",
  },
  {
    icon: HeartPulse,
    name: "Regenerative Treatment Options",
    description:
      "Modern, evidence-based approaches designed to support the body's own healing response.",
  },
  {
    icon: Microscope,
    name: "Advanced Diagnostic Workups",
    description:
      "Thorough evaluation using clinical assessment and imaging referrals to confirm the diagnosis.",
  },
  {
    icon: ClipboardList,
    name: "Chronic Pain Management Plans",
    description:
      "Long-term care plans for complex or persistent pain, reviewed and adjusted over time.",
  },
];
