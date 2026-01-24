"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  onComplete?: () => void;
}

export default function Carga({ onComplete }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#4b0026]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-6">
            {/* FIRMA */}
            <svg
              width="320"
              height="120"
              viewBox="0 0 320 120"
              fill="none"
            >
              <motion.path
                d="M10 80 
                   C 40 20, 90 20, 120 70
                   S 180 120, 210 70
                   S 260 20, 310 60"
                stroke="#f6b1c8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* PUNTO CURSOR */}
              <motion.circle
                cx="310"
                cy="60"
                r="3"
                fill="#ffd6e5"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* TEXTO */}
            <motion.p
              className="tracking-[0.3em] text-sm text-[#ffd6e5]"
              initial={{ opacity: 0, y: 6 }}
              style={{color:"#ffd6e5"}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              UX / UI DESIGNER
            </motion.p>
          </div>
        </motion.div>
  );
}
