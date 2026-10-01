import React from 'react';
import { Language } from '../types/portfolio';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Compass, Target, TrendingUp } from 'lucide-react';

interface WhyChooseMeSectionProps {
  lang: Language;
}

export const WhyChooseMeSection: React.FC<WhyChooseMeSectionProps> = ({ lang }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Compass className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-me" className="py-20 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            {lang === 'km' ? 'គុណតម្លៃ & គោលជំហរការងារ' : 'Core Values & Execution Principles'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {lang === 'km' ? 'ហេតុអ្វីគួរជ្រើសរើសខ្ញុំ? (Why Work With Me?)' : 'Why Partner With Me?'}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {lang === 'km'
              ? 'ការប្តេជ្ញាចិត្តខ្ពស់ក្នុងការស្រាវជ្រាវ ការសរសេរកូដប្រកបដោយស្តង់ដារ និងការបង្កើតលទ្ធផលជាក់ស្តែង'
              : 'End-to-end autonomous engineering, relentless problem solving, and adaptive lifelong learning.'}
          </p>
        </div>

        {/* 3 Value Cards as specified in the brief */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((card) => (
            <div
              key={card.number}
              className="relative rounded-2xl border border-white/10 bg-[#0d1322]/80 hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 group"
            >
              {/* Header: Editorial Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(card.iconName)}
                  </div>
                </div>

                {/* Unboxed Focus Marker */}
                <div className="text-xs font-mono text-cyan-400 mb-2">
                  {lang === 'km' ? card.badgeKm : card.badgeEn}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {lang === 'km' ? card.titleKm : card.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'km' ? card.descKm : card.descEn}
                </p>
              </div>

              {/* Bottom Hairline Accents */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Sopha Panha Commitment</span>
                <span className="text-cyan-400">#0{card.number.replace('0','')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
