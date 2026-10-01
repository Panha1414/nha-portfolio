import React from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, GraduationCap, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  lang: Language;
  isOwner?: boolean;
  onOpenOwnerLogin?: () => void;
  onLogoutOwner?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  isOwner = false, 
  onOpenOwnerLogin, 
  onLogoutOwner 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#060910] text-slate-400 text-xs py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              <span>{lang === 'km' ? PERSONAL_INFO.nameKm : PERSONAL_INFO.nameEn}</span>
              {isOwner && (
                <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded-md">
                  👑 Owner Active
                </span>
              )}
            </div>
            <p className="text-slate-400">
              {lang === 'km' ? PERSONAL_INFO.roleKm : PERSONAL_INFO.roleEn}
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 pt-1">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400/80" />
              <span>{lang === 'km' ? PERSONAL_INFO.universityKm : PERSONAL_INFO.universityEn}</span>
            </div>
          </div>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap items-center gap-5 text-slate-300">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              {lang === 'km' ? 'គម្រោង' : 'Projects'}
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              {lang === 'km' ? 'ជំនាញ' : 'Skills'}
            </a>
            <a href="#why-me" className="hover:text-cyan-400 transition-colors">
              {lang === 'km' ? 'ចំណុចខ្លាំង' : 'Why Me'}
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              {lang === 'km' ? 'ទំនាក់ទំនង' : 'Contact'}
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom subtle copyright & Owner access toggle */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.nameEn}. All rights reserved.</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            {isOwner ? (
              <button
                onClick={onLogoutOwner}
                className="text-amber-400 hover:underline inline-flex items-center gap-1 font-mono text-[11px]"
              >
                <Lock className="w-3 h-3" />
                <span>{lang === 'km' ? 'ចាកចេញពី Owner Mode' : 'Lock Owner Mode'}</span>
              </button>
            ) : (
              <button
                onClick={onOpenOwnerLogin}
                className="text-slate-600 hover:text-slate-400 inline-flex items-center gap-1 font-mono text-[11px] transition-colors"
              >
                <ShieldCheck className="w-3 h-3" />
                <span>{lang === 'km' ? 'ចូលជាម្ចាស់ (Owner Login)' : 'Owner Login'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
