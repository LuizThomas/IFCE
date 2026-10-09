import React from 'react';
import { FileText, ClipboardEdit, GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

export const Process: React.FC = () => {
  return (
    <section
      id="como-entrar"
      className="py-10 sm:py-16 border-b border-white/10 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
            PROCESSO SELETIVO OFICIAL
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
            Como entrar no IFCE Cedro?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            O ingresso é simples e acontece por meio de processo seletivo público oficial:
          </p>
        </div>

        {/* 3 Step Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-emerald-400">PASSO 01</span>
                <FileText className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Consulte o Edital
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                O edital é publicado no portal Q-Seleção informando as datas, regras e vagas para o Campus Cedro.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
              Regras e vagas oficiais
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-emerald-400">PASSO 02</span>
                <ClipboardEdit className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Inscrição Online
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Você preenche seu cadastro no site oficial dentro do prazo do cronograma do edital.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
              100% pela internet
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-emerald-400">PASSO 03</span>
                <GraduationCap className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Matrícula Gratuita
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Ao ser selecionado, você entrega a documentação no Campus Cedro e inicia suas aulas no IFCE!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
              Zero custo para cursar
            </div>
          </div>

        </div>

        {/* Action Link to Q-Seleção */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#0C1525]/80 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300">
              Editais, cronogramas e inscrições ficam no sistema oficial <strong>Q-Seleção do IFCE</strong>.
            </span>
          </div>

          <a
            href={OFFICIAL_URLS.editaisVigentes}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-md shadow-[#2F9E41]/25 min-h-[42px]"
          >
            <span>Acessar Q-Seleção IFCE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
