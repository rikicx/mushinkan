import styles from "./Shared.module.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: React.ReactNode;
  style?: React.CSSProperties;
  fullWidth?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  style,
  fullWidth = false
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading} style={style}>
      <div
        className={`${styles.sectionHeadingText} ${fullWidth ? styles.sectionHeadingTextFull : ""}`}
      >
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action ? <div className="action">{action}</div> : null}
    </div>
  );
}
