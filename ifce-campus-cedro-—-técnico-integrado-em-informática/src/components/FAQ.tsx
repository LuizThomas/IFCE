import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Instagram, ExternalLink, HelpCircle } from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'pagar',
    question: 'O curso é gratuito mesmo? Tem pegadinha?',
    answer:
      'Sim, 100% gratuito! O IFCE é mantido pelo Governo Federal. Não existe mensalidade nem taxa para estudar durante os 3 anos.',
  },
  {
    id: 'programar-antes',
    question: 'Preciso já saber mexer em programação antes?',
    answer:
      'Não precisa saber nada! As aulas começam do zero absoluto, ensinando a pensar com lógica e dando todo o apoio.',
  },
  {
    id: 'depois-formado',
    question: 'Posso fazer faculdade ou trabalhar depois?',
    answer:
      'As duas coisas! Você se forma com certificado do Ensino Médio para fazer o ENEM e também com diploma de Técnico em Informática.',
  },
  {
    id: 'quem-pode',
    question: 'Quem pode se inscrever?',
    answer:
      'Qualquer estudante que esteja concluindo o 9º ano do Ensino Fundamental pode participar do processo seletivo.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('pagar');

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      className="py-10 sm:py-16 bg-[#0B101C] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
            DÚVIDAS RÁPIDAS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Respostas diretas para quem está no 9º ano:
          </p>
        </div>

        {/* 4 Accordions */}
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E172A] border-[#2F9E41]/60 shadow-md shadow-[#2F9E41]/10'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono text-xs text-emerald-400 font-semibold shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-white truncate">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
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

        {/* Compact Instagram Callout */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#10241A]/90 via-[#0E1B28]/90 to-[#0A121F]/90 backdrop-blur-2xl border border-[#2F9E41]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">VEJA O DIA A DIA</span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
              Siga o Instagram @ifcecedrooficial
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Avisos oficiais, fotos do campus e notícias para novos alunos.
            </p>
          </div>

          <a
            href={OFFICIAL_URLS.instagramOficialCampus}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-md shadow-[#2F9E41]/25 min-h-[40px]"
          >
            <Instagram className="w-4 h-4" />
            <span>Abrir @ifcecedrooficial</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
};
