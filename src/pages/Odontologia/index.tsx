import OdontologiaGridSection from "../../components/OdontologiaGridSection";
import banner from '../../assets/equipamento-e-instrumentos-dentarios-no-consultorio-dentista-ferramentas-de-close-up.webp';
import { 
  FaSmile,
  FaSnowflake,
  FaTeethOpen,
  FaBaby,
  FaUserInjured,
  FaLaptopMedical,
  FaCertificate,
  FaHeartbeat,
  FaCrown,
  FaFillDrip,
  FaLaugh,
  FaTooth,
  FaTeeth,
  FaUserMd
} from 'react-icons/fa';
import type { JSX } from "react";

export default function Odontologia() {
  
  const tratamentos: Array<{ id: number; nome: string; icone: JSX.Element; descricao: string; categoria: "cirurgia" | "estetica" | "preventiva" | "restauradora" | "ortodontia"; duracao: string; indicacao: string }> = [
  {
    id: 1,
    nome: "Consulta odontológica inicial (CHECK-UP ODONTOLÓGICO)",
    icone: <FaUserMd />,
    descricao: "Anamnese, profilaxia, aplicação de flúor, plano de tratamento e solicitação de exames",
    categoria: "preventiva",
    duracao: "Consulta completa",
    indicacao: "Check-up e avaliação inicial"
  },
  {
    id: 2,
    nome: "Consulta odontológica de urgência",
    icone: <FaUserMd />,
    descricao: "Atendimento emergencial para casos de dor e problemas dentários agudos",
    categoria: "preventiva",
    duracao: "Atendimento de urgência",
    indicacao: "Emergências odontológicas"
  },
  {
    id: 3,
    nome: "Condicionamento em Odontologia",
    icone: <FaUserMd />,
    descricao: "Preparação e adaptação do paciente para tratamento odontológico",
    categoria: "preventiva",
    duracao: "Sessão individual",
    indicacao: "Pacientes com ansiedade odontológica"
  },
  {
    id: 4,
    nome: "Clareamento dentário (consultório + caseiro)",
    icone: <FaSnowflake />,
    descricao: "Clareamento dental combinado em consultório e tratamento caseiro para resultados otimizados",
    categoria: "estetica",
    duracao: "Sessões combinadas",
    indicacao: "Dentes manchados ou amarelados"
  },
  {
    id: 5,
    nome: "Tratamento endodôntico em dente decíduo",
    icone: <FaHeartbeat />,
    descricao: "Tratamento de canal especializado para dentes de leite, incluindo restauração",
    categoria: "restauradora",
    duracao: "1-2 sessões",
    indicacao: "Cáries profundas em dentes decíduos"
  },
  {
    id: 6,
    nome: "Restauração resina fotopolimerizável",
    icone: <FaFillDrip />,
    descricao: "Restaurações estéticas em resina para cáries e fraturas dentárias",
    categoria: "restauradora",
    duracao: "30-60 minutos",
    indicacao: "Cáries e fraturas dentárias"
  },
  {
    id: 7,
    nome: "Restauração em ionômero de vidro",
    icone: <FaFillDrip />,
    descricao: "Restaurações em ionômero de vidro para casos específicos",
    categoria: "restauradora",
    duracao: "30-60 minutos",
    indicacao: "Cáries em dentes decíduos e restaurações provisórias"
  },
  {
    id: 8,
    nome: "Raspagem supra/sub gengival",
    icone: <FaTeeth />,
    descricao: "Tratamento periodontal para remoção de tártaro e tratamento de gengivite/periodontite",
    categoria: "preventiva",
    duracao: "Sessão de 45-60 min",
    indicacao: "Sangramento gengival e acúmulo de tártaro"
  },
  {
    id: 9,
    nome: "Placa de bruxismo - placa miorelaxante",
    icone: <FaTeethOpen />,
    descricao: "Órtese miorrelaxante para tratamento do bruxismo e proteção dentária",
    categoria: "restauradora",
    duracao: "Confecção e ajustes",
    indicacao: "Ranger de dentes e dores faciais"
  },
  {
    id: 10,
    nome: "Exodontia de siso impactados",
    icone: <FaUserInjured />,
    descricao: "Remoção cirúrgica de dentes siso impactados ou inclusos",
    categoria: "cirurgia",
    duracao: "Procedimento cirúrgico",
    indicacao: "Siso impactado ou com indicação de remoção"
  },
  {
    id: 11,
    nome: "Exodontia simples",
    icone: <FaUserInjured />,
    descricao: "Remoção de dentes permanentes sem complicações",
    categoria: "cirurgia",
    duracao: "Procedimento rápido",
    indicacao: "Dentes comprometidos sem complicações"
  },
  {
    id: 12,
    nome: "Exodontia a retalho",
    icone: <FaUserInjured />,
    descricao: "Remoção de dentes com técnica de retalho para melhor acesso",
    categoria: "cirurgia",
    duracao: "Procedimento cirúrgico",
    indicacao: "Extrações complexas"
  },
  {
    id: 13,
    nome: "Faceta direta em resina fotopolimerizável",
    icone: <FaSmile />,
    descricao: "Facetas estéticas diretas em resina para correção de forma e cor",
    categoria: "estetica",
    duracao: "Sessão única",
    indicacao: "Correção estética de dentes anteriores"
  },
  {
    id: 14,
    nome: "Prótese parcial removível com grampos bilateral",
    icone: <FaCrown />,
    descricao: "Prótese removível para substituição de dentes perdidos",
    categoria: "restauradora",
    duracao: "2-4 sessões",
    indicacao: "Perda parcial de dentes"
  },
  {
    id: 15,
    nome: "Prótese total",
    icone: <FaCrown />,
    descricao: "Prótese completa para pacientes edêntulos",
    categoria: "restauradora",
    duracao: "Várias sessões",
    indicacao: "Perda total dos dentes"
  },
  {
    id: 16,
    nome: "Instalação aparelho ortodôntico fixo/móvel",
    icone: <FaTeethOpen />,
    descricao: "Colocação de aparelho ortodôntico para correção dentária",
    categoria: "ortodontia",
    duracao: "Instalação inicial",
    indicacao: "Má oclusão e desalinhamento"
  },
  {
    id: 17,
    nome: "Manutenção ortodôntica aparelho fixo/móvel",
    icone: <FaTeethOpen />,
    descricao: "Ajustes periódicos do aparelho ortodôntico",
    categoria: "ortodontia",
    duracao: "Sessão de manutenção",
    indicacao: "Controle do tratamento ortodôntico"
  }
];
  return (
    <OdontologiaGridSection
      bannerImage={banner}
      bannerStyles="style1"
      pageTitle="Odontologia"
      pageSubtitle="Sorrisos saudáveis e confiantes"
      sectionTitle="Nossos Tratamentos Odontológicos"
      sectionDescription="Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta e profissionais especializados para cuidar da sua saúde bucal em todas as fases da vida."
      items={tratamentos}
      ctaTitle="Cuide do seu sorriso hoje mesmo"
      ctaDescription="Agende sua avaliação odontológica com nossos especialistas e tenha um sorriso saudável e radiante"
      primaryButtonText="Agendar Consulta Odontológica"
      secondaryButtonText="(51) 3500-0714"
      features={[
        { icon: <FaTooth />, text: '16 Especialidades' },
        { icon: <FaLaptopMedical />, text: 'Tecnologia de Ponta' },
        { icon: <FaCertificate />, text: 'Profissionais Especializados' },
        { icon: <FaSmile />, text: 'Resultados Garantidos' }
      ]}
    />
  );
}