"use client";

import Container from "@/components/shared/Container";
import { UploadCloud, FileText, HardDrive } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Upload your presentation
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Drag & drop your PowerPoint or PDF presentation and control every
            slide securely from your phone.
          </p>

          <div className="mt-14 w-full rounded-3xl border border-slate-200 bg-white p-14 shadow-xl">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <UploadCloud className="text-blue-600" size={34} strokeWidth={2} />
              </div>

              <h2 className="mt-8 text-3xl font-semibold text-slate-900">
                Drag & Drop your file
              </h2>

              <p className="mt-3 text-slate-500">
                or click to browse your computer
              </p>

              <button className="mt-6 rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-700">
                Browse Files
              </button>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-slate-200 pt-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  <span>Supported: PPTX, PDF</span>
                </div>

                <div className="flex items-center gap-2">
                  <HardDrive size={16} />
                  <span>Max Size: 100 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}