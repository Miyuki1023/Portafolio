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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3 sm:px-6">
            <div className="relative w-full max-w-[95vw] sm:max-w-xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl">

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-muted hover:text-secondary transition"
              >
                <X />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* INFO */}
                <div className="space-y-6">
                  <br />
                  <h2 className="font-title text-2xl sm:text-3xl text-secondary">
                    Información de contacto
                  </h2>
<br />
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Si deseas ponerte en contacto conmigo para una propuesta
                    profesional, proyecto digital o colaboración,
                    estaré encantada de conversar contigo.
                  </p>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary" size={18} />
                      <span>+51 936 693 905</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={18} />
                      <span>miyukikahori@gmail.com</span>
                    </div>
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      className="btn-outline flex items-center gap-2"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      className="btn-primary flex items-center gap-2"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-soft rounded-3xl p-5 sm:p-6 flex flex-col gap-5"
                >
                  <h3 className="font-title text-lg sm:text-xl text-secondary">
                    Enviar mensaje
                  </h3>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre completo"
                    className="rounded-xl border border-border px-4 py-3 focus:ring-2 focus:ring-secondary outline-none"
                  />

                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describa brevemente su proyecto o consulta"
                    className="rounded-xl border border-border px-4 py-3 focus:ring-2 focus:ring-secondary outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2"
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
