// "use client";

// import "@react-pdf-viewer/core/lib/styles/index.css";

// import { Viewer, Worker } from "@react-pdf-viewer/core";

// interface Props {
//   fileUrl: string;
// }

// export default function PdfViewer({
//   fileUrl,
// }: Props) {
//   return (
//     <div className="h-full w-full overflow-hidden rounded-xl bg-white">
//       <Worker workerUrl="/pdf.worker.min.mjs">
//         <Viewer fileUrl={fileUrl} />
//       </Worker>
//     </div>
//   );
// }