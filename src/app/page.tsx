
"use client";
import { useHomeViewModel } from "@/presentation/viewmodels/useHomeViewModel";
import NavBar from "@/presentation/components/HomePage/NavBar";
import Hero from "@/presentation/components/HomePage/sections/Hero";
import Projects from "@/presentation/components/HomePage/sections/Projects";
import Skills from "@/presentation/components/HomePage/sections/Skills";
import Contact from "@/presentation/components/HomePage/sections/Contact";
import Footer from "@/presentation/components/general/Footer";



export default function HomePage() {
  const vm = useHomeViewModel();

  return (
    <>
    <NavBar
        logo="MarceloJD"
        links={vm.nav.links}
        lang={vm.nav.lang}
        setLang={vm.nav.setLang}
        theme={vm.nav.theme}
        toggleTheme={vm.nav.toggleTheme}
        mounted={vm.nav.mounted}
      />
     <main>
      <Hero
        title="Hola, soy Marcelo 👋"
        subtitle="Desarrollador Fullstack con pasión por construir aplicaciones modernas."
        ctaPrimary={{ label: "Ver Proyectos", href: "#projects" }}
        ctaSecondary={{ label: "Contáctame", href: "#contact" }}
        gitHub="https://github.com/marceloJD"
        CV="/CV-MarceloJimenez.pdf"
      />
      <Projects
      title="Mis Proyectos"
      projects={[
        {
          title: "Causa Poll",
          image: "/images/portfolio.png", // recuerda poner las imágenes en /public/images
          description: "Un servicio de encuestas en vivo y encuestas complejas, sin crear usuarios y súper facil de utilizar.",
          technologies: ["NodeJS", "JavasCript", "BootStrap","React","MongoDB"],
          projectLink: "https://causa-poll-front.vercel.app",
          githubLink: "https://github.com/marceloJD/CausaPoll-front",
          githubLinkLabel: "Front",
          githubLink2: "https://github.com/marceloJD/CausaPoll-api",
          githubLink2Label: "API",
        }
      
      ]}
    />
    <Skills
      title="Tecnologías que uso"
      technologies={[
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Docker",
      ]}
    />
    <Contact
      contacts={[
        { type: "linkedin", href: "https://linkedin.com/in/marcelo-antonio-jimenez-davila-33b95b244" },
        { type: "github", href: "https://github.com/marceloJD" },
        { type: "mail", href: "mailto:marcelo.jimenez@unmsm.edu.pe" },
      ]}
    />


      
     </main>
     
     <Footer text="Marcelo Jiménez" />

    </>
  );
}
