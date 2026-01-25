'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern shopping experience with real-time inventory management and seamless checkout",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social platforms with real-time metrics and insights",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features",
    tech: ["React", "Firebase", "Tailwind CSS", "Context API"],
    image: "https://images.unsplash.com/photo-1555421689-491c937c1295?w=400&h=400&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Content management system with beautiful markdown support and analytics",
    tech: ["Next.js", "Prisma", "PostgreSQL", "MDX"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=400&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather tracking with beautiful visualizations and forecasts",
    tech: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1ad0e1f?w=400&h=400&fit=crop",
    link: "#"
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "Auto-generate professional portfolios from your GitHub profile",
    tech: ["Next.js", "GitHub API", "Vercel", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1522869635100-ce0846b56d35?w=400&h=400&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-black bg-linear-to-r text-transparent bg-clip-text mb-4" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)'}}>
            Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold max-w-2xl" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            A collection of my recent work showcasing web development expertise and design sensibility.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pokemon-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundPosition: 'center',
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="pokemon-button w-full">
                    VIEW PROJECT
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="pokemon-badge text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="pokemon-card max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="float-right text-2xl font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors mb-4"
              >
                ✕
              </button>
              
              <div className="w-full h-64 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6 overflow-hidden"
                style={{
                  backgroundImage: `url('${selectedProject.image}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
              
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-bold text-sm uppercase text-slate-600 dark:text-slate-400 mb-4 tracking-wide">
                  TECHNOLOGIES
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="pokemon-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="pokemon-button flex-1">
                  VIEW LIVE
                </button>
                <button className="pokemon-button flex-1">
                  SOURCE CODE
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
