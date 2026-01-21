"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_projects: "Projects",
    nav_contact: "Contact",
    
    // Home
    home_title: "Hi, I’m Martin",
    home_desc: "Machine Learning graduate student at MILA (Quebec AI Institute) looking for a 6-8 month credited internship during Summer 2026. Passionate about RL, Data Science, and Software Engineering.",
    hero_btn_linkedin: "LinkedIn",
    hero_btn_github: "GitHub",
    footer_rights: "All rights reserved.",

    // Projects Page
    projects_title: "Projects & Research",
    projects_subtitle: "My latest work in AI, Engineering, and Software Development.",
    skills_title: "Technical Skills",
    
    // Filters
    filter_all: "All",
    filter_ml: "ML / Data Science",
    filter_rl: "Reinforcement Learning",
    filter_robotics: "Robotics & Control",
    filter_web: "Web Development",
    filter_research: "Research",
    filter_languages: "Languages",
    filter_tools: "Tools",
    filter_dl: "Deep Learning",

    // Contact Page
    contact_title: "Get in Touch",
    contact_desc: "I’m actively seeking a 6-8 month internship for Summer 2026. If you have a question or project proposal, I’d love to hear from you.",
    contact_name: "Name",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_btn: "Send Message",
  },
  fr: {
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_contact: "Contact",

    home_title: "Bonjour, je suis Martin",
    home_desc: "Étudiant à la maîtrise au MILA (Institut d'IA du Québec) à la recherche d'un stage crédité de 6 à 8 mois pour l'été 2026. Passionné par le RL, la science des données et le génie logiciel.",
    hero_btn_linkedin: "LinkedIn",
    hero_btn_github: "GitHub",
    footer_rights: "Tous droits réservés.",

    projects_title: "Projets et Recherche",
    projects_subtitle: "Mes derniers travaux en IA, Ingénierie et Développement Logiciel.",
    skills_title: "Compétences Techniques",

    filter_all: "Tout",
    filter_ml: "ML / Science des Données",
    filter_rl: "Apprentissage par Renforcement",
    filter_robotics: "Robotique et Contrôle",
    filter_web: "Développement Web",
    filter_research: "Recherche",
    filter_languages: "Langages",
    filter_tools: "Outils",
    filter_dl: "Apprentissage Profond",

    contact_title: "Contactez-moi",
    contact_desc: "Je recherche activement un stage de 6 à 8 mois pour l'été 2026. Si vous avez une question ou une proposition de projet, écrivez-moi.",
    contact_name: "Nom",
    contact_email: "Courriel",
    contact_subject: "Sujet",
    contact_message: "Message",
    contact_btn: "Envoyer",
  },
  es: {
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    home_title: "Hola, soy Martin",
    home_desc: "Estudiante de maestría en MILA (Instituto de IA de Quebec) buscando una pasantía acreditada de 6-8 meses para el verano de 2026. Apasionado por RL, Ciencia de Datos e Ingeniería de Software.",
    hero_btn_linkedin: "LinkedIn",
    hero_btn_github: "GitHub",
    footer_rights: "Todos los derechos reservados.",

    projects_title: "Proyectos e Investigación",
    projects_subtitle: "Mis últimos trabajos en IA, Ingeniería y Desarrollo de Software.",
    skills_title: "Habilidades Técnicas",

    filter_all: "Todos",
    filter_ml: "ML / Ciencia de Datos",
    filter_rl: "Aprendizaje por Refuerzo",
    filter_robotics: "Robótica y Control",
    filter_web: "Desarrollo Web",
    filter_research: "Investigación",
    filter_languages: "Lenguajes",
    filter_tools: "Herramientas",
    filter_dl: "Aprendizaje Profundo",

    contact_title: "Ponte en Contacto",
    contact_desc: "Busco activamente una pasantía de 6-8 meses para el verano de 2026. Si tienes una pregunta o propuesta de proyecto, contáctame.",
    contact_name: "Nombre",
    contact_email: "Correo",
    contact_subject: "Asunto",
    contact_message: "Mensaje",
    contact_btn: "Enviar Mensaje",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}