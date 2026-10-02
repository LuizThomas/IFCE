/**
 * Links Oficiais e Redes Verificadas (officialLinks.ts)
 * Mantendo exclusivamente os links solicitados:
 * 1. Portal Oficial do IFCE / Campus Cedro
 * 2. Instagram Oficial do IFCE Campus Cedro (@ifcecedrooficial)
 * 3. Instagram Estudantil da Turma S6 Informática A (@s6informaticaa)
 */
export const OFFICIAL_URLS = {
  portalIFCE: 'https://ifce.edu.br/',
  campusCedro: 'https://ifce.edu.br/cedro',
  cursosIntegradosCedro: 'https://ifce.edu.br/cedro/cursos/tecnicos/integrados',
  instagramOficialCampus: 'https://www.instagram.com/ifcecedrooficial/',
  instagramTurmaInformatica: 'https://www.instagram.com/s6informaticaa/',
} as const;

export const VERIFIED_COURSE_FACTS = {
  courseName: 'Técnico Integrado em Informática',
  campus: 'IFCE Campus Cedro',
  modality: 'Presencial · Integrado ao Ensino Médio',
  duration: '3 anos',
  workload: '3.400 horas',
  tuition: '100% Gratuito (Instituição Pública Federal)',
  targetAudience: 'Estudantes que estão concluindo o 9º ano',
} as const;
