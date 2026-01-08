import audiometriaImg from '../../../assets/exames/audiometria/exame-auditivo-medico-otorrinolaringologista-verificando-o-ouvido-da-mulher-usando-otoscopio-ou-auriscopio-na-clinica-medica.jpg'
import colonoscopiaImg from '../../../assets/exames/colonoscopia/colonoscopia.jpg'
import ecgImg from '../../../assets/exames/ecg/ecg.jpg'
import ecocardiogramaImg from '../../../assets/exames/ecocardiograma/ecocardiograma.jpg';
import ecografiaImg from '../../../assets/exames/ecografia/ecografia.jpg';
import eegImg from '../../../assets/exames/eeg/medico-olhando-por-tomografia-computadorizada.jpg';
import endoscopiaImg from '../../../assets/exames/endoscopia/exame-medico.jpg';
import espirometriaImg from '../../../assets/exames/espirometria/medicos-usando-tablet-transparente-com-tecnologia-medica-de-holograma.jpg';
import holterImg from '../../../assets/exames/holter/vista-lateral-doutor-verificar-paciente.jpg';
import laboratoriaisImg from '../../../assets/exames/laboratorio/medico-realizando-pesquisas-medicas-em-laboratorio.jpg';
import laringoscopiaImg from '../../../assets/exames/laringoscopia/garganta-paciente-com-toque-manual.jpg';
import mapaImg from '../../../assets/exames/mapa/hamedtaha-UXwXIkJ34fg-unsplash.jpg';
import raioXImg from '../../../assets/exames/raiox/umanoide-tHS9j3HWT1s-unsplash.jpg';
import testeRapidoImg from '../../../assets/exames/testes/eugene-chystiakov-KPLJEEeIU3I-unsplash.jpg';



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

    image: colonoscopiaImg,
    bannerImage: colonoscopiaImg,
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
    id: "ecg-eletrocardiograma",
    title: "ECG (Eletrocardiograma)",
    subtitle: "Registro da atividade elétrica do coração",
    description: "Detecção de arritmias e outras doenças cardíacas",
    longDescription: `O eletrocardiograma (ECG) é um exame fundamental em cardiologia que registra 
    a atividade elétrica do coração. Através de eletrodos colocados na pele, captamos os impulsos 
    elétricos que coordenam os batimentos cardíacos.
    
    É um exame rápido, indolor e não invasivo que pode diagnosticar diversas condições como 
    arritmias, infarto agudo do miocárdio, distúrbios de condução e sobrecargas cardíacas.`,

    image: ecgImg,
    bannerImage: ecgImg,
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
  },
  {
    id: "ecocardiograma",
    title: "Ecocardiograma",
    subtitle: "Ultrassom do coração",
    description: "Avaliação detalhada da estrutura e função cardíaca",
    longDescription: `O ecocardiograma é um exame de ultrassonografia que avalia detalhadamente 
  a estrutura e função do coração. Através de ondas sonoras de alta frequência, produz imagens 
  em tempo real das câmaras cardíacas, válvulas, músculo cardíaco e fluxo sanguíneo.
  
  É um exame não invasivo, indolor e sem radiação, fundamental para diagnosticar doenças 
  como insuficiência cardíaca, doenças valvares, cardiopatias congênitas e monitorar 
  a função cardíaca em diversas condições clínicas.`,

    image: ecocardiogramaImg,
    bannerImage: ecocardiogramaImg,
    icon: "FaHeartbeat",
    tag: "CARDIOLÓGICO",

    preparacao: {
      jejum: "Jejum de 4 horas (exame com doppler)",
      medicamentos: "Manter medicamentos de uso regular, exceto se orientado pelo médico",
      outrosCuidados: [
        "Usar roupas confortáveis que facilitem o acesso ao tórax",
        "Evitar cafeína e cigarro no dia do exame",
        "Trazer exames cardiológicos anteriores",
        "Repouso relativo antes do exame"
      ],
      tempoPreparo: "4 horas de jejum"
    },

    duracaoExame: "30 a 45 minutos",
    resultados: "Laudo disponível em 24 a 48 horas úteis",
    quandoFazer: `• Avaliação de sopro cardíaco
  • Suspeita de insuficiência cardíaca
  • Acompanhamento de doenças valvares
  • Pré-operatório de cirurgias cardíacas
  • Pacientes com hipertensão arterial
  • Histórico familiar de cardiopatias`,

    contraIndicacoes: [
      "Nenhuma contraindicação absoluta",
      "Pacientes com lesões ou feridas no tórax podem ter dificuldade técnica",
      "Obesidade mórbida pode limitar a qualidade das imagens"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Ecocardiograma', path: '/exames/ecocardiograma' }
    ]
  },
  {
    id: "ecografia",
    title: "Ecografia",
    subtitle: "Ultrassom geral",
    description: "Exame de imagem por ultrassom para avaliação de órgãos internos e tecidos moles",
    longDescription: `A ecografia (ou ultrassonografia) é um exame de imagem que utiliza ondas sonoras 
  de alta frequência para visualizar órgãos internos, tecidos moles e estruturas do corpo humano. 
  É um método não invasivo, seguro (sem radiação ionizante) e amplamente utilizado em diversas 
  especialidades médicas.
  
  Permite avaliar fígado, vesícula biliar, rins, pâncreas, baço, tireoide, mamas, próstata, 
  útero, ovários, articulações, músculos e vasos sanguíneos, sendo essencial para diagnóstico 
  e acompanhamento de diversas condições clínicas.`,

    image: ecografiaImg,
    bannerImage: ecografiaImg,
    icon: "FaClinicMedical",
    tag: "IMAGEM",

    preparacao: {
      jejum: "Varia conforme região examinada: 4-8 horas para abdome superior, nenhum para outras áreas",
      medicamentos: "Manter medicamentos habituais",
      outrosCuidados: [
        "Para ecografia abdominal: jejum conforme orientação",
        "Para ecografia pélvica: beber água e reter urina",
        "Usar roupas confortáveis e fáceis de remover",
        "Trazer exames anteriores da região"
      ],
      tempoPreparo: "Varia conforme tipo de ecografia"
    },

    duracaoExame: "15 a 30 minutos",
    resultados: "Laudo disponível em 24 horas úteis",
    quandoFazer: `• Avaliação de dor abdominal
  • Investigação de massas ou tumorações
  • Controle de doenças hepáticas, renais ou pancreáticas
  • Acompanhamento gestacional
  • Avaliação de tireoide
  • Investigação de dores articulares ou musculares`,

    contraIndicacoes: [
      "Nenhuma contraindicação absoluta",
      "Feridas ou infecções na pele na área a ser examinada podem dificultar"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Ecografia', path: '/exames/ecografia' }
    ]
  },

  {
    id: "eeg-em-sono-e-vigilia",
    title: "EEG em Sono e Vigília",
    subtitle: "Eletroencefalograma completo",
    description: "Registro da atividade cerebral para diagnóstico de distúrbios neurológicos e do sono",
    longDescription: `O EEG (Eletroencefalograma) em Sono e Vigília é um exame neurológico que registra 
  a atividade elétrica do cérebro através de eletrodos colocados no couro cabeludo. A combinação 
  de registros durante vigília e sono permite detectar alterações que podem não ser visíveis 
  apenas no exame convencional.
  
  É fundamental para diagnosticar epilepsia, distúrbios do sono, encefalopatias, monitorar 
  atividade cerebral em estados alterados de consciência e investigar diversas condições 
  neurológicas com maior sensibilidade diagnóstica.`,

    image: eegImg,
    bannerImage: eegImg,
    icon: "FaBrain",
    tag: "NEUROLÓGICO",

    preparacao: {
      jejum: "Não é necessário jejum",
      medicamentos: "Orientação específica sobre medicamentos antiepilépticos, se for o caso",
      outrosCuidados: [
        "Lavar o cabelo no dia anterior, sem usar condicionador, gel ou cremes",
        "Dormir menos na noite anterior (4-5 horas) para facilitar o sono durante o exame",
        "Trazer lista de medicamentos em uso",
        "Acompanhante obrigatório para pacientes com crises epilépticas"
      ],
      tempoPreparo: "Preparo na noite anterior"
    },

    duracaoExame: "1 a 2 horas (incluindo período de sono)",
    resultados: "Laudo disponível em 48 a 72 horas úteis",
    quandoFazer: `• Suspeita de epilepsia ou crises convulsivas
  • Distúrbios do sono (narcolepsia, parassonias)
  • Alterações do nível de consciência
  • Acompanhamento de doenças neurológicas degenerativas
  • Avaliação de encefalopatias
  • Investigação de cefaleias de difícil controle`,

    contraIndicacoes: [
      "Infecções ativas no couro cabeludo",
      "Pacientes não colaborativos sem sedação apropriada"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'EEG Sono e Vigília', path: '/exames/eeg-sono-vigilia' }
    ]
  },

  {
    id: "endoscopia",
    title: "Endoscopia",
    subtitle: "Exame do trato digestivo superior",
    description: "Exame do trato digestivo superior para diagnóstico de doenças esofágicas e gástricas",
    longDescription: `A endoscopia digestiva alta é um exame que permite visualizar diretamente 
  o esôfago, estômago e duodeno através de um endoscópio flexível com câmera na ponta. 
  É o principal método para diagnóstico de doenças como gastrite, esofagite, úlceras, 
  hérnia de hiato e câncer do trato digestivo superior.
  
  Realizado com sedação para maior conforto, o exame permite também realizar biópsias 
  e alguns tratamentos, como retirada de pólipos e controle de sangramentos.`,

    image: endoscopiaImg,
    bannerImage: endoscopiaImg,
    icon: "FaProcedures",
    tag: "ENDOSCÓPICO",

    preparacao: {
      jejum: "Jejum absoluto de 8 horas para sólidos e 4 horas para líquidos claros",
      medicamentos: "Suspender anticoagulantes conforme orientação médica, manter outros com pequeno gole de água",
      outrosCuidados: [
        "Acompanhante obrigatório para alta",
        "Não dirigir ou operar máquinas por 12 horas após o exame",
        "Informar sobre alergias e doenças pré-existentes",
        "Suspender medicamentos para diabetes conforme orientação"
      ],
      tempoPreparo: "8 horas de jejum"
    },

    duracaoExame: "15 a 30 minutos",
    resultados: "Resultado preliminar imediato, laudo com biópsias em 5-7 dias",
    quandoFazer: `• Azia ou refluxo persistente
  • Dificuldade para engolir
  • Dor abdominal superior
  • Sangramento digestivo (vômito ou fezes com sangue)
  • Anemia sem causa aparente
  • Rastreamento de lesões pré-cancerosas`,

    contraIndicacoes: [
      "Suspeita de perfuração digestiva",
      "Obstrução intestinal alta",
      "Infarto agudo do miocárdio recente",
      "Instabilidade hemodinâmica grave"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Endoscopia', path: '/exames/endoscopia' }
    ]
  },

  {
    id: "espirometria",
    title: "Espirometria",
    subtitle: "Teste de função pulmonar",
    description: "Teste de função pulmonar para avaliar capacidade respiratória e diagnosticar doenças",
    longDescription: `A espirometria é um exame que avalia a função pulmonar através da medição 
  do volume e velocidade do ar que entra e sai dos pulmões. É o principal teste para 
  diagnóstico e acompanhamento de doenças respiratórias como asma, DPOC (Doença Pulmonar 
  Obstrutiva Crônica), fibrose pulmonar e avaliação de capacidade pulmonar pré-operatória.
  
  O exame é simples, não invasivo e realizado através de sopro em um aparelho chamado 
  espirômetro, fornecendo informações precisas sobre a saúde respiratória do paciente.`,

    image: espirometriaImg,
    bannerImage: espirometriaImg,
    icon: "FaLungs",
    tag: "RESPIRATÓRIO",

    preparacao: {
      jejum: "Não é necessário jejum, mas evitar refeições pesadas 2 horas antes",
      medicamentos: "Suspender broncodilatadores conforme orientação médica (geralmente 12-24 horas antes)",
      outrosCuidados: [
        "Não fumar no dia do exame",
        "Evitar café e chá preto 4 horas antes",
        "Não fazer exercício físico intenso 1 hora antes",
        "Usar roupas confortáveis que não apertem o tórax"
      ],
      tempoPreparo: "Preparo medicamentoso conforme orientação"
    },

    duracaoExame: "20 a 30 minutos",
    resultados: "Resultado imediato com laudo médico",
    quandoFazer: `• Tosse crônica ou falta de ar
  • Diagnóstico e acompanhamento de asma
  • Avaliação de DPOC (fumantes ou ex-fumantes)
  • Pré-operatório de cirurgias torácicas ou abdominais
  • Avaliação de capacidade física para trabalho ou esporte
  • Monitoramento de doenças pulmonares ocupacionais`,

    contraIndicacoes: [
      "Infarto agudo do miocárdio recente (último mês)",
      "Aneurisma de aorta torácica ou abdominal",
      "Pneumotórax recente",
      "Cirurgia ocular recente (risco de aumento da pressão intraocular)"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Espirometria', path: '/exames/espirometria' }
    ]
  },

  {
    id: "holter",
    title: "Holter",
    subtitle: "Monitorização cardíaca contínua",
    description: "Registro contínuo da atividade cardíaca por 24 horas",
    longDescription: `O Holter é um exame cardiológico que registra continuamente a atividade 
  elétrica do coração durante 24 horas ou mais, enquanto o paciente realiza suas atividades 
  diárias normais. Através de eletrodos conectados ao tórax e um gravador portátil, 
  capta todos os batimentos cardíacos durante um ciclo completo de sono-vigília.
  
  É fundamental para diagnosticar arritmias cardíacas intermitentes, avaliar a eficácia 
  de medicamentos antiarrítmicos, investigar sintomas como palpitações, tonturas e 
  síncopes, e monitorar pacientes com marca-passo ou desfibriladores implantáveis.`,

    image: holterImg,
    bannerImage: holterImg,
    icon: "FaHeartbeat",
    tag: "CARDIOLÓGICO",

    preparacao: {
      jejum: "Não é necessário jejum",
      medicamentos: "Manter medicamentos habituais, a menos que orientado diferentemente",
      outrosCuidados: [
        "Tomar banho antes da instalação do aparelho",
        "Evitar cremes ou óleos na pele do tórax",
        "Manter diário de atividades e sintomas durante as 24 horas",
        "Evitar áreas com campos magnéticos intensos (ressonância magnética)",
        "Não molhar o aparelho (não tomar banho durante o exame)"
      ],
      tempoPreparo: "Sem preparo específico"
    },

    duracaoExame: "24 a 48 horas (dependendo da indicação)",
    resultados: "Laudo disponível em 48 a 72 horas após retorno do aparelho",
    quandoFazer: `• Palpitações ou arritmias suspeitas
  • Tonturas ou desmaios de origem não esclarecida
  • Avaliação de eficácia de medicamentos antiarrítmicos
  • Controle de pacientes com marca-passo
  • Investigação de dor torácica atípica
  • Avaliação de risco em pacientes pós-infarto`,

    contraIndicacoes: [
      "Alergia aos adesivos dos eletrodos",
      "Lesões ou feridas extensas no tórax",
      "Pacientes com dificuldade de colaboração"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Holter', path: '/exames/holter' }
    ]
  },

  {
    id: "exames-laboratoriais",
    title: "Exames Laboratoriais",
    subtitle: "Análises clínicas completas",
    description: "Análises clínicas completas: sangue, urina, bioquímica, hormonais e sorologias",
    longDescription: `Os exames laboratoriais são um conjunto de análises clínicas realizadas 
  em amostras biológicas (sangue, urina, fezes, etc.) que fornecem informações essenciais 
  sobre o funcionamento do organismo. Incluem hemograma completo, dosagens bioquímicas 
  (glicemia, colesterol, triglicerídeos, função renal e hepática), hormonais, sorologias 
  para doenças infecciosas, marcadores tumorais e exames de urina.
  
  São fundamentais para check-ups preventivos, diagnóstico precoce de doenças, 
  monitoramento de tratamentos e acompanhamento de condições crônicas como diabetes, 
  hipertensão e doenças autoimunes.`,

    image: laboratoriaisImg,
    bannerImage: laboratoriaisImg,
    icon: "FaFlask",
    tag: "LABORATORIAL",

    preparacao: {
      jejum: "Jejum de 8 a 12 horas para exames de bioquímica (glicemia, colesterol, triglicerídeos)",
      medicamentos: "Manter medicamentos habituais, exceto se orientado diferentemente pelo médico",
      outrosCuidados: [
        "Evitar álcool 72 horas antes dos exames",
        "Evitar exercícios físicos intensos 24 horas antes",
        "Para exames de urina: coletar primeira urina da manhã",
        "Trazer solicitação médica com os exames desejados",
        "Informar sobre gestação ou possibilidade de gestação"
      ],
      tempoPreparo: "8-12 horas de jejum conforme exames solicitados"
    },

    duracaoExame: "5 a 15 minutos para coleta",
    resultados: "Resultados conforme tipo de exame: de 2 horas (urgentes) a 7 dias (especializados)",
    quandoFazer: `• Check-up anual preventivo
  • Monitoramento de doenças crônicas (diabetes, hipertensão)
  • Investigação de sintomas diversos (fadiga, perda de peso, etc.)
  • Pré-operatório de cirurgias
  • Acompanhamento de tratamentos medicamentosos
  • Avaliação pré-gestacional e acompanhamento da gestação`,

    contraIndicacoes: [
      "Pacientes em uso de anticoagulantes (avaliar risco-benefício para coletas)",
      "Desidratação severa pode afetar resultados"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Exames Laboratoriais', path: '/exames/laboratoriais' }
    ]
  },

  {
    id: "laringoscopia-indireta",
    title: "Laringoscopia Indireta",
    subtitle: "Exame das cordas vocais",
    description: "Visualização da laringe e cordas vocais para diagnóstico de alterações laríngeas",
    longDescription: `A laringoscopia indireta é um exame otorrinolaringológico que permite 
  visualizar a laringe, as cordas vocais e estruturas adjacentes através de um espelho 
  especial ou endoscópio flexível. É um procedimento rápido, realizado no consultório, 
  sem necessidade de sedação.
  
  Fundamental para diagnosticar doenças das cordas vocais como nódulos, pólipos, 
  paralisias, tumores laríngeos, além de avaliar alterações da voz (disfonia), 
  dificuldade para engolir (disfagia) e investigar tosse crônica de origem laríngea.`,

    image: laringoscopiaImg,
    bannerImage: laringoscopiaImg,
    icon: "FaMicroscope",
    tag: "OTORRINO",

    preparacao: {
      jejum: "Jejum de 2 horas para líquidos e 4 horas para sólidos (para evitar náuseas)",
      medicamentos: "Manter medicamentos habituais",
      outrosCuidados: [
        "Evitar alimentos pesados antes do exame",
        "Informar sobre reflexo de vômito acentuado",
        "Não usar sprays ou pastilhas para garganta no dia do exame",
        "Para fumantes: evitar fumar no dia do exame"
      ],
      tempoPreparo: "2-4 horas de jejum leve"
    },

    duracaoExame: "5 a 10 minutos",
    resultados: "Resultado imediato com laudo e possibilidade de imagens",
    quandoFazer: `• Rouquidão persistente por mais de 15 dias
  • Alterações na voz (disfonia)
  • Dificuldade para engolir
  • Tosse crônica sem causa pulmonar aparente
  • Sensação de corpo estranho na garganta
  • Suspeita de lesões nas cordas vocais
  • Avaliação pré e pós-cirúrgica de laringe`,

    contraIndicacoes: [
      "Pacientes com risco de aspiração grave",
      "Obstrução significativa das vias aéreas superiores",
      "Pacientes não colaborativos com reflexo de vômito muito intenso"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Laringoscopia Indireta', path: '/exames/laringoscopia-indireta' }
    ]
  },

  {
    id: "mapa-24h",
    title: "Mapa 24h",
    subtitle: "Monitoramento ambulatorial da pressão arterial",
    description: "Monitoramento ambulatorial da pressão arterial por 24 horas para controle da hipertensão",
    longDescription: `A Monitorização Ambulatorial da Pressão Arterial (MAPA) é um exame que 
  registra automaticamente a pressão arterial a cada 15-30 minutos durante 24 horas, 
  enquanto o paciente realiza suas atividades normais e dorme. O aparelho é portátil 
  e as medidas são obtidas através de uma braçadeira inflável conectada a um gravador.
  
  É fundamental para o diagnóstico preciso da hipertensão arterial, avaliação da 
  eficácia do tratamento anti-hipertensivo, detecção da hipertensão do avental branco 
  e hipertensão mascarada, além de fornecer informações sobre o comportamento noturno 
  da pressão arterial (dipping e non-dipping).`,

    image: mapaImg,
    bannerImage: mapaImg,
    icon: "FaHeartbeat",
    tag: "CARDIOLÓGICO",

    preparacao: {
      jejum: "Não é necessário jejum",
      medicamentos: "Orientação específica sobre uso de anti-hipertensivos durante o exame",
      outrosCuidados: [
        "Tomar banho antes da instalação do aparelho",
        "Usar roupas confortáveis de manga curta ou fácil acesso ao braço",
        "Manter diário detalhado de atividades, horários de medicação, sono e sintomas",
        "Evitar exercícios físicos vigorosos",
        "Manter o braço imóvel durante as medidas",
        "Não molhar o aparelho"
      ],
      tempoPreparo: "Sem preparo específico"
    },

    duracaoExame: "24 horas",
    resultados: "Laudo disponível em 48 a 72 horas após retorno do aparelho",
    quandoFazer: `• Diagnóstico de hipertensão arterial
  • Avaliação de controle da hipertensão em tratamento
  • Suspeita de hipertensão do avental branco
  • Avaliação de hipertensão resistente
  • Investigação de sintomas como tonturas e síncopes
  • Avaliação de hipertensão na gestação
  • Pré-operatório de cirurgias de grande porte`,

    contraIndicacoes: [
      "Arritmias cardíacas importantes que interfiram nas medidas",
      "Fístula arteriovenosa no braço a ser monitorado",
      "Lesões cutâneas ou infecções no braço"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Mapa 24h', path: '/exames/mapa-24h' }
    ]
  },

  {
    id: "raio-x-digital",
    title: "Raio-X Digital",
    subtitle: "Radiografia digital",
    description: "Exame de imagem radiográfica digital para avaliação óssea e de estruturas internas",
    longDescription: `O raio-X digital é um exame de imagem que utiliza radiação ionizante 
  em baixas doses para obter imagens de estruturas internas do corpo. A tecnologia digital 
  permite imagens de alta qualidade com menor dose de radiação, maior rapidez na obtenção 
  dos resultados e facilidade de armazenamento e compartilhamento.
  
  É fundamental para avaliação do sistema musculoesquelético (fraturas, luxações, 
  artroses), tórax (pneumonias, derrames pleurais, tumores), abdome (obstruções 
  intestinais, cálculos renais) e em odontologia para avaliação dentária e 
  maxilofacial.`,

    image: raioXImg,
    bannerImage: raioXImg,
    icon: "FaXRay",
    tag: "IMAGEM",

    preparacao: {
      jejum: "Não é necessário jejum para maioria dos exames",
      medicamentos: "Manter medicamentos habituais",
      outrosCuidados: [
        "Remover objetos metálicos, joias e acessórios da área a ser examinada",
        "Para raio-X de abdome: jejum de 4 horas e uso de laxante conforme orientação",
        "Para raio-X contrastado: jejum de 8 horas e exames de função renal prévios",
        "Informar sobre possibilidade de gestação",
        "Trazer exames anteriores da mesma região"
      ],
      tempoPreparo: "Sem preparo específico (exceto exames contrastados)"
    },

    duracaoExame: "5 a 15 minutos",
    resultados: "Laudo disponível em 24 horas úteis (urgências: 1-2 horas)",
    quandoFazer: `• Suspeita de fraturas ósseas
  • Avaliação de dores articulares e artroses
  • Investigação de pneumonias e outras doenças pulmonares
  • Suspeita de cálculo renal (raio-X simples de abdome)
  • Avaliação dentária e odontológica
  • Controle pós-operatório de fraturas
  • Pré-operatório ortopédico`,

    contraIndicacoes: [
      "Gestação (exceto em situações de emergência com proteção abdominal)",
      "Alergia ao contraste iodado (para exames contrastados)",
      "Insuficiência renal (para exames contrastados)"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Raio-X Digital', path: '/exames/raio-x-digital' }
    ]
  },

  {
    id: "testes-rapidos",
    title: "Testes Rápidos",
    subtitle: "Diagnóstico rápido de doenças infecciosas",
    description: "Testes rápidos para COVID-19, Dengue, Influenza (H1N1) e Leptospirose",
    longDescription: `Os testes rápidos são exames imunocromatográficos que permitem 
  diagnóstico em poucos minutos de diversas doenças infecciosas através de amostras 
  de sangue, soro ou swab nasal/orofaríngeo. Utilizam tecnologia de fluxo lateral 
  para detectar anticorpos ou antígenos específicos.
  
  São fundamentais para diagnóstico precoce, triagem em situações de surto, 
  pronto atendimento e saúde ocupacional. Oferecem rapidez nos resultados, 
  facilitando a tomada de decisões clínicas e medidas de isolamento quando necessário.`,

    image: testeRapidoImg,
    bannerImage: testeRapidoImg,
    icon: "FaViruses",
    tag: "INFECTOLOGIA",

    preparacao: {
      jejum: "Não é necessário jejum",
      medicamentos: "Manter medicamentos habituais",
      outrosCuidados: [
        "Para COVID-19: evitar uso de descongestionantes nasais 1 hora antes",
        "Informar sobre sintomas atuais e data de início",
        "Informar sobre contatos com casos confirmados",
        "Para teste de antígeno: ideal realizar nos primeiros dias de sintomas",
        "Para teste de anticorpos: ideal após 7-10 dias dos sintomas"
      ],
      tempoPreparo: "Sem preparo específico"
    },

    duracaoExame: "Coleta: 2-5 minutos; Resultado: 10-30 minutos",
    resultados: "Resultado disponível em 10 a 30 minutos",
    quandoFazer: `• Suspeita de COVID-19 com sintomas respiratórios
  • Síndrome gripal com febre, dor no corpo, cefaleia
  • Contato com casos confirmados de doenças infecciosas
  • Suspeita de dengue em áreas endêmicas
  • Pré-operatório de emergência
  • Retorno ao trabalho após doença infecciosa
  • Vigilância em saúde pública e ocupacional`,

    contraIndicacoes: [
      "Nenhuma contraindicação absoluta",
      "Hematomas extensos no local de punção podem dificultar a coleta"
    ],

    breadcrumb: [
      { name: 'Início', path: '/' },
      { name: 'Exames', path: '/exames' },
      { name: 'Testes Rápidos', path: '/exames/testes-rapidos' }
    ]
  }
];

export const getExameById = (id: string): Exame | undefined => {
  return exames.find(exame => exame.id === id.toLowerCase());
};

export const getAllExames = (): Exame[] => {
  return exames;
};