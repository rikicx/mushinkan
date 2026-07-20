"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  RouteTransitionContext,
  type NavigationOptions
} from "./RouteTransitionContext";
import styles from "./RouteTransition.module.css";

const SHOW_DELAY_MS = 160;
const MIN_VISIBLE_MS = 420;
const REDUCED_MOTION_MIN_VISIBLE_MS = 100;
const EXIT_DURATION_MS = 140;
const SAFETY_TIMEOUT_MS = 8000;

type LoaderPhase = "idle" | "visible" | "exiting";

type ActiveNavigation = {
  shownAt: number | null;
};

export function RouteTransitionProvider({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [phase, setPhase] = useState<LoaderPhase>("idle");
  const phaseRef = useRef<LoaderPhase>("idle");
  const previousPathRef = useRef(pathname);
  const navigationRef = useRef<ActiveNavigation | null>(null);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePhase = useCallback((nextPhase: LoaderPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }, []);

  const clearTimer = (timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const clearAllTimers = useCallback(() => {
    clearTimer(showTimerRef);
    clearTimer(hideTimerRef);
    clearTimer(exitTimerRef);
    clearTimer(safetyTimerRef);
  }, []);

  const resetLoader = useCallback(() => {
    clearAllTimers();
    navigationRef.current = null;
    updatePhase("idle");
  }, [clearAllTimers, updatePhase]);

  const exitLoader = useCallback(() => {
    if (!navigationRef.current || phaseRef.current === "exiting") {
      return;
    }

    updatePhase("exiting");
    exitTimerRef.current = setTimeout(resetLoader, EXIT_DURATION_MS);
  }, [resetLoader, updatePhase]);

  const completeNavigation = useCallback(() => {
    const navigation = navigationRef.current;

    if (!navigation) {
      return;
    }

    clearTimer(showTimerRef);
    clearTimer(safetyTimerRef);

    if (navigation.shownAt === null) {
      resetLoader();
      return;
    }

    const visibleFor = Date.now() - navigation.shownAt;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const minimumVisible = prefersReducedMotion
      ? REDUCED_MOTION_MIN_VISIBLE_MS
      : MIN_VISIBLE_MS;
    const remaining = Math.max(0, minimumVisible - visibleFor);
    hideTimerRef.current = setTimeout(exitLoader, remaining);
  }, [exitLoader, resetLoader]);

  const beginLoaderCycle = useCallback(() => {
    clearAllTimers();
    navigationRef.current = { shownAt: null };

    showTimerRef.current = setTimeout(() => {
      if (!navigationRef.current) {
        return;
      }

      navigationRef.current.shownAt = Date.now();
      updatePhase("visible");
    }, SHOW_DELAY_MS);

    safetyTimerRef.current = setTimeout(() => {
      if (phaseRef.current === "idle") {
        resetLoader();
        return;
      }

      exitLoader();
    }, SAFETY_TIMEOUT_MS);
  }, [clearAllTimers, exitLoader, resetLoader, updatePhase]);

  const navigate = useCallback(
    (href: string, options: NavigationOptions = {}) => {
      beginLoaderCycle();

      startTransition(() => {
        if (options.replace) {
          router.replace(href, { scroll: options.scroll });
          return;
        }

        router.push(href, { scroll: options.scroll });
      });
    },
    [beginLoaderCycle, router]
  );

  useEffect(() => {
    if (previousPathRef.current === pathname) {
      return;
    }

    previousPathRef.current = pathname;
    completeNavigation();
  }, [completeNavigation, pathname]);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === previousPathRef.current) {
        return;
      }

      beginLoaderCycle();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [beginLoaderCycle]);

  const loaderActive = phase !== "idle";

  useEffect(() => {
    if (!loaderActive) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loaderActive]);

  useEffect(
    () => () => {
      clearAllTimers();
    },
    [clearAllTimers]
  );

  return (
    <RouteTransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        aria-hidden="true"
        className={`${styles.overlay} ${styles[phase]}`}
        data-route-loader={phase}
      >
        <div className={styles.mark}>
          <span className={styles.ink} />
          <img
            alt=""
            className={`${styles.logoPiece} ${styles.symbol}`}
            src="/logos/mushinkan-logo-v.svg"
          />
          <img
            alt=""
            className={`${styles.logoPiece} ${styles.mu}`}
            src="/logos/mushinkan-logo-v.svg"
          />
          <img
            alt=""
            className={`${styles.logoPiece} ${styles.shin}`}
            src="/logos/mushinkan-logo-v.svg"
          />
          <img
            alt=""
            className={`${styles.logoPiece} ${styles.kan}`}
            src="/logos/mushinkan-logo-v.svg"
          />
          <img
            alt=""
            className={`${styles.logoPiece} ${styles.seal}`}
            src="/logos/mushinkan-logo-v.svg"
          />
        </div>
      </div>
    </RouteTransitionContext.Provider>
  );
}
