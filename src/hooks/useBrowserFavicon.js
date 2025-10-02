// src/hooks/useBrowserFavicon.js
import { useEffect } from "react";

/**
 * Detect browser name from navigator.userAgentData (preferred)
 * or from navigator.userAgent as fallback.
 * Returns one of: "chrome", "edge", "firefox", "safari", "opera", "ie", "other"
 */
function detectBrowser() {
  const nav = navigator;
  // Preferred modern API
  if (nav.userAgentData && Array.isArray(nav.userAgentData.brands)) {
    // userAgentData.brand strings are like "Chromium", "Google Chrome", "Microsoft Edge"
    const brands = nav.userAgentData.brands.map((b) => b.brand.toLowerCase()).join(" ");
    if (brands.includes("edge") || brands.includes("microsoft")) return "edge";
    if (brands.includes("chrome") || brands.includes("chromium") ) return "chrome";
    if (brands.includes("firefox")) return "firefox";
    if (brands.includes("opera")) return "opera";
    if (brands.includes("safari")) return "safari";
  }

  // Fallback: parse userAgent
  const ua = nav.userAgent || "";
  if (/edg(e|A|iOS)?\//i.test(ua)) return "edge";
  if (/OPR\//i.test(ua) || /Opera\//i.test(ua)) return "opera";
  if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua) && !/OPR\//i.test(ua)) return "chrome";
  if (/Firefox\//i.test(ua)) return "firefox";
  if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) return "safari";
  if (/MSIE |Trident\//i.test(ua)) return "ie";
  return "other";
}

/** update or create <link ...> tag in head */
function ensureLink(rel, attributes = {}) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  // set provided attributes (href, sizes, color, type...)
  Object.keys(attributes).forEach((k) => {
    link.setAttribute(k, attributes[k]);
  });
  return link;
}

/**
 * Main hook
 * options:
 *  - mapping: { chrome: '/favicons/chrome.ico', ... }
 *  - version: string for cache busting (e.g. build hash) — default ''
 *  - maskColor: color for Safari pinned tab mask-icon (optional)
 */
export default function useBrowserFavicon({
  mapping = {},
  version = "",
  maskColor = "#5bbad5",
} = {}) {
  useEffect(() => {
    const browser = detectBrowser();

    // Default mapping if user didn't pass one
    const defaults = {
      chrome: "/favicons/bllack.ico",
      firefox: "/favicons/white.ico",
      safari: "/favicons/white.ico",
      edge: "/favicons/bllack.ico",
      opera: "/favicons/white.ico",
      ie: "/favicons/favicon-ie.ico",
      other: "/favicons/favicon-default.ico",
    };

    const map = { ...defaults, ...mapping };
    // pick the favicon
    const faviconHref = (map[browser] || map.other) + (version ? `?v=${version}` : "");

    // Update <link rel="icon">
    ensureLink("icon", { href: faviconHref });

    // Also update common fallbacks / helpers:
    // 1) shortcut icon (some old browsers)
    ensureLink("shortcut icon", { href: faviconHref });

    // 2) apple touch icon (iOS home screen)
    // If you have a specific apple icon, map.apple or fallback to png
    const appleHref = (map.appleTouch || map[browser] || map.other).replace(/\.(svg|ico)$/i, ".png") + (version ? `?v=${version}` : "");
    ensureLink("apple-touch-icon", { href: appleHref, sizes: "180x180" });

    // 3) mask-icon (Safari pinned tabs) — expects an SVG and a color attribute
    if (map[browser] && /\.svg$/i.test(map[browser])) {
      ensureLink("mask-icon", { href: map[browser] + (version ? `?v=${version}` : ""), color: maskColor });
    } else if (map.safari && /\.svg$/i.test(map.safari)) {
      ensureLink("mask-icon", { href: map.safari + (version ? `?v=${version}` : ""), color: maskColor });
    }

    // (Optional) Set document.title suffix to indicate browser (helpful for dev)
    // document.title = `${document.title.split(' - ')[0]} - ${browser}`;

    // Clean-up: if you want to revert on unmount, return cleanup that restores defaults.
    // For now we don't do cleanup to keep the favicon set for the session.
  }, [mapping, version, maskColor]);
}
