import {
  ShieldCheck,
  QrCode,
  Smartphone,
  Presentation,
  Zap,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Presentation,
    title: "No Login Required",
    description:
      "Start presenting instantly without creating an account or signing in.",
  },
  {
    icon: QrCode,
    title: "QR Based Connection",
    description:
      "Scan a QR code with your phone and connect to your presentation in seconds.",
  },
  {
    icon: Smartphone,
    title: "Phone as Remote",
    description:
      "Navigate slides, jump between pages and control your presentation naturally.",
  },
  {
    icon: Presentation,
    title: "Works Everywhere",
    description:
      "Compatible with projectors, TVs, smart boards and classroom displays.",
  },
  {
    icon: Zap,
    title: "Fast Upload",
    description:
      "Optimized uploads make even large presentations ready within seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Sessions",
    description:
      "Temporary encrypted sessions are automatically removed after completion.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            Why Presently?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Everything you need to present confidently from any screen using
            only your phone.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="text-blue-600" size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}