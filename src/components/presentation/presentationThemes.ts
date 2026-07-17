import { BrandedTemplateId } from "./templates";

export interface PresentationTheme {
  primary: string;
  secondary: string;
  background: string;
}

export const presentationThemes: Record<
  BrandedTemplateId,
  PresentationTheme
> = {
  blue: {
    primary: "#2563EB",
    secondary: "#DBEAFE",
    background:
      "linear-gradient(135deg,#DBEAFE 0%,#EFF6FF 45%,#BFDBFE 100%)",
  },

  black: {
    primary: "#111827",
    secondary: "#6B7280",
    background:
      "linear-gradient(135deg,#9CA3AF 0%,#6B7280 45%,#4B5563 100%)",
  },

  green: {
    primary: "#059669",
    secondary: "#34D399",
    background:
      "linear-gradient(135deg,#D1FAE5 0%,#A7F3D0 45%,#6EE7B7 100%)",
  },
};