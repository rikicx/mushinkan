import styles from "./Shared.module.css";

type MediaBlockProps = {
  label: string;
  src?: string;
  className?: string;
  objectPosition?: string;
};

export function MediaBlock({
  label,
  src,
  className,
  objectPosition
}: MediaBlockProps) {
  const classes = [styles.media, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {src ? (
        <img
          src={src}
          alt={label}
          loading="lazy"
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <span className={styles.mediaLabel}>{label}</span>
      )}
    </div>
  );
}
