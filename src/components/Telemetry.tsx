"use client";

import { useEffect } from "react";

// Seconds of "engaged time" (interaction + dwell) before we ping.
// Override at build time with NEXT_PUBLIC_ENGAGE_SECONDS.
const ENGAGE_SECONDS = Number(process.env.NEXT_PUBLIC_ENGAGE_SECONDS ?? 30) || 30;

/**
 * Silent visitor telemetry. Listens for interaction, waits until the visitor
 * has both interacted AND spent > ENGAGE_SECONDS on the page, then fires ONE
 * beacon per session (sendBeacon survives tab-close).
 *
 * Zephex's own machines: run this once in devtools to go invisible:
 *   localStorage.setItem("zeph_quiet", "1")
 */
export default function Telemetry() {
  useEffect(() => {
    try {
      if (localStorage.getItem("zeph_quiet") === "1") return;
      if (sessionStorage.getItem("tg_pinged")) return;
    } catch {
      return;
    }

    const start = Date.now();
    let interactions = 0;
    let interacted = false;
    let sent = false;
    let timer: ReturnType<typeof setInterval>;

    const bump = () => {
      interacted = true;
      interactions++;
    };
    const markInteracted = () => {
      interacted = true;
    };

    const fire = () => {
      if (sent) return;
      const seconds = Math.round((Date.now() - start) / 1000);
      if (seconds < ENGAGE_SECONDS || !interacted) return;
      sent = true;
      const payload = JSON.stringify({
        path: window.location.pathname,
        seconds,
        interactions,
      });
      try {
        navigator.sendBeacon(
          "/api/track-visit",
          new Blob([payload], { type: "application/json" })
        );
        sessionStorage.setItem("tg_pinged", "1");
      } catch {
        /* give up silently */
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") fire();
    };

    window.addEventListener("pointerdown", bump);
    window.addEventListener("keydown", bump);
    window.addEventListener("scroll", markInteracted, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("beforeunload", fire);

    // Poll every 5s: once threshold crossed, fire and stop.
    timer = setInterval(() => {
      if (interacted && Date.now() - start >= ENGAGE_SECONDS * 1000) {
        fire();
        clearInterval(timer);
      }
    }, 5000);

    return () => {
      window.removeEventListener("pointerdown", bump);
      window.removeEventListener("keydown", bump);
      window.removeEventListener("scroll", markInteracted);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("beforeunload", fire);
      clearInterval(timer);
    };
  }, []);

  return null;
}
