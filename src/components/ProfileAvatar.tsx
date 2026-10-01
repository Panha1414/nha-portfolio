import React, { useState, useEffect } from 'react';
import { ZoomIn, UserCheck, ShieldCheck } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SophaPanhaPortrait } from './SophaPanhaPortrait';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
  interactive?: boolean;
  lang?: Language;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'md',
  className = '',
  showBadge = true,
  interactive = true,
  lang = 'km',
}) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [imgLoadError, setImgLoadError] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if photo exists in localStorage
    try {
      const stored = localStorage.getItem('panha_real_photo');
      if (stored) {
        setPhotoSrc(stored);
        return;
      }
    } catch {}

    // Otherwise attempt default file path
    setPhotoSrc('/10076_SOPHAPANHA.jpg');
  }, []);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    xl: 'w-48 h-48 sm:w-60 sm:h-60'
  }[size];

  return (
    <>
      <div className={`relative inline-block group ${className}`}>
        {/* Outer Glow Ring */}
        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-indigo-500/40 blur-md opacity-80 group-hover:opacity-100 transition duration-500" />

        {/* Avatar Frame - Pure display, no upload controls */}
        <div 
          onClick={() => interactive && setModalOpen(true)}
          className={`relative ${sizeClasses} rounded-2xl overflow-hidden border-2 border-cyan-400/60 bg-[#0066d6] shadow-2xl ${
            interactive ? 'cursor-pointer' : ''
          }`}
        >
          {photoSrc && !imgLoadError ? (
            <img
              src={photoSrc}
              alt="សុផា បញ្ញា (Sopha Panha)"
              referrerPolicy="no-referrer"
              onError={() => setImgLoadError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* High-fidelity official portrait */
            <SophaPanhaPortrait className="w-full h-full object-cover" />
          )}

          {/* Interactive Zoom Hover Overlay */}
          {interactive && (
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
              <ZoomIn className="w-4 h-4 text-cyan-300" />
              <span>{lang === 'km' ? 'មើលរូបភាព' : 'View Portrait'}</span>
            </div>
          )}
        </div>

        {/* Student ID & Verification Badge */}
        {showBadge && (
          <div
            className="absolute -bottom-2 -right-1.5 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full shadow-lg border bg-slate-900 text-cyan-300 border-cyan-500/50 flex items-center gap-1"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ID: 10076</span>
          </div>
        )}
      </div>

      {/* Full-Screen Portrait View Modal - Clean View-Only, No Upload Buttons */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0d1322] shadow-2xl p-6 space-y-5">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                  <span>{lang === 'km' ? 'រូបថតផ្លូវការរបស់ សុផា បញ្ញា' : 'Official Portrait: Sopha Panha'}</span>
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  ID: 10076 · National Chea Sim University of Kamchaymear
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* High-Resolution Portrait Display */}
            <div className="relative w-full aspect-[3/4] max-h-[380px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0066d6] flex items-center justify-center">
              {photoSrc && !imgLoadError ? (
                <img
                  src={photoSrc}
                  alt="សុផា បញ្ញា (Sopha Panha)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <SophaPanhaPortrait className="w-full h-full object-cover" />
              )}
            </div>

            {/* Official Credentials */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'km' ? 'ឈ្មោះពេញ:' : 'Full Name:'}</span>
                <span className="font-semibold text-white">{PERSONAL_INFO.nameKm} ({PERSONAL_INFO.nameEn})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'km' ? 'សាកលវិទ្យាល័យ:' : 'University:'}</span>
                <span className="text-cyan-400">{PERSONAL_INFO.universityKm}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'km' ? 'ជំនាញ:' : 'Discipline:'}</span>
                <span>Computer Science (វិទ្យាសាស្ត្រកុំព្យូទ័រ)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'km' ? 'ស្ថានភាព:' : 'Status:'}</span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Student (ID: 10076)</span>
                </span>
              </div>
            </div>

            {/* Modal Close Action */}
            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
              >
                {lang === 'km' ? 'បិទ' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
