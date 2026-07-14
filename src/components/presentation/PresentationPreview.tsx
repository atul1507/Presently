"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { TemplateType } from "./templates";
import PresentationCanvas from "./PresentationCanvas";

const PdfViewer = dynamic(
  () => import("./PdfViewer"),
  {
    ssr: false,
  }
);

interface PresentationResponse {
  pdfUrl: string;
}

interface Props {
  presentationId: string;
  selectedTemplate: TemplateType;
}

export default function PresentationPreview({
  presentationId,
  selectedTemplate,
}: Props) {
  const [pageNumber, setPageNumber] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

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

  function previousPage() {
    setPageNumber((page) => Math.max(page - 1, 1));
  }

  function nextPage() {
    setPageNumber((page) =>
      Math.min(page + 1, totalPages)
    );
  }

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <header className="border-b border-slate-200 px-8 py-6">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Live Preview
          </h2>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium capitalize text-slate-600">
            {selectedTemplate}
          </span>
        </div>

      </header>

      <div className="flex-1 overflow-y-auto">

        <div className="flex flex-col gap-8 p-8">

          <div className="flex justify-center">

            <PresentationCanvas
              template={selectedTemplate}
            >
              {loading ? (
                <div className="flex h-full w-full items-center justify-center">
                  Loading PDF...
                </div>
              ) : pdfUrl ? (
                <PdfViewer
                  pdfUrl={pdfUrl}
                  pageNumber={pageNumber}
                  onLoadSuccess={setTotalPages}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-red-600">
                  Failed to load PDF.
                </div>
              )}
            </PresentationCanvas>
          </div>

          <div className="flex items-center justify-center gap-6">

            <button
              onClick={previousPage}
              disabled={pageNumber === 1}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ◀
            </button>

            <span className="min-w-16 text-center text-lg font-semibold">
              {pageNumber} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={pageNumber === totalPages}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ▶
            </button>

          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="text-xl font-semibold">
              Branding
            </h3>

            <div className="mt-6 space-y-5">

              <div className="rounded-xl border border-dashed border-slate-300 p-4">
                Logo
              </div>

              <div className="rounded-xl border border-dashed border-slate-300 p-4">
                Heading
              </div>

              <div className="rounded-xl border border-dashed border-slate-300 p-4">
                Tagline
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}