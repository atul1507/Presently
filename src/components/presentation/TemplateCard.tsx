import { Check } from "lucide-react";

import { PresentationTemplate } from "./templates";

interface Props {
  template: PresentationTemplate;
}

export default function TemplateCard({
  template,
}: Props) {
  const selected = template.id === "original";

  return (
    <button
      className={`
        group
        rounded-2xl
        border
        p-3
        text-left
        transition-all
        duration-200
        hover:shadow-md
        ${
          selected
            ? "border-blue-500 bg-blue-50 shadow-md"
            : "border-slate-200 bg-white hover:border-blue-300"
        }
      `}
    >
      {/* Preview */}

      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-white">

        <TemplatePreview type={template.id} />

        {selected && (
          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
            <Check size={14} />
          </div>
        )}

      </div>

      <p className="mt-3 text-sm font-medium text-slate-800">
        {template.name}
      </p>
    </button>
  );
}

function TemplatePreview({
  type,
}: {
  type: PresentationTemplate["id"];
}) {
  switch (type) {
    case "blue":
      return (
        <div className="h-full bg-white">
          <div className="h-3 bg-blue-600" />
          <div className="p-3">
            <div className="h-2 w-16 rounded bg-blue-200" />
            <div className="mt-6 h-2 w-10 rounded bg-blue-500" />
          </div>
        </div>
      );

    case "black":
      return (
        <div className="h-full bg-slate-900">
          <div className="h-3 bg-slate-700" />
          <div className="p-3">
            <div className="h-2 w-16 rounded bg-slate-500" />
            <div className="mt-6 h-2 w-10 rounded bg-white" />
          </div>
        </div>
      );

    case "green":
      return (
        <div className="h-full bg-emerald-50">
          <div className="h-3 bg-emerald-500" />
          <div className="p-3">
            <div className="h-2 w-16 rounded bg-emerald-200" />
            <div className="mt-6 h-2 w-10 rounded bg-emerald-500" />
          </div>
        </div>
      );

    case "custom":
      return (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-400 via-violet-500 to-blue-500 text-xs font-semibold text-white">
          +
        </div>
      );

    default:
      return (
        <div className="h-full bg-white p-3">
          <div className="rounded border border-dashed border-slate-300 p-4 text-center text-[10px] text-slate-400">
            Original
          </div>
        </div>
      );
  }
}