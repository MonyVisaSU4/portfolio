import { useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Certificate from "../pages/Certificate";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Me from "../pages/Me";
import Project from "../pages/Project";
import Skill from "../pages/Skill";

const Main = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .fade-in-left, .fade-in-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="section hero" id="hero">
          <Me />
        </section>
        <section className="section about" id="about">
          <About />
        </section>
        <section className="section skills" id="skills">
          <Skill />
        </section>
        <section className="section experience" id="experience">
          <Experience />
        </section>
        <section className="section projects" id="projects">
          <Project />
        </section>
        <section className="section certifications" id="certifications">
          <Certificate />
        </section>
        <section className="section contact" id="contact">
          <Contact />
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Main;
