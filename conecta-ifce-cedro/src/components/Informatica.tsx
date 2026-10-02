import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Network,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  FolderGit2,
  Play,
  CheckCircle2,
  Plus,
  Trash2,
  Sparkles,
} from 'lucide-react';
import { VERIFIED_COURSE_FACTS } from '../data/officialLinks';

interface TechAreaCard {
  id: string;
  title: string;
  shortDescription: string;
  howYouLearnIt: string;
  codePreview: string;
  interactiveOutput: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TECH_AREAS: TechAreaCard[] = [
  {
    id: 'logica',
    title: 'Lógica de programação',
    shortDescription: 'O ponto de partida: ensinar o computador a pensar passo a passo.',
    howYouLearnIt:
      'Você começa do zero absoluto entendendo algoritmos, variáveis e tomada de decisão antes de avançar para códigos avançados.',
    codePreview: `se (nota >= 7.0) {\n  mostrar("Aprovado no IFCE!");\n} senao {\n  mostrar("Vamos revisar juntos!");\n}`,
    interactiveOutput: 'Saída: "Aprovado no IFCE!" (quando nota = 8.5)',
    icon: BrainCircuit,
  },
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    shortDescription: 'Construção de sites modernos e páginas interativas na internet.',
    howYouLearnIt:
      'Você descobre como HTML, CSS e JavaScript funcionam no navegador para criar interfaces completas.',
    codePreview: `<button class="btn-ifce">\n  Quero ser desenvolvedor!\n</button>`,
    interactiveOutput: 'Renderiza um botão funcional e estilizado na tela.',
    icon: Globe,
  },
  {
    id: 'sistemas',
    title: 'Sistemas e Aplicativos',
    shortDescription: 'Criação de programas que resolvem problemas do cotidiano.',
    howYouLearnIt:
      'Você aprende a estruturar funções e módulos que organizam cadastros, cálculos e regras de funcionamento.',
    codePreview: `function criarAluno(nome) {\n  return { nome, curso: "Informática", ano: 1 };\n}`,
    interactiveOutput: 'Retorna: { nome: "Estudante 9º Ano", curso: "Informática", ano: 1 }',
    icon: Code2,
  },
  {
    id: 'banco-de-dados',
    title: 'Banco de dados',
    shortDescription: 'Onde as informações e contas de usuários ficam salvas com segurança.',
    howYouLearnIt:
      'Você aprende a modelar tabelas e fazer consultas estruturadas (como SQL) para buscar e salvar registros.',
    codePreview: `SELECT nome, campus FROM estudantes\nWHERE curso = 'Informática';`,
    interactiveOutput: 'Lista todos os alunos de Informática do Campus Cedro.',
    icon: Database,
  },
  {
    id: 'redes',
    title: 'Redes de computadores',
    shortDescription: 'Como a internet funciona e como os dispositivos conversam.',
    howYouLearnIt:
      'Você entende conexões, servidores, roteadores e como uma mensagem viaja em milissegundos pela rede.',
    codePreview: `ping ifce.edu.br\nResposta de 200.129.x.x: tempo=12ms`,
    interactiveOutput: 'Conexão ativa e estável estabelecida.',
    icon: Network,
  },
  {
    id: 'seguranca',
    title: 'Segurança da informação',
    shortDescription: 'Boas práticas para proteger dados, senhas e sistemas.',
    howYouLearnIt:
      'Conceitos de criptografia, senhas fortes e permissões de acesso para construir softwares seguros.',
    codePreview: `const hash = gerarHashSeguro(senha);\nvalidarAcesso(usuario, hash);`,
    interactiveOutput: 'Acesso seguro validado sem expor a senha em texto puro.',
    icon: ShieldCheck,
  },
  {
    id: 'automacao',
    title: 'Automação e Hardware',
    shortDescription: 'Código que controla sensores e dispositivos inteligentes.',
    howYouLearnIt:
      'Em projetos práticos, a programação pode se conectar a pequenos componentes e automação de tarefas.',
    codePreview: `if (sensorLuz < 50) {\n  acenderIluminacao();\n}`,
    interactiveOutput: 'Sensor acionado: Iluminação ativada automaticamente.',
    icon: Cpu,
  },
  {
    id: 'aplicacoes-mobile',
    title: 'Apps Interativos',
    shortDescription: 'Ferramentas dinâmicas para o dia a dia das pessoas.',
    howYouLearnIt:
      'Unir design visual e programação para produzir aplicativos funcionais que rodam no celular e no computador.',
    codePreview: `const metas = ["Estudar lógica", "Criar meu app"];\nmetas.push("Concluir o curso");`,
    interactiveOutput: 'Lista com 3 metas ativas no aplicativo.',
    icon: Smartphone,
  },
  {
    id: 'projetos-integradores',
    title: 'Projetos em equipe',
    shortDescription: 'Da ideia no papel até a apresentação de um software real.',
    howYouLearnIt:
      'Você e seus colegas desenvolvem projetos práticos para resolver desafios da escola e da comunidade.',
    codePreview: `projeto.definirEquipe(["Você", "Colegas"]);\nprojeto.iniciarDesenvolvimento();`,
    interactiveOutput: 'Projeto iniciado com sucesso no laboratório do IFCE!',
    icon: FolderGit2,
  },
];

const NARRATIVE_STEPS = [
  {
    step: '01',
    text: 'Hoje você pode estar apenas usando aplicativos.',
    sub: 'Rolando feeds, jogando no celular e assistindo a vídeos sem ver o código por trás.',
  },
  {
    step: '02',
    text: 'Amanhã pode entender como eles funcionam.',
    sub: 'Descobrindo que cada botão e sistema é construído com lógica e linhas de código.',
  },
  {
    step: '03',
    text: 'Depois pode criar os seus próprios programas.',
    sub: 'Escrevendo códigos nos laboratórios do IFCE Cedro e vendo suas ideias ganharem vida.',
  },
  {
    step: '04',
    text: 'Um dia, alguém pode estar usando algo que você criou.',
    sub: 'Transformando curiosidade em projetos reais e abrindo as portas do seu futuro.',
  },
];

export const Informatica: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('logica');
  const [evolutionStage, setEvolutionStage] = useState<'antes' | 'depois' | 'mais_tarde'>('antes');
  const [customName, setCustomName] = useState<string>('Estudante do 9º Ano');
  const [miniAppTasks, setMiniAppTasks] = useState<
    Array<{ id: number; text: string; done: boolean }>
  >([
    { id: 1, text: 'Descobrir o que é o IFCE Campus Cedro', done: true },
    { id: 2, text: 'Testar meu primeiro código aqui no site', done: true },
    { id: 3, text: 'Explorar o mini-game Code Run abaixo', done: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState<string>('');

  const selectedArea =
    TECH_AREAS.find((area) => area.id === selectedAreaId) || TECH_AREAS[0];

  const handleAddMiniTask = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newTaskInput.trim();
    if (!trimmed) return;
    setMiniAppTasks((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setNewTaskInput('');
  };

  const toggleMiniTask = (id: number) => {
    setMiniAppTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const removeMiniTask = (id: number) => {
    setMiniAppTasks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section
      id="informatica"
      aria-labelledby="heading-informatica"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header - Clean typography, NO raster image */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-2">
            <span>02. O Grande Destaque · Formação Técnica</span>
          </div>

          <h2
            id="heading-informatica"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]"
          >
            Você não aprende apenas a usar tecnologia.{' '}
            <span className="text-[#4ADE80]">Você aprende a criar.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            No <strong className="text-white">Curso Técnico Integrado em Informática</strong> do
            IFCE Campus Cedro, você cursa o Ensino Médio completo junto com uma formação prática
            em computação — mesmo que nunca tenha programado nada na vida.
          </p>

          {/* Clean Course Specs Bar */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
            <span className="font-semibold text-emerald-400">Dados do Curso em Cedro:</span>
            <span>{VERIFIED_COURSE_FACTS.duration} de duração</span>
            <span aria-hidden="true">·</span>
            <span>{VERIFIED_COURSE_FACTS.workload} presenciais</span>
            <span aria-hidden="true">·</span>
            <span>100% Gratuito</span>
          </div>
        </div>

        {/* 4-Stage Narrative Progression */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {NARRATIVE_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                  <span>Passo {item.step}</span>
                  {idx < NARRATIVE_STEPS.length - 1 && (
                    <span className="text-slate-600 hidden lg:inline" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  “{item.text}”
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 9 Interactive Area Cards & Live Code Terminal */}
        <div className="mt-16">
          <div className="max-w-2xl mb-6">
            <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
              O que você aprende a construir em Informática?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
              Toque nos cards abaixo para testar na prática o que cada área faz:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* 9 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {TECH_AREAS.map((area) => {
                const Icon = area.icon;
                const isSelected = area.id === selectedAreaId;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedAreaId(area.id)}
                    className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer w-full flex flex-col justify-between min-h-[96px] focus-visible:outline-2 focus-visible:outline-[#2F9E41] ${
                      isSelected
                        ? 'bg-[#122130] border-[#2F9E41] text-white'
                        : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? 'text-[#4ADE80]' : 'text-slate-400'
                        }`}
                      />
                      {isSelected && (
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                          Ativo
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="text-xs font-bold text-white leading-snug">
                        {area.title}
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">
                        {area.shortDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Inspector Panel */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#0D1424] border border-white/10 w-full overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2.5 border-b border-white/10">
                <span className="font-semibold text-emerald-400">{selectedArea.title}</span>
                <span className="font-mono text-[11px]">Exemplo interativo</span>
              </div>

              <h4 className="mt-3 font-display text-lg sm:text-xl font-bold text-white">
                {selectedArea.shortDescription}
              </h4>

              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedArea.howYouLearnIt}
              </p>

              {/* Code Preview - safe scrolling */}
              <div className="mt-4 rounded-xl bg-[#060911] border border-white/10 overflow-hidden">
                <div className="px-3 py-1.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>demonstracao.js</span>
                  <span className="text-emerald-400">Código Real</span>
                </div>
                <pre className="p-3 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                  <code>{selectedArea.codePreview}</code>
                </pre>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2">
                <Play className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{selectedArea.interactiveOutput}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: "MAS EU NÃO SEI PROGRAMAR" */}
        <div
          id="nao-sei-programar"
          className="mt-16 sm:mt-20 p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0E1829] to-[#0A101D] border border-white/15 overflow-hidden"
        >
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-1">
              <span>Dúvida comum de quem está no 9º ano</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              “E se eu não souber programar?”
            </h3>
            <p className="mt-2 text-lg sm:text-xl font-semibold text-[#4ADE80]">
              Você não precisa chegar sabendo.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              O curso é feito para quem está saindo do 9º ano. Todo o conteúdo começa do zero. Veja
              a evolução passo a passo:
            </p>
          </div>

          {/* 3-Stage Evolution Buttons */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setEvolutionStage('antes')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer w-full ${
                evolutionStage === 'antes'
                  ? 'bg-[#2F9E41]/15 border-[#2F9E41] text-white'
                  : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                ETAPA 1 · ANTES DE ENTRAR
              </div>
              <div className="mt-1.5 font-mono text-xs sm:text-sm text-white bg-[#060911] p-2 rounded-lg border border-white/10">
                console.log("???");
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Parece outro idioma no início. Isso é 100% normal.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setEvolutionStage('depois')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer w-full ${
                evolutionStage === 'depois'
                  ? 'bg-[#2F9E41]/15 border-[#2F9E41] text-white'
                  : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                ETAPA 2 · PRIMEIRAS AULAS
              </div>
              <div className="mt-1.5 font-mono text-xs sm:text-sm text-emerald-300 bg-[#060911] p-2 rounded-lg border border-white/10">
                console.log("Olá, mundo!");
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Você entende a lógica e escreve seus primeiros comandos.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setEvolutionStage('mais_tarde')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer w-full ${
                evolutionStage === 'mais_tarde'
                  ? 'bg-[#2F9E41]/15 border-[#2F9E41] text-white'
                  : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]'
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                ETAPA 3 · NO CURSO
              </div>
              <div className="mt-1.5 font-mono text-xs sm:text-sm text-sky-300 bg-[#060911] p-2 rounded-lg border border-white/10">
                &lt;AppFuncional /&gt;
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Você já cria aplicativos e interfaces funcionando!
              </p>
            </button>
          </div>

          {/* Interactive Live Sandbox - Mobile safe! */}
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-[#060911] border border-white/10 w-full overflow-hidden">
            {evolutionStage === 'antes' && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full">
                <div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Estado Inicial (Você no 9º ano)
                  </div>
                  <div className="mt-0.5 text-sm sm:text-base font-bold text-white">
                    Todo desenvolvedor começou sem saber nada.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEvolutionStage('depois')}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors text-center"
                >
                  Transformar no meu 1º código →
                </button>
              </div>
            )}

            {evolutionStage === 'depois' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label
                    htmlFor="student-name-input"
                    className="block text-xs font-mono text-emerald-400 mb-1.5"
                  >
                    Digite seu nome para atualizar o código:
                  </label>
                  <input
                    id="student-name-input"
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Seu nome"
                    maxLength={30}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1626] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#2F9E41]"
                  />
                  <div className="mt-2 font-mono text-[11px] sm:text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/10 overflow-x-auto">
                    <code>
                      console.log("Olá, mundo! Sou{' '}
                      <span className="text-emerald-400">{customName || 'Estudante'}</span>!");
                    </code>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0D1627] border border-emerald-500/30 flex flex-col justify-between">
                  <div className="text-[11px] font-mono text-emerald-400">
                    Saída no Terminal:
                  </div>
                  <div className="my-2 text-sm sm:text-base font-bold text-white break-words">
                    “Olá, mundo! Sou {customName || 'Estudante'}!”
                  </div>
                  <button
                    type="button"
                    onClick={() => setEvolutionStage('mais_tarde')}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer text-left pt-2 border-t border-white/10"
                  >
                    Ver Etapa 3 (Aplicativo real) →
                  </button>
                </div>
              </div>
            )}

            {evolutionStage === 'mais_tarde' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-5 space-y-1.5">
                  <div className="text-[11px] font-mono text-emerald-400">
                    Etapa 3 · Seu Primeiro Mini-Aplicativo
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Organizador de Metas do Estudante
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Você aprende a criar formulários e listas interativas. Teste adicionar uma nova
                    meta abaixo:
                  </p>
                </div>

                <div className="md:col-span-7 p-3.5 rounded-xl bg-[#0D1525] border border-white/15 w-full">
                  <form onSubmit={handleAddMiniTask} className="flex flex-col sm:flex-row gap-2 mb-3">
                    <input
                      type="text"
                      value={newTaskInput}
                      onChange={(e) => setNewTaskInput(e.target.value)}
                      placeholder="Nova meta (ex: Aprender Python)..."
                      className="w-full flex-1 px-3 py-1.5 rounded-lg bg-[#060911] border border-white/15 text-xs text-white focus:outline-none focus:border-[#2F9E41]"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold cursor-pointer shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Adicionar</span>
                    </button>
                  </form>

                  <ul className="space-y-1.5">
                    {miniAppTasks.map((task) => (
                      <li
                        key={task.id}
                        className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/10"
                      >
                        <button
                          type="button"
                          onClick={() => toggleMiniTask(task.id)}
                          className="flex items-center gap-2 text-left text-xs text-white cursor-pointer flex-1 min-w-0"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              task.done ? 'text-[#4ADE80]' : 'text-slate-500'
                            }`}
                          />
                          <span className={`truncate ${task.done ? 'line-through text-slate-400' : ''}`}>
                            {task.text}
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => removeMiniTask(task.id)}
                          className="p-1 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/10 w-full">
            <p className="text-xs sm:text-sm font-semibold text-white">
              “Você não precisa saber tudo para começar. Só precisa começar.”
            </p>
            <a
              href="#code-run"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-emerald-300 transition-colors text-center"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jogar Code Run ↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
