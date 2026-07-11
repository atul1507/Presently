export type TemplateId =
  | "original"
  | "blue"
  | "black"
  | "green"
  | "custom";

export interface TemplateDefinition {
  id: TemplateId;

  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };

  safeArea: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const templates: Record<
  TemplateId,
  TemplateDefinition
> = {
  original: {
    id: "original",

    colors: {
      primary: "#ffffff",
      secondary: "#ffffff",
      accent: "#ffffff",
      background: "#ffffff",
    },

    safeArea: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },

  blue: {
    id: "blue",

    colors: {
      primary: "#2563EB",
      secondary: "#60A5FA",
      accent: "#DBEAFE",
      background: "#FFFFFF",
    },

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },

  black: {
    id: "black",

    colors: {
      primary: "#111827",
      secondary: "#374151",
      accent: "#E5E7EB",
      background: "#FFFFFF",
    },

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },

  green: {
    id: "green",

    colors: {
      primary: "#059669",
      secondary: "#34D399",
      accent: "#D1FAE5",
      background: "#FFFFFF",
    },

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },

  custom: {
    id: "custom",

    colors: {
      primary: "#2563EB",
      secondary: "#60A5FA",
      accent: "#DBEAFE",
      background: "#FFFFFF",
    },

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },
};