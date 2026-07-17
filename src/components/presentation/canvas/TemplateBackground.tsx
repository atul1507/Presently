"use client";

import {
  TemplateId,
} from "../templates";

import {
  PresentationTheme,
} from "../presentationThemes";

interface Props {
  template: TemplateId;
  theme: PresentationTheme | null;
}

export default function TemplateBackground({
  template,
  theme,
}: Props) {
  if (template === "original") {
    return null;
  }

  return (
    <>
      {/* Base */}
      <div
        className="absolute inset-0"
        style={{
          background: theme?.background,
        }}
      />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-3 w-full overflow-hidden rounded-t-2xl">
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(
      to right,
      ${theme?.primary},
      ${theme?.secondary},
      ${theme?.primary}
    )`,
          }}
        />
      </div>

      {/* Top Left Circle */}
      <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/70 backdrop-blur-sm" />

      {/* Bottom Right Circle */}
      <div
        className="absolute bottom-10 right-10 h-32 w-32 rounded-full backdrop-blur-sm"
        style={{
          backgroundColor: `${theme?.secondary}66`,
        }}
      />

      {/* Bottom Right Triangle */}
      <div
        className="
    absolute
    bottom-0
    right-0
    h-0
    w-0
    border-b-[72px]
    border-l-[72px]
    border-l-transparent
  "
        style={{
          borderBottomColor: theme?.primary,
        }}
      />
    </>
  );
}