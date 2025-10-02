// src/utils/usePrefersColorScheme.js
import { useEffect, useState } from "react";

/**
 * Returns "light" or "dark" based on prefers-color-scheme.
 * Safe for SSR because it guards window when computing initial state.
 */
export default function usePrefersColorScheme() {
  // safe initial value (won't throw on server)
  const getInitial = () => {
    if (typeof window === "undefined") return "light";
    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    return mq && mq.matches ? "dark" : "light";
  };

  const [scheme, setScheme] = useState(getInitial);

  useEffect(() => {
    if (typeof window === "undefined") return; // no-op on server

    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    if (!mq) return;

    const onChange = (e) => setScheme(e.matches ? "dark" : "light");

    // preferred modern event API
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    // fallback for older browsers
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  return scheme;
}
