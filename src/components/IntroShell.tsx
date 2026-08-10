"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type IntroPhase = "playing" | "revealing" | "done";

const INTRO_TIMING = {
  hold: 360,
  moveDuration: 1640,
  revealDelay: 800,
  total: 2160,
};

export function IntroShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<IntroPhase>("done");
  const wordmarkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const shouldPlay =
      pathname === "/" && window.sessionStorage.getItem("basair_intro_seen") !== "1";

    if (!shouldPlay) return;
    window.sessionStorage.setItem("basair_intro_seen", "1");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let revealTimer: ReturnType<typeof setTimeout> | null = null;
    let doneTimer: ReturnType<typeof setTimeout> | null = null;
    let raf: number | null = null;
    let animationRaf: number | null = null;

    if (prefersReduced) {
      return;
    }

    raf = requestAnimationFrame(() => {
      setPhase("playing");
      animationRaf = requestAnimationFrame(() => {
      const logoTarget = document.querySelector<HTMLElement>("[data-intro-logo]");
      const wordmark = wordmarkRef.current;

      if (!logoTarget || !wordmark) {
        setPhase("done");
        return;
      }

      const logoRect = logoTarget.getBoundingClientRect();
      const startX = window.innerWidth / 2;
      const startY = Math.min(window.innerHeight * 0.38, 320);
      const targetX = logoRect.left + logoRect.width / 2;
      const targetY = logoRect.top + logoRect.height / 2;

      const startWidth = Math.max(wordmark.getBoundingClientRect().width, 1);
      const targetWidth = Math.max(logoRect.width, 1);

      const dx = targetX - startX;
      const dy = targetY - startY;
      const scale = Math.min(1.1, Math.max(0.52, targetWidth / startWidth));

      wordmark.animate(
        [
          {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1,
          },
          {
            transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`,
            opacity: 0.98,
          },
        ],
        {
          delay: INTRO_TIMING.hold,
          duration: INTRO_TIMING.moveDuration,
          easing: "cubic-bezier(0.2, 0.7, 0.15, 1)",
          fill: "forwards",
        }
      );

      revealTimer = setTimeout(() => {
        setPhase("revealing");
      }, INTRO_TIMING.revealDelay);

      doneTimer = setTimeout(() => {
        setPhase("done");
      }, INTRO_TIMING.total);
      });
    });

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      if (animationRaf !== null) cancelAnimationFrame(animationRaf);
      if (revealTimer) clearTimeout(revealTimer);
      if (doneTimer) clearTimeout(doneTimer);
    };
  }, [pathname]);

  const showIntro = phase !== "done";

  return (
    <div
      className={`intro-shell ${showIntro ? "intro-active" : "intro-done"} ${phase === "revealing" ? "intro-reveal" : ""}`}
    >
      <div className="intro-content">{children}</div>

      {showIntro && (
        <div className="brand-intro" aria-hidden="true">
          <div ref={wordmarkRef} className="brand-intro-wordmark">
            {"Basa\u02beir"}
          </div>
        </div>
      )}
    </div>
  );
}


