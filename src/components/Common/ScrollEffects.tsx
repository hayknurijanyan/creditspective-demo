"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 96;

export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const observer = reduceMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            });
          },
          {
            threshold: 0.18,
            rootMargin: "0px 0px -10% 0px",
          },
        );

    revealElements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 280)}ms`);
      observer?.observe(element);
    });

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href*='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      if (!url.hash) return;

      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname
      ) {
        return;
      }

      const element = document.querySelector<HTMLElement>(url.hash);
      if (!element) return;

      event.preventDefault();

      const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.history.pushState({}, "", url.hash);
      window.scrollTo({
        top,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      observer?.disconnect();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}