import PresentationPreview from "@/components/presentation/PresentationPreview";
import PresentationSidebar from "@/components/presentation/PresentationSidebar";

interface Props {
  params: Promise<{
    presentationId: string;
  }>;
}

export default async function PresentationPage({
  params,
}: Props) {
  const { presentationId } = await params;

  return (
    <main className="h-full overflow-hidden bg-slate-100">
      <div className="grid h-full grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-6 overflow-hidden p-6">
        <PresentationSidebar />

        <PresentationPreview presentationId={presentationId} />
      </div>
    </main>
  );
}