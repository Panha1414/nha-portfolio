import React, { useState } from 'react';
import { Language } from '../../types/portfolio';
import { X, ShoppingCart, Search, Trash2, CheckCircle2 } from 'lucide-react';

interface EcommerceModalProps {
  lang: Language;
  onClose: () => void;
}

interface Product {
  id: number;
  nameKm: string;
  nameEn: string;
  category: 'hardware' | 'accessories' | 'study';
  price: number;
  stock: number;
  descKm: string;
  descEn: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    nameKm: 'ក្តារចុចមេកានិច RGB (Mechanical Keyboard)',
    nameEn: 'Mechanical RGB Developer Keyboard',
    category: 'hardware',
    price: 45.00,
    stock: 12,
    descKm: 'ស័ក្តិសមសម្រាប់ការសរសេរកូដល្បឿនលឿន និងស្វិតស្វាញ',
    descEn: 'Tactile blue switches engineered for marathon coding sessions'
  },
  {
    id: 2,
    nameKm: 'កណ្តុរ Ergonomic Wireless Mouse',
    nameEn: 'Ergonomic Precision Wireless Mouse',
    category: 'hardware',
    price: 24.50,
    stock: 18,
    descKm: 'រចនាឡើងមិនបង្កការឈឺចង្កេះដៃ ថ្មកាន់បាន ៣០ ថ្ងៃ',
    descEn: 'Natural handshake grip with rechargeable 30-day battery life'
  },
  {
    id: 3,
    nameKm: 'សៀវភៅគោលការណ៍ OOP & Python',
    nameEn: 'Comprehensive OOP & Python Handbook',
    category: 'study',
    price: 15.00,
    stock: 25,
    descKm: 'មេរៀនស្ថាបត្យកម្មកូដ និងការអនុវត្តជាក់ស្តែង',
    descEn: 'Complete guide to OOP design patterns, data models & backend APIs'
  },
  {
    id: 4,
    nameKm: 'USB-C Hub 8-in-1 Adapter',
    nameEn: 'Multi-port USB-C Hub 8-in-1',
    category: 'accessories',
    price: 29.99,
    stock: 8,
    descKm: 'ភ្ជាប់ HDMI 4K, USB 3.0, SD Card សម្រាប់កុំព្យូទ័រយួរដៃ',
    descEn: 'HDMI 4K output, 100W PD charging & dual high-speed USB ports'
  }
];

export const EcommerceModal: React.FC<EcommerceModalProps> = ({ lang, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ [id: number]: number }>({ 1: 1 });
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.nameKm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setCheckoutComplete(false);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = SAMPLE_PRODUCTS.find((p) => p.id === Number(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setCart({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0B101D] shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#080c14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                {lang === 'km' ? 'គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិក (E-Commerce Web Application)' : 'E-Commerce Buy & Sell Platform Simulator'}
              </h2>
              <p className="text-xs text-slate-400">
                Full-Stack Architecture · Relational Schema · Reactive Cart State
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

        {/* Content Body: Two Columns (Catalog + Cart) */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[72vh] overflow-y-auto">
          
          {/* Left Column: Product Search & Grid */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Search and Category Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'km' ? 'ស្វែងរកទំនិញ...' : 'Search items...'}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedCategory === 'all' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'km' ? 'ទាំងអស់' : 'All'}
                </button>
                <button
                  onClick={() => setSelectedCategory('hardware')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedCategory === 'hardware' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Hardware
                </button>
                <button
                  onClick={() => setSelectedCategory('study')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedCategory === 'study' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Study
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border border-white/5 bg-slate-900/60 p-3.5 flex flex-col justify-between hover:border-indigo-500/30 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="capitalize text-indigo-400 font-mono text-[11px]">{product.category}</span>
                      <span>Stock: {product.stock}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {lang === 'km' ? product.nameKm : product.nameEn}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {lang === 'km' ? product.descKm : product.descEn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                    <span className="font-mono font-bold text-sm text-cyan-400">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                    >
                      {lang === 'km' ? '+ ដាក់ក្នុងកន្ត្រក' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Reactive Cart & Transaction Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="font-semibold text-xs text-slate-200">
                  {lang === 'km' ? 'កន្ត្រកទំនិញ (Cart)' : 'Shopping Basket'}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {totalCartCount} {lang === 'km' ? 'មុខ' : 'items'}
                </span>
              </div>

              {/* Items in cart */}
              <div className="space-y-2.5 max-h-[180px] overflow-y-auto pr-1 text-xs">
                {Object.entries(cart).length === 0 ? (
                  <p className="text-slate-500 text-center py-4">
                    {lang === 'km' ? 'មិនទាន់មានទំនិញក្នុងកន្ត្រកនៅឡើយ' : 'No items added to cart yet'}
                  </p>
                ) : (
                  Object.entries(cart).map(([idStr, qty]) => {
                    const item = SAMPLE_PRODUCTS.find((p) => p.id === Number(idStr));
                    if (!item) return null;
                    return (
                      <div key={idStr} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                        <div className="max-w-[150px]">
                          <div className="font-medium text-slate-200 truncate">
                            {lang === 'km' ? item.nameKm : item.nameEn}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            ${item.price.toFixed(2)} × {qty}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-400 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Price Calculation */}
              <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'km' ? 'តម្លៃទំនិញ (Subtotal):' : 'Subtotal:'}</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'km' ? 'ថ្លៃដឹកជញ្ជូន (Delivery):' : 'Delivery:'}</span>
                  <span className="font-mono text-emerald-400">{subtotal > 0 ? '$1.50' : '$0.00'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/5 font-bold text-sm text-white">
                  <span>{lang === 'km' ? 'សរុប (Total):' : 'Net Total:'}</span>
                  <span className="font-mono text-cyan-400">
                    ${subtotal > 0 ? (subtotal + 1.5).toFixed(2) : '0.00'} USD
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={subtotal === 0}
                className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold text-xs transition-colors"
              >
                {lang === 'km' ? 'សាកល្បងបង់ប្រាក់ (Mock Checkout)' : 'Simulate Secure Checkout'}
              </button>

              {checkoutComplete && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === 'km' 
                      ? 'ការបញ្ជាទិញទទួលបានជោគជ័យ! ទិន្នន័យត្រូវបានកត់ត្រាក្នុង Database។'
                      : 'Mock order completed! Transaction recorded safely.'}
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/5 bg-[#080c14] px-5 py-3 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Full-Stack E-Commerce Architecture</span>
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
