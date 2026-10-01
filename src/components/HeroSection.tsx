import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { HERO_CONTENT, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Bot, Terminal, MapPin, GraduationCap, Sparkles, Send, CheckCircle2, Camera, Upload } from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroSectionProps {
  lang: Language;
  onExploreProjects: () => void;
  onOpenBotDemo: () => void;
  isOwner?: boolean;
  onOpenOwnerLogin?: () => void;
  onLogoutOwner?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExploreProjects,
  onOpenBotDemo,
  isOwner = false,
  onOpenOwnerLogin,
  onLogoutOwner
}) => {
  const [activeTab, setActiveTab] = useState<'bot' | 'food' | 'code'>('bot');
  const [interactiveInput, setInteractiveInput] = useState('');
  const [simulatedMessages, setSimulatedMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'user', text: 'សួស្តី AIPRO! តើអ្វីជាចំណុចពិសេសនៃ Bot ប្រព័ន្ធនេះ?', time: '21:30' },
    { 
      sender: 'bot', 
      text: 'សួស្តី! AIPRO ត្រូវបានអភិវឌ្ឍដោយ សុផា បញ្ញា តាមរយៈ Python & Groq API ឆ្លើយតបសំណួរលឿន និងភ្ជាប់ Mini App Nha Food!', 
      time: '21:30' 
    }
  ]);

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!interactiveInput.trim()) return;

    const userMsg = interactiveInput.trim();
    const newMsg = { sender: 'user' as const, text: userMsg, time: '21:32' };
    setSimulatedMessages((prev) => [...prev, newMsg]);
    setInteractiveInput('');

    setTimeout(() => {
      let reply = 'ខ្ញុំបានទទួលសំណួរហើយ! គម្រោងនេះគាំទ្រការវិភាគភាសាខ្មែរ និងស្វ័យប្រវត្តិកម្ម Telegram Bot កម្រិតខ្ពស់។';
      if (userMsg.toLowerCase().includes('food') || userMsg.includes('ម្ហូប') || userMsg.includes('nha')) {
        reply = 'Nha Food Mini App អនុញ្ញាតឱ្យអ្នកបញ្ជាទិញម្ហូបដោយផ្ទាល់លើ Telegram WebApp ដោយមិនចាំបាច់ចេញពីកម្មវិធីឡើយ!';
      } else if (userMsg.toLowerCase().includes('thesis') || userMsg.includes('សារណា')) {
        reply = 'គម្រោង Telegram Bot នេះត្រូវបានជ្រើសរើសជាគម្រោងសារណាបញ្ចប់ការសិក្សា នៅសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ!';
      }
      setSimulatedMessages((prev) => [
        ...prev,
        { sender: 'bot', text: reply, time: '21:32' }
      ]);
    }, 450);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 tech-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary Calls to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Student & Affiliation Kicker (Unboxed metadata with separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-cyan-400 font-medium">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                {lang === 'km' ? PERSONAL_INFO.universityKm : PERSONAL_INFO.universityEn}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">
                {lang === 'km' ? 'និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ' : 'Computer Science Department'}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {lang === 'km' ? 'កម្ពុជា' : 'Cambodia'}
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.25] text-balance">
              {lang === 'km' ? HERO_CONTENT.headlineKm : HERO_CONTENT.headlineEn}
            </h1>

            {/* Student Intro Block with Official Photo */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-[#0d1322]/80 border border-white/10 shadow-lg">
              <ProfileAvatar
                size="md"
                lang={lang}
                isOwner={isOwner}
                onOpenOwnerLogin={onOpenOwnerLogin}
                onLogoutOwner={onLogoutOwner}
                className="shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    {lang === 'km' ? PERSONAL_INFO.nameKm : PERSONAL_INFO.nameEn}
                  </span>
                  <span className="text-xs text-cyan-400 font-mono">
                    (Sopha Panha)
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono hidden sm:inline">
                    ● Student ID: 10076
                  </span>
                  {isOwner && (
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded-md">
                      👑 Owner Mode
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'km' ? (
                    <>
                      សួស្តី! ខ្ញុំជានិស្សិតជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ នៃ{PERSONAL_INFO.universityKm}។ ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលចូលចិត្តស្រាវជ្រាវ និងកសាងប្រព័ន្ធដោយឯករាជ្យ ដើម្បីប្រែក្លាយគំនិតឱ្យទៅជាការពិត។
                    </>
                  ) : (
                    HERO_CONTENT.subHeadlineEn
                  )}
                </p>
                <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-3 font-mono pt-1">
                  <span>Prey Veng & Phnom Penh</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-500">CS Department · NCHSUK</span>

                  {/* Immediate 1-Click Real Photo Selector for Sopha Panha */}
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 transition-all font-sans text-xs font-semibold shadow-sm">
                    <Camera className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{lang === 'km' ? '📷 ដាក់រូបថតពិត (ជ្រើសរើស 10076_SOPHAPANHA.jpg)' : '📷 Set Real Photo (10076_SOPHAPANHA.jpg)'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const res = event.target?.result as string;
                            if (res) {
                              try {
                                localStorage.setItem('panha_real_photo', res);
                                localStorage.setItem('sopha_owner_auth', 'verified_owner_panha_10076');
                                window.location.reload();
                              } catch {}
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  
                  {isOwner && (
                    <button
                      type="button"
                      onClick={onLogoutOwner}
                      className="text-amber-400 hover:underline font-mono text-[10px]"
                    >
                      [Lock]
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-lg shadow-cyan-950/30 whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>{lang === 'km' ? 'មើលគម្រោងស្នាដៃ' : 'Explore Projects'}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBotDemo}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap inline-flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'km' ? 'សាកល្បង Telegram Bot' : 'Launch Bot Simulator'}</span>
              </button>
            </div>

            {/* Authentic Metrics Bar (Adjacent to Claims) */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HERO_CONTENT.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {lang === 'km' ? stat.labelKm : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Showcase Panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-[#0d131f]/90 p-1 shadow-2xl backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 bg-[#080c14]/50 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">panha_ecosystem.py</span>
                </div>
                
                {/* Mode Tabs */}
                <div className="flex items-center bg-slate-900/80 p-0.5 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab('bot')}
                    className={`px-2.5 py-1 rounded font-mono transition-colors ${
                      activeTab === 'bot' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    AIPRO
                  </button>
                  <button
                    onClick={() => setActiveTab('food')}
                    className={`px-2.5 py-1 rounded font-mono transition-colors ${
                      activeTab === 'food' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    NhaFood
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded font-mono transition-colors ${
                      activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    C# OOP
                  </button>
                </div>
              </div>

              {/* Tab 1: Live Interactive Telegram AIPRO Bot Preview */}
              {activeTab === 'bot' && (
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      AIPRO Telegram Bot (Groq API)
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">● Webhook Active</span>
                  </div>

                  {/* Message Stream */}
                  <div className="space-y-3 min-h-[200px] max-h-[220px] overflow-y-auto pr-1 text-xs">
                    {simulatedMessages.map((m, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-3 py-2 ${
                            m.sender === 'user'
                              ? 'bg-cyan-600/30 text-cyan-100 border border-cyan-500/30 rounded-br-none'
                              : 'bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-bl-none'
                          }`}
                        >
                          <p className="leading-relaxed">{m.text}</p>
                          <span className="text-[10px] text-slate-400 block text-right mt-1 font-mono">
                            {m.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Prompt Sender */}
                  <form onSubmit={handleSendPrompt} className="flex gap-2 pt-2">
                    <input
                      type="text"
                      value={interactiveInput}
                      onChange={(e) => setInteractiveInput(e.target.value)}
                      placeholder={lang === 'km' ? 'សាកល្បងសួរសំណួរទៅកាន់ AIPRO...' : 'Type a test prompt to AIPRO...'}
                      className="flex-1 rounded-lg border border-slate-700/80 bg-slate-900/90 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                      title="Send prompt"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* Tab 2: Nha Food Mini App WebApp Preview */}
              {activeTab === 'food' && (
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/5">
                    <span className="font-semibold text-amber-400">Nha Food Mini App (Telegram WebApp)</span>
                    <span className="text-[11px] font-mono text-slate-500">v1.2 · Prey Veng Hub</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/40">
                      <div className="text-amber-300 font-medium">បាយឆាសាច់គោពិសេស</div>
                      <div className="text-[11px] text-slate-400">Beef Fried Rice</div>
                      <div className="text-xs font-mono font-semibold text-cyan-400 mt-1">$2.50</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/40">
                      <div className="text-amber-300 font-medium">កាហ្វេទឹកដោះគោទឹកកក</div>
                      <div className="text-[11px] text-slate-400">Iced Milk Coffee</div>
                      <div className="text-xs font-mono font-semibold text-cyan-400 mt-1">$1.25</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 flex items-center justify-between">
                    <span>Telegram WebApp Sync:</span>
                    <span className="font-mono text-emerald-400 font-semibold">tg.sendData() Ready</span>
                  </div>

                  <button
                    onClick={onOpenBotDemo}
                    className="w-full py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center"
                  >
                    {lang === 'km' ? 'បើកទិដ្ឋភាព Mini App ពេញលេញ' : 'Open Full Mini App Simulator'}
                  </button>
                </div>
              )}

              {/* Tab 3: C# OOP Architecture Code Preview */}
              {activeTab === 'code' && (
                <div className="p-4 font-mono text-xs text-slate-300 space-y-2 bg-[#080c14]/90 rounded-b-xl overflow-x-auto">
                  <div className="text-slate-500">// National Chea Sim University of Kamchaymear</div>
                  <div className="text-slate-500">// C# OOP Desktop Solution by Sopha Panha</div>
                  <div>
                    <span className="text-purple-400">public class</span> <span className="text-yellow-300">KamchaymearGIS</span> : <span className="text-cyan-300">GeoController</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">private readonly</span> <span className="text-cyan-300">LeafletMapService</span> _mapService;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">public void</span> <span className="text-blue-400">InitializeCampusPins</span>() {'{'}
                  </div>
                  <div className="pl-8 text-emerald-300">
                    _mapService.AddMarker(<span className="text-amber-300">11.4429</span>, <span className="text-amber-300">105.4789</span>, <span className="text-green-300">"NCHSUK Campus"</span>);
                  </div>
                  <div className="pl-4">{'}'}</div>
                  <div className="pt-2 text-[11px] text-cyan-400 flex items-center gap-1.5 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Visual Studio C# Desktop + Leaflet.js Bridge</span>
                  </div>
                </div>
              )}

              {/* Footer status line */}
              <div className="px-4 py-2.5 bg-[#080c14] border-t border-white/5 rounded-b-xl flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono">Solo Architect: Sopha Panha</span>
                <span className="font-mono text-cyan-400">Python · C# · Groq · Vercel</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
