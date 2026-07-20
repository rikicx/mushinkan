import type { Metadata } from "next";
import { RouteTransitionLink as Link } from "@/components/RouteTransitionLink";
import { FeaturedSensei, InstructorGrid } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { PageAnchors } from "@/components/PageAnchors";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { senseis } from "@/data/site";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";

export const metadata: Metadata = {
  title: "O Dojo",
  description:
    "A história, a tradição e os instrutores do Dojo Mushinkan, escola de Karate Shotokan tradicional na Vila Mariana, São Paulo."
};

export default function DojoPage() {
  const chief = senseis.find((sensei) => sensei.tier === "chief");
  const instructors = senseis.filter((sensei) => sensei.tier !== "chief");

  return (
    <>
      <PageHero
        eyebrow="O Dojo"
        title="Mushinkan: a casa da mente vazia."
        text="Mushin significa mente vazia. Diferente da atenção plena, que observa pensamentos e sensações sem julgamento, no mushin a mente não se prende nem interfere: a ação surge livre, espontânea, sem esforço e sem ego. Kan significa casa — o lugar onde isso se pratica."
        mark="無心館"
      />

      <PageAnchors
        items={[
          { label: "Tradição", href: "#tradicao" },
          { label: "História", href: "#historia" },
          { label: "O treino", href: "#treino" },
          { label: "Instrutores", href: "#instrutores" }
        ]}
      />

      <figure className={pageStyles.dojoBand}>
        <img
          alt="Turma adulta em treino no tatame do Mushinkan, com o banner do dojo ao fundo"
          src="/images/dojo-treino-panoramica.jpg"
        />
        <figcaption>
          Treino da turma adulta no tatame do Mushinkan, Vila Mariana
        </figcaption>
      </figure>

      <section className={sharedStyles.section} id="tradicao">
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.twoColStart}`}
        >
          <figure
            className={`${pageStyles.tallFigure} ${pageStyles.shomenFigure}`}
          >
            <img
              alt="Shomen do dojo: o altar, o retrato de Gichin Funakoshi e o quadro com o Dojo Kun, acima do nome Mushinkan pintado no piso"
              loading="lazy"
              src="/images/dojo-central.jpg"
            />
          </figure>
          <div>
            <p className={sharedStyles.eyebrow}>Tradição viva</p>
            <h2>A tradição está nas paredes — e em cada aula.</h2>
            <p>
              No fundo do tatame fica o shomen, o ponto mais respeitado do
              dojo. Ali estão o retrato de Gichin Funakoshi — o mestre que
              levou o Karate de Okinawa ao Japão e deu origem ao estilo
              Shotokan — e o Dojo Kun, os cinco princípios recitados ao fim de
              cada treino.
            </p>
            <p>
              Formação do caráter, fidelidade ao caminho da razão, espírito de
              esforço, respeito acima de tudo e contenção da agressividade:
              mais do que decoração, esses princípios são a medida de cada
              aula — é diante deles que toda turma começa e termina o treino.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link className={sharedStyles.inlineLink} href="/karate-shotokan">
                Entenda o Karate Shotokan
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className={pageStyles.darkPanel} id="historia">
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.twoColStart}`}
        >
          <div>
            <p className={sharedStyles.eyebrow}>História</p>
            <h2>Cinco décadas de Karate Shotokan.</h2>
            <p>
              O Mushinkan é liderado pelo Sensei Carlos Rocha, com trajetória
              no Karate desde os anos 1970 — registrada em campeonatos, cursos
              internacionais e na imprensa brasileira — e dedicado à
              preservação do Karate Shotokan tradicional.
            </p>
            <p>
              O acervo do dojo guarda recortes da Gazeta Esportiva, registros
              de 1978, a história do Karate Shotokan tradicional no Brasil e a
              festa dos 50 anos de Karate do Sensei.
            </p>
          </div>
          <div className={pageStyles.lineage}>
            <div className={pageStyles.lineageItem}>
              <strong>Anos 1970</strong>
              <span>
                Início da trajetória do Sensei Carlos Rocha no Karate, como
                competidor.
              </span>
            </div>
            <div className={pageStyles.lineageItem}>
              <strong>1978</strong>
              <span>
                Registro histórico da luta com Masahiko Tanaka, preservado no
                acervo do dojo.
              </span>
            </div>
            <div className={pageStyles.lineageItem}>
              <strong>7º Dan JKA</strong>
              <span>
                Primeiro brasileiro a alcançar o 7º Dan JKA, hoje instrutor
                chefe do Mushinkan.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section} id="treino">
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.twoColStart}`}
        >
          <div>
            <p className={sharedStyles.eyebrow}>O treino</p>
            <h2>Como é treinar no Mushinkan.</h2>
            <p>
              A aula começa com saudação e aquecimento, preparando corpo e
              mente para o treino. Em seguida, a prática trabalha três
              frentes: o Kihon, os fundamentos — bases, socos, chutes e
              defesas; o Kata, as sequências de movimentos que guardam a
              técnica do estilo; e o Kumite, o combate, introduzido em etapas
              e sempre com controle.
            </p>
            <p>
              Faixas diferentes treinam lado a lado com frequência: quem está
              começando aprende observando quem já caminhou mais, e quem é
              avançado refina o básico. É esse ciclo que mantém o nível
              técnico do dojo — e o ambiente acolhedor.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link
                className={sharedStyles.inlineLink}
                href="/aulas-e-horarios"
              >
                Ver aulas e horários
              </Link>
            </p>
          </div>
          <figure className={pageStyles.photoFigure}>
            <img
              alt="Alunos de faixas diferentes executando kata lado a lado durante a aula"
              loading="lazy"
              src="/images/dojo-kata.jpg"
            />
          </figure>
        </div>
      </section>

      <section className={sharedStyles.sectionTight} id="instrutores">
        <div className={sharedStyles.wideContainer}>
          <SectionHeading
            eyebrow="Senseis"
            title="A equipe de instrutores."
            text="Conheça os instrutores e suas trajetórias no Karate Shotokan."
          />
          {chief ? <FeaturedSensei sensei={chief} /> : null}
          <InstructorGrid people={instructors} />
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div
          className={`${sharedStyles.wideContainer} ${pageStyles.twoCol} ${pageStyles.twoColStart}`}
        >
          <figure className={pageStyles.photoFigure}>
            <img
              alt="Alunos de idades e graduações diferentes treinando juntos no tatame"
              loading="lazy"
              src="/images/dojo-todos-niveis.jpg"
            />
          </figure>
          <div>
            <p className={sharedStyles.eyebrow}>Comunidade</p>
            <h2>A vida no dojo não para no treino.</h2>
            <p>
              Exames de faixa, seminários com mestres convidados, campeonatos
              e confraternizações fazem parte da vivência do Mushinkan.
            </p>
            <p>
              Adultos e crianças, iniciantes e veteranos dividem o mesmo
              tatame — e é essa convivência que faz um dojo ser mais do que um
              lugar de treino.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="A melhor forma de conhecer o dojo é treinando." />
    </>
  );
}
