import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CITY QUEENÉ | Burqas • Dupattas • Stoles",
  description: "Discover elegant burqas, dupattas, and stoles from CITY QUEENÉ Shop our collection of stylish and comfortable pieces that are perfect for any occasion.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
