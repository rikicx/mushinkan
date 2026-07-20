import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import styles from "./Shared.module.css";

type Breadcrumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 ? " / " : null}
          <Link className={styles.inlineLink} href={item.href}>
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
