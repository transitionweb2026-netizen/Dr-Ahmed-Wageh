import { getLocale } from "next-intl/server";
import { getArticlesExcludingFeatured } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";

export async function ArticlesGridSection() {
  const locale = await getLocale();
  const articles = await getArticlesExcludingFeatured(locale);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap justify-center gap-6">
          {articles.map((article, index) => (
            <Reveal
              key={article.slug}
              delay={(index % 3) * 80}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ArticleCard article={article} variant={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
