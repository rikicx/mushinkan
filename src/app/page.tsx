import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { RouteTransitionLink as Link } from "@/components/RouteTransitionLink";
import { ClassGrid } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { HeroMedia } from "@/components/HeroMedia";
import { LocationSection } from "@/components/LocationSection";
import { MediaBlock } from "@/components/MediaBlock";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  apix,
  benefits,
  classGroups,
  faqs,
  googleReviews,
  methodPillars,
  siteInfo
} from "@/data/site";
import pageStyles from "./pages.module.css";
import sharedStyles from "@/components/Shared.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mushinkan | Karate Shotokan na Vila Mariana",
    description:
      "Aulas de Karate Shotokan tradicional para crianças e adultos na Vila Mariana. Agende uma aula experimental pelo WhatsApp.",
    url: "/",
    siteName: "Mushinkan Karate Shotokan Tradicional",
    images: ["/images/dojo-treino-panoramica.jpg"],
    locale: "pt_BR",
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <section className={pageStyles.hero}>
        <HeroMedia
          className={pageStyles.heroBg}
          image={apix("3bbfef0aa6a84540afe55ebf0bf410d5.jpg")}
          videoSrc="/assets/videos/mushinkan-hero.mp4"
        />
        <div className={pageStyles.heroLayerBottom} aria-hidden="true" />
        <div className={pageStyles.heroLayerSide} aria-hidden="true" />
        <div className={pageStyles.heroDots} aria-hidden="true" />
        <div className={pageStyles.heroInner}>
          <p className={sharedStyles.eyebrow}>
            Dojo de Karate Shotokan · Vila Mariana, São Paulo
          </p>
          <h1>Tradição, disciplina e evolução através do Karate Shotokan.</h1>
          <p>
            Mais que uma academia: um dojo onde <strong>Kihon, Kata e
            Kumite</strong> são cultivados com autenticidade, do iniciante ao
            avançado. <strong>Nenhuma experiência é necessária</strong> para
            começar.
          </p>
          <div className={sharedStyles.buttonRow} style={{ marginTop: 32 }}>
            <ButtonLink href={siteInfo.whatsappExperimental}>
              Agendar aula experimental
            </ButtonLink>
            <ButtonLink
              className={pageStyles.heroGhostButton}
              href="/aulas-e-horarios"
              variant="dark"
            >
              Ver aulas e horários
            </ButtonLink>
          </div>
        </div>
        <div className={pageStyles.trustStrip}>
          <div className={pageStyles.trustBar}>
            <div className={pageStyles.trustItem}>
              <strong>Instrutor-chefe</strong>
              Sensei Carlos Rocha · 7º Dan JKA
            </div>
            <div className={pageStyles.trustItem}>
              <strong>Karate Shotokan tradicional</strong>
              Kihon, Kata e Kumite
            </div>
            <div className={pageStyles.trustItem}>
              <strong>Infantil e adulto</strong>
              Do primeiro treino ao avançado
            </div>
            <div className={pageStyles.trustItem}>
              <strong>Segunda a sexta</strong>
              Manhã, tarde e noite
            </div>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <Reveal className={sharedStyles.wideContainer}>
          <SectionHeading
            title="Uma turma para cada fase."
            action={
              <Link className={sharedStyles.inlineLink} href="/aulas-e-horarios">
                Ver grade completa
              </Link>
            }
          />
          <ClassGrid groups={classGroups} />
        </Reveal>
      </section>

      <section
        aria-labelledby="google-reviews-title"
        className={pageStyles.reviewsSection}
        id="avaliacoes"
      >
        <Reveal className={sharedStyles.wideContainer} variant="stagger">
          <div className={pageStyles.reviewsHeader}>
            <div>
              <p className={sharedStyles.eyebrow}>Avaliações no Google</p>
              <h2 id="google-reviews-title">Quem treina aqui recomenda.</h2>
            </div>
            <div className={pageStyles.reviewScore}>
              <strong>{siteInfo.googleRating}</strong>
              <div>
                <span
                  aria-label={`${siteInfo.googleRating} de 5 estrelas`}
                  className={pageStyles.reviewStars}
                  role="img"
                >
                  <span aria-hidden="true">★★★★★</span>
                </span>
                <span>{siteInfo.googleReviewCount} avaliações</span>
              </div>
            </div>
          </div>

          <div className={pageStyles.reviewList}>
            {googleReviews.map((review) => (
              <blockquote className={pageStyles.review} key={review.author}>
                <p>“{review.text}”</p>
                <footer>
                  <strong>{review.author}</strong>
                  <span>Avaliação no Google</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <a
            className={pageStyles.googleReviewsLink}
            href={siteInfo.googleReviewsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Ver as {siteInfo.googleReviewCount} avaliações no Google
          </a>
        </Reveal>
      </section>

      <section
        className={`${sharedStyles.sectionTight} ${pageStyles.firstLessonSection}`}
      >
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.firstLessonGrid}`}
        >
          <Reveal variant="stagger">
            <h2>Sua primeira aula é mais simples do que você imagina.</h2>
            <p>
              Você não precisa decidir nada hoje — nem saber nada de Karate.
              Converse com quem ensina, tire suas dúvidas e venha conhecer o
              dojo de perto.
            </p>
            <div className={sharedStyles.buttonRow} style={{ marginTop: 24 }}>
              <ButtonLink href={siteInfo.whatsappExperimental}>
                Conversar com um instrutor
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal className={pageStyles.steps} delay={90} variant="stagger">
            <Step
              number="1"
              title="Converse com um instrutor"
              text="No WhatsApp, quem responde é um instrutor do dojo. Pergunte o que quiser e conte se a aula é para você ou para seu filho."
            />
            <Step
              number="2"
              title="Encontre a turma certa"
              text="O instrutor indica a turma e o horário mais adequados para o seu momento — sem pressa e sem compromisso."
            />
            <Step
              number="3"
              title="Venha experimentar"
              text="Participe de uma aula, sinta o ambiente do dojo e só depois decida se quer continuar. A primeira aula é um convite, não um contrato."
            />
          </Reveal>
        </div>
      </section>

      <section
        className={`${sharedStyles.sectionTight} ${pageStyles.dojoStatementSection}`}
      >
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.dojoStatementGrid}`}
        >
          <Reveal variant="stagger">
            <h2>Um dojo, não uma academia.</h2>
            <p>
              Dojo, em japonês, significa “o lugar onde se pratica o
              caminho”. Aqui, a busca pela <strong>perfeição técnica</strong>,
              a <strong>disciplina</strong> e o <strong>respeito</strong>{" "}
              formam a base de cada treino — no coração da Vila Mariana, um
              refúgio para quem busca evolução física e mental.
            </p>
            <p>
              Do iniciante ao avançado, cada aluno mergulha nas raízes do
              Karate em um ambiente que respira tradição.
            </p>
          </Reveal>
          <Reveal
            className={pageStyles.benefitList}
            delay={90}
            variant="stagger"
          >
            {benefits.map((benefit) => (
              <div className={pageStyles.benefitItem} key={benefit.title}>
                <strong>{benefit.title}</strong>
                <span>{benefit.text}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={pageStyles.darkPanel}>
        <Reveal className={sharedStyles.wideContainer} variant="stagger">
          <SectionHeading
            title="Depois do aquecimento, três pilares: Kihon, Kata e Kumite."
            text="A aula começa preparando corpo e mente. Depois vêm fundamentos, formas e combate, trabalhados do primeiro treino ao nível avançado."
            action={
              <Link
                className={sharedStyles.inlineLink}
                href="/karate-shotokan#metodo"
              >
                Entenda o método
              </Link>
            }
          />
          <div className={pageStyles.pillarRow}>
            {methodPillars.map((pillar) => (
              <article className={pageStyles.pillarCol} key={pillar.title}>
                <div className={sharedStyles.jpMark}>{pillar.kanji}</div>
                <h3>
                  {pillar.title} <span>· {pillar.subtitle}</span>
                </h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={sharedStyles.section}>
        <Reveal
          className={`${sharedStyles.wideContainer} ${pageStyles.teamEditorial}`}
          variant="stagger"
        >
          <MediaBlock
            className={pageStyles.teamPhoto}
            label="Foto · instrutores e alunos em treino no tatame"
            src="/images/dojo-seiza.jpg"
          />
          <div>
            <p className={sharedStyles.eyebrow}>Equipe de instrutores</p>
            <h2>Nossa equipe de instrutores.</h2>
            <p>
              Na Mushinkan, os alunos treinam com uma <strong>equipe de
              instrutores qualificada e comprometida</strong> com a preservação
              do Karate Shotokan tradicional.
            </p>
            <p>
              Com orientação técnica, disciplina e respeito, a equipe acompanha
              o desenvolvimento de cada aluno — do primeiro treino ao exame de
              faixa.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link
                className={sharedStyles.inlineLink}
                href="/o-dojo#instrutores"
              >
                Conheça nossa equipe
              </Link>
            </p>
          </div>
        </Reveal>
      </section>

      <section className={pageStyles.preceptBand}>
        <div className={sharedStyles.container}>
          <Reveal
            as="figure"
            className={pageStyles.precept}
            variant="stagger"
          >
            <span aria-hidden="true" className={pageStyles.preceptMark}>
              礼
            </span>
            <p className={sharedStyles.eyebrow}>
              Conheça a filosofia do Karate
            </p>
            <blockquote>
              <p>“O Karatê-Do começa e termina com o respeito.”</p>
            </blockquote>
            <figcaption className={pageStyles.preceptText}>
              Este é o primeiro dos <strong>Niju Kun</strong>, os vinte
              princípios escritos por <strong>Gichin Funakoshi</strong>,
              mestre que desenvolveu e difundiu o Karate Shotokan moderno. Na
              Mushinkan, esses princípios orientam cada treino, do cumprimento
              na entrada do tatame ao fim da aula.
            </figcaption>
          </Reveal>
          <Reveal delay={240}>
            <p className={pageStyles.preceptAction}>
              <Link
                className={sharedStyles.inlineLink}
                href="/conteudos/niju-kun"
              >
                Conheça os 20 princípios
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className={sharedStyles.sectionTight}>
        <Reveal
          className={`${sharedStyles.container} ${pageStyles.faqList}`}
          variant="stagger"
        >
          <SectionHeading title="Perguntas frequentes." />
          {faqs.slice(0, 3).map((faq) => (
            <article className={pageStyles.faqItem} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
          <p className={pageStyles.faqMore}>
            <strong>Ainda tem dúvidas?</strong>{" "}
            <Link className={sharedStyles.inlineLink} href="/faq">
              Veja todas as perguntas frequentes
            </Link>
          </p>
        </Reveal>
      </section>

      <LocationSection animated />

      <CTASection animated title="Pronto para conhecer o dojo?" />
    </>
  );
}

function Step({
  number,
  title,
  text
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className={pageStyles.step}>
      <div className={pageStyles.stepNumber}>{number}</div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}
