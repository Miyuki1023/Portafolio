import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, color } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import { Agbalumo } from "next/font/google";
import { ArrowRight, FileText, Target, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/* ================= FUENTE ================= */

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

/* ================= ANIMACIONES ================= */

const animacionFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const animacionStagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};



/* ================= TIPOS ================= */

interface Props {
  project: Project;
  nextProject: Project;
}

/* ================= PÁGINA ================= */

export default function DetalleProyecto({ project, nextProject }: Props) {
  const solutionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: solutionRef,
    offset: ["start start", "end end"],
  });
  const [currentMockup, setCurrentMockup] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };
    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) {
      // On mobile, disable the scroll-based animation and show the first state.
      setCurrentMockup(0);
      return;
    }
    if (latest < 0.25) setCurrentMockup(0);
    else if (latest < 0.5) setCurrentMockup(1);
    else if (latest < 0.75) setCurrentMockup(2);
    else setCurrentMockup(3);
  });

  
  
  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | Miyuki Panduro</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="bg-[var(--color-bg-main)] text-[#222] overflow-x-hidden">

        {/* ================================================= */}
        {/* HERO — PORTADA EDITORIAL */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={animacionStagger}
          className="relative bg-[var(--color-secondary)] text-white"
        >
          <div className="max-w-7xl mx-auto px-6 pt-32 pb-48 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* TEXTO */}
            <motion.div variants={animacionFadeUp} className="space-y-10">
              <span className="uppercase tracking-[0.3em] text-sm text-[var(--color-accent)]">
                Caso de Estudio UX / UI · 2025
              </span>

              <h1
                className={`
                  ${agbalumo.className}
                  leading-[0.9]
                  text-[clamp(4.5rem,9vw,10rem)]
                  sm:text-[clamp(5.5rem,10vw,11rem)]
                  lg:text-[clamp(7rem,11vw,13rem)]
                  xl:text-[15rem]
                `}
                style={{ color: "var(--color-bg-main)" }}
              >
                {project.title}
              </h1>

              <p
                className="mt-6 text-lg sm:text-xl lg:text-2xl max-w-2xl opacity-90"
                style={{ color: "var(--color-bg-main)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-1 text-xs rounded-full bg-white/10 backdrop-blur"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* MOCKUP */}
            <motion.div
              variants={animacionFadeUp}
              className="relative h-[560px] w-full rounded-[32px] border-8 border-white/20 overflow-hidden shadow-2xl"
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ================================================= */}
        {/* TARJETAS DE CONTEXTO */}
        {/* ================================================= */}
        <section className="relative -mt-24 z-10 px-2">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { 
                titulo: "Contexto", 
                contenido: project.overview.context,
                icon: <FileText strokeWidth={1.5} size={28} />,
                gradient: "from-[var(--color-bg-main)]/100 to-[var(--color-bg-main)]/100",
                iconBg: "bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20",
                iconColor: "text-[var(--color-primary)]"
              },
              { 
                titulo: "Objetivo", 
                contenido: project.overview.goal,
                icon: <Target strokeWidth={1.5} size={28} />,
                gradient: "from-[var(--color-bg-main)]/100 to-[var(--color-bg-main)]/100",
                iconBg: "bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-soft-pink)]/20",
                iconColor: "text-[var(--color-accent)]"
              },
              { 
                titulo: "Rol", 
                contenido: project.role,
                icon: <User strokeWidth={1.5} size={28} />,
                gradient: "from-[var(--color-bg-main)]/100 to-[var(--color-bg-main)]/100",
                iconBg: "bg-gradient-to-br from-[var(--color-soft-pink)]/20 to-[var(--color-accent)]/20",
                iconColor: "text-[var(--color-primary)]"
              },
            ].map((item, index) => (
              <motion.div 
                key={item.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-[var(--color-primary)]/10 flex flex-col items-start hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className={`p-4 rounded-2xl ${item.iconBg} ${item.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className="font-title text-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent mb-4">
                  {item.titulo}
                </h3>
                <p className="text-muted text-base leading-relaxed">
                  {item.contenido}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/* PROCESO (NUEVA SECCIÓN) */}
        {/* ================================================= */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* COLUMNA IZQUIERDA: Sticky Context */}
              <div className="space-y-10 md:sticky md:top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase mb-6 border border-[var(--color-primary)]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                    Metodología
                  </span>

                  <h2 className="font-title text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent leading-[0.9] py-2">
                    El Proceso <br />
                    <span className="text-3xl md:text-4xl text-[var(--color-accent)] font-normal italic font-sans py-2 bg-none text-[var(--color-accent)]">
                      Creativo & Técnico
                    </span>
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative pl-6 border-l-2 border-[var(--color-secondary)]/10"
                >
                  <p className="text-muted text-lg leading-relaxed">
                    {project.process.context}
                  </p>
                </motion.div>

                {/* Decoración visual animada */}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                  className="hidden md:block w-24 h-1.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-transparent rounded-full opacity-60"
                />
              </div>
              
              <ul className="space-y-8 relative">
                
                <div className="absolute left-[1.65rem] top-8 bottom-8 w-1 bg-gradient-to-b from-[var(--color-primary)]/5 via-[var(--color-accent)]/30 to-[var(--color-primary)]/5 md:hidden" />

                {project.process.steps.map((step, index) => {
                  const curveOffsets = [
                    "md:ml-0 lg:ml-0",
                    "md:ml-12 lg:ml-24",
                    "md:ml-24 lg:ml-48",
                    "md:ml-24 lg:ml-48",
                    "md:ml-12 lg:ml-24",
                    "md:ml-0 lg:ml-0",
                  ];
                  const offset = curveOffsets[index] || "md:ml-0 lg:ml-0";

                  return (
                    <li
                      key={step}
                      className={`
                        group flex gap-6 items-start relative
                        transition-all duration-500 ease-out
                        ${offset}
                      `}
                    >
                     
                      <div
                        className="
                          relative z-10
                          flex-shrink-0 w-14 h-14
                          rounded-full border-2 border-[var(--color-primary)]/30
                          bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10
                          flex items-center justify-center
                          font-title text-xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent
                          shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                          transition-all duration-300
                          group-hover:scale-110
                          group-hover:border-[var(--color-accent)]
                          group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)]
                          group-hover:text-white group-hover:bg-clip-border
                          group-hover:shadow-xl
                        "
                      >
                        {index + 1}
                      </div>

                      <div className="
                        flex-1 pt-1 p-6 rounded-3xl 
                        border border-[var(--color-primary)]/0 
                        transition-all duration-300 
                        hover:bg-gradient-to-br hover:from-white hover:to-[var(--color-soft-pink)]/5 hover:shadow-[0_10px_40px_rgba(221,45,101,0.1)] hover:border-[var(--color-primary)]/20
                        group-hover:-translate-y-1
                      ">
                        <p className="text-lg text-muted leading-relaxed group-hover:text-[var(--color-primary)] transition-colors">
                          {step}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

            </div>
          </div>
        </section>
{/* ================================================= */}
{/* ANÁLISIS DEL USUARIO */}
{/* ================================================= */}
<section className="py-32 px-6 lg:px-40">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

    {/* COLUMNA IZQUIERDA — TEXTO + INSIGHTS */}
    <div className="lg:col-span-5">
      <div className="sticky top-32">

        <h2 className="font-title text-5xl md:text-7xl leading-tight py-2">
          Análisis <br />
          <span className="italic bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
            profundo
          </span>{" "}
          del usuario
        </h2>

        <p className="mt-8 text-lg text-muted max-w-md leading-relaxed">
          {project.overview.problemStatement}
        </p>

        {/* INSIGHTS DESTACADOS */}
        <div className="mt-12 space-y-6">
          {project.research.keyInsights.slice(0, 2).map((insight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border-l-4 border-[var(--color-primary)] bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1 italic text-[var(--color-primary)]">
                  Insight clave
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {insight}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

    {/* COLUMNA DERECHA — PERSONA */}
    <div className="lg:col-span-7">
      <div className="bg-gradient-to-br from-white to-[var(--color-soft-pink)]/5 p-12 rounded-2xl shadow-xl relative overflow-hidden border border-[var(--color-primary)]/10">

        {/* DETALLE DECORATIVO */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-5 -mr-16 -mt-16 rounded-full blur-3xl" />

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

          {/* AVATAR */}
          <div
            className="w-40 h-40 rounded-full bg-cover bg-center border-4 border-[var(--color-primary)] shadow-xl flex-shrink-0 ring-2 ring-[var(--color-accent)]/30"
            style={{
              backgroundImage: `url(${project.research.persona.img})`,
            }}
          />

          {/* INFO PERSONA */}
          <div className="flex-1">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest">
              Persona Profile
            </span>

            <h3 className="font-title text-4xl font-bold mt-2 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
              {project.research.persona.name}
            </h3>

            <p className="text-gray-400 italic mb-6">
              {project.research.persona.profile} ·{" "}
              {project.research.persona.location}
            </p>

            <p className="text-sm text-muted leading-relaxed mb-10">
              {project.research.persona.context}
            </p>

            {/* MOTIVACIONES / FRUSTRACIONES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* MOTIVACIONES */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 border border-[var(--color-primary)]/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-4">
                  ✨ Motivaciones
                </h4>
                <ul className="text-sm space-y-3">
                  {project.research.persona.motivations?.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--color-primary)] font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FRUSTRACIONES */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-[var(--color-accent)]/5 border border-red-200/50">
                <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4">
                  ⚠️ Frustraciones
                </h4>
                <ul className="text-sm space-y-3">
                  {project.research.persona.frustrations?.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* ================================================= */}
        {/* RECORRIDO DEL USUARIO */}
        {/* ================================================= */}
        <section className="py-32 px-6 relative overflow-hidden">
  {/* Fondo decorativo sutil */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-secondary)_0%,_transparent_25%)] opacity-5 pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="mb-16 md:mb-20 max-w-3xl">
      <h2 className="font-title text-4xl md:text-5xl bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent mb-6 py-2">
        Recorrido del Usuario
      </h2>
      <p className="text-muted text-lg leading-relaxed">
        Mapeo de la experiencia para identificar momentos de fricción y oportunidades clave.
      </p>
    </div>

    <div
      className="
        flex gap-6 md:gap-8 overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0
        snap-x snap-mandatory scroll-smooth
      "
    >
      {project.research.journey.map((paso, index) => (
        <motion.div
          key={paso.stage}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="
            snap-center shrink-0
            w-[85vw] sm:w-[400px]
            bg-gradient-to-br from-white to-[var(--color-soft-pink)]/10 rounded-[2.5rem]
            p-8 md:p-10
            shadow-[0_20px_40px_-10px_rgba(221,45,101,0.1)]
            border border-[var(--color-primary)]/20
            flex flex-col
            group hover:-translate-y-2 hover:shadow-[0_30px_60px_-10px_rgba(221,45,101,0.2)] transition-all duration-300
          "
        >
          {/* Header Card */}
          <div className="flex justify-between items-center mb-8">
            <span
              className="
                flex items-center justify-center
                w-14 h-14 rounded-full
                bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-[var(--color-primary)]
                font-title text-xl font-bold
                border border-[var(--color-primary)]/30
                group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] group-hover:text-white
                transition-all duration-300
              "
            >
              {index + 1}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/30 to-transparent mx-6" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h4 className="font-title text-2xl bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
              {paso.stage}
            </h4>

            <div className="space-y-5">
              {/* Acción */}
              <div className="flex gap-4 items-start">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {paso.action}
                </p>
              </div>

              {/* Pain Point */}
              <div className="flex gap-4 items-start bg-gradient-to-br from-red-50 to-red-100/30 p-5 rounded-2xl border border-red-200/70 hover:border-red-300 transition-colors">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-red-400 shrink-0" />
                <div className="space-y-1">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-red-600">
                    ⚠️ Punto de dolor
                  </span>
                  <p className="text-sm text-red-700 leading-relaxed font-medium">
                    {paso.pain}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ================================================= */}
{/* SOLUCIÓN — STICKY IMAGE + SCROLL NARRATIVE */}
{/* ================================================= */}

<section
  ref={solutionRef}
  className="
    relative
    bg-[var(--color-secondary)]
    text-white
    lg:h-[400vh]
    overflow-hidden
  "
>
  {/* Sticky SOLO desktop */}
  <div className="relative lg:sticky lg:top-0 lg:h-screen overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-32 h-full py-20 lg:py-0">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 h-full items-center">

        {/* ================= TEXTO ================= */}
        <motion.div
          key={currentMockup}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 space-y-6 max-w-[520px]"
        >
          {currentMockup < 2 ? (
            <>
              {/* Eyebrow */}
              <p
                className="uppercase tracking-widest text-xs opacity-60"
                style={{
                  color:
                    "color-mix(in srgb, var(--color-bg-main) 70%, transparent)",
                }}
              >
                Solución UX/UI
              </p>

              {/* Título */}
              <h2
                className="
                  font-title leading-tight
                  text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl py-4
                "
                style={{
                  color:
                    "color-mix(in srgb, var(--color-bg-main) 85%, transparent)",
                }}
              >
                Diseñado para{" "}
                <span className="italic opacity-80 py-4">
                  claridad, fluidez
                </span>{" "}
                y{" "}
                <span className="italic opacity-80 py-4">
                  decisión
                </span>
              </h2>

              {/* Descripción */}
              <p
                className="text-sm leading-relaxed opacity-80 max-w-md py-2"
                style={{ color: "var(--color-bg-main)" }}
              >
                Cada pantalla responde a una necesidad concreta del usuario,
                reduciendo fricción y guiando la acción de forma natural.
              </p>

              {/* Lista UX */}
              <ul className="space-y-4 pt-2 max-w-md ">
                {project.solution.uxStrategy.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 items-start"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    <p
                      className="text-sm leading-relaxed opacity-85"
                      style={{ color: "var(--color-bg-main)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p
                className="uppercase tracking-widest text-xs opacity-60"
                style={{ color: "var(--color-bg-main)" }}
              >
                Resultados
              </p>

              <h2
                className="
                  font-title
                  text-3xl sm:text-4xl md:text-5xl py-4
                "
                style={{ color: "var(--color-bg-main)" }}
              >
                Impacto real en la experiencia
              </h2>

              <ul className="space-y-4 pt-2 max-w-md py-4">
                {project.outcomes.impact.map((item) => (
                  <li
                    key={item}
                    className="
                      pl-5
                      border-l border-white/30
                      text-sm
                      opacity-80
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>

        {/* ================= IMAGEN ================= */}
        <div className="relative w-full flex items-center justify-center">

          {/* DESKTOP */}
          {isDesktop && (
            <div className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[450px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMockup}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-[36px] bg-white/10 blur-xl" />

                  <div
                    className="
                      relative w-[95%] h-[95%]
                      rounded-[30px]
                      overflow-hidden
                      bg-gradient-to-b from-white/95 to-white/85
                      shadow-[0_30px_80px_rgba(0,0,0,0.3)]
                    "
                  >
                    {(() => {
                      const src =
                        project.solution.mockups?.[currentMockup] ||
                        project.cover;
                      const isVideo =
                        src.endsWith(".webm") || src.endsWith(".mp4");

                      if (isVideo) {
                        return (
                          <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain p-6 sm:p-8"
                          />
                        );
                      }

                      return (
                        <Image
                          src={src}
                          alt="Prototipo final"
                          fill
                          priority
                          className="object-contain p-6 sm:p-8 w-auto h-auto"
                        />
                      );
                    })()}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* MOBILE / TABLET */}
          {!isDesktop && (
            <div className="space-y-24 w-full py-12">
              {project.solution.mockups?.map((src, index) => {
                const isVideo = src.endsWith(".webm") || src.endsWith(".mp4");

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                  >
                    {/* Fondo difuminado detrás */}
                    <div className="absolute inset-4 bg-white/20 blur-2xl rounded-full" />

                    <div
                      className="
                        relative h-[550px]
                        rounded-[3rem]
                        overflow-hidden
                        bg-gradient-to-br from-white to-gray-100
                        shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]
                        border-[8px] border-white/10
                      "
                    >
                      {isVideo ? (
                        <video
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain p-6"
                        />
                      ) : (
                        <Image
                          src={src}
                          alt={`Vista de solución ${index + 1}`}
                          fill
                          className="object-contain p-6"
                        />
                      )}
                    </div>

                    {/* Número decorativo */}
                    <div className="absolute -top-12 -right-4 text-[8rem] font-title text-white opacity-5 font-bold leading-none pointer-events-none">
                      {index + 1}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ================================================= */}
        {/* SIGUIENTE PROYECTO */}
        {/* ================================================= */}
        {nextProject && (
          <section className="py-24 border-t border-[var(--color-primary)]/20 bg-gradient-to-b from-[var(--color-soft-pink)]/10 to-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-bold mb-8">
                ✨ Siguiente Proyecto
              </p>

              <Link
                href={`/portafolio/${nextProject.slug}`}
                className="group inline-flex flex-col items-center gap-6"
              >
                <h3 className="font-title text-3xl md:text-5xl bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent group-hover:to-[var(--color-accent)] transition-all duration-300">
                  {nextProject.title}
                </h3>

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium text-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  Ver caso de estudio
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

/* ================= GENERACIÓN ESTÁTICA ================= */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const indiceActual = projects.findIndex(
    (p) => p.slug === params?.slug
  );

  const project = projects[indiceActual];
  const nextProject =
    projects[(indiceActual + 1) % projects.length];

  return { props: { project, nextProject } };
};
