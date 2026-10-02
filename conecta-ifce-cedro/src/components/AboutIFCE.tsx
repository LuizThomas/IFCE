import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Cpu,
  FlaskConical,
  Users,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

interface PillarItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const IFCE_PILLARS: PillarItem[] = [
  {
    id: 'ensino',
    index: '01',
    title: 'Ensino Integrado',
    subtitle: 'Ensino Médio e curso técnico juntos',
    description:
      'Você cursa as matérias da base nacional (Matemática, Português, Ciências, etc.) conectadas à formação técnica em 3 anos.',
    icon: GraduationCap,
  },
  {
    id: 'tecnologia',
    index: '02',
    title: 'Tecnologia Prática',
    subtitle: 'Laboratórios de computação equipados',
    description:
      'Em vez de só ficar na teoria, as aulas acontecem em computadores reais com ferramentas de programação e desenvolvimento.',
    icon: Cpu,
  },
  {
    id: 'projetos',
    index: '03',
    title: 'Projetos e Inovação',
    subtitle: 'Aprender criando soluções reais',
    description:
      'Estudantes criam sites, sistemas e protótipos em equipe, podendo participar de feiras científicas e eventos de tecnologia.',
    icon: FlaskConical,
  },
  {
    id: 'comunidade',
    index: '04',
    title: 'Comunidade e Apoio',
    subtitle: 'Convivência estudantil no Campus Cedro',
    description:
      'Colegas de toda a região, professores dedicados e acompanhamento pedagógico para acolher quem está saindo do 9º ano.',
    icon: Users,
  },
  {
    id: 'formacao',
    index: '05',
    title: 'Diploma Técnico Federal',
    subtitle: 'Reconhecimento oficial e portas abertas',
    description:
      'Ao se formar, você recebe o diploma de Técnico em Informática e o certificado de Ensino Médio, pronto para trabalhar ou seguir para a faculdade.',
    icon: Rocket,
  },
];

export const AboutIFCE: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('ensino');
  const [comparisonMode, setComparisonMode] = useState<'integrado' | 'tradicional'>('integrado');

  const activePillar =
    IFCE_PILLARS.find((item) => item.id === selectedPillarId) || IFCE_PILLARS[0];

  return (
    <section
      id="sobre-ifce"
      aria-labelledby="heading-sobre-ifce"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#090D16] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
            <span>01. O que é o IFCE?</span>
            <span className="mx-2 text-slate-600" aria-hidden="true">
              ·
            </span>
            <span className="text-slate-400">Campus Cedro</span>
          </div>

          <h2
            id="heading-sobre-ifce"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-wrap:balance]"
          >
            Uma instituição pública federal gratuita perto de você.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            O IFCE é uma instituição pública de educação que oferece formação técnica, tecnológica e
            acadêmica. Para você que está no 9º ano, o objetivo é direto:{' '}
            <strong className="text-white">estudar em uma escola federal de excelência sem pagar nada</strong>.
          </p>
        </div>

        {/* 5 Cards Grid + Active Info */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left: 5 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {IFCE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = pillar.id === selectedPillarId;
              const isFullWidth = idx === IFCE_PILLARS.length - 1;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`text-left p-4 rounded-xl border transition-colors duration-150 cursor-pointer w-full focus-visible:outline-2 focus-visible:outline-[#2F9E41] ${
                    isFullWidth ? 'sm:col-span-2' : ''
                  } ${
                    isSelected
                      ? 'bg-[#111C2D] border-[#2F9E41] text-white'
                      : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-emerald-400 font-semibold">
                      {pillar.index}. {pillar.title}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#4ADE80]' : 'text-slate-400'
                      }`}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {pillar.subtitle}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 line-clamp-2">
                    {pillar.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Active Detail Card */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#0E1626] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span>Destaque</span>
                <span aria-hidden="true">·</span>
                <span>
                  {activePillar.index}. {activePillar.title}
                </span>
              </div>

              <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                {activePillar.subtitle}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePillar.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-emerald-400 block mb-1">
                Por que isso faz a diferença?
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Você não precisa esperar a faculdade para aprender uma profissão e criar projetos com
                tecnologia real. Tudo começa no Ensino Médio.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Comparison: Ensino Médio Comum vs. Técnico Integrado */}
        <div className="mt-10 p-5 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                O que muda entre o Ensino Médio Comum e o Técnico Integrado?
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Entenda a diferença na sua rotina depois do 9º ano.
              </p>
            </div>

            {/* Segmented Control - Mobile Safe */}
            <div
              role="group"
              aria-label="Alternar modalidade de comparação"
              className="flex p-1 rounded-xl bg-[#090D16] border border-white/10 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => setComparisonMode('integrado')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer text-center ${
                  comparisonMode === 'integrado'
                    ? 'bg-[#2F9E41] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Técnico IFCE
              </button>
              <button
                type="button"
                onClick={() => setComparisonMode('tradicional')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer text-center ${
                  comparisonMode === 'tradicional'
                    ? 'bg-white/15 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ensino Médio Comum
              </button>
            </div>
          </div>

          {comparisonMode === 'integrado' ? (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Base Nacional + Informática</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Todas as matérias do Ensino Médio juntas com disciplinas práticas de programação,
                  redes e desenvolvimento.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>3.400 Horas de Formação</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Duração de 3 anos no Campus Cedro, com vivência em laboratórios e preparação
                  completa.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Dois Caminhos Abertos</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Você sai pronto para o ENEM e faculdade ou pronto para ingressar no mercado de
                  trabalho como Técnico.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Apenas Formação Teórica
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Focado somente nas matérias gerais tradicionais, sem nenhuma formação profissional
                  ou técnica no diploma.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Sem Prática em Computação
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Geralmente sem laboratórios técnicos de programação, banco de dados ou redes de
                  computadores.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Sem Habilitação Profissional
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Caso deseje trabalhar na área de tecnologia, precisará fazer outro curso técnico
                  separado no futuro.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
