import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

export const metadata: Metadata = {
  title: "Phoenix Médical",
  description:
    "Votre confort, notre priorité. Des solutions ergonomiques sur mesure pour un bien-être durable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ConvexClientProvider>
        <body className={`antialiased`}>{children}</body>
      </ConvexClientProvider>
    </html>
  );
}
