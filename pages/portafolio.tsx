"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/component/ProjectCard";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-20 section" style={{ backgroundColor: "var(--color-bg-main)" }}>
      <div className="max-w-6xl mx-auto space-y-14">

        {/* HERO */}
        <section className="text-center space-y-6 py-8">
          <div className="space-y-3">
            <span 
              className="inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-4 tracking-wider"
              style={{ backgroundColor: "rgba(244, 156, 187, 0.15)", color: "var(--color-accent)" }}
            >
              MIS MEJORES TRABAJOS
            </span>
            <h1 className="font-title text-5xl font-bold" style={{ color: "var(--color-secondary)" }}>
              Portafolio
            </h1>
          </div>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Proyectos seleccionados donde aplico UX/UI, diseño visual y desarrollo frontend con enfoque en <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>resultados reales</span>.
          </p>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-1 w-12" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
            <div className="h-1 w-12" style={{ backgroundColor: "var(--color-primary)" }} />
          </div>
        </section>

        {/* GRID */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

      </div>
    </main>
  );
}
