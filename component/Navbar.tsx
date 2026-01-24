"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import ContactModal from "./contact";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-8 px-8 py-3 rounded-full shadow-md backdrop-blur-md transition-all duration-300 border border-white/20"
        style={{ 
          backgroundColor: "rgba(255, 243, 251, 0.95)",
          boxShadow: "0 8px 32px rgba(221, 45, 74, 0.1)"
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-title text-sm font-bold hover:scale-110 transition-transform duration-300"
          style={{ color: "var(--color-secondary)" }}
        >
          <div className="p-1.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }}>
            <Sparkles
              size={14}
              style={{ color: "var(--color-bg-main)" }}
            />
          </div>
          Miyuki
        </Link>

        <div className="w-px h-6" style={{ backgroundColor: "var(--color-border)" }} />

        <ul className="flex items-center gap-8 font-body text-sm">
          <li>
            <Link
              href="/about"
              className="link-hover-primary font-medium"
              style={{ color: "var(--color-secondary)" }}
            >
              Sobre mi
            </Link>
          </li>

          <li>
            <Link
              href="/portafolio"
              className="link-hover-primary font-medium"
              style={{ color: "var(--color-secondary)" }}
            >
              Portafolio
            </Link>
          </li>

          {/* CTA */}
          <li>
            <ContactModal />
          </li>
        </ul>
      </div>
    </nav>
  );
}
