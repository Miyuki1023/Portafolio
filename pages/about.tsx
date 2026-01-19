"use client";
import { Agbalumo } from "next/font/google";
import { 
  GraduationCap, BookOpen, Code, PenTool, Languages, 
  Briefcase, Layout, Monitor, Users, CheckCircle2, 
  Sparkles, Search, Palette, Zap 
} from "lucide-react";
import Image from "next/image";
const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen section color-bg-main py-20 space-y-20">
      <div className="max-w-6xl mx-auto space-y-20">

       <section
  className="relative rounded-[3rem] px-10 py-14 text-white overflow-hidden"
  style={{ backgroundColor: "var(--color-secondary)" }}
>
  {/* ================= FONDO PNG TRANSLÚCIDO ================= */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-40 pointer-events-none"
    style={{ backgroundImage: "url('/fondo.png')" }}
  />

  {/* ================= CONTENIDO ================= */}
  <div className="relative grid md:grid-cols-[260px_1fr] gap-10 items-center">

    {/* FOTO */}
    <div className="relative">
      <div
        className="rounded-[2rem] p-1"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <img
          src="/yo.png"
          alt="Miyuki Panduro"
          className="rounded-[1.75rem] object-cover w-full h-[260px]"
        />
      </div>
    </div>

    {/* TEXTO */}
    <div className="space-y-4">

      <h1
        className={`${agbalumo.className} text-[75px] leading-tight`}
        style={{ color: "var(--color-bg-main)" }}
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

          <span style={{ color: "var(--color-bg-main)" }}>
            miyukikahori@gmail.com
          </span>
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

          <span style={{ color: "var(--color-bg-main)" }}>
            936 693 905
          </span>
        </span>

      </div>
    </div>

  </div>
</section>


        {/* ================= cuadros de info ================= */}
        <section className="grid md:grid-cols-2 gap-10">

         <div className="card space-y-6">
  <h3 className="font-title text-secondary">
    Educación y Formación
  </h3>

  <ul className="space-y-5 text-sm">

    {/* Ingeniería */}
    <li className="space-y-2">
      <div className="flex gap-3">
        <GraduationCap
          size={20}
          style={{ color: "var(--color-primary)", flexShrink: 0 }}
        />
        <div>
          <strong>Ingeniería de Software</strong>
          <p className="text-muted">
            Universidad Tecnológica del Perú (UTP)
          </p>
        </div>
      </div>

      <span
        className="inline-block text-xs px-4 py-1 rounded-full"
        style={{
          backgroundColor: "#CBEEF3",
          color: "#0BA4BA",
        }}
      >
        2021 – Actualidad
      </span>
    </li>

    {/* UX/UI */}
    <li className="space-y-2">
      <div className="flex gap-3">
        <BookOpen
          size={20}
          style={{ color: "var(--color-primary)", flexShrink: 0 }}
        />
        <div>
          <strong>Curso de Diseño UX/UI</strong>
          <p className="text-muted">IDAT – Completo</p>
        </div>
      </div>

      <span
        className="inline-block text-xs px-4 py-1 rounded-full"
        style={{
          backgroundColor: "#CBEEF3",
          color: "#0BA4BA",
        }}
      >
        Enero – Febrero 2025
      </span>
    </li>

    {/* C++ */}
    <li className="space-y-2">
      <div className="flex gap-3">
        <Code
          size={20}
          style={{ color: "var(--color-primary)", flexShrink: 0 }}
        />
        <div>
          <strong>Curso de Programación en C++</strong>
          <p className="text-muted">CTIC UNI – Completo</p>
        </div>
      </div>

      <span
        className="inline-block text-xs px-4 py-1 rounded-full"
        style={{
          backgroundColor: "#CBEEF3",
          color: "#0BA4BA",
        }}
      >
        Enero 2023
      </span>
    </li>

    {/* Illustrator */}
    <li className="space-y-2">
      <div className="flex gap-3">
        <PenTool
          size={20}
          style={{ color: "var(--color-primary)", flexShrink: 0 }}
        />
        <div>
          <strong>Curso de Illustrator I</strong>
          <p className="text-muted">IPAD – Completo</p>
        </div>
      </div>

      <span
        className="inline-block text-xs px-4 py-1 rounded-full"
        style={{
          backgroundColor: "#CBEEF3",
          color: "#0BA4BA",
        }}
      >
        Enero – Marzo 2021
      </span>
    </li>

    {/* Inglés */}
    <li className="space-y-2">
      <div className="flex gap-3">
        <Languages
          size={20}
          style={{ color: "var(--color-primary)", flexShrink: 0 }}
        />
        <div>
          <strong>Curso de Inglés</strong>
          <p className="text-muted">IPCNA</p>
        </div>
      </div>

      <span
        className="inline-block text-xs px-4 py-1 rounded-full"
        style={{
          backgroundColor: "#CBEEF3",
          color: "#0BA4BA",
        }}
      >
        En pausa (Intermedio 3)
      </span>
    </li>

  </ul>
</div>


          <div className="card space-y-5">
  <h3 className="font-title text-secondary text-lg">
    Experiencia
  </h3>

  <ul className="text-sm text-muted space-y-4">
    <li className="flex gap-4 items-start">
      
      <span>
        <strong className="text-dark">
          Diseñadora UX/UI & Frontend Developer
        </strong>
        <br />
        Empresa privada del sector de seguridad privada.
      </span>
    </li>

    <li className="flex gap-4 items-center">
      <span className="icon-badge bg-accent/15 text-accent">
        <Layout size={18} />
      </span>
      <span>Diseño de interfaces y experiencia de usuario</span>
    </li>

    <li className="flex gap-4 items-center">
      <span className="icon-badge bg-sky/20 text-sky">
        <Monitor size={18} />
      </span>
      <span>Desarrollo frontend web corporativo</span>
    </li>

    <li className="flex gap-4 items-center">
      <span className="icon-badge bg-teal/20 text-teal">
        <Users size={18} />
      </span>
      <span>Coordinación virtual de tareas</span>
    </li>

    <li className="flex gap-4 items-center">
      <span className="icon-badge bg-success/20 text-success">
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
  <h3 className="font-title text-secondary text-lg">
    Idiomas
  </h3>

  <ul className="space-y-3 text-sm text-muted">
    <li className="flex items-center gap-4">
      <span className="icon-badge bg-primary/10 text-primary">
        🇵🇪
      </span>
      <span>
        <strong className="text-dark">Español</strong> — Nativo
      </span>
    </li>

    <li className="flex items-center gap-4">
      <span className="icon-badge bg-sky/20 text-sky">
        🇺🇸
      </span>
      <span>
        <strong className="text-dark">Inglés</strong> — Intermedio
      </span>
    </li>

    <li className="flex items-center gap-4">
      <span className="icon-badge bg-teal/20 text-teal">
        🇮🇹
      </span>
      <span>
        <strong className="text-dark">Italiano</strong> — Básico
      </span>
    </li>
  </ul>
</div>


          <div className="card space-y-4">
  <h3 className="font-title text-secondary text-lg">
    Intereses
  </h3>

  <ul className="space-y-3 text-sm text-muted">
    <li className="flex items-center gap-4">
      <span className="icon-badge bg-violet/20 text-violet">
        <Sparkles size={18} />
      </span>
      <span>Diseño de experiencias digitales</span>
    </li>

    <li className="flex items-center gap-4">
      <span className="icon-badge bg-sky/20 text-sky">
        <Search size={18} />
      </span>
      <span>Investigación de usuarios</span>
    </li>

    <li className="flex items-center gap-4">
      <span className="icon-badge bg-fuchsia/20 text-fuchsia">
        <Palette size={18} />
      </span>
      <span>Branding y diseño visual</span>
    </li>

    <li className="flex items-center gap-4">
      <span className="icon-badge bg-teal/20 text-teal">
        <Zap size={18} />
      </span>
      <span>Aprendizaje continuo</span>
    </li>
  </ul>
</div>


        </section>

        {/* ================= SOFTWARE & HERRAMIENTAS ================= */}
        <section className="grid md:grid-cols-2 gap-10">

          <div className="card space-y-5">
  <h3 className="font-title text-secondary text-lg">
    Software
  </h3>

  <div className="flex flex-wrap gap-3">
    <span className="tool-chip bg-[#E8F1FF] text-[#1A73E8] ">
      <img src="/figma.png" alt="Figma" className="tool-icon"/>
      Figma
    </span>

    <span className="tool-chip bg-[#FFF3E0] text-[#FB8C00]">
      <img src="/Illustrato.png" alt="Illustrator" className="tool-icon"/>
      Illustrator
    </span>

    <span className="tool-chip bg-[#E0F2F1] text-[#00695C]">
      <img src="/miro.png" alt="Miro" className="tool-icon"/>
      Miro
    </span>

    <span className="tool-chip bg-[#F3F4F6] text-[#111827]">
      <img src="/visual.png" alt="VS Code" className="tool-icon"/>
      Visual Studio Code
    </span>

    <span className="tool-chip bg-[#E0F2FE] text-[#0284C7]">
      <img src="/wordpress.png" alt="WordPress" className="tool-icon"/>
      WordPress
    </span>

    <span className="tool-chip bg-[#F5F3FF] text-[#4F46E5]">
      <img src="/notion.png" alt="Notion" className="tool-icon" />
      Notion
    </span>

    <span className="tool-chip bg-[#ECFDF5] text-[#047857]">
      <img src="/excel.png" alt="Excel" className="tool-icon"/>
      Excel
    </span>

    <span className="tool-chip bg-[#FFF7ED] text-[#EA580C]">
      <img src="/Power_BI.png" alt="Power BI" className="tool-icon"/>
      Power BI
    </span>
  </div>
</div>




         <div className="card space-y-5">
  <h3 className="font-title text-secondary text-lg">
    Herramientas y Tecnología
  </h3>

  <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm">
    <span className="tool-chip bg-[#FFF7ED] text-[#E34F26]">
      <img src="/html.png" alt="HTML" className="tool-icon" />
      HTML
    </span>

    <span className="tool-chip bg-[#ECFEFF] text-[#0EA5E9]">
      <img src="/css.png" alt="CSS" className="tool-icon" />
      CSS
    </span>

    <span className="tool-chip bg-[#FEF3C7] text-[#F59E0B]">
      <img src="/javascript.png" alt="JavaScript" className="tool-icon" />
      JavaScript
    </span>

    <span className="tool-chip bg-[#EEF2FF] text-[#6366F1]">
      <img src="/typescript.jpg" alt="TypeScript" className="tool-icon" />
      TypeScript
    </span>

    <span className="tool-chip bg-[#ECFDF5] text-[#16A34A]">
      <img src="/React.jpg" alt="React" className="tool-icon" />
      React
    </span>

    <span className="tool-chip bg-[#F0F9FF] text-[#0284C7]">
      <img src="/Tailwind.jpg" alt="Tailwind" className="tool-icon" />
      Tailwind
    </span>

    <span className="tool-chip bg-[#F3F4F6] text-[#111827]">
      <img src="/node.png" alt="Node.js" className="tool-icon" />
      Node.js
    </span>

    <span className="tool-chip bg-[#ECFEFF] text-[#0891B2]">
      <img src="/mongo.png" alt="MongoDB" className="tool-icon" />
      MongoDB
    </span>

    <span className="tool-chip bg-[#EFF6FF] text-[#2563EB]">
      <img src="/MySQL.jpg" alt="MySQL" className="tool-icon" />
      MySQL
    </span>
  </div>


</div>


        </section>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <a href="/portfolio" className="btn-primary">
            Ver Portafolio
          </a>
        </div>

      </div>
    </main>
  );
}
