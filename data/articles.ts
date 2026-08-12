import { articleImages } from "./images";
import type { Article } from "./types";

export const featuredArticle: Article = {
  slug: "rethinking-pain-management",
  title: "Rethinking Pain Management: A Whole-Person Approach to Lasting Relief",
  excerpt:
    "Why treating pain effectively means looking beyond the symptom — and what that looks like in practice, from diagnosis through long-term follow-up.",
  date: "2026-06-02",
  readTime: "6 min read",
  category: "Patient Education",
  image: articleImages.featured,
};

// 6 articles — the Main page features the first 3, the Articles page shows all 6.
export const articles: Article[] = [
  {
    slug: "understanding-chronic-back-pain",
    title: "Understanding Chronic Back Pain: Causes & Care Options",
    excerpt:
      "A closer look at what causes persistent back pain and the range of treatment paths available today.",
    date: "2026-05-20",
    readTime: "5 min read",
    category: "Back Pain",
    image: articleImages["understanding-chronic-back-pain"],
  },
  {
    slug: "signs-before-seeing-a-specialist",
    title: "5 Early Signs You Shouldn't Ignore Before Seeing a Specialist",
    excerpt:
      "Common warning signs that suggest it's time to book a proper pain management consultation.",
    date: "2026-05-05",
    readTime: "4 min read",
    category: "Patient Guide",
    image: articleImages["signs-before-seeing-a-specialist"],
  },
  {
    slug: "minimally-invasive-procedures-explained",
    title: "Minimally Invasive Procedures: What Patients Should Know",
    excerpt:
      "What to expect from image-guided procedures, from preparation to recovery.",
    date: "2026-04-18",
    readTime: "5 min read",
    category: "Procedures",
    image: articleImages["minimally-invasive-procedures-explained"],
  },
  {
    slug: "living-well-with-arthritis",
    title: "Living Well with Arthritis: A Practical Guide",
    excerpt:
      "Everyday strategies for managing joint pain and staying active with arthritis.",
    date: "2026-04-01",
    readTime: "6 min read",
    category: "Joint Health",
    image: articleImages["living-well-with-arthritis"],
  },
  {
    slug: "rehabilitation-and-recovery",
    title: "How Physical Rehabilitation Supports Long-Term Recovery",
    excerpt:
      "Why structured movement plans matter as much as the initial treatment itself.",
    date: "2026-03-14",
    readTime: "4 min read",
    category: "Rehabilitation",
    image: articleImages["rehabilitation-and-recovery"],
  },
  {
    slug: "sciatica-explained",
    title: "Sciatica Explained: Symptoms, Diagnosis & Treatment Paths",
    excerpt:
      "Understanding the nerve pathway behind sciatica and the treatment options available.",
    date: "2026-02-27",
    readTime: "5 min read",
    category: "Nerve Pain",
    image: articleImages["sciatica-explained"],
  },
];

export const homeArticles = articles.slice(0, 3);
