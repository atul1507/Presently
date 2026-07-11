export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full overflow-hidden">
      {children}
    </main>
  );
}