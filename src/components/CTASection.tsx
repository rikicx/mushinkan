import { siteInfo } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";
import styles from "./Shared.module.css";

type CTASectionProps = {
  title?: string;
  text?: string;
  buttonText?: string;
  animated?: boolean;
};

export function CTASection({
  title = "Venha sentir a energia do Karate Shotokan em um treino de verdade.",
  text = "Agende uma aula experimental e vivencie os princípios do dojo. Estamos prontos para te receber.",
  buttonText = "Agendar aula experimental no WhatsApp",
  animated = false
}: CTASectionProps) {
  const content = (
    <>
      <p className={styles.eyebrow}>OSS!</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={styles.buttonRow} style={{ marginTop: 28 }}>
        <ButtonLink href={siteInfo.whatsappExperimental}>
          {buttonText}
        </ButtonLink>
      </div>
    </>
  );

  return (
    <section className={styles.ctaBand}>
      {animated ? (
        <Reveal className={styles.wideContainer} variant="stagger">
          {content}
        </Reveal>
      ) : (
        <div className={styles.wideContainer}>{content}</div>
      )}
    </section>
  );
}
