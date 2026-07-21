import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * True only after the component has mounted on the client. Returns false
 * during SSR and during the hydration-matching client render, so it's safe
 * to gate any browser-only read (DOM, localStorage, matchMedia...) without
 * causing a hydration mismatch.
 */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
