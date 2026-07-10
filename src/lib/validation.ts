import {
  ACCEPTED_FILE_TYPES,
  MAX_FILE_SIZE,
} from "@/types/upload";

export function validateFile(file: File): string | null {
  if (!ACCEPTED_FILE_TYPES.includes(file.type as (typeof ACCEPTED_FILE_TYPES)[number])) {
    return "Only PDF and PPTX files are supported.";
  }

  if (file.size > MAX_FILE_SIZE) {
    return "Maximum allowed file size is 100 MB.";
  }

  return null;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}