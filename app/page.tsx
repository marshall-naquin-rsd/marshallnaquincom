import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-md space-y-3 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Marshall Naquin
        </h1>
        <p className="text-lg text-muted-foreground">marshallnaquin.com</p>
        <Link
          href="/downloads"
          className="inline-block pt-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Downloads
        </Link>
      </div>
    </main>
  );
}
