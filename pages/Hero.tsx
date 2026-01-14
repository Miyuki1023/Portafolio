"use client";

import Link from "next/link";
import ContactModal from "@/component/contact";
import ProjectCard from "@/component/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ANIMATIONS = {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};


export default function HomePage() {
  return (
<main className="bg-[var(--color-bg-main)] w-full overflow-x-hidden relative h-full">

     <section className="relative overflow-hidden px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-14 items-center lg:grid-cols-2">
      
          {/* TEXTO */}
          <motion.div
            variants={ANIMATIONS.container}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >
            <motion.span
              variants={ANIMATIONS.item}
              className="inline-flex justify-center lg:justify-start items-center gap-2 text-sm text-secondary font-bold"
            >
              UX/UI · Frontend Developer · Diseño centrado en el usuario
            </motion.span>
      
            <motion.h1
              variants={ANIMATIONS.item}
              className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-secondary"
            >
              Transformo ideas en{" "}
              <span className="text-gradient">experiencias digitales</span>{" "}
              funcionales y atractivas
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
                href="/portfolio"
                className="btn-outline inline-flex items-center gap-2"
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
            <img
              src="/hero-visual.png"
              alt="UX UI Design y Frontend Development"
              className="w-full max-w-md lg:max-w-lg object-contain"
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
        className="bg-[var(--color-secondary)] py-6 md:py-8"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="font-title text-sm sm:text-base md:text-lg text-center"
            style={{ color: "var(--color-soft)" }}
          >
            Diseño y desarrollo experiencias digitales con propósito, claridad y enfoque en resultados.
          </p>
        </div>
      </motion.section>

      {/* =========================
          BENEFICIOS
      ========================= */}
            <section className="section px-6 bg-white/40 relative overflow-hidden">
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
                <h2 className="font-title text-2xl sm:text-3xl md:text-4xl">
                  Mi forma de trabajar
                </h2><br />
                <p className="text-muted text-sm sm:text-base">
                  Un enfoque claro, estratégico y centrado en el usuario para diseñar
                  experiencias digitales con impacto real.
                </p>
              </motion.div>
        
              {/* Lista */}
              <div className="relative space-y-14 pl-10">
        
                {/* Línea vertical */}
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute left-4 top-0 w-[2px] rounded-full 
                  bg-gradient-to-b from-[var(--color-primary)] 
                  via-[var(--color-accent)] 
                  to-[var(--color-soft-pink)] opacity-60"
                />
        
                {/* ITEM */}
                <motion.div variants={ANIMATIONS.item} className="flex gap-6 items-start">
                  <span className="font-title text-4xl text-secondary opacity-80">
                    01
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-title text-lg sm:text-xl">
                      Diseño centrado en el usuario
                    </h3>
                    <p className="text-muted text-sm sm:text-base max-w-md">
                      Investigo, valido y diseño interfaces intuitivas basadas en
                      necesidades reales y contextos de uso.
                    </p>
                  </div>
                </motion.div>
        
                <motion.div variants={ANIMATIONS.item} className="flex gap-6 items-start">
                  <span className="font-title text-4xl text-secondary opacity-80">
                    02
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-title text-lg sm:text-xl">
                      Enfoque en resultados
                    </h3>
                    <p className="text-muted text-sm sm:text-base max-w-md">
                      Cada decisión de diseño responde a objetivos de negocio,
                      métricas claras y experiencias medibles.
                    </p>
                  </div>
                </motion.div>
        
                <motion.div variants={ANIMATIONS.item} className="flex gap-6 items-start">
                  <span className="font-title text-4xl text-secondary opacity-80">
                    03
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-title text-lg sm:text-xl">
                      Comunicación y colaboración
                    </h3>
                    <p className="text-muted text-sm sm:text-base max-w-md">
                      Trabajo de forma empática, organizada y transparente con
                      clientes y equipos multidisciplinarios.
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
          {/* Halo / glow detrás */}
          <div className="absolute w-[320px] h-[320px] rounded-full 
                          bg-[var(--color-soft-pink)] 
                          opacity-40 blur-3xl 
                          -z-10 hidden lg:block" />
        
          {/* Imagen */}
          <img
            src="/process.png"
            alt="Ilustración de proceso UX UI"
            className="relative max-w-md w-full rounded-full
                       drop-shadow-2xl hidden lg:block"
          />
        </motion.div>


  </div>
</section>

           {/* =========================  
            PROYECTOS – UX/UI SENIOR
           ========================= */}
           <section className="relative overflow-hidden py-28 px-6 bg-[var(--color-secondary)]">
           
             {/* Background editorial */}
             <div className="absolute inset-0 -z-10">
               <div className="absolute inset-0 bg-gradient-to-br 
                               from-black/25 
                               via-transparent 
                               to-black/40" />
               <div className="absolute top-[-30%] left-[-20%] w-[60%] h-[60%] 
                               bg-white/5 rounded-full blur-[120px]" />
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
                       Proyectos que generan
                       <span className="block opacity-90">
                         impacto real
                       </span>
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
                                rounded-full border border-[var(--color-soft)]/30
                                bg-[var(--color-soft)]/5 backdrop-blur-sm
                                transition-all duration-300
                                hover:bg-[var(--color-soft)] hover:border-[var(--color-soft)]
                                hover:shadow-lg hover:-translate-y-1"
                   >
                     <span className="text-sm font-medium text-[var(--color-soft)] 
                                      transition-colors duration-300 
                                      group-hover:text-[var(--color-secondary)]">
                       Ver portafolio completo
                     </span>
                     
                     <ArrowRight 
                       size={18} 
                       className="text-[var(--color-soft)] transition-all duration-300 
                                  group-hover:text-[var(--color-secondary)] 
                                  group-hover:translate-x-1" 
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
               bg-white/80
               backdrop-blur-xl
               border border-black/5
               shadow-[0_40px_90px_rgba(0,0,0,0.12)]
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
                   bg-gradient-to-r
                   btn-outline
                   shadow-xl
                   transition-all duration-300
                   hover:shadow-2xl
                   hover:-translate-y-1"
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
