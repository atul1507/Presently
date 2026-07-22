export type PresentationTemplate =
  | "ORIGINAL"
  | "BLUE"
  | "BLACK"
  | "GREEN"
  | "CUSTOM";

export type LogoShape =
  | "SQUARE"
  | "ROUNDED"
  | "CIRCLE";

export interface PresentationBranding {
  title: string;
  tagline: string;
  logoUrl?: string;
  logoShape: LogoShape;
}

export interface PresentationCustomization {
  template: PresentationTemplate;
  customColor: string | null;
  branding: PresentationBranding;
}

export interface PresentationResponse {
  id: string;
  originalName: string;
  pdfUrl: string;
  totalSlides: number | null;
  status: string;

  template: PresentationTemplate;
  customColor: string | null;

  brandingTitle: string | null;
  brandingTagline: string | null;

  logoUrl: string | null;
  logoShape: LogoShape;
}