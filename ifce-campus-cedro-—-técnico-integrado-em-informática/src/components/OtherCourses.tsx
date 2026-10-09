import React from 'react';
import { Zap, Cog, ExternalLink } from 'lucide-react';
import { OFFICIAL_URLS, VERIFIED_COURSE_FACTS } from '../data/officialLinks';

export const OtherCourses: React.FC = () => {
  return (
    <section
      id="outros-cursos"
      aria-labelledby="heading-outros-cursos"
      className="py-14 sm:py-20 border-b border-white/10 bg-[#0B101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#090E1A] border border-white/10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-1.5">
                06. Outras Formações Técnicas
              </div>
              <h2
                id="heading-outros-cursos"
                className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight"
              >
                Conheça também outras opções no Campus Cedro
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Além de Informática, o campus também oferece formações técnicas integradas ao Ensino Médio em áreas industriais e tecnológicas:
              </p>
            </div>

            <a
              href={OFFICIAL_URLS.todosCursosCedro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <span>Ver Todos os Cursos</span>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Eletrotécnica */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-amber-400 font-semibold">TÉCNICO INTEGRADO</span>
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Eletrotécnica</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Geração, transmissão e distribuição de energia elétrica, circuitos e automação predial e industrial no Campus Cedro.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <a
                  href={VERIFIED_COURSE_FACTS.otherIntegratedCourses[0].officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Página oficial de Eletrotécnica</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Mecânica */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-sky-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-sky-400 font-semibold">TÉCNICO INTEGRADO</span>
                  <Cog className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Mecânica</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Processos de fabricação mecânica, usinagem, manutenção de equipamentos industriais e desenho técnico em laboratórios específicos.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <a
                  href={VERIFIED_COURSE_FACTS.otherIntegratedCourses[1].officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Página oficial de Mecânica</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
