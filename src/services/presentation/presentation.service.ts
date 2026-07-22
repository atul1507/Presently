import { prisma } from "@/lib/prisma";

import {
  LogoShape,
  PresentationTemplate,
} from "@prisma/client";

interface CreatePresentationInput {
  originalName: string;
  storagePath: string;
  fileSize: number;
}

type UpdatePresentationCustomizationInput = {
  template: PresentationTemplate;
  customColor?: string | null;

  branding: {
    title?: string | null;
    tagline?: string | null;
    logoUrl?: string | null;
    logoShape: LogoShape;
  };
};

export async function createPresentation(
  data: CreatePresentationInput
) {
  return prisma.presentation.create({
    data: {
      originalName: data.originalName,
      storagePath: data.storagePath,
      fileSize: data.fileSize,
      pdfPath: null,
      totalSlides: null,
      status: "UPLOADING",
    },
  });
}

export async function getPresentationById(
  presentationId: string
) {
  return prisma.presentation.findUnique({
    where: {
      id: presentationId,
    },
  });
}

export async function updatePresentationCustomization(
  presentationId: string,
  customization: UpdatePresentationCustomizationInput
) {
  return prisma.presentation.update({
    where: {
      id: presentationId,
    },
    data: {
      template: customization.template,
      customColor: customization.customColor,

      brandingTitle: customization.branding.title,
      brandingTagline: customization.branding.tagline,

      logoUrl: customization.branding.logoUrl,
      logoShape: customization.branding.logoShape,
    },
  });
}