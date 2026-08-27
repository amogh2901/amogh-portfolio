"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, GraduationCap, Terminal } from "lucide-react";
import { certifications, milestones, personalInfo, projects, technicalArsenal } from "../lib/data";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const sectionReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const projectCard = "group relative rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.1)]";

export default function PortfolioShowcase() {
  return (
    <section id="projects" className="relative bg-[#050505] px-6 py-28 text-slate-100 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal} className="space-y-12">
          <motion.div variants={reveal} className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-red-500">{"// 01"}</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">Selected Works</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.title} variants={reveal} className={`${projectCard} ${project.featured && index === 0 ? "md:col-span-2" : ""}`}>
                <div className="mb-4 flex items-start justify-between gap-6">
                  <div>
                    <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-red-400">{project.metrics}</span>
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-red-400">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-zinc-400">{project.subtitle}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white" aria-label={`View ${project.title} repository`}>
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
                <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology) => <span key={technology} className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-300">{technology}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal} className="space-y-12">
          <motion.div variants={reveal} className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-red-500">{"// 02"}</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">Technical Arsenal</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {technicalArsenal.map((group) => (
              <motion.div key={group.category} variants={reveal} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md transition-all hover:border-red-500/30">
                <div className="mb-4 flex items-center gap-2 text-red-400"><Terminal className="h-5 w-5" aria-hidden="true" /><h3 className="font-mono text-sm font-bold uppercase tracking-wider">{group.category}</h3></div>
                <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-lg border border-zinc-700/50 bg-zinc-800/80 px-3 py-1.5 text-xs text-zinc-300">{skill}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal} className="space-y-8">
          <motion.div variants={reveal} className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-red-500">{"// PASSIONS"}</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">Beyond Code</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {personalInfo.interests.map((interest) => (
              <motion.div key={interest} variants={reveal} className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center transition-all hover:border-red-500/40">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-red-400">{interest}</h3>
                <p className="mt-1 font-mono text-xs text-zinc-500">Creative &amp; Active Pursuit</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal} className="space-y-8">
            <motion.div variants={reveal} className="flex items-center gap-4"><span className="font-mono text-sm tracking-widest text-red-500">{"// 03"}</span><h2 className="flex items-center gap-2 text-xl font-bold uppercase tracking-tight text-white sm:text-2xl"><GraduationCap className="h-5 w-5 text-red-500" aria-hidden="true" /> Education</h2></motion.div>
            <div className="space-y-4">{milestones.map((item) => <motion.div key={item.title} variants={reveal} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all hover:border-red-500/30"><span className="font-mono text-xs text-red-400">{item.year}</span><h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3><p className="mt-1 text-xs text-zinc-400">{item.organization}</p></motion.div>)}</div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionReveal} className="space-y-8">
            <motion.div variants={reveal} className="flex items-center gap-4"><span className="font-mono text-sm tracking-widest text-red-500">{"// 04"}</span><h2 className="flex items-center gap-2 text-xl font-bold uppercase tracking-tight text-white sm:text-2xl"><Award className="h-5 w-5 text-red-500" aria-hidden="true" /> Certifications</h2></motion.div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{certifications.map((certification) => <motion.div key={certification.title} variants={reveal} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/40 p-5 transition-all hover:border-red-500/30"><div><span className="font-mono text-[10px] text-zinc-500">{certification.year}</span><h3 className="mt-1 text-sm font-bold leading-snug text-white">{certification.title}</h3></div><span className="mt-3 font-mono text-xs text-red-400/90">{certification.issuer}</span></motion.div>)}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}