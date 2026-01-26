"use client";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { siteConfig } from "./data";
import LetterGlitch from "@/components/LetterGlitch";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen relative flex flex-col px-6 overflow-hidden">
      
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <LetterGlitch 
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* --- MAIN CONTENT--- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center max-w-4xl mx-auto text-center pt-20">
        
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 drop-shadow-sm text-slate-900 dark:text-white">
          {t("home_title")}
        </h1>
        
        {/* Description */}
        <p className="whitespace-pre-line text-lg md:text-xl text-[var(--text-main)] leading-relaxed max-w-3xl mx-auto mb-10 font-light drop-shadow-sm bg-white/50 dark:bg-black/5 backdrop-blur-sm p-4 rounded-xl transition-colors">
          {t("home_desc")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href={siteConfig.socials.find(s => s.name === "LinkedIn")?.href || "#"}
            target="_blank"
            className="px-8 py-3.5 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold rounded-md transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Linkedin size={20} strokeWidth={2.5} /> {t("hero_btn_linkedin")}
          </Link>
          <Link 
            href={siteConfig.socials.find(s => s.name === "GitHub")?.href || "#"}
            target="_blank"
            className="px-8 py-3.5 bg-[#24292e] hover:bg-[#1b1f23] text-white font-semibold rounded-md transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Github size={20} strokeWidth={2.5} /> {t("hero_btn_github")}
          </Link>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 mt-auto pb-6 text-center text-[var(--text-muted)] text-sm">
        © {new Date().getFullYear()} Martin Medina. {t("footer_rights")}
      </footer>

    </main>
  );
}