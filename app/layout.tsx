import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonchalon | Pokemon-Inspired Portfolio",
  description: "Explore my projects and work inspired by classic Pokemon games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
