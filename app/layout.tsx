import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jon | Dancer, Content Creator & Collaborator",
  description: "Professional brand hub showcasing dance portfolio, hobby content, and collaboration opportunities",
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
