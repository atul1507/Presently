"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  FileText,
  Loader2,
  X,
  HardDrive,
} from "lucide-react";

import { UploadState, ACCEPTED_FILE_EXTENSIONS } from "@/types/upload";
import { formatFileSize } from "@/lib/validation";

interface UploadDropzoneProps {
  state: UploadState;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
  onUpload: () => void;
  onDragging: (dragging: boolean) => void;
}

export default function UploadDropzone({
  state,
  onFileSelect,
  onRemove,
  onUpload,
  onDragging,
}: UploadDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }

      onDragging(false);
    },
    [onDragging, onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    multiple: false,
    noKeyboard: true,

    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [".pptx"],
    },

    onDrop,

    onDragEnter: () => onDragging(true),

    onDragLeave: () => onDragging(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`rounded-3xl border-2 border-dashed p-14 transition-all duration-300 cursor-pointer ${
        isDragActive || state.status === "dragging"
          ? "border-blue-500 bg-blue-50"
          : "border-slate-200 bg-slate-50 hover:border-blue-400"
      }`}
    >
      <input {...getInputProps()} />

      {state.status === "idle" || state.status === "dragging" ? (
        <IdleState dragging={isDragActive} />
      ) : null}

      {state.status === "selected" && state.file ? (
        <SelectedState
          file={state.file}
          onRemove={onRemove}
          onUpload={onUpload}
        />
      ) : null}

      {state.status === "uploading" ? (
        <UploadingState progress={state.progress} />
      ) : null}

      {state.status === "processing" ? (
        <ProcessingState />
      ) : null}

      {state.status === "error" ? (
        <ErrorState
          message={state.error ?? "Something went wrong."}
        />
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    STATES                                  */
/* -------------------------------------------------------------------------- */

function IdleState({
  dragging,
}: {
  dragging: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <UploadCloud className="text-blue-600" size={34} />
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-slate-900">
        {dragging ? "Drop your presentation" : "Drag & Drop your presentation"}
      </h2>

      <p className="mt-3 text-slate-500">
        or click to browse your computer
      </p>

      <div className="mt-8 flex items-center gap-8 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <FileText size={16} />
          <span>{ACCEPTED_FILE_EXTENSIONS.join(", ").toUpperCase()}</span>
        </div>

        <div className="flex items-center gap-2">
          <HardDrive size={16} />
          <span>Maximum Size 100 MB</span>
        </div>
      </div>
    </div>
  );
}

function SelectedState({
  file,
  onRemove,
  onUpload,
}: {
  file: File;
  onRemove: () => void;
  onUpload: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <FileText className="text-green-600" size={32} />
      </div>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">
        {file.name}
      </h2>

      <p className="mt-2 text-slate-500">
        {formatFileSize(file.size)}
      </p>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onUpload();
          }}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Continue
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100"
        >
          <X size={16} />
          Remove
        </button>
      </div>
    </div>
  );
}

function UploadingState({
  progress,
}: {
  progress: number;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <Loader2 className="animate-spin text-blue-600" size={42} />

      <h2 className="mt-6 text-2xl font-semibold">
        Uploading...
      </h2>

      <div className="mt-8 h-3 w-full max-w-md overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-slate-500">
        {progress}%
      </p>
    </div>
  );
}

function ProcessingState() {
  return (
    <div className="flex flex-col items-center text-center">
      <Loader2 className="animate-spin text-blue-600" size={42} />

      <h2 className="mt-6 text-2xl font-semibold">
        Preparing Presentation
      </h2>

      <p className="mt-3 text-slate-500">
        Converting your presentation...
      </p>
    </div>
  );
}

function ErrorState({
  message,
}: {
  message: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-red-600">
        Upload Failed
      </h2>

      <p className="mt-3 text-slate-600">
        {message}
      </p>
    </div>
  );
}