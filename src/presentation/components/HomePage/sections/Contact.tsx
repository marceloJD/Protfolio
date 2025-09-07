"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import React from "react";

type ContactType = "linkedin" | "github" | "mail";

interface ContactItem {
  type: ContactType;
  href: string;
}

interface ContactProps {
  contacts: ContactItem[];
}

export default function Contact({ contacts }: ContactProps) {
  const getIcon = (type: ContactType) => {
    switch (type) {
      case "linkedin":
        return <Linkedin size={28} />;
      case "github":
        return <Github size={28} />;
      case "mail":
        return <Mail size={28} />;
      default:
        return null;
    }
  };

  return (
    <section
    id="contact"
    className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contáctame
      </h2>

      <div className="flex justify-center gap-10">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full shadow hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
          >
            {getIcon(contact.type)}
          </a>
        ))}
      </div>
    </section>
  );
}
