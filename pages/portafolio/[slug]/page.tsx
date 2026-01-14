import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectDetail({ params }: any) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return null;

  return (
    <main className="min-h-screen py-20 section color-bg-main">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="font-title text-4xl text-secondary">
            {project.title}
          </h1>

          <p className="text-muted">
            {project.category}
          </p>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* INFO */}
        <section className="space-y-6 text-sm">
          <div>
            <strong>Rol</strong>
            <p className="text-muted">{project.role}</p>
          </div>

          <div>
            <strong>Descripción</strong>
            <p className="text-muted">{project.description}</p>
          </div>

          <div>
            <strong>Herramientas</strong>
            <p className="text-muted">
              {project.tools.join(" · ")}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
