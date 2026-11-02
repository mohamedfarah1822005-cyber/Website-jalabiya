import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  aspectClass?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc = '/assets/couture/hero-sudanese-model.jpg',
  alt,
  className = '',
  loading = 'lazy',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasFailedAll, setHasFailedAll] = useState<boolean>(false);

  const handleError = () => {
    if (currentSrc !== fallbackSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasFailedAll(true);
    }
  };

  if (hasFailedAll) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-b from-[#151518] to-[#0B0B0E] border border-[#C6A46A]/20 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <img
          src="/assets/couture/brand-emblem.png"
          alt=""
          className="w-12 h-16 object-contain opacity-60 mb-3"
        />
        <span className="text-xs tracking-widest uppercase text-[#C6A46A] font-display">
          ABU HURAIRA COUTURE
        </span>
        <span className="text-xs text-[#929292] mt-1">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
      {...rest}
    />
  );
};
