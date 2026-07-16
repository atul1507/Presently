"use client";

import { TemplateType } from "../templates";

import { BrandingSettings } from "../branding";

interface Props {
    template: TemplateType;
    branding: BrandingSettings;
}

export default function BrandingOverlay({
    template,
    branding,
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
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        {branding.title}
                    </h1>
                </div>
            )}

            {branding.title && (
                <div className="absolute left-1/2 top-14 h-px w-64 -translate-x-1/2 bg-slate-300" />
            )}

            {/* Tagline */}

            {branding.tagline && (
                <div className="absolute bottom-[5%] right-[16%] max-w-64 text-right">
                    <p className="text-sm font-medium tracking-wide text-slate-500">
                        {branding.tagline}
                    </p>
                </div>
            )}

        </div>
    );
}