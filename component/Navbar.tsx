"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactModal from "./contact";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-auto">
      <div
        className="flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-8 py-3 sm:py-3 rounded-full shadow-md backdrop-blur-md transition-all duration-300 border border-white/20"
        style={{ 
          backgroundColor: "rgba(255, 243, 251, 0.95)",
          boxShadow: "0 8px 32px rgba(221, 45, 74, 0.1)"
        }}
      >
        {/* Logo - Responsive */}
        <Link
          href="/"
          className="flex items-center hover:scale-105 transition-transform duration-300 flex-shrink-0"
          aria-label="Ir al inicio - Miyu Studio"
        >
          <div className="relative w-24 h-7 sm:w-32 sm:h-9 lg:w-40 lg:h-12">
            <Image
              src="/logo-miyu.png"
              alt="Miyu Studio"
              fill
              className="object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 lg:gap-12">
          <div className="w-px h-6" style={{ backgroundColor: "var(--color-border)" }} />

          <ul className="flex items-center gap-6 sm:gap-8 font-body text-xs sm:text-sm">
            <li>
              <Link
                href="/about"
                className="link-hover-primary font-medium transition-colors duration-300 hover:opacity-70 whitespace-nowrap"
                style={{ color: "var(--color-secondary)" }}
              >
                Sobre mi
              </Link>
            </li>

            <li>
              <Link
                href="/portafolio"
                className="link-hover-primary font-medium transition-colors duration-300 hover:opacity-70 whitespace-nowrap"
                style={{ color: "var(--color-secondary)" }}
              >
                Portafolio
              </Link>
            </li>

            <li>
              <ContactModal />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-1.5 rounded-lg transition-colors duration-300 flex-shrink-0"
          style={{ color: "var(--color-secondary)" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 top-16 bg-black/25 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="sm:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[calc(100%-1rem)] rounded-2xl shadow-md backdrop-blur-md border border-white/20 p-4 animate-in fade-in slide-in-from-top-2 duration-300 z-50"
          style={{ 
            backgroundColor: "rgba(255, 243, 251, 0.95)",
            boxShadow: "0 8px 32px rgba(221, 45, 74, 0.1)"
          }}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/about"
                className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:opacity-70"
                style={{ color: "var(--color-secondary)" }}
                onClick={() => setIsOpen(false)}
              >
                Sobre mi
              </Link>
            </li>

            <li>
              <Link
                href="/portafolio"
                className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:opacity-70"
                style={{ color: "var(--color-secondary)" }}
                onClick={() => setIsOpen(false)}
              >
                Portafolio
              </Link>
            </li>

            <li className="pt-2 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
              <div onClick={() => setIsOpen(false)}>
                <ContactModal />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
