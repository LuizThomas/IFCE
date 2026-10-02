import React, { useState } from 'react';
import {
  FileText,
  Globe,
  Building2,
  ClipboardCheck,
  Award,
  Instagram,
  Calendar,
  BookOpen,
  ExternalLink,
} from 'lucide-react';
import { OFFICIAL_LINKS_LIST, OfficialLinkItem } from '../data/officialLinks';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  edital: FileText,
  'processo-seletivo': ClipboardCheck,
  inscricoes: ClipboardCheck,
  calendario: Calendar,
  resultados: Award,
  'campus-cedro': Building2,
  'portal-ifce': Globe,
  'cursos-cedro': BookOpen,
  'instagram-oficial': Instagram,
};

export const OfficialLinks: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<
    'todos' | OfficialLinkItem['category']
  >('todos');

  const filteredLinks =
    filterCategory === 'todos'
      ? OFFICIAL_LINKS_LIST
      : OFFICIAL_LINKS_LIST.filter((item) => item.category === filterCategory);

  return (
    <section
      id="fontes-oficiais"
      aria-labelledby="heading-fontes-oficiais"
      className="py-20 sm:py-28 border-b border-white/10 bg-[#090D16]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-3">
              <span>10. Central de Fontes Verificadas</span>
            </div>
            <h2
              id="heading-fontes-oficiais"
              className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight"
            >
              Não fique na dúvida. Confira a fonte.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Reunimos abaixo todos os canais oficiais do IFCE e do Campus Cedro para você consultar
              editais, fazer sua inscrição e acompanhar resultados com total segurança.
            </p>
          </div>

          {/* Functional Category Filter Buttons */}
          <div
            role="group"
            aria-label="Filtrar links oficiais por categoria"
            className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#0D1422] border border-white/10 self-start"
          >
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'processo_seletivo', label: 'Processo Seletivo' },
              { id: 'institucional', label: 'Institucional' },
              { id: 'cursos', label: 'Cursos' },
              { id: 'redes_sociais', label: 'Redes Oficiais' },
            ].map((tab) => {
              const isSelected = filterCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setFilterCategory(tab.id as 'todos' | OfficialLinkItem['category'])
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#2F9E41] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLinks.map((item) => {
            const Icon = ICON_MAP[item.id] || Globe;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0D1424] border border-white/10 hover:border-[#2F9E41]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2F9E41]/15 border border-[#2F9E41]/30 flex items-center justify-center text-[#4ADE80]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {item.dependsOnEdital ? 'Varia conforme edital' : 'Canal permanente'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="text-xs text-slate-400">{item.authorityNote}</div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-[#2F9E41] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap min-h-[44px]"
                  >
                    <span>{item.ctaLabel}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
