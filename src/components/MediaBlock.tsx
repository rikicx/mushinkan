import styles from "./Shared.module.css";

type MediaBlockProps = {
  label: string;
  src?: string;
  className?: string;
  objectPosition?: string;
  imageScale?: number;
};

export function MediaBlock({
  label,
  src,
  className,
  objectPosition,
  imageScale
}: MediaBlockProps) {
  const classes = [styles.media, className].filter(Boolean).join(" ");
  const imageStyle =
    objectPosition || imageScale
      ? {
          ...(objectPosition ? { objectPosition } : {}),
          ...(imageScale
            ? {
                transform: `scale(${imageScale})`,
                transformOrigin: objectPosition || "center"
              }
            : {})
        }
      : undefined;

  return (
    <div className={classes}>
      {src ? (
        <img
          src={src}
          alt={label}
          loading="lazy"
          style={imageStyle}
        />
      ) : (
        <span className={styles.mediaLabel}>{label}</span>
      )}
    </div>
  );
}
