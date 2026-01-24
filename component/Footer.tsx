import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* FONDO CON COLORES BRAND */}
      <div 
        className="absolute inset-0 rounded-t-[3rem] -z-10"
        style={{ backgroundColor: "var(--color-secondary)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12" style={{ color: "var(--color-bg-main)" }}>
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* ================= BRAND ================= */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "var(--color-primary)" }}>
                MP
              </div>
              <h3 className="font-title text-2xl font-bold" style={{ color: "var(--color-soft)" }}>
                Miyuki
              </h3>
            </div>
            <div className="h-1 w-12" style={{ backgroundColor: "var(--color-accent)" }} />
            <p className="text-sm leading-relaxed max-w-sm opacity-90" style={{ color: "var(--color-soft)" }}>
              Diseñadora UX/UI & Frontend Developer especializada en crear experiencias digitales funcionales y alineadas a objetivos de negocio.
            </p>
          </div>

         {/* ================= NAV ================= */}
<div className="space-y-5">
  <h4
    className="text-lg font-bold"
    style={{ color: "var(--color-soft)" }}
  >
    Navegación
  </h4>

  <ul className="space-y-3 text-sm">
    {[
      { label: "Sobre mí", href: "/about" },
      { label: "Portafolio", href: "/portafolio" },
      { label: "Contacto", href: "mailto:miyukikahori@gmail.com" },
    ].map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          className="relative inline-block font-medium transition-all duration-300 hover:translate-x-2"
          style={{ color: "var(--color-soft)" }}
        >
          {item.label}
          <span 
            className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold" style={{ color: "var(--color-soft)" }}>
              Contacto
            </h4>

            <ul className="space-y-4 text-sm" style={{ color: "var(--color-soft)" }}>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <div className="p-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }}>
                  <Mail size={14} style={{ color: "var(--color-bg-main)" }} />
                </div>
                <a href="mailto:miyukikahori@gmail.com" className="hover:opacity-80 transition">
                  miyukikahori@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <div className="p-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }}>
                  <Phone size={14} style={{ color: "var(--color-bg-main)" }} />
                </div>
                <a href="tel:+51936693905" className="hover:opacity-80 transition">
                  +51 936 693 905
                </a>
              </li>

              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <div className="p-2 rounded-full" style={{ backgroundColor: "var(--color-soft-pink)" }}>
                  <MapPin size={14} style={{ color: "var(--color-bg-main)" }} />
                </div>
                <span>Lima – Perú</span>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-3 pt-4 text-sm">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/miyuki-panduro-huarote-742568237" },
                { label: "Instagram", href: "https://www.instagram.com" },
                { label: "WhatsApp", href: "https://wa.me/51936693905" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium rounded-full px-4 py-2 text-xs font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 border"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "var(--color-soft)"
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-12" />

        {/* COPYRIGHT */}
        <div className="text-center text-xs opacity-80 space-y-1">
          <p style={{ color: "var(--color-bg-main)" }}>
            © {new Date().getFullYear()} Miyuki Panduro · UX/UI & Frontend Developer
          </p>
          <p style={{ color: "var(--color-bg-main)" }}>
            Diseño centrado en el usuario · Desarrollo con propósito
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;