import { Colophon } from "@/components/Colophon";
import { Masthead } from "@/components/Masthead";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Masthead />
      {children}
      <Colophon />
    </>
  );
}
