import React, { useState } from 'react';
import { Language } from '../../types/portfolio';
import { Bot, ShoppingBag, Globe, Send, X, Plus, Minus, Check, Sparkles, RefreshCw } from 'lucide-react';

interface TelegramBotSimulatorProps {
  lang: Language;
  onClose: () => void;
}

interface FoodItem {
  id: number;
  nameKm: string;
  nameEn: string;
  price: number;
  imageEmoji: string;
  descKm: string;
  descEn: string;
}

const FOOD_MENU: FoodItem[] = [
  {
    id: 1,
    nameKm: 'បាយឆាសាច់គោពងទា',
    nameEn: 'Beef Fried Rice with Egg',
    price: 2.50,
    imageEmoji: '🍳',
    descKm: 'បាយឆាក្តៅៗជាមួយសាច់គោផុយ និងពងទាចៀន',
    descEn: 'Wok-fried jasmine rice with tender beef slice & fried egg'
  },
  {
    id: 2,
    nameKm: 'មីឆាគ្រឿងសមុទ្រ',
    nameEn: 'Seafood Stir-fried Noodles',
    price: 3.00,
    imageEmoji: '🍜',
    descKm: 'មីឆាជាមួយបង្គា មឹក និងបន្លែស្រស់ៗ',
    descEn: 'Stir-fried noodles with fresh shrimp, squid & greens'
  },
  {
    id: 3,
    nameKm: 'កាហ្វេទឹកដោះគោទឹកកក',
    nameEn: 'Iced Milk Coffee (Cafe Teuk Doh Koh)',
    price: 1.25,
    imageEmoji: '☕',
    descKm: 'កាហ្វេដិតបែបខ្មែរ ឈ្ងុយឆ្ងាញ់ត្រជាក់ចិត្ត',
    descEn: 'Traditional rich Cambodian dark roast with condensed milk'
  },
  {
    id: 4,
    nameKm: 'តែបៃតងទឹកដោះគោ',
    nameEn: 'Green Tea Latte',
    price: 1.50,
    imageEmoji: '🍵',
    descKm: 'តែបៃតងស្រស់ក្រអូប ជាមួយទឹកដោះគោផ្អែមល្មម',
    descEn: 'Fresh aromatic green tea blended with fresh milk'
  }
];

export const TelegramBotSimulator: React.FC<TelegramBotSimulatorProps> = ({ lang, onClose }) => {
  const [activeSubApp, setActiveSubApp] = useState<'nhafood' | 'aipro' | 'translation'>('nhafood');
  
  // Nha Food Cart State
  const [cart, setCart] = useState<{ [id: number]: number }>({ 1: 1, 3: 1 });
  const [orderSent, setOrderSent] = useState<boolean>(false);
  const [orderPayload, setOrderPayload] = useState<string | null>(null);

  // AIPRO State
  const [aiproChat, setAiproChat] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: lang === 'km' 
        ? 'សួស្តី! ខ្ញុំគឺ AIPRO Bot ដែលដំណើរការដោយ Groq Cloud API និងរៀបចំដោយ សុផា បញ្ញា។ តើអ្នកចង់ដឹងអ្វីខ្លះអំពីគម្រោងនេះ?' 
        : 'Hello! I am AIPRO Bot, powered by Groq Cloud API and developed by Sopha Panha. How can I assist you with this thesis project?'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Translation State
  const [sourceText, setSourceText] = useState('Computer science empowers students to build automation bots and improve lives.');
  const [translatedText, setTranslatedText] = useState('វិទ្យាសាស្ត្រកុំព្យូទ័រផ្តល់ថាមពលដល់និស្សិតក្នុងការបង្កើត Bot ស្វ័យប្រវត្តិកម្ម និងលើកកម្ពស់ជីវិតរស់នៅ។');

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setOrderSent(false);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
    setOrderSent(false);
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce((sum, [idStr, qty]) => {
      const item = FOOD_MENU.find((f) => f.id === Number(idStr));
      return sum + (item ? item.price * qty : 0);
    }, 0);
  };

  const handleSendOrder = () => {
    const total = calculateTotal();
    const itemsList = Object.entries(cart).map(([idStr, qty]) => {
      const item = FOOD_MENU.find((f) => f.id === Number(idStr));
      return {
        item_id: Number(idStr),
        item_name: item?.nameKm,
        quantity: qty,
        unit_price: item?.price,
        subtotal: (item?.price || 0) * qty
      };
    });

    const payload = {
      event: 'TELEGRAM_WEBAPP_DATA',
      source: 'Nha Food Mini App',
      user: 'Panha Telegram User',
      total_usd: total.toFixed(2),
      currency: 'USD',
      status: 'SUBMITTED_TO_WEBHOOK',
      timestamp: new Date().toISOString(),
      items: itemsList
    };

    setOrderPayload(JSON.stringify(payload, null, 2));
    setOrderSent(true);
  };

  const handleAiproSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const query = chatInput.trim();
    setAiproChat((prev) => [...prev, { role: 'user', text: query }]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const q = query.toLowerCase();
      if (q.includes('panha') || q.includes('បញ្ញា') || q.includes('who')) {
        reply = 'សុផា បញ្ញា ជានិស្សិតជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ (National Chea Sim University of Kamchaymear)។ គាត់មានជំនាញខ្ពស់ក្នុងការសរសេរ Python, Telegram API, Groq LLM និង C#។';
      } else if (q.includes('thesis') || q.includes('សារណា')) {
        reply = 'គម្រោងប្រព័ន្ធ Telegram Automation Bot នេះត្រូវបានជ្រើសរើសជាគម្រោងសារណាបញ្ចប់ការសិក្សា ដោយសារតែភាពពេញលេញនៃការតភ្ជាប់ពី Mini App ដល់ Webhook Backend។';
      } else if (q.includes('groq') || q.includes('speed') || q.includes('api')) {
        reply = 'Groq Cloud API ត្រូវបានប្រើប្រាស់ដើម្បីធានាល្បឿនឆ្លើយតប AI ក្នុងកម្រិតរាប់រយ Tokens ក្នុងមួយវិនាទី ធ្វើឱ្យ Bot ឆ្លើយតបអ្នកប្រើប្រាស់ស្ទើរតែភ្លាមៗ!';
      } else {
        reply = `ខ្ញុំបានទទួលសំណួរ "${query}"! នៅក្នុងប្រព័ន្ធ AIPRO នេះ សំណួររបស់អ្នកនឹងត្រូវបានបញ្ជូនទៅ Groq Llama/Mixtral LLM ដំណើរការលើ Cloud និងផ្តល់ចម្លើយយ៉ាងច្បាស់លាស់។`;
      }

      setAiproChat((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  const handleTranslate = () => {
    if (!sourceText.trim()) return;
    setTranslatedText('កំពុងបកប្រែ...');
    setTimeout(() => {
      setTranslatedText('បច្ចេកវិទ្យាកុំព្យូទ័រ និងបញ្ញាសិប្បនិម្មិត ជួយសម្រួលការងារស្មុគស្មាញ និងពង្រីកសក្តានុពលរបស់មនុស្ស។');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0B101D] shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#080c14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                {lang === 'km' ? 'ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម Telegram Bot & Mini App' : 'Telegram Automation Bots & Mini App Ecosystem'}
              </h2>
              <p className="text-xs text-slate-400">
                Solo Developer: Sopha Panha · Thesis Project · Python, Groq API, Vercel
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close simulator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-App Switcher (Clean segmented buttons) */}
        <div className="flex items-center gap-2 p-3 bg-slate-900/60 border-b border-white/5 overflow-x-auto">
          <button
            onClick={() => setActiveSubApp('nhafood')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeSubApp === 'nhafood'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Nha Food (Mini App)</span>
          </button>

          <button
            onClick={() => setActiveSubApp('aipro')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeSubApp === 'aipro'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AIPRO (AI Chatbot)</span>
          </button>

          <button
            onClick={() => setActiveSubApp('translation')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeSubApp === 'translation'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Translation Bot</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
          
          {/* 1. Nha Food Mini App Interface */}
          {activeSubApp === 'nhafood' && (
            <div className="space-y-6">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200 flex items-start justify-between">
                <div>
                  <span className="font-semibold text-amber-300 block">
                    {lang === 'km' ? 'ប្រព័ន្ធបញ្ជាទិញអាហារខ្នាតតូច Nha Food Mini App' : 'Nha Food Telegram Mini App WebApp'}
                  </span>
                  <p className="mt-1 text-slate-300">
                    {lang === 'km' 
                      ? 'សាកល្បងចុចជ្រើសរើសមុខម្ហូប រួចចុច "ផ្ញើទិន្នន័យទៅ Telegram" ដើម្បីមើលទម្រង់ JSON Payload ដែល Telegram WebApp បញ្ជូនទៅកាន់ Webhook Server!'
                      : 'Test selecting food items and click "Submit Order to Telegram" to inspect the JSON payload dispatched to the webhook server!'}
                  </p>
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOOD_MENU.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl border border-white/5 bg-slate-900/60 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.imageEmoji}</span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-white">
                            {lang === 'km' ? item.nameKm : item.nameEn}
                          </h4>
                          <span className="text-xs font-mono text-cyan-400 font-bold">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {qty > 0 && (
                          <>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono text-xs font-bold text-white px-1">
                              {qty}
                            </span>
                          </>
                        )}
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-7 h-7 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center justify-center transition-colors"
                          title="Add item"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Cart Bar */}
              <div className="rounded-xl border border-white/10 bg-slate-900 p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    {lang === 'km' ? 'តម្លៃសរុប (Total):' : 'Calculated Total:'}
                  </span>
                  <span className="text-lg font-bold font-mono text-cyan-400">
                    ${calculateTotal().toFixed(2)} USD
                  </span>
                </div>

                <button
                  onClick={handleSendOrder}
                  disabled={calculateTotal() === 0}
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/20 disabled:opacity-40"
                >
                  {lang === 'km' ? 'ផ្ញើទិន្នន័យបញ្ជាទិញទៅកាន់ Telegram (tg.sendData)' : 'Dispatch Order to Telegram WebApp (tg.sendData)'}
                </button>

                {/* Simulated Webhook Output */}
                {orderSent && orderPayload && (
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                      <Check className="w-4 h-4" />
                      <span>Telegram WebApp Data Dispatched via Webhook:</span>
                    </div>
                    <pre className="p-3 rounded-lg bg-[#080c14] border border-emerald-500/20 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                      {orderPayload}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. AIPRO AI Chatbot Simulator */}
          {activeSubApp === 'aipro' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
                <span className="text-cyan-400 font-mono">Backend: Python · Groq Cloud Engine</span>
                <span className="text-slate-500">Fast Token Streaming</span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto pr-2 text-xs">
                {aiproChat.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-2.5 ${
                        msg.role === 'user'
                          ? 'bg-cyan-600/40 text-cyan-100 border border-cyan-500/40'
                          : 'bg-slate-900 border border-slate-700/60 text-slate-200'
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-xs text-cyan-400 font-mono animate-pulse">
                    AIPRO is thinking via Groq API...
                  </div>
                )}
              </div>

              {/* Chat Form */}
              <form onSubmit={handleAiproSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={lang === 'km' ? 'សាកល្បងសួរពីបច្ចេកវិទ្យា, សារណា ឬ Bots...' : 'Ask AIPRO about technologies, thesis or bots...'}
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isTyping}
                  className="px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 text-slate-950 font-bold transition-colors flex items-center gap-1.5 text-xs sm:text-sm"
                >
                  <span>{lang === 'km' ? 'ផ្ញើ' : 'Send'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

          {/* 3. Translation Bot Simulator */}
          {activeSubApp === 'translation' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-xs text-indigo-200">
                <span className="font-semibold block text-indigo-300">
                  {lang === 'km' ? 'ប្រព័ន្ធបកប្រែសាច់រឿង និងព័ត៌មានជាភាសាខ្មែរស្វ័យប្រវត្តិ' : 'Automated Khmer Story & News Translation Engine'}
                </span>
                <p className="mt-1 text-slate-300">
                  {lang === 'km'
                    ? 'ប្រព័ន្ធនេះជួយសម្រួលដល់ការបកប្រែព័ត៌មាន និងសាច់រឿងអន្តរជាតិឱ្យទៅជាភាសាខ្មែរយ៉ាងរលូន ដោយរក្សាន័យដើមបានយ៉ាងត្រឹមត្រូវ។'
                    : 'Automates contextual translation of global news articles and narratives into natural Khmer phrasing.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 block">
                    {lang === 'km' ? 'អត្ថបទដើម (Source Text):' : 'Source Narrative / News:'}
                  </label>
                  <textarea
                    rows={4}
                    value={sourceText}
                    onChange={(e) => setSourceText(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-xs text-white focus:border-indigo-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 block">
                    {lang === 'km' ? 'លទ្ធផលបកប្រែជាភាសាខ្មែរ (Khmer Output):' : 'Khmer Contextual Output:'}
                  </label>
                  <div className="w-full rounded-lg border border-indigo-500/30 bg-[#080c14] p-3 text-xs text-indigo-200 min-h-[96px] leading-relaxed">
                    {translatedText}
                  </div>
                </div>
              </div>

              <button
                onClick={handleTranslate}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{lang === 'km' ? 'ដំណើរការបកប្រែសារជាថ្មី' : 'Re-Run Translation Pipeline'}</span>
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/5 bg-[#080c14] px-5 py-3 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Solo Architect: Sopha Panha</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            {lang === 'km' ? 'បិទផ្ទាំង' : 'Close View'}
          </button>
        </div>

      </div>
    </div>
  );
};
