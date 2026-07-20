"use client";

import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, siteInfo } from "@/data/site";
import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(`${href}/`));

  return (
    <>
      <header
        className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}
        data-menu-open={desktopMenu !== null}
        onBlur={(event) => {
          const nextTarget = event.relatedTarget as Node | null;

          if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
            setDesktopMenu(null);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setDesktopMenu(null);
          }
        }}
        onMouseLeave={() => setDesktopMenu(null)}
      >
        <div className={styles.inner}>
          <Link
            className={styles.brand}
            href="/"
            onClick={() => {
              setOpen(false);
              setDesktopMenu(null);
            }}
            aria-label="Mushinkan — página inicial"
          >
            <img
              alt="Mushinkan"
              className={styles.logoH}
              height={58}
              src="/logos/mushinkan-logo-h.svg"
              width={215}
            />
          </Link>

          <nav className={styles.nav} aria-label="Navegação principal">
            {navItems.map((item) => {
              const menuOpen = desktopMenu === item.href;
              const panelId = `submenu-${item.href.slice(1)}`;

              return (
                <div
                  className={styles.navItem}
                  key={item.href}
                  onFocus={() => setDesktopMenu(item.href)}
                  onMouseEnter={() => setDesktopMenu(item.href)}
                >
                  <Link
                    aria-controls={panelId}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    className={`${styles.navLink} ${
                      isActive(item.href) ? styles.active : ""
                    }`}
                    href={item.href}
                    onClick={() => setDesktopMenu(null)}
                  >
                    {item.label}
                  </Link>

                  <div
                    aria-hidden={!menuOpen}
                    className={styles.megaMenu}
                    data-open={menuOpen}
                    id={panelId}
                    inert={!menuOpen}
                  >
                    <div className={styles.megaInner}>
                      <div className={styles.megaBrand} aria-hidden="true">
                        <img
                          alt=""
                          className={styles.megaLogo}
                          height={396}
                          src="/logos/mushinkan-logo-v.svg"
                          width={138}
                        />
                      </div>

                      <div className={styles.megaContent}>
                        <p className={styles.megaTitle}>{item.label}</p>
                        <div className={styles.megaLinks}>
                          {item.sections.map((section) => (
                            <Link
                              className={styles.megaLink}
                              href={section.href}
                              key={section.href}
                              onClick={() => setDesktopMenu(null)}
                            >
                              <strong>{section.label}</strong>
                              <span>{section.description}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <a className={styles.cta} href={siteInfo.whatsappExperimental}>
            Agendar aula experimental
          </a>

          <button
            className={styles.menuButton}
            ref={menuButtonRef}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={styles.mobileOverlay}
        data-open={open}
        id="mobile-navigation"
        inert={!open}
      >
        <div className={styles.mobileTop}>
          <button
            className={styles.closeButton}
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" size={22} strokeWidth={2} />
          </button>
        </div>

        <div className={styles.mobileLayout}>
          <Link
            aria-label="Mushinkan — página inicial"
            className={styles.mobileBrand}
            href="/"
            onClick={() => setOpen(false)}
          >
            <img
              alt="Mushinkan"
              className={styles.logoV}
              height={198}
              src="/logos/mushinkan-logo-v.svg"
              width={69}
            />
          </Link>

          <div className={styles.mobileContent}>
            <nav className={styles.mobileNav} aria-label="Navegação mobile">
              {navItems.map((item) => (
                <Link
                  aria-current={isActive(item.href) ? "page" : undefined}
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              className={styles.mobileCta}
              href={siteInfo.whatsappExperimental}
              onClick={() => setOpen(false)}
            >
              Agendar aula experimental
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
