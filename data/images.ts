// Centralized placeholder photography sourced from Unsplash (free license).
// Swap any of these string values for a real, licensed asset when it's ready —
// nothing elsewhere in the codebase needs to change.

function unsplash(id: string, params = "w=1200&q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`;
}

function avatar(id: string) {
  return unsplash(id, "w=200&h=200&q=80&auto=format&fit=crop");
}

const portrait = unsplash("photo-1758691463582-11aea602cd4a");

export const doctorImages = {
  // Reused everywhere the doctor himself needs to appear — the Hero, every
  // page-hero background, the About-page quote, the technologies section, and
  // the intro-video poster — so it's always recognizably the same person.
  portrait,
  technologies: portrait,
  introVideoPoster: portrait,
  whyChoose: portrait,
};

export const conditionImages = {
  "back-pain": unsplash("photo-1618914241652-ff0a094b5a86"),
  "neck-pain": unsplash("photo-1539815208687-a0f05e15d601"),
  sciatica: unsplash("photo-1650897492393-6fc8363937df"),
  arthritis: unsplash("photo-1687013367433-9077a7624830"),
  migraine: unsplash("photo-1554188572-9d184b57d8e2"),
  "sports-injury": unsplash("photo-1768839722722-b1b2cb93c71d"),
} as const;

export const serviceImages = {
  consultation: unsplash("photo-1631217868264-e5b90bb7e133"),
  planning: unsplash("photo-1758691461990-03b49d969495"),
  coordination: unsplash("photo-1516841273335-e39b37888115"),
  progressReviews: unsplash("photo-1606318313647-137d1f3b4d3c"),
  telehealth: unsplash("photo-1758691462743-f9fc9e430d39"),
  education: unsplash("photo-1758691461935-202e2ef6b69f"),
} as const;

export const treatmentImages = {
  interventional: unsplash("photo-1611689102192-1f6e0e52df0a"),
  ultrasound: unsplash("photo-1691933880096-4046bc9e2fa0"),
  rehabilitation: unsplash("photo-1699523229199-fce5aa6b0ec3"),
  regenerative: unsplash("photo-1518152006812-edab29b069ac"),
  diagnostics: unsplash("photo-1666214280352-db292c05fd80"),
  "pain-management-plans": unsplash("photo-1576091160550-2173dba999ef"),
} as const;

export const videoPosterImages = {
  "video-1": unsplash("photo-1769029271190-36b22f5e6771"),
  "video-2": unsplash("photo-1666886573531-48d2e3c2b684"),
  "video-3": unsplash("photo-1497044383938-c0486a41b655"),
  "video-4": unsplash("photo-1649751361457-01d3a696c7e6"),
  "video-5": unsplash("photo-1447452001602-7090c7ab2db3"),
  "video-6": unsplash("photo-1773821010853-58b0039cd89e"),
  "video-7": unsplash("photo-1645005512968-0c1fe99f0093"),
  "video-8": unsplash("photo-1530210124550-912dc1381cb8"),
  "video-9": unsplash("photo-1762625570087-6d98fca29531"),
} as const;

export const reviewVideoImages = {
  "video-review-1": unsplash("photo-1484863137850-59afcfe05386"),
  "video-review-2": unsplash("photo-1606166228927-3feafb447265"),
} as const;

export const articleImages = {
  featured: unsplash("photo-1758691462071-757bca955439"),
  "understanding-chronic-back-pain": unsplash("photo-1769029262388-3ebd4e4e37d0"),
  "signs-before-seeing-a-specialist": unsplash("photo-1746842419697-03234f5ff03e"),
  "minimally-invasive-procedures-explained": unsplash("photo-1758691461957-474a7686e388"),
  "living-well-with-arthritis": unsplash("photo-1764173040188-8194f7738e49"),
  "rehabilitation-and-recovery": unsplash("photo-1540205895360-4ad4cffb3aa8"),
  "sciatica-explained": unsplash("photo-1508387027939-27cccde53673"),
} as const;

export const reviewerAvatars = [
  avatar("photo-1506277886164-e25aa3f4ef7f"),
  avatar("photo-1562337404-3044c84ac061"),
  avatar("photo-1568602471122-7832951cc4c5"),
  avatar("photo-1592275772614-ec71b19e326f"),
  avatar("photo-1750853736853-7eed0c15d4a0"),
  avatar("photo-1665560924350-29cbc22df634"),
  avatar("photo-1600481176431-47ad2ab2745d"),
  "https://images.pexels.com/photos/12644996/pexels-photo-12644996.jpeg?w=200&h=200&q=80&auto=format&fit=crop",
];
