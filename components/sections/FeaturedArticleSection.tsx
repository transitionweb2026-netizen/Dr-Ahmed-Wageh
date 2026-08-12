import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredArticle } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedArticleSection() {
  const formattedDate = new Date(featuredArticle.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm shadow-slate-900/[0.03] lg:grid-cols-2">
          <div className="relative aspect-[16/10] w-full lg:aspect-auto">
            <Image
              src={featuredArticle.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
            <Badge>Featured Article</Badge>
            <h2 className="text-balance font-display text-2xl font-semibold leading-snug text-brand-950 sm:text-3xl">
              {featuredArticle.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-600">{featuredArticle.excerpt}</p>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.1em] text-brand-500">
              <span>{featuredArticle.category}</span>
              <span aria-hidden>&middot;</span>
              <span>{formattedDate}</span>
              <span aria-hidden>&middot;</span>
              <span>{featuredArticle.readTime}</span>
            </div>
            <PrimaryButton href="/articles" icon={<ArrowRight className="h-4 w-4" />} className="self-start">
              Read More
            </PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
