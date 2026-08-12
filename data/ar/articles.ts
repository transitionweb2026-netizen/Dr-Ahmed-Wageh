import { articleImages } from "../images";
import type { Article } from "../types";

export const featuredArticle: Article = {
  slug: "rethinking-pain-management",
  title: "إعادة النظر في علاج الألم: نهج شامل لراحة دائمة",
  excerpt:
    "لماذا يتطلب علاج الألم بفعالية النظر إلى ما هو أبعد من العرض — وكيف يبدو ذلك عمليًا، من التشخيص إلى المتابعة طويلة الأمد.",
  date: "2026-06-02",
  readTime: "6 دقائق قراءة",
  category: "توعية المرضى",
  image: articleImages.featured,
};

// 6 articles — the Main page features the first 3, the Articles page shows all 6.
export const articles: Article[] = [
  {
    slug: "understanding-chronic-back-pain",
    title: "فهم آلام الظهر المزمنة: الأسباب وخيارات الرعاية",
    excerpt:
      "نظرة أقرب على أسباب آلام الظهر المستمرة ومجموعة مسارات العلاج المتاحة اليوم.",
    date: "2026-05-20",
    readTime: "5 دقائق قراءة",
    category: "آلام الظهر",
    image: articleImages["understanding-chronic-back-pain"],
  },
  {
    slug: "signs-before-seeing-a-specialist",
    title: "5 علامات مبكرة يجب ألا تتجاهلها قبل استشارة أخصائي",
    excerpt:
      "علامات تحذيرية شائعة تشير إلى أن الوقت حان لحجز استشارة علاج ألم مناسبة.",
    date: "2026-05-05",
    readTime: "4 دقائق قراءة",
    category: "دليل المريض",
    image: articleImages["signs-before-seeing-a-specialist"],
  },
  {
    slug: "minimally-invasive-procedures-explained",
    title: "الإجراءات طفيفة التوغل: ما يجب أن يعرفه المريض",
    excerpt:
      "ما يمكن توقعه من الإجراءات الموجَّهة بالتصوير، من التحضير حتى التعافي.",
    date: "2026-04-18",
    readTime: "5 دقائق قراءة",
    category: "الإجراءات",
    image: articleImages["minimally-invasive-procedures-explained"],
  },
  {
    slug: "living-well-with-arthritis",
    title: "التعايش الجيد مع الروماتيزم: دليل عملي",
    excerpt:
      "استراتيجيات يومية للتعامل مع آلام المفاصل والحفاظ على النشاط رغم الروماتيزم.",
    date: "2026-04-01",
    readTime: "6 دقائق قراءة",
    category: "صحة المفاصل",
    image: articleImages["living-well-with-arthritis"],
  },
  {
    slug: "rehabilitation-and-recovery",
    title: "كيف يدعم التأهيل الطبيعي التعافي طويل الأمد",
    excerpt:
      "لماذا تُعد خطط الحركة المنظمة بنفس أهمية العلاج الأولي ذاته.",
    date: "2026-03-14",
    readTime: "4 دقائق قراءة",
    category: "التأهيل الطبيعي",
    image: articleImages["rehabilitation-and-recovery"],
  },
  {
    slug: "sciatica-explained",
    title: "عرق النسا: الأعراض والتشخيص ومسارات العلاج",
    excerpt:
      "فهم مسار العصب المسؤول عن عرق النسا وخيارات العلاج المتاحة له.",
    date: "2026-02-27",
    readTime: "5 دقائق قراءة",
    category: "آلام الأعصاب",
    image: articleImages["sciatica-explained"],
  },
];

export const homeArticles = articles.slice(0, 3);
