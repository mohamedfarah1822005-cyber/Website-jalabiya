import React, { useState } from 'react';
import { Language, PRODUCTS, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl, formatPriceSDG } from '../utils/whatsapp';
import { SmartImage } from './SmartImage';
import { WhatsAppSvg } from './WhatsAppIcon';

interface BrandStoryProps {
  lang: Language;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ lang }) => {
  const t = UI_TEXT[lang];

  const [selectedSlug, setSelectedSlug] = useState<string>(PRODUCTS[0].slug);
  const [selectedSize, setSelectedSize] = useState<string>(PRODUCTS[0].sizes[2]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [customNotes, setCustomNotes] = useState<string>('');

  const activeProduct =
    PRODUCTS.find((p) => p.slug === selectedSlug) || PRODUCTS[0];
  const colorList =
    lang === 'ar' ? activeProduct.colorsAr : activeProduct.colorsEn;
  const activeColor = colorList[selectedColorIndex] || colorList[0];

  const bespokeWhatsAppUrl = buildWhatsAppOrderUrl({
    productName:
      lang === 'ar'
        ? `${activeProduct.nameAr} (${activeProduct.nameEn})`
        : `${activeProduct.nameEn} (${activeProduct.nameAr})`,
    size: selectedSize,
    color: activeColor,
    notes: customNotes,
  });

  return (
    <section className="py-16 sm:py-24 bg-[#111114] border-b border-[#C6A46A]/20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 space-y-20">
        {/* Part 1: Why Abu Huraira — Brand Legacy & 3 Visual Highlights */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="font-display text-xs sm:text-sm tracking-[0.28em] uppercase text-[#C6A46A] mb-2">
              {t.story.titleEn}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F4EFE6] mb-4">
              {t.story.titleAr}
            </h2>
            <div className="w-28 h-[1px] bg-[#C6A46A]/65 mx-auto mb-5" aria-hidden="true" />
            <p className="text-base sm:text-lg text-[#F4EFE6]/85 leading-relaxed font-light">
              {t.story.content}
            </p>
          </div>

          {/* Three Visual Pillar Cards: Heritage, Craftsmanship, Elegance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.story.highlights.map((pillar, idx) => (
              <article
                key={pillar.key}
                className="bg-[#151518] rounded-2xl border border-[#C6A46A]/25 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0B0E]">
                  <SmartImage
                    src={pillar.image}
                    alt={`${pillar.titleAr} - ${pillar.titleEn}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3 right-4 font-display text-xs tracking-[0.24em] uppercase text-[#C6A46A]">
                    0{idx + 1} · {pillar.titleEn}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#F4EFE6] mb-2">
                    {pillar.titleAr}
                  </h3>
                  <p className="text-sm text-[#F4EFE6]/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Part 2: Interactive WhatsApp Bespoke Order Configurator (#contact) */}
        <div
          id="contact"
          className="rounded-3xl bg-[#151518] border border-[#C6A46A]/35 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Selected Garment Live Preview */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center gap-6 bg-[#0B0B0E] p-5 rounded-2xl border border-[#C6A46A]/20">
              <div className="w-full sm:w-48 lg:w-full aspect-[4/4.2] rounded-xl overflow-hidden bg-[#151518] shrink-0">
                <SmartImage
                  src={activeProduct.image}
                  fallbackSrc={activeProduct.fallbackImage}
                  alt={activeProduct.nameAr}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-start lg:text-center w-full space-y-1.5">
                <p className="text-xs font-display tracking-[0.2em] uppercase text-[#C6A46A]">
                  {activeProduct.nameEn}
                </p>
                <h3 className="text-xl font-bold text-[#F4EFE6]">
                  {activeProduct.nameAr}
                </h3>
                <p className="text-xs text-[#929292]">
                  {lang === 'ar' ? activeProduct.fabricAr : activeProduct.fabricEn}
                </p>
                <p className="text-lg font-bold text-[#E8D5B5] tabular-nums pt-1">
                  {formatPriceSDG(activeProduct.priceSDG)}
                </p>
              </div>
            </div>

            {/* Interactive Bespoke Order Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="font-display text-xs tracking-[0.25em] uppercase text-[#C6A46A] mb-1">
                  WHATSAPP BESPOKE ATELIER
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F4EFE6]">
                  {t.concierge.title}
                </h3>
                <p className="text-sm text-[#929292] mt-1.5">
                  {t.concierge.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Product Select */}
                <div>
                  <label
                    htmlFor="concierge-product"
                    className="block text-xs font-medium text-[#E8D5B5] mb-2"
                  >
                    {t.concierge.productLabel}
                  </label>
                  <select
                    id="concierge-product"
                    value={selectedSlug}
                    onChange={(e) => {
                      setSelectedSlug(e.target.value);
                      setSelectedColorIndex(0);
                    }}
                    className="w-full rounded-xl bg-[#0B0B0E] border border-[#C6A46A]/35 px-4 py-3 text-sm text-[#F4EFE6] focus:border-[#C6A46A] focus:outline-none"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.slug}>
                        {lang === 'ar'
                          ? `${prod.nameAr} — ${formatPriceSDG(prod.priceSDG)}`
                          : `${prod.nameEn} — ${formatPriceSDG(prod.priceSDG)}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size Select */}
                <div>
                  <label
                    htmlFor="concierge-size"
                    className="block text-xs font-medium text-[#E8D5B5] mb-2"
                  >
                    {t.concierge.sizeLabel}
                  </label>
                  <select
                    id="concierge-size"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full rounded-xl bg-[#0B0B0E] border border-[#C6A46A]/35 px-4 py-3 text-sm text-[#F4EFE6] focus:border-[#C6A46A] focus:outline-none"
                  >
                    {activeProduct.sizes.map((sz) => (
                      <option key={sz} value={sz}>
                        {sz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Colorway Selector Buttons */}
              <div>
                <span className="block text-xs font-medium text-[#E8D5B5] mb-2">
                  {t.concierge.colorLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {colorList.map((colorName, idx) => (
                    <button
                      key={colorName}
                      type="button"
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        selectedColorIndex === idx
                          ? 'bg-[#C6A46A]/25 border-[#C6A46A] text-[#F4EFE6]'
                          : 'bg-[#0B0B0E] border-white/10 text-[#929292] hover:text-[#F4EFE6]'
                      }`}
                    >
                      {colorName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Custom Measurements / Delivery Notes */}
              <div>
                <label
                  htmlFor="concierge-notes"
                  className="block text-xs font-medium text-[#E8D5B5] mb-2"
                >
                  {t.concierge.notesLabel}
                </label>
                <input
                  id="concierge-notes"
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder={t.concierge.notesPlaceholder}
                  className="w-full rounded-xl bg-[#0B0B0E] border border-[#C6A46A]/35 px-4 py-3 text-sm text-[#F4EFE6] placeholder:text-[#929292]/60 focus:border-[#C6A46A] focus:outline-none"
                />
              </div>

              {/* Submit Direct to WhatsApp */}
              <div className="pt-2">
                <a
                  href={bespokeWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(198,164,106,0.25)] hover:brightness-105 transition-all whitespace-nowrap"
                >
                  <WhatsAppSvg className="w-5 h-5" />
                  <span>{t.concierge.submitBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
