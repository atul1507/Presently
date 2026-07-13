import PresentationWorkspace from "@/components/presentation/PresentationWorkspace";

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
    <main className="h-full bg-slate-100 overflow-hidden">
      <PresentationWorkspace
        presentationId={presentationId}
      />
    </main>
  );
}