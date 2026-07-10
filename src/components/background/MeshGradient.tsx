export default function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-40 overflow-hidden">
     <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[180px]" />

<div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[180px]" />

<div className="absolute bottom-[-20%] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[220px]" />
    </div>
  );
}