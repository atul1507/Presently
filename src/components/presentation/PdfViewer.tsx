"use client";

import { useEffect, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  presentationId: string;
  pageNumber: number;
  onLoadSuccess?: (totalPages: number) => void;
}

interface PresentationResponse {
  pdfUrl: string;
}

export default function PdfViewer({
  presentationId,
  pageNumber,
  onLoadSuccess,
}: PdfViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPresentation() {
      try {
        const response = await fetch(
          `/api/presentations/${presentationId}`
        );

        if (!response.ok) {
          throw new Error("Failed to load presentation.");
        }

        const data: PresentationResponse =
          await response.json();

        setPdfUrl(data.pdfUrl);
      } finally {
        setLoading(false);
      }
    }

    loadPresentation();
  }, [presentationId]);

  if (loading) {
    return (
      <div className="flex aspect-[16/9] w-[78%] max-w-4xl items-center justify-center rounded-2xl border border-slate-300 bg-slate-50">
        Loading PDF...
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="flex aspect-[16/9] w-[78%] max-w-4xl items-center justify-center rounded-2xl border border-red-300 bg-red-50 text-red-600">
        Failed to load PDF.
      </div>
    );
  }

  return (
    <Document
      file={pdfUrl}
      loading="Loading PDF..."
      onLoadSuccess={({ numPages }) =>
        onLoadSuccess?.(numPages)
      }
    >
      <Page
        pageNumber={pageNumber}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        width={900}
      />
    </Document>
  );
}