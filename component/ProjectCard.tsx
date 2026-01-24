import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { title, description, tools, slug, cover, category } = project;

  return (
    <Link href={`/portafolio/${slug}`} className="group block h-full">
      <article className="relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-primary/20">
        
        {/* Contenedor de Imagen */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay con color brand al hover */}
          <div 
            className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: "rgba(244, 156, 187, 0.08)" }}
          />
          
          {/* Badge de Categoría mejorado */}
          <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span 
              className="inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md rounded-full border transition-all duration-300"
              style={{
                backgroundColor: "var(--color-secondary)",
                borderColor: "rgba(255, 255, 255, 0.3)"
              }}
             >
              {category}
            </span>
          </div>

          {/* Icon hover - entra desde el lado */}
          <div className="absolute top-5 right-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
            <div 
              className="p-2 rounded-full backdrop-blur-md"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <ArrowUpRight size={20} style={{ color: "var(--color-bg-main)" }} />
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-6 sm:p-8 space-y-5 relative">
          
          {/* Linea decorativa superior */}
          <div 
            className="absolute top-0 left-8 h-1 w-0 group-hover:w-12 transition-all duration-500"
            style={{ backgroundColor: "var(--color-primary)" }}
          />

          <div className="space-y-3 flex-1">
            <div className="flex justify-between items-start gap-4">
              <h3 
                className="font-title text-xl sm:text-2xl leading-tight transition-colors duration-300"
                style={{ color: "var(--color-secondary)" }}
              >
                {title}
              </h3>
            </div>
            <p className="text-muted text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Herramientas con estilo mejorado */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
            {tools.slice(0, 3).map((tool, idx) => (
              <span 
                key={tool}
                className="text-[11px] font-medium px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-110 cursor-default"
                style={{
                  backgroundColor: idx === 0 ? "var(--color-bg-main)" : idx === 1 ? "#fef6f9" : "white",
                  color: idx === 0 ? "var(--color-accent)" : "var(--color-muted)",
                  border: `1px solid ${idx === 0 ? "var(--color-accent)" : "#e5e7eb"}`
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
} 
