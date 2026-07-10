import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between text-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Presently
          </h2>

          <p className="text-slate-500">
            © {new Date().getFullYear()} Presently. All rights reserved.
          </p>

          <button className="font-medium text-slate-600 transition-colors hover:text-blue-600">
            Contact
          </button>
        </div>
      </Container>
    </footer>
  );
}