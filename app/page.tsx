"use client";
import Link from "next/link";
import { Github, Linkedin, Play } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { siteConfig } from "./data";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* TRANSLATED TITLE */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
          {t("home_title")}
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          {t("home_desc")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
          <Link 
            href={siteConfig.socials.find(s => s.name === "LinkedIn")?.href || "#"}
            target="_blank"
            className="px-8 py-3.5 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold rounded-md transition shadow-sm flex items-center justify-center gap-2"
          >
            <Linkedin size={20} strokeWidth={2.5} /> {t("hero_btn_linkedin")}
          </Link>
          <Link 
            href={siteConfig.socials.find(s => s.name === "GitHub")?.href || "#"}
            target="_blank"
            className="px-8 py-3.5 bg-[#24292e] hover:bg-[#1b1f23] text-white font-semibold rounded-md transition shadow-sm flex items-center justify-center gap-2"
          >
            <Github size={20} strokeWidth={2.5} /> {t("hero_btn_github")}
          </Link>
        </div>

        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-800">
          <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-500/20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <Play size={32} className="fill-white text-white ml-1" />
             </div>
          </div>
        </div>
        
        <footer className="mt-20 text-[var(--text-muted)] text-sm">
          © {new Date().getFullYear()} Martin Medina. {t("footer_rights")}
        </footer>
      </div>
    </main>
  );
}