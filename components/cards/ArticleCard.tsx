import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Article } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";

interface ArticleCardProps {
  article: Article;
  variant?: number;
  showDate?: boolean;
}

export function ArticleCard({ article, showDate = true }: ArticleCardProps) {
  const locale = useLocale();
  const t = useTranslations("ArticleCard");
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "ar" ? "ar-EG-u-nu-latn" : "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.08]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <CardImage
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-brand-500">
          <span>{article.category}</span>
          {showDate && (
            <>
              <span aria-hidden>&middot;</span>
              <span>{formattedDate}</span>
            </>
          )}
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug text-brand-950">
          {article.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
        <Link
          href="/articles"
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          {t("readMore")}
          <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
