import OdontologiaGridSection from "../../components/OdontologiaGridSection";
import banner from '../../assets/equipamento-e-instrumentos-dentarios-no-consultorio-dentista-ferramentas-de-close-up.webp';
import { 
  FaSmile,
  FaSnowflake,
  FaTeethOpen,
  FaUserInjured,
  FaLaptopMedical,
  FaCertificate,
  FaHeartbeat,
  FaCrown,
  FaFillDrip,
  FaTooth,
  FaTeeth,
  FaUserMd,
  FaBaby,
  FaHospital,
  FaStethoscope
} from 'react-icons/fa';
import type { JSX } from "react";

export default function Odontologia() {
  
  const tratamentos: Array<{ id: number; nome: string; icone: JSX.Element; descricao: string; categoria: "cirurgia" | "estetica" | "preventiva" | "restauradora" | "ortodontia"; duracao: string; indicacao: string }> = [
    {
      id: 1,
      nome: "Clínica Geral Avançada",
      icone: <FaUserMd />,
      descricao: "Restaurações, próteses, clareamento, extrações e tratamentos para bruxismo e raspagem de tártaro com precisão técnica",
      categoria: "preventiva",
      duracao: "Consulta de 40-60 min",
      indicacao: "Manutenção preventiva e reabilitação bucal"
    },
    {
      id: 2,
      nome: "Odontologia Hospitalar",
      icone: <FaHospital />,
      descricao: "Atendimento especializado para pacientes que demandam cuidados especiais ou suporte em ambiente hospitalar",
      categoria: "preventiva",
      duracao: "Varia conforme necessidade",
      indicacao: "Pacientes com condições sistêmicas especiais"
    },
    {
      id: 3,
      nome: "Clareamento Dentário",
      icone: <FaSnowflake />,
      descricao: "Procedimentos clínicos para recuperação do brilho e tonalidade natural do esmalte dental",
      categoria: "estetica",
      duracao: "1-2 sessões",
      indicacao: "Dentes manchados ou amarelados"
    },
    {
      id: 4,
      nome: "Endodontia Especializada",
      icone: <FaHeartbeat />,
      descricao: "Tratamento de canal mecanizado com tecnologia avançada para salvar dentes e eliminar dores agudas",
      categoria: "restauradora",
      duracao: "1-2 sessões",
      indicacao: "Dores dentárias agudas e infecções internas"
    },
    {
      id: 5,
      nome: "Ortodontia e Ortopedia Funcional",
      icone: <FaTeethOpen />,
      descricao: "Correção do posicionamento dentário e estruturas ósseas com aparelhos fixos ou alinhadores modernos",
      categoria: "ortodontia",
      duracao: "12-24 meses",
      indicacao: "Má oclusão, desalinhamento e problemas funcionais"
    },
    {
      id: 6,
      nome: "Restaurações Estéticas e Próteses",
      icone: <FaFillDrip />,
      descricao: "Reabilitação da estrutura dentária e substituição de elementos ausentes para devolver eficiência mastigatória",
      categoria: "restauradora",
      duracao: "30-60 minutos a 2-4 sessões",
      indicacao: "Cáries, fraturas e perda de dentes"
    },
    {
      id: 7,
      nome: "Odontopediatria",
      icone: <FaBaby />,
      descricao: "Cuidado especializado para crianças, focando no desenvolvimento saudável da arcada dentária desde a infância",
      categoria: "preventiva",
      duracao: "Consulta de 30-40 min",
      indicacao: "Cuidados odontológicos infantis e prevenção"
    },
    {
      id: 8,
      nome: "Periodontia Preventiva",
      icone: <FaTeeth />,
      descricao: "Raspagem de tártaro e limpeza profilática para garantir saúde das gengivas e tecidos de suporte",
      categoria: "preventiva",
      duracao: "Sessão de 45-60 min",
      indicacao: "Sangramento gengival e acúmulo de tártaro"
    },
    {
      id: 9,
      nome: "Tratamento de Bruxismo",
      icone: <FaTeethOpen />,
      descricao: "Diagnóstico e acompanhamento do ranger ou apertar de dentes com proteção do esmalte e alívio muscular",
      categoria: "restauradora",
      duracao: "Várias sessões",
      indicacao: "Ranger de dentes, dores faciais e desgaste dental"
    },
    {
      id: 10,
      nome: "Extrações Dentárias",
      icone: <FaUserInjured />,
      descricao: "Procedimentos seguros para remoção de elementos dentários sem possibilidade de recuperação",
      categoria: "cirurgia",
      duracao: "Varia conforme complexidade",
      indicacao: "Dentes comprometidos e extrações necessárias"
    },
    {
      id: 11,
      nome: "Próteses Dentárias",
      icone: <FaCrown />,
      descricao: "Confecção de próteses fixas e móveis personalizadas para reabilitação funcional e estética",
      categoria: "restauradora",
      duracao: "2-4 sessões",
      indicacao: "Perda parcial ou total de dentes"
    },
    {
      id: 12,
      nome: "Exodontia de Siso",
      icone: <FaStethoscope />,
      descricao: "Remoção técnica de sisos inclusos e impactados com procedimentos seguros e especializados",
      categoria: "cirurgia",
      duracao: "Procedimento cirúrgico",
      indicacao: "Siso impactado, incluso ou com indicação de remoção"
    }
  ];

  return (
    <OdontologiaGridSection
      bannerImage={banner}
      bannerStyles="style1"
      pageTitle="Odontologia"
      pageSubtitle="Excelência e Tecnologia Integrada à Sua Saúde Bucal"
      sectionTitle="Nossos Tratamentos Odontológicos"
      sectionDescription="Oferecemos atendimento multidisciplinar focado na resolução técnica e alta performance clínica. Nossa equipe especializada garante diagnósticos precisos e tratamentos definitivos com tecnologia de ponta."
      items={tratamentos}
      ctaTitle="Cuide do seu sorriso hoje mesmo"
      ctaDescription="Agende sua avaliação odontológica com nossos especialistas e tenha um sorriso saudável, funcional e radiante"
      primaryButtonText="Agendar Consulta Odontológica"
      secondaryButtonText="(51) 3500-0714"
      features={[
        { icon: <FaTooth />, text: 'Especialistas Credenciados' },
        { icon: <FaLaptopMedical />, text: 'Tecnologia de Ponta' },
        { icon: <FaCertificate />, text: 'Formação Diversificada' },
        { icon: <FaSmile />, text: 'Resultados com Longevidade' }
      ]}
    />
  );
}