import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { RouteTransitionLink as Link } from "@/components/RouteTransitionLink";
import { ClassGrid } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { LocationSection } from "@/components/LocationSection";
import { PageAnchors } from "@/components/PageAnchors";
import { PageHero } from "@/components/PageHero";
import { ScheduleTable } from "@/components/ScheduleTable";
import { SectionHeading } from "@/components/SectionHeading";
import { classGroups, siteInfo } from "@/data/site";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";

export const metadata: Metadata = {
  title: "Aulas e Horários",
  description:
    "Turmas e horários de Karate Shotokan do Dojo Mushinkan na Vila Mariana."
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Aulas e horários"
        title="Existe uma aula para você. Veja quando treinar."
        text="Treinos de segunda a sexta, de manhã, à tarde e à noite, para crianças e adultos do iniciante ao avançado."
        mark="空手道"
      />

      <PageAnchors
        items={[
          { label: "Horários", href: "#horarios" },
          { label: "Turmas", href: "#turmas" },
          { label: "Localização", href: "#localizacao" },
          { label: "Primeira aula", href: "#primeira-aula" }
        ]}
      />

      <section className={sharedStyles.section} id="horarios">
        <div className={sharedStyles.wideContainer}>
          <SectionHeading
            eyebrow="Grade semanal"
            title="Confira os horários da semana."
            text="A grade mostra as aulas por período e nível. Em caso de dúvida, fale com o dojo para escolher o melhor treino."
          />
          <ScheduleTable />
        </div>
      </section>

      <section className={sharedStyles.sectionTight} id="turmas">
        <div className={sharedStyles.wideContainer}>
          <SectionHeading
            eyebrow="Turmas"
            title="Escolha a turma pelo momento de vida."
            text="Cada criança é avaliada individualmente pelos senseis. Para adultos, há opções do primeiro treino ao nível avançado."
          />
          <ClassGrid groups={classGroups} />
        </div>
      </section>

      <section className={sharedStyles.sectionTight}>
        <div className={`${sharedStyles.wideContainer} ${pageStyles.twoCol}`}>
          <div>
            <p className={sharedStyles.eyebrow}>Equipe</p>
            <h2>Instrutores do Mushinkan.</h2>
          </div>
          <div>
            <p>
              Uma equipe de instrutores acompanha os alunos em sua evolução,
              do primeiro treino às graduações mais avançadas.
            </p>
            <p style={{ marginTop: 18 }}>
              <Link
                className={sharedStyles.inlineLink}
                href="/o-dojo#instrutores"
              >
                Conheça toda a equipe
              </Link>
            </p>
          </div>
        </div>
      </section>

      <LocationSection id="localizacao" variant="full" />

      <section className={sharedStyles.section} id="primeira-aula">
        <div className={`${sharedStyles.wideContainer} ${pageStyles.twoCol}`}>
          <div className={pageStyles.darkPanel} style={{ padding: 40 }}>
            <h2>Como funciona a primeira aula</h2>
            <div className={pageStyles.steps} style={{ marginTop: 18 }}>
              <Step
                number="1"
                title="Chame no WhatsApp"
                text="Conte se a aula é para você ou para uma criança e fale um pouco sobre o objetivo."
              />
              <Step
                number="2"
                title="Combine o melhor horário"
                text="A equipe indica a turma adequada para a visita."
              />
              <Step
                number="3"
                title="Venha treinar"
                text="A primeira aula é para sentir o dojo e conhecer o método."
              />
            </div>
            <div className={sharedStyles.buttonRow} style={{ marginTop: 24 }}>
              <ButtonLink href={siteInfo.whatsappExperimental}>
                Agendar minha primeira aula
              </ButtonLink>
            </div>
          </div>

          <div className={pageStyles.infoCard}>
            <p className={sharedStyles.eyebrow}>O que levar</p>
            <div className={pageStyles.infoRows}>
              <Info
                label="Roupa"
                value="Roupa confortável de treino é suficiente."
              />
              <Info
                label="Kimono"
                value="Não é necessário para começar; pode ser adquirido depois."
              />
              <Info
                label="Agendamento"
                value="Combine a visita previamente pelo WhatsApp."
              />
            </div>
            <p>
              Na dúvida, pergunte no WhatsApp — e veja outras respostas nas{" "}
              <Link className={sharedStyles.inlineLink} href="/faq">
                perguntas frequentes
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="A pergunta principal é simples: qual aula combina com você?"
        text="Fale com o dojo, escolha o melhor horário e agende uma visita."
      />
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className={pageStyles.infoRow}>
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
}
