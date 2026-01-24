import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--color-secondary)] rounded-t-[3rem] overflow-hidden">
      {/* FONDO CURVO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)] to-[#dd2d4a] rounded-t-[3rem] -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 text-[var(--color-bg-main) ]">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* ================= BRAND ================= */}
          <div className="space-y-5">
            <h3 className="font-title text-3xl"style={{ color: "var(--color-soft)" }} >
              Miyuki Panduro
            </h3><br />
            <span className="block w-12 h-[2px] bg-[var(--color-soft-pink)]" />
            <p className="text-sm leading-relaxed max-w-sm opacity-90"style={{ color: "var(--color-soft)" }} >
              Diseñadora UX/UI & Frontend Developer especializada en crear
              experiencias digitales funcionales, accesibles y alineadas a
              objetivos de negocio.
            </p>
          </div>

         {/* ================= NAV ================= */}
<div className="space-y-5 justify-self-center">
  <h4
    className="text-lg font-medium"
    style={{ color: "var(--color-soft)" }}
  >
    Navegación
  </h4>

  <ul className="space-y-3 text-sm text-[var(--color-bg-main)] hover:text-[var(--color-dark)]">
    {[
      { label: "Sobre mí", href: "/about" },
      { label: "Portafolio", href: "/portfolio" },
      { label: "Contacto", href: "/contact" },
    ].map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
         className=" text-center
  relative inline-block font-medium
  text-white/80

  after:content-['']
  after:absolute after:-bottom-1 after:left-0
  after:h-[2px] after:w-0
  after:bg-[var(--color-soft-pink)]
  after:transition-all after:duration-300

  hover:text-[var(--color-soft-pink)]
  hover:after:w-full
"
          style={{ color: "var(--color-bg-main)" }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* ================= CONTACT ================= */}
          <div className="space-y-5">
            <h4 className="text-lg font-medium text-soft" style={{ color: "var(--color-soft)" }} >
              Contacto
            </h4>

            <ul className="space-y-4 text-sm " style={{ color: "var(--color-soft)" }} >
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>miyukikahori@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+51 936 693 905</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Lima – Perú</span>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-3 pt-2 text-sm">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/miyuki-panduro-huarote-742568237" },
                { label: "Instagram", href: "https://www.instagram.com" },
                { label: "WhatsApp", href: "https://wa.me/51936693905" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className=" font-medium
                    bg-white
                    rounded-full border border-white/30
                    px-4 py-2 text-xs font-medium
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:border-white hover:bg-white/10
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                  "
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
          <p style={{ color: "var(--color-bg-main)" }} >
            © {new Date().getFullYear()} Miyuki Panduro · UX/UI & Frontend Developer
          </p>
          <p style={{ color: "var(--color-bg-main)" }} >
            Diseño centrado en el usuario · Desarrollo con propósito
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
