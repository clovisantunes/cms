import cardiologiaImg from '../../../assets/Especialidades/cardiologista.jpg';
import cardiologiaAtendimentoImg from '../../../assets/Especialidades/atendimento.jpg';
import cirurgiaGeralImg from '../../../assets/Especialidades/cirurgia geral/prepare-for-surgery.jpg';
import cirurgiaAtendimentoImg from '../../../assets/Especialidades/cirurgia geral/thumb.jpg'
import cirurgiaPlasticaImg from '../../../assets/Especialidades/plasticas/_102523496_gettyimages-878876640.jpg.webp';
import cirurgiaPlasticaAtendimentoImg from '../../../assets/Especialidades/plasticas/medico-de-vista-lateral-verificando-o-paciente-antes-da-rinoplastia_23-2149352178.avif';
import cirurgiaVascularImg from '../../../assets/Especialidades/vascular/Cirurgia-Vascular-saiba-como-funciona-e-os-cuidados-pos-cirurgico.jpg';
import clinicaGeralImg from '../../../assets/Especialidades/clinica/clinico-geral.jpg';
import clinicaIntegrativaImg from '../../../assets/Especialidades/clinicaIntegrativa/estetoscopio-de-exploracao-de-mao-para-check-up_53876-24902.avif';
import dermatologiaImg from '../../../assets/Especialidades/dermatologia/dermatologista-em-luvas-de-latex-segurando-dermatoscopio-enquanto-examina-paciente-atraente-com-doenca-de-pele-dermatologista-feminina-examinando-.avif';
import endocrinologiaImg from '../../../assets/Especialidades/endocrinologia/endocrinologista-examinando-a-garganta-de-uma-jovem-na-clinica-mulheres-com-teste-de-glandula-tireoide-hormonios-e-tratamento-de-endocrinologia-inflamac.avif';
import gastroenterologiaImg from '../../../assets/Especialidades/gastro/gastro.avif';
import ginecologiaImg from '../../../assets/Especialidades/gineco/mulher-gravida-recebendo-uma-ultra-sonografia-no-estomago_107420-63777.avif';
import medicinaTrabalhoImg from '../../../assets/Especialidades/trabalho/mulher-que-trabalha-como-medica_23-2148827827.avif';
import neurologiaImg from '../../../assets/Especialidades/neuro/neuro.avif';
import nutricaoImg from '../../../assets/Especialidades/nutricao/medico-close-up-com-frutas-e-estetoscopio_23-2148302090.avif';
import odontologiaImg from '../../../assets/Especialidades/odonto/paciente-do-sexo-feminino-abrindo-a-boca-para-o-medico-olhar-em-sua-garganta-otorrinolaringologista-examina-dor-de-garganta-do-paciente_657921-196.avif';
import oftalmologiaImg from '../../../assets/Especialidades/oftalmo/oftalmologista-com-paciente-do-sexo-feminino-durante-um-exame-na-clinica-moderna-oftalmologista-esta-usando-equipamento-medico-especial-para-saude-ocular_6579.avif'
import ortopediaImg from '../../../assets/Especialidades/ortopedia/grupo-de-medicos-lendo-um-documento-na-sala-de-reunioes-do-hospital_265022-50058.avif';
import otorrinoImg from '../../../assets/Especialidades/otorrinolaringologia/exame-auditivo-medico-otorrinolaringologista-verificando-o-ouvido-da-mulher-usando-otoscopio-ou-auriscopio-na-clinica-medica_657921-266.avif';
import pediatriaImg from '../../../assets/Especialidades/pediatria/medico-fazendo-seu-trabalho-em-consultorio-de-pediatria_23-2149224121.avif';
import pneumologiaImg from '../../../assets/Especialidades/pneumologia/uma-medica-da-clinica-realiza-auscultacao-dos-pulmoes-de-um-paciente-com-sintomas-de-coronavirus-ou-pneumonia_657921-877.avif';
import proctologiaImg from '../../../assets/Especialidades/proctologista/medico-profissional-com-luvas-em-seu-escritorio_23-2147646648.avif';
import psicologiaImg from '../../../assets/Especialidades/psicologia/happy-doctor-informing-senior-patient-about-health-insurance-options-consultations-clinic_637285-1891.avif';
import psiquiatriaImg from '../../../assets/Especialidades/psiquiatria/medico-maduro-e-seu-paciente-conversando-enquanto-le-o-prontuario-medico-em-um-computador-no-consultorio-medico_637285-405.avif';
import reumatologiaImg from '../../../assets/Especialidades/reumato/tratamento-de-braco_1098-16885.avif';
import urologiaImg from '../../../assets/Especialidades/urologia/medico-de-vista-frontal-usando-estetoscopio_23-2149351649.avif';



export interface Especialidade {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  icon?: string;
  image?: string;
  functionDescription: string;
  approachText: string;
  services: ServiceItem[];
  doctors?: Doctor[];
  exams?: string[];
  benefits?: BenefitItem[];
  whenToSeek?: WhenToSeekItem[];
  faq?: Array<{ question: string; answer: string }>;
  ctaText?: string;
  treatmentImage?: string;
  keyHighlights?: KeyHighlightItem[]; 
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string; 
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface WhenToSeekItem {
  id: number;
  title: string;
  description: string;
  iconName: string; 
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  credentials: string[];
  image?: string;
  description?: string;
  profileImage?: string;
}
export interface KeyHighlightItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export const especialidades: Especialidade[] = [
  {
    id: "cardiologia",
    title: "Cardiologia",
    description: "Cuidados especializados para a saúde do seu coração.",
    longDescription: "Nossa equipe de cardiologia do Centro Médico Sapiranga é especializada no diagnóstico, tratamento e prevenção de doenças cardiovasculares.",
    tag: "CLÍNICA",
    image: cardiologiaImg,
    treatmentImage: cardiologiaAtendimentoImg,
    
    functionDescription: "O cardiologista é o médico especialista no diagnóstico, tratamento e prevenção das doenças do coração e do sistema circulatório.",
    
    approachText: "No Centro Médico Sapiranga, adotamos uma abordagem preventiva e personalizada. Realizamos avaliações completas e oferecemos acompanhamento contínuo.",
    
      keyHighlights: [
    {
      id: 1,
      title: "Diagnóstico Preciso",
      description: "Equipamentos de última geração para diagnósticos cardiovasculares",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Prevenção Personalizada",
      description: "Planos individuais baseados no seu perfil de risco",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Tratamento Inovador",
      description: "Protocolos baseados nas mais recentes evidências científicas",
      iconName: "FaFlask"
    }
  ],
    services: [
      {
        id: 1,
        title: "Consulta Cardiológica Completa",
        description: "Avaliação detalhada da saúde cardiovascular com histórico clínico",
        iconName: "FaStethoscope"
      },
      {
        id: 2,
        title: "Avaliação de Risco Cardiovascular",
        description: "Identificação precoce de fatores de risco e prevenção",
        iconName: "FaChartLine"
      },
      {
        id: 3,
        title: "Tratamento de Hipertensão Arterial",
        description: "Controle especializado da pressão arterial",
        iconName: "FaHeartbeat"
      },
      {
        id: 4,
        title: "Manejo de Arritmias Cardíacas",
        description: "Diagnóstico e tratamento de distúrbios do ritmo cardíaco",
        iconName: "FaHeart"
      },
      {
        id: 5,
        title: "Reabilitação Cardíaca",
        description: "Programa supervisionado de recuperação",
        iconName: "FaHospitalUser"
      },
      {
        id: 6,
        title: "Avaliação Pré-operatória Cardiológica",
        description: "Preparação cardiológica completa para cirurgias",
        iconName: "FaClipboardCheck"
      }
    ],
    
    benefits: [
      {
        id: 1,
        title: "Prevenção Eficaz",
        description: "Redução significativa do risco de infarto e AVC",
        iconName: "FaHeart"
      },
      {
        id: 2,
        title: "Tecnologia de Ponta",
        description: "Equipamentos modernos para diagnósticos precisos",
        iconName: "FaChartLine"
      },
      {
        id: 3,
        title: "Acompanhamento Personalizado",
        description: "Planos de tratamento individualizados",
        iconName: "FaUserMd"
      },
      {
        id: 4,
        title: "Equipe Multidisciplinar",
        description: "Atendimento integrado com outros especialistas",
        iconName: "FaHandHoldingHeart"
      }
    ],
    
    whenToSeek: [
      {
        id: 1,
        title: "Dor ou desconforto no peito",
        description: "Especialmente durante esforços físicos ou em repouso",
        iconName: "FaHeart"
      },
      {
        id: 2,
        title: "Palpitações ou batimentos irregulares",
        description: "Sensação de coração acelerado ou batendo irregular",
        iconName: "FaHeartbeat"
      },
      {
        id: 3,
        title: "Falta de ar",
        description: "Dificuldade para respirar em repouso ou atividades",
        iconName: "FaLungs"
      },
      {
        id: 4,
        title: "Histórico familiar de doenças cardíacas",
        description: "Parentes próximos com infarto ou AVC precoces",
        iconName: "FaUserMd"
      },
      {
        id: 5,
        title: "Fatores de risco múltiplos",
        description: "Hipertensão, diabetes, colesterol alto, tabagismo",
        iconName: "FaChartLine"
      },
      {
        id: 6,
        title: "Check-up preventivo",
        description: "Homens após 40 anos e mulheres após 45 anos",
        iconName: "FaClipboardCheck"
      }
    ],
    
    exams: ["Eletrocardiograma (ECG)", "Ecocardiograma com Doppler", "Teste ergométrico", "Holter 24 horas", "MAPA", "Doppler de carótidas"],
    
    doctors: [
      {
        id: 1,
        name: "Dr. Carlos Mendes",
        specialty: "Cardiologia Clínica e Intervencionista",
        credentials: ["CRM-RS 12345", "Título de Especialista em Cardiologia", "Fellow em Hemodinâmica", "Membro da SBC"],
        description: "15 anos de experiência em cardiologia intervencionista"
      },
      {
        id: 2,
        name: "Dra. Ana Paula Silva",
        specialty: "Cardiologia e Arritmologia",
        credentials: ["CRM-RS 67890", "Título de Especialista em Arritmologia", "Mestrado em Ciências Cardiovasculares"],
        description: "Especialista em arritmias cardíacas e marcapasso"
      }
    ],
    
    ctaText: "Cuide do seu coração com quem entende do assunto"
  },
  {
  id: "cirurgia-geral",
  title: "Cirurgia Geral",
  description: "Procedimentos cirúrgicos abdominais e de pequeno a médio porte.",
  longDescription: "Nossa equipe de cirurgia geral do Centro Médico Sapiranga realiza procedimentos cirúrgicos com segurança, tecnologia de ponta e acompanhamento completo.",
  tag: "CIRÚRGICA",
  image: cirurgiaGeralImg,
  treatmentImage: cirurgiaAtendimentoImg,
  
  functionDescription: "O cirurgião geral é especializado em procedimentos cirúrgicos abdominais, de parede abdominal, glândulas e sistemas relacionados, além de realizar diagnósticos cirúrgicos.",
  
  approachText: "No Centro Médico Sapiranga, oferecemos cirurgias com técnicas minimamente invasivas quando possível, priorizando a recuperação rápida e o conforto do paciente.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Cirurgia Minimamente Invasiva",
      description: "Técnicas laparoscópicas para menor dor e recuperação mais rápida",
      iconName: "FaMicroscope"
    },
    {
      id: 2,
      title: "Equipe Experiente",
      description: "Cirurgiões com vasta experiência em procedimentos abdominais",
      iconName: "FaUserMd"
    },
    {
      id: 3,
      title: "Centro Cirúrgico Moderno",
      description: "Sala de cirurgia equipada com tecnologia de última geração",
      iconName: "FaHospitalAlt"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Cirurgia de Vesícula Biliar",
      description: "Colecistectomia por videolaparoscopia ou método convencional",
      iconName: "FaCut"
    },
    {
      id: 2,
      title: "Cirurgias de Hérnias Abdominais",
      description: "Reparo de hérnias inguinal, umbilical, incisional e epigástrica",
      iconName: "FaBandAid"
    },
    {
      id: 3,
      title: "Apendicectomia",
      description: "Remoção do apêndice por videolaparoscopia ou cirurgia aberta",
      iconName: "FaClipboardCheck"
    },
    {
      id: 4,
      title: "Cirurgia de Parede Abdominal",
      description: "Correção de eventrações e reconstrução da parede abdominal",
      iconName: "FaUserShield"
    },
    {
      id: 5,
      title: "Biópsias Cirúrgicas",
      description: "Coleta de tecidos para análise patológica",
      iconName: "FaSearch"
    },
    {
      id: 6,
      title: "Drenagem de Abscessos",
      description: "Drenagem cirúrgica de coleções infecciosas",
      iconName: "FaSyringe"
    },
    {
      id: 7,
      title: "Tratamento de Úlceras e Fístulas",
      description: "Correção de úlceras complexas e fístulas digestivas",
      iconName: "FaStethoscope"
    },
    {
      id: 8,
      title: "Cirurgia de Glândulas Salivares",
      description: "Procedimentos em glândulas salivares maiores",
      iconName: "FaTeeth"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Recuperação Rápida",
      description: "Técnicas minimamente invasivas permitem retorno às atividades",
      iconName: "FaRunning"
    },
    {
      id: 2,
      title: "Menos Dor Pós-operatória",
      description: "Incisões menores resultam em menos desconforto",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 3,
      title: "Acompanhamento Completo",
      description: "Monitoramento desde a avaliação pré-operatória até alta",
      iconName: "FaClipboardCheck"
    },
    {
      id: 4,
      title: "Segurança Hospitalar",
      description: "Protocolos rigorosos de segurança cirúrgica",
      iconName: "FaShieldAlt"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor abdominal intensa",
      description: "Especialmente se localizada em quadrante específico",
      iconName: "FaStomach"
    },
    {
      id: 2,
      title: "Nódulos ou abaulamentos abdominais",
      description: "Saliências na parede abdominal que aumentam ao esforço",
      iconName: "FaBandAid"
    },
    {
      id: 3,
      title: "Sintomas de colecistite",
      description: "Dor no hipocôndrio direito após alimentação gordurosa",
      iconName: "FaUtensils"
    },
    {
      id: 4,
      title: "Sinais de apendicite",
      description: "Dor periumbilical migrando para fossa ilíaca direita",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 5,
      title: "Trauma abdominal",
      description: "Após acidentes com impacto na região abdominal",
      iconName: "FaCarCrash"
    },
    {
      id: 6,
      title: "Infecções abdominais",
      description: "Febre associada a dor abdominal localizada",
      iconName: "FaThermometer"
    }
  ],
  
  exams: ["Ultrassonografia abdominal", "Tomografia computadorizada", "Ressonância magnética", "Exames laboratoriais pré-operatórios"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Roberto Santos",
      specialty: "Cirurgia Geral e do Aparelho Digestivo",
      credentials: ["CRM-RS 54321", "Título de Especialista em Cirurgia Geral", "Membro do Colégio Brasileiro de Cirurgiões", "Pós-graduação em Cirurgia Minimamente Invasiva"],
      description: "Mais de 20 anos de experiência em cirurgia abdominal"
    },
    {
      id: 2,
      name: "Dra. Fernanda Costa",
      specialty: "Cirurgia Geral e Videolaparoscopia",
      credentials: ["CRM-RS 98765", "Especialização em Cirurgia do Trauma", "Fellowship em Cirurgia Robótica", "Membro da Sociedade Brasileira de Cirurgia Minimamente Invasiva"],
      description: "Especialista em técnicas laparoscópicas e robóticas"
    }
  ],
  
  ctaText: "Procedimentos cirúrgicos seguros com tecnologia de ponta",
  
  faq: [
    {
      question: "Qual é o tempo de recuperação após uma cirurgia laparoscópica?",
      answer: "Na maioria dos casos, o paciente retorna às atividades leves em 1-2 semanas e às atividades normais em 3-4 semanas."
    },
    {
      question: "Quais são os riscos da cirurgia geral?",
      answer: "Como qualquer cirurgia, há riscos de infecção, sangramento ou complicações anestésicas, mas seguimos protocolos rigorosos para minimizar esses riscos."
    },
    {
      question: "É necessário internamento após a cirurgia?",
      answer: "Depende do procedimento. Muitas cirurgias laparoscópicas permitem alta no mesmo dia ou no dia seguinte."
    }
  ]
},
{
  id: "cirurgia-plastica",
  title: "Cirurgia Plástica",
  description: "Procedimentos estéticos e reconstrutivos para harmonização e recuperação.",
  longDescription: "No Centro Médico Sapiranga, oferecemos cirurgia plástica com foco em segurança, resultados naturais e acompanhamento humanizado. Trabalhamos tanto na área estética quanto na reparadora.",
  tag: "CIRÚRGICA",
  image: cirurgiaPlasticaImg,
  treatmentImage: cirurgiaPlasticaAtendimentoImg,
  
  functionDescription: "O cirurgião plástico é especializado em procedimentos que modificam, restauram ou reconstroem partes do corpo, tanto por razões estéticas quanto funcionais.",
  
  approachText: "Adotamos uma abordagem personalizada, com avaliação detalhada das expectativas do paciente, planejamento cuidadoso e utilização das técnicas mais modernas e seguras.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Resultados Naturais",
      description: "Técnicas que respeitam a anatomia individual para resultados harmoniosos",
      iconName: "FaUserCheck"
    },
    {
      id: 2,
      title: "Segurança Máxima",
      description: "Protocolos rigorosos de segurança cirúrgica e acompanhamento",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Tecnologia Avançada",
      description: "Equipamentos modernos e técnicas minimamente invasivas",
      iconName: "FaMicroscope"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Mamoplastia (Cirurgia das Mamas)",
      description: "Aumento, redução ou lifting mamário personalizado",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 2,
      title: "Abdominoplastia",
      description: "Correção da flacidez abdominal e diástase muscular",
      iconName: "FaUser"
    },
    {
      id: 3,
      title: "Lipoenxertia (Lipofilling)",
      description: "Preenchimento natural com gordura do próprio corpo",
      iconName: "FaSyringe"
    },
    {
      id: 4,
      title: "Rinoplastia",
      description: "Cirurgia nasal para harmonização facial",
      iconName: "FaUserMd"
    },
    {
      id: 5,
      title: "Blefaroplastia",
      description: "Correção das pálpebras superiores e inferiores",
      iconName: "FaEye"
    },
    {
      id: 6,
      title: "Lifting Facial",
      description: "Rejuvenescimento facial com técnicas modernas",
      iconName: "FaSmile"
    },
    {
      id: 7,
      title: "Cirurgias Reconstrutivas",
      description: "Reconstrução após trauma, queimaduras ou câncer",
      iconName: "FaHandsHelping"
    },
    {
      id: 8,
      title: "Otoplastia",
      description: "Correção das orelhas em abano",
      iconName: "FaEar"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Autoestima Elevada",
      description: "Resultados que proporcionam confiança e bem-estar",
      iconName: "FaSmileBeam"
    },
    {
      id: 2,
      title: "Resultados Personalizados",
      description: "Procedimentos adaptados às características individuais",
      iconName: "FaUserEdit"
    },
    {
      id: 3,
      title: "Acompanhamento Integral",
      description: "Cuidados desde o pré até o pós-operatório",
      iconName: "FaClipboardCheck"
    },
    {
      id: 4,
      title: "Equipe Multidisciplinar",
      description: "Trabalho integrado com anestesistas e enfermeiros especializados",
      iconName: "FaUsers"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Insatisfação estética",
      description: "Desejo de melhorar aspectos do corpo que causam desconforto",
      iconName: "FaUser"
    },
    {
      id: 2,
      title: "Flacidez pós-gravidez",
      description: "Pele e músculos abdominais flácidos após gestação",
      iconName: "FaBaby"
    },
    {
      id: 3,
      title: "Assimetria mamária",
      description: "Diferença significativa entre as mamas",
      iconName: "FaBalanceScale"
    },
    {
      id: 4,
      title: "Excesso de pele após perda de peso",
      description: "Flacidez cutânea após emagrecimento significativo",
      iconName: "FaWeight"
    },
    {
      id: 5,
      title: "Necessidade reconstrutiva",
      description: "Após mastectomia, trauma ou queimaduras",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 6,
      title: "Envelhecimento facial",
      description: "Sinais de flacidez na face e pescoço",
      iconName: "FaClock"
    }
  ],
  
  exams: ["Exames laboratoriais pré-operatórios", "Ecocardiograma quando necessário", "Avaliação psicológica em alguns casos", "Fotografias documentais"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Marcelo Almeida",
      specialty: "Cirurgia Plástica Estética e Reconstrutiva",
      credentials: ["CRM-RS 13579", "Título de Especialista em Cirurgia Plástica", "Membro da Sociedade Brasileira de Cirurgia Plástica", "Fellowship em Cirurgia Estética Facial"],
      description: "15 anos de experiência com foco em resultados naturais e harmoniosos"
    },
    {
      id: 2,
      name: "Dra. Beatriz Rocha",
      specialty: "Cirurgia Plástica Mamária e Corporal",
      credentials: ["CRM-RS 24680", "Especialização em Microcirurgia Reconstrutiva", "Membro do International Society of Aesthetic Plastic Surgery", "Pós-graduação em Harmonização Facial"],
      description: "Especialista em cirurgia mamária e técnicas minimamente invasivas"
    }
  ],
  
  ctaText: "Realize seus objetivos estéticos com segurança e qualidade",
  
  faq: [
    {
      question: "Qual é o tempo necessário para ver os resultados finais?",
      answer: "Os resultados evoluem gradualmente. O inchaço diminui em semanas, mas o resultado final pode levar de 6 meses a 1 ano."
    },
    {
      question: "As cicatrizes são visíveis?",
      answer: "Utilizamos técnicas para minimizar cicatrizes, posicionando-as em áreas discretas. Com os cuidados adequados, tornam-se quase imperceptíveis."
    },
    {
      question: "É possível financiar a cirurgia plástica?",
      answer: "Sim, oferecemos opções de parcelamento e orientamos sobre planos de saúde que cobrem procedimentos reconstrutivos."
    },
    {
      question: "Qual é a idade mínima para cirurgia plástica?",
      answer: "Depende do procedimento. Para rinoplastia e otoplastia, geralmente após o desenvolvimento completo (15-16 anos). Para outras cirurgias, avaliação individual."
    }
  ]
},
{
  id: "cirurgia-vascular",
  title: "Cirurgia Vascular",
  description: "Diagnóstico e tratamento das doenças das artérias, veias e vasos linfáticos.",
  longDescription: "No Centro Médico Sapiranga, oferecemos tratamento completo para doenças vasculares, desde condições venosas até patologias arteriais complexas, com técnicas minimamente invasivas.",
  tag: "CIRÚRGICA",
  image: cirurgiaVascularImg,
  
  functionDescription: "O cirurgião vascular é especialista no diagnóstico e tratamento cirúrgico e clínico das doenças que acometem o sistema circulatório periférico.",
  
  approachText: "Utilizamos abordagem individualizada, combinando tratamentos clínicos, procedimentos endovasculares e cirurgias tradicionais quando necessário.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Procedimentos Endovasculares",
      description: "Técnicas minimamente invasivas por dentro dos vasos",
      iconName: "FaHeartbeat"
    },
    {
      id: 2,
      title: "Diagnóstico Preciso",
      description: "Ecografia vascular e angiotomografia para avaliação detalhada",
      iconName: "FaSearch"
    },
    {
      id: 3,
      title: "Tratamento de Úlceras",
      description: "Cura completa de úlceras venosas e arteriais",
      iconName: "FaBandAid"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Tratamento de Varizes",
      description: "Escleroterapia, laser e cirurgia para veias dilatadas",
      iconName: "FaRoute"
    },
    {
      id: 2,
      title: "Cirurgia de Aneurismas",
      description: "Tratamento de aneurismas de aorta e artérias periféricas",
      iconName: "FaArtery"
    },
    {
      id: 3,
      title: "Angioplastias e Stents",
      description: "Desobstrução de artérias com balão e próteses",
      iconName: "FaHeart"
    },
    {
      id: 4,
      title: "Tratamento de Trombose",
      description: "Manejo de trombose venosa profunda e superficial",
      iconName: "FaSyringe"
    },
    {
      id: 5,
      title: "Cirurgia Carotídea",
      description: "Prevenção de AVC através da desobstrução das carótidas",
      iconName: "FaBrain"
    },
    {
      id: 6,
      title: "Tratamento de Pé Diabético",
      description: "Preservação dos membros em pacientes diabéticos",
      iconName: "FaWalking"
    },
    {
      id: 7,
      title: "Fístulas para Hemodiálise",
      description: "Criação e manutenção de acesso vascular para diálise",
      iconName: "FaHands"
    },
    {
      id: 8,
      title: "Cirurgia Linfática",
      description: "Tratamento do linfedema e insuficiência linfática",
      iconName: "FaWater"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Prevenção de Amputações",
      description: "Preservação dos membros em casos de isquemia crítica",
      iconName: "FaUserShield"
    },
    {
      id: 2,
      title: "Recuperação Rápida",
      description: "Procedimentos minimamente invasivos com alta precoce",
      iconName: "FaRunning"
    },
    {
      id: 3,
      title: "Alívio Imediato",
      description: "Redução rápida da dor e desconforto vascular",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 4,
      title: "Acompanhamento Contínuo",
      description: "Monitoramento a longo prazo para prevenção de recidivas",
      iconName: "FaClipboardCheck"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor nas pernas ao caminhar",
      description: "Dor tipo cãibra que melhora com repouso (claudicação)",
      iconName: "FaWalking"
    },
    {
      id: 2,
      title: "Varizes visíveis",
      description: "Veias dilatadas, tortuosas ou com sintomas de peso",
      iconName: "FaRoute"
    },
    {
      id: 3,
      title: "Inchaço nas pernas",
      description: "Edema persistente, especialmente unilateral",
      iconName: "FaWater"
    },
    {
      id: 4,
      title: "Feridas que não cicatrizam",
      description: "Úlceras nos membros inferiores com mais de 4 semanas",
      iconName: "FaBandAid"
    },
    {
      id: 5,
      title: "Pulsação anormal",
      description: "Ausência de pulsos ou presença de massas pulsáteis",
      iconName: "FaHeartbeat"
    },
    {
      id: 6,
      title: "Mudança de cor na pele",
      description: "Pés ou dedos pálidos, arroxeados ou escurecidos",
      iconName: "FaPalette"
    },
    {
      id: 7,
      title: "Histórico familiar",
      description: "Parentes com aneurismas ou doença arterial precoce",
      iconName: "FaUsers"
    }
  ],
  
  exams: ["Ecografia Doppler vascular", "Angiotomografia", "Angiorressonância", "Pletismografia", "Índice tornozelo-braquial", "Exames laboratoriais de coagulação"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. André Costa",
      specialty: "Cirurgia Vascular e Endovascular",
      credentials: ["CRM-RS 11223", "Título de Especialista em Cirurgia Vascular", "Fellowship em Cirurgia Endovascular", "Membro da Sociedade Brasileira de Angiologia e Cirurgia Vascular"],
      description: "12 anos de experiência em procedimentos endovasculares e cirurgia vascular complexa"
    },
    {
      id: 2,
      name: "Dra. Juliana Mendes",
      specialty: "Angiologia e Cirurgia Vascular",
      credentials: ["CRM-RS 33445", "Especialização em Flebologia", "Membro do American College of Phlebology", "Pós-graduação em Ultrassonografia Vascular"],
      description: "Especialista em tratamento de varizes e doenças venosas crônicas"
    }
  ],
  
  ctaText: "Cuide da sua circulação para uma vida mais ativa e saudável",
  
  faq: [
    {
      question: "O tratamento de varizes é definitivo?",
      answer: "O tratamento elimina as varizes existentes, mas não impede o aparecimento de novas. Controle periódico é importante."
    },
    {
      question: "Cirurgia vascular é perigosa?",
      answer: "Todas as cirurgias têm riscos, mas as técnicas modernas minimamente invasivas reduzem significativamente as complicações."
    },
    {
      question: "É preciso internar para tratar varizes?",
      answer: "A maioria dos tratamentos para varizes é ambulatorial, com alta no mesmo dia."
    },
    {
      question: "Quanto tempo dura uma angioplastia?",
      answer: "Procedimentos endovasculares geralmente duram de 1 a 3 horas, dependendo da complexidade."
    }
  ]
},
{
  id: "clinica-geral",
  title: "Clínica Geral",
  description: "Atenção primária integral à saúde para toda a família.",
  longDescription: "No Centro Médico Sapiranga, nossos clínicos gerais oferecem cuidado abrangente e continuado, sendo a porta de entrada para o sistema de saúde e coordenando o atendimento com especialistas quando necessário.",
  tag: "CLÍNICA",
  image: clinicaGeralImg,
  
  functionDescription: "O médico de clínica geral é o especialista em atenção primária, responsável pelo diagnóstico inicial, tratamento de doenças comuns e encaminhamento adequado para outras especialidades.",
  
  approachText: "Adotamos uma abordagem holística, considerando o paciente em sua totalidade - aspectos físicos, emocionais e sociais - com foco na prevenção e promoção da saúde.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Primeiro Contato",
      description: "Avaliação inicial e encaminhamento adequado para especialistas",
      iconName: "FaUserMd"
    },
    {
      id: 2,
      title: "Atenção Integral",
      description: "Cuidado de todos os aspectos da saúde do paciente",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 3,
      title: "Continuidade do Cuidado",
      description: "Acompanhamento longitudinal da saúde ao longo da vida",
      iconName: "FaHistory"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consultas de Rotina",
      description: "Avaliação geral de saúde e orientação preventiva",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Check-up Anual",
      description: "Avaliação completa com exames preventivos",
      iconName: "FaClipboardCheck"
    },
    {
      id: 3,
      title: "Tratamento de Doenças Agudas",
      description: "Manejo de infecções, dores e condições súbitas",
      iconName: "FaThermometer"
    },
    {
      id: 4,
      title: "Controle de Doenças Crônicas",
      description: "Acompanhamento de hipertensão, diabetes e outras condições",
      iconName: "FaChartLine"
    },
    {
      id: 5,
      title: "Avaliação Pré-operatória",
      description: "Preparação clínica para procedimentos cirúrgicos",
      iconName: "FaHospitalUser"
    },
    {
      id: 6,
      title: "Saúde da Família",
      description: "Cuidado integral para pacientes de todas as idades",
      iconName: "FaUsers"
    },
    {
      id: 7,
      title: "Vacinação Adulta",
      description: "Aplicação e orientação sobre vacinas para adultos",
      iconName: "FaSyringe"
    },
    {
      id: 8,
      title: "Encaminhamento Especializado",
      description: "Indicação e coordenação com outras especialidades",
      iconName: "FaExchangeAlt"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Acesso Fácil",
      description: "Agilidade no atendimento para problemas de saúde comuns",
      iconName: "FaDoorOpen"
    },
    {
      id: 2,
      title: "Cuidado Personalizado",
      description: "Conhecimento do histórico completo do paciente",
      iconName: "FaUserEdit"
    },
    {
      id: 3,
      title: "Prevenção Eficaz",
      description: "Identificação precoce de problemas de saúde",
      iconName: "FaShieldAlt"
    },
    {
      id: 4,
      title: "Economia de Tempo",
      description: "Resolução de múltiplas questões em uma única consulta",
      iconName: "FaClock"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Sintomas gerais",
      description: "Febre, dor não especificada, mal-estar, fadiga",
      iconName: "FaThermometer"
    },
    {
      id: 2,
      title: "Check-up preventivo",
      description: "Mesmo sem sintomas, para avaliação anual",
      iconName: "FaClipboardCheck"
    },
    {
      id: 3,
      title: "Acompanhamento de doenças crônicas",
      description: "Hipertensão, diabetes, colesterol, asma",
      iconName: "FaHeartbeat"
    },
    {
      id: 4,
      title: "Orientações sobre saúde",
      description: "Dúvidas sobre hábitos saudáveis e prevenção",
      iconName: "FaQuestionCircle"
    },
    {
      id: 5,
      title: "Infecções comuns",
      description: "Gripes, resfriados, infecções urinárias leves",
      iconName: "FaHeadSideCough"
    },
    {
      id: 6,
      title: "Dores diversas",
      description: "Cefaleia, dor abdominal, dor muscular",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 7,
      title: "Atestados e receitas",
      description: "Renovação de receitas e documentos médicos",
      iconName: "FaFileMedical"
    }
  ],
  
  exams: ["Exames laboratoriais básicos", "Eletrocardiograma", "Raio-X simples", "Aferição de pressão arterial", "Medição de glicemia capilar", "Teste rápido para doenças infecciosas"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Maria Helena Santos",
      specialty: "Clínica Geral e Medicina de Família",
      credentials: ["CRM-RS 55667", "Título de Especialista em Clínica Médica", "Pós-graduação em Medicina de Família", "Membro da Sociedade Brasileira de Clínica Médica"],
      description: "Mais de 25 anos de experiência em atenção primária e cuidado familiar"
    },
    {
      id: 2,
      name: "Dr. João Pedro Oliveira",
      specialty: "Clínica Geral e Urgência",
      credentials: ["CRM-RS 77889", "Especialização em Medicina de Urgência", "Mestrado em Saúde Pública", "Atuante em Pronto Atendimento há 15 anos"],
      description: "Especialista no manejo inicial de diversas condições clínicas"
    },
    {
      id: 3,
      name: "Dra. Carolina Silva",
      specialty: "Clínica Geral e Geriatria",
      credentials: ["CRM-RS 99001", "Pós-graduação em Cuidados Paliativos", "Especialização em Saúde do Adulto e Idoso", "Membro da Sociedade Brasileira de Geriatria e Gerontologia"],
      description: "Foco na saúde do adulto e idoso com abordagem integral"
    }
  ],
  
  ctaText: "Seu médico de confiança para cuidar de toda a família",
  
  faq: [
    {
      question: "Preciso de encaminhamento para consultar um clínico geral?",
      answer: "Não, o clínico geral é a porta de entrada do sistema de saúde e não requer encaminhamento."
    },
    {
      question: "Com que frequência devo fazer check-up?",
      answer: "Recomenda-se check-up anual para adultos saudáveis. Pacientes com doenças crônicas precisam de acompanhamento mais frequente."
    },
    {
      question: "O clínico geral pode atender crianças?",
      answer: "Sim, clínicos gerais podem atender pacientes de todas as idades, desde recém-nascidos até idosos."
    },
    {
      question: "Quando devo procurar um clínico geral ao invés de um especialista?",
      answer: "Sempre que houver sintomas não específicos ou para avaliação inicial. O clínico irá encaminhar ao especialista adequado se necessário."
    }
  ]
},
{
  id: "clinica-geral-integrativa",
  title: "Clínica Geral Integrativa",
  description: "Medicina que integra abordagens convencionais e complementares para cura integral.",
  longDescription: "No Centro Médico Sapiranga, praticamos uma medicina integrativa que une os melhores da medicina convencional com terapias complementares comprovadas, tratando o paciente como um todo - corpo, mente e espírito.",
  tag: "CLÍNICA",
  image: clinicaIntegrativaImg,
  
  functionDescription: "O médico de clínica integrativa combina tratamentos convencionais com abordagens complementares baseadas em evidências, focando na causa raiz das doenças e na promoção da saúde integral.",
  
  approachText: "Utilizamos uma abordagem 360º, considerando aspectos físicos, emocionais, nutricionais, sociais e espirituais, com foco na prevenção, autocura e equilíbrio sistêmico.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Abordagem Holística",
      description: "Visão integral do ser humano em todas as suas dimensões",
      iconName: "FaGlobeAmericas"
    },
    {
      id: 2,
      title: "Medicina Baseada em Evidências",
      description: "Integração de terapias complementares com comprovação científica",
      iconName: "FaFlask"
    },
    {
      id: 3,
      title: "Empoderamento do Paciente",
      description: "Participação ativa do paciente no processo de cura",
      iconName: "FaUserShield"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Avaliação Integrativa Completa",
      description: "Análise detalhada de todos os sistemas corporais e emocionais",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Medicina do Estilo de Vida",
      description: "Programas personalizados de nutrição, exercício e manejo do estresse",
      iconName: "FaRunning"
    },
    {
      id: 3,
      title: "Terapia Ortomolecular",
      description: "Suplementação individualizada de vitaminas e minerais",
      iconName: "FaPills"
    },
    {
      id: 4,
      title: "Medicina Ayurveda Integrada",
      description: "Princípios ayurvédicos adaptados à medicina ocidental",
      iconName: "FaLeaf"
    },
    {
      id: 5,
      title: "Acupuntura Médica",
      description: "Estimulação de pontos energéticos para equilíbrio orgânico",
      iconName: "FaDotCircle"
    },
    {
      id: 6,
      title: "Manejo Integrativo da Dor",
      description: "Abordagem multidimensional para dor crônica",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 7,
      title: "Detoxificação e Saúde Intestinal",
      description: "Programas de desintoxicação e equilíbrio da microbiota",
      iconName: "FaRecycle"
    },
    {
      id: 8,
      title: "Terapias Mente-Corpo",
      description: "Meditação, mindfulness e técnicas de respiração",
      iconName: "FaBrain"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Tratamento Personalizado",
      description: "Protocolos únicos para cada indivíduo e sua condição",
      iconName: "FaUserEdit"
    },
    {
      id: 2,
      title: "Prevenção Avançada",
      description: "Identificação precoce de desequilíbrios antes da doença",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Menos Medicamentos",
      description: "Redução da necessidade de fármacos através de métodos naturais",
      iconName: "FaPills"
    },
    {
      id: 4,
      title: "Qualidade de Vida",
      description: "Melhora global do bem-estar físico e emocional",
      iconName: "FaSmileBeam"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Doenças crônicas complexas",
      description: "Condições que não respondem bem ao tratamento convencional",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 2,
      title: "Síndrome de burnout ou estresse crônico",
      description: "Esgotamento físico e emocional prolongado",
      iconName: "FaTired"
    },
    {
      id: 3,
      title: "Desejo de prevenção ativa",
      description: "Busca por envelhecimento saudável e qualidade de vida",
      iconName: "FaHeartbeat"
    },
    {
      id: 4,
      title: "Desequilíbrios hormonais",
      description: "Distúrbios tireoidianos, menopausa, andropausa",
      iconName: "FaBalanceScale"
    },
    {
      id: 5,
      title: "Problemas digestivos crônicos",
      description: "SII, intolerâncias, doença inflamatória intestinal",
      iconName: "FaStomach"
    },
    {
      id: 6,
      title: "Fadiga inexplicada",
      description: "Cansaço persistente sem causa aparente",
      iconName: "FaBed"
    },
    {
      id: 7,
      title: "Busca por tratamentos naturais",
      description: "Preferência por abordagens menos invasivas",
      iconName: "FaLeaf"
    }
  ],
  
  exams: ["Exames laboratoriais avançados", "Teste de intolerância alimentar", "Análise de vitaminas e minerais", "Avaliação hormonal completa", "Teste de estresse oxidativo", "Mapa de microbiota intestinal"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Sofia Almeida",
      specialty: "Medicina Integrativa e Funcional",
      credentials: ["CRM-RS 22334", "Pós-graduação em Medicina Integrativa", "Certificação em Medicina Funcional", "Formação em Ayurveda", "Membro da Academia Americana de Medicina Anti-Aging"],
      description: "10 anos de experiência integrando medicina convencional e complementar"
    },
    {
      id: 2,
      name: "Dr. Ricardo Martins",
      specialty: "Clínica Integrativa e Longevidade",
      credentials: ["CRM-RS 44556", "Mestrado em Ciências da Saúde", "Formação em Acupuntura Médica", "Especialização em Nutrologia", "Membro da Sociedade Brasileira de Medicina Integrativa"],
      description: "Especialista em promoção da saúde e envelhecimento saudável"
    },
    {
      id: 3,
      name: "Dra. Camila Fernandes",
      specialty: "Medicina do Estilo de Vida",
      credentials: ["CRM-RS 66778", "Board Certified in Lifestyle Medicine", "Formação em Mindfulness-Based Stress Reduction", "Especialização em Psiconeuroimunologia", "Instrutora de Yoga Terapêutico"],
      description: "Foco em mudanças comportamentais sustentáveis para saúde integral"
    }
  ],
  
  ctaText: "Descubra o poder da cura integral - onde ciência e natureza se encontram",
  
  faq: [
    {
      question: "A medicina integrativa substitui a medicina convencional?",
      answer: "Não, ela complementa. Utilizamos o melhor de ambas as abordagens, com tratamentos convencionais quando necessários e complementares quando apropriados."
    },
    {
      question: "Os planos de saúde cobrem medicina integrativa?",
      answer: "Algumas consultas e exames são cobertos. Procedimentos específicos podem ter cobertura parcial ou exigir pagamento particular."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Varia conforme a condição. Algumas melhorias são imediatas, enquanto mudanças profundas podem levar semanas ou meses."
    },
    {
      question: "Posso continuar meus medicamentos convencionais?",
      answer: "Sim, nunca suspendemos medicamentos sem avaliação cuidadosa. Trabalhamos para otimizar e, quando possível, reduzir gradualmente."
    },
    {
      question: "A medicina integrativa é reconhecida pelo CFM?",
      answer: "Sim, a medicina integrativa é reconhecida como área de atuação médica e segue rigorosos padrões científicos."
    }
  ]
},
{
  id: "dermatologia",
  title: "Dermatologia",
  description: "Cuidados especializados para a saúde da pele, cabelos e unhas.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de dermatologia oferece diagnóstico e tratamento de doenças cutâneas, além de procedimentos estéticos com segurança e tecnologia de ponta.",
  tag: "CLÍNICA",
  image: dermatologiaImg,
  
  functionDescription: "O dermatologista é especialista no diagnóstico, tratamento e prevenção de doenças da pele, cabelos, unhas e mucosas, além de realizar procedimentos estéticos dermatológicos.",
  
  approachText: "Combinamos expertise clínica com tecnologias avançadas para oferecer tratamentos personalizados, desde condições dermatológicas comuns até casos complexos.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Diagnóstico Preciso",
      description: "Dermatoscopia e biópsias para identificação precisa das lesões",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Tecnologia Avançada",
      description: "Laser, luz pulsada e radiofrequência para tratamentos eficazes",
      iconName: "FaMicroscope"
    },
    {
      id: 3,
      title: "Prevenção do Câncer de Pele",
      description: "Mapeamento corporal e acompanhamento de lesões suspeitas",
      iconName: "FaShieldAlt"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Dermatológica Completa",
      description: "Avaliação detalhada da pele, cabelos e unhas",
      iconName: "FaUserMd"
    },
    {
      id: 2,
      title: "Tratamento de Acne",
      description: "Protocolos personalizados para acne leve a grave",
      iconName: "FaTint"
    },
    {
      id: 3,
      title: "Dermatologia Estética",
      description: "Preenchimentos, toxina botulínica e bioestimuladores",
      iconName: "FaMagic"
    },
    {
      id: 4,
      title: "Cirurgia Dermatológica",
      description: "Remoção de lesões benignas e malignas com técnica adequada",
      iconName: "FaCut"
    },
    {
      id: 5,
      title: "Tratamento de Alopecia",
      description: "Queda de cabelo masculina e feminina com abordagem moderna",
      iconName: "FaUser"
    },
    {
      id: 6,
      title: "Dermatoscopia Digital",
      description: "Monitoramento computadorizado de pintas e lesões",
      iconName: "FaCamera"
    },
    {
      id: 7,
      title: "Tratamento Laser",
      description: "Remoção de manchas, tatuagens, vasos e pelos",
      iconName: "FaBurn"
    },
    {
      id: 8,
      title: "Onicologia (Unhas)",
      description: "Tratamento de micoses e doenças ungueais",
      iconName: "FaHandScissors"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Saúde Cutânea",
      description: "Diagnóstico e tratamento precoce de doenças da pele",
      iconName: "FaHeart"
    },
    {
      id: 2,
      title: "Autoestima",
      description: "Melhora da aparência e confiança pessoal",
      iconName: "FaSmileBeam"
    },
    {
      id: 3,
      title: "Prevenção Eficaz",
      description: "Detecção precoce do câncer de pele",
      iconName: "FaShieldAlt"
    },
    {
      id: 4,
      title: "Tratamento Personalizado",
      description: "Protocolos adaptados ao tipo de pele e condição",
      iconName: "FaUserEdit"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Lesões na pele",
      description: "Pintas que mudam, crescem ou sangram",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 2,
      title: "Acne persistente",
      description: "Espinhas que não melhoram com tratamentos comuns",
      iconName: "FaTint"
    },
    {
      id: 3,
      title: "Queda de cabelo",
      description: "Perda capilar anormal ou em áreas específicas",
      iconName: "FaUser"
    },
    {
      id: 4,
      title: "Coceira intensa",
      description: "Prurido que interfere no sono ou atividades diárias",
      iconName: "FaItch"
    },
    {
      id: 5,
      title: "Manchas na pele",
      description: "Hipercromias, melasma ou manchas senis",
      iconName: "FaPalette"
    },
    {
      id: 6,
      title: "Unhas alteradas",
      description: "Espessamento, descolamento ou mudança de cor",
      iconName: "FaHandScissors"
    },
    {
      id: 7,
      title: "Histórico familiar",
      description: "Parentes com câncer de pele ou doenças dermatológicas",
      iconName: "FaUsers"
    }
  ],
  
  exams: ["Dermatoscopia", "Biópsia cutânea", "Teste de contato", "Tricoscopia", "Onicoscopia", "Exame micológico", "Fotografia dermatológica"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Beatriz Oliveira",
      specialty: "Dermatologia Clínica, Cirúrgica e Estética",
      credentials: ["CRM-RS 88990", "Título de Especialista em Dermatologia", "Fellowship em Dermatoscopia", "Membro da Sociedade Brasileira de Dermatologia"],
      description: "15 anos de experiência com foco em diagnóstico precoce de câncer de pele"
    },
    {
      id: 2,
      name: "Dr. Gabriel Santos",
      specialty: "Dermatologia Estética e Laser",
      credentials: ["CRM-RS 11223", "Especialização em Laser Dermatológico", "Certificação Internacional em Toxina Botulínica", "Membro da American Academy of Dermatology"],
      description: "Especialista em procedimentos estéticos minimamente invasivos"
    },
    {
      id: 3,
      name: "Dra. Mariana Costa",
      specialty: "Tricologia e Dermatologia Capilar",
      credentials: ["CRM-RS 33445", "Pós-graduação em Tricologia", "Especialização em Transplante Capilar", "Membro da European Hair Research Society"],
      description: "Referência em tratamento de queda de cabelo e doenças do couro cabeludo"
    }
  ],
  
  ctaText: "Cuide da sua pele com quem entende - saúde e beleza em harmonia",
  
  faq: [
    {
      question: "Com que frequência devo fazer check-up dermatológico?",
      answer: "Recomenda-se consulta anual. Pessoas com muitas pintas, histórico familiar ou pele clara devem fazer a cada 6 meses."
    },
    {
      question: "O sol é sempre prejudicial para a pele?",
      answer: "Em excesso, sim. Mas em horários adequados e com proteção, o sol é importante para síntese de vitamina D."
    },
    {
      question: "Acne tem cura?",
      answer: "Pode ser controlada eficazmente. Em muitos casos há remissão completa com tratamento adequado."
    },
    {
      question: "Produtos de beleza podem causar alergia?",
      answer: "Sim, é comum. Teste de contato pode identificar os componentes alergênicos."
    },
    {
      question: "Quando uma pinta é perigosa?",
      answer: "Quando apresenta: Assimetria, Bordas irregulares, Cor variada, Diâmetro maior que 6mm, Evolução (mudanças recentes)."
    }
  ]
},
{
  id: "endocrinologia",
  title: "Endocrinologia",
  description: "Especializada no diagnóstico e tratamento das glândulas e hormônios.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de endocrinologia cuida do equilíbrio hormonal e do metabolismo, tratando desde diabetes até distúrbios da tireoide com abordagem personalizada.",
  tag: "CLÍNICA",
  image: endocrinologiaImg,
  
  functionDescription: "O endocrinologista é especialista no diagnóstico e tratamento das doenças relacionadas às glândulas endócrinas e aos hormônios que produzem.",
  
  approachText: "Utilizamos abordagem integrada, considerando aspectos nutricionais, metabólicos e hormonais para restaurar o equilíbrio endócrino e melhorar a qualidade de vida.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Controle do Diabetes",
      description: "Tratamento individualizado para todos os tipos de diabetes",
      iconName: "FaSyringe"
    },
    {
      id: 2,
      title: "Equilíbrio Hormonal",
      description: "Ajuste preciso dos níveis hormonais para saúde integral",
      iconName: "FaBalanceScale"
    },
    {
      id: 3,
      title: "Prevenção de Complicações",
      description: "Manejo precoce para evitar complicações metabólicas",
      iconName: "FaShieldAlt"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Controle do Diabetes",
      description: "Tratamento personalizado para diabetes tipo 1, tipo 2 e gestacional",
      iconName: "FaHeartbeat"
    },
    {
      id: 2,
      title: "Doenças da Tireoide",
      description: "Hipotireoidismo, hipertireoidismo, nódulos e câncer de tireoide",
      iconName: "FaHospitalAlt"
    },
    {
      id: 3,
      title: "Distúrbios Metabólicos",
      description: "Obesidade, síndrome metabólica, dislipidemias",
      iconName: "FaWeight"
    },
    {
      id: 4,
      title: "Endocrinologia Feminina",
      description: "SOP, menopausa, distúrbios menstruais, hirsutismo",
      iconName: "FaFemale"
    },
    {
      id: 5,
      title: "Endocrinologia Masculina",
      description: "Hipogonadismo, andropausa, ginecomastia",
      iconName: "FaMale"
    },
    {
      id: 6,
      title: "Doenças da Glândula Adrenal",
      description: "Síndrome de Cushing, doença de Addison, feocromocitoma",
      iconName: "FaChartLine"
    },
    {
      id: 7,
      title: "Distúrbios do Crescimento",
      description: "Baixa estatura em crianças e adolescentes",
      iconName: "FaChild"
    },
    {
      id: 8,
      title: "Osteoporose e Metabolismo Ósseo",
      description: "Prevenção e tratamento da perda de massa óssea",
      iconName: "FaBone"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Controle Glicêmico Eficaz",
      description: "Manutenção dos níveis de glicose dentro da meta",
      iconName: "FaChartLine"
    },
    {
      id: 2,
      title: "Qualidade de Vida",
      description: "Melhora dos sintomas relacionados aos desequilíbrios hormonais",
      iconName: "FaSmileBeam"
    },
    {
      id: 3,
      title: "Prevenção de Complicações",
      description: "Redução do risco de problemas cardiovasculares, renais e oculares",
      iconName: "FaUserShield"
    },
    {
      id: 4,
      title: "Emagrecimento Saudável",
      description: "Perda de peso sustentável com abordagem metabólica",
      iconName: "FaRunning"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Sede excessiva e urina frequente",
      description: "Sinais clássicos de diabetes descompensado",
      iconName: "FaTint"
    },
    {
      id: 2,
      title: "Cansaço inexplicável",
      description: "Fadiga persistente sem causa aparente",
      iconName: "FaBed"
    },
    {
      id: 3,
      title: "Ganho ou perda de peso rápido",
      description: "Alterações significativas no peso sem mudança de hábitos",
      iconName: "FaWeight"
    },
    {
      id: 4,
      title: "Distúrbios menstruais",
      description: "Ciclos irregulares, ausência ou excesso de menstruação",
      iconName: "FaCalendarAlt"
    },
    {
      id: 5,
      title: "Nódulo no pescoço",
      description: "Inchaço ou nódulo perceptível na região da tireoide",
      iconName: "FaHandPointer"
    },
    {
      id: 6,
      title: "Colesterol ou triglicerídeos altos",
      description: "Mesmo com dieta e exercícios adequados",
      iconName: "FaChartPie"
    },
    {
      id: 7,
      title: "Histórico familiar",
      description: "Parentes com diabetes, tireoide ou outras doenças endócrinas",
      iconName: "FaUsers"
    }
  ],
  
  exams: ["Dosagens hormonais", "Hemoglobina glicada", "Curva glicêmica", "Ultrassom da tireoide", "Densitometria óssea", "Perfil lipídico", "Teste de função adrenal", "Punção aspirativa de tireoide"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Eduardo Mendes",
      specialty: "Endocrinologia e Metabologia",
      credentials: ["CRM-RS 55667", "Título de Especialista em Endocrinologia", "Mestrado em Diabetes Mellitus", "Membro da Sociedade Brasileira de Endocrinologia e Metabologia"],
      description: "20 anos de experiência no manejo do diabetes e doenças metabólicas"
    },
    {
      id: 2,
      name: "Dra. Fernanda Alves",
      specialty: "Endocrinologia Pediátrica e do Adulto",
      credentials: ["CRM-RS 77889", "Especialização em Endocrinologia Pediátrica", "Fellowship em Tireoide", "Membro da European Society of Endocrinology"],
      description: "Especialista em distúrbios da tireoide e endocrinologia feminina"
    },
    {
      id: 3,
      name: "Dr. Lucas Rodrigues",
      specialty: "Endocrinologia do Esporte e Obesidade",
      credentials: ["CRM-RS 99001", "Pós-graduação em Nutrologia", "Certificação em Medicina do Esporte", "Membro da The Obesity Society"],
      description: "Foco em metabolismo, emagrecimento e performance esportiva"
    }
  ],
  
  ctaText: "Equilibre seus hormônios e recupere sua vitalidade",
  
  faq: [
    {
      question: "O diabetes tem cura?",
      answer: "Diabetes tipo 1 não tem cura, mas tem controle excelente. Diabetes tipo 2 pode entrar em remissão com mudanças de estilo de vida adequadas."
    },
    {
      question: "Todas as pessoas com nódulo na tireoide precisam operar?",
      answer: "Não, apenas cerca de 10% dos nódulos são malignos. A maioria é benigna e pode ser acompanhada."
    },
    {
      question: "É normal engordar na menopausa?",
      answer: "É comum devido às mudanças hormonais, mas pode ser controlado com acompanhamento endócrino adequado."
    },
    {
      question: "Hormônios da tireoide engordam?",
      answer: "Não, quando usados na dose correta apenas repõem o que o corpo não produz. Doses inadequadas podem afetar o peso."
    },
    {
      question: "Com que frequência devo medir minha glicose?",
      answer: "Depende do tipo de diabetes e do controle. Pacientes estáveis podem medir menos frequentemente, enquanto instáveis precisam de monitoramento diário."
    }
  ]
},
{
  id: "gastroenterologia",
  title: "Gastroenterologia",
  description: "Especializada no diagnóstico e tratamento do aparelho digestivo.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de gastroenterologia oferece cuidado completo para doenças do esôfago, estômago, intestinos, fígado, vesícula e pâncreas, com tecnologia endoscópica de ponta.",
  tag: "CLÍNICA",
  image: gastroenterologiaImg,
  
  functionDescription: "O gastroenterologista é especialista no diagnóstico e tratamento das doenças que afetam todo o trato gastrointestinal, desde a boca até o ânus, incluindo órgãos digestivos anexos.",
  
  approachText: "Combinamos avaliação clínica detalhada com exames endoscópicos avançados para diagnóstico preciso e tratamento eficaz das condições digestivas.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Endoscopia Avançada",
      description: "Tecnologia HD e magnificação para diagnósticos precisos",
      iconName: "FaCamera"
    },
    {
      id: 2,
      title: "Tratamento Minimamente Invasivo",
      description: "Procedimentos terapêuticos por endoscopia sem necessidade de cirurgia",
      iconName: "FaMicroscope"
    },
    {
      id: 3,
      title: "Prevenção do Câncer Digestivo",
      description: "Rastreamento e detecção precoce através de exames periódicos",
      iconName: "FaShieldAlt"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Endoscopia Digestiva Alta",
      description: "Avaliação de esôfago, estômago e duodeno com biópsias quando necessário",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Colonoscopia",
      description: "Exame completo do cólon para diagnóstico e prevenção de câncer",
      iconName: "FaStethoscope"
    },
    {
      id: 3,
      title: "Retirada de Pólipos",
      description: "Remoção endoscópica de lesões pré-cancerosas",
      iconName: "FaCut"
    },
    {
      id: 4,
      title: "Tratamento de Refluxo Gastroesofágico",
      description: "Avaliação e manejo da doença do refluxo",
      iconName: "FaFire"
    },
    {
      id: 5,
      title: "Hepatologia",
      description: "Doenças do fígado como hepatites, esteatose e cirrose",
      iconName: "FaLeaf"
    },
    {
      id: 6,
      title: "Doenças Inflamatórias Intestinais",
      description: "Tratamento de Crohn, retocolite e colites",
      iconName: "FaStomach"
    },
    {
      id: 7,
      title: "Síndrome do Intestino Irritável",
      description: "Manejo personalizado dos distúrbios funcionais intestinais",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 8,
      title: "Endoscopia Terapêutica",
      description: "Dilatações, colocação de próteses e tratamentos hemostáticos",
      iconName: "FaTools"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Diagnóstico Preciso",
      description: "Visualização direta do trato digestivo para identificação exata",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Prevenção Eficaz",
      description: "Detecção e remoção de lesões pré-cancerosas",
      iconName: "FaUserShield"
    },
    {
      id: 3,
      title: "Tratamento Menos Invasivo",
      description: "Muitas condições tratadas por endoscopia sem cirurgia",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 4,
      title: "Melhora da Qualidade de Vida",
      description: "Alívio de sintomas digestivos incapacitantes",
      iconName: "FaSmileBeam"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor abdominal persistente",
      description: "Desconforto digestivo que não melhora com medidas simples",
      iconName: "FaStomach"
    },
    {
      id: 2,
      title: "Azia ou refluxo frequente",
      description: "Queimação retroesternal após alimentação ou ao deitar",
      iconName: "FaFire"
    },
    {
      id: 3,
      title: "Alteração do hábito intestinal",
      description: "Constipação ou diarreia por mais de 4 semanas",
      iconName: "FaToilet"
    },
    {
      id: 4,
      title: "Sangramento digestivo",
      description: "Sangue nas fezes ou vômitos com sangue",
      iconName: "FaTint"
    },
    {
      id: 5,
      title: "Dificuldade para engolir",
      description: "Sensação de alimento parado ou dor ao deglutir",
      iconName: "FaUtensils"
    },
    {
      id: 6,
      title: "Perda de peso não intencional",
      description: "Emagrecimento sem dieta ou aumento de atividade",
      iconName: "FaWeight"
    },
    {
      id: 7,
      title: "Histórico familiar",
      description: "Parentes com câncer digestivo ou doenças inflamatórias",
      iconName: "FaUsers"
    }
  ],
  
  exams: ["Endoscopia digestiva alta", "Colonoscopia", "Cápsula endoscópica", "pHmetria esofágica", "Manometria esofágica", "Ultrassom abdominal", "Elastografia hepática", "Teste respiratório para H. pylori"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Marcelo Fernandes",
      specialty: "Gastroenterologia e Endoscopia Digestiva",
      credentials: ["CRM-RS 11223", "Título de Especialista em Gastroenterologia", "Fellowship em Endoscopia Avançada", "Membro da Sociedade Brasileira de Endoscopia Digestiva"],
      description: "18 anos de experiência em procedimentos endoscópicos diagnósticos e terapêuticos"
    },
    {
      id: 2,
      name: "Dra. Ana Carolina Lima",
      specialty: "Gastroenterologia e Hepatologia",
      credentials: ["CRM-RS 33445", "Especialização em Hepatologia", "Mestrado em Doenças Inflamatórias Intestinais", "Membro da American Gastroenterological Association"],
      description: "Especialista em doenças hepáticas e intestinais complexas"
    },
    {
      id: 3,
      name: "Dr. Roberto Almeida",
      specialty: "Endoscopia Digestiva Terapêutica",
      credentials: ["CRM-RS 55667", "Certificação em Ecoendoscopia", "Fellowship em Colangiopancreatografia Retrógrada", "Membro da European Society of Gastrointestinal Endoscopy"],
      description: "Referência em procedimentos endoscópicos complexos e intervencionistas"
    }
  ],
  
  ctaText: "Cuide do seu sistema digestivo para uma vida com mais qualidade e bem-estar",
  
  faq: [
    {
      question: "A colonoscopia dói?",
      answer: "O exame é realizado sob sedação, portanto o paciente não sente dor. Pode haver desconforto leve após o procedimento."
    },
    {
      question: "Com que idade devo fazer a primeira colonoscopia?",
      answer: "Aos 45 anos para população geral. Antes se houver histórico familiar ou sintomas."
    },
    {
      question: "Refluxo pode virar câncer?",
      answer: "Refluxo crônico não tratado pode levar ao esôfago de Barrett, que é uma condição pré-cancerosa. Por isso o tratamento é importante."
    },
    {
      question: "Intestino preso é normal?",
      answer: "Não, constipação crônica merece investigação. Pode ser sinal de problemas mais sérios."
    },
    {
      question: "Quanto tempo dura uma endoscopia?",
      answer: "O procedimento em si dura 10-20 minutos. Considerando preparação e recuperação, fica cerca de 2 horas na clínica."
    }
  ]
},
{
  id: "ginecologia-e-obstetricia",
  title: "Ginecologia e Obstetrícia",
  description: "Cuidados especializados para a saúde da mulher em todas as fases da vida.",
  longDescription: "No Centro Médico Sapiranga, oferecemos acompanhamento integral da saúde feminina, desde a adolescência até a menopausa, incluindo cuidados pré-natais de excelência e parto humanizado.",
  tag: "CLÍNICA",
  image: ginecologiaImg,
  
  functionDescription: "O ginecologista-obstetra é especialista na saúde do sistema reprodutivo feminino, cuidando desde prevenção de doenças até gestação, parto e puerpério.",
  
  approachText: "Adotamos uma abordagem humanizada e integral, considerando aspectos físicos, emocionais e sociais da saúde feminina, com foco na prevenção e no bem-estar global.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Pré-Natal Humanizado",
      description: "Acompanhamento personalizado da gestação com feto central",
      iconName: "FaBaby"
    },
    {
      id: 2,
      title: "Prevenção do Câncer Ginecológico",
      description: "Rastreamento e diagnóstico precoce através de exames periódicos",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Saúde Integral da Mulher",
      description: "Cuidado abrangente em todas as fases da vida feminina",
      iconName: "FaFemale"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Ginecológica Completa",
      description: "Avaliação anual com exame físico e preventivo (Papanicolau)",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Pré-Natal",
      description: "Acompanhamento da gestação com ultrassonografia e exames",
      iconName: "FaHeartbeat"
    },
    {
      id: 3,
      title: "Planejamento Familiar",
      description: "Orientação sobre métodos contraceptivos e fertilidade",
      iconName: "FaUsers"
    },
    {
      id: 4,
      title: "Tratamento da Menopausa",
      description: "Manejo dos sintomas climatéricos e reposição hormonal",
      iconName: "FaThermometer"
    },
    {
      id: 5,
      title: "Cirurgias Ginecológicas",
      description: "Histeroscopia, laparoscopia e procedimentos minimamente invasivos",
      iconName: "FaCut"
    },
    {
      id: 6,
      title: "Ultrassonografia Obstétrica e Ginecológica",
      description: "Exames de imagem para acompanhamento da saúde feminina",
      iconName: "FaCamera"
    },
    {
      id: 7,
      title: "Tratamento de Infecções Ginecológicas",
      description: "Manejo de ISTs e infecções do trato genital",
      iconName: "FaVirus"
    },
    {
      id: 8,
      title: "Endocrinologia Ginecológica",
      description: "Distúrbios menstruais, SOP e infertilidade",
      iconName: "FaChartLine"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Prevenção Eficaz",
      description: "Detecção precoce de câncer ginecológico e outras doenças",
      iconName: "FaUserShield"
    },
    {
      id: 2,
      title: "Gestação Segura",
      description: "Acompanhamento especializado para mãe e bebê",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 3,
      title: "Qualidade de Vida",
      description: "Alívio de sintomas ginecológicos que afetam o bem-estar",
      iconName: "FaSmileBeam"
    },
    {
      id: 4,
      title: "Autoconhecimento",
      description: "Empoderamento feminino através do conhecimento do próprio corpo",
      iconName: "FaUserEdit"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Primeira consulta ginecológica",
      description: "A partir da primeira menstruação ou início da vida sexual",
      iconName: "FaCalendarAlt"
    },
    {
      id: 2,
      title: "Suspensão da menstruação",
      description: "Amenorreia por mais de 3 meses sem gravidez",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 3,
      title: "Sangramento irregular",
      description: "Menstruação muito abundante, prolongada ou entre ciclos",
      iconName: "FaTint"
    },
    {
      id: 4,
      title: "Dor pélvica",
      description: "Desconforto abdominal baixo persistente ou cíclico",
      iconName: "FaStomach"
    },
    {
      id: 5,
      title: "Corrimento vaginal anormal",
      description: "Secreção com odor forte, cor alterada ou coceira",
      iconName: "FaWater"
    },
    {
      id: 6,
      title: "Sintomas da menopausa",
      description: "Fogachos, suores noturnos, secura vaginal",
      iconName: "FaThermometer"
    },
    {
      id: 7,
      title: "Desejo de engravidar",
      description: "Planejamento pré-concepcional ou dificuldade para conceber",
      iconName: "FaBaby"
    }
  ],
  
  exams: ["Preventivo (Papanicolau)", "Ultrassom transvaginal", "Colposcopia", "Histeroscopia", "Mamografia", "Densitometria óssea", "Exames hormonais", "Testes de fertilidade"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Mariana Santos",
      specialty: "Ginecologia, Obstetrícia e Medicina Fetal",
      credentials: ["CRM-RS 66778", "Título de Especialista em Ginecologia e Obstetrícia", "Fellowship em Medicina Fetal", "Membro da Federação Brasileira das Associações de Ginecologia e Obstetrícia"],
      description: "20 anos de experiência em obstetrícia de alto risco e parto humanizado"
    },
    {
      id: 2,
      name: "Dra. Carolina Oliveira",
      specialty: "Ginecologia Oncológica e Minimamente Invasiva",
      credentials: ["CRM-RS 88990", "Especialização em Oncologia Ginecológica", "Certificação em Cirurgia Robótica", "Membro da Sociedade Brasileira de Cirurgia Minimamente Invasiva"],
      description: "Especialista em câncer ginecológico e cirurgias avançadas"
    },
    {
      id: 3,
      name: "Dr. Eduardo Silva",
      specialty: "Ginecologia Endócrina e Reprodução Humana",
      credentials: ["CRM-RS 11223", "Pós-graduação em Reprodução Humana", "Especialização em Videolaparoscopia", "Membro da European Society of Human Reproduction and Embryology"],
      description: "Referência em infertilidade e endocrinologia ginecológica"
    }
  ],
  
  ctaText: "Sua saúde feminina em boas mãos - do primeiro ciclo à menopausa",
  
  faq: [
    {
      question: "Com que idade devo começar a fazer preventivo?",
      answer: "A partir dos 25 anos ou 3 anos após o início da vida sexual, o que ocorrer primeiro."
    },
    {
      question: "É normal ter cólica menstrual forte?",
      answer: "Cólica leve é comum, mas dor incapacitante pode indicar endometriose ou outras condições."
    },
    {
      question: "Quantas consultas de pré-natal são necessárias?",
      answer: "Pelo menos 6 consultas para gestação de baixo risco, mais frequente em casos de risco."
    },
    {
      question: "A menopausa precoce pode acontecer?",
      answer: "Sim, antes dos 40 anos. Requer acompanhamento especializado."
    },
    {
      question: "Quanto tempo após o parto devo retornar ao ginecologista?",
      answer: "Entre 6-8 semanas após o parto para avaliação puerperal."
    },
    {
      question: "O DIU pode causar infertilidade?",
      answer: "Não, após a retirada a fertilidade retorna ao normal. É um método reversível."
    }
  ]
},
{
  id: "medicina-do-trabalho",
  title: "Medicina do Trabalho",
  description: "Promoção da saúde e segurança dos trabalhadores no ambiente laboral.",
  longDescription: "No Centro Médico Sapiranga, oferecemos serviços especializados em saúde ocupacional, garantindo a conformidade legal e o bem-estar dos colaboradores através de programas preventivos e acompanhamento médico do trabalho.",
  tag: "OCUPACIONAL",
  image: medicinaTrabalhoImg,
  
  functionDescription: "O médico do trabalho é especialista na relação entre saúde e trabalho, atuando na prevenção de doenças ocupacionais, promoção da saúde no ambiente laboral e na adequação do trabalhador às suas funções.",
  
  approachText: "Adotamos uma abordagem preventiva e proativa, desenvolvendo programas de saúde ocupacional personalizados para cada empresa, considerando seus riscos específicos e necessidades.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Conformidade Legal",
      description: "Garantia do cumprimento das normas trabalhistas e de segurança",
      iconName: "FaFileContract"
    },
    {
      id: 2,
      title: "Prevenção de Acidentes",
      description: "Programas para reduzir acidentes e doenças relacionadas ao trabalho",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Saúde Ocupacional",
      description: "Promoção da saúde e qualidade de vida no ambiente de trabalho",
      iconName: "FaBriefcaseMedical"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Exames Admissionais",
      description: "Avaliação pré-contratação para adequação às funções",
      iconName: "FaUserPlus"
    },
    {
      id: 2,
      title: "Exames Periódicos",
      description: "Acompanhamento da saúde dos trabalhadores ao longo do tempo",
      iconName: "FaCalendarCheck"
    },
    {
      id: 3,
      title: "Exames de Mudança de Função",
      description: "Reavaliação quando há alteração nas atividades laborais",
      iconName: "FaExchangeAlt"
    },
    {
      id: 4,
      title: "Exames Demissionais",
      description: "Avaliação de saúde no desligamento da empresa",
      iconName: "FaUserMinus"
    },
    {
      id: 5,
      title: "PCMSO - Programa de Controle Médico",
      description: "Elaboração e execução do programa obrigatório por empresa",
      iconName: "FaClipboardCheck"
    },
    {
      id: 6,
      title: "PPRA - Programa de Riscos Ambientais",
      description: "Avaliação e controle dos riscos ocupacionais",
      iconName: "FaHardHat"
    },
    {
      id: 7,
      title: "ASO - Atestado de Saúde Ocupacional",
      description: "Emissão do documento obrigatório para todos os exames",
      iconName: "FaFileMedical"
    },
    {
      id: 8,
      title: "Consultoria em Saúde Ocupacional",
      description: "Orientação para implementação de programas de saúde no trabalho",
      iconName: "FaHandsHelping"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Redução de Absenteísmo",
      description: "Menos faltas por doenças e acidentes relacionados ao trabalho",
      iconName: "FaChartLine"
    },
    {
      id: 2,
      title: "Conformidade Legal",
      description: "Evita multas e processos trabalhistas por irregularidades",
      iconName: "FaBalanceScale"
    },
    {
      id: 3,
      title: "Aumento da Produtividade",
      description: "Colaboradores saudáveis são mais produtivos e engajados",
      iconName: "FaRocket"
    },
    {
      id: 4,
      title: "Prevenção de Doenças",
      description: "Identificação precoce de problemas de saúde ocupacional",
      iconName: "FaUserShield"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Contratação de novos funcionários",
      description: "Exame admissional obrigatório antes do início das atividades",
      iconName: "FaUserPlus"
    },
    {
      id: 2,
      title: "Periódico anual",
      description: "Exames obrigatórios conforme o grau de risco da função",
      iconName: "FaCalendarAlt"
    },
    {
      id: 3,
      title: "Mudança de função",
      description: "Quando o colaborador assume atividades com diferentes riscos",
      iconName: "FaExchangeAlt"
    },
    {
      id: 4,
      title: "Retorno ao trabalho",
      description: "Após afastamento por doença ou acidente por mais de 30 dias",
      iconName: "FaRedo"
    },
    {
      id: 5,
      title: "Desligamento da empresa",
      description: "Exame demissional dentro dos prazos legais",
      iconName: "FaUserMinus"
    },
    {
      id: 6,
      title: "Implementação de PCMSO",
      description: "Empresas com mais de um funcionário precisam do programa",
      iconName: "FaClipboardList"
    },
    {
      id: 7,
      title: "Acidentes de trabalho",
      description: "Comunicação e acompanhamento de acidentes laborais",
      iconName: "FaExclamationTriangle"
    }
  ],
  
  exams: ["Audiometria", "Eletrocardiograma", "Espirometria", "Acuidade visual", "Exames laboratoriais", "Raio-X", "Avaliação psicossocial", "Teste ergonômico"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Ricardo Almeida",
      specialty: "Medicina do Trabalho e Saúde Ocupacional",
      credentials: ["CRM-RS 33445", "Título de Especialista em Medicina do Trabalho", "Mestrado em Saúde Coletiva", "Membro da Associação Nacional de Medicina do Trabalho"],
      description: "15 anos de experiência em medicina ocupacional e perícia médica"
    },
    {
      id: 2,
      name: "Dra. Patrícia Nunes",
      specialty: "Medicina do Trabalho e Ergonomia",
      credentials: ["CRM-RS 55667", "Especialização em Ergonomia", "Certificação em Auditoria em Saúde Ocupacional", "Membro da International Commission on Occupational Health"],
      description: "Especialista em ergonomia e prevenção de doenças osteomusculares"
    },
    {
      id: 3,
      name: "Dr. Fernando Costa",
      specialty: "Medicina do Trabalho e Toxicologia Ocupacional",
      credentials: ["CRM-RS 77889", "Pós-graduação em Toxicologia", "Formação em Perícia Médica", "Membro da Sociedade Brasileira de Medicina do Trabalho"],
      description: "Referência em riscos químicos e biológicos no ambiente de trabalho"
    }
  ],
  
  ctaText: "Invista na saúde dos seus colaboradores e fortaleça sua empresa",
  
  faq: [
    {
      question: "Todos os funcionários precisam fazer exame médico?",
      answer: "Sim, conforme NR-7, todos os trabalhadores com vínculo empregatício devem realizar exames ocupacionais."
    },
    {
      question: "Com que frequência os exames periódicos devem ser realizados?",
      answer: "Depende do grau de risco: Baixo risco - a cada 2 anos; Médio risco - anual; Alto risco - a cada 6 meses ou menos."
    },
    {
      question: "Quem paga pelos exames ocupacionais?",
      answer: "O empregador é responsável por custear todos os exames médicos ocupacionais."
    },
    {
      question: "O que é PCMSO?",
      answer: "Programa de Controle Médico de Saúde Ocupacional - programa obrigatório que define os exames necessários para cada função."
    },
    {
      question: "Empresas pequenas precisam de medicina do trabalho?",
      answer: "Sim, empresas com um ou mais funcionários precisam cumprir as normas de saúde ocupacional."
    },
    {
      question: "O médico do trabalho pode afastar um funcionário?",
      answer: "Sim, quando identifica condições de saúde que impeçam o trabalho ou representem risco para o trabalhador ou colegas."
    }
  ]
},
{
  id: "neurologia",
  title: "Neurologia",
  description: "Diagnóstico e tratamento das doenças do sistema nervoso.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de neurologia oferece cuidado especializado para doenças do cérebro, medula espinhal, nervos periféricos e músculos, utilizando tecnologia avançada para diagnóstico preciso.",
  tag: "CLÍNICA",
  image: neurologiaImg,
  
  functionDescription: "O neurologista é especialista no diagnóstico e tratamento das doenças que afetam o sistema nervoso central, periférico e autônomo, incluindo cérebro, medula, nervos e músculos.",
  
  approachText: "Combinamos avaliação clínica detalhada com exames complementares modernos para oferecer diagnóstico preciso e tratamento personalizado das condições neurológicas.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Diagnóstico Preciso",
      description: "Eletroencefalografia e exames de imagem de alta resolução",
      iconName: "FaBrain"
    },
    {
      id: 2,
      title: "Tratamento de Cefaleias",
      description: "Protocolos personalizados para enxaquecas e dores de cabeça",
      iconName: "FaHeadSide"
    },
    {
      id: 3,
      title: "Prevenção de AVC",
      description: "Identificação e manejo de fatores de risco para derrame cerebral",
      iconName: "FaShieldAlt"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Neurológica Completa",
      description: "Avaliação detalhada com exame neurológico completo",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Tratamento de Cefaleia e Enxaqueca",
      description: "Protocolos personalizados para diferentes tipos de dor de cabeça",
      iconName: "FaHeadSide"
    },
    {
      id: 3,
      title: "Manejo de Epilepsia",
      description: "Diagnóstico e tratamento de crises epilépticas",
      iconName: "FaBrain"
    },
    {
      id: 4,
      title: "Doenças Neurodegenerativas",
      description: "Acompanhamento de Alzheimer, Parkinson e outras demências",
      iconName: "FaUserClock"
    },
    {
      id: 5,
      title: "Distúrbios do Movimento",
      description: "Tremores, tiques, distonia e síndrome das pernas inquietas",
      iconName: "FaRunning"
    },
    {
      id: 6,
      title: "Neuropatias Periféricas",
      description: "Tratamento de lesões nos nervos periféricos",
      iconName: "FaRoute"
    },
    {
      id: 7,
      title: "Esclerose Múltipla",
      description: "Diagnóstico e tratamento das doenças desmielinizantes",
      iconName: "FaWaveSquare"
    },
    {
      id: 8,
      title: "Medicina do Sono",
      description: "Distúrbios do sono de origem neurológica",
      iconName: "FaBed"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Diagnóstico Preciso",
      description: "Identificação exata das condições neurológicas",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Qualidade de Vida",
      description: "Controle eficaz de sintomas neurológicos incapacitantes",
      iconName: "FaSmileBeam"
    },
    {
      id: 3,
      title: "Prevenção de Complicações",
      description: "Redução do risco de sequelas neurológicas",
      iconName: "FaUserShield"
    },
    {
      id: 4,
      title: "Tratamento Personalizado",
      description: "Protocolos adaptados às necessidades individuais",
      iconName: "FaUserEdit"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor de cabeça frequente",
      description: "Cefaleia que interfere nas atividades diárias",
      iconName: "FaHeadSide"
    },
    {
      id: 2,
      title: "Perda de força ou sensibilidade",
      description: "Fraqueza muscular ou formigamento em membros",
      iconName: "FaHandPaper"
    },
    {
      id: 3,
      title: "Tonturas ou vertigens",
      description: "Sensação de desequilíbrio ou ambiente girando",
      iconName: "FaCompass"
    },
    {
      id: 4,
      title: "Crises convulsivas",
      description: "Perda de consciência ou movimentos involuntários",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 5,
      title: "Perda de memória",
      description: "Esquecimentos frequentes que afetam a rotina",
      iconName: "FaMemory"
    },
    {
      id: 6,
      title: "Distúrbios do sono",
      description: "Insônia, sonolência excessiva ou parassonias",
      iconName: "FaBed"
    },
    {
      id: 7,
      title: "Tremores",
      description: "Movimentos involuntários em repouso ou ação",
      iconName: "FaHandPeace"
    }
  ],
  
  exams: ["Eletroencefalograma (EEG)", "Eletroneuromiografia (ENMG)", "Potencial evocado", "Ressonância magnética cerebral", "Tomografia computadorizada", "Doppler transcraniano", "Polissonografia"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Guilherme Santos",
      specialty: "Neurologia e Neurofisiologia Clínica",
      credentials: ["CRM-RS 99001", "Título de Especialista em Neurologia", "Fellowship em Eletroneuromiografia", "Membro da Academia Brasileira de Neurologia"],
      description: "18 anos de experiência em doenças neuromusculares e neurofisiologia"
    },
    {
      id: 2,
      name: "Dra. Ana Beatriz Mendes",
      specialty: "Neurologia Cognitiva e Cefaleia",
      credentials: ["CRM-RS 22334", "Especialização em Demências", "Certificação Internacional em Cefaleia", "Membro da International Headache Society"],
      description: "Especialista em doenças neurodegenerativas e tratamento de enxaqueca"
    },
    {
      id: 3,
      name: "Dr. Carlos Eduardo Lima",
      specialty: "Neurologia do Sono e Epilepsia",
      credentials: ["CRM-RS 44556", "Pós-graduação em Medicina do Sono", "Fellowship em Epileptologia", "Membro da American Academy of Neurology"],
      description: "Referência em distúrbios do sono e epilepsia refratária"
    }
  ],
  
  ctaText: "Cuide do seu sistema nervoso - a central de comando do seu corpo",
  
  faq: [
    {
      question: "Enxaqueca tem cura?",
      answer: "Não tem cura definitiva, mas tem controle eficaz com tratamento adequado que reduz frequência e intensidade das crises."
    },
    {
      question: "Qual a diferença entre AVC e TIA?",
      answer: "AVC (derrame) causa lesão permanente, TIA (ataque isquêmico transitório) é temporário, mas indica alto risco de AVC futuro."
    },
    {
      question: "Esquecer nomes é sinal de Alzheimer?",
      answer: "Esquecimento ocasional é normal. Preocupa quando afeta atividades diárias ou quando a pessoa não percebe que esqueceu."
    },
    {
      question: "Eletroencefalograma dói?",
      answer: "Não, é um exame indolor que apenas registra a atividade elétrica cerebral através de eletrodos na cabeça."
    },
    {
      question: "Quando preocupar-se com tremores?",
      answer: "Quando interferem em atividades, pioram com estresse ou estão associados a outros sintomas neurológicos."
    },
    {
      question: "É normal ter dormência nas mãos?",
      answer: "Não, dormência persistente pode indicar compressão nervosa (síndrome do túnel do carpo) ou outras neuropatias."
    }
  ]
},
{
  id: "nutricao",
  title: "Nutrição",
  description: "Orientação alimentar personalizada para saúde e qualidade de vida.",
  longDescription: "No Centro Médico Sapiranga, nossos nutricionistas desenvolvem planos alimentares individualizados, considerando necessidades específicas, preferências e objetivos de cada paciente para promover saúde integral.",
  tag: "CLÍNICA",
  image: nutricaoImg,
  
  functionDescription: "O nutricionista é o profissional especializado em alimentação e nutrição humana, atuando na promoção da saúde, prevenção de doenças e tratamento através da alimentação adequada.",
  
  approachText: "Adotamos uma abordagem prática e sustentável, desenvolvendo hábitos alimentares saudáveis que se encaixam na rotina do paciente, sem dietas restritivas ou modismos.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Planos Personalizados",
      description: "Dietas adaptadas ao estilo de vida e preferências individuais",
      iconName: "FaUserEdit"
    },
    {
      id: 2,
      title: "Abordagem Científica",
      description: "Baseada em evidências científicas atualizadas",
      iconName: "FaFlask"
    },
    {
      id: 3,
      title: "Resultados Sustentáveis",
      description: "Mudanças de hábitos para manutenção a longo prazo",
      iconName: "FaChartLine"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Avaliação Nutricional Completa",
      description: "Análise da composição corporal, hábitos e necessidades nutricionais",
      iconName: "FaClipboardCheck"
    },
    {
      id: 2,
      title: "Nutrição Clínica",
      description: "Acompanhamento para doenças crônicas e condições específicas",
      iconName: "FaHeartbeat"
    },
    {
      id: 3,
      title: "Emagrecimento Saudável",
      description: "Programas de perda de peso com foco em saúde e manutenção",
      iconName: "FaWeight"
    },
    {
      id: 4,
      title: "Nutrição Esportiva",
      description: "Otimização do desempenho e recuperação para atletas",
      iconName: "FaRunning"
    },
    {
      id: 5,
      title: "Nutrição Materno-Infantil",
      description: "Acompanhamento na gestação, lactação e infância",
      iconName: "FaBaby"
    },
    {
      id: 6,
      title: "Reeducação Alimentar",
      description: "Desenvolvimento de hábitos alimentares saudáveis",
      iconName: "FaAppleAlt"
    },
    {
      id: 7,
      title: "Nutrição Geriátrica",
      description: "Cuidados nutricionais específicos para idosos",
      iconName: "FaUserClock"
    },
    {
      id: 8,
      title: "Intolerâncias Alimentares",
      description: "Diagnóstico e manejo de alergias e intolerâncias",
      iconName: "FaAllergies"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Saúde Melhorada",
      description: "Prevenção e controle de doenças através da alimentação",
      iconName: "FaHeart"
    },
    {
      id: 2,
      title: "Mais Energia",
      description: "Disposição física e mental otimizada",
      iconName: "FaBolt"
    },
    {
      id: 3,
      title: "Autoestima",
      description: "Bem-estar com o próprio corpo e hábitos",
      iconName: "FaSmileBeam"
    },
    {
      id: 4,
      title: "Qualidade de Vida",
      description: "Melhor relacionamento com a comida e saúde integral",
      iconName: "FaHandHoldingHeart"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Excesso de peso ou obesidade",
      description: "Dificuldade para emagrecer ou manter o peso",
      iconName: "FaWeight"
    },
    {
      id: 2,
      title: "Doenças crônicas",
      description: "Diabetes, hipertensão, colesterol alto ou doenças renais",
      iconName: "FaHeartbeat"
    },
    {
      id: 3,
      title: "Distúrbios alimentares",
      description: "Compulsão, restrição excessiva ou relação difícil com comida",
      iconName: "FaAppleAlt"
    },
    {
      id: 4,
      title: "Baixo peso ou desnutrição",
      description: "Dificuldade para ganhar peso ou deficiências nutricionais",
      iconName: "FaBalanceScale"
    },
    {
      id: 5,
      title: "Desempenho esportivo",
      description: "Melhora no rendimento e recuperação em atividades físicas",
      iconName: "FaRunning"
    },
    {
      id: 6,
      title: "Gestação ou amamentação",
      description: "Nutrição adequada para mãe e bebê",
      iconName: "FaBaby"
    },
    {
      id: 7,
      title: "Intolerâncias alimentares",
      description: "Desconforto digestivo após certos alimentos",
      iconName: "FaStomach"
    }
  ],
  
  exams: ["Bioimpedância", "Avaliação antropométrica", "Recordatório alimentar", "Testes de intolerância", "Exames laboratoriais nutricionais", "Avaliação da composição corporal"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Juliana Costa",
      specialty: "Nutrição Clínica e Esportiva",
      credentials: ["CRN-2 12345", "Mestrado em Ciências da Saúde", "Especialização em Nutrição Esportiva", "Certificação Internacional em Nutrição Funcional"],
      description: "12 anos de experiência em emagrecimento e performance esportiva"
    },
    {
      id: 2,
      name: "Dr. Marcos Silva",
      specialty: "Nutrição Clínica e Geriátrica",
      credentials: ["CRN-2 67890", "Pós-graduação em Nutrição Hospitalar", "Especialização em Gerontologia", "Membro da Sociedade Brasileira de Nutrição"],
      description: "Especialista em doenças crônicas e nutrição para idosos"
    },
    {
      id: 3,
      name: "Dra. Carla Mendes",
      specialty: "Nutrição Materno-Infantil",
      credentials: ["CRN-2 13579", "Especialização em Nutrição Pediátrica", "Formação em Aleitamento Materno", "Certificação em Transtornos Alimentares"],
      description: "Referência em nutrição para gestantes, lactantes e crianças"
    }
  ],
  
  ctaText: "Transforme sua saúde através de uma alimentação equilibrada e consciente",
  
  faq: [
    {
      question: "Quantas consultas são necessárias?",
      answer: "Depende dos objetivos. Geralmente mensal no início, espaçando conforme os resultados."
    },
    {
      question: "Dietas da internet funcionam?",
      answer: "Não. Cada pessoa tem necessidades únicas. Dietas genéricas podem causar deficiências nutricionais."
    },
    {
      question: "Preciso tomar suplementos?",
      answer: "Apenas se houver necessidade comprovada. Priorizamos nutrientes através da alimentação."
    },
    {
      question: "Posso comer o que gosto?",
      answer: "Sim, ensinamos como incluir alimentos preferidos de forma equilibrada."
    },
    {
      question: "Qual é o peso ideal?",
      answer: "Não existe um número único. Trabalhamos com metas realistas e saudáveis para cada pessoa."
    },
    {
      question: "Crianças precisam de nutricionista?",
      answer: "Sim, para garantir crescimento adequado e prevenir problemas futuros."
    }
  ]
},
{
  id: "odontologia",
  title: "Odontologia",
  description: "Cuidados completos para saúde bucal e sorriso saudável.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe odontológica oferece atendimento integral em saúde bucal, desde prevenção e tratamentos básicos até procedimentos estéticos avançados, com tecnologia de ponta e conforto.",
  tag: "ODONTOLÓGICA",
  image: odontologiaImg,
  
  functionDescription: "O cirurgião-dentista é o profissional especializado na prevenção, diagnóstico e tratamento das doenças que afetam a cavidade bucal, dentes, gengivas e estruturas relacionadas.",
  
  approachText: "Adotamos uma abordagem preventiva e integral, considerando a saúde bucal como parte fundamental da saúde geral, com foco na educação, prevenção e tratamentos minimamente invasivos.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Prevenção Integral",
      description: "Programas de prevenção para todas as idades",
      iconName: "FaShieldAlt"
    },
    {
      id: 2,
      title: "Tecnologia Avançada",
      description: "Radiografia digital, scanner intraoral e equipamentos modernos",
      iconName: "FaMicroscope"
    },
    {
      id: 3,
      title: "Conforto e Segurança",
      description: "Ambiente acolhedor e protocolos rigorosos de biossegurança",
      iconName: "FaHandHoldingHeart"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Odontológica Completa",
      description: "Avaliação bucal completa com planejamento personalizado",
      iconName: "FaTooth"
    },
    {
      id: 2,
      title: "Prevenção e Profilaxia",
      description: "Limpeza profissional, aplicação de flúor e selantes",
      iconName: "FaBroom"
    },
    {
      id: 3,
      title: "Dentística e Restaurações",
      description: "Tratamento de cáries com materiais estéticos",
      iconName: "FaFillDrip"
    },
    {
      id: 4,
      title: "Endodontia (Tratamento de Canal)",
      description: "Preservação de dentes comprometidos pela polpa",
      iconName: "FaTools"
    },
    {
      id: 5,
      title: "Periodontia",
      description: "Tratamento das gengivas e tecidos de suporte",
      iconName: "FaHandHoldingMedical"
    },
    {
      id: 6,
      title: "Prótese Dentária",
      description: "Coroas, pontes, próteses removíveis e sobre implantes",
      iconName: "FaCrown"
    },
    {
      id: 7,
      title: "Ortodontia",
      description: "Aparelhos fixos e alinhadores transparentes",
      iconName: "FaTeeth"
    },
    {
      id: 8,
      title: "Implantes Dentários",
      description: "Reabilitação oral com implantes de titânio",
      iconName: "FaTooth"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Saúde Bucal",
      description: "Prevenção de doenças e manutenção da saúde oral",
      iconName: "FaHeart"
    },
    {
      id: 2,
      title: "Autoestima",
      description: "Sorriso bonito e harmonioso",
      iconName: "FaSmileBeam"
    },
    {
      id: 3,
      title: "Função Mastigatória",
      description: "Melhor digestão e nutrição através da mastigação adequada",
      iconName: "FaUtensils"
    },
    {
      id: 4,
      title: "Prevenção Sistêmica",
      description: "Saúde bucal contribuindo para saúde geral do corpo",
      iconName: "FaUserShield"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor de dente",
      description: "Sensibilidade ou dor persistente nos dentes",
      iconName: "FaTooth"
    },
    {
      id: 2,
      title: "Sangramento gengival",
      description: "Sangramento ao escovar ou usar fio dental",
      iconName: "FaTint"
    },
    {
      id: 3,
      title: "Mau hálito persistente",
      description: "Halitose que não melhora com higiene comum",
      iconName: "FaWind"
    },
    {
      id: 4,
      title: "Dentes escurecidos",
      description: "Mudança de cor ou manchas nos dentes",
      iconName: "FaPalette"
    },
    {
      id: 5,
      title: "Mobilidade dentária",
      description: "Dentes moles ou que se movem",
      iconName: "FaHandPaper"
    },
    {
      id: 6,
      title: "Check-up preventivo",
      description: "Avaliação semestral ou anual mesmo sem sintomas",
      iconName: "FaCalendarCheck"
    },
    {
      id: 7,
      title: "Dificuldade na mastigação",
      description: "Dor ao mastigar ou dentes que não se encaixam bem",
      iconName: "FaUtensils"
    }
  ],
  
  exams: ["Radiografia panorâmica", "Radiografia periapical", "Tomografia computadorizada", "Fotografia intraoral", "Impressão digital", "Exame periodontal completo"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Camila Alves",
      specialty: "Clínica Geral e Estética Dental",
      credentials: ["CRO-RS 12345", "Especialização em Dentística", "Certificação em Clareamento Dental", "Membro da Associação Brasileira de Odontologia"],
      description: "15 anos de experiência em reabilitação oral e estética dental"
    },
    {
      id: 2,
      name: "Dr. Rafael Santos",
      specialty: "Implantodontia e Prótese",
      credentials: ["CRO-RS 67890", "Especialista em Implantodontia", "Fellowship em Cirurgia Oral", "Membro da International Congress of Oral Implantologists"],
      description: "Referência em implantes dentários e reabilitação oral complexa"
    },
    {
      id: 3,
      name: "Dra. Fernanda Oliveira",
      specialty: "Ortodontia e Ortopedia Facial",
      credentials: ["CRO-RS 13579", "Especialista em Ortodontia", "Certificação em Invisalign", "Membro da Associação Brasileira de Ortodontia"],
      description: "Especialista em alinhadores transparentes e aparelhos ortodônticos"
    },
    {
      id: 4,
      name: "Dr. Lucas Mendes",
      specialty: "Endodontia e Periodontia",
      credentials: ["CRO-RS 24680", "Especialização em Endodontia", "Pós-graduação em Periodontia", "Membro da Sociedade Brasileira de Endodontia"],
      description: "Especialista em tratamento de canal e doenças periodontais"
    }
  ],
  
  ctaText: "Seu sorriso saudável é nosso compromisso - da prevenção ao tratamento",
  
  faq: [
    {
      question: "Com que frequência devo ir ao dentista?",
      answer: "Recomenda-se consultas a cada 6 meses para check-up e limpeza profissional."
    },
    {
      question: "O clareamento dental enfraquece os dentes?",
      answer: "Não, quando realizado por profissional qualificado com produtos adequados, é seguro e eficaz."
    },
    {
      question: "Implante dói?",
      answer: "É realizado sob anestesia local. O pós-operatório é controlado com medicação adequada."
    },
    {
      question: "Sou muito velho para usar aparelho?",
      answer: "Não existe idade máxima para tratamento ortodôntico. O importante é ter saúde bucal adequada."
    },
    {
      question: "Grávida pode ir ao dentista?",
      answer: "Sim, especialmente no segundo trimestre. Alguns cuidados especiais são necessários."
    },
    {
      question: "Cárie tem cura?",
      answer: "Sim, quando tratada precocemente com restauração. Em estágios avançados, pode exigir tratamento de canal."
    }
  ]
},
{
  id: "oftalmologia",
  title: "Oftalmologia",
  description: "Cuidados especializados para a saúde dos olhos e visão.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de oftalmologia oferece diagnóstico e tratamento completo para doenças oculares, exames de precisão e cirurgias com tecnologia de última geração.",
  tag: "CLÍNICA",
  image: oftalmologiaImg,
  
  functionDescription: "O oftalmologista é especialista no diagnóstico, tratamento e prevenção das doenças que afetam os olhos e o sistema visual, incluindo cirurgias oculares e correção de erros refrativos.",
  
  approachText: "Combinamos tecnologia de ponta com expertise clínica para oferecer cuidados oftalmológicos integrais, desde consultas de rotina até procedimentos cirúrgicos complexos.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Diagnóstico de Precisão",
      description: "Exames com equipamentos digitais de alta resolução",
      iconName: "FaEye"
    },
    {
      id: 2,
      title: "Cirurgia Refrativa",
      description: "Correção definitiva de miopia, astigmatismo e hipermetropia",
      iconName: "FaCut"
    },
    {
      id: 3,
      title: "Prevenção da Cegueira",
      description: "Detecção precoce de glaucoma, catarata e degeneração macular",
      iconName: "FaShieldAlt"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Oftalmológica Completa",
      description: "Avaliação da acuidade visual e saúde ocular detalhada",
      iconName: "FaEye"
    },
    {
      id: 2,
      title: "Refração e Prescrição de Óculos",
      description: "Determinação precisa do grau para lentes corretivas",
      iconName: "FaGlasses"
    },
    {
      id: 3,
      title: "Exames Oftalmológicos Especializados",
      description: "Topografia, paquimetria, OCT e tonometria",
      iconName: "FaSearch"
    },
    {
      id: 4,
      title: "Cirurgia de Catarata",
      description: "Facoemulsificação com lentes intraoculares premium",
      iconName: "FaCut"
    },
    {
      id: 5,
      title: "Cirurgia Refrativa",
      description: "LASIK, PRK e outras técnicas para eliminar óculos",
      iconName: "FaMagic"
    },
    {
      id: 6,
      title: "Tratamento do Glaucoma",
      description: "Controle da pressão intraocular e preservação da visão",
      iconName: "FaTint"
    },
    {
      id: 7,
      title: "Oftalmopediatria",
      description: "Cuidados oculares especializados para crianças",
      iconName: "FaChild"
    },
    {
      id: 8,
      title: "Retina e Vítreo",
      description: "Tratamento de descolamento de retina e degeneração macular",
      iconName: "FaEyeDropper"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Visão Clara",
      description: "Correção precisa de erros refrativos",
      iconName: "FaEye"
    },
    {
      id: 2,
      title: "Independência Visual",
      description: "Redução ou eliminação da dependência de óculos",
      iconName: "FaGlasses"
    },
    {
      id: 3,
      title: "Prevenção Eficaz",
      description: "Detecção precoce de doenças oculares silenciosas",
      iconName: "FaUserShield"
    },
    {
      id: 4,
      title: "Qualidade de Vida",
      description: "Melhora na realização de atividades diárias",
      iconName: "FaSmileBeam"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Visão embaçada ou turva",
      description: "Dificuldade para enxergar de perto ou de longe",
      iconName: "FaEye"
    },
    {
      id: 2,
      title: "Dor ocular",
      description: "Dor nos olhos, vermelhidão ou sensação de corpo estranho",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 3,
      title: "Histórico familiar",
      description: "Parentes com glaucoma, catarata precoce ou degeneração macular",
      iconName: "FaUsers"
    },
    {
      id: 4,
      title: "Moscas volantes",
      description: "Pontos pretos ou flashes de luz no campo visual",
      iconName: "FaAdjust"
    },
    {
      id: 5,
      title: "Coceira ou irritação ocular",
      description: "Sintomas de alergia ocular ou síndrome do olho seco",
      iconName: "FaItch"
    },
    {
      id: 6,
      title: "Check-up visual",
      description: "Mesmo sem sintomas, especialmente após os 40 anos",
      iconName: "FaCalendarCheck"
    },
    {
      id: 7,
      title: "Diabete ou hipertensão",
      description: "Doenças sistêmicas que afetam a saúde ocular",
      iconName: "FaHeartbeat"
    }
  ],
  
  exams: ["Refração computadorizada", "Tonometria", "Mapeamento de retina", "OCT (Tomografia de Coerência Óptica)", "Topografia corneana", "Paquimetria", "Campo visual", "Biometria ocular"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Eduardo Santos",
      specialty: "Catarata e Cirurgia Refrativa",
      credentials: ["CRM-RS 11223", "Título de Especialista em Oftalmologia", "Fellowship em Cirurgia de Catarata", "Membro da Sociedade Brasileira de Catarata e Implantes"],
      description: "Mais de 3.000 cirurgias de catarata realizadas com tecnologia premium"
    },
    {
      id: 2,
      name: "Dra. Ana Paula Mendes",
      specialty: "Glaucoma e Doenças Externas Oculares",
      credentials: ["CRM-RS 33445", "Especialização em Glaucoma", "Mestrado em Oftalmologia", "Membro da World Glaucoma Association"],
      description: "Especialista no manejo médico e cirúrgico do glaucoma"
    },
    {
      id: 3,
      name: "Dr. Carlos Eduardo Lima",
      specialty: "Retina e Vítreo",
      credentials: ["CRM-RS 55667", "Fellowship em Retina e Vítreo", "Certificação em Laser Oftálmico", "Membro da Sociedade Brasileira de Retina e Vítreo"],
      description: "Referência em tratamento de doenças da retina e cirurgia vitreorretiniana"
    },
    {
      id: 4,
      name: "Dra. Beatriz Oliveira",
      specialty: "Oftalmopediatria e Estrabismo",
      credentials: ["CRM-RS 77889", "Especialização em Oftalmopediatria", "Pós-graduação em Estrabismo", "Membro da Associação Brasileira de Oftalmopediatria"],
      description: "Especialista em saúde ocular infantil e correção de estrabismo"
    }
  ],
  
  ctaText: "Veja o mundo com clareza - cuide da sua visão com quem enxerga cada detalhe",
  
  faq: [
    {
      question: "Com que frequência devo fazer exame de vista?",
      answer: "Adultos sem problemas: a cada 2 anos. Após os 40 anos ou com doenças oculares: anual. Crianças: conforme orientação do oftalmopediatra."
    },
    {
      question: "Usar óculos piora a visão?",
      answer: "Não, é um mito. Os óculos corrigem o foco e proporcionam conforto visual."
    },
    {
      question: "A cirurgia de catarata é segura?",
      answer: "Sim, é uma das cirurgias mais seguras e com maior índice de sucesso na medicina."
    },
    {
      question: "LASIK dói?",
      answer: "O procedimento é indolor sob anestesia local. Pode haver desconforto leve nas primeiras horas."
    },
    {
      question: "Glaucoma tem cura?",
      answer: "Não tem cura, mas tem controle eficaz. O tratamento precoce previne a perda visual."
    },
    {
      question: "Olho seco tem tratamento?",
      answer: "Sim, com lubrificantes específicos, medicamentos e mudanças de hábitos."
    },
    {
      question: "Criança precisa de oftalmologista?",
      answer: "Sim, a primeira consulta deve ser aos 3 anos, ou antes se houver alterações observadas."
    }
  ]
},
{
  id: "ortopedia-e-traumatologia",
  title: "Ortopedia e Traumatologia",
  description: "Especializada no diagnóstico e tratamento do sistema musculoesquelético.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de ortopedia oferece cuidados completos para doenças e lesões dos ossos, articulações, músculos, tendões e ligamentos, com abordagem cirúrgica e conservadora.",
  tag: "CIRÚRGICA",
  image: ortopediaImg,
  
  functionDescription: "O ortopedista é especialista no diagnóstico, tratamento e reabilitação das doenças e lesões que afetam o sistema musculoesquelético, incluindo traumas, deformidades e condições degenerativas.",
  
  approachText: "Adotamos uma abordagem individualizada, priorizando tratamentos conservadores quando possível, e utilizando técnicas cirúrgicas minimamente invasivas quando necessárias para restaurar a função e aliviar a dor.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Cirurgia Minimamente Invasiva",
      description: "Artroscopia e técnicas que preservam tecidos saudáveis",
      iconName: "FaMicroscope"
    },
    {
      id: 2,
      title: "Ortopedia do Esporte",
      description: "Tratamento especializado para lesões esportivas",
      iconName: "FaRunning"
    },
    {
      id: 3,
      title: "Próteses Articulares",
      description: "Artroplastias de quadril, joelho e ombro de última geração",
      iconName: "FaBone"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Ortopédica Completa",
      description: "Avaliação clínica e exame físico detalhado do sistema musculoesquelético",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Traumatologia",
      description: "Tratamento de fraturas, luxações e lesões traumáticas",
      iconName: "FaCarCrash"
    },
    {
      id: 3,
      title: "Artroscopia",
      description: "Cirurgia minimamente invasiva de joelho, ombro e outras articulações",
      iconName: "FaCut"
    },
    {
      id: 4,
      title: "Ortopedia do Esporte",
      description: "Lesões ligamentares, tendinites e fraturas por estresse",
      iconName: "FaRunning"
    },
    {
      id: 5,
      title: "Cirurgia de Coluna",
      description: "Hérnia de disco, estenose espinhal e escoliose",
      iconName: "FaSpine"
    },
    {
      id: 6,
      title: "Artroplastia (Prótese)",
      description: "Substituição articular do quadril, joelho e ombro",
      iconName: "FaCogs"
    },
    {
      id: 7,
      title: "Ortopedia Pediátrica",
      description: "Problemas musculoesqueléticos em crianças e adolescentes",
      iconName: "FaChild"
    },
    {
      id: 8,
      title: "Mão e Punho",
      description: "Síndrome do túnel do carpo, fraturas e lesões por esforço",
      iconName: "FaHandPaper"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Alívio da Dor",
      description: "Tratamento eficaz para dores articulares e musculares",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 2,
      title: "Restauração da Função",
      description: "Recuperação da mobilidade e capacidade funcional",
      iconName: "FaWalking"
    },
    {
      id: 3,
      title: "Retorno às Atividades",
      description: "Recuperação mais rápida para esportes e trabalho",
      iconName: "FaRunning"
    },
    {
      id: 4,
      title: "Prevenção de Complicações",
      description: "Tratamento precoce evita degeneração e cirurgias maiores",
      iconName: "FaUserShield"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor articular persistente",
      description: "Dor em joelhos, quadris, ombros ou outras articulações",
      iconName: "FaBone"
    },
    {
      id: 2,
      title: "Trauma ou acidente",
      description: "Quedas, batidas ou torções com dor e inchaço",
      iconName: "FaCarCrash"
    },
    {
      id: 3,
      title: "Limitação de movimento",
      description: "Dificuldade para caminhar, subir escadas ou levantar objetos",
      iconName: "FaWalking"
    },
    {
      id: 4,
      title: "Deformidades ósseas",
      description: "Pernas arqueadas, joelhos em X ou assimetria",
      iconName: "FaUser"
    },
    {
      id: 5,
      title: "Inchaço ou vermelhidão",
      description: "Articulações inchadas, quentes ou vermelhas",
      iconName: "FaTint"
    },
    {
      id: 6,
      title: "Estalos ou falseios",
      description: "Sensação de articulação saindo do lugar",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 7,
      title: "Lesões esportivas",
      description: "Durante ou após atividades físicas intensas",
      iconName: "FaRunning"
    }
  ],
  
  exams: ["Radiografias simples", "Ressonância magnética", "Tomografia computadorizada", "Ultrassom musculoesquelético", "Densitometria óssea", "Artrografia", "Eletroneuromiografia"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Roberto Almeida",
      specialty: "Traumatologia e Cirurgia do Joelho",
      credentials: ["CRM-RS 88990", "Título de Especialista em Ortopedia", "Fellowship em Cirurgia do Joelho", "Membro da Sociedade Brasileira de Ortopedia e Traumatologia"],
      description: "20 anos de experiência em trauma e cirurgia ortopédica"
    },
    {
      id: 2,
      name: "Dra. Mariana Costa",
      specialty: "Ortopedia do Esporte e Artroscopia",
      credentials: ["CRM-RS 11223", "Especialização em Medicina do Esporte", "Certificação Internacional em Artroscopia", "Membro da International Society of Arthroscopy"],
      description: "Especialista em lesões esportivas e cirurgia minimamente invasiva"
    },
    {
      id: 3,
      name: "Dr. André Santos",
      specialty: "Cirurgia de Quadril e Artroplastia",
      credentials: ["CRM-RS 33445", "Fellowship em Cirurgia do Quadril", "Certificação em Artroplastia Primária e Revisional", "Membro da American Academy of Orthopaedic Surgeons"],
      description: "Referência em próteses articulares e cirurgia do quadril"
    },
    {
      id: 4,
      name: "Dra. Camila Fernandes",
      specialty: "Ortopedia Pediátrica e Pé",
      credentials: ["CRM-RS 55667", "Especialização em Ortopedia Pediátrica", "Pós-graduação em Pé e Tornozelo", "Membro da Sociedade Brasileira de Ortopedia Pediátrica"],
      description: "Especialista em problemas ortopédicos infantis e deformidades do pé"
    }
  ],
  
  ctaText: "Movimento sem dor - recupere sua mobilidade e qualidade de vida",
  
  faq: [
    {
      question: "Quando uma fratura precisa de cirurgia?",
      answer: "Quando há desvio, instabilidade, fraturas intra-articulares ou múltiplas."
    },
    {
      question: "A artrose tem cura?",
      answer: "Não tem cura definitiva, mas tem tratamento eficaz para controle da dor e preservação da função."
    },
    {
      question: "Quanto tempo dura uma prótese de joelho?",
      answer: "Em média 15-20 anos, dependendo da atividade do paciente e qualidade da prótese."
    },
    {
      question: "Artroscopia é uma cirurgia?",
      answer: "Sim, é uma cirurgia minimamente invasiva feita através de pequenas incisões."
    },
    {
      question: "Dor nas costas sempre é problema de coluna?",
      answer: "Não, pode ser muscular, articular ou até relacionada a outros órgãos. Avaliação especializada é necessária."
    },
    {
      question: "Criança que cai muito precisa de ortopedista?",
      answer: "Sim, pode indicar problemas de desenvolvimento ou coordenação que merecem avaliação."
    },
    {
      question: "Fisioterapia substitui a cirurgia?",
      answer: "Em muitos casos sim, especialmente quando iniciada precocemente. Avaliamos cada caso individualmente."
    }
  ]
},
{
  id: "otorrinolaringologia",
  title: "Otorrinolaringologia",
  description: "Cuidados especializados para ouvidos, nariz e garganta.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de otorrinolaringologia oferece diagnóstico e tratamento completo para doenças do ouvido, nariz, seios paranasais, faringe, laringe e estruturas relacionadas da cabeça e pescoço.",
  tag: "CLÍNICA",
  image: otorrinoImg,
  
  functionDescription: "O otorrinolaringologista é especialista no diagnóstico e tratamento médico e cirúrgico das doenças que afetam o ouvido, nariz, seios paranasais, faringe, laringe, glândulas salivares e tireoide.",
  
  approachText: "Combinamos tecnologia endoscópica avançada com expertise clínica para oferecer soluções integrais, desde tratamentos conservadores até cirurgias minimamente invasivas.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Endoscopia de Alta Definição",
      description: "Visualização detalhada das vias aéreas superiores",
      iconName: "FaCamera"
    },
    {
      id: 2,
      title: "Cirurgia Minimamente Invasiva",
      description: "Procedimentos endoscópicos com menor trauma e recuperação rápida",
      iconName: "FaMicroscope"
    },
    {
      id: 3,
      title: "Audiologia Moderna",
      description: "Diagnóstico preciso e reabilitação auditiva",
      iconName: "FaEar"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Otorrinolaringológica Completa",
      description: "Avaliação clínica com exame físico detalhado das vias aéreas",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Endoscopia Nasal e Laríngea",
      description: "Exame visual direto das fossas nasais e laringe",
      iconName: "FaSearch"
    },
    {
      id: 3,
      title: "Audiometria e Imitanciometria",
      description: "Avaliação completa da audição e função do ouvido médio",
      iconName: "FaAssistiveListeningSystems"
    },
    {
      id: 4,
      title: "Tratamento de Sinusite",
      description: "Manejo médico e cirúrgico de sinusites agudas e crônicas",
      iconName: "FaHeadSide"
    },
    {
      id: 5,
      title: "Cirurgia de Amígdalas e Adenoides",
      description: "Indicação precisa e técnica cirúrgica moderna",
      iconName: "FaCut"
    },
    {
      id: 6,
      title: "Rinoplastia Funcional",
      description: "Correção do desvio de septo e obstrução nasal",
      iconName: "FaUserMd"
    },
    {
      id: 7,
      title: "Tratamento de Zumbido",
      description: "Abordagem multidisciplinar para acúfeno",
      iconName: "FaVolumeMute"
    },
    {
      id: 8,
      title: "Cirurgia Endoscópica Sinusal",
      description: "Desobstrução dos seios paranasais por endoscopia",
      iconName: "FaTools"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Respiração Melhor",
      description: "Alívio da obstrução nasal e respiração adequada",
      iconName: "FaLungs"
    },
    {
      id: 2,
      title: "Audição Preservada",
      description: "Diagnóstico e tratamento precoce de problemas auditivos",
      iconName: "FaEar"
    },
    {
      id: 3,
      title: "Qualidade de Vida",
      description: "Melhora do sono, fala e deglutição",
      iconName: "FaSmileBeam"
    },
    {
      id: 4,
      title: "Prevenção de Complicações",
      description: "Tratamento adequado evita problemas mais graves",
      iconName: "FaUserShield"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Obstrução nasal persistente",
      description: "Dificuldade para respirar pelo nariz por mais de 2 semanas",
      iconName: "FaLungs"
    },
    {
      id: 2,
      title: "Dor de ouvido frequente",
      description: "Otites recorrentes ou secreção no ouvido",
      iconName: "FaEar"
    },
    {
      id: 3,
      title: "Perda auditiva",
      description: "Dificuldade para ouvir conversas ou sons ambientais",
      iconName: "FaVolumeDown"
    },
    {
      id: 4,
      title: "Rouquidão prolongada",
      description: "Voz rouca por mais de 15 dias sem melhora",
      iconName: "FaCommentMedical"
    },
    {
      id: 5,
      title: "Roncos e apneia do sono",
      description: "Ronco alto ou pausas respiratórias durante o sono",
      iconName: "FaBed"
    },
    {
      id: 6,
      title: "Sinusites recorrentes",
      description: "Mais de 3 episódios por ano de sinusite",
      iconName: "FaHeadSide"
    },
    {
      id: 7,
      title: "Tonturas ou vertigens",
      description: "Sensação de desequilíbrio ou ambiente girando",
      iconName: "FaCompass"
    }
  ],
  
  exams: ["Endoscopia nasal", "Videoendoscopia laríngea", "Audiometria tonal", "Imitanciometria", "Videonistagmografia", "Tomografia dos seios paranasais", "Polissonografia", "Testes de olfato"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Marcelo Santos",
      specialty: "Otorrinolaringologia Geral e Rinologia",
      credentials: ["CRM-RS 66778", "Título de Especialista em Otorrinolaringologia", "Fellowship em Rinologia", "Membro da Sociedade Brasileira de Otorrinolaringologia"],
      description: "18 anos de experiência em cirurgia nasal e tratamento de sinusite"
    },
    {
      id: 2,
      name: "Dra. Ana Paula Oliveira",
      specialty: "Otologia e Audiologia",
      credentials: ["CRM-RS 88990", "Especialização em Otologia", "Mestrado em Ciências da Audição", "Membro da American Academy of Otolaryngology"],
      description: "Especialista em doenças do ouvido e reabilitação auditiva"
    },
    {
      id: 3,
      name: "Dr. Carlos Eduardo Mendes",
      specialty: "Laringologia e Voz",
      credentials: ["CRM-RS 11223", "Fellowship em Laringologia", "Certificação em Cirurgia Laríngea", "Membro da International Association of Phonosurgery"],
      description: "Referência em distúrbios da voz e cirurgia laríngea"
    },
    {
      id: 4,
      name: "Dra. Beatriz Costa",
      specialty: "Medicina do Sono e Roncopatia",
      credentials: ["CRM-RS 33445", "Pós-graduação em Medicina do Sono", "Especialização em Cirurgia para Apneia", "Membro da Brazilian Sleep Association"],
      description: "Especialista em distúrbios respiratórios do sono e ronco"
    }
  ],
  
  ctaText: "Respire melhor, ouça com clareza, viva com qualidade",
  
  faq: [
    {
      question: "Quando as amígdalas precisam ser removidas?",
      answer: "Quando causam apneia do sono, infecções recorrentes (7 episódios em 1 ano) ou abscesso periamigdaliano."
    },
    {
      question: "Desvio de septo tem cura?",
      answer: "Sim, através da septoplastia, cirurgia que corrige o desvio e melhora a respiração."
    },
    {
      question: "Zumbido tem tratamento?",
      answer: "Sim, embora nem sempre tenha cura definitiva, há tratamentos que reduzem significativamente o incômodo."
    },
    {
      question: "Cera no ouvido deve ser removida?",
      answer: "Apenas por profissional. Não use hastes flexíveis, pois podem empurrar a cera e perfurar o tímpano."
    },
    {
      question: "A partir de que idade pode fazer cirurgia de adenoide?",
      answer: "A partir de 1 ano, se houver indicação clara que justifique o procedimento."
    },
    {
      question: "Ronco sempre indica apneia do sono?",
      answer: "Não, mas ronco alto, interrompido e associado a sonolência diurna merece investigação."
    },
    {
      question: "Perda auditiva por exposição a ruído tem volta?",
      answer: "A perda já instalada é permanente, mas pode ser prevenida com proteção auditiva adequada."
    }
  ]
},
{
  id: "pediatria",
  title: "Pediatria",
  description: "Cuidados especializados para a saúde de crianças e adolescentes.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de pediatria oferece acompanhamento integral do desenvolvimento infantil, desde o nascimento até a adolescência, com foco na prevenção, diagnóstico precoce e tratamento adequado.",
  tag: "CLÍNICA",
  image: pediatriaImg,
  
  functionDescription: "O pediatra é especialista na saúde de crianças e adolescentes, atuando na prevenção, diagnóstico e tratamento de doenças, além de acompanhar o crescimento e desenvolvimento adequados.",
  
  approachText: "Adotamos uma abordagem humanizada e familiar, criando vínculos de confiança com crianças e pais, promovendo educação em saúde e acompanhando cada etapa do desenvolvimento.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Acompanhamento do Desenvolvimento",
      description: "Monitoramento do crescimento e marcos do desenvolvimento",
      iconName: "FaChartLine"
    },
    {
      id: 2,
      title: "Pediatria Preventiva",
      description: "Orientação sobre vacinação, nutrição e cuidados infantis",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Atendimento Humanizado",
      description: "Ambiente acolhedor e comunicação clara com a família",
      iconName: "FaHandHoldingHeart"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Pediátrica de Rotina",
      description: "Acompanhamento periódico do crescimento e desenvolvimento",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Puericultura",
      description: "Orientação sobre cuidados, alimentação e estímulos adequados",
      iconName: "FaBaby"
    },
    {
      id: 3,
      title: "Vacinação",
      description: "Aplicação e orientação sobre o calendário vacinal completo",
      iconName: "FaSyringe"
    },
    {
      id: 4,
      title: "Pediatria Ambulatorial",
      description: "Tratamento de doenças agudas e acompanhamento de crônicas",
      iconName: "FaHospitalUser"
    },
    {
      id: 5,
      title: "Acompanhamento do Recém-Nascido",
      description: "Cuidados especiais nos primeiros dias e meses de vida",
      iconName: "FaChild"
    },
    {
      id: 6,
      title: "Avaliação do Desenvolvimento",
      description: "Testes de triagem para atrasos e transtornos do desenvolvimento",
      iconName: "FaBrain"
    },
    {
      id: 7,
      title: "Orientação Nutricional Infantil",
      description: "Acompanhamento da alimentação em cada fase",
      iconName: "FaAppleAlt"
    },
    {
      id: 8,
      title: "Adolescência",
      description: "Cuidados específicos para pré-adolescentes e adolescentes",
      iconName: "FaUserFriends"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Crescimento Saudável",
      description: "Acompanhamento adequado do desenvolvimento físico e mental",
      iconName: "FaHeart"
    },
    {
      id: 2,
      title: "Prevenção Eficaz",
      description: "Vacinação em dia e detecção precoce de problemas",
      iconName: "FaUserShield"
    },
    {
      id: 3,
      title: "Tranquilidade para os Pais",
      description: "Orientação profissional e suporte para cuidados infantis",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 4,
      title: "Saúde Integral",
      description: "Cuidado de todos os aspectos da saúde infantil",
      iconName: "FaSmileBeam"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Consultas de rotina",
      description: "Segundo calendário: mensal no 1º ano, trimestral no 2º, semestral até 5 anos",
      iconName: "FaCalendarCheck"
    },
    {
      id: 2,
      title: "Febre persistente",
      description: "Temperatura acima de 37,8°C por mais de 24 horas",
      iconName: "FaThermometer"
    },
    {
      id: 3,
      title: "Dificuldade alimentar",
      description: "Recusa alimentar, vômitos frequentes ou ganho de peso inadequado",
      iconName: "FaUtensils"
    },
    {
      id: 4,
      title: "Atraso no desenvolvimento",
      description: "Não alcançar marcos motores, de linguagem ou sociais",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 5,
      title: "Problemas respiratórios",
      description: "Tosse persistente, chiado no peito ou dificuldade para respirar",
      iconName: "FaLungs"
    },
    {
      id: 6,
      title: "Alterações de comportamento",
      description: "Irritabilidade excessiva, apatia ou mudanças bruscas",
      iconName: "FaBrain"
    },
    {
      id: 7,
      title: "Dúvidas sobre cuidados",
      description: "Orientação sobre amamentação, introdução alimentar ou vacinas",
      iconName: "FaQuestionCircle"
    }
  ],
  
  exams: ["Avaliação antropométrica", "Testes de desenvolvimento", "Exames de triagem neonatal", "Hemograma infantil", "Parasitológico", "Teste do pezinho", "Teste da orelhinha", "Teste do olhinho"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Maria Helena Santos",
      specialty: "Pediatria Geral e Puericultura",
      credentials: ["CRM-RS 44556", "Título de Especialista em Pediatria", "Mestrado em Saúde da Criança", "Membro da Sociedade Brasileira de Pediatria"],
      description: "25 anos de experiência em cuidados infantis e orientação familiar"
    },
    {
      id: 2,
      name: "Dr. João Pedro Oliveira",
      specialty: "Pediatria Ambulatorial e Emergência",
      credentials: ["CRM-RS 66778", "Especialização em Urgência Pediátrica", "Certificação em Reanimação Neonatal", "Membro da American Academy of Pediatrics"],
      description: "Especialista em doenças agudas e atendimento de urgência infantil"
    },
    {
      id: 3,
      name: "Dra. Ana Beatriz Silva",
      specialty: "Pediatria do Desenvolvimento",
      credentials: ["CRM-RS 88990", "Pós-graduação em Neuropediatria", "Especialização em Transtornos do Desenvolvimento", "Membro da Sociedade Brasileira de Pediatria do Desenvolvimento"],
      description: "Referência em acompanhamento do desenvolvimento e transtornos infantis"
    },
    {
      id: 4,
      name: "Dr. Carlos Eduardo Costa",
      specialty: "Adolescência e Medicina do Esporte Infantil",
      credentials: ["CRM-RS 11223", "Especialização em Medicina do Adolescente", "Certificação em Medicina Esportiva Pediátrica", "Membro da Sociedade de Medicina do Adolescente"],
      description: "Especialista em saúde do adolescente e orientação esportiva"
    }
  ],
  
  ctaText: "O futuro da sua criança começa com cuidados de qualidade hoje",
  
  faq: [
    {
      question: "Com que idade levar o bebê pela primeira vez ao pediatra?",
      answer: "Idealmente na primeira semana de vida, ou quando receber alta da maternidade."
    },
    {
      question: "Quantas consultas o bebê precisa no primeiro ano?",
      answer: "Pelo menos 6 consultas: ao nascer, 15 dias, 1, 2, 4, 6, 9 e 12 meses."
    },
    {
      question: "Febre sempre é motivo de preocupação?",
      answer: "Em bebês menores de 3 meses, sim, sempre. Em crianças maiores, observar comportamento geral."
    },
    {
      question: "Quando começar a introdução alimentar?",
      answer: "Aos 6 meses completos, quando o bebê já apresenta sinais de prontidão."
    },
    {
      question: "Vacina da gripe é necessária para crianças?",
      answer: "Sim, especialmente para crianças menores de 5 anos, que são grupo de risco."
    },
    {
      question: "Até que idade a criança deve ir ao pediatra?",
      answer: "Até os 18 anos, quando então faz a transição para médico de adulto."
    },
    {
      question: "É normal criança ter muitas infecções?",
      answer: "Sim, especialmente quando inicia a vida escolar. Faz parte do desenvolvimento do sistema imunológico."
    }
  ]
},
{
  id: "pneumologia",
  title: "Pneumologia",
  description: "Especializada no diagnóstico e tratamento das doenças respiratórias.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de pneumologia oferece cuidados completos para doenças do sistema respiratório, desde condições comuns até doenças pulmonares complexas, com tecnologia diagnóstica avançada.",
  tag: "CLÍNICA",
  image: pneumologiaImg,
  
  functionDescription: "O pneumologista é especialista no diagnóstico, tratamento e prevenção das doenças que afetam o sistema respiratório, incluindo pulmões, vias aéreas, pleura e músculos respiratórios.",
  
  approachText: "Combinamos avaliação clínica detalhada com exames complementares modernos para oferecer diagnóstico preciso e tratamento personalizado das condições respiratórias.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Espirometria de Alta Precisão",
      description: "Avaliação completa da função pulmonar com equipamentos modernos",
      iconName: "FaLungs"
    },
    {
      id: 2,
      title: "Broncoscopia Diagnóstica",
      description: "Visualização direta das vias aéreas com tecnologia HD",
      iconName: "FaSearch"
    },
    {
      id: 3,
      title: "Oxigenoterapia Domiciliar",
      description: "Programas para insuficiência respiratória crônica",
      iconName: "FaHandHoldingMedical"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Pneumológica Completa",
      description: "Avaliação clínica detalhada com história e exame físico respiratório",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Espirometria (Prova de Função Pulmonar)",
      description: "Medição precisa da capacidade e fluxo respiratório",
      iconName: "FaChartLine"
    },
    {
      id: 3,
      title: "Tratamento da Asma",
      description: "Controle e prevenção de crises asmáticas",
      iconName: "FaWind"
    },
    {
      id: 4,
      title: "Doença Pulmonar Obstrutiva Crônica (DPOC)",
      description: "Manejo da bronquite crônica e enfisema pulmonar",
      iconName: "FaSmoking"
    },
    {
      id: 5,
      title: "Pneumonias e Infecções Respiratórias",
      description: "Diagnóstico e tratamento de infecções pulmonares",
      iconName: "FaVirus"
    },
    {
      id: 6,
      title: "Avaliação da Tosse Crônica",
      description: "Investigação de tosse persistente por mais de 8 semanas",
      iconName: "FaHeadSideCough"
    },
    {
      id: 7,
      title: "Doenças da Pleura",
      description: "Derrame pleural, pneumotórax e outras condições",
      iconName: "FaWater"
    },
    {
      id: 8,
      title: "Medicina do Sono Respiratória",
      description: "Apneia obstrutiva do sono e distúrbios respiratórios noturnos",
      iconName: "FaBed"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Respiração Melhor",
      description: "Alívio da falta de ar e melhora da capacidade respiratória",
      iconName: "FaLungs"
    },
    {
      id: 2,
      title: "Qualidade de Vida",
      description: "Retorno às atividades diárias sem limitação respiratória",
      iconName: "FaSmileBeam"
    },
    {
      id: 3,
      title: "Prevenção de Crises",
      description: "Controle adequado reduz internações por doenças respiratórias",
      iconName: "FaUserShield"
    },
    {
      id: 4,
      title: "Diagnóstico Precoce",
      description: "Identificação precoce de doenças respiratórias graves",
      iconName: "FaSearch"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Falta de ar",
      description: "Dispneia aos esforços ou em repouso",
      iconName: "FaLungs"
    },
    {
      id: 2,
      title: "Tosse persistente",
      description: "Tosse seca ou produtiva por mais de 3 semanas",
      iconName: "FaHeadSideCough"
    },
    {
      id: 3,
      title: "Chiado no peito",
      description: "Sibilos ou roncos audíveis na respiração",
      iconName: "FaWind"
    },
    {
      id: 4,
      title: "Dor torácica",
      description: "Dor ao respirar fundo ou tossir",
      iconName: "FaHeart"
    },
    {
      id: 5,
      title: "Cansaço excessivo",
      description: "Fadiga inexplicável associada a atividades rotineiras",
      iconName: "FaTired"
    },
    {
      id: 6,
      title: "Tabagismo",
      description: "Fumantes atuais ou ex-fumantes para avaliação preventiva",
      iconName: "FaSmoking"
    },
    {
      id: 7,
      title: "Roncos e apneia",
      description: "Pausas respiratórias noturnas ou sonolência diurna excessiva",
      iconName: "FaBed"
    }
  ],
  
  exams: ["Espirometria", "Radiografia de tórax", "Tomografia de tórax", "Broncoscopia", "Gasometria arterial", "Teste de caminhada", "Polissonografia", "Teste de broncoprovocação"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Ricardo Almeida",
      specialty: "Pneumologia Clínica e Asma",
      credentials: ["CRM-RS 22334", "Título de Especialista em Pneumologia", "Mestrado em Doenças Respiratórias", "Membro da Sociedade Brasileira de Pneumologia e Tisiologia"],
      description: "20 anos de experiência no manejo de doenças respiratórias crônicas"
    },
    {
      id: 2,
      name: "Dra. Fernanda Costa",
      specialty: "Pneumologia Intervencionista",
      credentials: ["CRM-RS 44556", "Fellowship em Broncoscopia Intervencionista", "Especialização em Doenças Pleurais", "Membro da European Respiratory Society"],
      description: "Especialista em procedimentos endoscópicos pulmonares"
    },
    {
      id: 3,
      name: "Dr. Marcelo Santos",
      specialty: "Medicina do Sono e Ventilação Mecânica",
      credentials: ["CRM-RS 66778", "Especialização em Medicina do Sono", "Certificação em Ventilação Mecânica", "Membro da American Thoracic Society"],
      description: "Referência em apneia do sono e insuficiência respiratória crônica"
    },
    {
      id: 4,
      name: "Dra. Beatriz Oliveira",
      specialty: "Oncologia Torácica e Intersticiopatias",
      credentials: ["CRM-RS 88990", "Pós-graduação em Oncologia Torácica", "Especialização em Doenças Intersticiais", "Membro da International Association for the Study of Lung Cancer"],
      description: "Especialista em câncer de pulmão e doenças intersticiais"
    }
  ],
  
  ctaText: "Respire com qualidade - cuide da sua saúde pulmonar",
  
  faq: [
    {
      question: "Asma tem cura?",
      answer: "Não tem cura definitiva, mas tem controle excelente que permite vida normal sem limitações."
    },
    {
      question: "Fumante deve fazer exames preventivos?",
      answer: "Sim, fumantes com mais de 30 anos de maço devem fazer tomografia anual para rastreamento de câncer."
    },
    {
      question: "Ronco sempre é problema respiratório?",
      answer: "Não necessariamente, mas quando associado a apneias e sonolência diurna, precisa investigação."
    },
    {
      question: "Espirometria dói?",
      answer: "Não, é um exame não invasivo que apenas mede a capacidade de sopro."
    },
    {
      question: "Quando suspeitar de câncer de pulmão?",
      answer: "Tosse persistente, escarro com sangue, perda de peso sem causa ou dor torácica em fumantes."
    },
    {
      question: "Pneumonia é sempre grave?",
      answer: "Depende da idade, estado geral e microorganismo. Idosos e imunossuprimidos são mais vulneráveis."
    },
    {
      question: "Bronquite crônica é a mesma coisa que DPOC?",
      answer: "Bronquite crônica é um dos componentes da DPOC, que também inclui enfisema pulmonar."
    }
  ]
},
{
  id: "cirurgiao-proctologista",
  title: "Cirurgião Proctologista",
  description: "Especializado em doenças do intestino grosso, reto e ânus.",
  longDescription: "No Centro Médico Sapiranga, nossos cirurgiões proctologistas oferecem diagnóstico e tratamento completo para doenças colorretais e anorretais, com técnicas minimamente invasivas e acompanhamento humanizado.",
  tag: "CIRÚRGICA",
  image: proctologiaImg,
  
  functionDescription: "O cirurgião proctologista é especialista no diagnóstico e tratamento cirúrgico e clínico das doenças que afetam o intestino grosso (cólon), reto, canal anal e ânus.",
  
  approachText: "Priorizamos tratamentos conservadores quando possível e utilizamos técnicas cirúrgicas modernas e minimamente invasivas para garantir recuperação rápida e menor desconforto.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Cirurgia Minimamente Invasiva",
      description: "Técnicas laparoscópicas e robóticas para menor trauma",
      iconName: "FaMicroscope"
    },
    {
      id: 2,
      title: "Prevenção do Câncer Colorretal",
      description: "Rastreamento e detecção precoce através da colonoscopia",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Tratamento de Hemorroidas",
      description: "Técnicas modernas para tratamento definitivo",
      iconName: "FaHandHoldingHeart"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Proctológica Completa",
      description: "Avaliação clínica com toque retal e anuscopia quando necessário",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Colonoscopia Diagnóstica e Terapêutica",
      description: "Exame completo do cólon com retirada de pólipos",
      iconName: "FaSearch"
    },
    {
      id: 3,
      title: "Tratamento de Hemorroidas",
      description: "Ligadura elástica, hemorroidectomia e procedimentos modernos",
      iconName: "FaTint"
    },
    {
      id: 4,
      title: "Cirurgia de Fissura Anal",
      description: "Tratamento definitivo para fissuras anais crônicas",
      iconName: "FaCut"
    },
    {
      id: 5,
      title: "Tratamento de Fístulas Anais",
      description: "Técnicas de preservação esfincteriana",
      iconName: "FaRoute"
    },
    {
      id: 6,
      title: "Doença Diverticular",
      description: "Manejo da diverticulite aguda e crônica",
      iconName: "FaStomach"
    },
    {
      id: 7,
      title: "Cirurgia Colorretal Oncológica",
      description: "Tratamento cirúrgico do câncer de cólon e reto",
      iconName: "FaUserMd"
    },
    {
      id: 8,
      title: "Incontinência Anal",
      description: "Avaliação e tratamento da incontinência fecal",
      iconName: "FaUserShield"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Alívio Imediato",
      description: "Resolução rápida de sintomas incômodos",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 2,
      title: "Prevenção Eficaz",
      description: "Detecção precoce de câncer colorretal",
      iconName: "FaShieldAlt"
    },
    {
      id: 3,
      title: "Recuperação Rápida",
      description: "Técnicas minimamente invasivas permitem retorno às atividades",
      iconName: "FaRunning"
    },
    {
      id: 4,
      title: "Melhora da Qualidade de Vida",
      description: "Solução de problemas que afetam o dia a dia",
      iconName: "FaSmileBeam"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Sangramento nas fezes",
      description: "Sangue vermelho vivo ou escuro nas fezes",
      iconName: "FaTint"
    },
    {
      id: 2,
      title: "Dor anal ou retal",
      description: "Dor ao evacuar, sentar ou em repouso",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 3,
      title: "Prolapso anal",
      description: "Saliência que sai pelo ânus",
      iconName: "FaUser"
    },
    {
      id: 4,
      title: "Coceira anal persistente",
      description: "Prurido anal que não melhora com higiene",
      iconName: "FaItch"
    },
    {
      id: 5,
      title: "Alteração do hábito intestinal",
      description: "Mudança persistente no ritmo evacuatório",
      iconName: "FaToilet"
    },
    {
      id: 6,
      title: "Histórico familiar",
      description: "Parentes com câncer colorretal ou pólipos",
      iconName: "FaUsers"
    },
    {
      id: 7,
      title: "Check-up preventivo",
      description: "A partir dos 45 anos para rastreamento de câncer",
      iconName: "FaCalendarCheck"
    }
  ],
  
  exams: ["Colonoscopia", "Anuscopia", "Retossigmoidoscopia", "Manometria anorretal", "Ultrassom endorretal", "Defecografia", "Tomografia computadorizada", "Ressonância magnética pélvica"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Carlos Eduardo Mendes",
      specialty: "Cirurgia Colorretal e Proctologia",
      credentials: ["CRM-RS 11223", "Título de Especialista em Cirurgia do Aparelho Digestivo", "Fellowship em Cirurgia Colorretal", "Membro da Sociedade Brasileira de Coloproctologia"],
      description: "15 anos de experiência em cirurgia colorretal minimamente invasiva"
    },
    {
      id: 2,
      name: "Dra. Ana Paula Santos",
      specialty: "Proctologia e Doenças Anorretais",
      credentials: ["CRM-RS 33445", "Especialização em Proctologia", "Mestrado em Cirurgia do Aparelho Digestivo", "Membro da International Society of University Colon and Rectal Surgeons"],
      description: "Especialista em doenças anorretais e técnicas modernas de tratamento"
    },
    {
      id: 3,
      name: "Dr. Ricardo Almeida",
      specialty: "Cirurgia Oncológica Colorretal",
      credentials: ["CRM-RS 55667", "Fellowship em Oncologia Colorretal", "Certificação em Cirurgia Robótica", "Membro da Society of Surgical Oncology"],
      description: "Referência em câncer colorretal e cirurgias complexas"
    }
  ],
  
  ctaText: "Cuide da sua saúde intestinal com quem entende do assunto",
  
  faq: [
    {
      question: "Colonoscopia dói?",
      answer: "É realizada sob sedação, portanto o paciente não sente dor durante o exame."
    },
    {
      question: "Hemorroidas têm cura?",
      answer: "Sim, tanto com tratamento clínico quanto cirúrgico, dependendo do grau."
    },
    {
      question: "A partir de que idade fazer colonoscopia?",
      answer: "Aos 45 anos para população geral, antes se houver histórico familiar."
    },
    {
      question: "Fissura anal precisa de cirurgia?",
      answer: "Apenas as crônicas que não respondem ao tratamento clínico."
    },
    {
      question: "O que é pólipo?",
      answer: "São crescimentos na mucosa do intestino. Alguns podem ser pré-cancerosos."
    },
    {
      question: "Cirurgia de hemorroidas é dolorosa?",
      answer: "O pós-operatório tem desconforto controlável com medicação adequada."
    },
    {
      question: "Incontinência fecal tem tratamento?",
      answer: "Sim, dependendo da causa, pode ser tratada com fisioterapia, medicamentos ou cirurgia."
    }
  ]
},
{
  id: "psicologia",
  title: "Psicologia",
  description: "Cuidado integral para saúde mental e bem-estar emocional.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de psicologia oferece atendimento especializado para promoção da saúde mental, tratamento de transtornos psicológicos e desenvolvimento do potencial humano, com abordagens terapêuticas baseadas em evidências.",
  tag: "CLÍNICA",
  image: psicologiaImg,
  
  functionDescription: "O psicólogo é profissional especializado no estudo do comportamento humano e processos mentais, atuando na prevenção, diagnóstico e tratamento de questões emocionais, comportamentais e de desenvolvimento.",
  
  approachText: "Adotamos uma abordagem humanizada e integrativa, considerando a singularidade de cada indivíduo e oferecendo um espaço seguro de acolhimento, escuta qualificada e intervenções terapêuticas personalizadas.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Acolhimento Empático",
      description: "Espaço seguro para expressão e reflexão",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 2,
      title: "Abordagens Baseadas em Evidências",
      description: "Terapias com comprovação científica de eficácia",
      iconName: "FaFlask"
    },
    {
      id: 3,
      title: "Confidencialidade Garantida",
      description: "Sigilo absoluto conforme código de ética profissional",
      iconName: "FaUserSecret"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Psicoterapia Individual",
      description: "Atendimento personalizado para adultos, adolescentes e crianças",
      iconName: "FaUser"
    },
    {
      id: 2,
      title: "Terapia Cognitivo-Comportamental (TCC)",
      description: "Foco em pensamentos, emoções e comportamentos",
      iconName: "FaBrain"
    },
    {
      id: 3,
      title: "Psicoterapia de Casal",
      description: "Mediação de conflitos e fortalecimento do vínculo",
      iconName: "FaHeart"
    },
    {
      id: 4,
      title: "Terapia Familiar",
      description: "Trabalho com dinâmicas e relações familiares",
      iconName: "FaUsers"
    },
    {
      id: 5,
      title: "Avaliação Psicológica",
      description: "Testes e instrumentos para diagnóstico psicológico",
      iconName: "FaClipboardCheck"
    },
    {
      id: 6,
      title: "Orientação Profissional",
      description: "Auxílio na escolha e planejamento de carreira",
      iconName: "FaBriefcase"
    },
    {
      id: 7,
      title: "Psicoterapia Infantil",
      description: "Atendimento especializado para crianças com técnicas lúdicas",
      iconName: "FaChild"
    },
    {
      id: 8,
      title: "Grupos Terapêuticos",
      description: "Espaços de compartilhamento e aprendizado coletivo",
      iconName: "FaComments"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Autoconhecimento",
      description: "Compreensão mais profunda de si mesmo",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Bem-Estar Emocional",
      description: "Melhora da qualidade de vida e satisfação pessoal",
      iconName: "FaSmileBeam"
    },
    {
      id: 3,
      title: "Ferramentas para Vida",
      description: "Habilidades para lidar com desafios emocionais",
      iconName: "FaToolbox"
    },
    {
      id: 4,
      title: "Relacionamentos Saudáveis",
      description: "Melhora na comunicação e vínculos afetivos",
      iconName: "FaHandshake"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Sintomas de ansiedade",
      description: "Preocupação excessiva, medos irracionais, ataques de pânico",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 2,
      title: "Sintomas depressivos",
      description: "Tristeza persistente, falta de motivação, desesperança",
      iconName: "FaTired"
    },
    {
      id: 3,
      title: "Dificuldades de relacionamento",
      description: "Conflitos frequentes, isolamento social, problemas de comunicação",
      iconName: "FaUsers"
    },
    {
      id: 4,
      title: "Estresse crônico",
      description: "Cansaço constante, irritabilidade, dificuldade de relaxar",
      iconName: "FaBurn"
    },
    {
      id: 5,
      title: "Traumas e perdas",
      description: "Luto, abusos, acidentes ou eventos impactantes",
      iconName: "FaHeartBroken"
    },
    {
      id: 6,
      title: "Dificuldades profissionais",
      description: "Burnout, indecisão de carreira, problemas no trabalho",
      iconName: "FaBriefcase"
    },
    {
      id: 7,
      title: "Busca por autoconhecimento",
      description: "Mesmo sem sintomas específicos, para desenvolvimento pessoal",
      iconName: "FaUserEdit"
    }
  ],
  
  exams: ["Avaliação psicológica", "Testes projetivos", "Inventários de personalidade", "Escalas de ansiedade e depressão", "Avaliação neuropsicológica", "Testes vocacionais", "Dinâmicas de grupo"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Mariana Oliveira",
      specialty: "Psicologia Clínica e TCC",
      credentials: ["CRP 07/12345", "Mestrado em Psicologia Clínica", "Especialização em Terapia Cognitivo-Comportamental", "Formação em Mindfulness"],
      description: "12 anos de experiência no tratamento de transtornos de ansiedade e humor"
    },
    {
      id: 2,
      name: "Dr. Carlos Santos",
      specialty: "Psicoterapia de Casal e Familiar",
      credentials: ["CRP 07/67890", "Especialização em Terapia Familiar Sistêmica", "Certificação em Mediação de Conflitos", "Membro da Associação Brasileira de Terapia Familiar"],
      description: "Especialista em relacionamentos conjugais e dinâmicas familiares"
    },
    {
      id: 3,
      name: "Dra. Ana Beatriz Silva",
      specialty: "Psicologia Infantil e Adolescente",
      credentials: ["CRP 07/13579", "Pós-graduação em Psicopedagogia", "Formação em Ludoterapia", "Especialização em Desenvolvimento Infantil"],
      description: "Referência em atendimento infantil e orientação parental"
    },
    {
      id: 4,
      name: "Dr. Ricardo Almeida",
      specialty: "Psicologia Organizacional e Coaching",
      credentials: ["CRP 07/24680", "MBA em Gestão de Pessoas", "Certificação Internacional em Coaching", "Especialização em Desenvolvimento de Liderança"],
      description: "Especialista em carreira, desenvolvimento profissional e alta performance"
    }
  ],
  
  ctaText: "Cuide da sua saúde mental - o bem-estar emocional transforma vidas",
  
  faq: [
    {
      question: "Psicólogo e psiquiatra são a mesma coisa?",
      answer: "Não. Psicólogo faz psicoterapia, psiquiatra é médico e pode prescrever medicamentos. Muitas vezes trabalham em conjunto."
    },
    {
      question: "Quanto tempo dura um tratamento psicológico?",
      answer: "Varia conforme a demanda. Algumas questões são resolvidas em poucos meses, outras demandam acompanhamento mais longo."
    },
    {
      question: "Preciso estar 'mal' para ir ao psicólogo?",
      answer: "Não. A psicologia também atua na prevenção e no desenvolvimento pessoal, não apenas no tratamento de doenças."
    },
    {
      question: "Tudo que falo na terapia é confidencial?",
      answer: "Sim, o sigilo é garantido por lei, exceto em situações específicas que envolvam risco de vida."
    },
    {
      question: "Crianças podem fazer terapia?",
      answer: "Sim, e muitas vezes se beneficiam muito, especialmente com abordagens lúdicas adequadas à idade."
    },
    {
      question: "Quantas sessões são necessárias por semana?",
      answer: "Geralmente uma sessão semanal, podendo ser mais frequente em situações específicas."
    },
    {
      question: "Planos de saúde cobrem psicologia?",
      answer: "Sim, a maioria dos planos oferece cobertura para um número determinado de sessões por ano."
    }
  ]
},
{
  id: "psiquiatria",
  title: "Psiquiatria",
  description: "Diagnóstico e tratamento médico especializado das doenças mentais.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de psiquiatria oferece cuidado integral para transtornos mentais, combinando avaliação diagnóstica precisa, tratamento medicamentoso quando necessário e abordagem psicoterapêutica integrada.",
  tag: "CLÍNICA",
  image: psiquiatriaImg,
  
  functionDescription: "O psiquiatra é médico especialista no diagnóstico, tratamento e prevenção dos transtornos mentais, emocionais e comportamentais, utilizando abordagens biológicas, psicológicas e sociais.",
  
  approachText: "Adotamos uma abordagem bio-psico-social, considerando aspectos biológicos, psicológicos e contextuais do paciente, com foco no tratamento integral e na recuperação da qualidade de vida.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Diagnóstico Médico Preciso",
      description: "Avaliação clínica especializada e diagnóstico diferencial",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Tratamento Farmacológico Moderno",
      description: "Medicações de última geração com menos efeitos colaterais",
      iconName: "FaPills"
    },
    {
      id: 3,
      title: "Abordagem Integrada",
      description: "Combinação de medicamentos e psicoterapia quando indicado",
      iconName: "FaHandsHelping"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Psiquiátrica Completa",
      description: "Avaliação diagnóstica detalhada com história clínica e exame mental",
      iconName: "FaUserMd"
    },
    {
      id: 2,
      title: "Tratamento da Depressão",
      description: "Diagnóstico e manejo dos transtornos depressivos",
      iconName: "FaTired"
    },
    {
      id: 3,
      title: "Tratamento de Transtornos de Ansiedade",
      description: "Manejo de TAG, pânico, fobias e TOC",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 4,
      title: "Psiquiatria Infantil e Adolescente",
      description: "Atenção especializada para transtornos do neurodesenvolvimento",
      iconName: "FaChild"
    },
    {
      id: 5,
      title: "Transtorno Bipolar",
      description: "Diagnóstico e estabilização do humor",
      iconName: "FaBalanceScale"
    },
    {
      id: 6,
      title: "Psiquiatria Geriátrica",
      description: "Cuidados mentais especializados para idosos",
      iconName: "FaUserClock"
    },
    {
      id: 7,
      title: "Tratamento da Dependência Química",
      description: "Abordagem médica para alcoolismo e outras dependências",
      iconName: "FaPrescriptionBottle"
    },
    {
      id: 8,
      title: "Psiquiatria do Sono",
      description: "Distúrbios do sono de origem psiquiátrica",
      iconName: "FaBed"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Tratamento Científico",
      description: "Baseado em evidências e protocolos atualizados",
      iconName: "FaFlask"
    },
    {
      id: 2,
      title: "Melhora dos Sintomas",
      description: "Alívio eficaz dos sofrimentos mentais",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 3,
      title: "Qualidade de Vida",
      description: "Recuperação do funcionamento pessoal e social",
      iconName: "FaSmileBeam"
    },
    {
      id: 4,
      title: "Prevenção de Recidivas",
      description: "Acompanhamento contínuo para manutenção da saúde mental",
      iconName: "FaUserShield"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Sintomas depressivos persistentes",
      description: "Tristeza, desesperança, falta de prazer por mais de 2 semanas",
      iconName: "FaTired"
    },
    {
      id: 2,
      title: "Crises de ansiedade intensas",
      description: "Ataques de pânico, preocupação excessiva, medos paralisantes",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 3,
      title: "Mudanças bruscas de humor",
      description: "Alternância entre euforia e depressão, irritabilidade extrema",
      iconName: "FaBalanceScale"
    },
    {
      id: 4,
      title: "Pensamentos suicidas",
      description: "Ideação de morte ou autoagressão",
      iconName: "FaHeartBroken"
    },
    {
      id: 5,
      title: "Alterações do pensamento",
      description: "Delírios, alucinações, paranoia",
      iconName: "FaBrain"
    },
    {
      id: 6,
      title: "Problemas com substâncias",
      description: "Uso abusivo de álcool, drogas ou medicamentos",
      iconName: "FaPrescriptionBottle"
    },
    {
      id: 7,
      title: "Dificuldade de funcionamento",
      description: "Prejuízo no trabalho, estudos ou relacionamentos por questões emocionais",
      iconName: "FaUser"
    }
  ],
  
  exams: ["Avaliação psiquiátrica", "Exames laboratoriais", "Testes neuropsicológicos", "Polissonografia", "EEG (em casos específicos)", "Neuroimagem (quando indicado)", "Escalas de avaliação padronizadas"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Eduardo Mendes",
      specialty: "Psiquiatria Geral e Transtornos do Humor",
      credentials: ["CRM-RS 11223", "Título de Especialista em Psiquiatria", "Mestrado em Neurociências", "Membro da Associação Brasileira de Psiquiatria"],
      description: "18 anos de experiência no tratamento de depressão e ansiedade"
    },
    {
      id: 2,
      name: "Dra. Ana Paula Silva",
      specialty: "Psiquiatria Infantil e Adolescente",
      credentials: ["CRM-RS 33445", "Especialização em Psiquiatria da Infância e Adolescência", "Fellowship em TDAH e Autismo", "Membro da Associação Brasileira de Psiquiatria Infantil"],
      description: "Especialista em transtornos do neurodesenvolvimento e saúde mental infantil"
    },
    {
      id: 3,
      name: "Dr. Ricardo Almeida",
      specialty: "Psiquiatria Geriátrica e Transtorno Bipolar",
      credentials: ["CRM-RS 55667", "Pós-graduação em Psiquiatria Geriátrica", "Certificação em Transtorno Bipolar", "Membro da International Society for Bipolar Disorders"],
      description: "Referência em saúde mental do idoso e transtornos do humor"
    },
    {
      id: 4,
      name: "Dra. Beatriz Costa",
      specialty: "Dependência Química e Psiquiatria do Sono",
      credentials: ["CRM-RS 77889", "Especialização em Dependência Química", "Formação em Medicina do Sono", "Membro da American Academy of Sleep Medicine"],
      description: "Especialista em adicções e distúrbios do sono de origem psiquiátrica"
    }
  ],
  
  ctaText: "Saúde mental é saúde - cuide da sua mente com especialistas",
  
  faq: [
    {
      question: "Remédios psiquiátricos viciam?",
      answer: "A maioria não causa dependência quando usada conforme prescrição. Alguns ansiolíticos exigem cuidado especial."
    },
    {
      question: "Psiquiatra só receita remédio?",
      answer: "Não, também faz psicoterapia quando tem formação específica, ou trabalha em conjunto com psicólogos."
    },
    {
      question: "Quanto tempo leva para o remédio fazer efeito?",
      answer: "Antidepressivos: 2-4 semanas. Ansiolíticos: efeito mais rápido. Antipsicóticos: varia conforme medicamento."
    },
    {
      question: "É possível parar os remédios um dia?",
      answer: "Em muitos casos sim, mas deve ser feito gradualmente e sob supervisão médica."
    },
    {
      question: "Psiquiatria infantil é diferente?",
      answer: "Sim, usa abordagens específicas para crianças e considera o desenvolvimento cerebral em formação."
    },
    {
      question: "Tratamento psiquiátrico é para vida toda?",
      answer: "Não necessariamente. Muitos tratamentos são temporários. Algumas condições crônicas exigem acompanhamento contínuo."
    },
    {
      question: "Posso fazer terapia sem medicamentos?",
      answer: "Em muitos casos sim, especialmente em formas leves. O psiquiatra avalia a necessidade de cada caso."
    }
  ]
},

{
  id: "reumatologia",
  title: "Reumatologia",
  description: "Diagnóstico e tratamento das doenças reumáticas e autoimunes.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de reumatologia oferece cuidado especializado para doenças que afetam articulações, ossos, músculos e tecidos conjuntivos, com foco em diagnóstico precoce e tratamento individualizado.",
  tag: "CLÍNICA",
  image: reumatologiaImg,
  
  functionDescription: "O reumatologista é especialista no diagnóstico e tratamento das doenças reumáticas, autoimunes e degenerativas que afetam o sistema musculoesquelético e tecidos conjuntivos.",
  
  approachText: "Adotamos uma abordagem integrada e multidisciplinar, combinando tratamento medicamentoso moderno, reabilitação e educação do paciente para controle eficaz das doenças reumáticas.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Diagnóstico Precoce",
      description: "Identificação inicial de doenças reumáticas para melhor prognóstico",
      iconName: "FaSearch"
    },
    {
      id: 2,
      title: "Medicamentos Biológicos",
      description: "Tratamentos de última geração para doenças autoimunes",
      iconName: "FaFlask"
    },
    {
      id: 3,
      title: "Abordagem Multidisciplinar",
      description: "Trabalho integrado com fisioterapia, terapia ocupacional e nutrição",
      iconName: "FaUsers"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Reumatológica Completa",
      description: "Avaliação detalhada com exame físico articular e sistêmico",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Artrite Reumatoide",
      description: "Diagnóstico e tratamento da artrite inflamatória crônica",
      iconName: "FaHandPaper"
    },
    {
      id: 3,
      title: "Lúpus Eritematoso Sistêmico",
      description: "Manejo da doença autoimune multissistêmica",
      iconName: "FaSun"
    },
    {
      id: 4,
      title: "Osteoartrose (Artrose)",
      description: "Tratamento da degeneração articular",
      iconName: "FaBone"
    },
    {
      id: 5,
      title: "Espondiloartrites",
      description: "Espondilite anquilosante e artrite psoriásica",
      iconName: "FaSpine"
    },
    {
      id: 6,
      title: "Gota e Artrites por Cristais",
      description: "Tratamento da hiperuricemia e artrite gotosa",
      iconName: "FaTint"
    },
    {
      id: 7,
      title: "Osteoporose",
      description: "Prevenção e tratamento da perda de massa óssea",
      iconName: "FaUserShield"
    },
    {
      id: 8,
      title: "Fibromialgia",
      description: "Manejo da dor crônica generalizada e fadiga",
      iconName: "FaHandHoldingHeart"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Controle da Dor",
      description: "Alívio eficaz da dor articular e muscular",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 2,
      title: "Preservação da Função",
      description: "Manutenção da mobilidade e independência",
      iconName: "FaWalking"
    },
    {
      id: 3,
      title: "Prevenção de Danos",
      description: "Evitar deformidades e complicações das doenças reumáticas",
      iconName: "FaShieldAlt"
    },
    {
      id: 4,
      title: "Qualidade de Vida",
      description: "Melhora do bem-estar e capacidade para atividades diárias",
      iconName: "FaSmileBeam"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dor articular persistente",
      description: "Dor em múltiplas articulações por mais de 6 semanas",
      iconName: "FaBone"
    },
    {
      id: 2,
      title: "Inchaço articular",
      description: "Articulações inchadas, quentes ou vermelhas",
      iconName: "FaTint"
    },
    {
      id: 3,
      title: "Rigidez matinal",
      description: "Dificuldade para movimentar-se ao acordar",
      iconName: "FaBed"
    },
    {
      id: 4,
      title: "Dor lombar inflamatória",
      description: "Dor que melhora com movimento e piora com repouso",
      iconName: "FaSpine"
    },
    {
      id: 5,
      title: "Fraqueza muscular",
      description: "Dificuldade para levantar-se ou subir escadas",
      iconName: "FaRunning"
    },
    {
      id: 6,
      title: "Manchas na pele",
      description: "Erupções cutâneas, especialmente após exposição solar",
      iconName: "FaSun"
    },
    {
      id: 7,
      title: "Histórico familiar",
      description: "Parentes com doenças reumáticas autoimunes",
      iconName: "FaUsers"
    }
  ],
  
  exams: ["Fator reumatoide", "Anti-CCP", "ANA (FAN)", "Ácido úrico", "Velocidade de hemossedimentação", "Proteína C reativa", "Densitometria óssea", "Radiografias articulares"],
  
  doctors: [
    {
      id: 1,
      name: "Dra. Mariana Santos",
      specialty: "Reumatologia Clínica e Doenças Autoimunes",
      credentials: ["CRM-RS 66778", "Título de Especialista em Reumatologia", "Mestrado em Imunologia", "Membro da Sociedade Brasileira de Reumatologia"],
      description: "15 anos de experiência em artrite reumatoide e lúpus"
    },
    {
      id: 2,
      name: "Dr. Carlos Eduardo Oliveira",
      specialty: "Reumatologia do Esporte e Osteoartrose",
      credentials: ["CRM-RS 88990", "Especialização em Medicina do Esporte", "Fellowship em Reumatologia Pediátrica", "Membro da American College of Rheumatology"],
      description: "Especialista em doenças reumáticas do atleta e degenerativas"
    },
    {
      id: 3,
      name: "Dra. Ana Beatriz Silva",
      specialty: "Fibromialgia e Dor Crônica",
      credentials: ["CRM-RS 11223", "Pós-graduação em Medicina da Dor", "Certificação em Reabilitação", "Membro da International Association for the Study of Pain"],
      description: "Referência em fibromialgia e síndromes dolorosas complexas"
    },
    {
      id: 4,
      name: "Dr. Ricardo Mendes",
      specialty: "Osteoporose e Doenças Ósseas Metabólicas",
      credentials: ["CRM-RS 33445", "Especialização em Metabolismo Ósseo", "Mestrado em Endocrinologia", "Membro da International Osteoporosis Foundation"],
      description: "Especialista em osteoporose e distúrbios do metabolismo ósseo"
    }
  ],
  
  ctaText: "Mobilidade sem dor - controle as doenças reumáticas com especialistas",
  
  faq: [
    {
      question: "Artrite reumatoide tem cura?",
      answer: "Não tem cura definitiva, mas tem controle excelente com tratamento adequado, permitindo vida normal."
    },
    {
      question: "Reumatismo é doença de idoso?",
      answer: "Não, muitas doenças reumáticas começam em jovens, como lúpus e artrite reumatoide."
    },
    {
      question: "Exame FAN positivo significa lúpus?",
      answer: "Não necessariamente. Pode ser positivo em pessoas saudáveis ou outras doenças. Avaliação clínica é fundamental."
    },
    {
      question: "Fibromialgia é psicológica?",
      answer: "Não, é uma doença real com alterações no processamento da dor. Requer tratamento médico especializado."
    },
    {
      question: "Alimentos pioram a artrite?",
      answer: "Alguns sim, especialmente alimentos inflamatórios. Orientação nutricional pode ajudar no controle."
    },
    {
      question: "Remédios biológicos são seguros?",
      answer: "Sim, quando usados com indicação e monitoramento adequados. São revolucionários no tratamento."
    },
    {
      question: "Dor nas costas sempre é reumatismo?",
      answer: "Não, pode ser muscular, ortopédica ou de outras causas. Avaliação especializada define o diagnóstico."
    }
  ]
},

{
  id: "urologia",
  title: "Urologia",
  description: "Especializada no diagnóstico e tratamento do sistema urinário e reprodutor masculino.",
  longDescription: "No Centro Médico Sapiranga, nossa equipe de urologia oferece cuidados completos para doenças do trato urinário (rins, ureteres, bexiga e uretra) e sistema reprodutor masculino, com técnicas minimamente invasivas.",
  tag: "CIRÚRGICA",
  image: urologiaImg,
  
  functionDescription: "O urologista é especialista no diagnóstico e tratamento cirúrgico e clínico das doenças que afetam o sistema urinário de ambos os sexos e o sistema reprodutor masculino.",
  
  approachText: "Combinamos tecnologia endoscópica avançada com expertise clínica para oferecer soluções eficazes e minimamente invasivas para problemas urológicos.",
  
  keyHighlights: [
    {
      id: 1,
      title: "Cirurgia Minimamente Invasiva",
      description: "Uretroscopia, cistoscopia e laparoscopia urológica",
      iconName: "FaMicroscope"
    },
    {
      id: 2,
      title: "Diagnóstico Preciso",
      description: "Exames de imagem e endoscópicos de alta definição",
      iconName: "FaSearch"
    },
    {
      id: 3,
      title: "Urologia Oncológica",
      description: "Tratamento de câncer de próstata, rim e bexiga",
      iconName: "FaUserMd"
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Consulta Urológica Completa",
      description: "Avaliação clínica com história, exame físico e PSA quando indicado",
      iconName: "FaStethoscope"
    },
    {
      id: 2,
      title: "Hiperplasia Prostática Benigna (HPB)",
      description: "Tratamento do crescimento benigno da próstata",
      iconName: "FaProstate"
    },
    {
      id: 3,
      title: "Câncer de Próstata",
      description: "Diagnóstico precoce, biópsia e tratamento multimodal",
      iconName: "FaUserMd"
    },
    {
      id: 4,
      title: "Cálculos Renais (Pedras nos Rins)",
      description: "Litotripsia, ureteroscopia e tratamento cirúrgico",
      iconName: "FaGem"
    },
    {
      id: 5,
      title: "Incontinência Urinária",
      description: "Avaliação e tratamento da perda involuntária de urina",
      iconName: "FaTint"
    },
    {
      id: 6,
      title: "Disfunção Erétil",
      description: "Diagnóstico e tratamento das dificuldades de ereção",
      iconName: "FaMale"
    },
    {
      id: 7,
      title: "Infecções Urinárias Recorrentes",
      description: "Investigação e tratamento de cistites de repetição",
      iconName: "FaVirus"
    },
    {
      id: 8,
      title: "Vasectomia",
      description: "Método contraceptivo definitivo masculino",
      iconName: "FaUserFriends"
    }
  ],
  
  benefits: [
    {
      id: 1,
      title: "Alívio dos Sintomas",
      description: "Melhora da micção, dor e desconforto urinário",
      iconName: "FaHandHoldingHeart"
    },
    {
      id: 2,
      title: "Diagnóstico Precoce",
      description: "Detecção inicial de câncer urológico para melhor prognóstico",
      iconName: "FaUserShield"
    },
    {
      id: 3,
      title: "Qualidade de Vida",
      description: "Retorno à função urinária e sexual normal",
      iconName: "FaSmileBeam"
    },
    {
      id: 4,
      title: "Tratamento Menos Invasivo",
      description: "Procedimentos endoscópicos com recuperação rápida",
      iconName: "FaMicroscope"
    }
  ],
  
  whenToSeek: [
    {
      id: 1,
      title: "Dificuldade para urinar",
      description: "Jato fraco, esforço ou intermitência",
      iconName: "FaTint"
    },
    {
      id: 2,
      title: "Sangue na urina",
      description: "Hematúria visível ou em exame",
      iconName: "FaExclamationTriangle"
    },
    {
      id: 3,
      title: "Dor lombar ou abdominal",
      description: "Especialmente associada à micção",
      iconName: "FaStomach"
    },
    {
      id: 4,
      title: "Vontade frequente de urinar",
      description: "Mais de 8 vezes ao dia ou acordar para urinar à noite",
      iconName: "FaBed"
    },
    {
      id: 5,
      title: "Dor ou queimação ao urinar",
      description: "Disúria persistente",
      iconName: "FaFire"
    },
    {
      id: 6,
      title: "Check-up masculino",
      description: "Homens acima de 40 anos para avaliação prostática",
      iconName: "FaCalendarCheck"
    },
    {
      id: 7,
      title: "Problemas sexuais",
      description: "Dificuldade de ereção ou ejaculação precoce",
      iconName: "FaMale"
    }
  ],
  
  exams: ["PSA (Antígeno Prostático Específico)", "Ultrassom renal e vesical", "Urofluxometria", "Cistoscopia", "Urografia excretora", "Ressonância magnética da próstata", "Biópsia prostática", "Exame de urina"],
  
  doctors: [
    {
      id: 1,
      name: "Dr. Roberto Almeida",
      specialty: "Urologia Geral e Cirurgia Minimamente Invasiva",
      credentials: ["CRM-RS 44556", "Título de Especialista em Urologia", "Fellowship em Endourologia", "Membro da Sociedade Brasileira de Urologia"],
      description: "18 anos de experiência em litíase urinária e cirurgia endoscópica"
    },
    {
      id: 2,
      name: "Dr. Marcelo Santos",
      specialty: "Uro-Oncologia e Próstata",
      credentials: ["CRM-RS 66778", "Especialização em Oncologia Urológica", "Certificação em Cirurgia Robótica", "Membro da European Association of Urology"],
      description: "Especialista em câncer de próstata e cirurgia robótica"
    },
    {
      id: 3,
      name: "Dr. Carlos Eduardo Costa",
      specialty: "Urologia Funcional e Andrologia",
      credentials: ["CRM-RS 88990", "Pós-graduação em Andrologia", "Especialização em Urologia Feminina", "Membro da International Society for Sexual Medicine"],
      description: "Referência em disfunção sexual masculina e incontinência urinária"
    },
    {
      id: 4,
      name: "Dra. Ana Paula Oliveira",
      specialty: "Urologia Pediátrica e Feminina",
      credentials: ["CRM-RS 11223", "Especialização em Urologia Pediátrica", "Fellowship em Uroginecologia", "Membro da Society for Pediatric Urology"],
      description: "Especialista em problemas urológicos infantis e femininos"
    }
  ],
  
  ctaText: "Cuide da sua saúde urológica - prevenção e tratamento de qualidade",
  
  faq: [
    {
      question: "PSA alto significa câncer de próstata?",
      answer: "Não necessariamente. Pode estar elevado por infecção, HPB ou outras causas. Biópsia confirma."
    },
    {
      question: "Vasectomia causa impotência?",
      answer: "Não, apenas impede a passagem de espermatozoides. Não afeta ereção ou ejaculação."
    },
    {
      question: "Homens devem fazer check-up urológico quando?",
      answer: "A partir dos 40 anos, ou antes se houver histórico familiar de câncer de próstata."
    },
    {
      question: "Pedra no rim sempre precisa de cirurgia?",
      answer: "Não, pedras pequenas podem ser eliminadas naturalmente. Cirurgia é para pedras maiores ou sintomáticas."
    },
    {
      question: "Incontinência urinária tem tratamento?",
      answer: "Sim, com fisioterapia, medicamentos ou cirurgia, dependendo da causa."
    },
    {
      question: "Bexiga hiperativa é normal com a idade?",
      answer: "Não é normal, mas é comum. Tem tratamento eficaz."
    },
    {
      question: "Disfunção erétil é psicológica?",
      answer: "Pode ser, mas muitas vezes tem causas orgânicas (vasculares, hormonais). Avaliação urológica é importante."
    }
  ]
}
];