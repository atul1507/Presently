import { PresentationTheme } from "./presentationThemes";

function clamp(value: number, min = 0, max = 255) {
    return Math.min(max, Math.max(min, value));
}

function normalizeHex(hex: string) {
    let value = hex.trim().replace("#", "");

    // Expand #RGB → #RRGGBB
    if (value.length === 3) {
        value = value
            .split("")
            .map((c) => c + c)
            .join("");
    }

    // Fallback if invalid
    if (!/^[0-9A-Fa-f]{6}$/.test(value)) {
        return "#2563EB";
    }

    return `#${value.toUpperCase()}`;
}

function hexToRgb(hex: string) {
    const normalized = normalizeHex(hex).replace("#", "");

    return {
        r: parseInt(normalized.substring(0, 2), 16),
        g: parseInt(normalized.substring(2, 4), 16),
        b: parseInt(normalized.substring(4, 6), 16),
    };
}

function rgbToHex(r: number, g: number, b: number) {
    return (
        "#" +
        [r, g, b]
            .map((value) =>
                clamp(value)
                    .toString(16)
                    .padStart(2, "0")
            )
            .join("")
            .toUpperCase()
    );
}

function lighten(hex: string, amount: number) {
    const { r, g, b } = hexToRgb(hex);

    return rgbToHex(
        r + amount,
        g + amount,
        b + amount
    );
}

function darken(hex: string, amount: number) {
    const { r, g, b } = hexToRgb(hex);

    return rgbToHex(
        r - amount,
        g - amount,
        b - amount
    );
}

export function createCustomTheme(
    color: string
): PresentationTheme {
    const normalized = normalizeHex(color);

    return {
        primary: darken(normalized, 25),

        secondary: lighten(normalized, 45),

        background: `linear-gradient(
            135deg,
            ${lighten(normalized, 175)} 0%,
            ${lighten(normalized, 90)} 42%,
            ${darken(normalized, 15)} 100%
        )`,
    };
}