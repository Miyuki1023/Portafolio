"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const name = "miyuki".split("");

const Bow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M60 30 C40 10, 10 10, 10 30 C10 50, 40 50, 60 30
         C80 10, 110 10, 110 30 C110 50, 80 50, 60 30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Loading({ onComplete }: { onComplete?: () => void }) {
  // ⏱️ cuando termina la intro → Hero
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-bg-main)] overflow-hidden">

      {/* Lazos */}
      <motion.div
        className="absolute top-[30%] left-[38%] text-[var(--color-primary)] w-24"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bow />
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] right-[38%] text-[var(--color-primary)] w-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bow />
      </motion.div>

      {/* Nombre escribiéndose */}
      <motion.h1
        className="font-script text-6xl sm:text-7xl text-[var(--color-secondary)] flex"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {name.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
