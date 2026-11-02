import React from 'react';
import { Language, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';
import { SmartImage } from './SmartImage';
import { WhatsAppSvg } from './WhatsAppIcon';

interface EditorialSectionProps {
  lang: Language;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const editorialOrderUrl = buildWhatsAppOrderUrl({
    productName:
      lang === 'ar'
        ? 'استشارة تفصيل خاص - مجموعة الأناقة تتجاوز الزمن (Beyond Tradition)'
        : 'Bespoke Consultation — Beyond Tradition Campaign',
  });

  return (
    <section
      id="editorial"
      className="py-16 sm:py-24 bg-[#111114] border-b border-[#C6A46A]/20 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-5">
            <p className="font-display text-xs sm:text-sm tracking-[0.28em] uppercase text-[#C6A46A]">
              {t.editorial.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-5xl text-[#F4EFE6] tracking-[0.1em] uppercase leading-tight">
              {t.editorial.titleEn}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E8D5B5]">
              {t.editorial.titleAr}
            </h3>
            <div className="w-24 h-[1px] bg-[#C6A46A]/70 my-2" aria-hidden="true" />
            <p className="text-base sm:text-lg text-[#F4EFE6]/85 leading-relaxed font-light">
              {t.editorial.description}
            </p>

            {/* Editorial Highlights */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#E8D5B5]/90">
              <p>01. {t.editorial.caption1}</p>
              <p>02. {t.editorial.caption2}</p>
              <p>03. {t.editorial.caption3}</p>
            </div>

            <div className="pt-4">
              <a
                href={editorialOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold text-sm hover:brightness-105 transition-all whitespace-nowrap"
              >
                <WhatsAppSvg className="w-4 h-4" />
                <span>{t.editorial.cta}</span>
              </a>
            </div>
          </div>

          {/* Asymmetrical 3-Photograph Luxury Editorial Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            {/* Primary Large Campaign Spread */}
            <div className="sm:col-span-12 relative rounded-2xl overflow-hidden border border-[#C6A46A]/30 bg-[#0B0B0E] aspect-[16/9]">
              <SmartImage
                src="/assets/couture/editorial-resurgence-wide.jpg"
                alt="BEYOND TRADITION - Abu Huraira Editorial Campaign"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 inset-x-5 flex items-center justify-between text-xs text-[#E8D5B5]">
                <span className="font-display tracking-[0.2em] uppercase">
                  RESURGENCE LOOKBOOK
                </span>
                <span>{t.editorial.caption1}</span>
              </div>
            </div>

            {/* Secondary Asymmetric Duo 1 */}
            <div className="sm:col-span-6 relative rounded-2xl overflow-hidden border border-[#C6A46A]/25 bg-[#0B0B0E] aspect-[4/4.6]">
              <SmartImage
                src="/assets/couture/editorial-left-duo.jpg"
                alt={t.editorial.caption2}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0E] to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-3 inset-x-4 text-xs text-[#F4EFE6]/90">
                {t.editorial.caption2}
              </p>
            </div>

            {/* Secondary Asymmetric Duo 2 */}
            <div className="sm:col-span-6 relative rounded-2xl overflow-hidden border border-[#C6A46A]/25 bg-[#0B0B0E] aspect-[4/4.6]">
              <SmartImage
                src="/assets/couture/editorial-right-duo.jpg"
                alt={t.editorial.caption3}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0E] to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-3 inset-x-4 text-xs text-[#F4EFE6]/90">
                {t.editorial.caption3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
