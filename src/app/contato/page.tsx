import { ButtonLink } from "@/components/ButtonLink";
import { PageAnchors } from "@/components/PageAnchors";
import { PageHero } from "@/components/PageHero";
import { siteInfo } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import pageStyles from "@/app/pages.module.css";
import sharedStyles from "@/components/Shared.module.css";
import contactStyles from "./Contact.module.css";

export const metadata = createPageMetadata({
  title: "Contato",
  description:
    "Fale com o Dojo Mushinkan pelo WhatsApp e veja endereço, mapa e como chegar ao dojo na Vila Mariana, São Paulo.",
  path: "/contato"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contato"
        title="Fale direto com o dojo."
        text="Sem formulário: a conversa acontece no WhatsApp, com resposta de quem treina."
        mark="無"
      />

      <PageAnchors
        items={[
          { label: "WhatsApp", href: "#whatsapp" },
          { label: "Informações", href: "#informacoes" },
          { label: "Mapa e rota", href: "#mapa" }
        ]}
      />

      <section className={sharedStyles.section}>
        <div
          className={`${sharedStyles.wideContainer} ${contactStyles.grid}`}
        >
          <h2 className={contactStyles.mapTitle} id="mapa">
            Mapa e rota
          </h2>

          <iframe
            className={`${sharedStyles.mapFrame} ${contactStyles.mapFrame}`}
            src={siteInfo.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa para o Dojo Mushinkan"
          />

          <div className={contactStyles.contactColumn}>
            <a
              className={`${pageStyles.featurePost} ${contactStyles.whatsapp}`}
              href={siteInfo.whatsappExperimental}
              id="whatsapp"
            >
              <div
                className={`${pageStyles.featurePostBody} ${contactStyles.whatsappBody}`}
              >
                <span className={sharedStyles.tag}>WhatsApp</span>
                <h2>{siteInfo.whatsappDisplay}</h2>
                <p>Agendar aula experimental ou tirar dúvidas.</p>
                <span
                  className={`${sharedStyles.inlineLink} ${contactStyles.contactLink}`}
                >
                  Chamar agora
                </span>
              </div>
            </a>

            <div
              className={`${pageStyles.infoCard} ${contactStyles.info}`}
              id="informacoes"
            >
              <h2 className={pageStyles.utilityHeading}>
                Informações práticas
              </h2>
              <div
                className={`${pageStyles.infoRows} ${contactStyles.infoRows}`}
              >
                <div
                  className={`${pageStyles.infoRow} ${contactStyles.infoRow}`}
                >
                  <strong>Endereço</strong>
                  <span>
                    {siteInfo.address}
                    <br />
                    {siteInfo.district} · {siteInfo.city}
                  </span>
                </div>
                <div
                  className={`${pageStyles.infoRow} ${contactStyles.infoRow}`}
                >
                  <strong>Horários de treino</strong>
                  <span>Segunda a sexta · manhã, tarde e noite</span>
                </div>
                <div
                  className={`${pageStyles.infoRow} ${contactStyles.infoRow}`}
                >
                  <strong>Como chegar</strong>
                  <span>{siteInfo.transitNote}</span>
                </div>
                <div
                  className={`${pageStyles.infoRow} ${contactStyles.infoRow}`}
                >
                  <strong>Redes sociais</strong>
                  <span>
                    {siteInfo.social.map((item, index) => (
                      <span key={item.href}>
                        {index > 0 ? " · " : null}
                        <a href={item.href}>{item.label}</a>
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`${pageStyles.infoCard} ${contactStyles.visit}`}
            >
              <strong>Prefere ver antes de falar?</strong>
              <p>
                Visite durante um treino. Consulte a grade e confirme o melhor
                horário pelo WhatsApp.
              </p>
              <div
                className={`${sharedStyles.buttonRow} ${contactStyles.buttonRow}`}
              >
                <ButtonLink href="/aulas-e-horarios" variant="secondary">
                  Ver horários
                </ButtonLink>
                <ButtonLink href={siteInfo.whatsappLocation}>
                  Confirmar localização
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
