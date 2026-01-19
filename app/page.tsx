"use client";

import { useState } from "react";
import Hero from "@/pages/Hero";
import Loading from "@/component/Carga";
import Footer from "@/component/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </>
  );
}
 