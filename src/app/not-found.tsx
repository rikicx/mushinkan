import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>404 · Página não encontrada</p>
          <h1>Este caminho não leva ao dojo.</h1>
          <p className={styles.description}>
            A página que você procura pode ter sido removida, renomeada ou
            nunca ter existido.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/">Voltar para o início</ButtonLink>
            <ButtonLink href="/aulas-e-horarios" variant="secondary">
              Ver aulas e horários
            </ButtonLink>
          </div>
        </div>

        <img
          alt=""
          aria-hidden="true"
          className={styles.logo}
          height={595}
          src="/logos/mushinkan-logo-v.svg"
          width={208}
        />
      </div>
    </section>
  );
}
