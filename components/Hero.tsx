"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { personalInfo, stats } from "../lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#050505] px-6 pb-16 pt-28 text-slate-100 sm:px-12 lg:px-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-red-400 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {personalInfo.role} • MCA Final-Year • {personalInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="font-mono text-sm tracking-widest text-zinc-400">{"// HELLO, I'M "}{personalInfo.name.toUpperCase()}</p>
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
            I don&apos;t just write code.
            <br />
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-white bg-clip-text text-transparent">I build what&apos;s next.</span>
          </h1>
          <p className="max-w-2xl pt-2 text-base leading-relaxed text-zinc-400 sm:text-xl">{personalInfo.summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <MagneticButton href="#projects" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-red-600 px-9 text-sm font-bold text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all hover:bg-red-500">
            View Projects
          </MagneticButton>
          <MagneticButton href="/Amogh_Kalyanshetti_Resume.pdf" download className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-9 text-sm font-bold text-zinc-200 backdrop-blur-md transition-all hover:border-red-500/40 hover:text-white">
            <Download className="h-4 w-4 text-red-500" aria-hidden="true" /> Download Resume
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-20 mx-auto mt-24 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md transition-colors hover:border-red-500/30">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-white transition-colors group-hover:text-red-400 sm:text-3xl">{stat.value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}