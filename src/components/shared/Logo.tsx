interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({
  size = 40,
  showText = true,
}: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className="flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          width={size * 0.58}
          height={size * 0.58}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M9 12H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M12 9V15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <span className="text-2xl font-semibold tracking-tight text-slate-900">
          Presently
        </span>
      )}
    </div>
  );
}