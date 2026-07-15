export type LogoShape =
  | "circle"
  | "rounded"
  | "square";

export interface BrandingSettings {
  logoUrl?: string;

  logoShape: LogoShape;

  title: string;

  tagline: string;
}

export const defaultBranding: BrandingSettings = {
  logoShape: "circle",

  title: "Presentation Title",

  tagline: "Company Tagline",
};