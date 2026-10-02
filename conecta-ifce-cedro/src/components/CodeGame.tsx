import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  RotateCcw,
  Trash2,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

type Direction = 'E' | 'S' | 'W' | 'N';

export type CommandType =
  | 'MOVE()'
  | 'TURN_RIGHT()'
  | 'TURN_LEFT()'
  | 'JUMP()'
  | 'REPEAT_2(MOVE)'
  | 'REPEAT_3(MOVE)'
  | 'IF_OBSTACLE_JUMP()';

interface GridPos {
  x: number;
  y: number;
}

interface LevelConfig {
  level: number;
  title: string;
  conceptTag: string;
  description: string;
  hint: string;
  gridSize: number;
  start: GridPos;
  startDir: Direction;
  goal: GridPos;
  walls: GridPos[];
  jumpableObstacles: GridPos[];
  availableCommands: CommandType[];
  recommendedSolution: CommandType[];
}

const LEVELS: LevelConfig[] = [
  {
    level: 1,
    title: 'Movimentação Simples',
    conceptTag: 'Sequência lógica',
    description:
      'Leve o estudante até o laboratório verde usando comandos de avançar e virar.',
    hint: 'Avance 2 casas para a direita, vire para a direita e avance mais 2 casas.',
    gridSize: 5,
    start: { x: 0, y: 1 },
    startDir: 'E',
    goal: { x: 2, y: 3 },
    walls: [
      { x: 0, y: 3 },
      { x: 1, y: 3 },
      { x: 3, y: 1 },
    ],
    jumpableObstacles: [],
    availableCommands: ['MOVE()', 'TURN_RIGHT()', 'TURN_LEFT()'],
    recommendedSolution: ['MOVE()', 'MOVE()', 'TURN_RIGHT()', 'MOVE()', 'MOVE()'],
  },
  {
    level: 2,
    title: 'Loops (Repetição)',
    conceptTag: 'Economizando código',
    description:
      'Use REPEAT_3(MOVE) para andar 3 casas de uma só vez sem digitar comandos repetidos.',
    hint: 'Use REPEAT_3(MOVE), vire à direita e use REPEAT_3(MOVE) de novo.',
    gridSize: 5,
    start: { x: 0, y: 0 },
    startDir: 'E',
    goal: { x: 3, y: 3 },
    walls: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ],
    jumpableObstacles: [],
    availableCommands: ['MOVE()', 'REPEAT_3(MOVE)', 'TURN_RIGHT()', 'TURN_LEFT()'],
    recommendedSolution: ['REPEAT_3(MOVE)', 'TURN_RIGHT()', 'REPEAT_3(MOVE)'],
  },
  {
    level: 3,
    title: 'Condições (Decisão)',
    conceptTag: 'Se / Então',
    description:
      'Há um bloqueio laranja no caminho! Use IF_OBSTACLE_JUMP() para saltá-lo.',
    hint: 'Avance com MOVE(), use IF_OBSTACLE_JUMP() para saltar o obstáculo e finalize com MOVE().',
    gridSize: 5,
    start: { x: 0, y: 2 },
    startDir: 'E',
    goal: { x: 4, y: 2 },
    walls: [
      { x: 2, y: 1 },
      { x: 2, y: 3 },
    ],
    jumpableObstacles: [{ x: 2, y: 2 }],
    availableCommands: ['MOVE()', 'IF_OBSTACLE_JUMP()', 'TURN_RIGHT()', 'TURN_LEFT()'],
    recommendedSolution: ['MOVE()', 'IF_OBSTACLE_JUMP()', 'MOVE()'],
  },
  {
    level: 4,
    title: 'Desafio Integrado',
    conceptTag: 'Desafio Final',
    description:
      'Combine repetição, curvas e salto para concluir seu primeiro programa no IFCE!',
    hint: 'Comece com REPEAT_2(MOVE), vire à direita com TURN_RIGHT(), salte com IF_OBSTACLE_JUMP() e finalize com MOVE().',
    gridSize: 5,
    start: { x: 0, y: 0 },
    startDir: 'E',
    goal: { x: 2, y: 3 },
    walls: [
      { x: 3, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
    ],
    jumpableObstacles: [{ x: 2, y: 1 }],
    availableCommands: [
      'MOVE()',
      'REPEAT_2(MOVE)',
      'TURN_RIGHT()',
      'TURN_LEFT()',
      'IF_OBSTACLE_JUMP()',
      'JUMP()',
    ],
    recommendedSolution: [
      'REPEAT_2(MOVE)',
      'TURN_RIGHT()',
      'IF_OBSTACLE_JUMP()',
      'MOVE()',
    ],
  },
];

const DIR_DELTAS: Record<Direction, GridPos> = {
  E: { x: 1, y: 0 },
  S: { x: 0, y: 1 },
  W: { x: -1, y: 0 },
  N: { x: 0, y: -1 },
};

const TURN_RIGHT_MAP: Record<Direction, Direction> = {
  E: 'S',
  S: 'W',
  W: 'N',
  N: 'E',
};

const TURN_LEFT_MAP: Record<Direction, Direction> = {
  E: 'N',
  N: 'W',
  W: 'S',
  S: 'E',
};

const DIR_ARROW: Record<Direction, string> = {
  E: '→',
  S: '↓',
  W: '←',
  N: '↑',
};

export const CodeGame: React.FC = () => {
  const [currentLevelIdx, setCurrentLevelIdx] = useState<number>(0);
  const levelConfig = LEVELS[currentLevelIdx];

  const [program, setProgram] = useState<CommandType[]>(['MOVE()', 'MOVE()']);
  const [playerPos, setPlayerPos] = useState<GridPos>(levelConfig.start);
  const [playerDir, setPlayerDir] = useState<Direction>(levelConfig.startDir);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeLineIdx, setActiveLineIdx] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'idle' | 'running' | 'success' | 'error';
    text: string;
  }>({
    type: 'idle',
    text: 'Monte seus comandos e clique em EXECUTAR.',
  });
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showHint, setShowHint] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    const cfg = LEVELS[currentLevelIdx];
    setPlayerPos(cfg.start);
    setPlayerDir(cfg.startDir);
    setIsRunning(false);
    setActiveLineIdx(null);
    setShowHint(false);
    setProgram([]);
    setStatusMessage({
      type: 'idle',
      text: `Nível ${cfg.level}: adicione comandos e clique em EXECUTAR.`,
    });
    return () => clearTimer();
  }, [currentLevelIdx]);

  const resetPlayerState = () => {
    clearTimer();
    setPlayerPos(levelConfig.start);
    setPlayerDir(levelConfig.startDir);
    setIsRunning(false);
    setActiveLineIdx(null);
    setStatusMessage({
      type: 'idle',
      text: 'Posição reiniciada. Pronto para executar.',
    });
  };

  const addCommand = (cmd: CommandType) => {
    if (isRunning) return;
    if (program.length >= 10) {
      setStatusMessage({
        type: 'error',
        text: 'Limite de 10 linhas. Tente usar loops ou remover algum comando.',
      });
      return;
    }
    setProgram((prev) => [...prev, cmd]);
  };

  const removeCommandAt = (idx: number) => {
    if (isRunning) return;
    setProgram((prev) => prev.filter((_, i) => i !== idx));
  };

  const loadSampleSolution = () => {
    if (isRunning) return;
    resetPlayerState();
    setProgram([...levelConfig.recommendedSolution]);
    setStatusMessage({
      type: 'idle',
      text: 'Solução carregada! Clique em EXECUTAR para ver.',
    });
  };

  const isWall = (x: number, y: number) =>
    levelConfig.walls.some((w) => w.x === x && w.y === y);

  const isJumpable = (x: number, y: number) =>
    levelConfig.jumpableObstacles.some((o) => o.x === x && o.y === y);

  const inBounds = (x: number, y: number) =>
    x >= 0 && x < levelConfig.gridSize && y >= 0 && y < levelConfig.gridSize;

  const runProgram = () => {
    if (program.length === 0) {
      setStatusMessage({
        type: 'error',
        text: 'Adicione pelo menos um comando antes de executar.',
      });
      return;
    }

    clearTimer();
    setIsRunning(true);
    setPlayerPos(levelConfig.start);
    setPlayerDir(levelConfig.startDir);
    setActiveLineIdx(0);
    setStatusMessage({
      type: 'running',
      text: 'Executando código linha por linha...',
    });

    interface SimFrame {
      lineIndex: number;
      pos: GridPos;
      dir: Direction;
      error?: string;
    }

    const frames: SimFrame[] = [];
    let curPos: GridPos = { ...levelConfig.start };
    let curDir: Direction = levelConfig.startDir;

    const tryMoveOne = (lineIndex: number): boolean => {
      const delta = DIR_DELTAS[curDir];
      const nx = curPos.x + delta.x;
      const ny = curPos.y + delta.y;

      if (!inBounds(nx, ny)) {
        frames.push({
          lineIndex,
          pos: { ...curPos },
          dir: curDir,
          error: 'Limite do tabuleiro atingido!',
        });
        return false;
      }
      if (isWall(nx, ny)) {
        frames.push({
          lineIndex,
          pos: { ...curPos },
          dir: curDir,
          error: 'Bloqueio! Há uma parede nessa direção.',
        });
        return false;
      }
      if (isJumpable(nx, ny)) {
        frames.push({
          lineIndex,
          pos: { ...curPos },
          dir: curDir,
          error: 'Obstáculo laranja! Use IF_OBSTACLE_JUMP() para saltar.',
        });
        return false;
      }

      curPos = { x: nx, y: ny };
      frames.push({ lineIndex, pos: { ...curPos }, dir: curDir });
      return true;
    };

    const tryJump = (lineIndex: number): boolean => {
      const delta = DIR_DELTAS[curDir];
      const midX = curPos.x + delta.x;
      const midY = curPos.y + delta.y;
      const landX = curPos.x + delta.x * 2;
      const landY = curPos.y + delta.y * 2;

      if (!inBounds(landX, landY) || isWall(landX, landY)) {
        frames.push({
          lineIndex,
          pos: { ...curPos },
          dir: curDir,
          error: 'Sem espaço livre para pousar após o salto!',
        });
        return false;
      }
      if (isWall(midX, midY)) {
        frames.push({
          lineIndex,
          pos: { ...curPos },
          dir: curDir,
          error: 'Não é possível saltar parede alta.',
        });
        return false;
      }

      curPos = { x: landX, y: landY };
      frames.push({ lineIndex, pos: { ...curPos }, dir: curDir });
      return true;
    };

    for (let i = 0; i < program.length; i++) {
      const cmd = program[i];
      if (cmd === 'MOVE()') {
        if (!tryMoveOne(i)) break;
      } else if (cmd === 'REPEAT_2(MOVE)') {
        if (!tryMoveOne(i)) break;
        if (!tryMoveOne(i)) break;
      } else if (cmd === 'REPEAT_3(MOVE)') {
        if (!tryMoveOne(i)) break;
        if (!tryMoveOne(i)) break;
        if (!tryMoveOne(i)) break;
      } else if (cmd === 'TURN_RIGHT()') {
        curDir = TURN_RIGHT_MAP[curDir];
        frames.push({ lineIndex: i, pos: { ...curPos }, dir: curDir });
      } else if (cmd === 'TURN_LEFT()') {
        curDir = TURN_LEFT_MAP[curDir];
        frames.push({ lineIndex: i, pos: { ...curPos }, dir: curDir });
      } else if (cmd === 'JUMP()') {
        if (!tryJump(i)) break;
      } else if (cmd === 'IF_OBSTACLE_JUMP()') {
        const delta = DIR_DELTAS[curDir];
        const nextX = curPos.x + delta.x;
        const nextY = curPos.y + delta.y;
        if (isJumpable(nextX, nextY)) {
          if (!tryJump(i)) break;
        } else {
          if (!tryMoveOne(i)) break;
        }
      }
    }

    let stepIndex = 0;
    const playNextFrame = () => {
      if (stepIndex >= frames.length) {
        setIsRunning(false);
        setActiveLineIdx(null);
        const lastFrame = frames[frames.length - 1];
        if (
          lastFrame &&
          !lastFrame.error &&
          lastFrame.pos.x === levelConfig.goal.x &&
          lastFrame.pos.y === levelConfig.goal.y
        ) {
          setStatusMessage({
            type: 'success',
            text: `Incrível! Nível ${levelConfig.level} concluído com sucesso!`,
          });
          setCompletedLevels((prev) =>
            prev.includes(levelConfig.level) ? prev : [...prev, levelConfig.level]
          );
        } else if (lastFrame && !lastFrame.error) {
          setStatusMessage({
            type: 'error',
            text: 'O programa terminou, mas você não chegou ao objetivo verde. Tente ajustar os passos!',
          });
        }
        return;
      }

      const frame = frames[stepIndex];
      setActiveLineIdx(frame.lineIndex);
      setPlayerPos(frame.pos);
      setPlayerDir(frame.dir);

      if (frame.error) {
        setIsRunning(false);
        setStatusMessage({
          type: 'error',
          text: frame.error,
        });
        return;
      }

      stepIndex++;
      timerRef.current = window.setTimeout(playNextFrame, 400);
    };

    timerRef.current = window.setTimeout(playNextFrame, 250);
  };

  const isCurrentLevelWon = statusMessage.type === 'success';

  return (
    <section
      id="code-run"
      aria-labelledby="heading-code-run"
      className="py-16 sm:py-24 border-b border-white/10 bg-[#0B101C] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-medium text-emerald-400 mb-1.5">
              <span>03. Desafio Interativo · Experimente Programar</span>
            </div>
            <h2
              id="heading-code-run"
              className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight"
            >
              CODE RUN — Seu Primeiro Programa
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Programar é ensinar o computador a resolver um desafio passo a passo. Escolha os comandos
              e clique em <strong className="text-white">EXECUTAR</strong>.
            </p>
          </div>

          {/* Level Tabs - Mobile-friendly wrapping */}
          <div
            role="tablist"
            aria-label="Níveis do jogo Code Run"
            className="flex flex-wrap gap-1.5 w-full sm:w-auto"
          >
            {LEVELS.map((lvl, idx) => {
              const isSelected = idx === currentLevelIdx;
              const isDone = completedLevels.includes(lvl.level);
              return (
                <button
                  key={lvl.level}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setCurrentLevelIdx(idx)}
                  className={`flex-1 sm:flex-initial px-3 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap min-h-[40px] ${
                    isSelected
                      ? 'bg-[#2F9E41] border-[#2F9E41] text-white'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]'
                  }`}
                >
                  <span>Nível {lvl.level}</span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Zone Sandbox - Fully Mobile Safe */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Zone: Board Stage (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-6 rounded-2xl bg-[#070B13] border border-white/15 flex flex-col justify-between w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10 w-full">
              <div>
                <div className="text-[11px] font-mono text-emerald-400">
                  Nível {levelConfig.level} de 4 · {levelConfig.conceptTag}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {levelConfig.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowHint((prev) => !prev)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-amber-300 transition-colors cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                <span>{showHint ? 'Ocultar dica' : 'Ver dica'}</span>
              </button>
            </div>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {levelConfig.description}
            </p>

            {showHint && (
              <div className="mt-3 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>
                  <strong>Dica:</strong> {levelConfig.hint}
                </span>
                <button
                  type="button"
                  onClick={loadSampleSolution}
                  className="w-full sm:w-auto px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-100 font-semibold cursor-pointer text-center"
                >
                  Carregar solução pronta
                </button>
              </div>
            )}

            {/* 5x5 Board - Fitted for narrow mobile viewports */}
            <div className="my-5 flex justify-center w-full">
              <div
                className="grid grid-cols-5 gap-1.5 sm:gap-2 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] aspect-square p-2 sm:p-2.5 rounded-2xl bg-[#0D1422] border border-white/10"
                role="region"
                aria-label="Tabuleiro do desafio"
              >
                {Array.from({ length: levelConfig.gridSize * levelConfig.gridSize }).map(
                  (_, cellIdx) => {
                    const x = cellIdx % levelConfig.gridSize;
                    const y = Math.floor(cellIdx / levelConfig.gridSize);
                    const hasPlayer = playerPos.x === x && playerPos.y === y;
                    const isGoalCell =
                      levelConfig.goal.x === x && levelConfig.goal.y === y;
                    const isWallCell = isWall(x, y);
                    const isObstacleCell = isJumpable(x, y);

                    return (
                      <div
                        key={`${x}-${y}`}
                        className={`relative rounded-lg border flex items-center justify-center select-none transition-colors ${
                          isWallCell
                            ? 'bg-slate-800 border-slate-700'
                            : isObstacleCell
                            ? 'bg-amber-500/20 border-amber-500/50'
                            : isGoalCell
                            ? 'bg-[#2F9E41]/25 border-[#4ADE80]'
                            : 'bg-[#090E1A] border-white/10'
                        }`}
                      >
                        {isWallCell && (
                          <span className="font-mono text-[9px] text-slate-400 font-bold">
                            PAREDE
                          </span>
                        )}

                        {isObstacleCell && !hasPlayer && (
                          <span className="font-mono text-[9px] text-amber-300 font-bold">
                            SALTAR
                          </span>
                        )}

                        {isGoalCell && !hasPlayer && (
                          <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#4ADE80]">
                            IFCE
                          </span>
                        )}

                        {hasPlayer && (
                          <motion.div
                            layoutId="code-run-player"
                            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                            className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#2F9E41] text-white font-mono font-bold text-sm sm:text-base flex items-center justify-center shadow-md shadow-[#2F9E41]/40 border border-white/30 z-10"
                            aria-label={`Robô em ${x},${y}`}
                          >
                            {DIR_ARROW[playerDir]}
                          </motion.div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Status Feedback Bar - Mobile Safe */}
            <div
              className={`p-3 rounded-xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 w-full ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : statusMessage.type === 'error'
                  ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  : 'bg-white/[0.03] border-white/10 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {statusMessage.type === 'success' && (
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                )}
                {statusMessage.type === 'error' && (
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
                <span className="leading-snug">{statusMessage.text}</span>
              </div>

              {isCurrentLevelWon && currentLevelIdx < LEVELS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentLevelIdx((prev) => prev + 1)}
                  className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold whitespace-nowrap cursor-pointer text-center"
                >
                  Próximo Nível →
                </button>
              )}
            </div>
          </div>

          {/* Right Zone: Command Palette & Code Sequence (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-[#0E1626] border border-white/15 flex flex-col justify-between w-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  1. Toque para adicionar comandos:
                </h4>
                <button
                  type="button"
                  onClick={loadSampleSolution}
                  className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  Exemplo pronto
                </button>
              </div>

              {/* Command chips - wrap cleanly */}
              <div className="flex flex-wrap gap-1.5 w-full">
                {levelConfig.availableCommands.map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    disabled={isRunning}
                    onClick={() => addCommand(cmd)}
                    className="px-2.5 py-1.5 rounded-lg bg-[#162238] hover:bg-[#1E2F4D] border border-emerald-500/30 font-mono text-[11px] sm:text-xs text-emerald-300 font-semibold transition-colors cursor-pointer disabled:opacity-50 min-h-[34px]"
                  >
                    + {cmd}
                  </button>
                ))}
              </div>

              {/* Code Sequence Box */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    2. Seu programa ({program.length}/10 linhas):
                  </span>
                  <button
                    type="button"
                    disabled={isRunning || program.length === 0}
                    onClick={() => {
                      resetPlayerState();
                      setProgram([]);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-400 transition-colors cursor-pointer disabled:opacity-40"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Limpar</span>
                  </button>
                </div>

                <div className="min-h-[180px] max-h-[220px] overflow-y-auto p-3 rounded-xl bg-[#050811] border border-white/10 font-mono text-xs space-y-1 w-full">
                  {program.length === 0 ? (
                    <div className="h-36 flex flex-col items-center justify-center text-center text-slate-500 px-3">
                      <span>Nenhum comando adicionado.</span>
                      <span className="mt-1 text-[10px]">
                        Toque nos botões verdes acima para montar seu código.
                      </span>
                    </div>
                  ) : (
                    program.map((cmd, idx) => {
                      const isExecutingThisLine = activeLineIdx === idx;
                      return (
                        <div
                          key={`${cmd}-${idx}`}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition-colors ${
                            isExecutingThisLine
                              ? 'bg-[#2F9E41]/30 border-[#4ADE80] text-white'
                              : 'bg-white/[0.03] border-white/5 text-emerald-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500 select-none text-[11px]">
                              {idx + 1}
                            </span>
                            <span className="font-semibold text-xs">{cmd};</span>
                          </div>
                          <button
                            type="button"
                            disabled={isRunning}
                            onClick={() => removeCommandAt(idx)}
                            className="text-slate-500 hover:text-rose-400 px-1 text-xs cursor-pointer"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Execution Controls - Mobile safe: wraps nicely on mobile without pushing right */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
              <button
                type="button"
                disabled={isRunning}
                onClick={runProgram}
                className="w-full flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2F9E41] hover:bg-[#258234] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer min-h-[46px] text-center"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>EXECUTAR</span>
              </button>

              <button
                type="button"
                onClick={resetPlayerState}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer min-h-[46px] text-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Completion Banner - Mobile-safe */}
        {(isCurrentLevelWon || completedLevels.length > 0) && (
          <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#112A1D] via-[#0F222A] to-[#0E1626] border border-[#2F9E41]/50 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{completedLevels.length} de 4 níveis concluídos</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Você acabou de programar.
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Agora imagine aprender a construir jogos, aplicativos e sistemas de verdade no IFCE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto shrink-0">
              {currentLevelIdx < LEVELS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentLevelIdx((prev) => prev + 1)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold cursor-pointer text-center whitespace-nowrap min-h-[40px]"
                >
                  Próximo Nível ({currentLevelIdx + 2}) →
                </button>
              )}
              <a
                href="#informatica"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F9E41] hover:bg-[#258234] text-white text-xs font-semibold text-center whitespace-nowrap min-h-[40px]"
              >
                <span>CONHECER INFORMÁTICA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
