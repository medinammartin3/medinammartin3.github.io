import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-5xl mx-auto">
      <div className="font-bold text-xl">Alex.</div>
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}