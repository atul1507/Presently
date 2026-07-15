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

            <div className="absolute left-5 top-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-white shadow-md">
                    <span className="text-xs font-semibold tracking-wide text-blue-600">
                        LOGO
                    </span>
                </div>
            </div>

            {/* Heading */}

            <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    {branding.title}
                </h1>
            </div>

            <div className="absolute left-1/2 top-14 h-px w-64 -translate-x-1/2 bg-slate-300" />

            {/* Tagline */}

            <div className="absolute bottom-[5%] right-[16%] max-w-64 text-right">
                <p className="text-sm font-medium tracking-wide text-slate-500">
                    {branding.tagline}
                </p>
            </div>

        </div>
    );
}