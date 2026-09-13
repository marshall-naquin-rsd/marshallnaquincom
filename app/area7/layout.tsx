import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./area7.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-area7-heading",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "2027 Area 7 Mini-Conference",
  description:
    "Save the date: Fall 2027 Mini-Conference in Baton Rouge, Louisiana. A weekend of fellowship, workshops, and games.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Area7Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${leagueSpartan.variable} area7`}>{children}</div>;
}
