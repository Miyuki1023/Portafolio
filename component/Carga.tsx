"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Agbalumo } from "next/font/google";

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

export default function Carga({ onComplete }: { onComplete?: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), 3800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-[9999]"
      style={{ backgroundColor: "var(--color-bg-main)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ATMÓSFERA SUAVE */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      {/* 🎀 LAZO PRINCIPAL */}
      <motion.div
        className="
          absolute
          top-[8%]
          right-[4%]
          w-[60vw]
          sm:w-[40vw]
          lg:w-[22rem]
          opacity-90
        "
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 1.2 },
          scale: { duration: 1.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src="/lazo2.png"
          alt="Detalle decorativo"
          width={700}
          height={800}
          priority
          aria-hidden="true" // Accesibilidad: Es decorativo
        />
      </motion.div>

      {/* 🎀 DETALLE SECUNDARIO */}
      <motion.div
        className="
          absolute
          bottom-[6%]
          left-[4%]
          w-[35vw]
          sm:w-[22vw]
          lg:w-[14rem]
          opacity-80
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src="/lazo1.png"
          alt="Detalle decorativo"
          width={420}
          height={520}
          priority // Cargar rápido para evitar parpadeos
          aria-hidden="true"
        />
      </motion.div>

      {/* ✨ IDENTIDAD */}
     <motion.h1
  className={`
    relative z-10
    ${agbalumo.className}
    font-bold
    text-center
    tracking-wide
    drop-shadow-[0_10px_28px_rgba(136,13,30,0.25)]
  `}
        style={{
          // clamp(mínimo, preferido, máximo) asegura que el texto escale fluidamente
          fontSize: "clamp(4rem, 20vw, 33rem)", 
          color: "var(--color-secondary)",
          lineHeight: 1,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Miyuki
      </motion.h1>
    </motion.div>
  );
}
