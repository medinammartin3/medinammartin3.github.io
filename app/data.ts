import { Github, Linkedin, Mail } from "lucide-react";

export const siteConfig = {
  name: "Martin.",
  fullName: "Martin Medina",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/medinammartin3", icon: Github }
  ],
};

export const getProjects = (lang: "en" | "fr" | "es") => [
  {
    id: 1,
    title: "NHL Goal Prediction System",
    category: "Machine Learning & Data Science",
    description: {
      en: "Developed an expected goals (xG) prediction pipeline using XGBoost/LightGBM and deployed a full-stack inference system on GCP.",
      fr: "Pipeline de prédiction de buts (xG) utilisant XGBoost/LightGBM et système d'inférence déployé sur GCP.",
      es: "Pipeline de predicción de goles (xG) usando XGBoost/LightGBM y sistema de inferencia desplegado en GCP.",
    }[lang],
    tech: ["Python", "Scikit-learn", "Docker", "GCP"],
    link: "https://github.com/medinammartin3/NHL-Goal-Prediction",
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Safe Autonomous Driving MPC",
    category: "Robotics & Control",
    description: {
      en: "Built a two-stage Model Predictive Control (MPC) architecture for safe autonomous driving in dynamic urban environments.",
      fr: "Architecture MPC à deux étages pour la conduite autonome sécuritaire en milieu urbain.",
      es: "Arquitectura MPC de dos etapas para conducción autónoma segura en entornos urbanos.",
    }[lang],
    tech: ["Python", "NumPy", "SciPy"],
    link: "https://github.com/medinammartin3/Safe-Autonomous-Driving-MPC",
    color: "bg-emerald-600",
  },
  {
    id: 3,
    title: "RL for Industrial Control",
    category: "Deep Learning & Reinforcement Learning",
    description: {
      en: "Implemented advanced continuous-action RL algorithms (PPO, TD3) for industrial control tasks (flash clay calciner).",
      fr: "Algorithmes RL avancés (PPO, TD3) pour des tâches de contrôle industriel.",
      es: "Algoritmos avanzados de RL (PPO, TD3) para tareas de control industrial.",
    }[lang],
    tech: ["PyTorch", "Gymnasium"],
    link: "https://github.com/DarkZant/rl-continuous",
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Sondi - Full Stack Polling App",
    category: "Web Development",
    description: {
      en: "Developed a secure full-stack polling application enabling users to create, share, and vote on surveys with real-time result visualization.",
      fr: "Application de sondage full-stack sécurisée permettant la création et le vote avec visualisation en temps réel.",
      es: "Aplicación de votación full-stack segura que permite crear encuestas y ver resultados en tiempo real.",
    }[lang],
    tech: ["Python (Django)", "JavaScript", "HTML/CSS"],
    link: "https://github.com/medinammartin3/Sondi",
    video: "https://youtu.be/J35Gkc3gHEE",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "PageRank Optimization",
    category: "Research",
    description: {
      en: "Optimized PageRank for large graphs using sparse matrices, reducing complexity from O(n²) to O(n).",
      fr: "Optimisation de PageRank pour grands graphes, réduisant la complexité de O(n²) à O(n).",
      es: "Optimización de PageRank para grandes grafos, reduciendo la complejidad de O(n²) a O(n).",
    }[lang],
    tech: ["Python", "NumPy"],
    link: "https://github.com/medinammartin3/PageRank",
    color: "bg-indigo-500",
  }
];

// Added 'icon' field (optional)
export const skills = [
  { name: "Python", category: "Languages", icon: "/icons/python.svg" },
  { name: "PyTorch", category: "Deep Learning", icon: "/icons/pytorch.svg" },
  { name: "Django", category: "Web Development", icon: "/icons/django.svg" },
  { name: "Docker", category: "Tools", icon: "/icons/docker.svg" },
  { name: "Google Cloud", category: "Tools", icon: "/icons/gcp.svg" },
  { name: "SQL", category: "Languages", icon: "/icons/sql.svg" },
  { name: "JavaScript", category: "Languages", icon: "/icons/javascript.svg" },
  { name: "Git", category: "Tools", icon: "/icons/git.svg" },
  { name: "TensorFlow", category: "Deep Learning", icon: "/icons/tensorflow.svg" },
  { name: "Java", category: "Languages", icon: "/icons/java.svg" },
];