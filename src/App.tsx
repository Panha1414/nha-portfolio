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
import { compressImageFile, savePhoto } from './utils/photoStorage';

export default function App() {
  const [lang, setLang] = useState<Language>('km');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Drag & drop or paste image anywhere to automatically set real photo
  useEffect(() => {
    const handleFile = async (file: File) => {
      if (!file.type.startsWith('image/')) return;
      try {
        const compressed = await compressImageFile(file, 800, 0.85);
        await savePhoto(compressed);
      } catch (err) {
        console.error('Error saving photo:', err);
      }
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (file) handleFile(file);
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            handleFile(file);
            break;
          }
        }
      }
    };

    window.addEventListener('drop', handleDrop);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('drop', handleDrop);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

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
