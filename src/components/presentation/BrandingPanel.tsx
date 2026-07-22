"use client";

import { useRef } from "react";

import { Check, Trash2 } from "lucide-react";

import { BrandingSettings } from "./branding";

import { uploadPresentationLogo } from "@/lib/supabase/storage";

interface Props {
  branding: BrandingSettings;

  onBrandingChange: (
    branding: BrandingSettings
  ) => void;

  disabled?: boolean;
}

export default function BrandingPanel({
  branding,
  onBrandingChange,
  disabled = false,
}: Props) {

  const fileInputRef = useRef<HTMLInputElement>(null);


  return (
    <section className="mt-10">

      <div>

        <h2 className="text-xl font-semibold">
          Branding
        </h2>

        <p className="mt-2 text-slate-500">
          Personalize your presentation with your organization branding.
        </p>

      </div>

      {disabled && (
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm text-amber-700">
            Select a presentation template to enable branding.
          </p>
        </div>
      )}

      <div
        className={`mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-6 ${disabled ? "opacity-60" : ""
          }`}
      >

        {/* Logo */}

        <div>

          <label className="mb-3 block text-sm font-medium text-slate-700">
            Logo
          </label>

          <button
            type="button"
            disabled={disabled}
            onClick={() => fileInputRef.current?.click()}
            className="group flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-5 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:shadow-none disabled:hover:border-slate-200 disabled:hover:shadow-none"
          >

            {/* Preview */}

            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 transition group-hover:border-blue-300 group-hover:bg-white">

              {branding.logoUrl ? (
                <img
                  src={branding.logoUrl}
                  alt="Logo Preview"
                  className={`h-full w-full object-cover ${branding.logoShape === "circle"
                    ? "rounded-full"
                    : branding.logoShape === "rounded"
                      ? "rounded-xl"
                      : "rounded-none"
                    }`}
                />
              ) : (
                <span className="text-xl">
                  🖼️
                </span>
              )}

            </div>

            <p className="mt-3 font-semibold text-slate-700 disabled:cursor-not-allowed ">
              {branding.logoUrl ? "Change Logo" : "Upload Logo"}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {branding.logoUrl
                ? "Click to replace your logo"
                : "PNG, JPG or SVG"}
            </p>

          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml"
            disabled={disabled}
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];

              if (!file) return;

              try {
                const logoUrl = await uploadPresentationLogo(file);

                onBrandingChange({
                  ...branding,
                  logoFile: file,
                  logoUrl,
                });
              } catch (error) {
                console.error("Failed to upload logo:", error);
              }
            }}
          />

          {branding.logoUrl && (
            <button
              type="button"
              disabled={disabled}
              onClick={() => {
                if (disabled) return;
                onBrandingChange({
                  ...branding,
                  logoUrl: undefined,
                  logoFile: undefined,
                })
              }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:shadow-none disabled:hover:border-slate-200 disabled:hover:shadow-none"
            >
              <Trash2 size={16} />
              Remove Logo
            </button>
          )}

        </div>

        {/* Logo Shape */}

        <div>

          <label className="mb-3 block text-sm font-medium text-slate-700">
            Logo Shape
          </label>

          <div className="grid grid-cols-3 gap-3">

            {/* Circle */}

            <button
              type="button"
              disabled={disabled}
              onClick={() => {
                if (disabled) return;
                onBrandingChange({
                  ...branding,
                  logoShape: "circle",
                })
              }}
              className={`group relative rounded-2xl border p-4 text-center transition-all duration-200 ${disabled ? "cursor-not-allowed border-slate-200 bg-slate-100 shadow-none" : branding.logoShape === "circle" ? "border-blue-500 bg-blue-50 shadow-md" : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"}`}
            >

              {!disabled && branding.logoShape === "circle" && (
                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check size={14} />
                </div>
              )}

              <div
                className={`mx-auto h-10 w-10 rounded-full border-2 transition-colors ${disabled
                  ? "border-slate-300"
                  : "border-slate-400 group-hover:border-blue-400"
                  }`}
              />

              <p className="mt-3 text-sm font-medium text-slate-800">
                Circle
              </p>

            </button>

            {/* Rounded */}

            <button
              type="button"
              disabled={disabled}
              onClick={() => {
                if (disabled) return;
                onBrandingChange({
                  ...branding,
                  logoShape: "rounded",
                })
              }}
              className={`group relative rounded-2xl border p-4 text-center transition-all duration-200 ${disabled ? "cursor-not-allowed border-slate-200 bg-slate-100 shadow-none" : branding.logoShape === "rounded" ? "border-blue-500 bg-blue-50 shadow-md" : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"}`}
            >

              {!disabled && branding.logoShape === "rounded" && (
                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check size={14} />
                </div>
              )}

              <div
                className={`mx-auto h-10 w-10 rounded-xl border-2 transition-colors ${disabled
                  ? "border-slate-300"
                  : "border-slate-400 group-hover:border-blue-400"
                  }`}
              />

              <p className="mt-3 text-sm font-medium text-slate-800">
                Rounded
              </p>

            </button>

            {/* Square */}

            <button
              type="button"
              disabled={disabled}
              onClick={() => {
                if (disabled) return;
                onBrandingChange({
                  ...branding,
                  logoShape: "square",
                })
              }}
              className={`group relative rounded-2xl border p-4 text-center transition-all duration-200 ${disabled ? "cursor-not-allowed border-slate-200 bg-slate-100 shadow-none" : branding.logoShape === "square" ? "border-blue-500 bg-blue-50 shadow-md" : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"}`}
            >

              {!disabled && branding.logoShape === "square" && (
                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check size={14} />
                </div>
              )}

              <div
                className={`mx-auto h-10 w-10 border-2 transition-colors ${disabled
                  ? "border-slate-300"
                  : "border-slate-400 group-hover:border-blue-400"
                  }`}
              />

              <p className="mt-3 text-sm font-medium text-slate-800">
                Square
              </p>

            </button>

          </div>

        </div>

        {/* Presentation Title */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Presentation Title
          </label>

          <input
            type="text"
            disabled={disabled}
            value={branding.title}
            placeholder="Presentation Title (Optional)"
            onChange={(e) => {
              if (disabled) return;
              onBrandingChange({
                ...branding,
                title: e.target.value,
              })
            }}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:shadow-none disabled:hover:border-slate-200 disabled:hover:shadow-none"
          />

        </div>

        {/* Company Tagline */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Company Tagline
          </label>

          <input
            type="text"
            disabled={disabled}
            value={branding.tagline}
            placeholder="Company Tagline (Optional)"
            onChange={(e) => {
              if (disabled) return;
              onBrandingChange({
                ...branding,
                tagline: e.target.value,
              })
            }}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:shadow-none disabled:hover:border-slate-200 disabled:hover:shadow-none"
          />

        </div>

      </div>

    </section>
  );
}