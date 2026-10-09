export interface OfficialLinkItem {
  id: string;
  title: string;
  description: string;
  authorityNote: string;
  category: 'processo_seletivo' | 'institucional' | 'cursos' | 'redes_sociais';
  url: string;
  ctaLabel: string;
  dependsOnEdital: boolean;
}

export const OFFICIAL_URLS = {
  campusCedro: 'https://ifce.edu.br/cedro',
  portalIFCE: 'https://ifce.edu.br/',
  qSelecao: 'https://qselecao.ifce.edu.br/',
  editaisVigentes: 'https://qselecao.ifce.edu.br/lista_editais.aspx',
  sejaNossoAluno: 'https://ifce.edu.br/cedro/noticias',
  calendarioSelecao: 'https://qselecao.ifce.edu.br/lista_editais.aspx',
  resultadosSelecao: 'https://qselecao.ifce.edu.br/lista_editais.aspx',
  todosCursosCedro: 'https://ifce.edu.br/cedro/cursos',
  instagramOficialCampus: 'https://www.instagram.com/ifcecedrooficial/',
  instagramTurmaInformatica: 'https://www.instagram.com/s6informaticaa/',
};

export const VERIFIED_COURSE_FACTS = {
  courseName: 'Técnico Integrado em Informática',
  campus: 'IFCE Campus Cedro',
  modality: 'Integrado ao Ensino Médio',
  duration: '3 anos',
  workload: '3.400 horas',
  cost: '100% gratuito (instituição pública federal)',
  targetAudience: 'Estudantes concluintes do 9º ano do Ensino Fundamental',
  otherIntegratedCourses: [
    {
      name: 'Eletrotécnica',
      modality: 'Técnico Integrado ao Ensino Médio',
      officialUrl: 'https://ifce.edu.br/cedro/cursos',
    },
    {
      name: 'Mecânica',
      modality: 'Técnico Integrado ao Ensino Médio',
      officialUrl: 'https://ifce.edu.br/cedro/cursos',
    },
  ],
};

export const OFFICIAL_LINKS_LIST: OfficialLinkItem[] = [
  {
    id: 'edital',
    title: 'Editais no Q-Seleção',
    description:
      'Consulte os editais oficiais de seleção do IFCE com o número de vagas, requisitos e cronograma.',
    authorityNote: 'Sistema Oficial Q-Seleção do IFCE',
    category: 'processo_seletivo',
    url: OFFICIAL_URLS.editaisVigentes,
    ctaLabel: 'Consultar editais no Q-Seleção',
    dependsOnEdital: true,
  },
  {
    id: 'campus-cedro',
    title: 'Portal Oficial do Campus Cedro',
    description:
      'Informações institucionais, notícias acadêmicas, editais locais e avisos da comunidade do Cedro.',
    authorityNote: 'Site institucional oficial (ifce.edu.br/cedro)',
    category: 'institucional',
    url: OFFICIAL_URLS.campusCedro,
    ctaLabel: 'Acessar ifce.edu.br/cedro',
    dependsOnEdital: false,
  },
  {
    id: 'cursos-cedro',
    title: 'Guia de Cursos do Campus',
    description:
      'Relação completa de todos os cursos técnicos integrados, subsequentes e superiores ofertados.',
    authorityNote: 'Catálogo de cursos do IFCE Campus Cedro',
    category: 'cursos',
    url: OFFICIAL_URLS.todosCursosCedro,
    ctaLabel: 'Ver todos os cursos',
    dependsOnEdital: false,
  },
  {
    id: 'instagram-oficial',
    title: 'Instagram @ifcecedrooficial',
    description:
      'Canal oficial nas redes sociais com fotos do cotidiano, eventos acadêmicos e avisos rápidos.',
    authorityNote: 'Perfil oficial verificado do Campus Cedro',
    category: 'redes_sociais',
    url: OFFICIAL_URLS.instagramOficialCampus,
    ctaLabel: 'Seguir @ifcecedrooficial',
    dependsOnEdital: false,
  },
  {
    id: 'instagram-turma',
    title: 'Instagram @s6informaticaa',
    description:
      'Perfil de estudantes da turma de Informática do Campus Cedro com registros de projetos e rotina.',
    authorityNote: 'Canal comunitário discente',
    category: 'redes_sociais',
    url: OFFICIAL_URLS.instagramTurmaInformatica,
    ctaLabel: 'Conhecer @s6informaticaa',
    dependsOnEdital: false,
  },
];
