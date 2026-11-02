import React, { useState } from 'react';
import {
  Language,
  PRODUCTS,
  ProductCategory,
  ProductItem,
  UI_TEXT,
} from '../data/coutureData';
import { filterProductsByCategory } from '../utils/whatsapp';
import { ProductCard } from './ProductCard';

interface CollectionProps {
  lang: Language;
  onSelectProduct: (product: ProductItem) => void;
}

export const Collection: React.FC<CollectionProps> = ({ lang, onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const t = UI_TEXT[lang];
  const visibleProducts = filterProductsByCategory(PRODUCTS, selectedCategory);

  const filterTabs: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: t.collection.filters.all },
    { id: 'royal', label: t.collection.filters.royal },
    { id: 'sets', label: t.collection.filters.sets },
    { id: 'classic', label: t.collection.filters.classic },
  ];

  return (
    <section
      id="collection"
      className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-[#C6A46A]/20"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        {/* Section Header with Gold Flanking Lines matching Reference */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-4 sm:gap-8 w-full max-w-2xl mb-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A46A]/65" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F4EFE6] whitespace-nowrap">
              {t.collection.titleAr}
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A46A]/65" />
          </div>

          <p className="font-display text-sm sm:text-base tracking-[0.28em] uppercase text-[#C6A46A] mb-2" dir="ltr">
            {t.collection.titleEn}
          </p>
          <p className="font-display italic text-sm sm:text-base text-[#E8D5B5]/85" dir="ltr">
            {t.collection.subtitle}
          </p>

          {/* Interactive Category Filter Bar */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mt-7 p-1.5 rounded-full bg-[#151518] border border-[#C6A46A]/25"
            role="tablist"
            aria-label={lang === 'ar' ? 'تصنيف التشكيلة' : 'Collection Categories'}
          >
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold shadow-sm'
                      : 'text-[#F4EFE6]/80 hover:text-[#E8D5B5]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Card Luxury Catalog Grid (4 columns on desktop matching reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Centralized Sample Pricing Footnote */}
        <p className="text-center text-xs text-[#929292] mt-8">
          {t.collection.priceNote}
        </p>
      </div>
    </section>
  );
};
