"use client";

import { BrandingSettings } from "./branding";

interface Props {
  branding: BrandingSettings;

  onBrandingChange: (
    branding: BrandingSettings
  ) => void;
}

export default function BrandingPanel({
  branding,
  onBrandingChange,
}: Props) {
  return (
    <section className="mt-10">

      <h2 className="text-xl font-semibold">
        Branding
      </h2>

      <div className="mt-6 space-y-6">

        {/* Logo */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Logo
          </label>

          <button
            className="flex h-24 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-500 transition hover:border-blue-500 hover:bg-blue-50"
          >
            Upload Logo
          </button>

        </div>

        {/* Presentation Title */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Presentation Title
          </label>

          <input
            type="text"
            value={branding.title}
            onChange={(e) =>
              onBrandingChange({
                ...branding,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Company Tagline */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Company Tagline
          </label>

          <input
            type="text"
            value={branding.tagline}
            onChange={(e) =>
              onBrandingChange({
                ...branding,
                tagline: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />

        </div>

      </div>

    </section>
  );
}