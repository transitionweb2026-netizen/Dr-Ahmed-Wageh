import {
  Activity,
  Bone,
  Brain,
  Footprints,
  Radiation,
  Zap,
} from "lucide-react";
import { conditionImages } from "./images";
import type { LegacyCondition as Condition } from "./legacy-types";

export const conditions: Condition[] = [
  {
    icon: Activity,
    image: conditionImages["back-pain"],
    name: "Chronic Back Pain",
    description:
      "Long-standing lower and upper back pain assessed and treated with a structured, evidence-based plan.",
    detailedDescription:
      "Persistent back pain that lingers for weeks or months can come from the discs, joints, muscles, or a combination of all three. Dr. Wagih works to identify the true source before building a plan, rather than treating the pain as one generic problem.",
    symptoms: [
      "Dull, aching, or sharp pain in the lower or upper back",
      "Stiffness that is worse in the morning or after sitting",
      "Pain that limits bending, lifting, or standing for long periods",
      "Occasional muscle spasm or tightness across the back",
    ],
    evaluation:
      "A detailed history and physical examination are used to map exactly where the pain originates, followed by imaging referrals when needed to confirm the diagnosis and rule out more serious causes.",
    treatmentApproach:
      "Treatment typically combines targeted pain relief, guided physical therapy, and posture and movement correction, with minimally invasive procedures considered when conservative care isn't enough.",
  },
  {
    icon: Zap,
    image: conditionImages["neck-pain"],
    name: "Neck & Cervical Pain",
    description:
      "Stiffness, nerve irritation, and postural strain in the neck addressed with targeted care.",
    detailedDescription:
      "Neck pain often develops gradually from posture, screen time, or age-related changes in the cervical spine, and can sometimes radiate into the shoulders or arms when a nerve is involved.",
    symptoms: [
      "Stiffness or reduced range of motion in the neck",
      "Pain that radiates into the shoulder, arm, or hand",
      "Headaches that begin at the base of the skull",
      "Tingling or numbness in the fingers",
    ],
    evaluation:
      "Dr. Wagih assesses cervical range of motion and nerve function directly, using imaging to confirm disc or joint involvement whenever the history suggests nerve irritation.",
    treatmentApproach:
      "Care focuses on relieving nerve irritation, restoring mobility through guided therapy, and correcting the postural habits that most often bring the pain back.",
  },
  {
    icon: Radiation,
    image: conditionImages.sciatica,
    name: "Sciatica & Nerve Pain",
    description:
      "Radiating leg pain and nerve-related discomfort managed through precise, guided treatment.",
    detailedDescription:
      "Sciatica happens when a nerve in the lower back becomes irritated or compressed, sending pain, numbness, or weakness down through the hip and leg — often on one side only.",
    symptoms: [
      "Sharp or burning pain radiating from the lower back into the leg",
      "Numbness or tingling along the back of the leg or foot",
      "Pain that worsens with sitting, coughing, or sneezing",
      "Leg weakness in more advanced cases",
    ],
    evaluation:
      "A focused neurological exam identifies which nerve root is affected, supported by imaging when symptoms are severe, prolonged, or associated with weakness.",
    treatmentApproach:
      "Most cases respond to a combination of nerve-focused pain relief, targeted physical therapy, and image-guided injections reserved for pain that doesn't settle with conservative care.",
  },
  {
    icon: Bone,
    image: conditionImages.arthritis,
    name: "Joint & Arthritis Pain",
    description:
      "Knee, hip, and shoulder joint pain, including arthritis-related discomfort and stiffness.",
    detailedDescription:
      "Joint pain from wear-and-tear arthritis or overuse tends to build gradually, with stiffness and swelling that can make everyday movement — walking, climbing stairs, reaching overhead — increasingly difficult.",
    symptoms: [
      "Joint pain that worsens with activity and eases with rest",
      "Stiffness after periods of inactivity",
      "Visible swelling around the affected joint",
      "A grinding or catching sensation during movement",
    ],
    evaluation:
      "Examination of joint alignment, swelling, and range of motion is combined with imaging referrals to grade the extent of joint change and guide the right treatment path.",
    treatmentApproach:
      "Treatment starts with conservative measures — targeted exercise, activity modification, and anti-inflammatory care — with image-guided joint injections offered when pain limits daily function.",
  },
  {
    icon: Brain,
    image: conditionImages.migraine,
    name: "Migraine & Headache Disorders",
    description:
      "Recurring headache and migraine patterns evaluated with a whole-person diagnostic approach.",
    detailedDescription:
      "Recurring headaches and migraines have many possible triggers, from tension and posture to sleep and stress, so an accurate pattern history is essential to finding what actually helps.",
    symptoms: [
      "Throbbing or pulsing pain, often on one side of the head",
      "Sensitivity to light, sound, or movement",
      "Nausea accompanying more severe episodes",
      "Tension or tightness across the neck and shoulders",
    ],
    evaluation:
      "A thorough history of frequency, triggers, and associated symptoms is taken to distinguish migraine from tension-type or cervical-related headache before any treatment is proposed.",
    treatmentApproach:
      "Management combines trigger identification, targeted relief for acute episodes, and — where the neck is a contributing factor — hands-on treatment to reduce how often headaches occur.",
  },
  {
    icon: Footprints,
    image: conditionImages["sports-injury"],
    name: "Sports & Activity Injuries",
    description:
      "Strains, overuse injuries, and post-activity pain treated to restore safe, confident movement.",
    detailedDescription:
      "Whether from a single incident or repetitive strain, activity-related injuries need an accurate diagnosis early on so recovery doesn't stall or the same injury doesn't return once you're back to training.",
    symptoms: [
      "Localized pain that appeared during or after activity",
      "Swelling or bruising around the injured area",
      "Reduced strength or range of motion",
      "Pain that returns with repeated activity",
    ],
    evaluation:
      "A movement and strength assessment identifies the injured structure and its severity, with imaging used to confirm the diagnosis when the injury may involve a tendon, ligament, or joint.",
    treatmentApproach:
      "Recovery is staged — starting with pain and inflammation control, followed by a structured rehabilitation program that safely rebuilds strength before a return to full activity.",
  },
];
