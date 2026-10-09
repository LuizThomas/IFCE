import React from 'react';

interface IFCELogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark-only';
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Reprodução vetorial precisa do símbolo institucional do Instituto Federal / IFCE Campus Cedro.
 * Grade geométrica 3x4: 1 círculo vermelho (#C8102E) e 9 retângulos verdes com cantos arredondados (#2F9E41).
 */
export const IFCELogo: React.FC<IFCELogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
}) => {
  const textColor = theme === 'dark' ? '#F8FAFC' : '#18181B';
  const subTextColor = theme === 'dark' ? '#CBD5E1' : '#3F3F46';

  const renderMark = (size: number) => (
    <svg
      width={size}
      height={size * (124 / 94)}
      viewBox="0 0 94 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_2px_8px_rgba(47,158,65,0.25)]"
    >
      {/* Linha 1: Círculo Vermelho + 2 Quadrados Verdes */}
      <circle cx="13" cy="13" r="13" fill="#C8102E" />
      <rect x="34" y="0" width="26" height="26" rx="5" fill="#2F9E41" />
      <rect x="68" y="0" width="26" height="26" rx="5" fill="#2F9E41" />

      {/* Linha 2: 2 Quadrados Verdes */}
      <rect x="0" y="32.5" width="26" height="26" rx="5" fill="#2F9E41" />
      <rect x="34" y="32.5" width="26" height="26" rx="5" fill="#2F9E41" />

      {/* Linha 3: 3 Quadrados Verdes */}
      <rect x="0" y="65" width="26" height="26" rx="5" fill="#2F9E41" />
      <rect x="34" y="65" width="26" height="26" rx="5" fill="#2F9E41" />
      <rect x="68" y="65" width="26" height="26" rx="5" fill="#2F9E41" />

      {/* Linha 4: 2 Quadrados Verdes */}
      <rect x="0" y="97.5" width="26" height="26" rx="5" fill="#2F9E41" />
      <rect x="34" y="97.5" width="26" height="26" rx="5" fill="#2F9E41" />
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`} role="img" aria-label="Símbolo do IFCE">
        {renderMark(28)}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div
        className={`inline-flex flex-col items-center text-center select-none ${className}`}
        role="img"
        aria-label="Logotipo Instituto Federal do Ceará — Campus Cedro"
      >
        {renderMark(40)}
        <div className="mt-2 flex flex-col items-center leading-tight">
          <span className="text-xs sm:text-sm font-bold tracking-tight" style={{ color: textColor }}>
            INSTITUTO FEDERAL
          </span>
          <span className="text-[11px] font-medium mt-0.5" style={{ color: subTextColor }}>
            Ceará
          </span>
          <div className="w-16 h-[1.5px] bg-[#2F9E41] my-1" />
          <span className="text-[11px] font-medium" style={{ color: subTextColor }}>
            Campus Cedro
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      role="img"
      aria-label="Logotipo Instituto Federal do Ceará — Campus Cedro"
    >
      {renderMark(28)}
      <div className="flex flex-col justify-center leading-tight">
        <span className="text-xs sm:text-sm font-bold tracking-tight" style={{ color: textColor }}>
          INSTITUTO FEDERAL
        </span>
        <span className="text-[11px] font-medium" style={{ color: subTextColor }}>
          Ceará · Campus Cedro
        </span>
      </div>
    </div>
  );
};
