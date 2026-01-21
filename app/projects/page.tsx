"use client";
import { useState } from "react";
import Image from "next/image";
import { getProjects, skills } from "../data";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language";

export default function ProjectsPage() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [skillFilter, setSkillFilter] = useState("All");
  const { language, t } = useLanguage(); 

  const projects = getProjects(language);

  // --- FILTER LISTS ---
  const projectCategories = [
    { key: "All", label: t("filter_all") },
    { key: "Machine Learning & Data Science", label: t("filter_ml") },
    { key: "Deep Learning & Reinforcement Learning", label: t("filter_rl") },
    { key: "Robotics & Control", label: t("filter_robotics") },
    { key: "Web Development", label: t("filter_web") },
    { key: "Research", label: t("filter_research") }
  ];

  const skillCategories = [
    { key: "All", label: t("filter_all") },
    { key: "Languages", label: t("filter_languages") },
    { key: "Deep Learning", label: t("filter_dl") },
    { key: "Web Development", label: t("filter_web") },
    { key: "Tools", label: t("filter_tools") },
  ];

  // --- FILTERING LOGIC ---
  const filteredProjects = projects.filter(
    (p) => projectFilter === "All" || p.category === projectFilter
  );

  const filteredSkills = skills.filter(
    (s) => skillFilter === "All" || s.category === skillFilter
  );

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-20">
      
      {/* --- PROJECTS SECTION --- */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("projects_title")}</h1>
        <p className="text-[var(--text-muted)] max-w-xl mb-8">
           {t("projects_subtitle")}
        </p>
        
        {/* Project Categories */}
        <div className="flex flex-wrap gap-2 w-full">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setProjectFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                projectFilter === cat.key
                  ? "bg-[var(--primary)] text-white border-transparent shadow-md"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-main)] hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- SKILLS SECTION --- */}
      <section className="border-t border-[var(--border-main)] pt-16">
        <h2 className="text-3xl font-bold mb-6">{t("skills_title")}</h2>
        
        {/* Skills Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSkillFilter(cat.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                skillFilter === cat.key
                  ? "bg-[var(--primary)] text-white border-transparent shadow-sm"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-main)] hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
               <motion.div 
                 key={skill.name}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 className="flex flex-col items-center justify-center p-4 bg-[var(--bg-card)] rounded-xl hover:shadow-md transition border border-[var(--border-main)] group"
               >
                 {/* ICON DISPLAY */}
                 {skill.icon ? (
                   <div className="mb-3 w-10 h-10 relative">
                     {/* The image component requires you to have the SVGs in /public/icons/ */}
                     {/* If the file is missing, the alt text won't look great, so ensure files exist */}
                     <Image 
                       src={skill.icon} 
                       alt={skill.name} 
                       fill
                       className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 dark:invert"
                     />
                   </div>
                 ) : (
                   // Fallback if no icon path provided: First Letter
                   <div className="mb-3 w-10 h-10 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg flex items-center justify-center font-bold text-lg">
                     {skill.name.charAt(0)}
                   </div>
                 )}
                 
                 <span className="font-semibold text-sm text-center">{skill.name}</span>
                 <span className="text-[10px] text-[var(--text-muted)] mt-1">{skill.category}</span>
               </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}