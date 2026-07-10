export default function DotPattern() {
  return (
    <div
      className="absolute inset-0 -z-20 opacity-[0.35]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(37,99,235,.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}