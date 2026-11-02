import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Language, ProductItem, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl, formatPriceSDG } from '../utils/whatsapp';
import { SmartImage } from './SmartImage';
import { WhatsAppSvg } from './WhatsAppIcon';

interface ProductCardProps {
  product: ProductItem;
  lang: Language;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  onSelectProduct,
}) => {
  const t = UI_TEXT[lang];
  const displayName =
    lang === 'ar'
      ? `${product.nameAr} (${product.nameEn})`
      : `${product.nameEn} (${product.nameAr})`;

  const whatsappUrl = buildWhatsAppOrderUrl({
    productName: displayName,
  });

  return (
    <article className="group bg-[#151518] rounded-2xl border border-[#C6A46A]/30 hover:border-[#C6A46A]/70 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
      {/* Product Portrait Image Area */}
      <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-[#0B0B0E]">
        <SmartImage
          src={product.image}
          fallbackSrc={product.fallbackImage}
          alt={`${product.nameAr} - ${product.nameEn}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle bottom vignette */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151518] via-[#151518]/40 to-transparent"
          aria-hidden="true"
        />

        {/* Quick Customize / Sizing Trigger */}
        <button
          type="button"
          onClick={() => onSelectProduct(product)}
          aria-label={`${t.collection.quickViewBtn} - ${lang === 'ar' ? product.nameAr : product.nameEn}`}
          className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B0B0E]/80 backdrop-blur-md border border-[#C6A46A]/40 text-[#E8D5B5] text-xs hover:bg-[#C6A46A] hover:text-[#0B0B0E] transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">
            {lang === 'ar' ? 'المقاسات' : 'Bespoke Fit'}
          </span>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col items-center text-center">
        {/* Unboxed clean metadata line */}
        <div className="text-[11px] text-[#C6A46A] tracking-wide mb-1">
          <span>{lang === 'ar' ? product.tagAr : product.tagEn}</span>
        </div>

        {/* Arabic & English Titles */}
        <h3 className="text-xl font-bold text-[#F4EFE6] leading-snug">
          {lang === 'ar' ? product.nameAr : product.nameEn}
        </h3>
        <p className="text-xs font-display tracking-[0.14em] uppercase text-[#E8D5B5]/80 mt-0.5 mb-2.5">
          {lang === 'ar' ? product.nameEn : product.nameAr}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-[13px] text-[#F4EFE6]/80 leading-relaxed line-clamp-2 mb-2.5">
          {lang === 'ar' ? product.descAr : product.descEn}
        </p>

        {/* Fabric Specification */}
        <p className="text-[11px] text-[#929292] mb-3.5">
          {lang === 'ar' ? product.fabricAr : product.fabricEn}
        </p>

        {/* Spacer */}
        <div className="mt-auto w-full pt-2 border-t border-white/5">
          {/* Estimated Price in SDG (tabular numerals) */}
          <div className="text-lg sm:text-xl font-bold text-[#E8D5B5] tabular-nums tracking-wide mb-3.5">
            {formatPriceSDG(product.priceSDG)}
          </div>

          {/* Direct WhatsApp Order Button matching Reference */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#C6A46A]/75 bg-[#0B0B0E]/70 hover:bg-[#C6A46A] text-[#F4EFE6] hover:text-[#0B0B0E] font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap"
          >
            <span>{t.collection.orderBtn}</span>
            <WhatsAppSvg className="w-4 h-4 text-[#C6A46A] group-hover:text-[#0B0B0E]" />
          </a>
        </div>
      </div>
    </article>
  );
};
