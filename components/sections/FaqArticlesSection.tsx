import { homeArticles } from "@/data/articles";
import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";

export function FaqArticlesSection() {
  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.75fr_1fr]">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col items-start gap-4">
            <Badge>Latest Articles</Badge>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
              Insights for Your Recovery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 80}>
                <ArticleCard article={article} variant={index} showDate={false} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col items-start gap-4">
            <Badge>FAQ</Badge>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion items={faqItems} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
