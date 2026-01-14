import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";  
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="js-focus-visible" data-js-focus-visible="">
      <body className={`${playfair.variable} ${inter.variable} font-body antialiased text-dark`}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
