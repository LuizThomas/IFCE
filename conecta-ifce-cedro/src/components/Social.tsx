import React from 'react';
import { Instagram, ExternalLink, ShieldCheck, Users, Globe } from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

export const Social: React.FC = () => {
  return (
    <section
      id="redes-sociais"
      aria-labelledby="heading-redes-sociais"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#0B101C] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
            <span>04. Redes & Canais Oficiais</span>
          </div>
          <h2
            id="heading-redes-sociais"
            className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Quer ver como é de verdade?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Acompanhe o cotidiano, as fotos do campus, os projetos dos estudantes e os comunicados
            oficiais através dos canais abaixo:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Official Instagram @ifcecedrooficial */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-white/15 flex flex-col justify-between w-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>OFICIAL</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">Instagram Campus</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2F9E41]/20 border border-[#2F9E41]/40 flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-white truncate">
                    @ifcecedrooficial
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Instagram oficial do Campus Cedro
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Avisos institucionais, eventos, fotos reais do campus e comunicados da direção.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex flex-col gap-2 w-full">
              <a
                href={OFFICIAL_URLS.instagramOficialCampus}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold transition-colors min-h-[42px] text-center"
              >
                <span>Abrir @ifcecedrooficial</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Card 2: Student Class Instagram @s6informaticaa */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-white/15 flex flex-col justify-between w-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold">
                  <Users className="w-3.5 h-3.5 shrink-0" />
                  <span>ESTUDANTIL</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">Turma de Informática</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-white truncate">
                    @s6informaticaa
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Turma S6 Informática A
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Bastidores de projetos, rotina nas aulas de informática e o dia a dia dos alunos.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex flex-col gap-2 w-full">
              <a
                href={OFFICIAL_URLS.instagramTurmaInformatica}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition-colors min-h-[42px] text-center"
              >
                <span>Abrir @s6informaticaa</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Card 3: Official IFCE Portal */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-white/15 flex flex-col justify-between w-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>PORTAL WEB</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">ifce.edu.br/cedro</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-white truncate">
                    Portal IFCE Cedro
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Página institucional oficial
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Acesse notícias oficiais, informações sobre o campus e dados acadêmicos verificados.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex flex-col gap-2 w-full">
              <a
                href={OFFICIAL_URLS.campusCedro}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition-colors min-h-[42px] text-center"
              >
                <span>Acessar Portal IFCE</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
