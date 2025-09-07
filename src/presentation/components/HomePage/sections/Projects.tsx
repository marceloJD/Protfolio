"use client";

import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink?: string;
  githubLink?: string;
  githubLinkLabel?: string;
  githubLink2?: string;
  githubLink2Label?: string;
};

type ProjectsProps = {
  title: string;
  projects: Project[];
};

export default function Projects({ title, projects }: ProjectsProps) {
  return (
    <section
  id="projects"
  className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 scroll-mt-20"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    {title}
  </h2>

  <div className="max-w-screen-xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center max-w-sm w-full"
        >
          {/* Imagen */}
          <img
            src={`https://api.microlink.io/?url=${encodeURIComponent(
                project.projectLink!
            )}&screenshot=true&embed=screenshot.url&meta=false`}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg"
            />

          {/* Contenido */}
          <div className="p-6 flex flex-col flex-1 items-center text-center">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              )}
              

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <Github size={18} /> {project.githubLinkLabel}
                </a>
              )}
              {project.githubLink2 && (
                <a
                  href={project.githubLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <Github size={18} /> {project.githubLink2Label}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
