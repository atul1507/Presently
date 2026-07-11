import { NextResponse } from "next/server";
import { uploadPresentation } from "@/services/presentation/storage.service";
import { createPresentation } from "@/services/presentation/presentation.service";


export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { message: "No file uploaded." },
        { status: 400 }
      );
    }

    const upload = await uploadPresentation(file);

    const presentation = await createPresentation(upload);

    return NextResponse.json({
      success: true,
      presentationId: presentation.id,
    });


  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Upload failed." },
      { status: 500 }
    );
  }
}