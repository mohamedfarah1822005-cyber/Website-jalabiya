import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Language, ProductItem, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl, formatPriceSDG } from '../utils/whatsapp';
import { SmartImage } from './SmartImage';
import { WhatsAppSvg } from './WhatsAppIcon';

interface ProductModalProps {
  product: ProductItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  lang,
  onClose,
}) => {
  if (!product) return null;

  const t = UI_TEXT[lang];
  const colorList = lang === 'ar' ? product.colorsAr : product.colorsEn;
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[2] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(colorList[0]);

  const orderUrl = buildWhatsAppOrderUrl({
    productName: `${product.nameAr} (${product.nameEn})`,
    size: selectedSize,
    color: selectedColor,
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#151518] border border-[#C6A46A]/45 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 sm:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modal.close}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#0B0B0E]/80 border border-[#C6A46A]/40 text-[#E8D5B5] flex items-center justify-center hover:bg-[#C6A46A] hover:text-[#0B0B0E] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <div className="sm:col-span-5 aspect-[4/4.6] sm:aspect-auto bg-[#0B0B0E]">
          <SmartImage
            src={product.image}
            fallbackSrc={product.fallbackImage}
            alt={product.nameAr}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Details & Bespoke Selectors */}
        <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
          <div>
            <p className="text-xs font-display tracking-[0.2em] uppercase text-[#C6A46A]">
              {product.nameEn}
            </p>
            <h3 id="modal-product-title" className="text-2xl font-bold text-[#F4EFE6] mt-0.5">
              {product.nameAr}
            </h3>
            <p className="text-xs sm:text-sm text-[#F4EFE6]/80 mt-2 leading-relaxed">
              {lang === 'ar' ? product.descAr : product.descEn}
            </p>
            <p className="text-xs text-[#929292] mt-1.5">
              {lang === 'ar' ? product.fabricAr : product.fabricEn}
            </p>

            {/* Size Selection */}
            <div className="mt-4">
              <span className="block text-xs font-medium text-[#E8D5B5] mb-2">
                {t.modal.selectSize}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#C6A46A] text-[#0B0B0E] border-[#C6A46A] font-bold'
                        : 'bg-[#0B0B0E] text-[#F4EFE6]/80 border-white/10 hover:border-[#C6A46A]/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-4">
              <span className="block text-xs font-medium text-[#E8D5B5] mb-2">
                {t.modal.selectColor}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {colorList.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer ${
                      selectedColor === color
                        ? 'bg-[#C6A46A]/25 text-[#E8D5B5] border-[#C6A46A]'
                        : 'bg-[#0B0B0E] text-[#929292] border-white/10 hover:text-[#F4EFE6]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#929292]">{t.modal.estimatedPrice}</span>
              <span className="text-xl font-bold text-[#E8D5B5] tabular-nums">
                {formatPriceSDG(product.priceSDG)}
              </span>
            </div>

            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-[#E8D5B5] to-[#C6A46A] text-[#0B0B0E] font-bold text-sm hover:brightness-105 transition-all"
            >
              <WhatsAppSvg className="w-4 h-4" />
              <span>{t.modal.whatsappOrder}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
