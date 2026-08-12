import { doctorImages, videoPosterImages } from "../images";
import type { IntroVideo, VideoItem } from "../types";

export const introVideo: IntroVideo = {
  title: "تعرّف على د. أحمد وجيه",
  description:
    "مقدمة قصيرة عن نهج د. وجيه في علاج الألم والرعاية التي محورها المريض.",
  posterLabel: "فيديو تعريفي",
  posterImage: doctorImages.introVideoPoster,
  videoUrl: "/videos/introduction.mp4",
};

// 9 portrait clips — the Main page features the first 3, the Videos page shows all 9.
export const galleryVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "فهم آلام الظهر المزمنة",
    description: "شرح سريع لأبرز الأسباب وخيارات الرعاية الشائعة.",
    posterLabel: "توعية المرضى",
    posterImage: videoPosterImages["video-1"],
    videoUrl: "/videos/clip-1.mp4",
  },
  {
    id: "video-2",
    title: "ماذا يحدث أثناء استشارة علاج الألم",
    description: "جولة توضيحية لما يمكن توقعه في زيارتك الأولى.",
    posterLabel: "لمحة من العيادة",
    posterImage: videoPosterImages["video-2"],
    videoUrl: "/videos/clip-2.mp4",
  },
  {
    id: "video-3",
    title: "3 علامات لا يجب تجاهلها",
    description: "علامات تحذيرية تعني أن الوقت حان لاستشارة أخصائي.",
    posterLabel: "توعية المرضى",
    posterImage: videoPosterImages["video-3"],
    videoUrl: "/videos/clip-3.mp4",
  },
  {
    id: "video-4",
    title: "نظرة داخل إجراء طفيف التوغل",
    description: "لمحة من خلف الكواليس لإجراء حقن موجَّه بالتصوير.",
    posterLabel: "لمحة عن الإجراء",
    posterImage: videoPosterImages["video-4"],
    videoUrl: "/videos/clip-4.mp4",
  },
  {
    id: "video-5",
    title: "تمارين بسيطة لتخفيف آلام الرقبة",
    description: "تمارين إطالة يومية لطيفة يُنصح بها لحالات الشد البسيط في الرقبة.",
    posterLabel: "نصيحة صحية",
    posterImage: videoPosterImages["video-5"],
    videoUrl: "/videos/clip-5.mp4",
  },
  {
    id: "video-6",
    title: "التعايش الجيد مع الروماتيزم",
    description: "نصائح عملية يومية للتعامل مع انزعاج المفاصل.",
    posterLabel: "توعية المرضى",
    posterImage: videoPosterImages["video-6"],
    videoUrl: "/videos/clip-6.mp4",
  },
  {
    id: "video-7",
    title: "كيف يدعم التأهيل التعافي",
    description: "لماذا تُعد خطط الحركة المنظمة جزءًا أساسيًا من الراحة الدائمة.",
    posterLabel: "لمحة من العيادة",
    posterImage: videoPosterImages["video-7"],
    videoUrl: "/videos/clip-7.mp4",
  },
  {
    id: "video-8",
    title: "خرافات شائعة حول علاج الألم",
    description: "توضيح لمفاهيم خاطئة شائعة يسأل عنها المرضى غالبًا.",
    posterLabel: "توعية المرضى",
    posterImage: videoPosterImages["video-8"],
    videoUrl: "/videos/clip-8.mp4",
  },
  {
    id: "video-9",
    title: "يوم داخل العيادة",
    description: "لمحة قصيرة عن أجواء العيادة وفريق الرعاية.",
    posterLabel: "لمحة من العيادة",
    posterImage: videoPosterImages["video-9"],
    videoUrl: "/videos/clip-9.mp4",
  },
];

export const homeVideos = galleryVideos.slice(0, 3);
