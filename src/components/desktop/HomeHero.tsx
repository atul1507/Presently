"use client";

import Container from "@/components/shared/Container";
import { UploadCloud, FileText, HardDrive } from "lucide-react";

import UploadDropzone from "@/components/upload/UploadDropzone";
import { useUpload } from "@/hooks/useUpload";




export default function HomeHero() {

  
  const upload = useUpload();


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

          <div className="mt-14 w-full">
            <UploadDropzone
              state={upload.state}
              onFileSelect={upload.selectFile}
              onRemove={upload.removeFile}
              onUpload={upload.upload}
              onDragging={upload.setDragging}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}