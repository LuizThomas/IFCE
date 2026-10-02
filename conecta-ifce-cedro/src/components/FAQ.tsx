import React, { useState } from 'react';
import { ChevronDown, ExternalLink, ArrowRight, Instagram } from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'pagar',
    question: 'Preciso pagar para estudar no IFCE?',
    answer:
      'Não. O IFCE é uma instituição pública federal de ensino: não existe mensalidade nem taxa de matrícula para cursar o Ensino Médio Técnico Integrado.',
  },
  {
    id: 'programar-antes',
    question: 'Preciso saber programar antes de entrar?',
    answer:
      'De jeito nenhum! O curso foi feito para quem está concluindo o 9º ano. As disciplinas começam pela introdução à computação e lógica de programação básica.',
  },
  {
    id: 'so-programacao',
    question: 'Informática é só ficar digitando código?',
    answer:
      'Não. A área de Informática abrange computadores, redes, desenvolvimento de páginas web, banco de dados, aplicativos e projetos práticos em equipe, além de todas as matérias do Ensino Médio.',
  },
  {
    id: 'campus-cedro',
    question: 'Onde fica e como é a estrutura do Campus Cedro?',
    answer:
      'O Campus Cedro fica no município de Cedro (Ceará) e conta com laboratórios de informática, biblioteca, quadra esportiva, auditório e corpo docente federal qualificado.',
  },
  {
    id: 'acompanhar-oficial',
    question: 'Onde acompanho as notícias e novidades oficiais?',
    answer:
      'Você pode acompanhar diretamente pela página oficial do campus (ifce.edu.br/cedro) e pelo Instagram oficial (@ifcecedrooficial).',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('pagar');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="heading-faq"
      className="py-16 sm:py-24 bg-[#0B101C] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
            <span>05. Perguntas Frequentes</span>
          </div>
          <h2
            id="heading-faq"
            className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Tire suas principais dúvidas.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Respostas diretas e sem complicação para quem está concluindo o 9º ano:
          </p>
        </div>

        {/* FAQ Accordion - Mobile safe */}
        <div className="mt-8 space-y-3 max-w-4xl">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-[#0F182A] border-[#2F9E41]/60'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2F9E41]"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono text-xs text-emerald-400 font-semibold shrink-0">
                      0{index + 1}.
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-white truncate sm:text-wrap">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-white/10">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Action Banner - Clean and mobile-safe */}
        <div className="mt-14 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#10281E] via-[#0D1A2B] to-[#090D16] border border-[#2F9E41]/40 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full overflow-hidden">
          <div className="max-w-xl">
            <div className="text-xs font-mono text-emerald-400 mb-1">
              SEU PRÓXIMO PASSO
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              O futuro começa agora.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
              Você ainda está no 9º ano. Isso significa que você tem tempo para conhecer, se
              preparar e descobrir seu talento no IFCE Campus Cedro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href="#informatica"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs sm:text-sm font-semibold whitespace-nowrap min-h-[44px] text-center"
            >
              <span>EXPLORAR INFORMÁTICA</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={OFFICIAL_URLS.instagramOficialCampus}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold whitespace-nowrap min-h-[44px] text-center"
            >
              <Instagram className="w-4 h-4 text-emerald-400" />
              <span>@ifcecedrooficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
