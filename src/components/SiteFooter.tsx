import { navItems, siteInfo } from "@/data/site";
import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <img
            alt="Mushinkan"
            className={styles.logo}
            height={149}
            src="/logos/mushinkan-logo-v.svg"
            width={45}
          />
          <p>
            Dojo de Karate Shotokan tradicional.
            <br />
            {siteInfo.address}
            <br />
            {siteInfo.district} · {siteInfo.city}
          </p>
        </div>

        <div className={styles.column}>
          <strong>Páginas</strong>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/faq">Perguntas frequentes</Link>
        </div>

        <div className={styles.column}>
          <strong>Social</strong>
          {siteInfo.social.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.column}>
          <strong>Começar</strong>
          <a className={styles.cta} href={siteInfo.whatsappExperimental}>
            Agendar aula experimental
          </a>
          <span>WhatsApp · {siteInfo.whatsappDisplay}</span>
        </div>

        <a
          className={styles.credit}
          href="https://henriquesilva.design"
          rel="noopener noreferrer"
          target="_blank"
        >
          henriquesilva.design
        </a>
      </div>
    </footer>
  );
}
