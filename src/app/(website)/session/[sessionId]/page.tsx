interface SessionPageProps {
  params: Promise<{
    sessionId: string;
  }>;
}

export default async function SessionPage({
  params,
}: SessionPageProps) {
  const { sessionId } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-10 shadow-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Presentation Ready
          </h1>

          <p className="mt-2 text-slate-600">
            Your presentation has been uploaded successfully.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-500">
            Session ID
          </p>

          <p className="mt-2 break-all font-mono text-lg text-slate-900">
            {sessionId}
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-lg font-medium text-slate-700">
            Presenter Screen
          </p>

          <p className="mt-2 text-slate-500">
            QR Code and presentation controls will appear here next.
          </p>
        </div>
      </div>
    </main>
  );
}