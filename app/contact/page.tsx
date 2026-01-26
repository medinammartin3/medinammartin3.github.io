"use client";
import { Mail, Linkedin, Github, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { siteConfig } from "../data";

export default function ContactPage() {
  const { t } = useLanguage();
  const { theme } = useTheme(); // Get current theme
  const [mounted, setMounted] = useState(false);

  // --- STATE MANAGEMENT ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Ensure theme matches client-side
  useEffect(() => setMounted(true), []);
  
  // Dark mode is active
  const isDark = mounted && theme === 'dark';

  // --- FORM SUBMISSION HANDLER ---
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkooqezb"; 

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setErrorMessage("Unable to send form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen pt-32 px-6 max-w-6xl mx-auto pb-20 transition-colors duration-300">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Left Side: Info */}
        <div className="md:col-span-5 pt-4">
          <h1 className={`text-5xl font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {t("contact_title")}
          </h1>
          <p className={`text-lg leading-relaxed mb-7 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t("contact_desc")}
          </p>

          <div className="space-y-6">
            <Link 
              href={siteConfig.socials.find(s => s.name === "LinkedIn")?.href || "#"} 
              target="_blank" 
              className={`flex items-center gap-4 transition ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-lg">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={`md:col-span-7 rounded-2xl p-8 md:p-10 shadow-lg border transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-gray-20 border-gray-100'
        }`}>
           {isSuccess ? (
             <div className="flex flex-col items-center justify-center h-full text-center py-10">
               <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
               <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
               <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Thanks for reaching out. I'll get back to you soon.</p>
               <button onClick={() => setIsSuccess(false)} className="mt-6 text-blue-600 hover:underline">Send another message</button>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
               
               <div className="space-y-2">
                 <label className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t("contact_name")}</label>
                 <input 
                   required
                   type="text" 
                   name="name" 
                   className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition border ${
                     isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'
                   }`} 
                   placeholder="Your Name"
                 />
               </div>
               
               <div className="space-y-2">
                 <label className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t("contact_email")}</label>
                 <input 
                   required
                   type="email" 
                   name="email" 
                   className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition border ${
                     isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'
                   }`} 
                   placeholder="Your Email"
                 />
               </div>
   
               <div className="space-y-2">
                 <label className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t("contact_subject")}</label>
                 <input 
                   required
                   type="text" 
                   name="subject" 
                   className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition border ${
                     isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'
                   }`} 
                   placeholder="Subject"
                 />
               </div>
   
               <div className="space-y-2">
                 <label className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t("contact_message")}</label>
                 <textarea 
                   required
                   name="message" 
                   rows={5} 
                   className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none border ${
                     isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-200 text-slate-900 placeholder-gray-400'
                   }`}
                   placeholder="How can I help you?"
                 ></textarea>
               </div>

               {errorMessage && (
                 <div className={`flex items-center gap-2 text-sm p-3 rounded-lg ${
                   isDark ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-500'
                 }`}>
                   <AlertCircle size={16} />
                   <span>{errorMessage}</span>
                 </div>
               )}
   
               <div className="pt-2">
                 <button 
                   type="submit" 
                   disabled={isSubmitting}
                   className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : t("contact_btn")}
                 </button>
               </div>
             </form>
           )}
        </div>
      </div>
    </main>
  );
}