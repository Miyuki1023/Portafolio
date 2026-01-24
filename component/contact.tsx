"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Phone, Mail, Send, X, Linkedin } from "lucide-react";

interface Props {
  children?: React.ReactNode;
}

export default function ContactModal({ children }: Props) {
  const [open, setOpen] = useState(false);
  const whatsappNumber = "51936693905";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const text = `Hola, mi nombre es ${name}. ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    setOpen(false);
  }

  return (
    <>
      {/* CTA */}
      {children ? (
        <div onClick={() => setOpen(true)} className="contents cursor-pointer">
          {children}
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="btn-primary">
          Contáctame
        </button>
      )}

      {open &&
        createPortal(
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-3 sm:px-6 animate-in fade-in"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={() => setOpen(false)}
          >
            <div 
              className="relative w-full max-w-[95vw] sm:max-w-xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-primary/10 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <X className="text-muted" size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* INFO */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3" style={{ backgroundColor: "var(--color-bg-main)", color: "var(--color-accent)" }}>
                      CONTACTO
                    </span>
                    <h2 className="font-title text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>
                      Información de contacto
                    </h2>
                  </div>

                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Si deseas ponerte en contacto conmigo para una propuesta profesional, proyecto digital o colaboración, estaré encantada de conversar contigo.
                  </p>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50">
                      <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-bg-main)" }}>
                        <Phone className="text-primary" size={20} />
                      </div>
                      <a href="tel:+51936693905" className="hover:text-primary transition-colors" style={{ color: "var(--color-dark)" }}>
                        +51 936 693 905
                      </a>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50">
                      <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-bg-main)" }}>
                        <Mail className="text-primary" size={20} />
                      </div>
                      <a href="mailto:miyukikahori@gmail.com" className="hover:text-primary transition-colors" style={{ color: "var(--color-dark)" }}>
                        miyukikahori@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <a
                      href="https://www.linkedin.com/in/miyuki-panduro-huarote-742568237"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl p-6 sm:p-8 flex flex-col gap-5 border border-gray-100"
                  style={{ backgroundColor: "var(--color-soft)" }}
                >
                  <h3 className="font-title text-lg sm:text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
                    Enviar mensaje
                  </h3>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre completo"
                    className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none transition-all duration-300 text-sm"
                    style={{ backgroundColor: "white" }}
                  />

                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describa brevemente su proyecto o consulta"
                    className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none resize-none transition-all duration-300 text-sm"
                    style={{ backgroundColor: "white" }}
                  />

                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2 mt-2"
                  >
                    Enviar mensaje por WhatsApp
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
