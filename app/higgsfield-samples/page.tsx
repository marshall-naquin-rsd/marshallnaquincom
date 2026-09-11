import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Higgsfield Seedance samples — unusable text renders (2026-09-11)",
  description:
    "Completed Seedance 2.5 generations charged as successful but required place/URL text is garbled. Published for Higgsfield support review.",
  robots: {
    index: true,
    follow: true,
  },
};

const samples = [
  {
    id: "post2",
    label: "Post 2 Gam-Anon",
    required: ["Gam-Anon · Mondays 7pm · Baton Rouge", "batonrougega.org"],
    appeared: [
      "Gamam-Anonon Mondayssy 7ppmm Battton Roage",
      "battonroch1ga.org",
    ],
    still: "/higgsfield-samples/post2-garbled-end.jpg",
    video: "/higgsfield-samples/post2-gamanon-unusable.mp4",
    stillAlt:
      "Post 2 end-card still with garbled Gam-Anon, Baton Rouge, and website text",
    videoLabel: "Post 2 Gam-Anon unusable Seedance Reel",
  },
  {
    id: "post4",
    label: "Post 4 meeting",
    required: ["Open GA meetings", "batonrougega.org"],
    appeared: ["Oopen GAA meetinggs", "battonrouchatga.org"],
    still: "/higgsfield-samples/post4-garbled-end.jpg",
    video: "/higgsfield-samples/post4-meeting-unusable.mp4",
    stillAlt:
      "Post 4 end-card still with garbled Open GA meetings and website text",
    videoLabel: "Post 4 meeting unusable Seedance Reel",
  },
  {
    id: "post6",
    label: "Post 6 app",
    required: ["GA meetings · Greater Baton Rouge", "batonrougega.org"],
    appeared: [
      "GA meetinngs — Greetter Bettton Rickell",
      "battonrodgehga.org",
    ],
    still: "/higgsfield-samples/post6-garbled-end.jpg",
    video: "/higgsfield-samples/post6-app-unusable.mp4",
    stillAlt:
      "Post 6 end-card still with garbled Greater Baton Rouge and website text",
    videoLabel: "Post 6 app unusable Seedance Reel",
  },
] as const;

export default function HiggsfieldSamplesPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="w-full max-w-3xl space-y-12">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Higgsfield Seedance samples — unusable text renders
            (2026-09-11)
          </h1>
          <p className="text-muted-foreground">
            Completed Seedance 2.5 generations charged as successful but
            required place/URL text is garbled. Published for Higgsfield
            support review.
          </p>
          <Link
            href="/"
            className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back home
          </Link>
        </header>

        <ol className="space-y-12">
          {samples.map((sample) => (
            <li
              key={sample.id}
              className="space-y-5 rounded-lg border border-border p-5 sm:p-6"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {sample.label}
              </h2>

              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <div className="space-y-1">
                  <dt className="font-medium text-foreground">Required text</dt>
                  {sample.required.map((line) => (
                    <dd key={line} className="font-mono text-muted-foreground">
                      {line}
                    </dd>
                  ))}
                </div>
                <div className="space-y-1">
                  <dt className="font-medium text-foreground">What appeared</dt>
                  {sample.appeared.map((line) => (
                    <dd key={line} className="font-mono text-muted-foreground">
                      {line}
                    </dd>
                  ))}
                </div>
              </dl>

              <div className="grid gap-6 sm:grid-cols-2">
                <figure className="space-y-2">
                  <Image
                    src={sample.still}
                    alt={sample.stillAlt}
                    width={720}
                    height={1280}
                    unoptimized
                    loading={sample.id === "post2" ? "eager" : "lazy"}
                    className="h-auto w-full rounded-md border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground">
                    End-card still —{" "}
                    <a
                      href={sample.still}
                      className="underline underline-offset-2 transition-colors hover:text-foreground"
                    >
                      open image
                    </a>
                  </figcaption>
                </figure>

                <figure className="space-y-2">
                  <video
                    className="h-auto w-full rounded-md border border-border"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={sample.videoLabel}
                  >
                    <source src={sample.video} type="video/mp4" />
                    Your browser does not support the video tag.{" "}
                    <a href={sample.video}>Download the MP4</a>.
                  </video>
                  <figcaption className="text-sm text-muted-foreground">
                    Full Reel —{" "}
                    <a
                      href={sample.video}
                      className="underline underline-offset-2 transition-colors hover:text-foreground"
                    >
                      open video
                    </a>
                  </figcaption>
                </figure>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
