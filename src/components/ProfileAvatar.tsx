import React, { useState, useEffect, useRef } from 'react';
import { Camera, ZoomIn, Check, Upload, UserCheck, Lock, Loader2 } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { compressImageFile, savePhoto, loadPhoto } from '../utils/photoStorage';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
  interactive?: boolean;
  lang?: Language;
  isOwner?: boolean;
  onOpenOwnerLogin?: () => void;
  onLogoutOwner?: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'md',
  className = '',
  showBadge = true,
  interactive = true,
  lang = 'km',
  isOwner = false,
  onOpenOwnerLogin,
  onLogoutOwner
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>('/10076_SOPHAPANHA.jpg');
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photo on mount
  useEffect(() => {
    let isMounted = true;
    loadPhoto().then((saved) => {
      if (isMounted && saved) {
        setPhotoSrc(saved);
        setHasCustomPhoto(true);
        setImageError(false);
      }
    });

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoSrc(customEvent.detail);
        setHasCustomPhoto(true);
        setImageError(false);
      }
    };

    window.addEventListener('sopha-photo-updated', handleUpdate);
    return () => {
      isMounted = false;
      window.removeEventListener('sopha-photo-updated', handleUpdate);
    };
  }, []);

  const handleProcessFile = async (file: File) => {
    try {
      setIsProcessing(true);
      const compressed = await compressImageFile(file, 800, 0.85);
      await savePhoto(compressed);
      setPhotoSrc(compressed);
      setHasCustomPhoto(true);
      setImageError(false);
    } catch (err) {
      console.error('Error handling photo file:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleAvatarFrameClick = () => {
    if (!interactive) return;
    // If no custom photo yet or user is owner, give option to upload/view
    setModalOpen(true);
  };

  const handleBadgeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOwner && onOpenOwnerLogin) {
      onOpenOwnerLogin();
    }
  };

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

        {/* Avatar Frame */}
        <div 
          onClick={handleAvatarFrameClick}
          className={`relative ${sizeClasses} rounded-2xl overflow-hidden border-2 border-cyan-400/60 bg-[#0066d6] shadow-2xl ${
            interactive ? 'cursor-pointer' : ''
          }`}
        >
          {isProcessing ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-cyan-300 gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-[10px] font-mono">Compressing...</span>
            </div>
          ) : !imageError ? (
            <img
              src={photoSrc}
              alt="សុផា បញ្ញា (Sopha Panha)"
              referrerPolicy="no-referrer"
              onError={() => {
                if (!hasCustomPhoto) {
                  setImageError(true);
                }
              }}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Prompt-Matching Vector Portrait fallback when raw file is loading */
            <div className="w-full h-full relative bg-[#0272DE] flex flex-col items-center justify-end overflow-hidden p-2 text-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
              <div className="relative z-20 space-y-1 mb-1">
                <div className="w-7 h-7 mx-auto rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-white font-medium block leading-tight">
                  សុផា បញ្ញា
                </span>
                <span className="text-[9px] text-cyan-300 font-mono block">
                  ID: 10076
                </span>
              </div>
            </div>
          )}

          {/* Interactive Zoom Hover Overlay */}
          {interactive && (
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
              <ZoomIn className="w-4 h-4 text-cyan-300" />
              <span>{lang === 'km' ? 'មើល / ដាក់រូប' : 'View / Set Photo'}</span>
            </div>
          )}
        </div>

        {/* Student ID & Verification Badge */}
        {showBadge && (
          <button
            type="button"
            onClick={handleBadgeClick}
            className={`absolute -bottom-2 -right-1.5 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full shadow-lg border flex items-center gap-1 transition-all ${
              isOwner
                ? 'bg-amber-500 text-slate-950 border-amber-300 ring-2 ring-amber-400/30'
                : 'bg-slate-900 text-cyan-300 border-cyan-500/50 hover:bg-slate-800'
            }`}
            title={isOwner ? 'Owner Mode Active' : 'Student ID: 10076 (Click to unlock Owner Mode)'}
          >
            <span className={`w-2 h-2 rounded-full ${isOwner ? 'bg-slate-950' : 'bg-emerald-400 animate-pulse'}`} />
            <span>{isOwner ? 'OWNER' : 'ID: 10076'}</span>
          </button>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Full-Screen Portrait View Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0d1322] shadow-2xl p-6 space-y-5">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                  <span>{lang === 'km' ? 'រូបថតពិតរបស់ សុផា បញ្ញា' : 'Official Portrait: Sopha Panha'}</span>
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

            {/* High-Resolution Portrait Display or Upload Prompt */}
            <div className="relative w-full aspect-[3/4] max-h-[380px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0066d6] flex items-center justify-center">
              {!imageError ? (
                <img
                  src={photoSrc}
                  alt="សុផា បញ្ញា (Sopha Panha)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div className="text-white font-bold text-sm">
                    {lang === 'km' ? 'សូមជ្រើសរើសរូបថត 10076_SOPHAPANHA.jpg' : 'Please select 10076_SOPHAPANHA.jpg'}
                  </div>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                    {lang === 'km'
                      ? 'ចុចប៊ូតុងខាងក្រោមដើម្បីជ្រើសរើសរូបថតពិតរបស់អ្នកពីទូរស័ព្ទ ឬកុំព្យូទ័រ'
                      : 'Click the button below to pick your original photo file.'}
                  </p>
                </div>
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
            </div>

            {/* Action Bar */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{lang === 'km' ? 'កំពុងដំណើរការ...' : 'Processing...'}</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>{lang === 'km' ? 'ជ្រើសរើសរូបថតពិត (10076_SOPHAPANHA.jpg)' : 'Select 10076_SOPHAPANHA.jpg'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors ml-auto"
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
