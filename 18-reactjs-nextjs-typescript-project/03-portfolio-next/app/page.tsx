import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { About, Skills, Projects, Experience, Certifications, Contact, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div id="top" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
