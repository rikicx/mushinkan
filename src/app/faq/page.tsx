import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FaqAnswer } from "@/components/FaqAnswer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, siteInfo } from "@/data/site";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Tire suas dúvidas sobre aulas, horários, turmas e a aula experimental do Dojo Mushinkan."
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Perguntas frequentes"
        title="Tire suas dúvidas antes do primeiro treino."
        text={
          <>
            Reunimos aqui as perguntas mais comuns de quem está chegando ao
            Mushinkan. Se a sua não estiver na lista, é só chamar no{" "}
            <a
              className={sharedStyles.inlineLink}
              href={siteInfo.whatsappExperimental}
            >
              WhatsApp
            </a>
            .
          </>
        }
      />

      <section className={sharedStyles.sectionTight}>
        <div className={`${sharedStyles.container} ${pageStyles.faqList}`}>
          <SectionHeading title="As dúvidas mais comuns." />
          {faqs.map((faq) => (
            <article className={pageStyles.faqItem} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>
                <FaqAnswer faq={faq} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Não encontrou a sua resposta?"
        text="Chame no WhatsApp e converse diretamente com um instrutor do dojo."
        buttonText="Perguntar no WhatsApp"
      />
    </>
  );
}
