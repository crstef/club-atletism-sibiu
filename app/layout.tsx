import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Club Atletism Sibiu",
  description: "Platforma web oficiala a Club Atletism Sibiu - evenimente, echipe, atleți și știri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased font-sans">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
