import React from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Video } from 'lucide-react';
import { Language, UI_TEXT, WHATSAPP_DISPLAY } from '../data/coutureData';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';
import { SudanFlagSvg, WhatsAppSvg } from './WhatsAppIcon';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const whatsappUrl = buildWhatsAppOrderUrl();
  const ArrowIcon = lang === 'ar' ? ChevronLeft : ChevronRight;

  const quickLinks = [
    { href: '#collection', label: t.nav.collection },
    { href: '#reels', label: t.nav.reels },
    { href: '#fabrics', label: t.nav.fabrics },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#0B0B0E] text-[#F4EFE6] pt-14 pb-8 border-t border-[#C6A46A]/25">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: About Abu Huraira */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-lg font-bold text-[#F4EFE6]">
              {t.footer.aboutTitle}
            </h3>
            <p className="text-sm text-[#929292] leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Column 2: Contact & Socials */}
          <div className="lg:col-span-3 space-y-4 lg:border-x lg:border-white/10 lg:px-6">
            <h3 className="text-lg font-bold text-[#F4EFE6]">
              {t.footer.contactTitle}
            </h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-base font-mono tabular-nums text-[#E8D5B5] hover:text-[#C6A46A] transition-colors"
              dir="ltr"
            >
              <WhatsAppSvg className="w-5 h-5 text-[#C6A46A]" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>

            {/* Social Links (Instagram, TikTok, Facebook) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Abu Huraira Sudanese Couture"
                className="w-9 h-9 rounded-full border border-white/15 hover:border-[#C6A46A] flex items-center justify-center text-[#F4EFE6] hover:text-[#C6A46A] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok - Abu Huraira Sudanese Couture"
                className="w-9 h-9 rounded-full border border-white/15 hover:border-[#C6A46A] flex items-center justify-center text-[#F4EFE6] hover:text-[#C6A46A] transition-colors"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - Abu Huraira Sudanese Couture"
                className="w-9 h-9 rounded-full border border-white/15 hover:border-[#C6A46A] flex items-center justify-center text-[#F4EFE6] hover:text-[#C6A46A] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-lg font-bold text-[#F4EFE6]">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2 text-sm text-[#929292]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 hover:text-[#E8D5B5] transition-colors"
                  >
                    <ArrowIcon className="w-3.5 h-3.5 text-[#C6A46A]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Brand Emblem Lockup matching Reference Bottom Left */}
          <div className="lg:col-span-3 flex items-center lg:justify-end gap-4">
            <img
              src="/assets/couture/brand-emblem.png"
              alt="شعار أبو هريرة للأزياء السودانية"
              className="w-14 h-20 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#F4EFE6]">أبو هريرة</span>
              <span className="text-sm text-[#E8D5B5]">للأزياء السودانية</span>
              <span className="text-[11px] font-display tracking-[0.22em] uppercase text-[#C6A46A] mt-1">
                ABU HURAIRA
              </span>
              <span className="text-[9px] font-display tracking-[0.28em] uppercase text-[#929292]">
                SUDANESE COUTURE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Sudanese Flag & Copyright matching Reference */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#929292]">
          <div className="flex items-center gap-2.5">
            <SudanFlagSvg className="w-6 h-4" />
            <span className="text-[#F4EFE6]/90">{t.footer.madeInSudan}</span>
          </div>
          <p dir="ltr" className="text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp: React.FC<{ lang: Language }> = ({ lang }) => {
  const whatsappUrl = buildWhatsAppOrderUrl();
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        lang === 'ar'
          ? 'تواصل معنا عبر واتساب'
          : 'Contact Abu Huraira on WhatsApp'
      }
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold text-xs sm:text-sm shadow-[0_10px_30px_rgba(0,0,0,0.65)] border border-[#F4EFE6]/30 hover:scale-105 transition-transform"
    >
      <WhatsAppSvg className="w-5 h-5 text-[#0B0B0E]" />
      <span className="hidden sm:inline whitespace-nowrap">
        {lang === 'ar' ? 'اطلب عبر واتساب' : 'WhatsApp Order'}
      </span>
    </a>
  );
};
