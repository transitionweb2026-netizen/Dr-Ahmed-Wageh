import type { TreatmentStep } from "./types";

export const treatmentSteps: TreatmentStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "A detailed conversation about your symptoms, history, and how pain is affecting your daily life.",
  },
  {
    number: "02",
    title: "Diagnostic Assessment",
    description:
      "Clinical examination and, where needed, imaging or referrals to pinpoint the true source of pain.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description:
      "A plan built around your diagnosis, combining the least invasive options that offer real relief.",
  },
  {
    number: "04",
    title: "Active Treatment & Monitoring",
    description:
      "Treatment delivered in stages, with progress tracked and the plan adjusted as you improve.",
  },
  {
    number: "05",
    title: "Long-Term Follow-Up",
    description:
      "Ongoing check-ins and guidance to help maintain relief and prevent pain from returning.",
  },
];
