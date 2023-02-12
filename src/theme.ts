import { Theme } from "./models";

export const THEMES = {
  BG_DARK: "#222",
  BG_MID_DARK: "#333",
  BORDER_COLOR: "#555",
  BG_LIGHT: "#ddd",
  BG_HEADING: "#444",
  TEXT: "#666",
  LINK: "#1E78f0",
};

export function getTheme(theme: Theme) {
  if (theme === "DARK") return THEMES.BG_DARK;
  else return THEMES.BG_LIGHT;
}
