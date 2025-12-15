import audiometriaImg from '../../../assets/exames/audiometria/exame-auditivo-medico-otorrinolaringologista-verificando-o-ouvido-da-mulher-usando-otoscopio-ou-auriscopio-na-clinica-medica.jpg'

export interface Exame {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  bannerImage: string;
  icon: string;
  tag: string;
  
  preparacao: {
    jejum?: string;
    medicamentos?: string;
    outrosCuidados?: string[];
    tempoPreparo?: string;
  };
  
  duracaoExame: string;
  resultados: string;
  quandoFazer: string;
  contraIndicacoes?: string[];
  
  breadcrumb: Array<{ name: string; path: string }>;
}

export const exames: Exame[] = [
  {
    id: "audiometria",
    title: "Audiometria",
    subtitle: "Avaliação completa da audição",
    description: "Exame para avaliar a capacidade auditiva e diagnosticar perdas auditivas",
    longDescription: `A audiometria é um exame que avalia a capacidade de ouvir e interpretar sons. 
    É fundamental para diagnosticar diversos tipos de perda auditiva, desde as mais leves até as mais severas.
    
    O exame é indolor e não invasivo, realizado em cabine acústica por fonoaudiólogo especializado. 
    Através de estímulos sonoros em diferentes frequências e intensidades, mapeamos sua audição detalhadamente.`,
    
    image: audiometriaImg,
    bannerImage: audiometriaImg,
    icon: "FaAssistiveListeningSystems",
    tag: "DIAGNÓSTICO",
    
    preparacao: {
      jejum: "Não é necessário jejum",
      medicamentos: "Evitar cafeína 6 horas antes do exame. Medicamentos de uso contínuo devem ser mantidos.",
      outrosCuidados: [
        "Evitar exposição a ruídos intensos nas 24h anteriores",
        "Trazer exames auditivos anteriores, se houver",
        "Repouso auditivo de 12 horas sem uso de fones de ouvido"
      ],
      tempoPreparo: "Sem preparo específico"
    },
    
    duracaoExame: "30 a 45 minutos",
    resultados: "Laudo disponível em 24 horas úteis",
    quandoFazer: `• Suspeita de perda auditiva
    • Zumbido constante
    • Dificuldade de compreensão em ambientes ruidosos
    • Após exposição ocupacional a ruídos
    • Check-up auditivo anual`,
    
    contraIndicacoes: [
      "Otite aguda com dor intensa",
      "Perfuração timpânica recente",
      "Infecção no ouvido externo"
    ],
    
    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Audiometria', path: '/exames/audiometria' }
    ]
  },
  
  {
    id: "colonoscopia",
    title: "Colonoscopia",
    subtitle: "Exame endoscópico do intestino grosso",
    description: "Exame para prevenção e diagnóstico do câncer colorretal",
    longDescription: `A colonoscopia é um exame endoscópico que permite visualizar diretamente o interior do 
    intestino grosso (cólon) e parte do intestino delgado. É o principal exame para detecção precoce 
    do câncer colorretal e diagnóstico de doenças inflamatórias intestinais.
    
    Realizado com sedação para maior conforto, o exame identifica pólipos que podem ser removidos 
    durante o procedimento, prevenindo assim a evolução para câncer.`,
    
    image: "/assets/exames/colonoscopia-thumb.jpg",
    bannerImage: "/assets/exames/colonoscopia-banner.jpg",
    icon: "FaProcedures",
    tag: "ENDOSCÓPICO",
    
    preparacao: {
      jejum: "Jejum de 8 horas para sólidos e 4 horas para líquidos claros",
      medicamentos: "Ajuste de medicamentos anticoagulantes conforme orientação médica",
      outrosCuidados: [
        "Dieta líquida e pastosa no dia anterior",
        "Uso de laxantes prescritos para limpeza intestinal",
        "Acompanhante obrigatório para alta",
        "Não dirigir por 12 horas após o exame (devido à sedação)"
      ],
      tempoPreparo: "24 horas (preparo intestinal)"
    },
    
    duracaoExame: "30 a 60 minutos",
    resultados: "Laudo disponível em 48 horas, com imagens",
    quandoFazer: `• Rastreamento de câncer colorretal a partir dos 45 anos
    • Sangramento intestinal
    • Alterações persistentes no hábito intestinal
    • História familiar de pólipos ou câncer colorretal
    • Anemia sem causa aparente`,
    
    contraIndicacoes: [
      "Perfuração intestinal suspeita ou confirmada",
      "Diverticulite aguda",
      "Infarto agudo do miocárdio recente",
      "Gestação (relativo, avaliar risco-benefício)"
    ],
    
    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Colonoscopia', path: '/exames/colonoscopia' }
    ]
  },
  
  {
    id: "eletrocardiograma",
    title: "ECG (Eletrocardiograma)",
    subtitle: "Registro da atividade elétrica do coração",
    description: "Detecção de arritmias e outras doenças cardíacas",
    longDescription: `O eletrocardiograma (ECG) é um exame fundamental em cardiologia que registra 
    a atividade elétrica do coração. Através de eletrodos colocados na pele, captamos os impulsos 
    elétricos que coordenam os batimentos cardíacos.
    
    É um exame rápido, indolor e não invasivo que pode diagnosticar diversas condições como 
    arritmias, infarto agudo do miocárdio, distúrbios de condução e sobrecargas cardíacas.`,
    
    image: "/assets/exames/ecg-thumb.jpg",
    bannerImage: "/assets/exames/ecg-banner.jpg",
    icon: "FaHeartbeat",
    tag: "CARDIOLÓGICO",
    
    preparacao: {
      jejum: "Não é necessário jejum",
      medicamentos: "Manter medicamentos de uso regular",
      outrosCuidados: [
        "Evitar cremes ou óleos na pele do tórax no dia do exame",
        "Usar roupas que facilitem o acesso ao tórax",
        "Repouso de 5 minutos antes do exame",
        "Informar sobre marca-passo ou outros dispositivos cardíacos"
      ],
      tempoPreparo: "Sem preparo específico"
    },
    
    duracaoExame: "5 a 10 minutos",
    resultados: "Resultado imediato com laudo médico",
    quandoFazer: `• Check-up cardiológico anual
    • Dor no peito ou palpitações
    • Pré-operatório de cirurgias
    • Controle de doenças cardíacas conhecidas
    • Avaliação de atletas`,
    
    contraIndicacoes: [
      "Nenhuma contraindicação absoluta",
      "Pacientes agitados podem ter dificuldade técnica"
    ],
    
    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Eletrocardiograma', path: '/exames/eletrocardiograma' }
    ]
  }
];

export const getExameById = (id: string): Exame | undefined => {
  return exames.find(exame => exame.id === id.toLowerCase());
};

export const getAllExames = (): Exame[] => {
  return exames;
};