"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Number of pages to keep pre-rendered on each side of the current page.
const PRELOAD_RADIUS = 2;

interface Props {
  pdfUrl: string;
  pageNumber: number;
  onLoadSuccess?: (pages: number) => void;
}

export default function PdfViewer({
  pdfUrl,
  pageNumber,
  onLoadSuccess,
}: Props) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] =
    useState(0);

  const [containerHeight, setContainerHeight] = useState(0);

  const [pdfDocument, setPdfDocument] =
    useState<pdfjs.PDFDocumentProxy | null>(null);

  const [pdfScale, setPdfScale] = useState(1);

  const startPage = Math.max(
    1,
    pageNumber - PRELOAD_RADIUS
  );

  const endPage = Math.min(
    pdfDocument?.numPages ?? pageNumber,
    pageNumber + PRELOAD_RADIUS
  );

  const visiblePages = [];

  for (let page = startPage; page <= endPage; page++) {
    visiblePages.push(page);
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(
      ([entry]) => {
        setContainerWidth(entry.contentRect.width);

        setContainerHeight(entry.contentRect.height);
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!pdfDocument) return;

    const document = pdfDocument;

    async function measurePage() {
      const page = await document.getPage(
        pageNumber
      );

      const viewport = page.getViewport({
        scale: 1,
      });

      const scaleX =
        containerWidth / viewport.width;

      const scaleY =
        containerHeight / viewport.height;

      setPdfScale(
        Math.min(scaleX, scaleY)
      );
    }

    measurePage();
  }, [
    pdfDocument,
    pageNumber,
    containerWidth,
    containerHeight,
  ]);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      {containerWidth > 0 && (
        <Document
          file={pdfUrl}
          loading="Loading PDF..."
          onLoadSuccess={(pdf) => {
            onLoadSuccess?.(pdf.numPages);
            setPdfDocument(pdf);
          }}
        >
          {visiblePages.map((page) => (
            <div
              key={page}
              className={
                page === pageNumber
                  ? "block"
                  : "hidden"
              }
            >
              <Page
                pageNumber={page}
                scale={pdfScale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </Document>
      )}
    </div>
  );
}