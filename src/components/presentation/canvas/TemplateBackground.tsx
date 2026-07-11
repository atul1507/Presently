interface Props {
  primary: string;
  secondary: string;
  accent: string;
}

export default function ThemeBackground({
  primary,
  secondary,
  accent,
}: Props) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
    >
      {/* Background */}

      <rect
        width="1600"
        height="900"
        fill="white"
      />

      {/* Top Accent */}

      <path
        d="M0 0 L460 0 L560 80 L0 80 Z"
        fill={primary}
        opacity="0.08"
      />

      {/* Bottom Accent */}

      <path
        d="M1040 820 L1600 820 L1600 900 L940 900 Z"
        fill={primary}
        opacity="0.08"
      />

      {/* Top Right Polygon */}

      <polygon
        points="1480,40 1560,40 1560,120"
        fill={secondary}
        opacity="0.15"
      />

      {/* Bottom Left Polygon */}

      <polygon
        points="40,780 120,860 40,860"
        fill={secondary}
        opacity="0.15"
      />

      {/* Top Divider */}

      <line
        x1="110"
        y1="120"
        x2="1490"
        y2="120"
        stroke={accent}
        strokeWidth="2"
      />

      {/* Bottom Divider */}

      <line
        x1="110"
        y1="780"
        x2="1490"
        y2="780"
        stroke={accent}
        strokeWidth="2"
      />

      {/* Decorative Line */}

      <path
        d="M1260 140 L1480 140"
        stroke={primary}
        strokeWidth="4"
        opacity=".25"
      />

      {/* Decorative Line */}

      <path
        d="M120 760 L340 760"
        stroke={primary}
        strokeWidth="4"
        opacity=".25"
      />
    </svg>
  );
}