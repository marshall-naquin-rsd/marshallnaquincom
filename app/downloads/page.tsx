import type { Metadata } from "next";
import Link from "next/link";
import {
  getDisplayName,
  getDownloadFiles,
  getDownloadUrl,
} from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Files available for download.",
};

export default function DownloadsPage() {
  const files = getDownloadFiles();

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="w-full max-w-lg space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Downloads
          </h1>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back home
          </Link>
        </div>

        {files.length === 0 ? (
          <p className="text-center text-muted-foreground">No files yet.</p>
        ) : (
          <ul className="divide-y divide-border rounded-lg border border-border">
            {files.map((filename) => {
              const url = getDownloadUrl(filename);

              return (
                <li
                  key={filename}
                  className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-foreground">
                    {getDisplayName(filename)}
                  </span>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Open
                    </a>
                    <a
                      href={url}
                      download={filename}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Download
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
