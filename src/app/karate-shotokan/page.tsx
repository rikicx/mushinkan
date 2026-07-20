import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { MediaBlock } from "@/components/MediaBlock";
import { PageAnchors } from "@/components/PageAnchors";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { benefits, methodPillars, siteInfo } from "@/data/site";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";

export const metadata: Metadata = {
  title: "Karate Shotokan",
  description:
    "Origens, filosofia, metodologia e benefícios do Karate Shotokan."
};

const timeline = [
  ["1868", "Gichin Funakoshi nasce em Shuri, Okinawa."],
  [
    "1922",
    "Funakoshi apresenta o Karate de Okinawa em uma exposição promovida pelo Ministério da Educação, em Tóquio, e passa a ensiná-lo no Japão."
  ],
  [
    "1929",
    "Funakoshi adota a escrita de Karate como “mãos vazias” e consolida o termo Karate-Do."
  ],
  [
    "1939",
    "O dojo Shotokan é inaugurado em Tóquio; “Shoto” era o pseudônimo literário de Funakoshi."
  ],
  [
    "Pós-guerra",
    "Seguidores de Funakoshi organizam a Japan Karate Association (JKA), tendo o mestre como principal referência."
  ],
  [
    "1957",
    "Funakoshi falece; seus ensinamentos continuam sendo transmitidos por dojos de diferentes linhagens."
  ]
];

export default function ShotokanPage() {
  return (
    <>
      <PageHero
        eyebrow="Karate Shotokan"
        title="O caminho das mãos vazias, explicado para quem está começando."
        text="De Okinawa ao mundo: o que é o Karate, o que torna o estilo Shotokan único e como ele é treinado no Mushinkan."
        mark="松濤館"
      />

      <PageAnchors
        items={[
          { label: "Origens", href: "#origens" },
          { label: "Funakoshi", href: "#funakoshi" },
          { label: "Como se treina", href: "#metodo" },
          { label: "Benefícios", href: "#beneficios" }
        ]}
      />

      <section className={sharedStyles.section} id="origens">
        <div className={`${sharedStyles.wideContainer} ${pageStyles.twoCol}`}>
          <div>
            <p className={sharedStyles.eyebrow}>Origens</p>
            <h2>
              Nascido em Okinawa, entre tradições locais e influências
              chinesas.
            </h2>
            <p>
              O Karate não surgiu em um único momento. Ele se formou
              gradualmente no Reino de Ryukyu a partir de práticas locais de
              combate conhecidas como <em>ti</em> ou <em>te</em> e do intenso
              intercâmbio cultural de Okinawa com a China.
            </p>
            <p>
              Restrições ao porte de armas impostas em diferentes períodos
              fazem parte desse contexto, mas não explicam sozinhas a origem
              da arte. Ao longo dos séculos XVIII e XIX, esses conhecimentos
              foram preservados e organizados até contribuírem para as escolas
              modernas de Karate.
            </p>
          </div>
          <MediaBlock
            className={pageStyles.tigerMedia}
            label="Símbolo histórico · tigre do Shotokan"
            src="/images/shotokan-tiger.png"
          />
        </div>
      </section>

      <section className={sharedStyles.sectionTight} id="funakoshi">
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.twoColStart}`}
        >
          <div>
            <p className={sharedStyles.eyebrow}>Gichin Funakoshi</p>
            <h2>O pai do Shotokan.</h2>
            <p>
              Shotokan significa Casa de Shoto, pseudônimo com que Funakoshi
              assinava seus poemas. Mais que um estilo, ele deixou uma
              filosofia: técnica precisa e desenvolvimento do caráter pelo
              treino.
            </p>
          </div>
          <div className={pageStyles.timeline}>
            {timeline.map(([year, text]) => (
              <div className={pageStyles.timelineItem} key={year}>
                <strong>{year}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={pageStyles.darkPanel} id="metodo">
        <div className={sharedStyles.wideContainer}>
          <SectionHeading
            eyebrow="Como se treina"
            title="Os três pilares, e o aquecimento que vem antes."
            text="Antes do trabalho técnico, a aula começa com o aquecimento e a preparação do corpo. Depois, do básico ao avançado, o treino se organiza em três pilares: Kihon, Kata e Kumite."
          />
          <div className={pageStyles.pillarGrid}>
            {methodPillars.map((pillar) => (
              <article className={pageStyles.pillar} key={pillar.title}>
                <div className={sharedStyles.jpMark}>{pillar.kanji}</div>
                <h3>
                  {pillar.title} <span>· {pillar.subtitle}</span>
                </h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sharedStyles.section} id="beneficios">
        <div className={sharedStyles.wideContainer}>
          <SectionHeading
            eyebrow="Benefícios"
            title="O que a prática desenvolve."
            text="O conteúdo atual lista benefícios físicos, mentais, emocionais e sociais. Aqui eles viram uma leitura enxuta."
          />
          <div className={pageStyles.benefitList}>
            {benefits.map((benefit) => (
              <div className={pageStyles.benefitItem} key={benefit.title}>
                <strong>{benefit.title}</strong>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sharedStyles.sectionTight}>
        <div className={`${sharedStyles.wideContainer} ${pageStyles.twoCol}`}>
          <div>
            <p className={sharedStyles.eyebrow}>No tatame</p>
            <h2>Tudo isso é o que você treina no Mushinkan, toda semana.</h2>
            <p>
              Karate Shotokan tradicional, do iniciante ao avançado, com turmas
              de segunda a sexta na Vila Mariana.
            </p>
          </div>
          <div className={sharedStyles.buttonRow}>
            <ButtonLink href={siteInfo.whatsappExperimental}>
              Agendar aula experimental
            </ButtonLink>
            <ButtonLink href="/aulas-e-horarios" variant="secondary">
              Ver aulas e horários
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        title="A filosofia fica real quando você pisa no tatame."
        text="Conheça o método, tire dúvidas e agende uma aula experimental."
      />
    </>
  );
}
