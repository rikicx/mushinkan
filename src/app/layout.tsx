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
    default: "Mushinkan Karate-Do",
    template: "%s | Mushinkan"
  },
  description:
    "Dojo de Karate Shotokan tradicional na Vila Mariana, São Paulo.",
  metadataBase: new URL("https://mushinkan.com.br"),
  openGraph: {
    title: "Mushinkan Karate-Do",
    description:
      "Tradição, disciplina e evolução através do Karate Shotokan.",
    locale: "pt_BR",
    type: "website"
  }
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
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SportsActivityLocation",
                name: siteInfo.fullName,
                address: `${siteInfo.address}, ${siteInfo.district}, ${siteInfo.city}`,
                telephone: siteInfo.whatsappDisplay,
                url: "https://mushinkan.com.br"
              })
            }}
          />
        </RouteTransitionProvider>
      </body>
    </html>
  );
}
