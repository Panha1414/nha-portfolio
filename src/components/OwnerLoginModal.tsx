import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { verifyOwner } from '../utils/ownerAuth';
import { ShieldCheck, Lock, KeyRound, X, AlertCircle } from 'lucide-react';

interface OwnerLoginModalProps {
  lang: Language;
  onClose: () => void;
  onSuccess: () => void;
}

export const OwnerLoginModal: React.FC<OwnerLoginModalProps> = ({
  lang,
  onClose,
  onSuccess
}) => {
  const [pinInput, setPinInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyOwner(pinInput)) {
      onSuccess();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d1322] shadow-2xl p-6 space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {lang === 'km' ? 'ផ្ទៀងផ្ទាត់គណនីម្ចាស់ (Owner Login)' : 'Owner Security Verification'}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Sopha Panha Only · ID: 10076
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300 block">
              {lang === 'km' ? 'បញ្ចូលលេខកូដសម្ងាត់ ឬអត្តលេខនិស្សិត (PIN):' : 'Enter Secret PIN or Student ID:'}
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setError(false);
                }}
                placeholder={lang === 'km' ? 'បញ្ចូលអត្តលេខ 10076...' : 'Enter PIN 10076...'}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none font-mono"
              />
            </div>
            <p className="text-[10px] text-slate-400">
              {lang === 'km' ? 'លេខសម្គាល់ម្ចាស់គេហទំព័រគឺ 10076' : 'Default owner ID key: 10076'}
            </p>
          </div>

          {error && (
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{lang === 'km' ? 'លេខកូដមិនត្រឹមត្រូវទេ! មានតែម្ចាស់ទើបអាចចូលបាន។' : 'Invalid PIN. Only Sopha Panha is authorized.'}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'km' ? 'ផ្ទៀងផ្ទាត់ចូល (Unlock Owner Mode)' : 'Verify & Unlock'}</span>
          </button>
        </form>

        <div className="text-[11px] text-slate-500 text-center border-t border-white/5 pt-3">
          {lang === 'km' 
            ? 'ការពារសុវត្ថិភាព៖ អ្នកទស្សនាទូទៅមិនអាចផ្លាស់ប្តូររូបថតបានឡើយ។' 
            : 'Protected: Public visitors cannot edit or change photos.'}
        </div>

      </div>
    </div>
  );
};
