import React from 'react';
import { Instagram, Globe, ShieldCheck, ExternalLink, Users } from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

export const Social: React.FC = () => {
  return (
    <section
      id="redes-sociais"
      aria-labelledby="heading-redes-sociais"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2 flex items-center gap-2">
            <span>07. Conecte-se</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400">Canais Verificados</span>
          </div>

          <h2
            id="heading-redes-sociais"
            className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Acompanhe o IFCE Campus Cedro
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Veja as fotos do campus, as novidades acadêmicas, editais abertos e o dia a dia dos estudantes de Informática nos canais oficiais:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Official Instagram @ifcecedrooficial */}
          <div className="p-6 rounded-2xl bg-[#0E1626]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  OFICIAL
                </span>
                <span className="text-[11px] font-mono text-slate-400">Campus Cedro</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#2F9E41]/20 border border-[#2F9E41]/40 flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    @ifcecedrooficial
                  </h3>
                  <p className="text-xs text-slate-400">
                    Instagram oficial do campus
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fotos reais dos eventos, comunicados da direção, editais e registros do cotidiano no campus.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={OFFICIAL_URLS.instagramOficialCampus}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold transition-colors min-h-[42px]"
              >
                <span>Acessar @ifcecedrooficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Student Class Instagram @s6informaticaa */}
          <div className="p-6 rounded-2xl bg-[#0E1626]/80 backdrop-blur-md border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-sky-400 font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  TURMA
                </span>
                <span className="text-[11px] font-mono text-slate-400">Informática</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    @s6informaticaa
                  </h3>
                  <p className="text-xs text-slate-400">
                    Turma de Informática
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Acompanhe o ponto de vista de quem estuda o curso: rotina de aulas, projetos e amizades.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={OFFICIAL_URLS.instagramTurmaInformatica}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-colors min-h-[42px]"
              >
                <span>Conhecer @s6informaticaa</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Official IFCE Portal */}
          <div className="p-6 rounded-2xl bg-[#0E1626]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  WEB PORTAL
                </span>
                <span className="text-[11px] font-mono text-slate-400">Institucional</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    ifce.edu.br/cedro
                  </h3>
                  <p className="text-xs text-slate-400">
                    Página institucional oficial
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Notícias institucionais completas, calendário letivo, documentos oficiais e contatos do campus.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={OFFICIAL_URLS.campusCedro}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-colors min-h-[42px]"
              >
                <span>Acessar Portal Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
