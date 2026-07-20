"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  as?: "div" | "figure";
  className?: string;
  delay?: number;
  variant?: "rise" | "fade" | "photo" | "stagger";
};

/**
 * Scroll-triggered reveal, played once per page load.
 *
 * Server-rendered content stays fully visible, so the page works without
 * JavaScript and nothing meaningful is hidden before hydration. After
 * hydration, only elements still below the viewport are hidden and then
 * revealed when they enter it. Reduced motion disables the system entirely.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "rise"
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const element = ref.current;

    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      element.getBoundingClientRect().top < window.innerHeight * 0.85
    ) {
      return;
    }

    setPhase("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [
    styles[variant],
    phase === "hidden" ? styles.hidden : "",
    phase === "shown" ? styles.shown : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={classes}
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
