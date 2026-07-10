export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
] as const;

export const ACCEPTED_FILE_EXTENSIONS = [".pdf", ".pptx"] as const;

export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB

export type UploadStatus =
  | "idle"
  | "dragging"
  | "selected"
  | "uploading"
  | "processing"
  | "success"
  | "error";

export interface UploadState {
  file: File | null;
  status: UploadStatus;
  progress: number;
  error: string | null;
}