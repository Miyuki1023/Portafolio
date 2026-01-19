"use client";
import { Agbalumo } from "next/font/google";
import { 
  GraduationCap, BookOpen, Code, PenTool, Languages, 
  Layout, Monitor, Users, CheckCircle2, 
  Sparkles, Search, Palette, Zap, Mail, Phone 
} from "lucide-react";
import Image from "next/image";
import { color } from "framer-motion";

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

// --- DATA: Centralizamos la información para mantener el código limpio ---

const EDUCATION = [
  {
    title: "Ingeniería de Software",
    place: "Universidad Tecnológica del Perú (UTP)",
    date: "2021 – Actualidad",
    icon: GraduationCap,
  },
  {
    title: "Curso de Diseño UX/UI",
    place: "IDAT – Completo",
    date: "Enero – Febrero 2025",
    icon: BookOpen,
  },
  {
    title: "Curso de Programación en C++",
    place: "CTIC UNI – Completo",
    date: "Enero 2023",
    icon: Code,
  },
  {
    title: "Curso de Illustrator I",
    place: "IPAD – Completo",
    date: "Enero – Marzo 2021",
    icon: PenTool,
  },
  {
    title: "Curso de Inglés",
    place: "IPCNA",
    date: "En pausa (Intermedio 3)",
    icon: Languages,
  },
];

const SOFTWARE = [
  { name: "Figma", icon: "/figma.png", bg: "bg-[#E8F1FF]", text: "text-[#1A73E8]" },
  { name: "Illustrator", icon: "/Illustrato.png", bg: "bg-[#FFF3E0]", text: "text-[#FB8C00]" },
  { name: "Miro", icon: "/miro.png", bg: "bg-[#E0F2F1]", text: "text-[#00695C]" },
  { name: "Visual Studio Code", icon: "/visual.png", bg: "bg-[#F3F4F6]", text: "text-[#111827]" },
  { name: "WordPress", icon: "/wordpress.png", bg: "bg-[#E0F2FE]", text: "text-[#0284C7]" },
  { name: "Notion", icon: "/notion.png", bg: "bg-[#F5F3FF]", text: "text-[#4F46E5]" },
  { name: "Excel", icon: "/excel.png", bg: "bg-[#ECFDF5]", text: "text-[#047857]" },
  { name: "Power BI", icon: "/Power_BI.png", bg: "bg-[#FFF7ED]", text: "text-[#EA580C]" },
];

const TECH_STACK = [
  { name: "HTML", icon: "/html.png", bg: "bg-[#FFF7ED]", text: "text-[#E34F26]" },
  { name: "CSS", icon: "/css.png", bg: "bg-[#ECFEFF]", text: "text-[#0EA5E9]" },
  { name: "JavaScript", icon: "/javascript.png", bg: "bg-[#FEF3C7]", text: "text-[#F59E0B]" },
  { name: "TypeScript", icon: "/typescript.jpg", bg: "bg-[#EEF2FF]", text: "text-[#6366F1]" },
  { name: "React", icon: "/React.jpg", bg: "bg-[#ECFDF5]", text: "text-[#16A34A]" },
  { name: "Tailwind", icon: "/Tailwind.jpg", bg: "bg-[#F0F9FF]", text: "text-[#0284C7]" },
  { name: "Node.js", icon: "/node.png", bg: "bg-[#F3F4F6]", text: "text-[#111827]" },
  { name: "MongoDB", icon: "/mongo.png", bg: "bg-[#ECFEFF]", text: "text-[#0891B2]" },
  { name: "MySQL", icon: "/MySQL.jpg", bg: "bg-[#EFF6FF]", text: "text-[#2563EB]" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen section bg-background py-20 space-y-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HERO SECTION ================= */}
        <section className="relative rounded-[3rem] px-6 py-12 md:px-10 md:py-14 text-background overflow-hidden     bg-[var(--color-secondary)]
" >
          {/* Fondo decorativo */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-40 pointer-events-none"
            style={{ backgroundImage: "url('/fondo.png')" }}
            aria-hidden={true}
          />

          <div className="relative grid md:grid-cols-[260px_1fr] gap-10 items-center lg:gap-20">
            {/* Video Profile */}
            <div className="relative">
              <div className="rounded-[2rem] p-1 bg-accent">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/video.mp4"
                  className="rounded-[1.75rem] object-cover w-full h-[360px]"
                  aria-hidden={true}
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
             <h1
        className={`${agbalumo.className} text-[75px] leading-tight py-6`}
        style={{ color: "var(--color-bg-main) " }}
      >
        Hola, soy Miyuki
      </h1>

      <p
        className="leading-relaxed max-w-2xl"
        style={{ color: "var(--color-bg-main)" }}
      >
        Soy Diseñadora UX/UI y Frontend Developer, con enfoque en crear
        experiencias digitales funcionales, accesibles y alineadas a
        objetivos de negocio.
      </p>

      <p
        className="leading-relaxed max-w-2xl"
        style={{ color: "var(--color-bg-main)" }}
      >
        Trabajo en proyectos académicos, personales y reales, donde aplico
        metodologías centradas en el usuario, validación de decisiones y
        diseño orientado a resultados.
      </p>

      {/* CONTACTO */}
      <div className="flex gap-6 pt-4 text-sm">

        {/* EMAIL */}
        <span className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--color-bg-main)" }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              style={{ color: "var(--color-secondary)" }}
            >
              <path
                fill="currentColor"
                d="M4 6h16v12H4V6Zm8 5L5.5 7h13L12 11Z"
              />
            </svg>
          </span>

          <a
            href="mailto:miyukikahori@gmail.com"
            style={{ color: "var(--color-bg-main)" }}
            aria-label="Enviar email a Miyuki"
          >
            miyukikahori@gmail.com
          </a>
        </span>

        {/* TELÉFONO */}
        <span className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--color-bg-main)" }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              style={{ color: "var(--color-secondary)" }}
            >
              <path
                fill="currentColor"
                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3
                1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0
                .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1
                1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6
                3.9.1.4 0 .8-.3 1.1l-2.2 2.2Z"
              />
            </svg>
          </span>

          <a
            href="tel:+51936693905"
            style={{ color: "var(--color-bg-main)" }}
            aria-label="Llamar a Miyuki"
          >
            936 693 905
          </a>
        </span>

      </div>
    </div>

  </div>
</section>

        {/* ================= cuadros de info ================= */}
        <section className="grid md:grid-cols-2 gap-10">
          {/* EDUCACIÓN */}
          <div className="card space-y-6">
            <h3 className="font-title text-secondary text-xl">Educación y Formación</h3>
            <ul className="space-y-6 text-sm">
              {EDUCATION.map((item, index) => (
                <li key={index} className="space-y-2 group">
                  <div className="flex gap-3">
                    <item.icon size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-dark group-hover:text-primary transition-colors">
                        {item.title}
                      </strong>
                      <p className="text-muted">{item.place}</p>
                    </div>
                  </div>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#CBEEF3] text-[#0BA4BA] font-medium ml-8">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERIENCIA */}
          <div className="card space-y-5">
            <h3 className="font-title text-secondary text-xl">Experiencia</h3>
            <ul className="text-sm text-muted space-y-5">
              <li className="flex gap-4 items-start">
                <div className="space-y-1">
                  <strong className="text-dark text-base block">
                    Diseñadora UX/UI & Frontend Developer
                  </strong>
                  <span className="text-primary font-medium">
                    Empresa privada del sector de seguridad
                  </span>
                </div>
              </li>

              <li className="flex gap-4 items-center">
                <span className="icon-badge bg-accent/15 text-accent">
                  <Layout size={18} />
                </span>
                <span>Diseño de interfaces y experiencia de usuario</span>
              </li>

              <li className="flex gap-4 items-center">
                <span className="icon-badge bg-sky-100 text-sky-600">
                  <Monitor size={18} />
                </span>
                <span>Desarrollo frontend web corporativo</span>
              </li>

    <li className="flex gap-4 items-center">
      <span className="icon-badge bg-sky/20 text-sky">
        <Monitor size={18} />
      </span>
      <span>Desarrollo frontend web corporativo</span>
    </li>

              <li className="flex gap-4 items-center">
                <span className="icon-badge bg-green-100 text-green-600">
                  <CheckCircle2 size={18} />
                </span>
                <span>Trabajo con requerimientos reales</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ================= IDIOMAS & INTERESES ================= */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="card space-y-4">
            <h3 className="font-title text-secondary text-lg">Idiomas</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-primary/10 text-primary">🇵🇪</span>
                <span><strong className="text-dark">Español</strong> — Nativo</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-sky-100 text-sky-600">🇺🇸</span>
                <span><strong className="text-dark">Inglés</strong> — Intermedio</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-teal-100 text-teal-600">🇮🇹</span>
                <span><strong className="text-dark">Italiano</strong> — Básico</span>
              </li>
            </ul>
          </div>

          <div className="card space-y-4">
            <h3 className="font-title text-secondary text-lg">Intereses</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-violet-100 text-violet-600"><Sparkles size={18} /></span>
                <span>Diseño de experiencias digitales</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-sky-100 text-sky-600"><Search size={18} /></span>
                <span>Investigación de usuarios</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-fuchsia-100 text-fuchsia-600"><Palette size={18} /></span>
                <span>Branding y diseño visual</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="icon-badge bg-teal-100 text-teal-600"><Zap size={18} /></span>
                <span>Aprendizaje continuo</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ================= SOFTWARE & HERRAMIENTAS ================= */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="card space-y-5">
            <h3 className="font-title text-secondary text-lg">Software</h3>
            <div className="flex flex-wrap gap-3">
              {SOFTWARE.map((tool) => (
                <span key={tool.name} className={`tool-chip ${tool.bg} ${tool.text}`}>
                  <Image src={tool.icon} alt={tool.name} width={24} height={24} className="tool-icon" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div className="card space-y-5">
            <h3 className="font-title text-secondary text-lg">Herramientas y Tecnología</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm">
              {TECH_STACK.map((tech) => (
                <span key={tech.name} className={`tool-chip ${tech.bg} ${tech.text}`}>
                  <Image src={tech.icon} alt={tech.name} width={24} height={24} className="tool-icon" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <a href="/portafolio" className="btn-primary">
            Ver proyectos reales
          </a>
        </div>
      </div>
    </main>
  );
}
