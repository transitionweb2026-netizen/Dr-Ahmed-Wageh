import { Cpu, Radar, ScanLine, Waves } from "lucide-react";
import type { IconPoint } from "../types";

export const technologies: IconPoint[] = [
  {
    icon: ScanLine,
    title: "التصوير التشخيصي بالموجات فوق الصوتية",
    description:
      "تصوير لحظي للعضلات والمفاصل والأنسجة الرخوة لتوجيه علاج دقيق.",
  },
  {
    icon: Radar,
    title: "تقنية الحقن الموجَّه بالتصوير",
    description:
      "توصيل العلاج مباشرة إلى مصدر الألم، مع تقليل التأثير على الأنسجة المحيطة.",
  },
  {
    icon: Waves,
    title: "بروتوكولات العلاج التجديدي",
    description:
      "أساليب حديثة مبنية على الأدلة مصممة لدعم الشفاء الطبيعي للجسم.",
  },
  {
    icon: Cpu,
    title: "سجلات رقمية للمرضى",
    description:
      "سجلات آمنة ومنظمة تحافظ على دقة تاريخك العلاجي وسهولة متابعته.",
  },
];
