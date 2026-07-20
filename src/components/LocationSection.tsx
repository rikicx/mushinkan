import { siteInfo } from "@/data/site";
import { Reveal } from "./Reveal";
import sharedStyles from "./Shared.module.css";
import styles from "./LocationSection.module.css";

type LocationSectionProps = {
  variant?: "compact" | "full";
  animated?: boolean;
  id?: string;
};

/**
 * Location block with address, Google Maps embed and route link.
 * "compact" is the Home preview; "full" is the complete version used on
 * practical pages and includes the WhatsApp action.
 */
export function LocationSection({
  variant = "compact",
  animated = false,
  id
}: LocationSectionProps) {
  const full = variant === "full";
  const Wrapper = animated ? Reveal : "div";

  return (
    <section
      className={`${full ? sharedStyles.section : sharedStyles.sectionTight} ${styles.section}`}
      id={id}
    >
      <Wrapper
        className={`${sharedStyles.wideContainer} ${styles.grid}`}
        {...(animated ? { variant: "stagger" as const } : {})}
      >
        <div>
          <p className={sharedStyles.eyebrow}>Onde estamos</p>
          <h2 className={styles.heading}>No coração da Vila Mariana.</h2>
          <address className={styles.address}>
            Mushinkan
            <br />
            Rua Domingos de Moraes, 2216
            <br />
            Vila Mariana — São Paulo, SP
          </address>
          <p className={styles.note}>
            A Mushinkan fica na Rua Domingos de Moraes, na Vila Mariana, com
            acesso fácil por transporte público e pelas principais vias da
            região.
          </p>
          <div className={sharedStyles.buttonRow} style={{ marginTop: 26 }}>
            <a
              className={sharedStyles.button}
              href={siteInfo.mapsRouteUrl}
              rel="noreferrer"
              target="_blank"
            >
              Ver rota no Google Maps
            </a>
            {full ? (
              <a
                className={sharedStyles.buttonSecondary}
                href={siteInfo.whatsappLocation}
              >
                Falar no WhatsApp
              </a>
            ) : null}
          </div>
        </div>
        <iframe
          allowFullScreen
          className={full ? `${styles.map} ${styles.mapFull}` : styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={siteInfo.mapEmbed}
          title="Mapa com a localização do Dojo Mushinkan — Rua Domingos de Moraes, 2216, Vila Mariana, São Paulo"
        />
      </Wrapper>
    </section>
  );
}
