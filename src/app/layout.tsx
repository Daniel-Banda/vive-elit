import type { Metadata } from "next";
import { Josefin_Slab, Tenor_Sans, Lato } from "next/font/google"; // Import fonts
import "./globals.css";

const josefin = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vive Elit | Inmobiliaria de Lujo",
  description: "Más de 500 propiedades exclusivas a tu alcance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${josefin.variable} ${tenor.variable} ${lato.variable}`}>
      <body className="antialiased bg-white font-sans">
        {children}
      </body>
    </html>
  );
}