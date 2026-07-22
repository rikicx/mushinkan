import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import { siteInfo } from "@/data/site";
import styles from "./Shared.module.css";

type Breadcrumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  const structuredItems = [
    { label: "Início", href: "/" },
    ...items
  ];

  return (
    <>
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
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: structuredItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              item: `${siteInfo.siteUrl}${item.href}`
            }))
          })
        }}
        type="application/ld+json"
      />
    </>
  );
}
