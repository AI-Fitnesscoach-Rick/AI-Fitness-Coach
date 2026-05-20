"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export function CampaignTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;

      if (!(target instanceof HTMLAnchorElement) || target.hash !== "#waitlist") {
        return;
      }

      track("cta_click", {
        label: target.textContent?.trim() || "waitlist",
        location: target.className || "landing",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
