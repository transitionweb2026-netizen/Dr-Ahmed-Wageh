import { doctorImages, videoPosterImages } from "./images";
import type { IntroVideo, VideoItem } from "./types";

export const introVideo: IntroVideo = {
  title: "Meet Dr. Ahmed Wagih",
  description:
    "A short introduction to Dr. Wagih's approach to pain management and patient-centered care.",
  posterLabel: "Introduction Video",
  posterImage: doctorImages.introVideoPoster,
  videoUrl: "/videos/introduction.mp4",
};

// 9 portrait clips — the Main page features the first 3, the Videos page shows all 9.
export const galleryVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "Understanding Chronic Back Pain",
    description: "A quick explainer on common causes and care options.",
    posterLabel: "Patient Education",
    posterImage: videoPosterImages["video-1"],
    videoUrl: "/videos/clip-1.mp4",
  },
  {
    id: "video-2",
    title: "What Happens During a Pain Consultation",
    description: "A walkthrough of what to expect at your first visit.",
    posterLabel: "Clinic Insight",
    posterImage: videoPosterImages["video-2"],
    videoUrl: "/videos/clip-2.mp4",
  },
  {
    id: "video-3",
    title: "3 Signs You Shouldn't Ignore",
    description: "Warning signs that mean it's time to see a specialist.",
    posterLabel: "Patient Education",
    posterImage: videoPosterImages["video-3"],
    videoUrl: "/videos/clip-3.mp4",
  },
  {
    id: "video-4",
    title: "Inside a Minimally Invasive Procedure",
    description: "A behind-the-scenes look at a guided injection procedure.",
    posterLabel: "Procedure Insight",
    posterImage: videoPosterImages["video-4"],
    videoUrl: "/videos/clip-4.mp4",
  },
  {
    id: "video-5",
    title: "Simple Stretches for Neck Pain Relief",
    description: "Gentle daily stretches recommended for mild neck strain.",
    posterLabel: "Wellness Tip",
    posterImage: videoPosterImages["video-5"],
    videoUrl: "/videos/clip-5.mp4",
  },
  {
    id: "video-6",
    title: "Living Well with Arthritis",
    description: "Practical, everyday tips for managing joint discomfort.",
    posterLabel: "Patient Education",
    posterImage: videoPosterImages["video-6"],
    videoUrl: "/videos/clip-6.mp4",
  },
  {
    id: "video-7",
    title: "How Rehabilitation Supports Recovery",
    description: "Why structured movement is a key part of lasting relief.",
    posterLabel: "Clinic Insight",
    posterImage: videoPosterImages["video-7"],
    videoUrl: "/videos/clip-7.mp4",
  },
  {
    id: "video-8",
    title: "Myths About Pain Management",
    description: "Clearing up common misconceptions patients often ask about.",
    posterLabel: "Patient Education",
    posterImage: videoPosterImages["video-8"],
    videoUrl: "/videos/clip-8.mp4",
  },
  {
    id: "video-9",
    title: "A Day Inside the Clinic",
    description: "A short look at the clinic environment and care team.",
    posterLabel: "Clinic Insight",
    posterImage: videoPosterImages["video-9"],
    videoUrl: "/videos/clip-9.mp4",
  },
];

export const homeVideos = galleryVideos.slice(0, 3);
