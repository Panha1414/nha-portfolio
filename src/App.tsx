/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Language } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TelegramBotSimulator } from './components/simulators/TelegramBotSimulator';
import { InteractiveMapModal } from './components/simulators/InteractiveMapModal';
import { EcommerceModal } from './components/simulators/EcommerceModal';
import { MoonlightDesignModal } from './components/simulators/MoonlightDesignModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<Language>('km');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProject = (projectId: string) => {
    setActiveModal(projectId);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setActiveModal('resume')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <HeroSection
          lang={lang}
          onExploreProjects={scrollToProjects}
          onOpenBotDemo={() => setActiveModal('telegram-bots')}
        />

        {/* Section 2: Selected Projects */}
        <ProjectsSection
          lang={lang}
          onSelectProject={handleSelectProject}
        />

        {/* Section 3: Skills & Expertise */}
        <SkillsSection lang={lang} />

        {/* Section 4: Why Work With Me */}
        <WhyChooseMeSection lang={lang} />

        {/* Section 5: Get In Touch */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Modals & Interactive Simulators */}
      {activeModal === 'telegram-bots' && (
        <TelegramBotSimulator
          lang={lang}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'ecommerce-platform' && (
        <EcommerceModal
          lang={lang}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'software-mapping' && (
        <InteractiveMapModal
          lang={lang}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'graphic-uiux' && (
        <MoonlightDesignModal
          lang={lang}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'resume' && (
        <ResumeModal
          lang={lang}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
