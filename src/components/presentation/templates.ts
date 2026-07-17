export type TemplateId =
  | "original"
  | "blue"
  | "black"
  | "green"
  | "custom";

export type BrandedTemplateId =
  | "blue"
  | "black"
  | "green";

export interface TemplateDefinition {
  id: TemplateId;

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

    safeArea: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },

  blue: {
    id: "blue",

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },

  black: {
    id: "black",

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },

  green: {
    id: "green",

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },

  custom: {
    id: "custom",

    safeArea: {
      top: 72,
      right: 48,
      bottom: 56,
      left: 48,
    },
  },
};

export interface PresentationTemplate {
  id: TemplateId;
  name: string;
}

export const templateList: PresentationTemplate[] = [
  {
    id: "original",
    name: "Original",
  },
  {
    id: "blue",
    name: "Blue",
  },
  {
    id: "black",
    name: "Black",
  },
  {
    id: "green",
    name: "Green",
  },
  {
    id: "custom",
    name: "Custom",
  },
];