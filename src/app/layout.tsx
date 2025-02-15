import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
