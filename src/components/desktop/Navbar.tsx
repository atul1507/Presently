"use client";

import Container from "@/components/shared/Container";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-gray-200 bg-white">
      <Container className="flex h-full items-center">
        <h1 className="text-[2rem] font-semibold tracking-tight text-[var(--presently-text)]">
          Presently
        </h1>
      </Container>
    </header>
  );
}