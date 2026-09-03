import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import "@fontsource/yuji-syuku/400.css";
import { RouteTransitionProvider } from "@/components/RouteTransition";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingActions } from "@/components/FloatingActions";
import { GooglePageView } from "@/components/GooglePageView";
import {
  homeDescription,
  homeTitle,
  seoStructuredData,
  siteUrl
} from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: "%s | Mushinkan"
  },
  description: homeDescription,
  metadataBase: new URL(siteUrl),
  applicationName: "Mushinkan",
  category: "sports",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J111E9DTPL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J111E9DTPL');
          `}
        </Script>
        <GooglePageView />
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
              __html: JSON.stringify(seoStructuredData)
            }}
          />
        </RouteTransitionProvider>
      </body>
    </html>
  );
}
