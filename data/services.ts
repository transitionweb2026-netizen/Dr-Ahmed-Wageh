import {
  CalendarClock,
  MessagesSquare,
  Stethoscope,
  Users2,
  Video,
  Workflow,
} from "lucide-react";
import { serviceImages } from "./images";
import type { Service } from "./types";

export const services: Service[] = [
  {
    icon: Stethoscope,
    image: serviceImages.consultation,
    name: "Pain Consultation & Diagnosis",
    description:
      "A thorough first visit to understand your symptoms and reach an accurate, confident diagnosis.",
    detailedDescription:
      "Your first visit is about listening and understanding, not rushing to a generic answer. Dr. Wagih reviews your history, symptoms, and any prior tests to build a clear, accurate picture of what's causing your pain.",
    highlights: [
      "In-depth review of your symptoms and medical history",
      "Physical examination focused on the source of your pain",
      "Clear explanation of the likely diagnosis and next steps",
      "Imaging referrals arranged when needed to confirm findings",
    ],
  },
  {
    icon: Workflow,
    image: serviceImages.planning,
    name: "Personalized Treatment Planning",
    description:
      "A step-by-step care plan built around your condition, lifestyle, and treatment goals.",
    detailedDescription:
      "No two patients receive the same generic protocol. Your treatment plan is built specifically around your diagnosis, daily life, and what you want to achieve — whether that's returning to sport or simply moving without pain.",
    highlights: [
      "A staged plan matched to your specific diagnosis",
      "Realistic, measurable goals set from the start",
      "A mix of treatments chosen together with you",
      "The plan adjusts as your condition improves",
    ],
  },
  {
    icon: Users2,
    image: serviceImages.coordination,
    name: "Multidisciplinary Coordination",
    description:
      "Coordinated care with physiotherapists and specialists when your condition calls for it.",
    detailedDescription:
      "Complex cases often benefit from more than one type of expertise. Dr. Wagih coordinates directly with physiotherapists and other specialists so your care stays connected, not scattered across separate appointments.",
    highlights: [
      "Direct coordination with physiotherapy and rehab teams",
      "Specialist referrals arranged when your case needs them",
      "One consistent treatment plan across every provider",
      "Fewer repeated tests and explanations between visits",
    ],
  },
  {
    icon: CalendarClock,
    image: serviceImages.progressReviews,
    name: "Ongoing Progress Reviews",
    description:
      "Scheduled follow-ups to track improvement and fine-tune your treatment along the way.",
    detailedDescription:
      "Recovery isn't a single event — it's tracked and adjusted over time. Scheduled reviews let Dr. Wagih confirm your progress is on track and fine-tune the plan the moment something needs to change.",
    highlights: [
      "Follow-up visits scheduled at the right intervals for you",
      "Objective tracking of pain, movement, and function",
      "Treatment adjustments based on your actual progress",
      "A clear sense of how close you are to your goals",
    ],
  },
  {
    icon: Video,
    image: serviceImages.telehealth,
    name: "Telehealth Follow-Ups",
    description:
      "Remote consultations for routine check-ins, so ongoing care fits around your schedule.",
    detailedDescription:
      "Not every follow-up requires a clinic visit. Routine check-ins can be done remotely by video, keeping your care on track without disrupting your work or travel schedule.",
    highlights: [
      "Secure video consultations for routine follow-ups",
      "Ideal for reviewing progress between in-person visits",
      "Saves travel time for patients outside Cairo",
      "Same attentive care as an in-clinic appointment",
    ],
  },
  {
    icon: MessagesSquare,
    image: serviceImages.education,
    name: "Patient Education & Support",
    description:
      "Clear explanations of your condition and treatment, so you understand every step of care.",
    detailedDescription:
      "Understanding your condition is part of the treatment itself. Dr. Wagih takes the time to explain what's happening in your body and why each step of the plan matters, so you feel informed, not just treated.",
    highlights: [
      "Plain-language explanations of your diagnosis",
      "Time set aside to answer your questions directly",
      "Practical guidance for managing symptoms day to day",
      "Ongoing support between visits when you need it",
    ],
  },
];
