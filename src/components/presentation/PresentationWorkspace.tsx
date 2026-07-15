"use client";

import { useState } from "react";

import {
    BrandingSettings,
    defaultBranding,
} from "./branding";

import PresentationSidebar from "./PresentationSidebar";
import PresentationPreview from "./PresentationPreview";

import { TemplateType } from "./templates";

interface Props {
    presentationId: string;
}

export default function PresentationWorkspace({
    presentationId,
}: Props) {
    const [selectedTemplate, setSelectedTemplate] =
        useState<TemplateType>("original");

    const [branding, setBranding] =
        useState<BrandingSettings>(defaultBranding);

    return (
        <div className="grid h-full grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-6 overflow-hidden p-6">
            <PresentationSidebar
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
                branding={branding}
                onBrandingChange={setBranding}
            />

            <PresentationPreview
                presentationId={presentationId}
                selectedTemplate={selectedTemplate}
                branding={branding}
            />
        </div>
    );
}