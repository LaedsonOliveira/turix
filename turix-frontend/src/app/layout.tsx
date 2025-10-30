import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Turix - Agência de Turismo",
  description: "Descubra os melhores destinos no Brasil",
};

export default function RootLayout({ children, }: Readonly <{ children: React.ReactNode; }>) {

  return (
    <html lang="pt-br">
      <body >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  );
}
