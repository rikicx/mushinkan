import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@fontsource/yuji-syuku/400.css";
import { RouteTransitionProvider } from "@/components/RouteTransition";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingActions } from "@/components/FloatingActions";
import { siteInfo } from "@/data/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Mushinkan | Karate Shotokan na Vila Mariana",
    template: "%s | Mushinkan"
  },
  description:
    "Aulas de Karate Shotokan tradicional para crianças e adultos na Vila Mariana. Agende uma aula experimental pelo WhatsApp.",
  metadataBase: new URL(siteInfo.siteUrl),
  applicationName: siteInfo.fullName,
  authors: [{ name: siteInfo.name, url: siteInfo.siteUrl }],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  category: "sports",
  icons: {
    icon: "/logos/mushinkan-logo-v.svg"
  },
  openGraph: {
    title: "Mushinkan | Karate Shotokan na Vila Mariana",
    description:
      "Aulas de Karate Shotokan tradicional para crianças e adultos na Vila Mariana. Agende uma aula experimental pelo WhatsApp.",
    url: siteInfo.siteUrl,
    siteName: siteInfo.fullName,
    images: [
      {
        url: "/images/dojo-treino-panoramica.jpg",
        width: 2048,
        height: 1366,
        alt: "Treino de Karate Shotokan no Dojo Mushinkan"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/dojo-treino-panoramica.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteInfo.siteUrl}/#website`,
      url: siteInfo.siteUrl,
      name: siteInfo.fullName,
      alternateName: siteInfo.name,
      inLanguage: "pt-BR"
    },
    {
      "@type": "SportsActivityLocation",
      "@id": `${siteInfo.siteUrl}/#dojo`,
      name: siteInfo.fullName,
      alternateName: siteInfo.name,
      description:
        "Dojo de Karate Shotokan tradicional para crianças e adultos na Vila Mariana, São Paulo.",
      foundingDate: String(siteInfo.foundedYear),
      slogan: siteInfo.positioning,
      url: siteInfo.siteUrl,
      logo: `${siteInfo.siteUrl}/logos/mushinkan-logo-v.svg`,
      image: `${siteInfo.siteUrl}/images/dojo-treino-panoramica.jpg`,
      telephone: siteInfo.whatsappNumber,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteInfo.address,
        postalCode: siteInfo.postalCode,
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.5956036,
        longitude: -46.6368886
      },
      hasMap: siteInfo.googleMapsUrl,
      areaServed: "Vila Mariana, São Paulo",
      sameAs: siteInfo.social.map((item) => item.href),
      knowsAbout: [
        "Karate Shotokan tradicional",
        "Kihon",
        "Kata",
        "Kumite"
      ],
      makesOffer: {
        "@type": "Offer",
        name: "Aula experimental de Karate Shotokan",
        url: `${siteInfo.siteUrl}/aulas-e-horarios#primeira-aula`,
        itemOffered: {
          "@type": "Service",
          name: "Aula experimental de Karate Shotokan",
          description:
            "Aula experimental com duração de 50 a 60 minutos, mediante agendamento pelo WhatsApp."
        }
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={archivo.variable}
      data-scroll-behavior="smooth"
      lang="pt-BR"
    >
      <body>
        <RouteTransitionProvider>
          <a className="skip-link" href="#conteudo">
            Pular para o conteúdo
          </a>
          <SiteHeader />
          <main id="conteudo">{children}</main>
          <SiteFooter />
          <FloatingActions />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        </RouteTransitionProvider>
      </body>
    </html>
  );
}
