import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "sucky design?",
  description: "sucky design? is your design studio that makes sucky designs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${azeretMono.className} h-full flex flex-col`}>
        <main className="flex-1 h-full">{children}</main>
      </body>
    </html>
  );
}
