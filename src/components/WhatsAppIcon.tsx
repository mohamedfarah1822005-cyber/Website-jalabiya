import React from 'react';

export const WhatsAppSvg: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const CottonFlowerSvg: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 7c-3.2 0-5.8 2.4-6 5.5-2.8.8-4.8 3.4-4.5 6.5.3 3 2.8 5.3 5.8 5.5h9.4c3-.2 5.5-2.5 5.8-5.5.3-3.1-1.7-5.7-4.5-6.5-.2-3.1-2.8-5.5-6-5.5Z" />
    <path d="M13 24.5 18 29l5-4.5" />
    <path d="M18 29v4" />
    <path d="M14.5 16.5c1-1.2 2.2-1.8 3.5-1.8s2.5.6 3.5 1.8" />
  </svg>
);

export const SewingMachineSvg: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 27h24" />
    <path d="M8 27v-3a2 2 0 0 1 2-2h16v-8h-9v5" />
    <path d="M12 10h14a3 3 0 0 1 3 3v9" />
    <path d="M17 19v4" />
    <path d="M15 23h4" />
    <circle cx="24" cy="14" r="1.5" />
    <path d="M29 14h2v4h-2" />
  </svg>
);

export const MeasuringTapeSvg: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="16" cy="14" rx="9" ry="4.5" />
    <ellipse cx="16" cy="14" rx="3.5" ry="1.6" />
    <path d="M7 14v8c0 2.5 4 4.5 9 4.5s9-2 9-4.5v-5" />
    <path d="M25 17h5v7H18" />
    <path d="M11 22v2M15 23v2M19 23v2M27 21v3" />
  </svg>
);

export const DeliveryTruckSvg: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 11h17v13H4z" />
    <path d="M21 15h6l4 4v5h-10z" />
    <circle cx="10" cy="25.5" r="2.5" />
    <circle cx="26" cy="25.5" r="2.5" />
  </svg>
);

export const SudanFlagSvg: React.FC<{ className?: string }> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 36 24"
    className={`rounded-[2px] shadow-sm border border-white/10 ${className}`}
    aria-label="علم السودان"
  >
    <rect width="36" height="8" y="0" fill="#D21034" />
    <rect width="36" height="8" y="8" fill="#FFFFFF" />
    <rect width="36" height="8" y="16" fill="#000000" />
    <polygon points="0,0 13,12 0,24" fill="#007229" />
  </svg>
);
