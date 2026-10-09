import React from 'react';
import { ExternalLink, Instagram, Globe } from 'lucide-react';
import { IFCELogo } from './IFCELogo';
import { OFFICIAL_URLS } from '../data/officialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] text-slate-400 py-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left pb-6 border-b border-white/10">
          
          <div className="flex items-center gap-3">
            <IFCELogo variant="mark-only" className="w-6 h-auto" />
            <div className="text-left">
              <span className="font-display text-xs sm:text-sm font-bold text-white block">
                IFCE Campus Cedro
              </span>
              <span className="text-[11px] text-slate-400 block">
                Curso Técnico Integrado em Informática
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href={OFFICIAL_URLS.campusCedro}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Portal Oficial</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <a
              href={OFFICIAL_URLS.instagramOficialCampus}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5 text-emerald-400" />
              <span>@ifcecedrooficial</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <a
              href={OFFICIAL_URLS.instagramTurmaInformatica}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1"
            >
              <span>@s6informaticaa</span>
            </a>
          </div>

        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <span>Projeto informativo de apoio para divulgação do curso · Ensino Médio</span>
          <span className="font-mono text-emerald-400">Cedro, Ceará</span>
        </div>
      </div>
    </footer>
  );
};
