export default function Noise() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] mix-blend-multiply"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}