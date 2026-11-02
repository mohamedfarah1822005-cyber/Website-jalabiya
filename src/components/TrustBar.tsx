import React from 'react';
import { Language, UI_TEXT } from '../data/coutureData';
import {
  CottonFlowerSvg,
  DeliveryTruckSvg,
  MeasuringTapeSvg,
  SewingMachineSvg,
} from './WhatsAppIcon';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const t = UI_TEXT[lang];

  const icons = [
    <CottonFlowerSvg key="icon-0" className="w-8 h-8 sm:w-9 sm:h-9 text-[#E8D5B5]" />,
    <SewingMachineSvg key="icon-1" className="w-8 h-8 sm:w-9 sm:h-9 text-[#E8D5B5]" />,
    <MeasuringTapeSvg key="icon-2" className="w-8 h-8 sm:w-9 sm:h-9 text-[#E8D5B5]" />,
    <DeliveryTruckSvg key="icon-3" className="w-8 h-8 sm:w-9 sm:h-9 text-[#E8D5B5]" />,
  ];

  return (
    <section
      aria-label={lang === 'ar' ? 'مزايا علامة أبو هريرة' : 'Brand Guarantees'}
      className="bg-[#121215] border-b border-[#C6A46A]/20 py-7 sm:py-9"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6">
          {t.trust.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center px-3 sm:px-6 ${
                idx < 3
                  ? lang === 'ar'
                    ? 'lg:border-l lg:border-[#C6A46A]/20'
                    : 'lg:border-r lg:border-[#C6A46A]/20'
                  : ''
              }`}
            >
              <div className="mb-2.5 transition-transform duration-300 hover:scale-105">
                {icons[idx]}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#F4EFE6] tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-[#929292] mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
