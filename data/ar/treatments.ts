import {
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Microscope,
  Syringe,
  Waves,
} from "lucide-react";
import type { TreatmentOption } from "../types";

export const treatmentOptions: TreatmentOption[] = [
  {
    icon: Syringe,
    name: "إجراءات تداخلية لعلاج الألم",
    description:
      "حقن دقيقة موجَّهة بالتصوير تستهدف مصدر الألم بالضبط مع أقل فترة تعافٍ.",
  },
  {
    icon: Waves,
    name: "علاج موجَّه بالموجات فوق الصوتية",
    description:
      "تصوير لحظي يُستخدم لتوصيل العلاج بدقة إلى العضلات والمفاصل والأنسجة الرخوة.",
  },
  {
    icon: Dumbbell,
    name: "برامج التأهيل الطبيعي",
    description:
      "خطط حركة وتقوية منظمة تدعم تعافيًا دائمًا، لا مجرد راحة مؤقتة.",
  },
  {
    icon: HeartPulse,
    name: "خيارات العلاج التجديدي",
    description:
      "أساليب حديثة مبنية على الأدلة مصممة لدعم استجابة الجسم الطبيعية للشفاء.",
  },
  {
    icon: Microscope,
    name: "فحوصات تشخيصية متقدمة",
    description:
      "تقييم شامل باستخدام الفحص السريري وتحويلات التصوير لتأكيد التشخيص.",
  },
  {
    icon: ClipboardList,
    name: "خطط إدارة الألم المزمن",
    description:
      "خطط رعاية طويلة الأمد للألم المعقد أو المستمر، تُراجَع وتُعدَّل بمرور الوقت.",
  },
];
