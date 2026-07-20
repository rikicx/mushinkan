import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import styles from "./Shared.module.css";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  const variantClass =
    variant === "secondary"
      ? styles.buttonSecondary
      : variant === "dark"
        ? styles.buttonDark
        : styles.button;
  const classes = [variantClass, className].filter(Boolean).join(" ");
  const external = href.startsWith("http");

  if (external) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
