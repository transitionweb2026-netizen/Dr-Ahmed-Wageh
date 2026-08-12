import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTextSection() {
  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading eyebrow="About the Doctor" title="Getting to Know Dr. Wagih" />
        </Reveal>
        <Reveal delay={100} className="flex max-w-3xl flex-col gap-6">
          {doctor.bioParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-balance text-center text-base leading-relaxed text-slate-600 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
