import React, { useState } from 'react';
import { Language, ProjectItem } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Bot, ShoppingCart, MapPin, Palette, ArrowUpRight, CheckCircle } from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'telegram' | 'ecommerce' | 'software' | 'design'>('all');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const getCategoryIcon = (category: ProjectItem['category']) => {
    switch (category) {
      case 'telegram':
        return <Bot className="w-4 h-4 text-cyan-400" />;
      case 'ecommerce':
        return <ShoppingCart className="w-4 h-4 text-indigo-400" />;
      case 'software':
        return <MapPin className="w-4 h-4 text-emerald-400" />;
      case 'design':
        return <Palette className="w-4 h-4 text-pink-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              {lang === 'km' ? 'ស្នាដៃស្រាវជ្រាវ & អភិវឌ្ឍន៍' : 'Selected Works & Case Studies'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {lang === 'km' ? 'គម្រោងលេចធ្លោ (Selected Projects)' : 'Featured Engineering Projects'}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              {lang === 'km'
                ? 'គម្រោងនីមួយៗត្រូវបានស្រាវជ្រាវ និងសាងសង់ឡើងដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែង ជាមួយស្ថាបត្យកម្មកូដរៀបរយ និងបទពិសោធន៍អ្នកប្រើប្រាស់រលូន។'
                : 'Every project is built from zero to solve tangible challenges with robust software design, clean APIs, and elegant ergonomics.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Permitted segmented controls) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 rounded-xl border border-white/10 overflow-x-auto self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'km' ? 'ទាំងអស់ (All)' : 'All Works'}
            </button>
            <button
              onClick={() => setFilter('telegram')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'telegram'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Telegram Bots
            </button>
            <button
              onClick={() => setFilter('ecommerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'ecommerce'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'software'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              C# & Mapping
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'design'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Graphic & UI/UX
            </button>
          </div>
        </div>

        {/* Projects Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-white/10 bg-[#0d1322]/80 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Top Unboxed Metadata & Category */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="font-semibold text-slate-300">
                      {lang === 'km' ? project.roleKm : project.roleEn}
                    </span>
                  </div>
                  
                  {project.isThesis && (
                    <span className="text-cyan-400 font-mono text-[11px] font-semibold">
                      ★ {lang === 'km' ? 'គម្រោងសារណា (Thesis)' : 'Official Thesis Project'}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {idx + 1}. {lang === 'km' ? project.titleKm : project.titleEn}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-mono mt-1">
                    {lang === 'km' ? project.taglineKm : project.taglineEn}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'km' ? project.descKm : project.descEn}
                </p>

                {/* Key Features Bullet Points */}
                {project.featuresKm && (
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {(lang === 'km' ? project.featuresKm : project.featuresEn)?.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Controls: Unboxed Tech Stacks + Interactive Simulator Trigger */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                {/* Tech Stacks: Clean unboxed text with typographic separators */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 font-mono">
                  {project.techs.map((tech, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span className="text-slate-300">{tech}</span>
                      {tIdx < project.techs.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* High-Intent Interactive Demo Trigger */}
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-slate-700/60 hover:border-cyan-400"
                >
                  <span>
                    {project.category === 'telegram'
                      ? (lang === 'km' ? 'សាកល្បង Telegram Bot & Mini App Demo' : 'Launch Interactive Telegram Simulator')
                      : project.category === 'ecommerce'
                      ? (lang === 'km' ? 'សាកល្បងទិញលក់ទំនិញ Demo' : 'Launch E-Commerce Platform Demo')
                      : project.category === 'software'
                      ? (lang === 'km' ? 'បើកមើលផែនទីអន្តរកម្ម Leaflet.js' : 'Inspect Interactive Leaflet Map & OOP')
                      : (lang === 'km' ? 'ពិនិត្យមើល Artwork "MOONLIGHT" & UI/UX' : 'Inspect "MOONLIGHT" Artwork & Design Specs')}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
