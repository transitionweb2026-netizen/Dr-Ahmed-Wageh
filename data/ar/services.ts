import {
  CalendarClock,
  MessagesSquare,
  Stethoscope,
  Users2,
  Video,
  Workflow,
} from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    icon: Stethoscope,
    name: "استشارة وتشخيص الألم",
    description:
      "زيارة أولى شاملة لفهم أعراضك والوصول إلى تشخيص دقيق وواثق.",
  },
  {
    icon: Workflow,
    name: "تخطيط علاج شخصي",
    description:
      "خطة رعاية تدريجية تُبنى حول حالتك وأسلوب حياتك وأهدافك العلاجية.",
  },
  {
    icon: Users2,
    name: "تنسيق متعدد التخصصات",
    description:
      "رعاية منسّقة مع أخصائيي العلاج الطبيعي والاستشاريين عند الحاجة.",
  },
  {
    icon: CalendarClock,
    name: "متابعة دورية للتقدم",
    description:
      "مواعيد متابعة مجدولة لتتبع التحسّن وضبط علاجك على طول الطريق.",
  },
  {
    icon: Video,
    name: "متابعة عن بُعد",
    description:
      "استشارات عن بُعد للمتابعات الروتينية، بحيث تتناسب الرعاية المستمرة مع جدولك.",
  },
  {
    icon: MessagesSquare,
    name: "توعية ودعم المريض",
    description:
      "شرح واضح لحالتك وعلاجك، لتفهم كل خطوة من خطوات الرعاية.",
  },
];
