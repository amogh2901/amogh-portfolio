"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Python",
  "Java",
];

const services = [
  "Website Development",
  "Frontend Development",
  "Full Stack Applications",
  "College Projects",
  "UI/UX Design",
  "Portfolio Websites",
];

export default function Home() {
  return (
    <main className="text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md border-b border-slate-800 bg-[#020617]/80 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-blue-400 font-bold text-2xl drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            amogh.dev
          </h1>

          <div className="hidden md:flex gap-10 text-lg">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>

        </div>
      </nav>
      <div className="absolute top-32 left-10 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>

<div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>
      {/* Hero */}
      <section className="min-h-screen flex items-center">

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="max-w-7xl mx-auto px-6 relative z-10"
  
>

          <div className="inline-block border border-blue-500 text-blue-400 px-5 py-2 rounded-full mb-8">
            MCA Student • Full Stack Developer
          </div>

          <h1 className="text-6xl md:text-[140px] font-black leading-none">
            AMOGH
            <br />
            KALYANSHETTI
          </h1>

          <p className="text-slate-400 mt-8 max-w-2xl text-xl leading-relaxed">
            Building modern web applications, scalable software
            solutions and responsive digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/Amogh_Kalyanshetti_Resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-slate-700 px-8 py-4 rounded-xl hover:border-blue-500 transition"
            >
              Contact Me
            </a>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-10 mt-20">

  <motion.div whileHover={{ scale: 1.05 }}>
    <h3 className="text-5xl font-bold text-blue-400">2</h3>
    <p className="text-slate-400 mt-2">Projects Built</p>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }}>
    <h3 className="text-5xl font-bold text-blue-400">7.10</h3>
    <p className="text-slate-400 mt-2">MCA CGPA</p>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }}>
    <h3 className="text-5xl font-bold text-blue-400">8.21</h3>
    <p className="text-slate-400 mt-2">BSc CGPA</p>
  </motion.div>

</div>
</motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          About Me
        </h2>

        <p className="text-slate-400 text-lg leading-9 max-w-4xl">
          I am an MCA student and Full Stack Developer passionate
          about building scalable web applications and modern user
          experiences. I specialize in React, Next.js, Python,
          MongoDB and responsive UI development. I enjoy creating
          clean, fast and user-friendly digital products.
        </p>

      </section>

      {/* Skills */}
      <section
  id="skills"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <h2 className="text-5xl md:text-6xl font-bold mb-12">
    Skills
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    {skills.map((skill) => (
      <motion.div
        key={skill}
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        transition={{ duration: 0.2 }}
        className="border border-slate-800 bg-slate-900/40 rounded-xl p-6 hover:border-blue-500"
      >
        {skill}
      </motion.div>
    ))}
  </div>
</section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="border border-slate-800 bg-slate-900/40 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              {service}
            </div>
          ))}

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border border-slate-800 rounded-2xl p-8 min-h-[160px] bg-slate-900/40 hover:border-blue-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-300 flex items-center gap-4"
      >

        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          Contact
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:amoghkalyanshetti2005@gmail.com"
            className="border border-slate-800 rounded-2xl p-8 min-h-[140px] bg-slate-900/30 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4"
          >
            <FaEnvelope size={28} />

            <div>
              <p className="font-semibold text-xl">
                Email
              </p>

              <p className="text-slate-400 break-all text-sm mt-2">
                amoghkalyanshetti2005@gmail.com
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/amogh2001"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-800 rounded-2xl p-8 min-h-[140px] bg-slate-900/30 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4"
          >
            <FaGithub size={28} />

            <div>
              <p className="font-semibold text-xl">
                GitHub
              </p>

              <p className="text-slate-400 break-all text-sm mt-2">
                github.com/amogh2001
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amoghk29/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-800 rounded-2xl p-8 min-h-[140px] bg-slate-900/30 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4"
          >
            <FaLinkedin size={28} />

            <div>
              <p className="font-semibold text-xl">
                LinkedIn
              </p>

              <p className="text-slate-400 text-sm mt-2">
                Connect with me
              </p>
            </div>
          </a>

        </div>
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
></motion.section>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center">

        <p className="text-slate-400">
          © 2026 Amogh Kalyanshetti
        </p>

        <p className="text-slate-600 mt-2">
          Built with Next.js & Tailwind CSS
        </p>

      </footer>

    </main>
  );
}