// src/utils/faviconConfig.js

// Paths are relative to site root (public/)
export const faviconSets = {
    light: {
      chrome: "/favicons/bllack.ico",
      edge: "/favicons/bllack.ico",
      firefox: "/favicons/bllack.ico",
      opera: "/favicons/bllack.ico",
      safari: "/favicons/bllack.ico", // fallback to .ico since no SVG present
      other: "/favicons/bllack.ico",
      appleTouch: "/favicons/bllack.ico", // iOS will scale the .ico if png not present
    },
    dark: {
      chrome: "/favicons/white.ico",
      edge: "/favicons/white.ico",
      firefox: "/favicons/white.ico",
      opera: "/favicons/white.ico",
      safari: "/favicons/white.ico",
      other: "/favicons/white.ico",
      appleTouch: "/favicons/white.ico",
    },
  };
  