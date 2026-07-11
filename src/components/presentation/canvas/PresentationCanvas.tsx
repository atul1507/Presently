"use client";

import PdfViewport from "./PdfViewport";
import ThemeBackground from "./TemplateBackground";
import { templates, TemplateId } from "./templates";

interface Props {
    presentationId: string;
    pageNumber: number;
    template: TemplateId;
    heading?: string;
    tagline?: string;
    logo?: string;
}

export default function PresentationCanvas({
    presentationId,
    pageNumber,
    template,
    heading,
    tagline,
    logo,
}: Props) {
    const theme = templates[template];

    const original = template === "original";

    return (
        <div className="flex justify-center">
            <div
                className={`relative aspect-[16/9] overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 ${original ? "w-[88%]" : "w-[80%]"
                    }`}
            >
                {!original && (
                    <ThemeBackground
                        primary={theme.colors.primary}
                        secondary={theme.colors.secondary}
                        accent={theme.colors.accent}
                    />
                )}

                {!original && (
                    <>
                        {/* Logo */}

                        <div className="absolute left-10 top-8 z-20 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow">
                            {logo ? (
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-full w-full rounded-lg object-contain"
                                />
                            ) : (
                                <span className="text-xs font-medium text-slate-400">
                                    LOGO
                                </span>
                            )}
                        </div>

                        {/* Heading */}

                        <div className="absolute left-1/2 top-10 z-20 -translate-x-1/2">
                            <h2 className="text-2xl font-semibold text-slate-800">
                                {heading || "Presentation Heading"}
                            </h2>
                        </div>

                        {/* Tagline */}

                        <div className="absolute bottom-6 right-10 z-20">
                            <p className="text-sm text-slate-500">
                                {tagline || "Your tagline"}
                            </p>
                        </div>
                    </>
                )}

                {/* PDF Safe Area */}

                <div
                    className="absolute bg-white shadow-lg"
                    style={{
                        top: original ? 0 : theme.safeArea.top,
                        left: original ? 0 : theme.safeArea.left,
                        right: original ? 0 : theme.safeArea.right,
                        bottom: original ? 0 : theme.safeArea.bottom,
                    }}
                >
                    <PdfViewport
                        pdfUrl=""
                        pageNumber={pageNumber}
                    />
                </div>
            </div>
        </div>
    );
}