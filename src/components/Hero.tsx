import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, Language, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';
import { SmartImage } from './SmartImage';
import { WhatsAppSvg } from './WhatsAppIcon';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = UI_TEXT[lang];
  const currentSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => window.clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const heroOrderUrl = buildWhatsAppOrderUrl({
    productName:
      lang === 'ar'
        ? currentSlide.featuredProductNameAr
        : currentSlide.featuredProductNameEn,
  });

  return (
    <section
      id="home"
      className="relative min-h-[600px] lg:min-h-[720px] bg-[#0B0B0E] overflow-hidden border-b border-[#C6A46A]/20 flex items-center"
    >
      {/* Subtle Ambient Architectural Warm Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(198,164,106,0.12),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Main Split-Screen / Layered Studio Container */}
      <div className="relative z-10 max-w-[1380px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-10 lg:py-0">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6"
          dir="ltr"
        >
          {/* Left Column: Cinematic Studio Portrait */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[680px] flex items-end justify-center overflow-hidden rounded-2xl lg:rounded-none">
            <div
              key={currentSlide.id}
              className="relative w-full h-full animate-fadeIn transition-all duration-700"
            >
              <SmartImage
                src={currentSlide.image}
                alt={lang === 'ar' ? currentSlide.titleAr : currentSlide.titleEn}
                loading="eager"
                className="w-full h-full object-cover object-top transition-transform duration-700"
              />
              {/* Soft edge blending into #0B0B0E */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-[#0B0B0E]/30 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0B0B0E]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0E] to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Editorial Typography & Luxury Actions */}
          <div
            className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-6 lg:px-8 py-4 lg:py-12"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div
              key={`text-${currentSlide.id}-${lang}`}
              className="flex flex-col items-center max-w-xl transition-opacity duration-500"
            >
              {/* Kicker */}
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E8D5B5]/90 font-display mb-1">
                {currentSlide.kickerEn}
              </p>
              <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#C6A46A] font-display mb-4">
                SUDANESE COUTURE
              </p>

              {/* Main English Display Headline */}
              <h1 className="font-display text-4xl sm:text-6xl xl:text-[68px] font-normal tracking-[0.14em] text-[#F4EFE6] leading-none mb-4">
                {currentSlide.titleEn}
              </h1>

              {/* Arabic Display Headline */}
              <h2 className="font-arabic text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#E8D5B5] leading-snug mb-5">
                {currentSlide.titleAr}
              </h2>

              {/* Ornamental Gold Diamond Divider */}
              <div className="flex items-center justify-center w-64 sm:w-80 my-2" aria-hidden="true">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A46A]/70" />
                <div className="w-2.5 h-2.5 rotate-45 bg-[#C6A46A] mx-3 shadow-[0_0_8px_rgba(198,164,106,0.6)]" />
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A46A]/70" />
              </div>

              {/* Editorial Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F4EFE6]/85 leading-relaxed mt-4 mb-8 max-w-lg font-light">
                {lang === 'ar' ? currentSlide.subtitleAr : currentSlide.subtitleEn}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <a
                  href={heroOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 rounded-full border border-[#C6A46A] bg-[#151518]/90 hover:bg-[#C6A46A] text-[#F4EFE6] hover:text-[#0B0B0E] font-bold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(198,164,106,0.18)] transition-all duration-200 whitespace-nowrap"
                >
                  <span>{t.hero.shopNow}</span>
                  <WhatsAppSvg className="w-5 h-5 text-[#C6A46A] group-hover:text-[#0B0B0E]" />
                </a>

                <a
                  href="#collection"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full border border-white/20 hover:border-[#E8D5B5] text-[#E8D5B5] hover:bg-white/5 text-xs sm:text-sm font-display tracking-[0.18em] uppercase transition-all duration-200 whitespace-nowrap"
                >
                  {t.hero.explore}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left & Right Carousel Navigation Arrows matching Reference */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label={t.hero.prevSlide}
        className="hidden sm:flex items-center justify-center absolute left-4 lg:left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#C6A46A]/55 bg-[#0B0B0E]/70 text-[#E8D5B5] hover:bg-[#C6A46A] hover:text-[#0B0B0E] transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label={t.hero.nextSlide}
        className="hidden sm:flex items-center justify-center absolute right-4 lg:right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#C6A46A]/55 bg-[#0B0B0E]/70 text-[#E8D5B5] hover:bg-[#C6A46A] hover:text-[#0B0B0E] transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Slide Indicator Dots */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            aria-current={activeIndex === idx}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              activeIndex === idx
                ? 'w-6 bg-[#F4EFE6]'
                : 'w-2.5 bg-[#929292]/50 hover:bg-[#C6A46A]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
