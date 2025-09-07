"use client";

interface FooterProps {
  text: string;
  year?: number;
}

export default function Footer({ text, year }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {year ?? currentYear} {text}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
