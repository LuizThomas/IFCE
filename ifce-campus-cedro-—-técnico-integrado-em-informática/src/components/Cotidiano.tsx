import React, { useState } from 'react';
import {
  Sun,
  BookOpen,
  Coffee,
  Monitor,
  FolderGit2,
  Users,
  Instagram,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

interface DayMoment {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DAY_MOMENTS: DayMoment[] = [
  {
    time: '07:30',
    title: 'Aulas Teóricas',
    subtitle: 'Base Nacional Comum',
    description:
      'Aulas de Matemática, Português, Física, História e outras disciplinas da base nacional conectadas ao raciocínio lógico.',
    icon: BookOpen,
  },
  {
    time: '09:30',
    title: 'Intervalo & Convivência',
    subtitle: 'Momento de socializar',
    description:
      'Pausa para lanche, conversa com colegas de toda a região e descanso pelos espaços do campus.',
    icon: Coffee,
  },
  {
    time: '10:00',
    title: 'Laboratório de Informática',
    subtitle: 'Mão no código de verdade',
    description:
      'Aulas práticas em computadores reais. Você programa, testa algoritmos e constrói seus primeiros sites com apoio dos professores.',
    icon: Monitor,
  },
  {
    time: '13:30',
    title: 'Biblioteca e Projetos',
    subtitle: 'Estudo em equipe',
    description:
      'Tempo de pesquisa, grupos de estudo, desenvolvimento de projetos e preparação para olimpíadas do conhecimento.',
    icon: FolderGit2,
  },
  {
    time: '16:00',
    title: 'Vida Estudantil',
    subtitle: 'Esporte e eventos',
    description:
      'Atividades esportivas na quadra, eventos acadêmicos e amizades que duram para a vida inteira.',
    icon: Users,
  },
];

export const Cotidiano: React.FC = () => {
  const [activeMomentIdx, setActiveMomentIdx] = useState<number>(2); // Default to Laboratório
  const activeMoment = DAY_MOMENTS[activeMomentIdx];

  return (
    <section
      id="cotidiano"
      aria-labelledby="heading-cotidiano"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2 flex items-center gap-2">
              <span>03. Vida no Campus</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">Como é a rotina?</span>
            </div>

            <h2
              id="heading-cotidiano"
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-wrap:balance]"
            >
              Uma experiência que vai muito além da sala de aula.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              No IFCE Campus Cedro, a rotina mistura formação humana, tecnologia e vivência comunitária. 
              Veja abaixo como é um dia típico de quem estuda aqui:
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={OFFICIAL_URLS.instagramOficialCampus}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-emerald-400" />
              <span>Ver fotos reais do campus</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {DAY_MOMENTS.map((moment, idx) => {
            const Icon = moment.icon;
            const isSelected = idx === activeMomentIdx;
            return (
              <button
                key={moment.title}
                type="button"
                onClick={() => setActiveMomentIdx(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[92px] ${
                  isSelected
                    ? 'bg-[#152336] border-[#2F9E41] text-white shadow-lg shadow-[#2F9E41]/10'
                    : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-400 font-semibold">{moment.time}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#4ADE80]' : 'text-slate-400'}`} />
                </div>
                <div className="mt-2">
                  <span className="text-xs sm:text-sm font-bold text-white block leading-tight truncate">
                    {moment.title}
                  </span>
                  <span className="text-[11px] text-slate-400 block truncate">{moment.subtitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Moment Card */}
        <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C1424] via-[#0E1729] to-[#0A111E] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <span>{activeMoment.time}</span>
              <span aria-hidden="true">·</span>
              <span>{activeMoment.subtitle}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {activeMoment.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeMoment.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
              <span className="text-xs text-slate-400 block">Ambiente</span>
              <strong className="text-sm text-emerald-400 font-mono">IFCE Cedro</strong>
            </div>
            <button
              type="button"
              onClick={() => setActiveMomentIdx((prev) => (prev + 1) % DAY_MOMENTS.length)}
              className="px-4 py-3 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors"
            >
              Próximo Momento →
            </button>
          </div>
        </div>

        {/* Practical Projects Banner (Aprender Fazendo) */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#090F1B] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="font-mono text-xs text-emerald-400 font-semibold mb-1">01. PRÁTICA</div>
            <h4 className="text-base font-bold text-white">Projetos com Impacto Real</h4>
            <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
              Estudantes desenvolvem páginas, guias e sistemas funcionais para a comunidade escolar e feiras tecnológicas.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-emerald-400 font-semibold mb-1">02. EQUIPE</div>
            <h4 className="text-base font-bold text-white">Trabalho Colaborativo</h4>
            <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
              Aprenda a trabalhar em grupo assim como nas melhores empresas de tecnologia do mundo.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-emerald-400 font-semibold mb-1">03. OPORTUNIDADE</div>
            <h4 className="text-base font-bold text-white">Feiras e Eventos Científicos</h4>
            <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
              Apresente suas criações no campus e em eventos acadêmicos estaduais e nacionais.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
