"use client";

import TemplateGrid from "@/components/presentation/TemplateGrid";
import { TemplateType } from "./templates";

interface Props {
  selectedTemplate: TemplateType;
  onTemplateChange: (
    template: TemplateType
  ) => void;
}

export default function PresentationSidebar({
  selectedTemplate,
  onTemplateChange,
}: Props) {
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

        <section className="mt-10">

          <h2 className="text-xl font-semibold">
            Templates
          </h2>

          <TemplateGrid
            selectedTemplate={selectedTemplate}
            onTemplateChange={onTemplateChange}
          />

        </section>

      </div>

      {/* Fixed Footer */}

      <div className="border-t border-slate-200 bg-white p-8">

        <button className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
          Continue
        </button>

      </div>

    </aside>
  );
}