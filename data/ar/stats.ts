import { Award, Headset, ShieldCheck, Users } from "lucide-react";
import type { Stat } from "../types";

// Illustrative placeholder figures — replace with verified clinical data.
export const stats: Stat[] = [
  { icon: Award, value: "+12", label: "سنة من الممارسة السريرية" },
  { icon: Users, value: "+6,000", label: "مريض تمت رعايتهم" },
  { icon: ShieldCheck, value: "%97", label: "نسبة تحسّن الأعراض المُبلَّغ عنها" },
  { icon: Headset, value: "24/7", label: "خط دعم للحالات الطارئة" },
];
