import { useLocale, useTranslations } from "next-intl";
import { getArticles } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";

export function ArticlesGridSection() {
  const locale = useLocale();
  const t = useTranslations("ArticlesGrid");
  const articles = getArticles(locale);

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
