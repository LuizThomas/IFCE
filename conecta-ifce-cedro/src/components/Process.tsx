import React, { useState } from 'react';
import {
  FileText,
  ClipboardEdit,
  BookOpen,
  Target,
  Award,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  Clock,
  PenTool,
  Brain,
  Compass,
} from 'lucide-react';
import { OFFICIAL_URLS } from '../data/officialLinks';

interface ProcessStep {
  number: string;
  title: string;
  simpleExplanation: string;
  officialRuleNote: string;
  linkLabel: string;
  linkUrl: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SELECTION_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'ENTENDA O EDITAL',
    simpleExplanation:
      'O edital é o documento oficial que explica todas as regras do processo seletivo: quantas vagas existem para Informática no Campus Cedro, quem pode concorrer, como funcionam as cotas e qual será a forma de avaliação.',
    officialRuleNote:
      'Informação oficial: As regras podem variar a cada processo seletivo. Sempre leia o edital vigente publicado no sistema Q-Seleção.',
    linkLabel: 'Consultar editais no Q-Seleção',
    linkUrl: OFFICIAL_URLS.editaisVigentes,
    icon: FileText,
  },
  {
    number: '02',
    title: 'FAÇA SUA INSCRIÇÃO',
    simpleExplanation:
      'Dentro do prazo oficial definido no cronograma do edital, você acessa o portal Q-Seleção do IFCE, cria ou acessa seu cadastro, escolhe o Campus Cedro e o Curso Técnico Integrado em Informática.',
    officialRuleNote:
      'Informação oficial: O edital informa se há taxa de inscrição, como solicitar isenção gratuita e quais dados ou históricos precisam ser anexados.',
    linkLabel: 'Acessar sistema Q-Seleção',
    linkUrl: OFFICIAL_URLS.qSelecao,
    icon: ClipboardEdit,
  },
  {
    number: '03',
    title: 'PREPARE-SE',
    simpleExplanation:
      'Enquanto acompanha o cronograma, organize sua rotina de estudos no 9º ano e separe com antecedência seus documentos pessoais e escolares (como histórico escolar ou declaração da escola, conforme exigido).',
    officialRuleNote:
      'Informação oficial: Nos processos por análise de histórico escolar ou por prova, a lista exata de critérios consta nos anexos do edital vigente.',
    linkLabel: 'Ver portal Seja Nosso Aluno',
    linkUrl: OFFICIAL_URLS.sejaNossoAluno,
    icon: BookOpen,
  },
  {
    number: '04',
    title: 'REALIZE A ETAPA EXIGIDA',
    simpleExplanation:
      'Cada edital define como os candidatos serão selecionados — por exemplo, análise das notas do Histórico Escolar do Ensino Fundamental ou aplicação de prova objetiva, além das bancas de verificação para vagas reservadas (cotas), quando aplicável.',
    officialRuleNote:
      'Informação oficial: Nunca confie em boatos. Confira no cronograma oficial do edital todas as datas e etapas obrigatórias.',
    linkLabel: 'Conferir etapas no Q-Seleção',
    linkUrl: OFFICIAL_URLS.qSelecao,
    icon: Target,
  },
  {
    number: '05',
    title: 'ACOMPANHE O RESULTADO',
    simpleExplanation:
      'O IFCE divulga primeiro o resultado preliminar (para que candidatos possam entrar com recurso caso haja alguma dúvida) e, em seguida, publica a classificação e o resultado final oficial.',
    officialRuleNote:
      'Informação oficial: Todas as listas de classificação e convocações são publicadas oficialmente no Q-Seleção e no portal do IFCE.',
    linkLabel: 'Ver resultados no Q-Seleção',
    linkUrl: OFFICIAL_URLS.resultadosSelecao,
    icon: Award,
  },
  {
    number: '06',
    title: 'FAÇA SUA MATRÍCULA',
    simpleExplanation:
      'Sendo aprovado dentro das vagas (ou convocado nas chamadas seguintes de classificáveis), você apresenta a documentação exigida na pré-matrícula/matrícula do Campus Cedro para garantir sua vaga!',
    officialRuleNote:
      'Informação oficial: Fique atento também às chamadas de suplentes/classificáveis publicadas pelo Campus Cedro.',
    linkLabel: 'Página do Campus Cedro',
    linkUrl: OFFICIAL_URLS.campusCedro,
    icon: GraduationCap,
  },
];

interface PrepPillar {
  id: string;
  title: string;
  subtitle: string;
  actionTip: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PREP_PILLARS: PrepPillar[] = [
  {
    id: 'conteudos',
    title: 'Conteúdos',
    subtitle: 'Fortaleça a base do Ensino Fundamental',
    actionTip:
      'Dedique atenção especial a Língua Portuguesa, Matemática, Ciências, História e Geografia do seu 9º ano — um bom desempenho escolar ajuda tanto na seleção quanto no 1º ano do IFCE.',
    icon: BookOpen,
  },
  {
    id: 'organizacao',
    title: 'Organização',
    subtitle: 'Cronograma e documentos em dia',
    actionTip:
      'Anote no celular ou caderno todas as datas do edital (inscrição, isenção, resultado e matrícula) e peça seu Histórico Escolar na secretaria da sua escola com antecedência.',
    icon: Clock,
  },
  {
    id: 'exercicios',
    title: 'Exercícios',
    subtitle: 'Pratique resolução de problemas',
    actionTip:
      'Resolver questões práticas de interpretação de texto, raciocínio lógico e matemática básica tira o nervosismo e aumenta sua confiança.',
    icon: PenTool,
  },
  {
    id: 'simulados',
    title: 'Simulados',
    subtitle: 'Treine como funciona a seleção',
    actionTip:
      'Consulte editais anteriores no portal Q-Seleção para conhecer o formato exato exigido pelo IFCE nos últimos anos.',
    icon: Compass,
  },
  {
    id: 'revisao',
    title: 'Revisão',
    subtitle: 'Constância vale mais que pressa',
    actionTip:
      'Revisar 30 a 45 minutos por dia os assuntos que você teve mais dificuldade na escola é muito mais eficiente do que deixar tudo para a última hora.',
    icon: Brain,
  },
];

const NO_FLUFF_LINKS = [
  { label: 'Edital atual', url: OFFICIAL_URLS.editaisVigentes, note: 'Q-Seleção IFCE' },
  {
    label: 'Página oficial do processo seletivo',
    url: OFFICIAL_URLS.sejaNossoAluno,
    note: 'Seja Nosso Aluno',
  },
  { label: 'Portal IFCE', url: OFFICIAL_URLS.portalIFCE, note: 'ifce.edu.br' },
  { label: 'Campus Cedro', url: OFFICIAL_URLS.campusCedro, note: 'ifce.edu.br/cedro' },
  { label: 'Página de inscrições', url: OFFICIAL_URLS.qSelecao, note: 'qselecao.ifce.edu.br' },
  {
    label: 'Calendário (quando disponível)',
    url: OFFICIAL_URLS.calendarioSelecao,
    note: 'Anexo ao edital vigente',
  },
  {
    label: 'Resultado e classificação',
    url: OFFICIAL_URLS.resultadosSelecao,
    note: 'Publicações no Q-Seleção',
  },
];

export const Process: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [checkedPrepIds, setCheckedPrepIds] = useState<string[]>(['organizacao']);

  const togglePrepCheck = (id: string) => {
    setCheckedPrepIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="processo-seletivo"
      aria-labelledby="heading-processo-seletivo"
      className="py-20 sm:py-28 border-b border-white/10 bg-[#090D16]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-3">
            <span>05. Processo Seletivo · Passo a Passo Oficial</span>
          </div>
          <h2
            id="heading-processo-seletivo"
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight [text-wrap:balance]"
          >
            Como entrar no IFCE?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Entender o processo seletivo não precisa ser complicado. Esta é a jornada que todo
            estudante do 9º ano percorre até a matrícula — sempre guiada pelo{' '}
            <strong className="text-white">edital vigente</strong>.
          </p>
        </div>

        {/* 6-Step Visual Journey */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SELECTION_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = idx === activeStepIdx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStepIdx(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                className={`p-6 rounded-2xl border transition-all duration-150 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F9E41] ${
                  isSelected
                    ? 'bg-[#101D2E] border-[#2F9E41]'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-emerald-400">
                      Etapa {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {step.simpleExplanation}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.officialRuleNote}
                  </p>
                  <a
                    href={step.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>{step.linkLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enormous Official Edital CTA Button */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#132A1E] via-[#0F1E2E] to-[#0D1524] border border-[#2F9E41]/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-emerald-400 mb-1">
              PORTA DE ENTRADA PARA A FONTE OFICIAL
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Consulte sempre o Edital Vigente no Q-Seleção
            </h3>
            <p className="mt-1.5 text-sm text-slate-300">
              Datas de inscrição, quantidade exata de vagas, modalidades de cotas e documentos
              obrigatórios dependem exclusivamente do edital aberto no momento da sua inscrição.
            </p>
          </div>

          <a
            href={OFFICIAL_URLS.editaisVigentes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white font-display font-bold text-base sm:text-lg shadow-xl shadow-[#2F9E41]/25 transition-transform active:scale-[0.99] whitespace-nowrap shrink-0 min-h-[56px]"
          >
            <span>VER EDITAL OFICIAL</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Rule 1 Dedicated Block: "Informação oficial, sem enrolação." */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0C1322] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/10">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Informação oficial, sem enrolação.
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                Acesso direto às páginas oficiais do IFCE e do sistema Q-Seleção. Este guia não
                substitui o edital.
              </p>
            </div>
            <span className="font-mono text-xs text-emerald-400">
              Links diretos verificados
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {NO_FLUFF_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#2F9E41]/50 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {item.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 shrink-0 mt-0.5" />
                </div>
                <span className="mt-3 text-xs text-slate-400 font-mono">{item.note}</span>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 13: "VOCÊ TEM MEDO DE NÃO PASSAR?" */}
        <div
          id="preparacao"
          className="mt-24 p-6 sm:p-10 rounded-2xl bg-[#0D1424] border border-white/15"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
                <span>Conversa sincera com quem está no 9º ano</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                Você tem medo de não passar?
              </h3>
              <p className="mt-4 text-lg font-semibold text-emerald-300">
                É normal não saber se você consegue. Mas você pode começar se preparando.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Muitos alunos que hoje estudam no IFCE Campus Cedro também tiveram receio antes de
                fazer a inscrição. O segredo não é ter certeza absoluta de tudo — é dar um passo de
                cada vez com organização.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                <strong className="text-white">Seu checklist pessoal de preparação:</strong>{' '}
                Marque ao lado os pontos que você já quer colocar em prática nesta semana (
                {checkedPrepIds.length} de {PREP_PILLARS.length} marcados).
              </div>

              <div className="mt-6">
                <a
                  href={OFFICIAL_URLS.qSelecao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white font-semibold text-sm transition-colors whitespace-nowrap min-h-[48px]"
                >
                  <span>COMEÇAR A ME PREPARAR</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 5 Interactive Preparation Cards */}
            <div className="lg:col-span-7 space-y-3">
              {PREP_PILLARS.map((item) => {
                const Icon = item.icon;
                const isChecked = checkedPrepIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => togglePrepCheck(item.id)}
                    className={`w-full p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? 'bg-[#122424] border-[#2F9E41]/60 text-white'
                        : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border ${
                        isChecked
                          ? 'bg-[#2F9E41] border-[#2F9E41] text-white'
                          : 'border-white/20 text-transparent'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-bold text-white">
                          {item.title} ·{' '}
                          <span className="font-normal text-slate-300 text-sm">
                            {item.subtitle}
                          </span>
                        </span>
                        <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.actionTip}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
