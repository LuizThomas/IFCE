import React from 'react';
import { Globe, Gamepad2, BrainCircuit, Network, Sparkles, CheckCircle2 } from 'lucide-react';

const TRACKS = [
  {
    icon: Globe,
    title: 'Sites & Web',
    tag: 'Visual',
    desc: 'Crie páginas modernas, menus interativos e sistemas na internet.',
    code: '<div>Meu Site</div>',
  },
  {
    icon: Gamepad2,
    title: 'Apps & Jogos',
    tag: 'Criação',
    desc: 'Transforme ideias em aplicativos com botões, sons e mecânicas reais.',
    code: 'iniciarJogo();',
  },
  {
    icon: BrainCircuit,
    title: 'Lógica do Zero',
    tag: 'Fundamento',
    desc: 'Aprenda a pensar como um programador e resolver problemas do cotidiano.',
    code: 'if (curioso) aprender();',
  },
  {
    icon: Network,
    title: 'Redes & Hardware',
    tag: 'Prática',
    desc: 'Descubra como os computadores conversam e monte sua própria rede.',
    code: 'ping 192.168.1.1',
  },
];

export const Informatica: React.FC = () => {
  return (
    <section
      id="o-que-e"
      className="py-10 sm:py-16 border-b border-white/10 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
            O QUE VOCÊ VAI CRIAR
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
            Informática na Prática
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Você não fica só ouvindo teoria: as aulas acontecem em computadores reais com ferramentas modernas.
          </p>
        </div>

        {/* 4 Compact Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TRACKS.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5">
                      {t.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white">
                    {t.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/5">
                  <span className="font-mono text-[11px] text-emerald-400 block truncate">
                    {t.code}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Glass Banner: "Nunca mexi com código?" */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0C1626]/80 via-[#0B1A24]/70 to-[#0A121F]/80 backdrop-blur-2xl border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#2F9E41]/20 border border-[#2F9E41]/40 flex items-center justify-center text-[#4ADE80] shrink-0 mt-0.5 sm:mt-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                "Mas eu nunca programei nada antes..."
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Não tem problema! Todo mundo começa do zero absoluto com apoio dos professores do campus.
              </p>
            </div>
          </div>

          <a
            href="#code-run"
            className="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-emerald-300 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Experimente no jogo abaixo ↓
          </a>
        </div>

      </div>
    </section>
  );
};
