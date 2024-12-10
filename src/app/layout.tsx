import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL("https://phoenixmedical.fr"),
  title: {
    default: "Phoenix Médical",
    template: "%s | Phoenix Médical",
  },
  keywords: [
    "Chaises ergonimiques",
    "Chaises ergonimiques guadeloupe",
    "Guadeloupe",
    "ergonimiques",
    "phoenix medical",
    "phoenix médical",
    "produits ergonimiques",
  ],
  description:
    "Votre confort, notre priorité. Des solutions ergonomiques sur mesure pour un bien-être durable. Que ce soit pour le bureau ou pour les tâches physiques, vous trouverez des solutions innovantes au service de votre santé",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
