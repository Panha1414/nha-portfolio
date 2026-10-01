import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Globe, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'km' ? 'en' : 'km');
  };

  const navLinks = [
    { href: '#projects', labelKm: 'គម្រោងលេចធ្លោ', labelEn: 'Selected Projects' },
    { href: '#skills', labelKm: 'ជំនាញបច្ចេកទេស', labelEn: 'Skills & Tech' },
    { href: '#why-me', labelKm: 'ហេតុអ្វីជ្រើសរើសខ្ញុំ?', labelEn: 'Why Work With Me' },
    { href: '#contact', labelKm: 'ទំនាក់ទំនង', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#080c14]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark with mini avatar */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-400/50 bg-[#0066d6] shrink-0">
            <img
              src="/10076_SOPHAPANHA.jpg"
              alt="Sopha Panha"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // If direct jpg fails, replace with SVG data URI
                (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230066d6'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%23e5b595'/%3E%3Cpath d='M30,30 C30,16 70,16 70,30 C64,24 36,24 30,30 Z' fill='%231a1615'/%3E%3Cpath d='M20,95 L80,95 L72,62 L28,62 Z' fill='%230f172a'/%3E%3Cpolygon points='40,62 60,62 50,78' fill='white'/%3E%3Cpolygon points='47,68 53,68 51,90 49,90' fill='%231e3a8a'/%3E%3C/svg%3E";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors leading-tight">
              {lang === 'km' ? PERSONAL_INFO.nameKm : PERSONAL_INFO.nameEn}
            </span>
            <span className="text-[10px] text-slate-500 font-mono hidden sm:inline leading-none">
              CS · NCHSUK
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              {lang === 'km' ? link.labelKm : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* CV Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors whitespace-nowrap"
            title="View Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'km' ? 'ប្រវត្តិរូប (CV)' : 'View CV'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-colors whitespace-nowrap"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono">{lang === 'km' ? 'EN' : 'ខ្មែរ'}</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <span>{lang === 'km' ? 'ផ្ញើសារ' : 'Get in Touch'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0B101D] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {lang === 'km' ? link.labelKm : link.labelEn}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 text-left px-3 py-2 text-sm font-medium text-cyan-400 hover:bg-slate-800/60 rounded-md transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'km' ? 'មើលប្រវត្តិរូបសង្ខេប (CV)' : 'View Curriculum Vitae'}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
