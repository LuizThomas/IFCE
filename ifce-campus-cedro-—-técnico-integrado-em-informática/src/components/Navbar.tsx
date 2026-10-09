import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Gamepad2, ArrowRight } from 'lucide-react';
import { IFCELogo } from './IFCELogo';
import { OFFICIAL_URLS } from '../data/officialLinks';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 h-14 sm:h-16 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#090D16]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
          : 'bg-[#090D16]/40 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('topo');
          }}
          className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          <IFCELogo variant="mark-only" className="w-5 h-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-tight text-white">
              IFCE Cedro
            </span>
            <span className="font-mono text-[9px] text-emerald-400 font-medium">
              Técnico em Informática
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-300">
          <button
            type="button"
            onClick={() => scrollTo('o-que-e')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            O Curso
          </button>
          <button
            type="button"
            onClick={() => scrollTo('code-run')}
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Mini-Game</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTo('por-que-ifce')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Vantagens
          </button>
          <button
            type="button"
            onClick={() => scrollTo('como-entrar')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Como Entrar
          </button>
          <button
            type="button"
            onClick={() => scrollTo('faq')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollTo('code-run')}
            className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#2F9E41] to-[#258234] hover:brightness-110 text-white font-semibold text-xs shadow-md shadow-[#2F9E41]/25 cursor-pointer transition-all"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Jogar Agora</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-2 rounded-xl text-slate-200 bg-white/[0.05] border border-white/10 backdrop-blur-md"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1C]/95 backdrop-blur-3xl border-b border-white/15 px-4 py-4 space-y-2 animate-in fade-in duration-150">
          {[
            { id: 'o-que-e', label: 'O Curso de Informática' },
            { id: 'code-run', label: 'Jogar Code Run (Mini-Game)', highlight: true },
            { id: 'por-que-ifce', label: 'Por que o IFCE Cedro?' },
            { id: 'como-entrar', label: 'Como Entrar (Inscrições)' },
            { id: 'faq', label: 'Dúvidas Frequentes' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between ${
                item.highlight
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
