"use client";

import { useState, useEffect } from "react";
import IntroLoader from "@/components/IntroLoader";
import CursorSpotlight from "@/components/CursorSpotlight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main>
      <IntroLoader onComplete={() => setIntroReady(true)} />
      <CursorSpotlight />
      <Navbar isReady={introReady} />
      <Hero isReady={introReady} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}
