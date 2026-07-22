import { supabase } from "./client";

export async function uploadPresentationLogo(file: File) {
  const extension = file.name.split(".").pop();

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const filePath = `logos/${fileName}`;

  const { error } = await supabase.storage
    .from("presentation-logos")
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from("presentation-logos")
    .getPublicUrl(filePath);

  return data.publicUrl;
}