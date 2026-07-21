"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

import TemplateGrid from "@/components/presentation/TemplateGrid";
import { TemplateId } from "./templates";

import { BrandingSettings } from "./branding";

import BrandingPanel from "./BrandingPanel";
import CustomColorPicker from "./CustomColorPicker";
import ConfirmDialog from "./ConfirmDialog";

interface Props {
  selectedTemplate: TemplateId;
  onTemplateChange: (template: TemplateId) => void;

  branding: BrandingSettings;
  onBrandingChange: (
    branding: BrandingSettings
  ) => void;

  customColor: string;
  onCustomColorChange: (color: string) => void;
}

export default function PresentationSidebar({
  selectedTemplate,
  onTemplateChange,
  branding,
  onBrandingChange,
  customColor,
  onCustomColorChange,
}: Props) {


  const router = useRouter();

  const [showDiscardDialog, setShowDiscardDialog] =
    useState(false);


  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Scroll Area */}

      <div className="flex-1 overflow-y-auto p-8">

        <h1 className="text-3xl font-semibold">
          Customize Presentation
        </h1>

        <p className="mt-2 text-slate-500">
          Select a template and personalize your presentation.
        </p>

        {/* Templates */}

        <section className="mt-10">

          <h2 className="text-xl font-semibold">
            Templates
          </h2>

          <TemplateGrid
            selectedTemplate={selectedTemplate}
            onTemplateChange={onTemplateChange}
          />

        </section>

        {/* Custom Theme */}

        {selectedTemplate === "custom" && (

          <div className="mt-10">

            <CustomColorPicker
              color={customColor}
              onChange={onCustomColorChange}
            />

          </div>

        )}

        {/* Branding */}

        <div className="mt-10">

          <BrandingPanel
            branding={branding}
            onBrandingChange={onBrandingChange}
            disabled={selectedTemplate === "original"}
          />

        </div>

      </div>

      {/* Fixed Footer */}

      <div className="border-t border-slate-200 bg-white p-8">
        <div className="flex gap-4">
          <button
            onClick={() => setShowDiscardDialog(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
            Continue
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={showDiscardDialog}
        title="Discard Presentation?"
        description="Your uploaded presentation and all customization changes will be permanently discarded."
        confirmText="Discard"
        cancelText="Stay"
        onCancel={() => setShowDiscardDialog(false)}
        onConfirm={() => {
          router.push("/");
        }}
      />

    </aside>
  );
}