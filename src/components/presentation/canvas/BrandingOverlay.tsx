"use client";

import { TemplateId } from "../templates";
import { PresentationTheme } from "../presentationThemes";

import { BrandingSettings } from "../branding";

interface Props {
    template: TemplateId;
    branding: BrandingSettings;
    theme: PresentationTheme | null;
}

export default function BrandingOverlay({
    template,
    branding,
    theme,
}: Props) {
    if (template === "original") {
        return null;
    }

    return (
        <div className="pointer-events-none absolute inset-0">

            {/* Logo */}

            {branding.logoUrl && (
                <div className="absolute left-5 top-5">
                    <div className={`flex h-16 w-16 items-center justify-center overflow-hidden border border-blue-200 bg-white shadow-md ${branding.logoShape === "circle" ? "rounded-full" : branding.logoShape === "rounded" ? "rounded-2xl" : "rounded-none"}`}>
                        <img
                            src={branding.logoUrl}
                            alt="Company Logo"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Heading */}

            {branding.title && (
                <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight"
                        style={{
                            color: theme?.primary,
                        }}>
                        {branding.title}
                    </h1>
                </div>
            )}

            {branding.title && (
                <div
                    className="absolute left-1/2 top-14 h-px w-64 -translate-x-1/2"
                    style={{
                        background: `linear-gradient(
                            to right,
                            transparent,
                            ${theme?.primary},
                            transparent
                        )`,
                    }}
                />
            )}

            {/* Tagline */}

            {branding.tagline && (
                <div className="absolute bottom-[5%] right-[16%] flex max-w-64 flex-col items-end">
                    <div
                        className="mb-2 h-px w-24"
                        style={{
                            background: `linear-gradient(
                                to left,
                                ${theme?.primary},
                                transparent
                            )`,
                        }}
                    />

                    <p
                        className="text-right text-sm font-semibold tracking-wide text-slate-700"
                    >
                        {branding.tagline}
                    </p>
                </div>
            )}

        </div>
    );
}