import { Theme } from "./models";

export const THEMES = {
  BG_DARK: "#222",
  BG_LIGHT: "#ddd",
  TEXT: "#666"
};

export function getTheme(theme: Theme) {
  if (theme === "DARK") return THEMES.BG_DARK;
  else return THEMES.BG_LIGHT;
}
