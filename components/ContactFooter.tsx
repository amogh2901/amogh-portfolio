"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../lib/data";
import MagneticButton from "./MagneticButton";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#090a0f] px-6 pb-12 pt-24 text-slate-100 md:px-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm tracking-widest text-red-500">{"// 03 / INITIALIZE TRANSMISSION"}</span>
          <div className="h-px flex-grow bg-white/10" />
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", mass: 0.8, stiffness: 100, damping: 15 }} className="mb-20 grid items-end gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl font-black uppercase tracking-tight text-white md:text-7xl">Let&apos;s Build <br /><span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Something Great.</span></h2>
            <p className="max-w-md text-lg text-slate-400">Have a project, opportunity, or technical challenge worth exploring? Let&apos;s start a conversation.</p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <MagneticButton href={`mailto:${personalInfo.email}`} className="group inline-flex max-w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 px-8 py-5 text-lg font-bold text-white shadow-2xl shadow-red-600/30 transition-transform hover:scale-105">
              <Mail size={22} aria-hidden="true" />
              <span className="truncate">{personalInfo.email}</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </MagneticButton>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center font-mono text-xs text-slate-500 md:flex-row md:text-left">
          <div>© {new Date().getFullYear()} {personalInfo.name.toUpperCase()} • ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="uppercase tracking-wider transition-colors hover:text-red-400">GITHUB</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="uppercase tracking-wider transition-colors hover:text-red-400">LINKEDIN</a>
          </div>
          <div className="text-slate-600">CRAFTED WITH PRECISION IN {personalInfo.location.toUpperCase()}</div>
        </div>
      </div>
    </footer>
  );
}