export type TemplateType =
  | "original"
  | "blue"
  | "black"
  | "green"
  | "custom";

export interface PresentationTemplate {
  id: TemplateType;
  name: string;
}

export const templates: PresentationTemplate[] = [
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