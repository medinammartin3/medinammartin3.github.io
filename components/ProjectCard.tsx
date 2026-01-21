import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    // FIX: Dynamic Background and Border variables
    <div className="group flex flex-col h-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* Image Area */}
      <div className={`h-48 w-full ${project.color || 'bg-gray-100'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-900 rounded-md shadow-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--primary)] transition">
          {project.title}
        </h3>
        
        <p className="text-[var(--text-muted)] text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span key={t} className="px-2 py-1 text-[10px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-md border border-transparent dark:border-slate-700">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-[var(--border-main)]">
          <Link href={project.link} target="_blank" className="inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:opacity-80 transition group/link">
            View Project <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
          
          {project.video && (
             <Link href={project.video} target="_blank" className="inline-flex items-center text-sm font-medium text-[var(--text-muted)] hover:text-red-500 transition">
               <PlayCircle size={16} className="mr-1" /> Demo
             </Link>
          )}
        </div>
      </div>
    </div>
  );
}