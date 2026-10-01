import React, { useState } from 'react';
import { Language } from '../../types/portfolio';
import { X, Palette, Sparkles, Sliders } from 'lucide-react';

interface MoonlightDesignModalProps {
  lang: Language;
  onClose: () => void;
}

export const MoonlightDesignModal: React.FC<MoonlightDesignModalProps> = ({ lang, onClose }) => {
  const [activeTab, setActiveTab] = useState<'poster' | 'palette' | 'uiux'>('poster');

  const colorSwatches = [
    { name: 'Deep Cosmic Midnight', hex: '#0B0F19', usage: 'Dominant canvas & negative space (60%)' },
    { name: 'Lunar Cyan Glow', hex: '#38BDF8', usage: 'High-contrast focal accents & action links' },
    { name: 'Ethereal Violet Indigo', hex: '#818CF8', usage: 'Secondary atmospheric ambient reflections' },
    { name: 'Starlight Silver', hex: '#F1F5F9', usage: 'Clean typographic legibility & primary headers' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0B101D] shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#080c14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                {lang === 'km' ? 'ការរចនាក្រាហ្វិក & UI/UX (Artwork បទ "MOONLIGHT")' : 'Graphic & UI/UX Design ("MOONLIGHT" Artwork)'}
              </h2>
              <p className="text-xs text-slate-400">
                Creative Art Direction · Music Poster Artwork · Ergonomic UI/UX Systems
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 p-3 bg-slate-900/60 border-b border-white/5">
          <button
            onClick={() => setActiveTab('poster')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'poster'
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'ផ្ទាំង Artwork "MOONLIGHT"' : 'Artwork Poster Showcase'}</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'palette'
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'ប្រព័ន្ធពណ៌ (Color Palette)' : 'Color System'}</span>
          </button>

          <button
            onClick={() => setActiveTab('uiux')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'uiux'
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'ស្តង់ដារ UI/UX' : 'UI/UX Philosophy'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
          
          {/* 1. Poster Showcase */}
          {activeTab === 'poster' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Scalable Poster Canvas */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-b from-[#0a0f1d] via-[#101935] to-[#050811] p-6 flex flex-col justify-between group">
                  
                  {/* Glowing Lunar Aura */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-cyan-400/20 blur-xl pointer-events-none group-hover:bg-cyan-400/30 transition-all duration-700" />
                  
                  {/* Moon Graphic Element */}
                  <div className="relative mx-auto mt-4 w-28 h-28 rounded-full bg-gradient-to-br from-slate-100 via-cyan-100 to-indigo-300 shadow-[0_0_50px_rgba(56,189,248,0.5)] border border-white/40 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-indigo-200/30 bg-radial from-transparent to-indigo-950/20" />
                  </div>

                  {/* Atmospheric Star Dust */}
                  <div className="absolute inset-0 tech-dots-pattern opacity-40 pointer-events-none" />

                  {/* Poster Typography */}
                  <div className="relative z-10 text-center space-y-1">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300 font-mono">
                      Original Soundtrack Artwork
                    </div>
                    <h3 className="text-2xl font-black tracking-widest text-white uppercase drop-shadow-md">
                      MOONLIGHT
                    </h3>
                    <p className="text-[11px] text-slate-300 italic font-serif">
                      A visual symphony of midnight calm & clarity
                    </p>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                      <span>Art: Sopha Panha</span>
                      <span>Release: 2026</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Design Context & Breakdown */}
              <div className="md:col-span-7 space-y-4 text-xs">
                <div className="p-4 rounded-xl border border-pink-500/20 bg-pink-500/5 text-pink-200">
                  <h4 className="font-bold text-sm text-pink-300">
                    {lang === 'km' ? 'គំនិតច្នៃប្រឌិតនៃ Artwork បទ "MOONLIGHT"' : 'Creative Concept: "MOONLIGHT" Artwork'}
                  </h4>
                  <p className="mt-1 text-slate-300 leading-relaxed">
                    {lang === 'km'
                      ? 'ការរចនានេះកើតចេញពីការរួមបញ្ចូលគ្នារវាងអារម្មណ៍ស្ងប់ស្ងាត់នៃរាត្រី និងពន្លឺព្រះច័ន្ទពណ៌ប្រាក់។ ការរៀបចំចន្លោះទំនេរ (Negative Space) ត្រូវបានគិតគូរយ៉ាងហ្មត់ចត់ដើម្បីឱ្យចំណងជើង MOONLIGHT លេចធ្លោ និងបង្កប់នូវអារម្មណ៍សិល្បៈបែបទំនើប។'
                      : 'Conceptualized to capture the serene luminescence of nocturnal moonlight with expansive negative space, cinematic framing, and deliberate typographic rhythm.'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-slate-200">
                    {lang === 'km' ? 'ចំណុចគន្លឹះនៃការរចនា (Design Specifications):' : 'Key Visual Architecture Principles:'}
                  </div>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li><strong className="text-white">Rule of Thirds:</strong> Placing the lunar core at the upper focal intersection for natural eye guidance.</li>
                    <li><strong className="text-white">Atmospheric Depth:</strong> Layered Gaussian gradient diffusion mimicking genuine lunar refraction.</li>
                    <li><strong className="text-white">Editorial Typography:</strong> High-kerning geometric sans paired with classical italicized captions.</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* 2. Color System */}
          {activeTab === 'palette' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                {lang === 'km' 
                  ? 'ប្រព័ន្ធពណ៌ 60-30-10 ត្រូវបានអនុវត្តយ៉ាងម៉ឺងម៉ាត់៖ ៦០% ផ្ទៃងងឹតស្រាល, ៣០% ផ្ទៃកាត និងព្រំដែន, ១០% ពណ៌ទាក់ទាញ (Cyan/Violet) សម្រាប់តែប៊ូតុង និងសកម្មភាពសំខាន់ៗ។'
                  : 'Strict adherence to the 60-30-10 distribution: 60% deep neutral field, 30% structural surfaces, and 10% intentional action accents.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {colorSwatches.map((color, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-white/5 bg-slate-900/60 flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg border border-white/20 shrink-0 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white">{color.name}</div>
                      <div className="font-mono text-[11px] text-cyan-400">{color.hex}</div>
                      <div className="text-[11px] text-slate-400">{color.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. UI/UX Principles */}
          {activeTab === 'uiux' && (
            <div className="space-y-4 text-xs text-slate-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-2">
                  <div className="font-semibold text-cyan-300 text-sm">
                    {lang === 'km' ? 'គ្មាន Dead Clicks (Functional Controls)' : 'Zero Dead Clicks'}
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {lang === 'km'
                      ? 'រាល់ប៊ូតុង ផ្ទាំង និងតំណភ្ជាប់ទាំងអស់ សុទ្ធតែមាន Event Handlers ពិតប្រាកដ និងដំណើរការឆ្លើយតបយ៉ាងរហ័ស មិនមែនគ្រាន់តែជារូបភាពតាំងលម្អនោះទេ។'
                      : 'Every interactive control triggers concrete feedback, live modal simulators, or authentic actions with zero placeholder dead ends.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-2">
                  <div className="font-semibold text-cyan-300 text-sm">
                    {lang === 'km' ? 'Zero-Pill Metadata Discipline' : 'Zero-Pill Metadata Discipline'}
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {lang === 'km'
                      ? 'ព័ត៌មានលម្អិតដូចជា កាលបរិច្ឆេទ ប្រភេទ និងស្ថានភាព ត្រូវបានបង្ហាញជាអក្សរស្អាតបាតជាមួយសញ្ញាខណ្ឌ (·) ដោយមិនប្រើប្រអប់ Pill Badge រញ៉េរញ៉ៃឡើយ។'
                      : 'Metadata is rendered as clean unboxed text separated with subtle typographic separators rather than garish capsule badges.'}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="border-t border-white/5 bg-[#080c14] px-5 py-3 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Art Direction: Sopha Panha</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            {lang === 'km' ? 'បិទផ្ទាំង' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
