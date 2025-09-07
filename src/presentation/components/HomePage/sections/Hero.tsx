"use client";

import { Github, FileDown } from "lucide-react";

type HeroProps = {
  title: string;
  subtitle: string;
  gitHub?: string;
  CV?: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
};

export default function Hero({
  title,
  subtitle,
  gitHub,
  CV,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen 
                 bg-white text-black dark:bg-gray-900 dark:text-white px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
        {subtitle}
      </p>

      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
        {/* Botón principal */}
        <a
          href={ctaPrimary.href}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow 
                     hover:bg-blue-600 transition text-center"
        >
          {ctaPrimary.label}
        </a>

        {/* Botón secundario */}
        {ctaSecondary && (
          <a
            href={ctaSecondary.href}
            className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-lg
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center"
          >
            {ctaSecondary.label}
          </a>
        )}

        {/* Botón de CV */}
        {CV && (
          <a
            href={CV}
            download
            className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-lg
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center"
          >
            <FileDown size={20} />
            <span>Descargar CV</span>
          </a>
        )}

        {/* Botón de GitHub */}
        {gitHub && (
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-400 dark:border-gray-600 rounded-lg
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </section>
  );
}
