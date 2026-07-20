"use client";

import NextLink from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useRouteTransition } from "./RouteTransitionContext";

type RouteTransitionLinkProps = ComponentProps<typeof NextLink>;

export function RouteTransitionLink({
  href,
  download,
  onClick,
  replace,
  scroll,
  target,
  ...props
}: RouteTransitionLinkProps) {
  const transition = useRouteTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !transition ||
      event.button !== 0 ||
      event.detail === 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (target !== undefined && target !== "_self") ||
      download !== undefined ||
      typeof href !== "string"
    ) {
      return;
    }

    const destination = new URL(href, window.location.href);
    const current = new URL(window.location.href);
    const samePath = destination.pathname === current.pathname;

    if (
      destination.origin !== current.origin ||
      samePath ||
      (destination.protocol !== "http:" && destination.protocol !== "https:")
    ) {
      return;
    }

    event.preventDefault();
    transition.navigate(
      `${destination.pathname}${destination.search}${destination.hash}`,
      { replace, scroll }
    );
  };

  return (
    <NextLink
      {...props}
      download={download}
      href={href}
      onClick={handleClick}
      replace={replace}
      scroll={scroll}
      target={target}
    />
  );
}
