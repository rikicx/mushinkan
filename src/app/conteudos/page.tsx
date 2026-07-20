import type { Metadata } from "next";
import { ContentGrid } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { contentPosts } from "@/data/site";
import sharedStyles from "@/components/Shared.module.css";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Artigos sobre história, filosofia, benefícios e prática do Karate Shotokan."
};

export default function ContentPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title="Aprenda sobre o Karate, dentro e fora do tatame."
        text="Uma biblioteca sobre história, filosofia e prática do Karate Shotokan, revisada a partir do acervo editorial do Mushinkan."
        mark="知"
      />

      <section className={sharedStyles.section} id="artigos">
        <div className={sharedStyles.wideContainer}>
          <SectionHeading
            eyebrow="Biblioteca"
            title="Comece por estes artigos."
            text="Três leituras fundamentais para conhecer as origens, os princípios e os benefícios da prática."
          />
          <ContentGrid posts={contentPosts} />
        </div>
      </section>

      <CTASection
        title="Gostou de ler sobre Karate? Melhor ainda é praticar."
        text="O caminho editorial termina no tatame: tire dúvidas e agende uma aula experimental."
      />
    </>
  );
}
