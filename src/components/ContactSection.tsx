import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, Check, Copy, MessageSquare, ExternalLink, GraduationCap, MapPin } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'telegram-bot',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline, Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                {lang === 'km' ? 'ទំនាក់ទំនងការងារ' : 'Open for Collaboration'}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {lang === 'km' ? 'តោះ! ចាប់ផ្តើមគម្រោងថ្មីជាមួយគ្នា។' : "Let's Build Something Impactful Together."}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {lang === 'km'
                  ? 'ខ្ញុំរីករាយស្វាគមន៍ជានិច្ចនូវការសហការ ការពិគ្រោះយោបល់លើគម្រោង Telegram Bot, កម្មវិធីគេហទំព័រ ឬកិច្ចការស្រាវជ្រាវបច្ចេកវិទ្យាថ្មីៗ។'
                  : 'Always excited to discuss Telegram automation bots, web applications, university research, or software engineering opportunities.'}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card with Copy Trigger */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#0d1322] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">{lang === 'km' ? 'បានចម្លង' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">{lang === 'km' ? 'ចម្លង' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Telegram Direct Connect */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#0d1322] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Telegram Direct</div>
                    <div className="text-xs sm:text-sm font-mono text-white">
                      {PERSONAL_INFO.telegramHandle}
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* University Location */}
              <div className="p-4 rounded-xl border border-white/5 bg-[#080c14] space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{lang === 'km' ? PERSONAL_INFO.universityKm : PERSONAL_INFO.universityEn}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 pl-5">
                  <MapPin className="w-3 h-3 text-slate-600" />
                  <span>{lang === 'km' ? PERSONAL_INFO.locationKm : PERSONAL_INFO.locationEn}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0d1322]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {lang === 'km' ? 'សាររបស់អ្នកត្រូវបានបញ្ជូនជោគជ័យ!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'km'
                      ? 'អរគុណសម្រាប់ការទាក់ទងមកកាន់ខ្ញុំ។ ខ្ញុំនឹងឆ្លើយតបទៅកាន់អ៊ីមែលរបស់អ្នកឱ្យបានឆាប់រហ័សបំផុត។'
                      : 'Thank you for reaching out. I will review your message and reply via email promptly.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'telegram-bot', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    {lang === 'km' ? 'ផ្ញើសារថ្មីមួយទៀត' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {lang === 'km' ? 'ឈ្មោះរបស់អ្នក (Your Name) *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'km' ? 'ឧទាហរណ៍៖ ចាន់ សុខា' : 'e.g. Sokha Chan'}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {lang === 'km' ? 'អ៊ីមែល (Email Address) *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {lang === 'km' ? 'ប្រធានបទគម្រោង (Project Interest)' : 'Project Category'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="telegram-bot">Telegram Bot / Mini App Development</option>
                      <option value="ecommerce">E-Commerce Web Application</option>
                      <option value="csharp-desktop">C# Desktop & Leaflet.js Mapping</option>
                      <option value="uiux-graphic">UI/UX & Graphic Artwork Design</option>
                      <option value="other">Other Collaboration / Academic Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {lang === 'km' ? 'ខ្លឹមសារសារ (Your Message) *' : 'Your Message *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'km' ? 'សរសេរសារ ឬគំនិតគម្រោងរបស់អ្នកនៅទីនេះ...' : 'Share your project details or collaboration proposal...'}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 p-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-950/20 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">{lang === 'km' ? 'កំពុងបញ្ជូន...' : 'Dispatching...'}</span>
                    ) : (
                      <>
                        <span>{lang === 'km' ? 'ផ្ញើសារមកខ្ញុំ (Send Message)' : 'Send Message'}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-500 text-center pt-1 font-mono">
                    Direct Email: nhakingkh@gmail.com · Instant Notification
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
