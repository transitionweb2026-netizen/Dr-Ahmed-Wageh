import { Cpu, Radar, ScanLine, Waves } from "lucide-react";
import type { IconPoint } from "./types";

export const technologies: IconPoint[] = [
  {
    icon: ScanLine,
    title: "Diagnostic Ultrasound Imaging",
    description:
      "Real-time visualization of muscles, joints, and soft tissue to guide precise treatment.",
  },
  {
    icon: Radar,
    title: "Image-Guided Injection Technique",
    description:
      "Targeted delivery of treatment directly to the source of pain, minimizing surrounding impact.",
  },
  {
    icon: Waves,
    title: "Regenerative Therapy Protocols",
    description:
      "Modern, evidence-informed approaches designed to support the body's natural recovery.",
  },
  {
    icon: Cpu,
    title: "Digital Patient Records",
    description:
      "Secure, organized records that keep your treatment history accurate and easy to follow up on.",
  },
];
