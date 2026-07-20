import styles from "./PageAnchors.module.css";

type PageAnchor = {
  label: string;
  href: `#${string}`;
};

export function PageAnchors({ items }: { items: PageAnchor[] }) {
  return (
    <nav className={styles.nav} aria-label="Nesta página">
      <span className={styles.label}>Nesta página</span>
      <div className={styles.scroller}>
        {items.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
