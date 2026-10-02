import React from 'react';
import { ExternalLink, Instagram, Globe } from 'lucide-react';
import { IFCELogo } from './IFCELogo';
import { OFFICIAL_URLS } from '../data/officialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060911] text-slate-400 py-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-3 max-w-md">
            <IFCELogo variant="horizontal" theme="dark" />
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Educação, tecnologia e futuro.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guia interativo voltado a estudantes do 9º ano interessados no Curso Técnico Integrado
              em Informática do IFCE Campus Cedro.
            </p>
          </div>

          {/* Official Channels Only */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-white tracking-wide block">
              Canais Verificados
            </span>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 text-xs">
              <a
                href={OFFICIAL_URLS.campusCedro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Portal IFCE Campus Cedro</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">
                ·
              </span>

              <a
                href={OFFICIAL_URLS.instagramOficialCampus}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-emerald-400" />
                <span>@ifcecedrooficial</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">
                ·
              </span>

              <a
                href={OFFICIAL_URLS.instagramTurmaInformatica}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-sky-400" />
                <span>@s6informaticaa</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Academic & Informational Note */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p className="font-medium text-slate-300">
            Este site é um projeto informativo de apoio e não substitui os canais oficiais do IFCE.
          </p>
          <p className="text-slate-400">
            Trabalho de Conclusão de Curso (TCC) · Ensino Médio · Cedro, CE
          </p>
        </div>
      </div>
    </footer>
  );
};
