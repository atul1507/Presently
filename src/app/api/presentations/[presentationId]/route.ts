import { NextRequest, NextResponse } from "next/server";

import { getPresentationById } from "@/services/presentation/presentation.service";
import { getPresentationSignedUrl } from "@/services/presentation/storage.service";

interface RouteParams {
  params: Promise<{
    presentationId: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { presentationId } = await params;

    const presentation = await getPresentationById(
      presentationId
    );

    if (!presentation) {
      return NextResponse.json(
        {
          message: "Presentation not found.",
        },
        {
          status: 404,
        }
      );
    }

    const signedUrl = await getPresentationSignedUrl(
      presentation.storagePath
    );

    return NextResponse.json({
      id: presentation.id,
      originalName: presentation.originalName,
      pdfUrl: signedUrl,
      totalSlides: presentation.totalSlides,
      status: presentation.status,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to load presentation.",
      },
      {
        status: 500,
      }
    );
  }
}