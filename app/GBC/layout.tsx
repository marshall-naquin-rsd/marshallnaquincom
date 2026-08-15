import type { Metadata } from "next";
import { Archivo, Archivo_Black, Fraunces, Inter } from "next/font/google";
import "./gbc.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-gbc-archivo",
  weight: ["400", "500"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-gbc-black",
  weight: "400",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-gbc-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-gbc-inter",
});

export const metadata: Metadata = {
  title: "Greenbriar Grove",
  description: "Homepage samples for Greenbriar Grove.",
};

export default function GbcLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${archivo.variable} ${archivoBlack.variable} ${fraunces.variable} ${inter.variable} gbc`}
    >
      {children}
    </div>
  );
}
