"use client";

import { ReactNode } from "react";

import { TemplateType } from "./templates";

interface Props {
  template: TemplateType;
  children: ReactNode;
}

const VIEWPORT_MARGIN = {
  original: "0%",
  branded: "14%",
} as const;

export default function PresentationCanvas({
  template,
  children,
}: Props) {
  const margin =
    template === "original"
      ? VIEWPORT_MARGIN.original
      : VIEWPORT_MARGIN.branded;

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
      {/* Presentation Viewport */}

      <div
        className="
          absolute
          flex
          items-center
          justify-center
        "
        style={{
          top: margin,
          left: margin,
          right: margin,
          bottom: margin,
        }}
      >
        {children}
      </div>
    </div>
  );
}