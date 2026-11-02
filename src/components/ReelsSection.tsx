import React, { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Language, REEL_ITEMS, UI_TEXT } from '../data/coutureData';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';
import { WhatsAppSvg } from './WhatsAppIcon';

interface ReelsSectionProps {
  lang: Language;
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const toggleReelPlay = (id: string) => {
    const targetVideo = videoRefs.current[id];
    if (!targetVideo) return;

    if (playingId === id && !targetVideo.paused) {
      targetVideo.pause();
      setPlayingId(null);
    } else {
      // Pause any other playing video first
      Object.entries(videoRefs.current).forEach(([otherId, el]) => {
        if (otherId !== id && el && !el.paused) {
          el.pause();
        }
      });
      targetVideo
        .play()
        .then(() => {
          setPlayingId(id);
        })
        .catch(() => {
          setPlayingId(null);
        });
    }
  };

  const generalReelsOrderUrl = buildWhatsAppOrderUrl({
    productName:
      lang === 'ar'
        ? 'طلب إطلالة من قسم مقاطع الفيديو والريلز'
        : 'Order Look from Videos & Reels Showcase',
  });

  return (
    <section
      id="reels"
      className="py-16 sm:py-24 bg-[#0B0B0E] border-b border-[#C6A46A]/20"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Side Intro Column matching Reference Layout */}
          <div className="lg:col-span-3 flex flex-col items-start text-start space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4EFE6] leading-snug">
              {t.reels.titleAr}
            </h2>
            <p className="font-display text-sm sm:text-base tracking-[0.26em] uppercase text-[#C6A46A]">
              {t.reels.titleEn}
            </p>
            <p className="text-sm sm:text-base text-[#F4EFE6]/85 leading-relaxed">
              {t.reels.description}
            </p>
            <div className="pt-2">
              <a
                href={generalReelsOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#C6A46A]/70 bg-[#151518] hover:bg-[#C6A46A] text-[#F4EFE6] hover:text-[#0B0B0E] text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t.reels.watchMore}</span>
              </a>
            </div>
          </div>

          {/* 4 Vertical 9:16 Video Cards Gallery (Horizontal scroll on mobile, 4-col on desktop) */}
          <div className="lg:col-span-9 flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory">
            {REEL_ITEMS.map((reel) => {
              const isPlaying = playingId === reel.id;
              const title = lang === 'ar' ? reel.titleAr : reel.titleEn;
              const caption = lang === 'ar' ? reel.captionAr : reel.captionEn;
              const reelOrderUrl = buildWhatsAppOrderUrl({
                productName:
                  lang === 'ar' ? reel.relatedProductAr : reel.relatedProductEn,
              });

              return (
                <article
                  key={reel.id}
                  className="snap-center shrink-0 w-[240px] sm:w-[260px] lg:w-auto group relative rounded-2xl overflow-hidden border border-[#C6A46A]/35 bg-[#151518] aspect-[9/16] flex flex-col justify-between shadow-[0_10px_28px_rgba(0,0,0,0.5)]"
                >
                  {/* Real 9:16 HTML5 Video with High-Res Poster */}
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoUrl}
                    poster={reel.posterImage}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onEnded={() => setPlayingId(null)}
                    onClick={() => toggleReelPlay(reel.id)}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  />

                  {/* Contrast Scrim */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/90 via-[#0B0B0E]/15 to-[#0B0B0E]/40"
                    aria-hidden="true"
                  />

                  {/* Top Duration Indicator */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between">
                    <span className="text-[11px] font-mono tabular-nums text-[#F4EFE6] bg-[#0B0B0E]/75 px-2.5 py-0.5 rounded-md border border-white/10">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play / Pause Button matching Reference */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <button
                      type="button"
                      onClick={() => toggleReelPlay(reel.id)}
                      aria-label={`${
                        isPlaying ? t.reels.pauseLabel : t.reels.playLabel
                      } - ${title}`}
                      className={`w-13 h-13 rounded-full border-2 border-[#F4EFE6]/90 bg-[#0B0B0E]/60 backdrop-blur-sm text-[#F4EFE6] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#C6A46A] hover:text-[#C6A46A] cursor-pointer ${
                        isPlaying ? 'opacity-80 scale-95' : 'opacity-100'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Title & Direct WhatsApp CTA */}
                  <div className="relative z-10 p-4 text-center space-y-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#F4EFE6] drop-shadow">
                      {title}
                    </h3>
                    <p className="text-[11px] text-[#E8D5B5]/85 line-clamp-2 leading-snug">
                      {caption}
                    </p>
                    <a
                      href={reelOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#0B0B0E]/85 hover:bg-[#C6A46A] text-[#E8D5B5] hover:text-[#0B0B0E] border border-[#C6A46A]/55 text-xs font-medium transition-colors whitespace-nowrap"
                    >
                      <WhatsAppSvg className="w-3.5 h-3.5" />
                      <span>{t.reels.orderThisLook}</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
