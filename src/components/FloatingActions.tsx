"use client";

import { ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { siteInfo } from "@/data/site";
import styles from "./FloatingActions.module.css";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const threshold = Math.max(520, window.innerHeight * 0.8);
      setVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  };

  return (
    <div
      aria-hidden={!visible}
      className={`${styles.actions} ${visible ? styles.visible : ""}`}
      inert={!visible}
    >
      <a
        aria-label="Conversar com o Mushinkan pelo WhatsApp"
        className={styles.whatsapp}
        href={siteInfo.whatsappExperimental}
        rel="noopener noreferrer"
        target="_blank"
        title="Conversar pelo WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" size={23} />
      </a>
      <button
        aria-label="Voltar ao topo"
        className={styles.backToTop}
        onClick={scrollToTop}
        title="Voltar ao topo"
        type="button"
      >
        <ChevronUp aria-hidden="true" size={22} strokeWidth={2.2} />
      </button>
    </div>
  );
}
