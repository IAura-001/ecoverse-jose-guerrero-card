import type { Metadata, Viewport } from "next";
import "./globals.css";

const productionUrl = process.env.NEXT_PUBLIC_CARD_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: "José Guerrero | ECOVERSE",
  description: "Ejecutiva de Ventas en ECOVERSE",
  applicationName: "ECOVERSE Card",
  openGraph: {
  title: "José Guerrero | ECOVERSE",
  description: "Ejecutivo de Ventas en ECOVERSE",
  type: "profile",
  images: [
    {
      url: "/og-jose.png",
      width: 1536,
      height: 864,
      alt: "José Guerrero — Ejecutivo de Ventas en ECOVERSE",
    },
  ],
},
  twitter: {
  card: "summary_large_image",
  title: "José Guerrero | ECOVERSE",
  description: "Ejecutivo de Ventas en ECOVERSE",
  images: ["/og-jose.png"],
},
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#050607", colorScheme: "dark light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es"><body>{children}</body></html>;
}
