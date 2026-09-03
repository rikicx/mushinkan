"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GooglePageView() {
  const pathname = usePathname();
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer.push(args);
      });

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title
    });
  }, [pathname]);

  return null;
}
