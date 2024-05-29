import { writable } from "svelte/store";
import { ThemeEnum, localStorageThemeKey } from "../@types/theme";

const themeStore = () => {
  const currentTheme = writable<ThemeEnum>(ThemeEnum.SYSTEM, () => {
    let savedTheme: ThemeEnum = ThemeEnum.SYSTEM;

    try {
      savedTheme = localStorage.getItem(localStorageThemeKey) as ThemeEnum;

      if (savedTheme && Object.values(ThemeEnum).includes(savedTheme)) {
        currentTheme.set(savedTheme);
      }
    } catch {
      console.error("Failed to save theme to localStorage:");
    }

    updateTheme(savedTheme);
  });

  function updateTheme(theme: ThemeEnum) {
    localStorage.setItem(localStorageThemeKey, theme);
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    currentTheme.set(theme);

    if (theme === ThemeEnum.SYSTEM) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }

  return {
    currentTheme,
    updateTheme,
  };
};

export default themeStore;
