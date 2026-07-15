"use client";

import { TemplateType } from "../templates";

interface Props {
  template: TemplateType;
}

export default function TemplateBackground({
  template,
}: Props) {
  if (template === "original") {
    return null;
  }

  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-white" />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-2 w-full bg-blue-600" />

      {/* Top Left Circle */}
      <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-blue-100 opacity-40" />

      {/* Bottom Right Circle */}
      <div className="absolute bottom-8 right-8 h-40 w-40 rounded-full bg-blue-50" />

      {/* Bottom Right Triangle */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-0
          w-0
          border-b-[90px]
          border-l-[90px]
          border-b-blue-600
          border-l-transparent
        "
      />
    </>
  );
}