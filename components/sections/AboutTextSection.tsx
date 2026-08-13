import { CheckCircle2 } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getDoctor, getIntroVideo } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { IntroVideoPlayer } from "@/components/sections/IntroVideoPlayer";

export async function AboutTextSection() {
  const locale = await getLocale();
  const t = await getTranslations("AboutText");
  const doctor = await getDoctor(locale);
  const introVideo = await getIntroVideo(locale);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <IntroVideoPlayer
            title={introVideo.title}
            posterLabel={introVideo.posterLabel}
            posterImage={introVideo.posterImage}
            videoUrl={introVideo.videoUrl}
          />
        </Reveal>

        <Reveal delay={100} className="flex flex-col items-start gap-6">
          <Badge>{t("eyebrow")}</Badge>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-brand-950 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-base leading-relaxed text-slate-600">{doctor.shortIntro}</p>
          <div className="flex flex-col gap-4">
            {doctor.bioParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="flex flex-col gap-3">
            {doctor.credentials.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
