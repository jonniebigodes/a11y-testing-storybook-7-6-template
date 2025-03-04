export type ThemeType = "light" | "dark" | "purple" | "pink" | "eighties";

export interface ThemeColors {
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  accent: string;
  accentHover: string;
  tagBg: string;
  tagText: string;
  shadow: string;
}

export interface Theme {
  colors: ThemeColors;
}

export const themes: Record<ThemeType, Theme> = {
  light: {
    colors: {
      bgPrimary: "#f9fafb",
      bgSecondary: "#ffffff",
      textPrimary: "#111827",
      textSecondary: "#4b5563",
      border: "#e5e7eb",
      accent: "#3b82f6",
      accentHover: "#2563eb",
      tagBg: "#dbeafe",
      tagText: "#1e40af",
      shadow: "rgba(0, 0, 0, 0.1)",
    },
  },
  dark: {
    colors: {
      bgPrimary: "#111827",
      bgSecondary: "#1f2937",
      textPrimary: "#f9fafb",
      textSecondary: "#d1d5db",
      border: "#374151",
      accent: "#3b82f6",
      accentHover: "#60a5fa",
      tagBg: "#1e3a8a",
      tagText: "#93c5fd",
      shadow: "rgba(0, 0, 0, 0.3)",
    },
  },
  purple: {
    colors: {
      bgPrimary: "#2e1065",
      bgSecondary: "#4c1d95",
      textPrimary: "#fef08a",
      textSecondary: "#fef9c3",
      border: "#7e22ce",
      accent: "#fef08a",
      accentHover: "#ffffff",
      tagBg: "#facc15",
      tagText: "#4c1d95",
      shadow: "rgba(0, 0, 0, 0.5)",
    },
  },
  pink: {
    colors: {
      bgPrimary: "#831843",
      bgSecondary: "#be185d",
      textPrimary: "#fdf2f8",
      textSecondary: "#fbcfe8",
      border: "#db2777",
      accent: "#f9a8d4",
      accentHover: "#fdf2f8",
      tagBg: "#f472b6",
      tagText: "#831843",
      shadow: "rgba(0, 0, 0, 0.5)",
    },
  },
  eighties: {
    colors: {
      bgPrimary: "#00ffff", // Bright cyan
      bgSecondary: "#ff00ff", // Bright magenta
      textPrimary: "#ffff00", // Bright yellow on cyan - very poor contrast
      textSecondary: "#00ff00", // Bright green on magenta - poor contrast
      border: "#ff8800", // Bright orange
      accent: "#ff00ff", // Magenta
      accentHover: "#ffff00", // Yellow
      tagBg: "#ff00ff", // Magenta
      tagText: "#00ffff", // Cyan on magenta - very poor contrast
      shadow: "rgba(255, 0, 255, 0.7)", // Strong shadow with magenta
    },
  },
};

export const getTheme = (themeType: ThemeType): Theme => {
  return themes[themeType];
};
