import { getLocale, getTranslations } from "next-intl/server";
import { getFeaturedWrittenReviews, getVideoReviews } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MainReviewsGrid } from "@/components/sections/MainReviewsGrid";

export async function MainReviewsSection() {
  const locale = await getLocale();
  const t = await getTranslations("MainReviews");
  const featuredWrittenReviews = await getFeaturedWrittenReviews(locale);
  const videoReviews = await getVideoReviews(locale);

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <MainReviewsGrid reviews={featuredWrittenReviews} featuredVideo={videoReviews[0]} />
      </Container>
    </section>
  );
}
