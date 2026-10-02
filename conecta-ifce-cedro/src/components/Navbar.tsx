import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'O IFCE', href: '#sobre-ifce' },
  { label: 'Informática', href: '#informatica' },
  { label: 'Code Run', href: '#code-run' },
  { label: 'Redes & Portal', href: '#redes-sociais' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-[#090D16]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#topo"
          onClick={(e) => handleLinkClick(e, '#topo')}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-white hover:text-[#2F9E41] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F9E41] whitespace-nowrap shrink-0"
        >
          IFCE Campus Cedro
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="hover:text-white underline-offset-8 hover:underline decoration-[#2F9E41] decoration-2 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F9E41]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={OFFICIAL_URLS.campusCedro}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2F9E41] hover:bg-[#258234] rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Portal IFCE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F9E41]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#0D1322] border-b border-white/15 px-4 pt-3 pb-6 shadow-2xl"
        >
          <nav aria-label="Menu móvel" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-3 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={OFFICIAL_URLS.campusCedro}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#2F9E41] hover:bg-[#258234] text-white font-semibold text-sm text-center min-h-[44px] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Acessar Portal IFCE Campus Cedro</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
