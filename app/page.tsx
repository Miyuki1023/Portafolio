"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion"; // Importante para animaciones de salida
import Hero from "@/pages/Hero";
import Loading from "@/component/Carga";
import Footer from "@/component/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loading key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </>
  );
}
 