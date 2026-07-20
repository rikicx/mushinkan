"use client";

import { createContext, useContext } from "react";

export type NavigationOptions = {
  replace?: boolean;
  scroll?: boolean;
};

type RouteTransitionContextValue = {
  navigate: (href: string, options?: NavigationOptions) => void;
};

export const RouteTransitionContext =
  createContext<RouteTransitionContextValue | null>(null);

export function useRouteTransition() {
  return useContext(RouteTransitionContext);
}
