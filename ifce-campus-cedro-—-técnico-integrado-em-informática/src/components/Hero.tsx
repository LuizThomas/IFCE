import React from 'react';
import { ArrowRight, Gamepad2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { IFCELogo } from './IFCELogo';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="topo"
      className="relative pt-6 sm:pt-12 pb-10 sm:pb-16 overflow-hidden border-b border-white/10 bg-[#090D16]"
    >
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] rounded-full blur-[120px] bg-[#2F9E41]/20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Kicker Glass Capsule */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-4 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
            IFCE Campus Cedro · Para quem está no 9º Ano
          </span>
        </div>

        {/* Impactful Title */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl [text-wrap:balance]">
          Seu futuro não precisa ficar só na{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] via-[#2F9E41] to-teal-300">
            imaginação.
          </span>
        </h1>

        {/* Short Subtext */}
        <p className="mt-3.5 sm:mt-5 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
          Conclua o <strong className="text-white">Ensino Médio</strong> e aprenda a criar aplicativos, sites e jogos no <strong className="text-white">Técnico em Informática</strong>. Federal e <span className="text-emerald-400 font-semibold">100% gratuito</span>.
        </p>

        {/* Mobile-First Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => scrollTo('code-run')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#2F9E41] to-[#258234] hover:brightness-110 active:scale-[0.98] text-white font-semibold text-sm shadow-lg shadow-[#2F9E41]/30 transition-all cursor-pointer min-h-[48px]"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Testar no Mini-Game</span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo('o-que-e')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-xl transition-all cursor-pointer min-h-[48px]"
          >
            <span>Ver o que você aprende</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Compact Glass Highlights for Mobile */}
        <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 w-full max-w-md">
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
            <span className="font-display text-base sm:text-xl font-bold text-white block">R$ 0</span>
            <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">Sem mensalidade</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
            <span className="font-display text-base sm:text-xl font-bold text-white block">3 Anos</span>
            <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">Médio + Técnico</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
            <span className="font-display text-base sm:text-xl font-bold text-white block">Federal</span>
            <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">Campus Cedro</span>
          </div>
        </div>

      </div>
    </section>
  );
};
