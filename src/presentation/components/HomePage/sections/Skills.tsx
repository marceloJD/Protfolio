"use client";

type SkillsProps = {
  title: string;
  technologies: string[];
};

export default function Skills({ title, technologies }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>

      <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition transform"
          >
            <span className="text-lg font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
