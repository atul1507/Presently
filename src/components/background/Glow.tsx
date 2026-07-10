export default function Glow() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden">
      <div className="absolute left-1/2 top-32 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[180px]" />
    </div>
  );
}