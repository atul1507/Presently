"use client";

import { useState } from "react";

import {
    BrandingSettings,
    defaultBranding,
} from "./branding";

import PresentationSidebar from "./PresentationSidebar";
import PresentationPreview from "./PresentationPreview";

import { TemplateId } from "./templates";

interface Props {
    presentationId: string;
}

export default function PresentationWorkspace({
    presentationId,
}: Props) {
    const [selectedTemplate, setSelectedTemplate] =
        useState<TemplateId>("original");

    const [branding, setBranding] =
        useState<BrandingSettings>(defaultBranding);

    const [customColor, setCustomColor] =
        useState("#2563EB");

    return (
        <div className="grid h-full grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-6 overflow-hidden p-6">
            <PresentationSidebar
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
                branding={branding}
                onBrandingChange={setBranding}
                customColor={customColor}
                onCustomColorChange={setCustomColor}
            />

            <PresentationPreview
                presentationId={presentationId}
                selectedTemplate={selectedTemplate}
                branding={branding}
                customColor={customColor}
            />
        </div>
    );
}