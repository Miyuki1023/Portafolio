import { projects } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= PAGE ================= */

export default function ProjectDetail({ project }: any) {
  if (!project) return null;

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <div className="max-w-7xl mx-auto px-6 space-y-64 py-32">

        {/* ================================================= */}
        {/* HERO — IMPACTO VISUAL (como la imagen) */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid lg:grid-cols-2 gap-24 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-10">
            <span className="uppercase tracking-widest text-sm text-secondary">
              UX / UI Case Study
            </span>

            <h1 className="font-title text-6xl xl:text-7xl leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-muted max-w-xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool: string) => (
                <span
                  key={tool}
                  className="px-4 py-1 text-xs rounded-full bg-[var(--color-bg-secondary)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative h-[560px] rounded-[40px] overflow-hidden shadow-soft"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* ================================================= */}
        {/* METADATA / HIGHLIGHTS */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-16"
        >
          <motion.div variants={fadeUp}>
            <h4 className="text-xs uppercase tracking-widest text-secondary">
              Contexto
            </h4>
            <p className="text-muted mt-2">
              {project.overview.context}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs uppercase tracking-widest text-secondary">
              Objetivo
            </h4>
            <p className="text-muted mt-2">
              {project.overview.goal}
            </p>
          </motion.div>
        </motion.section>

        {/* ================================================= */}
        {/* PROBLEMA — DEEP DIVE */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl space-y-8"
        >
          <h2 className="font-title text-4xl">
            Deep dive into the User Mindset
          </h2>

          <p className="text-muted text-lg">
            {project.overview.problemStatement}
          </p>
        </motion.section>

        {/* ================================================= */}
        {/* HIPÓTESIS */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl space-y-6"
        >
          <h2 className="font-title text-3xl">
            Hipótesis Inicial
          </h2>
          <p className="text-muted">
            {project.research.hypothesis}
          </p>
        </motion.section>

        {/* ================================================= */}
        {/* UX RESEARCH + PERSONA */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-32"
        >
          <motion.div variants={fadeUp} className="max-w-3xl space-y-6">
            <h2 className="font-title text-3xl">
              UX Research
            </h2>
            <p className="text-muted">
              {project.research.why}
            </p>
          </motion.div>

          {/* Persona */}
          <motion.div
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">
                {project.research.persona.name}
              </h3>
              <p className="text-muted">
                {project.research.persona.profile} ·{" "}
                {project.research.persona.location}
              </p>
              <p className="text-muted">
                {project.research.persona.context}
              </p>
            </div>

            <div className="relative h-[360px] rounded-3xl overflow-hidden">
              <Image
                src={project.research.persona.img}
                alt="User Persona"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-3 gap-12"
          >
            {project.research.journey.map((step: any) => (
              <motion.div
                key={step.stage}
                variants={fadeUp}
                className="space-y-3"
              >
                <h4 className="font-medium">
                  {step.stage}
                </h4>
                <p className="text-muted text-sm">
                  {step.action}
                </p>
                <p className="text-sm text-red-500">
                  {step.pain}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ================================================= */}
        {/* INSIGHTS */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl space-y-10"
        >
          <h2 className="font-title text-3xl">
            Insights Clave
          </h2>

          <ul className="space-y-4">
            {project.research.keyInsights.map((insight: string) => (
              <li
                key={insight}
                className="pl-6 border-l-2 border-secondary text-muted"
              >
                {insight}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ================================================= */}
        {/* SOLUCIÓN */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl space-y-12"
        >
          <h2 className="font-title text-4xl">
            The Aesthetic Solution
          </h2>

          <ul className="space-y-6">
            {project.solution.uxStrategy.map((item: string) => (
              <li key={item} className="flex gap-4 text-muted">
                <span className="mt-2 w-2 h-2 rounded-full bg-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ================================================= */}
        {/* IMPACTO */}
        {/* ================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl space-y-8"
        >
          <h2 className="font-title text-3xl">
            Impacto & Aprendizajes
          </h2>

          <ul className="space-y-4">
            {project.outcomes.impact.map((item: string) => (
              <li
                key={item}
                className="pl-6 border-l-2 border-secondary text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

      </div>
    </main>
  );
}

/* ================= SSG ================= */

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  return { props: { project } };
};
