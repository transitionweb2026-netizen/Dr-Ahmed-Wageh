import { getLocale, getTranslations } from "next-intl/server";
import { getArticles } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";

export async function ArticlesGridSection() {
  const locale = await getLocale();
  const t = await getTranslations("ArticlesGrid");
  const articles = await getArticles(locale);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={(index % 3) * 80}>
              <ArticleCard article={article} variant={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
