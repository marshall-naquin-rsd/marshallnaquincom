import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Greenbriar Grove — Samples",
  description: "Two homepage directions for Greenbriar Grove.",
};

const samples = [
  {
    href: "/GBC/a",
    name: "Direction A",
    subtitle: "Field Recording",
    preview: "/gbc/a/preview.png",
    width: 390,
    height: 1282,
  },
  {
    href: "/GBC/b",
    name: "Direction B",
    subtitle: "Roots",
    preview: "/gbc/b/preview.png",
    width: 390,
    height: 2371,
  },
] as const;

export default function GbcIndexPage() {
  return (
    <main className="gbc-shell px-6 py-12">
      <p className="gbc-kicker">Greenbriar Grove</p>
      <h1 className="gbc-display mt-3">Two homepage samples</h1>
      <p className="gbc-font-archivo mt-4 text-[15px] leading-[1.55] text-gbc-warm">
        Open either direction on your phone and scroll it like a real site.
      </p>
      <ul className="mt-10 grid gap-8">
        {samples.map((sample) => (
          <li key={sample.href}>
            <Link
              href={sample.href}
              className="block overflow-hidden rounded-[2px] border border-gbc-ink/20"
            >
              <div className="relative h-[420px] overflow-hidden bg-gbc-base">
                <Image
                  src={sample.preview}
                  alt={`${sample.name} — ${sample.subtitle}`}
                  width={sample.width}
                  height={sample.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="flex items-center justify-between bg-gbc-base-warm px-4 py-4">
                <div>
                  <p className="gbc-font-archivo text-[14px] font-medium text-gbc-ink">
                    {sample.name}
                  </p>
                  <p className="gbc-font-archivo text-[11px] text-gbc-warm">
                    {sample.subtitle}
                  </p>
                </div>
                <span className="gbc-font-archivo text-[13px] tracking-[1.6px] text-gbc-ink">
                  OPEN
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
