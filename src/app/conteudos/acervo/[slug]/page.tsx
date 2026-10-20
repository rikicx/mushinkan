import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { ContentGrid } from "@/components/Cards";
import {
  getPressArticle,
  pressArticles,
  pressHref,
  pressPosts,
  pressThumbnail
} from "@/data/press";
import { siteInfo } from "@/data/site";
import { createPageMetadata, siteUrl } from "@/lib/seo";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";
import styles from "../acervo.module.css";

type PressPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pressArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: PressPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPressArticle(slug);

  if (!article) {
    return {};
  }

  return createPageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: pressHref(article.slug),
    type: "article",
    image: {
      url: pressThumbnail(article.slug),
      width: 1200,
      height: 750,
      alt: article.scans[0].alt
    }
  });
}

export default async function PressArticlePage({ params }: PressPageProps) {
  const { slug } = await params;
  const article = getPressArticle(slug);

  if (!article) {
    notFound();
  }

  const url = `${siteUrl}${pressHref(article.slug)}`;
  const related = pressPosts.filter((post) => post.slug !== article.slug).slice(0, 3);
  const singleScan = article.scans.length === 1;
  const isGallery = article.outletType === "Acervo";
  const hasTranscript = article.transcript.length > 0;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.seoTitle,
        description: article.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "pt-BR",
        image: `${siteUrl}${pressThumbnail(article.slug)}`,
        publisher: { "@id": `${siteUrl}/#dojo` },
        about: {
          "@type": "Person",
          name: "Carlos Rocha",
          jobTitle: "Instrutor chefe do Mushinkan"
        },
        ...(isGallery
          ? {}
          : {
        isBasedOn: {
          "@type": "CreativeWork",
          name: article.headline,
          ...(article.isoDate ? { datePublished: article.isoDate } : {}),
          ...(article.byline
            ? { author: { "@type": "Person", name: article.byline } }
            : {}),
          publisher: { "@type": "Organization", name: article.outlet }
        }
            })
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Conteúdos",
            item: `${siteUrl}/conteudos`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Acervo de imprensa",
            item: `${siteUrl}/conteudos/acervo`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.headline,
            item: url
          }
        ]
      }
    ]
  };

  return (
    <article className={`${sharedStyles.section} ${pageStyles.articleTop}`}>
      <div className={sharedStyles.wideContainer}>
        <header className={styles.header}>
          <Breadcrumbs
            items={[
              { label: "Conteúdos", href: "/conteudos" },
              { label: "Acervo de imprensa", href: "/conteudos/acervo" },
              { label: article.headline, href: pressHref(article.slug) }
            ]}
          />
          <p className={sharedStyles.eyebrow} style={{ marginTop: 24 }}>
            Acervo · {isGallery ? article.dateLabel : `${article.outlet} · ${article.dateLabel}`}
          </p>
          {article.kicker ? (
            <p className={styles.kicker}>{article.kicker}</p>
          ) : null}
          <h1>{article.headline}</h1>
          <ul className={styles.meta}>
            <li>
              <strong>{article.outletType}:</strong> {article.outlet}
            </li>
            {article.edition ? <li>{article.edition}</li> : null}
            {article.byline ? (
              <li>
                <strong>Texto:</strong> {article.byline}
              </li>
            ) : null}
          </ul>
          <div className={styles.context}>
            {article.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className={isGallery ? styles.galleryLayout : styles.layout}>
          <div
            className={`${isGallery ? styles.gallery : styles.scans} ${singleScan ? styles.scansSticky : ""}`}
          >
            {article.scans.map((scan, index) => (
              <figure className={styles.scan} key={scan.src}>
                <a
                  aria-label={`Abrir ${scan.label.toLowerCase()} em tamanho original`}
                  className={styles.scanLink}
                  href={scan.src}
                  rel="noopener"
                  target="_blank"
                >
                  <Image
                    alt={scan.alt}
                    height={scan.height}
                    priority={index === 0}
                    sizes={
                      isGallery
                        ? "(max-width: 960px) 100vw, 33vw"
                        : "(max-width: 960px) 100vw, 46vw"
                    }
                    src={scan.src}
                    width={scan.width}
                  />
                </a>
                <figcaption>
                  <span>{scan.label}</span>
                  <span className={styles.zoomHint}>Ampliar</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.transcript}>
            {hasTranscript ? (
              <>
                <h2>Transcrição</h2>
                <p className={styles.transcriptNote}>
                  Texto transcrito do original, mantendo a grafia da época.
                  Corrigimos apenas erros evidentes de digitação.
                </p>
                <div className={styles.transcriptBody}>
                  {article.transcript.map((section, index) => (
                    <section key={section.heading ?? index}>
                      {section.heading ? <h3>{section.heading}</h3> : null}
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </section>
                  ))}
                </div>
              </>
            ) : (
              <h2>{isGallery ? "Sobre as fotos" : "Sobre este recorte"}</h2>
            )}

            {article.captions?.length ? (
              <div className={styles.aside}>
                <h3>Legendas das fotos</h3>
                <ul>
                  {article.captions.map((caption) => (
                    <li key={caption}>{caption}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {article.notes?.length ? (
              <div className={styles.aside}>
                <h3>{hasTranscript ? "Notas da transcrição" : "Notas"}</h3>
                <ul>
                  {article.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className={styles.source}>
              {isGallery ? (
                <p>
                  Fotos do acervo pessoal do Sensei Carlos Rocha. Os direitos
                  das imagens pertencem aos seus autores.
                </p>
              ) : (
                <>
                  <p>
                    <strong>Fonte:</strong> {article.outlet}
                    {article.edition ? `, ${article.edition}` : ""},{" "}
                    {article.dateLabel.toLowerCase()}.
                  </p>
                  <p>
                    Recorte do acervo pessoal do Sensei Carlos Rocha. Os
                    direitos do texto e das imagens pertencem aos seus autores
                    e à publicação original.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={pageStyles.featurePost} style={{ marginTop: 56 }}>
          <div className={pageStyles.featurePostBody}>
            <strong>Treine com o Sensei Carlos Rocha.</strong>
            <p>
              A mesma linhagem do Mestre Taketo Okuda, hoje no Mushinkan, na
              Vila Mariana.
            </p>
            <div className={sharedStyles.buttonRow} style={{ marginTop: 20 }}>
              <ButtonLink href={siteInfo.whatsappExperimental}>
                Agendar aula experimental
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {related.length ? (
        <div className={sharedStyles.wideContainer} style={{ marginTop: 72 }}>
          <p className={sharedStyles.eyebrow}>Mais do acervo</p>
          <div style={{ marginTop: 18 }}>
            <ContentGrid posts={related} />
          </div>
        </div>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
    </article>
  );
}
