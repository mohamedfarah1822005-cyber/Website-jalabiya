import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';
import { WhatsAppSvg } from './WhatsAppIcon';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TEXT[lang];
  const whatsappHref = buildWhatsAppOrderUrl();

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#collection', label: t.nav.collection },
    { href: '#editorial', label: t.nav.editorial },
    { href: '#fabrics', label: t.nav.fabrics },
    { href: '#reels', label: t.nav.reels },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0E]/92 backdrop-blur-md border-b border-[#C6A46A]/20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Emblem & Bilingual Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-3 group shrink-0 focus:outline-none"
          aria-label="أبو هريرة للأزياء السودانية - Abu Huraira Sudanese Couture"
        >
          <img
            src="/assets/couture/brand-emblem.png"
            alt="شعار أبو هريرة"
            className="w-10 h-13 sm:w-12 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-2xl font-bold text-[#F4EFE6] tracking-wide whitespace-nowrap">
              أبو هريرة
            </span>
            <span className="text-[11px] sm:text-xs text-[#E8D5B5] font-medium whitespace-nowrap">
              للأزياء السودانية
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#C6A46A] font-display uppercase whitespace-nowrap mt-0.5">
              ABU HURAIRA COUTURE
            </span>
          </div>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9"
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1.5 text-sm xl:text-[15px] font-medium text-[#F4EFE6]/90 hover:text-[#E8D5B5] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-[1.5px] after:bg-[#C6A46A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher & WhatsApp Contact CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Language Switcher Pill matching reference */}
          <div
            className="inline-flex items-center rounded-full border border-[#C6A46A]/45 bg-[#151518] p-0.5"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => onToggleLang('ar')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'ar'
                  ? 'bg-[#C6A46A]/25 text-[#E8D5B5] border border-[#C6A46A]/60'
                  : 'text-[#929292] hover:text-[#F4EFE6]'
              }`}
              aria-pressed={lang === 'ar'}
            >
              عربي
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-display tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#C6A46A]/25 text-[#E8D5B5] border border-[#C6A46A]/60'
                  : 'text-[#929292] hover:text-[#F4EFE6]'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          {/* Primary WhatsApp CTA Button matching reference champagne pill */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(198,164,106,0.2)] hover:brightness-105 active:scale-[0.99] transition-all whitespace-nowrap shrink-0"
          >
            <WhatsAppSvg className="w-4 h-4 text-[#0B0B0E]" />
            <span>{t.nav.whatsappCta}</span>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#C6A46A]/40 text-[#E8D5B5] hover:bg-[#C6A46A]/10 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151518] border-b border-[#C6A46A]/25 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-[#F4EFE6] hover:text-[#C6A46A] border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-full bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold text-sm"
          >
            <WhatsAppSvg className="w-4 h-4" />
            <span>{t.nav.whatsappCta}</span>
          </a>
        </div>
      )}
    </header>
  );
};
