import React from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Printer, GraduationCap, Award, Code, CheckCircle, Mail, MapPin } from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface ResumeModalProps {
  lang: Language;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ lang, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0B101D] shadow-2xl overflow-hidden my-auto">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#080c14]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h2 className="text-sm sm:text-base font-bold text-white">
              {lang === 'km' ? 'ប្រវត្តិរូបសង្ខេប (Curriculum Vitae)' : 'Academic Curriculum Vitae'}
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'បោះពុម្ព (Print)' : 'Print CV'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm">
          
          {/* Identity Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ProfileAvatar size="md" lang={lang} className="shrink-0" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {lang === 'km' ? PERSONAL_INFO.nameKm : PERSONAL_INFO.nameEn}
                </h1>
                <p className="text-cyan-400 font-medium mt-0.5">
                  {lang === 'km' ? PERSONAL_INFO.roleKm : PERSONAL_INFO.roleEn}
                </p>
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  National Chea Sim University of Kamchaymear · ID: 10076
                </div>
              </div>
            </div>
            
            <div className="space-y-1 text-xs text-slate-400 self-start sm:self-center">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-slate-200">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{lang === 'km' ? PERSONAL_INFO.locationKm : PERSONAL_INFO.locationEn}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'km' ? 'ការអប់រំ (Education)' : 'Education'}</span>
            </h3>
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/60 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                <span>{lang === 'km' ? PERSONAL_INFO.universityKm : PERSONAL_INFO.universityEn}</span>
                <span className="text-cyan-400 font-mono text-xs">2022 – Present</span>
              </div>
              <div className="text-slate-400 text-xs">
                {lang === 'km' ? PERSONAL_INFO.facultyKm : PERSONAL_INFO.facultyEn} · ជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ
              </div>
              <p className="text-slate-300 text-xs pt-1">
                {lang === 'km'
                  ? 'ផ្តោតលើការស្រាវជ្រាវស្ថាបត្យកម្មកូដ, ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម, គោលការណ៍ OOP និង Cloud APIs។'
                  : 'Specializing in computer systems, object-oriented software engineering, automation workflows, and cloud architectures.'}
              </p>
            </div>
          </div>

          {/* Key Achievements & Honors */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{lang === 'km' ? 'ស្នាដៃលេចធ្លោ & សារណា (Key Highlights)' : 'Key Highlights & Thesis'}</span>
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">University Thesis Project Selection:</strong>
                  <span className="text-slate-300 ml-1">
                    {lang === 'km'
                      ? 'គម្រោងប្រព័ន្ធស្វ័យប្រវត្តិកម្ម Telegram Bot (Nha Food & AIPRO) ទទួលបានការកោតសរសើរខ្ពស់ពីសាស្ត្រាចារ្យ និងត្រូវបានជ្រើសរើសជាគម្រោងសារណាបញ្ចប់ការសិក្សា។'
                      : 'Telegram Automation Bot Ecosystem selected as university graduation thesis project with high commendations.'}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Solo Research & Execution:</strong>
                  <span className="text-slate-300 ml-1">
                    {lang === 'km'
                      ? 'ស្រាវជ្រាវ និងសាងសង់ Bots, Web Interface និង C# Desktop software ដោយឯករាជ្យ ១០០%។'
                      : 'Conceived and delivered multiple full-stack and bot automation applications as a solo developer.'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stacks */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'km' ? 'បច្ចេកវិទ្យាស្នូល (Core Stacks)' : 'Technical Proficiencies'}</span>
            </h3>
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-slate-400 font-medium">Programming & OOP:</div>
                <div className="text-white font-mono mt-0.5">Python, C# (.NET/Visual Studio), JavaScript, HTML5/CSS3</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium">APIs & Cloud Platforms:</div>
                <div className="text-white font-mono mt-0.5">Groq Cloud LLM API, Telegram Bot & WebApp, Leaflet.js, Vercel</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium">Creative & Prototyping:</div>
                <div className="text-white font-mono mt-0.5">UI/UX Wireframing, Figma, Poster Graphic Design, Video Editing</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium">Core Methodologies:</div>
                <div className="text-white font-mono mt-0.5">Object-Oriented Programming, RESTful APIs, Clean Architecture</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/5 bg-[#080c14] px-6 py-3 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">National Chea Sim University of Kamchaymear</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            {lang === 'km' ? 'បិទ' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
