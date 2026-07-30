import type { ReactNode } from "react";
import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import type { Faq } from "@/data/site";
import styles from "./Shared.module.css";

export function FaqAnswer({ faq }: { faq: Faq }) {
  if (!faq.links?.length) {
    return faq.answer;
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  faq.links.forEach((link, index) => {
    const start = faq.answer.indexOf(link.label, cursor);

    if (start === -1) {
      return;
    }

    if (start > cursor) {
      parts.push(faq.answer.slice(cursor, start));
    }

    const linkedLabel = link.href.startsWith("/") ? (
      <Link className={styles.inlineLink} href={link.href}>
        {link.label}
      </Link>
    ) : (
      <a className={styles.inlineLink} href={link.href}>
        {link.label}
      </a>
    );

    parts.push(
      <span key={`${link.label}-${index}`}>{linkedLabel}</span>
    );
    cursor = start + link.label.length;
  });

  if (cursor < faq.answer.length) {
    parts.push(faq.answer.slice(cursor));
  }

  return <>{parts}</>;
}
