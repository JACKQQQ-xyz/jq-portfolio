"use client";

import Hero from "./components/Hero";
import AboutPage from "./about/page"
import Projects from "./projects/page"
import ProjectCard from "./components/ProjectCard";
import { i } from "framer-motion/client";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <section>
      <div className="mx-20">
       <Hero />
       <AboutPage />
       <Projects />
       <Contact />
      </div>
    </section>
  );
}
