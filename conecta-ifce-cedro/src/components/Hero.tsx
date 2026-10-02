import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { IFCELogo } from './IFCELogo';

interface JourneyNode {
  step: string;
  label: string;
  summary: string;
  detail: string;
  targetSection: string;
  codeSnippet: string;
}

const JOURNEY_STEPS: JourneyNode[] = [
  {
    step: '01',
    label: '9º ano',
    summary: 'Onde você está hoje',
    detail:
      'Concluindo o Ensino Fundamental, curioso sobre tecnologia e pensando em dar o próximo passo para o Ensino Médio.',
    targetSection: 'sobre-ifce',
    codeSnippet: 'const estudante = { serie: "9º Ano", curiosidade: true };',
  },
  {
    step: '02',
    label: 'IFCE Campus Cedro',
    summary: 'Instituição pública federal gratuita',
    detail:
      'Uma formação pública de alto nível perto de você, com laboratórios equipados, biblioteca e apoio pedagógico.',
    targetSection: 'sobre-ifce',
    codeSnippet: 'estudante.instituicao = "IFCE Campus Cedro";',
  },
  {
    step: '03',
    label: 'Técnico em Informática',
    summary: 'Ensino Médio + Formação Técnica',
    detail:
      'Você aprende programação, desenvolvimento web, sistemas e lógica desde o primeiro ano, começando do zero.',
    targetSection: 'informatica',
    codeSnippet: 'estudante.aprender(["Lógica", "Web", "Sistemas"]);',
  },
  {
    step: '04',
    label: 'Futuro',
    summary: 'Mercado de trabalho e universidade',
    detail:
      'Ao concluir os 3 anos, você sai com diploma técnico oficial e preparado para o ENEM, vestibular ou carreira tech.',
    targetSection: 'informatica',
    codeSnippet: 'return "Seu próximo passo começa aqui.";',
  },
];

const FLOATING_CODE_LINES = [
  'function iniciarJornada(aluno) { return aluno.proximoPasso("IFCE Cedro"); }',
  'const curso = { nome: "Técnico Integrado em Informática", gratuito: true };',
  'console.log("Do 9º ano para o próximo nível.");',
];

export const Hero: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = JOURNEY_STEPS[activeStepIndex];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="topo"
      aria-label="Apresentação inicial IFCE Campus Cedro"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden border-b border-white/10 bg-[#090D16]"
    >
      {/* Background layer: Pure CSS gradient mesh and tech grid (NO raster image) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[360px] rounded-full blur-[130px] opacity-25"
          style={{ background: 'radial-gradient(circle, #2F9E41 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] max-w-full h-[300px] rounded-full blur-[140px] opacity-15"
          style={{ background: 'radial-gradient(circle, #0284C7 0%, transparent 70%)' }}
        />
      </div>

      {/* Background ambient code lines on large screens */}
      <div
        aria-hidden="true"
        className="hidden lg:flex flex-col justify-between absolute inset-y-12 right-8 z-0 pointer-events-none select-none opacity-20 font-mono text-xs text-emerald-300 space-y-6 text-right"
      >
        {FLOATING_CODE_LINES.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>

      {/* Main Content Container - overflow-hidden to guarantee zero horizontal scroll */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-8 overflow-hidden">
        <div className="max-w-4xl">
          {/* Official Logo Lockup */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-5 flex flex-wrap items-center gap-3"
          >
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm max-w-full">
              <IFCELogo variant="horizontal" theme="dark" />
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1.5 flex-wrap">
              <span>Para quem está pensando no próximo passo</span>
              <span className="text-slate-600" aria-hidden="true">
                ·
              </span>
              <span className="text-emerald-400 font-semibold">9º Ano</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] [text-wrap:balance]"
          >
            E se o seu futuro começasse no{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] via-[#2F9E41] to-emerald-300">
              IFCE?
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            Descubra como é estudar no Campus Cedro e veja por que o{' '}
            <strong className="text-white font-semibold">Técnico Integrado em Informática</strong> é a
            oportunidade perfeita para quem quer aprender a criar tecnologia de verdade.
          </motion.p>

          {/* CTAs - Mobile-safe: buttons are full-width on mobile and wrap without spilling */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
          >
            <button
              type="button"
              onClick={() => scrollToSection('informatica')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white font-semibold text-sm sm:text-base transition-colors min-h-[48px] cursor-pointer shadow-lg shadow-[#2F9E41]/20 focus-visible:outline-2 focus-visible:outline-white text-center"
            >
              <span>QUERO CONHECER O IFCE</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('code-run')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm sm:text-base transition-colors min-h-[48px] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2F9E41] text-center"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>TESTAR CÓDIGO NO MINI-GAME</span>
            </button>
          </motion.div>

          {/* Unboxed factual metadata bar */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
            <span>Ensino Federal e 100% Gratuito</span>
            <span aria-hidden="true">·</span>
            <span>Ensino Médio + Técnico Integrado</span>
            <span aria-hidden="true">·</span>
            <span>Cedro, Ceará</span>
          </div>
        </div>

        {/* Interactive Concept Pathway: "SEU PRÓXIMO PASSO COMEÇA AQUI." */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span>SEU PRÓXIMO PASSO COMEÇA AQUI</span>
              <span className="text-slate-500" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-400 font-normal">Toque nas etapas para ver</span>
            </div>
            <div className="font-mono text-xs text-slate-400">
              Etapa {activeStep.step} de 04
            </div>
          </div>

          {/* 4 Clean Responsive Milestones */}
          <div
            role="tablist"
            aria-label="Etapas da jornada"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full"
          >
            {JOURNEY_STEPS.map((node, index) => {
              const isSelected = index === activeStepIndex;
              return (
                <button
                  key={node.step}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer min-h-[64px] flex flex-col justify-between w-full focus-visible:outline-2 focus-visible:outline-[#2F9E41] ${
                    isSelected
                      ? 'bg-[#2F9E41]/15 border-[#2F9E41] text-white'
                      : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs ${
                        isSelected ? 'text-emerald-400 font-semibold' : 'text-slate-500'
                      }`}
                    >
                      {node.step}
                    </span>
                    {index < JOURNEY_STEPS.length - 1 && (
                      <span className="text-slate-600 text-xs hidden sm:inline" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold leading-snug mt-1 truncate w-full">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card - Clean and mobile-safe (no horizontal overflow) */}
          <div className="mt-3 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3.5 w-full overflow-hidden">
            <div className="space-y-1 max-w-2xl min-w-0">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span>{activeStep.step}. {activeStep.label}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300 truncate">{activeStep.summary}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeStep.detail}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full md:w-auto">
              <div className="px-3 py-2 rounded-lg bg-[#05080F] border border-white/10 font-mono text-[11px] text-emerald-300 flex items-center gap-2 overflow-x-auto max-w-full">
                <Terminal className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <code className="truncate">{activeStep.codeSnippet}</code>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection(activeStep.targetSection)}
                className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white whitespace-nowrap transition-colors cursor-pointer min-h-[38px] text-center"
              >
                Conhecer mais →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('sobre-ifce')}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg cursor-pointer"
          >
            <span>Role para explorar</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#2F9E41]" />
          </button>
        </div>
      </div>
    </section>
  );
};
