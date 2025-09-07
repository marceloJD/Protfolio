"use client";


import { useState, useEffect } from "react";

export function useHomeViewModel() {
  const [ theme, setTheme ] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Cambiar clase en el <html>
    //document.documentElement.classList.remove("light", "dark");
    //document.documentElement.classList.add(newTheme);
  };


  return {
    nav: {
      mounted,
      theme,
      lang,
      setLang, 
      toggleTheme,
      links: [
        { id: "hero", label: lang === "es" ? "Inicio" : "Home" },
        { id: "projects", label: lang === "es" ? "Proyectos" : "Projects" },
        { id: "skills", label: lang === "es" ? "Habilidades" : "Skills" },
        { id: "contact", label: lang === "es" ? "Contacto" : "Contact" },
      ],
    },
    // Más secciones después: hero, projects, skills, contact
  };
}
