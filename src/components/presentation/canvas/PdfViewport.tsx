"use client";

import { useEffect, useRef } from "react";

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   "/pdf.worker.min.mjs";

interface Props {
    pdfUrl: string;
    pageNumber: number;
}

export default function PdfViewport({
    pdfUrl,
    pageNumber,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let cancelled = false;

        async function renderPdf() {
            if (!canvasRef.current) return;

            const loadingTask = pdfjsLib.getDocument({
                url: pdfUrl,
            });

            const pdf = await loadingTask.promise;

            const page = await pdf.getPage(pageNumber);

            const viewport = page.getViewport({
                scale: 1,
            });

            const canvas = canvasRef.current;

            const context = canvas.getContext("2d");

            if (!context) return;

            canvas.width = viewport.width;

            canvas.height = viewport.height;

            await page.render({
                canvas,
                canvasContext: context,
                viewport,
            }).promise;

            if (cancelled) {
                loadingTask.destroy();
            }
        }

        renderPdf();

        return () => {
            cancelled = true;
        };
    }, [pdfUrl, pageNumber]);

    return (
        <canvas
            ref={canvasRef}
            className="h-full w-full object-contain"
        />
    );
}