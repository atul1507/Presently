"use client";

interface Props {
    color: string;
    onChange: (color: string) => void;
}

export default function CustomColorPicker({
    color,
    onChange,
}: Props) {
    return (
        <div className="space-y-4 rounded-2xl border bg-white p-5">
            <div>
                <h3 className="text-sm font-semibold">
                    Custom Theme
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                    Choose a primary color for your
                    presentation. We'll automatically
                    generate a premium theme.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <input
                    type="color"
                    value={color}
                    onChange={(e) =>
                        onChange(e.target.value)
                    }
                    className="h-12 w-12 cursor-pointer rounded-lg border"
                />

                <input
                    type="text"
                    value={color}
                    onChange={(e) =>
                        onChange(e.target.value)
                    }
                    placeholder="#2563EB"
                    className="flex-1 rounded-lg border px-3 py-2 text-sm font-mono"
                />
            </div>
        </div>
    );
}