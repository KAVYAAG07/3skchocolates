import React, { useState } from 'react';
import { Globe, Sparkles, MoreVertical, X } from 'lucide-react';
import { IMAGE_PATHS } from '../data';

interface HeaderProps {
  activeTab: 'home' | 'gallery' | 'shop' | 'custom' | 'b2b';
  setActiveTab: (tab: 'home' | 'gallery' | 'shop' | 'custom' | 'b2b') => void;
  onOrderNow?: () => void;
}

export default function Header({ activeTab, setActiveTab, onOrderNow }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', name: 'Our Story' },
    { id: 'gallery', name: 'Product Gallery' },
    { id: 'custom', name: 'Custom Wrapper (50+ Bars)' },
    { id: 'b2b', name: 'B2B as Corporate' },
    { id: 'shop', name: 'ORDER NOW' }, // moved to last and labeled as requested
  ] as const;

  const handleNavClick = (tabId: (typeof tabs)[number]['id']) => {
    setActiveTab(tabId);
    if (tabId === 'shop') {
      // allow React to render the shop section then scroll to it
      setTimeout(() => {
        const el = document.getElementById('shop-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      if (typeof onOrderNow === 'function') onOrderNow();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-chocolate/95 backdrop-blur-md border-b border-gold-800/20">
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="bg-gradient-to-r from-gold-900 via-gold-700 to-gold-900 text-gold-100 text-xs py-2 px-4 overflow-hidden border-b border-gold-600/30">
        <div className="animate-marquee whitespace-nowrap flex justify-center items-center gap-8 md:gap-16 font-medium tracking-widest text-[10px] md:text-xs">
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> WE DELIVER ALL OVER INDIA</span>
          <span className="hidden md:inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> ORIGINAL DUBAI KUNAFA CHOCOLATE BARS</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> PISTACHIO & HAZELNUT FLAVOURS</span>
          <span className="hidden md:inline-flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> HANDCRAFTED IN SMALL BATCHES</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-24">

          <div
            className="flex items-center gap-3 cursor-pointer select-none py-1 group"
            onClick={() => setActiveTab('home')}
            id="logo-brand"
          >
            <img
              src={IMAGE_PATHS.logo}
              alt="3SK Chocolate Logo"
              className="w-12 h-12 md:w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight text-gold-gradient leading-none">
                3SK
              </span>
              <span className="font-serif text-[8px] md:text-[9px] tracking-[0.25em] text-gold-400 font-medium uppercase mt-1 border-t border-gold-800/20 pt-1 leading-none">
                Chocolate
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => handleNavClick(tab.id)}
                  className={`relative text-xs xl:text-sm tracking-widest font-semibold uppercase transition-all duration-300 py-2 cursor-pointer select-none ${
                    isActive
                      ? 'text-gold-200 font-bold'
                      : 'text-gray-400 hover:text-gold-300'
                  }`}
                >
                  {tab.name}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 relative">
            <div className="relative lg:hidden">
              <button
                id="menu-three-dots-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-md border transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer select-none ${
                  isMenuOpen
                    ? 'text-gold-200 bg-gold-950/30 border-gold-500/40 ring-1 ring-gold-500/30'
                    : 'text-gray-400 hover:text-gold-300 hover:bg-gold-950/20 border-gold-800/10 hover:border-gold-800/30'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <MoreVertical className="w-6 h-6" />}
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-dark-chocolate border border-gold-800/40 rounded-lg shadow-2xl p-3 space-y-1.5 z-50">
                  <div className="px-3 py-1.5 border-b border-gold-950/30 mb-1">
                    <span className="font-serif text-[9px] text-gold-400 tracking-[0.2em] uppercase font-bold">
                      Explore Collection
                    </span>
                  </div>

                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        id={`nav-dropdown-tab-${tab.id}`}
                        onClick={() => { handleNavClick(tab.id); setIsMenuOpen(false); }}
                        className={`w-full text-left px-3.5 py-2.5 rounded text-xs md:text-sm tracking-wide font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isActive
                            ? 'bg-gold-950 text-gold-200 border-l-2 border-gold-400 font-semibold shadow-inner'
                            : 'text-gray-300 hover:text-gold-300 hover:bg-gold-950/70'
                        }`}
                      >
                        <span>{tab.name}</span>
                        {isActive && <span className="w-1 h-1 rounded-full bg-gold-400 animate-ping" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
