"use client";

import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";

type Props = {

};

export default function Home({
 
}: Props) {
  return (
    
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y
     snap-mandatory overflow-y-scroll  z-0 scrollbar
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative"
    >
      <Head>
        <title>Airam's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      {/* Footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer z-10">
        <div className="flex justify-center items-center">
          <Image
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 hover:h-12 hover:w-12 hover:bg-[#F7AB0A]"
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            onClick={() =>
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </footer>
    </div>
  );
}