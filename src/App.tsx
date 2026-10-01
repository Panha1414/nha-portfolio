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
import { OwnerLoginModal } from './components/OwnerLoginModal';
import { checkIsOwner, logoutOwner } from './utils/ownerAuth';

export default function App() {
  const [lang, setLang] = useState<Language>('km');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [showOwnerLogin, setShowOwnerLogin] = useState<boolean>(false);

  // Initialize owner status from local storage
  useEffect(() => {
    setIsOwner(checkIsOwner());
  }, []);

  // Keyboard shortcut to open Owner Mode (Ctrl+Shift+O or Cmd+Shift+O)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setShowOwnerLogin(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'O' || e.key === 'o')) {
        e.preventDefault();
        setShowOwnerLogin(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProject = (projectId: string) => {
    setActiveModal(projectId);
  };

  const handleLogoutOwner = () => {
    logoutOwner();
    setIsOwner(false);
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
          isOwner={isOwner}
          onOpenOwnerLogin={() => setShowOwnerLogin(true)}
          onLogoutOwner={handleLogoutOwner}
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
      <Footer
        lang={lang}
        isOwner={isOwner}
        onOpenOwnerLogin={() => setShowOwnerLogin(true)}
        onLogoutOwner={handleLogoutOwner}
      />

      {/* Owner Security Login Modal */}
      {showOwnerLogin && (
        <OwnerLoginModal
          lang={lang}
          onClose={() => setShowOwnerLogin(false)}
          onSuccess={() => setIsOwner(true)}
        />
      )}

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
          isOwner={isOwner}
        />
      )}
    </div>
  );
}
