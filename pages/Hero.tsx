"use client";

import Link from "next/link";
import Image from "next/image";
import ContactModal from "@/component/contact";
import ProjectCard from "@/component/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowRight, Search, PenTool, Code } from "lucide-react";
import { motion, Variants } from "framer-motion";

const ANIMATIONS: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1] as const,
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1] as const,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  },
  floating: {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
};


export default function HomePage() {
  return (
<main className="bg-[var(--color-bg-main)] w-full overflow-x-hidden relative h-full">

<section
  className="
    relative
    overflow-hidden
    px-6
    sm:px-32
    xl:px-24
    py-20
    sm:py-32
    xl:py-3
  "
>
        <div className="max-w-6xl mx-auto grid gap-14 items-center lg:grid-cols-2">
      
          <motion.div
            variants={ANIMATIONS.container}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >
            <motion.span
              variants={ANIMATIONS.item}
              className="inline-flex justify-center lg:justify-start items-center gap-2 text-sm font-bold text-[var(--color-primary)]"
            >
              UX/UI · Frontend Developer · Diseño centrado en el usuario
            </motion.span>
      
            <motion.h1
              variants={ANIMATIONS.item}
              className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[var(--color-secondary)]"
            >
              Transformo ideas en{" "}
              <span className="text-[var(--color-primary)]">experiencias digitales</span>{" "}
              <span className="block text-[var(--color-secondary)]">funcionales y atractivas</span>
            </motion.h1>
      
            <motion.p
              variants={ANIMATIONS.item}
              className="max-w-xl mx-auto lg:mx-0 text-muted text-sm sm:text-base"
            >
              Diseño y desarrollo experiencias digitales con propósito, claridad
              y enfoque en resultados reales.
            </motion.p>
      
            <motion.div
              variants={ANIMATIONS.item}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <Link
              href="/portafolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{color:"var(--color-bg-main)"}}
              >
                Ver portafolio
                <ArrowRight size={16} />
              </Link>
      
              <ContactModal />
            </motion.div>
          </motion.div>
      
          {/* IMAGEN */}
          <motion.div
            variants={ANIMATIONS.scaleUp}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-center"
          >
            <Image
              src="/hero-visual.png"
              alt="Ilustración abstracta representando diseño UX/UI"
              width={600}
              height={600}
              priority // Carga prioritaria para mejorar LCP (Core Web Vitals)
              className="w-full max-w-md lg:max-w-lg object-contain mix-blend-multiply"
            />

          </motion.div>
      
        </div>
      </section>


      {/* =========================
          FRASE DESTACADA
      ========================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={ANIMATIONS.fadeIn}
        id="seccion_llamada"
        className="py-6 md:py-10 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="font-title text-sm sm:text-base md:text-lg text-center font-bold"
            style={{ color: "var(--color-bg-main)" }}
          >
            Diseño y desarrollo experiencias digitales con <span style={{ color: "white" }}>propósito, claridad</span> y <span style={{ color: "white" }}>enfoque en resultados</span>.
          </p>
        </div>
      </motion.section>

      {/* =========================
          BENEFICIOS
      ========================= */}
            <section className="section px-6 relative overflow-hidden" style={{ backgroundColor: "var(--color-bg-main)" }}>
          <div className="max-w-6xl mx-auto grid gap-20 lg:grid-cols-2 items-center">
        
            {/* TEXTO */}
            <motion.div
              variants={ANIMATIONS.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-16"
            >
        
              {/* Heading */}
              <motion.div variants={ANIMATIONS.item} className="space-y-4 max-w-xl">
                <h2 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--color-secondary)" }}>
                  Mi forma de trabajar
                </h2>
                <p className="text-sm sm:text-base max-w-md" style={{ color: "var(--color-muted)" }}>
                  Un enfoque claro, estratégico y centrado en el usuario para diseñar experiencias digitales con impacto real.
                </p>
              </motion.div>
        
              {/* Lista */}
              <div className="relative space-y-14 pl-10">
        
                {/* Línea vertical mejorada */}
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute left-4 top-0 w-[2px] rounded-full opacity-40"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
        
                {/* ITEM 1 */}
                <motion.div variants={ANIMATIONS.item} className="flex gap-6 items-start group">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-title text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-primary)", color: "var(--color-bg-main)" }}
                  >
                    01
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-title text-lg sm:text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
                      Diseño centrado en el usuario
                    </h3>
                    <p className="text-muted text-sm sm:text-base max-w-md">
                      Investigo, valido y diseño interfaces intuitivas basadas en necesidades reales y contextos de uso.
                    </p>
                  </div>
                </motion.div>
        
                {/* ITEM 2 */}
                <motion.div variants={ANIMATIONS.item} className="flex gap-6 items-start group">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-title text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg-main)" }}
                  >
                    02
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-title text-lg sm:text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
                      Enfoque en resultados
                    </h3>
                    <p className="text-muted text-sm sm:text-base max-w-md">
                      Cada decisión de diseño responde a objetivos de negocio, métricas claras y experiencias medibles.
                    </p>
                  </div>
                </motion.div>
        
                {/* ITEM 3 */}
                <motion.div variants={ANIMATIONS.item} className="flex gap-6 items-start group">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-title text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-soft-pink)", color: "var(--color-bg-main)" }}
                  >
                    03
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-title text-lg sm:text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
                      Comunicación y colaboración
                    </h3>
                    <p className="text-muted text-sm sm:text-base max-w-md">
                      Trabajo de forma empática, organizada y transparente con clientes y equipos multidisciplinarios.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
        
            {/* IMAGEN */}
            <motion.div
              variants={ANIMATIONS.scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              {/* Halo / glow detrás más sofisticado */}
              <div className="absolute w-[500px] h-[500px] rounded-full 
                              bg-[var(--color-primary)]/20
                              opacity-70 blur-[100px] 
                              -z-10 hidden lg:block" />
            
              {/* Contenedor relativo para la composición */}
              <div className="relative z-10 hidden lg:block">
                {/* Imagen Principal */}
                <Image
                  src="/process.png"
                  alt="Gráfico del proceso de diseño: Research, Design, Dev"
                  width={500}
                  height={500}
                  className="relative max-w-md w-full rounded-[2.5rem]
                            shadow-2xl border border-white/50"
                />

                {/* --- ELEMENTOS FLOTANTES (Diseño Senior) --- */}

                {/* Card 1: Research (Arriba Izquierda) */}
                <motion.div 
                  variants={ANIMATIONS.floating}
                  animate="animate"
                  className="absolute -top-8 -left-12 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[var(--color-primary)]/20 flex items-center gap-4"
                >
                  <div className="bg-[var(--color-primary)]/15 p-3 rounded-xl text-[var(--color-primary)]">
                      <Search size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Research</p>
                      <p className="text-base font-bold text-[var(--color-secondary)]">User Centric</p>
                  </div>
                </motion.div>

                {/* Card 2: Design (Centro Derecha) */}
                <motion.div 
                  variants={ANIMATIONS.floating}
                  animate="animate"
                  transition={{ delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                  className="absolute top-1/2 -right-16 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[var(--color-accent)]/20 flex items-center gap-4"
                >
                  <div className="bg-[var(--color-accent)]/15 p-3 rounded-xl text-[var(--color-accent)]">
                      <PenTool size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Design</p>
                      <p className="text-base font-bold text-[var(--color-secondary)]">Pixel Perfect</p>
                  </div>
                </motion.div>

                {/* Card 3: Code (Abajo Izquierda) */}
                <motion.div 
                  variants={ANIMATIONS.floating}
                  animate="animate"
                  transition={{ delay: 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                  className="absolute -bottom-8 left-8 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[var(--color-bg-secondary)]/20 flex items-center gap-4"
                >
                  <div className="bg-[var(--color-bg-secondary)]/15 p-3 rounded-xl text-[var(--color-bg-secondary)]">
                      <Code size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Dev</p>
                      <p className="text-base font-bold text-[var(--color-secondary)]">Clean Code</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>


  </div>
</section>

           {/* =========================  
            PROYECTOS – UX/UI SENIOR
           ========================= */}
           <section className="relative overflow-hidden py-28 px-6 bg-[var(--color-secondary)]">
           
             {/* Background editorial */}
             <div className="absolute inset-0 -z-10">
               <div className="absolute inset-0 bg-black/20" />
               <div className="absolute top-[-30%] left-[-20%] w-[60%] h-[60%] 
                               bg-[var(--color-primary)]/15 rounded-full blur-[120px]" />
               <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] 
                               bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
             </div>
           
             <div className="max-w-6xl mx-auto space-y-24 relative">
           
               {/* HEADER */}
               <motion.div
                 variants={ANIMATIONS.container}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 className="grid gap-12 md:grid-cols-2 items-end"
               >
           
                 <motion.div variants={ANIMATIONS.item} className="space-y-8 max-w-xl" style={{ color: "var(--color-soft)" }}>
                   <div className="space-y-2">
                     <span className="text-xs uppercase tracking-[0.2em] opacity-70 block">
                       Trabajo seleccionado
                     </span>
                     <h2 className="font-title text-4xl sm:text-5xl md:text-6xl leading-[1.05]" style={{ color: "var(--color-soft)" }}>
                       Proyectos que generan<br />
                       <span style={{ color: "var(--color-accent)" }}>impacto real</span>
                     </h2>
                   </div>
           
                   <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-md" style={{ color: "var(--color-soft)" }}>
                     Casos donde combino UX/UI, frontend y pensamiento estratégico
                     para resolver problemas reales de negocio.
                   </p>
                 </motion.div>
           
                 {/* CTA Desktop */}
                 <motion.div variants={ANIMATIONS.item} className="hidden md:flex justify-end items-center">
                   <Link
              href="/portafolio"
                     className="group relative inline-flex items-center gap-3 px-8 py-4 
                                rounded-full border border-[var(--color-accent)]
                                bg-[var(--color-accent)]
                                text-white
                                transition-all duration-300 
                                hover:shadow-xl hover:-translate-y-1" style={{color:"var(--color-bg-main)"}}
                   >
                     <span className="text-sm font-medium">
                       Ver portafolio 
                     </span>
                     
                     <ArrowRight 
                       size={18} 
                       className="transition-all duration-300 group-hover:translate-x-1" 
                     />
                   </Link>
                 </motion.div>
               </motion.div>
           
               <motion.div
  variants={ANIMATIONS.container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
>
  {projects.slice(0, 3).map((project) => (
    <motion.div
      key={project.id}
      variants={ANIMATIONS.item}
      className="h-full"
    >
      <ProjectCard project={project} />
    </motion.div>
  ))}
</motion.div>

           
               {/* CTA Mobile */}
               <div className="flex justify-center md:hidden">
                 <Link
                   href="/portafolio"
                   className="btn-outline gap-2">
                   Ver todos los proyectos →
                 </Link>
               </div>
           
             </div>
           </section>
           


         {/* =========================
          CTA FINAL – UX/UI SENIOR (EDITORIAL)
         ========================= */}
         <section className="relative py-28 px-6 overflow-hidden" style={{
               backgroundImage: "url('/fondo.jpg')",
               backgroundSize: "360px",
                backgroundRepeat: "repeat",
                           
             }}>
           {/* Fondo con imagen */}
           <div
             className="absolute inset-0 -z-20 bg-repeat bg-center bg-cover"
           />
     
         {/* Overlay para legibilidad */}
         <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-sm h-full" />
       
         <div className="max-w-5xl mx-auto h-full flex items-center justify-center">
           <motion.div
             variants={ANIMATIONS.container}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="
               relative text-center
               rounded-[2.5rem]
               bg-white
               border border-[var(--color-accent)]/20
               shadow-[0_40px_90px_rgba(0,0,0,0.08)]
               px-8 sm:px-14 py-16 sm:py-20
               space-y-10
             "
           >
       
             {/* Badge */}
             <motion.span
               variants={ANIMATIONS.item}
               className="
                 inline-block text-xs tracking-[0.2em] uppercase
                 text-[var(--color-primary)]
                 bg-[var(--color-primary)]/10
                 px-5 py-2 rounded-full
               "
             >
               Disponible para nuevos proyectos
             </motion.span>
       
             {/* Headline */}
             <motion.h2 variants={ANIMATIONS.item}>
               Convirtamos tu idea en una experiencia
               <span className="block text-[var(--color-primary)]">
                 digital que conecte
               </span>
             </motion.h2><br />
       
             {/* Copy */}
             <motion.p variants={ANIMATIONS.item} className="max-w-xl mx-auto text-sm sm:text-base text-muted leading-relaxed">
               Te ayudo a diseñar interfaces claras, atractivas y pensadas
               estratégicamente para tus usuarios y objetivos de negocio.
             </motion.p>
       
             {/* CTA */}
             <motion.div variants={ANIMATIONS.item}>
               <ContactModal>
                 <button className="
                   group inline-flex items-center gap-4
                   rounded-full px-10 py-4
                   bg-[var(--color-primary)]
                   text-white
                   font-medium
                   shadow-lg
                   transition-all duration-300
                   hover:shadow-2xl
                   hover:-translate-y-1
                   hover:bg-[var(--color-primary)]/90"
                 >
                   Iniciar proyecto
                   <span className="transition-transform duration-300 group-hover:translate-x-1">
                     →
                   </span>
                 </button>
               </ContactModal>
             </motion.div>
       
             {/* Micro confianza */}
             <motion.p variants={ANIMATIONS.item} className="text-xs text-muted">
               Respuesta en menos de 24 horas · Sin compromiso
             </motion.p>
       
           </motion.div>
         </div>
       </section>

    </main>
  );
}
