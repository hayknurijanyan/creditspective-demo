"use client";

import { useEffect, useState } from "react";

type ThemeKey = "cobalt" | "teal" | "copper" | "forest" | "graphite";

const THEME_LABELS: Record<ThemeKey, string> = {
  cobalt: "Navy Blue",
  teal: "Institutional Teal",
  copper: "Slate Rose",
  forest: "Forest & Gold",
  graphite: "Graphite & Copper",
};

const THEME_OPTIONS: Array<{
  key: ThemeKey;
  subtitle: string;
}> = [
  {
    key: "teal",
    subtitle: "Core direction - calm, credible, modern",
  },
  {
    key: "cobalt",
    subtitle: "Light layout with a stronger navy direction",
  },
  {
    key: "copper",
    subtitle: "Custom design - slate base with rose accents",
  },
  {
    key: "forest",
    subtitle: "Established, patient-capital, premium",
  },
  {
    key: "graphite",
    subtitle: "Differentiated, editorial, private-markets",
  },
];

const isThemeKey = (value: string): value is ThemeKey => {
  return (
    value === "cobalt" ||
    value === "teal" ||
    value === "copper" ||
    value === "forest" ||
    value === "graphite"
  );
};

const ThemeLab = () => {
  const [theme, setTheme] = useState<ThemeKey>("teal");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const storedTheme = (() => {
      try {
        return localStorage.getItem("cs-theme") ?? "teal";
      } catch {
        return "teal";
      }
    })();

    const nextTheme = isThemeKey(storedTheme) ? storedTheme : "teal";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  const applyTheme = (nextTheme: ThemeKey) => {
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      localStorage.setItem("cs-theme", nextTheme);
    } catch {
      // Ignore storage errors in private browsing or restricted contexts.
    }
  };

  return (
    <aside
      className={`theme-lab ${isOpen ? "is-open" : ""}`}
      aria-label="Color theme preview"
    >
      <button
        className="theme-lab-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="theme-toggle-dot" aria-hidden="true" />
        Theme: <strong data-theme-name>{THEME_LABELS[theme]}</strong>
      </button>

      <div className="theme-lab-panel">
        <p className="theme-lab-kicker">Design review mode</p>
        <h2>Choose a visual direction</h2>
        <p className="theme-lab-copy">
          This selector is for design review and can be removed from the
          production site.
        </p>

        <div
          className="theme-options"
          role="radiogroup"
          aria-label="Website color themes"
        >
          {THEME_OPTIONS.map((option) => (
            <button
              key={option.key}
              className="theme-option"
              type="button"
              data-set-theme={option.key}
              aria-pressed={theme === option.key}
              onClick={() => applyTheme(option.key)}
            >
              <span className="theme-swatches" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>
                <b>{THEME_LABELS[option.key]}</b>
                <small>{option.subtitle}</small>
              </span>
            </button>
          ))}
        </div>

        <button
          className="theme-lab-close"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          Hide theme controls
        </button>
      </div>
    </aside>
  );
};

export default ThemeLab;
