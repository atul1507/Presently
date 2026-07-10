import Container from "@/components/shared/Container";
import UploadCard from "./UploadCard";

export default function Hero() {
  return (
    <section className="pt-16 pb-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-6xl font-semibold tracking-tight text-[var(--presently-text)]">
            Upload your presentation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--presently-text-muted)]">
            Upload a PowerPoint or PDF and control your presentation securely
            from your phone in seconds.
          </p>

          <div className="mt-16">
            <UploadCard />
          </div>
        </div>
      </Container>
    </section>
  );
}