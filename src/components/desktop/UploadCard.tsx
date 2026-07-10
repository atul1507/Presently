"use client";

import { UploadCloud, FileText, HardDrive } from "lucide-react";

export default function UploadCard() {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-3xl border border-blue-200/70 bg-white/75 p-16 shadow-[var(--presently-shadow-lg)] backdrop-blur-xl transition-all duration-300 hover:border-blue-400 hover:shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
          <UploadCloud className="text-blue-600" size={48} strokeWidth={1.7} />
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-[var(--presently-text)]">
          Drag & Drop your files
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--presently-text-muted)]">
          Upload your PowerPoint (.pptx) or PDF presentation to instantly start presenting on any screen.
        </p>

        <button className="mt-10 rounded-2xl bg-[var(--presently-primary)] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--presently-primary-hover)]">
          Browse Files
        </button>

        <div className="my-10 h-px w-full bg-gray-200" />

        <div className="flex items-center justify-center gap-10 text-[15px] text-[var(--presently-text-muted)]">
          <div className="flex items-center gap-2">
            <FileText size={18} />
            <span>PPTX</span>
          </div>

          <div className="flex items-center gap-2">
            <FileText size={18} />
            <span>PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <HardDrive size={18} />
            <span>Maximum Size 100 MB</span>
          </div>
        </div>
      </div>
    </div>
  );
}