"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/component/ProjectCard";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-20 section color-bg-main">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* HERO */}
        <section className="text-center space-y-4">
          <h1 className="font-title text-5xl text-secondary">
            Portafolio
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Proyectos seleccionados donde aplico UX/UI, diseño visual y
            desarrollo frontend con enfoque en resultados.
          </p>
        </section>

        {/* GRID */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

      </div>
    </main>
  );
}
