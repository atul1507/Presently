"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import {
    BrandingSettings,
    defaultBranding,
} from "./branding";

import {
    templateToPrisma,
    logoShapeToPrisma,
} from "@/lib/presentation/mappers";

import PresentationSidebar from "./PresentationSidebar";
import PresentationPreview from "./PresentationPreview";

import {
    getPresentation,
    updatePresentationCustomization,
} from "@/lib/api/presentation";

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

    const [isSaving, setIsSaving] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        console.log("useEffect fired");

        async function loadPresentation() {
            console.log("Loading started");

            try {
                const presentation = await getPresentation(
                    presentationId
                );

                console.log("Presentation received");

                setSelectedTemplate(
                    presentation.template.toLowerCase() as TemplateId
                );

                setCustomColor(
                    presentation.customColor ?? "#2563EB"
                );

                setBranding({
                    title: presentation.brandingTitle ?? "",
                    tagline: presentation.brandingTagline ?? "",
                    logoUrl: presentation.logoUrl ?? undefined,
                    logoFile: undefined,
                    logoShape:
                        presentation.logoShape.toLowerCase() as
                        BrandingSettings["logoShape"],
                });
            } catch (error) {
                console.error(
                    "Failed to load presentation",
                    error
                );
            } finally {
                console.log("Setting loading false");
                setIsLoading(false);
            }
        }

        loadPresentation();
    }, [presentationId]);

    if (isLoading) {
        return (
            <div className="flex h-full bg-slate-50">
                {/* Sidebar Skeleton */}
                <aside className="w-80 border-r border-slate-200 bg-white p-6">
                    <div className="animate-pulse space-y-6">
                        <div className="h-8 w-40 rounded bg-slate-200" />

                        <div className="space-y-3">
                            <div className="h-4 w-24 rounded bg-slate-200" />

                            <div className="grid grid-cols-2 gap-3">
                                {[...Array(6)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="h-20 rounded-xl bg-slate-200"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="h-4 w-32 rounded bg-slate-200" />
                            <div className="h-11 rounded-lg bg-slate-200" />
                            <div className="h-11 rounded-lg bg-slate-200" />
                        </div>

                        <div className="h-11 rounded-xl bg-slate-200" />
                    </div>
                </aside>

                {/* Preview Skeleton */}
                <main className="flex flex-1 items-center justify-center bg-slate-100 p-10">
                    <div className="animate-pulse">
                        <div className="aspect-[16/9] w-[900px] max-w-full rounded-2xl bg-white shadow-xl">
                            <div className="flex h-full flex-col p-10">
                                <div className="mb-8 h-8 w-64 rounded bg-slate-200" />

                                <div className="space-y-4">
                                    <div className="h-4 w-full rounded bg-slate-200" />
                                    <div className="h-4 w-5/6 rounded bg-slate-200" />
                                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                                </div>

                                <div className="mt-auto flex justify-end">
                                    <div className="h-12 w-12 rounded-full bg-slate-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    console.log("Render, isLoading =", isLoading);

    const handleContinue = async () => {
        try {
            console.log("1. Started");
            setIsSaving(true);

            console.log("2. Sending request");

            await updatePresentationCustomization(
                presentationId,
                {
                    template: templateToPrisma[selectedTemplate],
                    customColor,
                    branding: {
                        title: branding.title,
                        tagline: branding.tagline,
                        logoUrl: branding.logoUrl,
                        logoShape: logoShapeToPrisma[branding.logoShape],
                    },
                }
            );

            console.log("3. Request completed");

            // Navigation comes next

            router.push(`/present/${presentationId}/present`);


        } catch (error) {
            console.error("4. Error", error);
        } finally {
            console.log("5. Finally");

            setIsSaving(false);
        }
    };

    return (
        <div className="grid h-full grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-6 overflow-hidden p-6">
            <PresentationSidebar
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
                branding={branding}
                onBrandingChange={setBranding}
                customColor={customColor}
                onCustomColorChange={setCustomColor}
                isSaving={isSaving}
                onContinue={handleContinue}
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