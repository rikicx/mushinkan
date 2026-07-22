import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { ContentGrid } from "@/components/Cards";
import { MediaBlock } from "@/components/MediaBlock";
import {
  contentArticles,
  contentPosts,
  getContentArticle,
  siteInfo
} from "@/data/site";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return contentArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getContentArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/conteudos/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/conteudos/${article.slug}`,
      type: "article",
      siteName: "Mushinkan Karate Shotokan Tradicional",
      images: [article.heroImage ?? "/images/dojo-treino-panoramica.jpg"],
      locale: "pt_BR"
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getContentArticle(slug);

  if (!article) {
    notFound();
  }

  const related = contentPosts.filter((post) => post.slug !== article.slug);
  const articleUrl = `${siteInfo.siteUrl}/conteudos/${article.slug}`;
  const articleImage = article.heroImage
    ? new URL(article.heroImage, siteInfo.siteUrl).toString()
    : `${siteInfo.siteUrl}/images/dojo-treino-panoramica.jpg`;
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    image: articleImage,
    mainEntityOfPage: articleUrl,
    inLanguage: "pt-BR",
    author: { "@id": `${siteInfo.siteUrl}/#dojo` },
    publisher: { "@id": `${siteInfo.siteUrl}/#dojo` },
    about: ["Karate Shotokan", "Karate tradicional"]
  };

  return (
    <article className={`${sharedStyles.section} ${pageStyles.articleTop}`}>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData)
        }}
        type="application/ld+json"
      />
      <div className={`${sharedStyles.wideContainer} ${pageStyles.articleShell}`}>
        <div className={pageStyles.article}>
          <Breadcrumbs
            items={[
              { label: "Conteúdos", href: "/conteudos" },
              { label: article.title, href: `/conteudos/${article.slug}` }
            ]}
          />
          <p className={sharedStyles.eyebrow} style={{ marginTop: 24 }}>
            Artigo
          </p>
          <h1>{article.title}</h1>
          <p className={pageStyles.articleLead}>{article.description}</p>
          {article.heroImage ? (
            <MediaBlock
              label={`Imagem de abertura · ${article.title}`}
              src={article.heroImage}
            />
          ) : null}

          {article.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items ? (
                section.ordered ? (
                  <ol className={pageStyles.articleList}>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className={pageStyles.articleList}>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              ) : null}
            </section>
          ))}

          <div className={pageStyles.featurePost} style={{ marginTop: 40 }}>
            <div className={pageStyles.featurePostBody}>
              <strong>O Karate ganha sentido quando é praticado.</strong>
              <p>Conheça o Mushinkan e experimente um treino na Vila Mariana.</p>
              <div className={sharedStyles.buttonRow} style={{ marginTop: 20 }}>
                <ButtonLink href={siteInfo.whatsappExperimental}>
                  Agendar aula experimental
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <aside className={pageStyles.sidebar}>
          <div className={pageStyles.infoCard}>
            <p className={sharedStyles.eyebrow}>Fonte</p>
            <p>
              Conteúdo revisado e reorganizado a partir do acervo editorial do
              Mushinkan.
            </p>
            <a
              className={sharedStyles.inlineLink}
              href={article.sourceUrl}
              rel="noreferrer"
              target="_blank"
            >
              {article.sourceLabel}
            </a>
          </div>
        </aside>
      </div>

      {related.length ? (
        <div className={sharedStyles.wideContainer} style={{ marginTop: 72 }}>
          <p className={sharedStyles.eyebrow}>Continue lendo</p>
          <div style={{ marginTop: 18 }}>
            <ContentGrid posts={related} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
