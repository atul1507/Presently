import { randomUUID } from "crypto";
import { supabaseAdmin } from "@/lib/supabase/server";

const BUCKET = "presentations";

export async function uploadPresentation(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const extension = file.name.split(".").pop();

  const fileName = `${randomUUID()}.${extension}`;

  const filePath = `original/${fileName}`;

  const { error } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return {
    storagePath: filePath,
    originalName: file.name,
    fileSize: file.size,
  };
}