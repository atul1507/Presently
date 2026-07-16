export type LogoShape =
  | "circle"
  | "rounded"
  | "square";

export interface BrandingSettings {
  logoUrl?: string;

  logoFile?: File;

  logoShape: LogoShape;

  title: string;

  tagline: string;
}

export const defaultBranding: BrandingSettings = {
  logoShape: "circle",

  title: "",

  tagline: "",
};