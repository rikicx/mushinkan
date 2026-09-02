import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const siteUrl = "https://www.mushinkan.com.br";
export const homeTitle = "Karate Shotokan na Vila Mariana | Mushinkan";
export const homeDescription =
  "Aulas de Karate Shotokan tradicional para crianças e adultos na Vila Mariana, São Paulo. Turmas do iniciante ao avançado. Agende uma aula experimental.";

const socialImage = {
  url: "/images/dojo-seiza.webp",
  width: 2048,
  height: 1366,
  alt: "Instrutores e alunos do Dojo Mushinkan no tatame"
};

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path
}: PageMetadataInput): Metadata {
  const socialTitle = title ? `${title} | ${siteInfo.name}` : homeTitle;

  return {
    title: title ?? { absolute: homeTitle },
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: siteInfo.name,
      locale: "pt_BR",
      type: "website",
      images: [socialImage]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url]
    }
  };
}

export const seoStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteInfo.name,
      alternateName: siteInfo.fullName,
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteUrl}/#dojo`
      }
    },
    {
      "@type": "SportsActivityLocation",
      "@id": `${siteUrl}/#dojo`,
      name: siteInfo.fullName,
      alternateName: siteInfo.name,
      description: homeDescription,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logos/mushinkan-logo-h.svg`,
      image: [
        `${siteUrl}/images/dojo-seiza.webp`,
        `${siteUrl}/images/turma-adulto-mushinkan.webp`
      ],
      telephone: "+5511999165718",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteInfo.address,
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.5956036,
        longitude: -46.6368886
      },
      hasMap: siteInfo.mapsRouteUrl,
      sameAs: siteInfo.social.map((item) => item.href)
    }
  ]
};
