import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectDetail({ params }: any) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* =========================
            HERO DEL PROYECTO
        ========================= */}
        <section className="space-y-8">

          {/* Breadcrumb / categoría */}
          <span className="inline-block text-xs uppercase tracking-wider 
                           text-muted bg-black/5 px-4 py-1 rounded-full">
            {project.category}
          </span>

          {/* Título */}
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl 
                         leading-tight text-secondary max-w-3xl">
            {project.title}
          </h1>

          {/* Imagen principal */}
          <div className="relative h-[420px] sm:h-[520px] rounded-3xl 
                          overflow-hidden soft-shadow">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* =========================
            CONTENIDO DEL PROYECTO
        ========================= */}
        <section className="grid gap-16 lg:grid-cols-3">

          {/* DESCRIPCIÓN */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-title text-2xl text-secondary">
              Descripción del proyecto
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* SIDEBAR INFO */}
          <aside className="space-y-8">

            {/* Rol */}
            <div className="card space-y-2">
              <h3 className="font-title text-sm text-secondary uppercase tracking-wide">
                Rol
              </h3>
              <p className="text-muted text-sm">
                {project.role}
              </p>
            </div>

            {/* Herramientas */}
            <div className="card space-y-3">
              <h3 className="font-title text-sm text-secondary uppercase tracking-wide">
                Herramientas
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-[var(--color-soft-pink)] 
                               text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </section>

      </div>
    </main>
  );
}
