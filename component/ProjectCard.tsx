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
      <article className="relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-black/5">
        
        {/* Contenedor de Imagen */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay sutil al hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          
          {/* Badge de Categoría */}
          <div className="absolute top-5 left-5">
             <span className="inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              {category}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-6 sm:p-8 space-y-5">
          <div className="space-y-3 flex-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-title text-xl sm:text-2xl leading-tight text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                {title}
              </h3>
              <span className="text-[var(--color-primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight size={24} />
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Herramientas */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
            {tools.slice(0, 3).map((tool) => (
              <span 
                key={tool} 
                className="text-[11px] font-medium px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
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
