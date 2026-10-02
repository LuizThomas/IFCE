import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  UserCheck,
  Monitor,
  BookOpen,
  Lightbulb,
  Target,
  ExternalLink,
  Instagram,
  Info,
} from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

interface CampusFeature {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  verifiedFact: string;
  visualDiagramType: 'map' | 'labs' | 'academic' | 'opportunities';
  icon: React.ComponentType<{ className?: string }>;
}

const CAMPUS_FEATURES: CampusFeature[] = [
  {
    id: 'campus-cedro',
    title: 'Campus Cedro',
    shortDesc: 'Referência federal em educação pública no Centro-Sul cearense.',
    fullDesc:
      'Localizado no município de Cedro (CE), o campus do IFCE atende estudantes de Cedro e de diversas cidades vizinhas, oferecendo ensino público, gratuito e de qualidade desde o Ensino Médio Integrado até cursos superiores.',
    verifiedFact: 'Instituição pública federal vinculada ao Ministério da Educação (MEC).',
    visualDiagramType: 'map',
    icon: MapPin,
  },
  {
    id: 'estrutura',
    title: 'Estrutura',
    shortDesc: 'Salas de aula, biblioteca, espaços de convivência e esporte.',
    fullDesc:
      'O campus conta com infraestrutura planejada para o ensino em tempo integral e regular, incluindo biblioteca com acervo físico e digital, auditório, quadra poliesportiva e espaços de estudo.',
    verifiedFact: 'Ambiente preparado para acolher o estudante durante sua jornada acadêmica.',
    visualDiagramType: 'map',
    icon: Building2,
  },
  {
    id: 'professores',
    title: 'Professores',
    shortDesc: 'Docentes concursados com formação acadêmica e técnica.',
    fullDesc:
      'As aulas da base comum e das disciplinas técnicas são ministradas por professores efetivos e substitutos com especialização, mestrado e doutorado, que também orientam projetos de pesquisa e extensão.',
    verifiedFact: 'Corpo docente federal atuante em ensino, pesquisa aplicada e extensão.',
    visualDiagramType: 'academic',
    icon: UserCheck,
  },
  {
    id: 'laboratorios',
    title: 'Laboratórios',
    shortDesc: 'Laboratórios de Informática e espaços práticos de ensino.',
    fullDesc:
      'Para o Curso Técnico Integrado em Informática, as aulas práticas acontecem em laboratórios equipados com computadores para programação, desenvolvimento web, redes e manutenção.',
    verifiedFact: 'Aprendizado prático alinhado aos componentes curriculares do curso.',
    visualDiagramType: 'labs',
    icon: Monitor,
  },
  {
    id: 'ensino',
    title: 'Ensino',
    shortDesc: 'Formação humana, científica e tecnológica integrada.',
    fullDesc:
      'O currículo integrado não separa o "pensar" do "fazer": você desenvolve base sólida em Ciências da Natureza, Matemática, Linguagens e Ciências Humanas junto com a Computação.',
    verifiedFact: 'Curso Técnico Integrado em Informática: 3 anos (3.400 horas).',
    visualDiagramType: 'academic',
    icon: BookOpen,
  },
  {
    id: 'projetos',
    title: 'Projetos',
    shortDesc: 'Iniciação científica, extensão, cultura e feiras tecnológicas.',
    fullDesc:
      'Os estudantes podem participar de grupos de estudo, olimpíadas do conhecimento (como Olimpíadas de Informática, Matemática e História), eventos internos e ações junto à comunidade.',
    verifiedFact: 'Editais internos de pesquisa e extensão publicados regularmente no portal do IFCE.',
    visualDiagramType: 'opportunities',
    icon: Lightbulb,
  },
  {
    id: 'oportunidades',
    title: 'Oportunidades',
    shortDesc: 'Assistência estudantil, estágios e preparação para o futuro.',
    fullDesc:
      'O IFCE possui Política de Assistência Estudantil (com auxílios regulamentados por editais próprios), acompanhamento multiprofissional e incentivo à participação em eventos científicos.',
    verifiedFact: 'Consulte a página oficial do Campus Cedro para conhecer os programas vigentes.',
    visualDiagramType: 'opportunities',
    icon: Target,
  },
];

export const Campus: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('campus-cedro');
  const activeFeature =
    CAMPUS_FEATURES.find((item) => item.id === activeId) || CAMPUS_FEATURES[0];

  return (
    <section
      id="campus-cedro"
      aria-labelledby="heading-campus-cedro"
      className="py-20 sm:py-28 border-b border-white/10 bg-[#0B101B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-3">
              <span>02. Por que Cedro?</span>
              <span className="mx-2 text-slate-600" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-400">IFCE Campus Cedro</span>
            </div>

            <h2
              id="heading-campus-cedro"
              className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]"
            >
              Tecnologia de nível federal perto de você.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Muita gente acha que para estudar tecnologia em uma instituição federal é preciso ir
              para uma capital distante. O <strong className="text-white">IFCE Campus Cedro</strong>{' '}
              coloca essa estrutura ao alcance de quem está concluindo o 9º ano na região.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={OFFICIAL_URLS.campusCedro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs sm:text-sm font-semibold text-white transition-colors whitespace-nowrap min-h-[42px]"
            >
              <span>Portal do Campus Cedro</span>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={OFFICIAL_URLS.instagramOficialCampus}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F9E41]/15 hover:bg-[#2F9E41]/25 border border-[#2F9E41]/40 text-xs sm:text-sm font-semibold text-emerald-300 transition-colors whitespace-nowrap min-h-[42px]"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver fotos reais (@ifcecedrooficial)</span>
            </a>
          </div>
        </div>

        {/* 7 Interactive Cards Selector */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {CAMPUS_FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isSelected = feature.id === activeId;
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveId(feature.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between min-h-[104px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F9E41] ${
                  isSelected
                    ? 'bg-[#121F33] border-[#2F9E41] text-white'
                    : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isSelected ? 'text-[#4ADE80]' : 'text-slate-400'
                  }`}
                />
                <div className="mt-3">
                  <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {feature.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Campus Feature Showcase + Honest Identified Architectural Placeholder */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Detailed Info */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span>Explorando o Campus Cedro</span>
                <span aria-hidden="true">·</span>
                <span>{activeFeature.title}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                {activeFeature.shortDesc}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeFeature.fullDesc}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <div className="text-xs font-mono text-emerald-400 mb-1">
                Informação institucional verificada
              </div>
              <p className="text-xs sm:text-sm text-slate-300">{activeFeature.verifiedFact}</p>
            </div>
          </div>

          {/* Right: Clearly Identified Visual Placeholder (Never faking campus photographs) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#090D16] border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[290px]">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

            {/* Top Notice: Explicitly identified placeholder per project guidelines */}
            <div className="relative z-10 flex items-start justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Representação esquemática · Para fotos reais dos ambientes, acesse os canais oficiais
                </span>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 shrink-0">
                Cedro · CE
              </span>
            </div>

            {/* Interactive Schematic Illustration of Campus Ecosystem */}
            <div className="relative z-10 my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-emerald-400">Laboratórios</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Prática em Computação
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Ambientes para programação, redes e projetos técnicos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-emerald-400">Ensino Integrado</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  3.400 Horas · 3 Anos
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Carga horária oficial do Técnico Integrado em Informática.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-emerald-400">Acesso Público</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  100% Gratuito
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Sem taxa de matrícula ou mensalidade durante todo o curso.
                </p>
              </div>
            </div>

            {/* Bottom Action Links to Real Official Photos */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                Quer ver fotografias reais do cotidiano e dos laboratórios?
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={OFFICIAL_URLS.instagramOficialCampus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>@ifcecedrooficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={OFFICIAL_URLS.campusCedro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>ifce.edu.br/cedro</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
