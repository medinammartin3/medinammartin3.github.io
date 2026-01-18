import Navbar from "@/components/Navbar";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <section className="mt-20 px-8 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Hi, I’m Alex</h1>
        <p className="text-xl text-gray-600 mb-8">
          I’m a machine learning student passionate about building intelligent systems. 
          Currently seeking internships to apply my skills.
        </p>
        
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
            <Github size={20} /> GitHub
          </a>
        </div>
      </section>
    </main>
  );
}