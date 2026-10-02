import React, { useState } from 'react';
import {
  Sun,
  BookOpen,
  Coffee,
  Monitor,
  FolderGit2,
  Users,
  Code,
  Puzzle,
  Layout,
  Server,
  Cpu,
  Presentation,
  Info,
} from 'lucide-react';
import projectsConceptImg from '../assets/images/student_projects_concept_1790904019469.jpg';

interface DayMoment {
  time: string;
  title: string;
  subtitle: string;
  story: string;
  icon: React.ComponentType<{ className?: string }>;
}

const HYPOTHETICAL_DAY: DayMoment[] = [
  {
    time: '07:00',
    title: 'Chegada',
    subtitle: 'Encontro com a turma no Campus Cedro',
    story:
      'Você chega ao campus, encontra seus amigos de Cedro e das cidades vizinhas, revisa o que terá no dia e segue para a primeira aula.',
    icon: Sun,
  },
  {
    time: '07:30',
    title: 'Aulas',
    subtitle: 'Ensino Médio conectado à formação técnica',
    story:
      'Em um horário você pode estar aprendendo Física, História ou Matemática, e logo depois aplicando raciocínio lógico em uma disciplina técnica.',
    icon: BookOpen,
  },
  {
    time: '09:30',
    title: 'Intervalo',
    subtitle: 'Pausa, conversa e troca de ideias',
    story:
      'Momento de descansar, lanchar, conversar nos corredores e trocar dicas sobre trabalhos, jogos ou eventos do campus.',
    icon: Coffee,
  },
  {
    time: '10:00',
    title: 'Laboratório',
    subtitle: 'Mão no código e prática no computador',
    story:
      'Em vez de apenas copiar do quadro, você abre o editor de código no laboratório de Informática, testa algoritmos, cria páginas web e tira dúvidas com o professor.',
    icon: Monitor,
  },
  {
    time: '13:30',
    title: 'Projetos',
    subtitle: 'Biblioteca, grupos de estudo e pesquisa',
    story:
      'No contraturno ou nos horários de estudo, você pode avançar em um projeto integrador em equipe, usar a biblioteca ou participar de iniciação científica.',
    icon: FolderGit2,
  },
  {
    time: '16:00',
    title: 'Convivência',
    subtitle: 'Esporte, cultura e vida estudantil',
    story:
      'Antes de encerrar o dia, ainda há espaço para atividades esportivas, eventos estudantis e aquela sensação de estar construindo seu próprio futuro.',
    icon: Users,
  },
];

interface ExperienceCard {
  id: string;
  title: string;
  description: string;
  practicalExample: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: 'projetos',
    title: 'Projetos',
    description: 'Desenvolvimento de soluções completas do planejamento à entrega.',
    practicalExample:
      'Criar um sistema web para organizar o empréstimo de materiais de laboratório ou eventos escolares.',
    icon: Code,
  },
  {
    id: 'problemas-reais',
    title: 'Problemas reais',
    description: 'Olhar para a escola ou para a cidade e criar ferramentas úteis.',
    practicalExample:
      'Desenvolver um guia digital informativo (como este TCC!) para ajudar novos estudantes do 9º ano.',
    icon: Puzzle,
  },
  {
    id: 'interfaces',
    title: 'Interfaces',
    description: 'Planejamento visual de telas fáceis de usar no celular e no computador.',
    practicalExample:
      'Desenhar protótipos modernos pensando em cores, tipografia, acessibilidade e experiência do usuário.',
    icon: Layout,
  },
  {
    id: 'sistemas',
    title: 'Sistemas',
    description: 'Construção da lógica e do armazenamento de dados por trás da tela.',
    practicalExample:
      'Programar o cadastro, a busca e os relatórios de uma aplicação funcional.',
    icon: Server,
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    description: 'Experimentação com linguagens, ferramentas modernas e redes.',
    practicalExample:
      'Aprender a usar controle de versão, configurar redes locais e explorar novas tecnologias.',
    icon: Cpu,
  },
  {
    id: 'equipe',
    title: 'Trabalho em equipe',
    description: 'Divisão de tarefas como acontece nas empresas de tecnologia.',
    practicalExample:
      'Um colega foca no design da interface, outro na lógica do banco de dados e todos constroem juntos.',
    icon: Users,
  },
  {
    id: 'apresentacoes',
    title: 'Apresentações',
    description: 'Comunicação clara para mostrar suas ideias em feiras e seminários.',
    practicalExample:
      'Apresentar seu projeto funcionando em eventos acadêmicos e trabalhos de conclusão.',
    icon: Presentation,
  },
];

export const Projects: React.FC = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(3);
  const [selectedExpId, setSelectedExpId] = useState<string>('problemas-reais');
  const [imgError, setImgError] = useState(false);

  const activeMoment = HYPOTHETICAL_DAY[selectedDayIdx];
  const activeExp =
    EXPERIENCE_CARDS.find((c) => c.id === selectedExpId) || EXPERIENCE_CARDS[0];

  return (
    <section
      id="projetos"
      aria-labelledby="heading-projetos"
      className="py-20 sm:py-28 border-b border-white/10 bg-[#0B101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION 14: "COMO É SER ALUNO?" */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl">
              <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-3">
                <span>06. Cotidiano Estudantil · Experiência no Campus</span>
              </div>
              <h2
                id="heading-projetos"
                className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight"
              >
                Como é ser aluno na prática?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                Estudar em um curso técnico integrado é viver uma rotina dinâmica que mistura sala
                de aula, laboratórios e convivência. Clique nos horários abaixo para imaginar um dia
                no campus:
              </p>
            </div>

            {/* Explicit Disclaimer required by prompt */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 flex items-center gap-2 max-w-sm shrink-0">
              <Info className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Representação ilustrativa de uma jornada estudantil (não corresponde a uma grade
                horária oficial).
              </span>
            </div>
          </div>

          {/* Interactive Timeline Selector */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {HYPOTHETICAL_DAY.map((moment, idx) => {
              const Icon = moment.icon;
              const isSelected = idx === selectedDayIdx;
              return (
                <button
                  key={moment.title}
                  type="button"
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[112px] ${
                    isSelected
                      ? 'bg-[#122232] border-[#2F9E41] text-white'
                      : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      {moment.time}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-bold text-white">{moment.title}</div>
                    <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {moment.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Day Moment Story Card */}
          <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-[#0E1627] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>Momento {activeMoment.time}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMoment.title}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                {activeMoment.subtitle}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeMoment.story}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setSelectedDayIdx((prev) =>
                    prev === 0 ? HYPOTHETICAL_DAY.length - 1 : prev - 1
                  )
                }
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 cursor-pointer"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedDayIdx((prev) => (prev + 1) % HYPOTHETICAL_DAY.length)
                }
                className="px-3.5 py-2 rounded-lg bg-[#2F9E41] hover:bg-[#258234] text-xs font-semibold text-white cursor-pointer"
              >
                Próximo momento →
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 15: "APRENDER FAZENDO." */}
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
                <span>07. Projetos e Experiências</span>
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                APRENDER FAZENDO.
              </h3>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                Estudar Informática não significa apenas ficar sentado assistindo aula. Você aprende
                a transformar ideias em projetos reais, trabalhando em equipe e construindo soluções
                que podem ser apresentadas para toda a escola e comunidade.
              </p>

              {/* 7 Interactive Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCE_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  const isSelected = card.id === selectedExpId;
                  const isLastOdd = idx === EXPERIENCE_CARDS.length - 1;
                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setSelectedExpId(card.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isLastOdd ? 'sm:col-span-2' : ''
                      } ${
                        isSelected
                          ? 'bg-[#132334] border-[#2F9E41] text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-white">{card.title}</span>
                        <Icon
                          className={`w-4 h-4 ${
                            isSelected ? 'text-[#4ADE80]' : 'text-slate-400'
                          }`}
                        />
                      </div>
                      <p className="text-xs text-slate-400">{card.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Visual Showcase + Active Example */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0D1526]">
                {!imgError ? (
                  <img
                    src={projectsConceptImg}
                    alt="Ilustração isométrica de projetos estudantis de tecnologia e protótipos interativos"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-[#102620] to-[#0D1526] flex items-center justify-center">
                    <FolderGit2 className="w-14 h-14 text-emerald-400 opacity-60" />
                  </div>
                )}
                <div className="p-4 bg-[#090E1A] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Ilustração conceitual · Laboratório de Projetos</span>
                  <span className="font-mono text-emerald-400">Prática</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E1729] border border-emerald-500/30">
                <div className="text-xs font-mono text-emerald-400">
                  Exemplo prático · {activeExp.title}
                </div>
                <h4 className="mt-1.5 text-lg font-bold text-white">
                  {activeExp.description}
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {activeExp.practicalExample}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
