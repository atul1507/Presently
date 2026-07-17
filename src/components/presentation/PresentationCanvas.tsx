"use client";

import { ReactNode } from "react";

import {
    TemplateId,
    BrandedTemplateId,
} from "./templates";
import TemplateBackground from "./canvas/TemplateBackground";
import BrandingOverlay from "./canvas/BrandingOverlay";
import { presentationThemes } from "../presentation/presentationThemes";
import { createCustomTheme } from "./createCustomTheme";

import { BrandingSettings } from "./branding";

interface Props {
    template: TemplateId;
    branding: BrandingSettings;
    customColor: string;
    children: ReactNode;
}

const VIEWPORT_MARGIN = {
    original: "0%",
    branded: "14%",
} as const;

function isBrandedTemplate(
    template: TemplateId
): template is BrandedTemplateId {
    return (
        template === "blue" ||
        template === "black" ||
        template === "green"
    );
}

export default function PresentationCanvas({
    template,
    children,
    branding,
    customColor,
}: Props) {
    const margin =
        template === "original"
            ? VIEWPORT_MARGIN.original
            : VIEWPORT_MARGIN.branded;

    const theme =
        template === "custom"
            ? createCustomTheme(customColor)
            : isBrandedTemplate(template)
                ? presentationThemes[template]
                : null;

    return (
        <div
            className="
                relative
                aspect-[16/9]
                w-full
                max-w-6xl
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-100
                shadow-inner
            "
        >
            <TemplateBackground
                template={template}
                theme={theme}
            />

            <div
                className="absolute inset-0 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl ring-1 ring-white/60"
                style={{
                    top: margin,
                    left: margin,
                    right: margin,
                    bottom: margin,
                }}
            >
                {children}
            </div>

            <BrandingOverlay
                template={template}
                branding={branding}
                theme={theme}
            />
        </div>
    );
}