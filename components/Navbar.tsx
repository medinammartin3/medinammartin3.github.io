"use client";
import Link from "next/link";
import Image from "next/image"; 
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, ChevronDown, Check, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/language";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight hover:opacity-80 transition" onClick={() => setIsMobileMenuOpen(false)}>
          <Image 
            src="/hedgehog.svg" 
            alt="Hedgehog Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8" 
          />
          <span>Martin<span className="text-[var(--primary)]">.</span></span>
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--primary)] transition">{t("nav_home")}</Link>
            <Link href="/projects" className="hover:text-[var(--primary)] transition">{t("nav_projects")}</Link>
            <Link href="/contact" className="hover:text-[var(--primary)] transition">{t("nav_contact")}</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-main)] hover:bg-[var(--bg-card)] transition text-xs font-bold"
              >
                <Globe size={14} />
                {language.toUpperCase()}
                <ChevronDown size={12} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-[var(--bg-card)] rounded-xl shadow-xl border border-[var(--border-main)] overflow-hidden py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as "en" | "fr" | "es");
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between group transition-colors ${
                        mounted && theme === 'dark' 
                          ? 'hover:bg-slate-800' 
                          : 'hover:bg-[#f3f4f6]'
                      }`}
                    >
                      {lang.label}
                      {language === lang.code && <Check size={14} className="text-[var(--primary)]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-main)] transition"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger Menu Button (Only visible on mobile) */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-main)] bg-[var(--bg-main)]">
            <div className="flex flex-col p-4 space-y-4 text-sm font-medium text-[var(--text-muted)]">
                <Link 
                    href="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-[var(--primary)] transition"
                >
                    {t("nav_home")}
                </Link>
                <Link 
                    href="/projects" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-[var(--primary)] transition"
                >
                    {t("nav_projects")}
                </Link>
                <Link 
                    href="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-[var(--primary)] transition"
                >
                    {t("nav_contact")}
                </Link>
            </div>
        </div>
      )}
    </nav>
  );
}