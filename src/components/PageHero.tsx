import pageStyles from "@/app/pages.module.css";
import sharedStyles from "./Shared.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  mark?: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  text,
  mark,
  children,
  compact = false
}: PageHeroProps) {
  return (
    <section
      className={`${pageStyles.pageHero} ${
        compact ? pageStyles.pageHeroCompact : ""
      }`}
    >
      {mark ? (
        <div aria-hidden="true" className={pageStyles.heroMark}>
          {mark}
        </div>
      ) : null}
      <div className={sharedStyles.wideContainer}>
        <p className={sharedStyles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
