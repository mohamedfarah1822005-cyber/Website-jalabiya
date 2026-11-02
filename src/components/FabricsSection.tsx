import React from 'react';
import { CRAFT_ITEMS, Language, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';
import { SmartImage } from './SmartImage';
import { WhatsAppSvg } from './WhatsAppIcon';

interface FabricsSectionProps {
  lang: Language;
}

export const FabricsSection: React.FC<FabricsSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang];

  return (
    <section
      id="fabrics"
      className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-[#C6A46A]/20"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 sm:gap-8 w-full max-w-2xl mb-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A46A]/65" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F4EFE6] whitespace-nowrap">
              {t.fabrics.titleAr}
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A46A]/65" />
          </div>

          <p className="font-display text-sm sm:text-base tracking-[0.28em] uppercase text-[#C6A46A] mb-2">
            {t.fabrics.titleEn}
          </p>
          <p className="text-sm sm:text-base text-[#E8D5B5]/85 max-w-xl">
            {t.fabrics.subtitle}
          </p>
        </div>

        {/* 6-Card Macro Craftsmanship Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CRAFT_ITEMS.map((item, idx) => {
            const title = lang === 'ar' ? item.titleAr : item.titleEn;
            const secondaryTitle = lang === 'ar' ? item.titleEn : item.titleAr;
            const subtitle = lang === 'ar' ? item.subtitleAr : item.subtitleEn;
            const spec = lang === 'ar' ? item.specAr : item.specEn;
            const inquireUrl = buildWhatsAppOrderUrl({
              productName: `${item.titleAr} (${item.titleEn})`,
            });

            return (
              <article
                key={item.id}
                className="group bg-[#151518] rounded-2xl border border-[#C6A46A]/25 hover:border-[#C6A46A]/65 overflow-hidden flex flex-col transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0B0E]">
                  <SmartImage
                    src={item.image}
                    alt={`${item.titleAr} - ${item.titleEn}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3 right-4 text-xs text-[#E8D5B5] tracking-wider font-display">
                    0{idx + 1} · {spec}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4EFE6]">
                      {title}
                    </h3>
                    <p className="text-xs font-display tracking-[0.16em] uppercase text-[#C6A46A] mt-0.5 mb-2.5">
                      {secondaryTitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F4EFE6]/80 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#929292]">{spec}</span>
                    <a
                      href={inquireUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E8D5B5] hover:text-[#C6A46A] transition-colors whitespace-nowrap"
                    >
                      <WhatsAppSvg className="w-3.5 h-3.5" />
                      <span>{t.fabrics.inquireBtn}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
