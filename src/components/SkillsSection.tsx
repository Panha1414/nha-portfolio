import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { SKILLS_DATA, SOFT_SKILLS } from '../data/portfolioData';
import { 
  Code2, Terminal, FileCode, Layout, Cpu, Bot, 
  MapPin, Cloud, Layers, Palette, Video, SearchCheck, 
  Lightbulb, Sparkles 
} from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('programming');

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-rose-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Video': return <Video className="w-5 h-5 text-amber-400" />;
      case 'SearchCheck': return <SearchCheck className="w-5 h-5 text-cyan-400" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const currentCategoryData = SKILLS_DATA.find((c) => c.id === activeCategory) || SKILLS_DATA[0];

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            {lang === 'km' ? 'ជំនាញ & ជំនាញឯកទេស' : 'Competencies & Technical Arsenal'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {lang === 'km' ? 'ជំនាញ (Skills & Expertise)' : 'Skills & Technical Mastery'}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            {lang === 'km'
              ? 'ការរួមបញ្ចូលគ្នារវាងកូដកម្មវិធីប្រកបដោយរចនាសម្ព័ន្ធ (Hard Skills) និងការគិតដោះស្រាយបញ្ហាជាក់ស្តែងដោយឯករាជ្យ (Soft Skills)។'
              : 'Synthesizing disciplined engineering principles, cloud API mastery, and creative design thinking.'}
          </p>
        </div>

        {/* 1. Hard Skills with Category Switcher */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                {lang === 'km' ? cat.nameKm : cat.nameEn}
              </button>
            ))}
          </div>

          {/* Hard Skills Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentCategoryData.items.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl border border-white/10 bg-[#0d1322]/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {renderIcon(skill.iconName)}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  {/* Unboxed Metadata Level */}
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">
                    {skill.level}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {lang === 'km' ? skill.descKm : skill.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Soft Skills: 3 Structured Cards */}
        <div className="pt-8 border-t border-white/5 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'km' ? '🧠 ជំនាញទន់ (Soft Skills)' : '🧠 Critical Soft Skills & Mindset'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'km'
                ? 'គុណតម្លៃស្នូលក្នុងការធ្វើការងារស្រាវជ្រាវ និងបង្កើតគម្រោងតែម្នាក់ឯងតាំងពីដើមដល់ចប់'
                : 'Fundamental attributes driving independent software development and creative perseverance'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOFT_SKILLS.map((soft, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/10 bg-[#0B101D] hover:border-cyan-500/30 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center">
                  {renderIcon(soft.iconName)}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {lang === 'km' ? soft.titleKm : soft.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'km' ? soft.descKm : soft.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
