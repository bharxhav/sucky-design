import type { Metadata } from "next";
import { Gupter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const gupter = Gupter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sucky Design?",
  description: "Sucky Design? is your design studio that makes sucky designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gupter.className}>
        <div className="flex justify-between items-center p-4 m-2">
          <h1>
            <Link href="/">Sucky Design?</Link>
          </h1>
          <div>
            <Link href="https://its-ours.org?by=sucky-design" target="_blank">
              its-ours.org
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
