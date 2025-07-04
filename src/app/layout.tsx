import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";

const dm_mono = DM_Mono({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KRMA",
  description: "KRMA Team Vitrine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_mono.className} bg-background text-foreground`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
