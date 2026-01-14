"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import ContactModal from "./contact";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Pill container */}
      <div
        className="flex items-center gap-8 px-8 py-3 rounded-full shadow-md"
        style={{ backgroundColor: "var(--color-bg-main)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-title text-sm"
          style={{ color: "var(--color-secondary)" }}
        >
          <Sparkles
            size={16}
            style={{ color: "var(--color-primary)" }}
          />
          Miyuki
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-body text-sm">
          <li>
            <Link
              href="/about"
              className="transition"
              style={{ color: "var(--color-secondary)" }}
            >
              Sobre mi
            </Link>
          </li>

          <li>
            <Link
              href="/portafolio"
              className="transition"
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
