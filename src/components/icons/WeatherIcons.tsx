import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const RaindropLeafLogo: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Raindrop */}
    <path
      d="M32 8C32 8 16 28 16 40C16 48.837 23.163 56 32 56C40.837 56 48 48.837 48 40C48 28 32 8 32 8Z"
      fill="url(#logoGradient)"
    />
    {/* Leaf accent */}
    <path
      d="M38 36C38 36 42 32 42 28C42 24 38 22 34 24C30 26 28 32 32 36C36 40 38 36 38 36Z"
      fill="#4CC7A8"
      fillOpacity="0.8"
    />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="5" fill="#FFC04D" />
    <g stroke="#FFC04D" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M18 10H17.74C17.36 7.68 15.37 6 13 6C11.09 6 9.45 7.09 8.65 8.65C6.67 8.89 5.12 10.58 5.12 12.62C5.12 14.82 6.93 16.62 9.12 16.62H18C19.66 16.62 21 15.28 21 13.62C21 11.96 19.66 10.62 18 10Z"
      fill="#B8D4E8"
    />
  </svg>
);

export const RainIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M18 10H17.74C17.36 7.68 15.37 6 13 6C11.09 6 9.45 7.09 8.65 8.65C6.67 8.89 5.12 10.58 5.12 12.62C5.12 14.82 6.93 16.62 9.12 16.62H18C19.66 16.62 21 15.28 21 13.62C21 11.96 19.66 10.62 18 10Z"
      fill="#3FA9F5"
    />
    <line x1="8" y1="19" x2="8" y2="22" stroke="#1B78D0" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="12" y2="22" stroke="#1B78D0" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="19" x2="16" y2="22" stroke="#1B78D0" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StormIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M18 10H17.74C17.36 7.68 15.37 6 13 6C11.09 6 9.45 7.09 8.65 8.65C6.67 8.89 5.12 10.58 5.12 12.62C5.12 14.82 6.93 16.62 9.12 16.62H18C19.66 16.62 21 15.28 21 13.62C21 11.96 19.66 10.62 18 10Z"
      fill="#6B7280"
    />
    <path d="M13 16L10 20H14L11 24" stroke="#FFC04D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PartlyCloudyIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="8" cy="8" r="4" fill="#FFC04D" />
    <path
      d="M20 14H19.74C19.36 11.68 17.37 10 15 10C13.09 10 11.45 11.09 10.65 12.65C8.67 12.89 7.12 14.58 7.12 16.62C7.12 18.82 8.93 20.62 11.12 20.62H20C21.66 20.62 23 19.28 23 17.62C23 15.96 21.66 14.62 20 14Z"
      fill="#B8D4E8"
    />
  </svg>
);

export const DroughtIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="4" fill="#D98B48" />
    <path d="M4 20C4 20 8 16 12 16C16 16 20 20 20 20" stroke="#D98B48" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 14V12" stroke="#D98B48" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 14V12" stroke="#D98B48" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DropletIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C12 2 6 10 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 10 12 2 12 2Z"
      fill="#3FA9F5"
    />
  </svg>
);

export const ThermometerIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="9" y="2" width="6" height="16" rx="3" fill="#E8DCC2" stroke="#D98B48" strokeWidth="1.5" />
    <circle cx="12" cy="18" r="3" fill="#FF4D4D" />
    <rect x="10.5" y="10" width="3" height="6" fill="#FF4D4D" />
  </svg>
);

export const SoilIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="14" width="20" height="8" rx="2" fill="#8B6914" />
    <circle cx="6" cy="18" r="1.5" fill="#6B4D0A" />
    <circle cx="12" cy="16" r="1" fill="#6B4D0A" />
    <circle cx="18" cy="18" r="1.5" fill="#6B4D0A" />
    <path d="M12 2V10M8 6L12 2L16 6" stroke="#4CC7A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
