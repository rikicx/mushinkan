import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { RouteTransitionLink as Link } from "@/components/RouteTransitionLink";
import { pressArticles, pressHref, pressThumbnail } from "@/data/press";
import { createPageMetadata, siteUrl } from "@/lib/seo";
import sharedStyles from "@/components/Shared.module.css";
import styles from "./acervo.module.css";

export const metadata = createPageMetadata({
  title: "Acervo de imprensa do Sensei Carlos Rocha",
  description:
    "A trajetória do Sensei Carlos Rocha contada pela imprensa: reportagens de 1976 a 2005 sobre um dos grandes nomes do Karate Shotokan JKA no Brasil.",
  path: "/conteudos/acervo"
});

export default function PressArchivePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Acervo de imprensa do Mushinkan",
    url: `${siteUrl}/conteudos/acervo`,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pressArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${pressHref(article.slug)}`,
        name: article.headline
      }))
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Acervo de imprensa"
        title="O Sensei Carlos Rocha nos jornais e revistas."
        text="Do primeiro pódio paulista ao 7º Dan JKA: quase três décadas de imprensa contam a trajetória de um dos grandes nomes do Karate Shotokan no Brasil."
        mark="記"
      />

      <section className={sharedStyles.section}>
        <div className={sharedStyles.wideContainer}>
          <ol className={styles.timeline}>
            {pressArticles.map((article) => (
              <li key={article.slug}>
                <Link className={styles.timelineItem} href={pressHref(article.slug)}>
                  <span className={styles.timelineYear}>
                    {article.timelineLabel ?? article.year ?? article.outlet}
                  </span>
                  <Image
                    alt=""
                    className={styles.timelineThumb}
                    height={750}
                    sizes="(max-width: 960px) 100vw, 240px"
                    src={pressThumbnail(article.slug)}
                    width={1200}
                  />
                  <div className={styles.timelineBody}>
                    <span className={styles.timelineOutlet}>
                      {article.outlet} · {article.dateLabel}
                    </span>
                    <h2>{article.headline}</h2>
                    <p>{article.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="A história continua no tatame."
        text="Conheça o dojo do Sensei Carlos Rocha na Vila Mariana e agende uma aula experimental."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
