"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const syncTheme = () => {
      try {
        const stored = localStorage.getItem("amogh_theme") as Theme | null;
        if (stored === "light" || stored === "dark") {
          setThemeState(stored);
          document.documentElement.setAttribute("data-theme", stored);
        } else {
          const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
          const initial: Theme = prefersLight ? "light" : "dark";
          setThemeState(initial);
          document.documentElement.setAttribute("data-theme", initial);
        }
      } catch {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    };

    syncTheme();
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("amogh_theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
