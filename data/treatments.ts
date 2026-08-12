import {
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Microscope,
  Syringe,
  Waves,
} from "lucide-react";
import { treatmentImages } from "./images";
import type { TreatmentOption } from "./types";

export const treatmentOptions: TreatmentOption[] = [
  {
    icon: Syringe,
    image: treatmentImages.interventional,
    name: "Interventional Pain Procedures",
    description:
      "Precise, image-guided injections that target the exact source of pain with minimal downtime.",
    detailedDescription:
      "Interventional procedures deliver medication directly to the exact structure causing pain — a joint, nerve, or disc — using imaging guidance for accuracy and safety, performed as a short outpatient visit.",
    howItWorks:
      "Using real-time imaging guidance, a fine needle is directed precisely to the target area to deliver anti-inflammatory or pain-relieving medication, avoiding the guesswork of a blind injection.",
    benefits: [
      "Targets the exact source of pain rather than masking it broadly",
      "Minimal downtime, with most patients resuming light activity the same day",
      "Can reduce or delay the need for more invasive procedures",
      "Often provides both diagnostic and therapeutic information",
    ],
    suitableFor:
      "Patients with a clearly localized pain source — such as a specific joint, nerve, or disc — who haven't found lasting relief from conservative treatment alone.",
  },
  {
    icon: Waves,
    image: treatmentImages.ultrasound,
    name: "Ultrasound-Guided Therapy",
    description:
      "Real-time imaging used to deliver treatment accurately to muscles, joints, and soft tissue.",
    detailedDescription:
      "Ultrasound guidance lets Dr. Wagih see muscles, tendons, and joints in real time while delivering treatment, improving both accuracy and comfort compared to landmark-based techniques.",
    howItWorks:
      "A handheld ultrasound probe visualizes the target tissue on screen, allowing needle or treatment placement to be guided live and adjusted immediately for precision.",
    benefits: [
      "Improved accuracy for soft-tissue and small-joint targets",
      "No radiation exposure, unlike some other imaging methods",
      "Immediate visual confirmation of correct treatment placement",
      "Well suited for both diagnosis and guided treatment in the same visit",
    ],
    suitableFor:
      "Patients with muscle, tendon, or joint conditions where precise, real-time visualization improves the accuracy and safety of treatment.",
  },
  {
    icon: Dumbbell,
    image: treatmentImages.rehabilitation,
    name: "Physical Rehabilitation Programs",
    description:
      "Structured movement and strengthening plans that support lasting recovery, not just relief.",
    detailedDescription:
      "Rehabilitation programs are built around your specific diagnosis and goals, progressing through carefully staged exercises so recovery is lasting rather than temporary.",
    howItWorks:
      "A personalized plan combines guided exercise, manual therapy, and progressive strengthening, adjusted at each stage based on your response and functional progress.",
    benefits: [
      "Builds lasting strength and mobility, not just short-term relief",
      "Reduces the likelihood of the same injury or pain returning",
      "Improves overall function for daily activity and sport",
      "Complements other treatments as part of a complete recovery plan",
    ],
    suitableFor:
      "Patients recovering from injury, surgery, or chronic pain who need a structured path back to full, confident movement.",
  },
  {
    icon: HeartPulse,
    image: treatmentImages.regenerative,
    name: "Regenerative Treatment Options",
    description:
      "Modern, evidence-based approaches designed to support the body's own healing response.",
    detailedDescription:
      "Regenerative approaches are designed to support and stimulate the body's own natural repair processes, offered as part of a broader plan rather than as a stand-alone quick fix.",
    howItWorks:
      "Treatment is delivered directly to the affected tissue using image guidance, aiming to support the local healing environment alongside rehabilitation and activity modification.",
    benefits: [
      "Works with the body's natural healing response",
      "Can be combined with rehabilitation for a more complete recovery",
      "Minimally invasive, with a short outpatient recovery time",
      "An evidence-based option for select chronic or slow-healing conditions",
    ],
    suitableFor:
      "Patients with certain chronic tendon, joint, or soft-tissue conditions who have discussed candidacy and expectations with Dr. Wagih directly.",
  },
  {
    icon: Microscope,
    image: treatmentImages.diagnostics,
    name: "Advanced Diagnostic Workups",
    description:
      "Thorough evaluation using clinical assessment and imaging referrals to confirm the diagnosis.",
    detailedDescription:
      "An accurate diagnosis is the foundation of every treatment plan. Advanced workups combine detailed clinical assessment with the right imaging or referral studies to confirm exactly what's causing the pain.",
    howItWorks:
      "Dr. Wagih starts with a focused clinical examination, then selects the imaging or specialist referrals most relevant to the suspected diagnosis — avoiding unnecessary testing while ensuring nothing important is missed.",
    benefits: [
      "Confirms the true source of pain before treatment begins",
      "Avoids trial-and-error approaches to care",
      "Identifies cases that need specialist input early",
      "Forms clear, measurable goals for the treatment plan",
    ],
    suitableFor:
      "Patients with an unclear diagnosis, pain that hasn't responded to prior treatment, or symptoms that warrant a more thorough evaluation.",
  },
  {
    icon: ClipboardList,
    image: treatmentImages["pain-management-plans"],
    name: "Chronic Pain Management Plans",
    description:
      "Long-term care plans for complex or persistent pain, reviewed and adjusted over time.",
    detailedDescription:
      "Chronic or complex pain is rarely solved by a single treatment. These plans bring together diagnosis, treatment, and follow-up into one coordinated, long-term approach.",
    howItWorks:
      "A comprehensive plan is built around your diagnosis and goals, combining the appropriate mix of interventional care, rehabilitation, and lifestyle guidance, with scheduled reviews to adjust as your condition changes.",
    benefits: [
      "One coordinated plan instead of fragmented, one-off treatments",
      "Regular follow-up to track progress and adjust care",
      "Addresses both the physical and functional impact of chronic pain",
      "Sets realistic, measurable long-term goals",
    ],
    suitableFor:
      "Patients living with long-standing or complex pain who need an ongoing, structured plan rather than a single isolated treatment.",
  },
];
