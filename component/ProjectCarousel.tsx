import { motion } from "framer-motion"
import Image from "next/image"
import { projects } from "@/data/projects"

export function ProjectCarousel() {
  return (
    <div className="relative mt-16 overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="relative min-w-[260px] sm:min-w-[300px] 
                       aspect-[3/4] rounded-3xl overflow-hidden
                       bg-white shadow-xl rotate-[-2deg]
                       hover:rotate-0 transition-transform duration-300"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* Overlay editorial */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectCarousel;