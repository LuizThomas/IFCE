import React from 'react';
import { ShieldCheck, GraduationCap, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

export const AboutIFCE: React.FC = () => {
  return (
    <section
      id="por-que-ifce"
      className="py-10 sm:py-16 border-b border-white/10 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
            VANTAGENS DO CAMPUS CEDRO
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
            Por que estudar no IFCE?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Compare o que uma instituição federal oferece para quem está concluindo o 9º ano:
          </p>
        </div>

        {/* 4 Bento Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Card 1: 0 Mensalidade */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-emerald-500/40 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Ensino Federal 100% Gratuito
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sem mensalidades, sem taxas de matrícula. Uma escola pública federal de alto padrão pertinho de você em Cedro.
              </p>
            </div>
          </div>

          {/* Card 2: 2 Diplomas em 3 Anos */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-emerald-500/40 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Ensino Médio + Técnico Juntos
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Você estuda todas as matérias da base nacional (Matemática, Português, etc.) e já sai com diploma profissional em 3 anos.
              </p>
            </div>
          </div>

          {/* Card 3: Prática em Laboratórios */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-emerald-500/40 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Laboratórios Equipados
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Computadores para programar, biblioteca para estudos, auditório e quadra poliesportiva para convivência.
              </p>
            </div>
          </div>

          {/* Card 4: Futuro Aberto */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-emerald-500/40 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Pronto para o Mercado ou ENEM
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Você escolhe: entrar no mercado de trabalho como Técnico ou concorrer às melhores vagas no ensino superior.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
