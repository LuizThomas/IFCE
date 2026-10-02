import React from 'react';
import { Zap, Cog, ExternalLink } from 'lucide-react';
import { OFFICIAL_URLS, VERIFIED_COURSE_FACTS } from '../data/officialLinks';

export const OtherCourses: React.FC = () => {
  return (
    <section
      id="outros-cursos"
      aria-labelledby="heading-outros-cursos"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#090D16]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0D1422] border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
                <span>08. Outras Opções no Campus Cedro</span>
              </div>
              <h2
                id="heading-outros-cursos"
                className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight"
              >
                E se Informática não for a sua praia?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                O Campus Cedro também oferece outras possibilidades de formação técnica, como{' '}
                <strong className="text-white">Eletrotécnica</strong> e{' '}
                <strong className="text-white">Mecânica</strong>.
              </p>
            </div>

            <a
              href={OFFICIAL_URLS.todosCursosCedro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
            >
              <span>CONHECER TODOS OS CURSOS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 2 Smaller Elegant Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400">
                    Formação Técnica · Campus Cedro
                  </span>
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Eletrotécnica
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {VERIFIED_COURSE_FACTS.otherIntegratedCourses[0].modality}. Consulte a página
                  oficial do Campus Cedro para verificar os turnos, requisitos e projetos
                  pedagógicos vigentes.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10">
                <a
                  href={VERIFIED_COURSE_FACTS.otherIntegratedCourses[0].officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Consultar página oficial de cursos integrados</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400">
                    Formação Técnica · Campus Cedro
                  </span>
                  <Cog className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Mecânica
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {VERIFIED_COURSE_FACTS.otherIntegratedCourses[1].modality}. Confira na página
                  oficial do IFCE Campus Cedro a matriz curricular, laboratórios e detalhes de
                  oferta.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10">
                <a
                  href={VERIFIED_COURSE_FACTS.otherIntegratedCourses[1].officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Consultar página oficial de cursos integrados</span>
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
