import { prisma } from "@/lib/prisma";

interface CreatePresentationInput {
  originalName: string;
  storagePath: string;
  fileSize: number;
}

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