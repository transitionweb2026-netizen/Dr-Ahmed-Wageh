import { CheckCircle2 } from "lucide-react";
import { doctor } from "@/data/doctor";
import { introVideo } from "@/data/videos";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IntroVideoPlayer } from "@/components/sections/IntroVideoPlayer";

export function AboutIntroSection() {
  return (
    <section className="py-20 sm:py-28">
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
          <Badge>About Dr. Wagih</Badge>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-brand-950 sm:text-4xl">
            Your Partner in Lasting Pain Relief
          </h2>
          <p className="text-base leading-relaxed text-slate-600">{doctor.shortIntro}</p>
          <ul className="flex flex-col gap-3">
            {doctor.credentials.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <PrimaryButton href="/about">Learn More About Us</PrimaryButton>
        </Reveal>
      </Container>
    </section>
  );
}
