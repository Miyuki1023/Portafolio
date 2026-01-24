"use client";
import { Agbalumo } from "next/font/google";
import { 
  GraduationCap, BookOpen, Code, PenTool, Languages, 
  Layout, Monitor, Users, CheckCircle2, 
  Sparkles, Search, Palette, Zap, Mail, Phone, Download, ExternalLink, Award, ChevronDown
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

// Animaciones Profesionales
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.25, 0, 1] },
  },
  hover: {
    y: -12,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// DATA CON CERTIFICADOS
const EDUCATION = [
  {
    title: "Ingeniería de Software",
    place: "Universidad Tecnológica del Perú (UTP)",
    date: "2021 – Actualidad",
    icon: GraduationCap,
    certificate: null,
  },
  {
    title: "Curso de Diseño UX/UI",
    place: "IDAT – Completo",
    date: "Enero – Febrero 2025",
    icon: BookOpen,
    certificate: "https://drive.google.com/file/d/11PH6fbOCClfFTOl-fl-YZ455yPeqketH/view?usp=sharing",
  },
  {
    title: "Curso de Programación en C++",
    place: "CTIC UNI – Completo",
    date: "Enero 2023",
    icon: Code,
    certificate: "https://drive.google.com/file/d/11E_y_ZwE1bkEQSgB-Zq7xmH42n0hOhtK/view?usp=sharing",
  },
  {
    title: "Curso de Illustrator I",
    place: "IPAD – Completo",
    date: "Enero – Marzo 2021",
    icon: PenTool,
    certificate: "https://drive.google.com/file/d/1G_DLpKo296aSEWaGU5qokSc9pBr8VORx/view?usp=sharing",
  },
  {
    title: "Curso de Inglés",
    place: "IPCNA",
    date: "En pausa (Intermedio 3)",
    icon: Languages,
    certificate: null,
  },
];

const SOFTWARE = [
  { name: "Figma", icon: "/figma.png", bg: "bg-[var(--color-primary)]/10", text: "text-[var(--color-primary)]" },
  { name: "Illustrator", icon: "/Illustrato.png", bg: "bg-[var(--color-accent)]/10", text: "text-[var(--color-accent)]" },
  { name: "Miro", icon: "/miro.png", bg: "bg-[var(--color-soft-pink)]/10", text: "text-[var(--color-soft-pink)]" },
  { name: "Visual Studio Code", icon: "/visual.png", bg: "bg-[var(--color-bg-secondary)]/10", text: "text-[var(--color-bg-secondary)]" },
  { name: "WordPress", icon: "/wordpress.png", bg: "bg-[var(--color-primary)]/10", text: "text-[var(--color-primary)]" },
  { name: "Notion", icon: "/notion.png", bg: "bg-[var(--color-letra-bg)]/10", text: "text-[var(--color-letra-bg)]" },
  { name: "Excel", icon: "/excel.png", bg: "bg-[var(--color-soft-pink)]/10", text: "text-[var(--color-soft-pink)]" },
  { name: "Power BI", icon: "/Power_BI.png", bg: "bg-[var(--color-accent)]/10", text: "text-[var(--color-accent)]" },
];

const TECH_STACK = [
  { name: "HTML", icon: "/html.png", bg: "bg-[var(--color-primary)]/10", text: "text-[var(--color-primary)]" },
  { name: "CSS", icon: "/css.png", bg: "bg-[var(--color-bg-secondary)]/10", text: "text-[var(--color-bg-secondary)]" },
  { name: "JavaScript", icon: "/javascript.png", bg: "bg-[var(--color-accent)]/10", text: "text-[var(--color-accent)]" },
  { name: "TypeScript", icon: "/typescript.jpg", bg: "bg-[var(--color-letra-bg)]/10", text: "text-[var(--color-letra-bg)]" },
  { name: "React", icon: "/React.jpg", bg: "bg-[var(--color-soft-pink)]/10", text: "text-[var(--color-soft-pink)]" },
  { name: "Tailwind", icon: "/Tailwind.jpg", bg: "bg-[var(--color-bg-secondary)]/10", text: "text-[var(--color-bg-secondary)]" },
  { name: "Node.js", icon: "/node.png", bg: "bg-[var(--color-primary)]/10", text: "text-[var(--color-primary)]" },
  { name: "MongoDB", icon: "/mongo.png", bg: "bg-[var(--color-letra-bg)]/10", text: "text-[var(--color-letra-bg)]" },
  { name: "MySQL", icon: "/MySQL.jpg", bg: "bg-[var(--color-accent)]/10", text: "text-[var(--color-accent)]" },
];

export default function AboutPage() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background py-20 space-y-20" style={{ backgroundColor: "var(--color-bg-main)" }}>
      <div className="max-w-6xl mx-auto space-y-20 px-6">

        {/* ================= HERO SECTION ================= */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative rounded-[3rem] px-6 py-12 md:px-10 md:py-14 overflow-hidden border border-primary/20"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          {/* Fondo decorativo sutil */}
          
          
          <div className="relative grid md:grid-cols-[260px_1fr] gap-10 items-center lg:gap-20">
            {/* Video Profile */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div 
                className="rounded-[2rem] p-1 shadow-xl overflow-hidden"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
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
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-2xl -z-10"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={containerVariants} className="space-y-6">
             <motion.h1
        variants={itemVariants}
        className={`${agbalumo.className} text-5xl sm:text-6xl md:text-7xl leading-tight font-bold`}
        style={{ color: "var(--color-bg-main)" }}
      >
        Hola, soy Miyuki
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="leading-relaxed max-w-2xl text-base sm:text-lg"
        style={{ color: "var(--color-soft)" }}
      >
        Soy Diseñadora UX/UI y Frontend Developer, con enfoque en crear experiencias digitales funcionales, accesibles y alineadas a objetivos de negocio.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="leading-relaxed max-w-2xl text-base sm:text-lg"
        style={{ color: "var(--color-soft)" }}
      >
        Trabajo en proyectos académicos, personales y reales, donde aplico metodologías centradas en el usuario, validación de decisiones y diseño orientado a resultados.
      </motion.p>

      {/* CONTACTO & CV DOWNLOAD */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">

        {/* EMAIL */}
        <a
          href="mailto:miyukikahori@gmail.com"
          className="flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:bg-white/20 hover:scale-105"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)", color: "var(--color-bg-main)" }}
        >
          <Mail size={18} />
          <span className="font-medium">Email</span>
        </a>

        {/* TELÉFONO */}
        <a
          href="tel:+51936693905"
          className="flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:bg-white/20 hover:scale-105"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)", color: "var(--color-bg-main)" }}
        >
          <Phone size={18} />
          <span className="font-medium">+51 936 693 905</span>
        </a>

        {/* CV DOWNLOAD */}
        <a
          href="https://drive.google.com/file/d/1N8KxG3QFWixA-9-TD2sEY7YDO_PFY67J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-bg-main)",
            boxShadow: "0 8px 16px rgba(244, 156, 187, 0.3)"
          }}
        >
          <Download size={18} />
          <span>Descargar CV</span>
        </a>
      </motion.div>
    </motion.div>

  </div>
</motion.section>

        {/* ================= cuadros de info ================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* EDUCACIÓN */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="card space-y-6 border-l-4 border-primary rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex items-center gap-3">
              <Award size={24} style={{ color: "var(--color-primary)" }} />
              <h3 className="font-title text-xl font-bold" style={{ color: "var(--color-primary)" }}>
                Educación y Formación
              </h3>
            </div>
            <ul className="space-y-4 text-sm">
              {EDUCATION.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="space-y-3 group transition-all duration-300 p-4 rounded-xl hover:bg-white/40"
                >
                  <div className="flex gap-3 items-start">
                    <item.icon size={20} className="text-primary flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                    <div className="flex-1">
                      <strong className="block text-dark group-hover:text-primary transition-colors duration-300 font-bold text-sm">
                        {item.title}
                      </strong>
                      <p className="text-muted text-xs">{item.place}</p>
                    </div>
                    {item.certificate && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                        className="p-2 rounded-lg transition-all duration-300"
                        style={{ backgroundColor: "rgba(244, 156, 187, 0.2)", color: "var(--color-primary)" }}
                      >
                        <ChevronDown size={16} style={{
                          transform: expandedCert === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease"
                        }} />
                      </motion.button>
                    )}
                  </div>

                  <span 
                    className="inline-block text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(244, 156, 187, 0.2)", color: "var(--color-primary)" }}
                  >
                    {item.date}
                  </span>

                  {/* Certificate Expandible */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCert === index ? "auto" : 0,
                      opacity: expandedCert === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs transition-all duration-300 hover:scale-105 mt-2"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-bg-main)"
                        }}
                      >
                        <Award size={14} />
                        Ver Certificado
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* EXPERIENCIA */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="card space-y-5 border-l-4 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{ 
              backgroundColor: "white",
              borderColor: "var(--color-accent)"
            }}
          >
            <h3 className="font-title text-xl font-bold" style={{ color: "var(--color-accent)" }}>
              Experiencia
            </h3>
            <ul className="text-sm space-y-5">
              <motion.li variants={itemVariants} className="flex gap-4 items-start">
                <div className="space-y-1 flex-1">
                  <strong className="text-dark text-base block font-bold">
                    Diseñadora UX/UI & Frontend Developer
                  </strong>
                  <span className="text-accent font-medium">
                    Empresa privada del sector de seguridad
                  </span>
                </div>
              </motion.li>

              <motion.li variants={itemVariants} className="flex gap-4 items-center group">
                <span 
                  className="icon-badge flex-shrink-0 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: "rgba(242, 106, 141, 0.2)", color: "var(--color-accent)" }}
                >
                  <Layout size={18} />
                </span>
                <span className="text-dark">Diseño de interfaces y experiencia de usuario</span>
              </motion.li>

              <motion.li variants={itemVariants} className="flex gap-4 items-center group">
                <span 
                  className="icon-badge flex-shrink-0 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: "rgba(242, 106, 141, 0.2)", color: "var(--color-accent)" }}
                >
                  <Monitor size={18} />
                </span>
                <span className="text-dark">Desarrollo frontend web corporativo</span>
              </motion.li>

              <motion.li variants={itemVariants} className="flex gap-4 items-center group">
                <span 
                  className="icon-badge flex-shrink-0 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: "rgba(221, 45, 74, 0.2)", color: "var(--color-soft-pink)" }}
                >
                  <CheckCircle2 size={18} />
                </span>
                <span className="text-dark">Trabajo con requerimientos reales</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.section>

        {/* ================= IDIOMAS & INTERESES ================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="card space-y-4 border-t-4 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{ 
              borderColor: "var(--color-bg-secondary)",
              backgroundColor: "white"
            }}
          >
            <h3 className="font-title text-lg font-bold" style={{ color: "var(--color-bg-secondary)" }}>
              Idiomas
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { flag: "🇵🇪", lang: "Español", level: "Nativo", color: "primary" },
                { flag: "🇺🇸", lang: "Inglés", level: "Intermedio", color: "accent" },
                { flag: "🇮🇹", lang: "Italiano", level: "Básico", color: "bg-secondary" },
              ].map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-center gap-4 group p-3 rounded-xl transition-all duration-300 hover:bg-white/50">
                  <span className="text-2xl">{item.flag}</span>
                  <div className="flex-1">
                    <strong className="block text-dark font-bold">{item.lang}</strong>
                    <span className="text-muted text-xs">— {item.level}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="card space-y-4 border-t-4 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{ 
              borderColor: "var(--color-letra-bg)",
              backgroundColor: "white"
            }}
          >
            <h3 className="font-title text-lg font-bold" style={{ color: "var(--color-letra-bg)" }}>
              Intereses
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { icon: Sparkles, label: "Diseño de experiencias digitales", color: "primary" },
                { icon: Search, label: "Investigación de usuarios", color: "bg-secondary" },
                { icon: Palette, label: "Branding y diseño visual", color: "accent" },
                { icon: Zap, label: "Aprendizaje continuo", color: "soft-pink" },
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-center gap-4 group p-3 rounded-xl transition-all duration-300 hover:bg-white/50"
                >
                  <span 
                    className="icon-badge flex-shrink-0 group-hover:scale-125 transition-transform"
                    style={{
                      backgroundColor: item.color === "primary" ? "rgba(244, 156, 187, 0.2)" : 
                                     item.color === "accent" ? "rgba(242, 106, 141, 0.2)" :
                                     item.color === "soft-pink" ? "rgba(221, 45, 74, 0.2)" :
                                     "rgba(61, 93, 145, 0.2)",
                      color: item.color === "primary" ? "var(--color-primary)" :
                             item.color === "accent" ? "var(--color-accent)" :
                             item.color === "soft-pink" ? "var(--color-soft-pink)" :
                             "var(--color-letra-bg)"
                    }}
                  >
                    <item.icon size={18} />
                  </span>
                  <span className="text-dark font-medium">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* ================= SOFTWARE & HERRAMIENTAS ================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          <motion.div 
            variants={cardVariants}
            className="card space-y-5 border-l-4 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{ 
              borderColor: "var(--color-primary)",
              backgroundColor: "white"
            }}
          >
            <h3 className="font-title text-lg font-bold" style={{ color: "var(--color-primary)" }}>
              Software
            </h3>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {SOFTWARE.map((tool) => (
                <motion.span 
                  key={tool.name} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`tool-chip flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 border cursor-default font-medium`}
                  style={{
                    backgroundColor: tool.bg.replace("bg-", "rgba(").replace("/10", ", 0.1)"),
                    color: "var(--color-primary)",
                    borderColor: "rgba(244, 156, 187, 0.2)"
                  }}
                >
                  <Image src={tool.icon} alt={tool.name} width={16} height={16} />
                  {tool.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="card space-y-5 border-l-4 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{ 
              borderColor: "var(--color-accent)",
              backgroundColor: "white"
            }}
          >
            <h3 className="font-title text-lg font-bold" style={{ color: "var(--color-accent)" }}>
              Herramientas y Tecnología
            </h3>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-x-4 gap-y-3 text-sm"
            >
              {TECH_STACK.map((tech) => (
                <motion.span 
                  key={tech.name} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`tool-chip flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 border cursor-default font-medium`}
                  style={{
                    backgroundColor: tech.bg.replace("bg-", "rgba(").replace("/10", ", 0.1)"),
                    color: "var(--color-accent)",
                    borderColor: "rgba(242, 106, 141, 0.2)"
                  }}
                >
                  <Image src={tech.icon} alt={tech.name} width={16} height={16} />
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center space-y-6 py-12"
        >
          <h2 className="font-title text-3xl sm:text-4xl font-bold" style={{ color: "var(--color-secondary)" }}>
            ¿Listo para crear juntos?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/portafolio" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-bg-main)"
              }}
            >
              Ver proyectos reales
              <ExternalLink size={16} />
            </a>
            
            <a 
              href="mailto:miyukikahori@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-300 hover:scale-105 hover:bg-gray-50"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)"
              }}
            >
              Enviar un mensaje
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
