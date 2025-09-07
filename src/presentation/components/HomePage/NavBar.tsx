import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
type NavBarProps = {
  logo: string;
  links: { id: string; label: string }[];
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
  theme: string | undefined;
  toggleTheme: () => void;
  mounted: boolean;
};

export default function NavBar({
  logo,
  links,
  lang,
  setLang,
  theme,
  toggleTheme,
  mounted,
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="hidden lg:block text-xl font-bold text-blue-600 dark:text-blue-400"

        >
          {logo}
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-blue-500 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Botón hamburguesa mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>  

        {/* Actions */}
        <div className="flex items-center space-x-4">                     
          {/* Toggle dark/light */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
      {/* Menú desplegable en mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 flex flex-col items-center space-y-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)} // cerrar al hacer click
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}
