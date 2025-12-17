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
      nome: "Clínica Geral Odontológica",
      icone: <FaUserMd />,
      descricao: "Atendimento odontológico completo para diagnóstico, prevenção e tratamento geral da saúde bucal",
      categoria: "preventiva",
      duracao: "Consulta de 40-60 min",
      indicacao: "Check-up e manutenção da saúde bucal"
    },
    {
      id: 2,
      nome: "Estética do Sorriso",
      icone: <FaSmile />,
      descricao: "Procedimentos estéticos para harmonização e embelezamento do sorriso com resultados naturais",
      categoria: "estetica",
      duracao: "Varia conforme procedimento",
      indicacao: "Melhoria estética do sorriso"
    },
    {
      id: 3,
      nome: "Clareamento Dental",
      icone: <FaSnowflake />,
      descricao: "Clareamento dental seguro e eficaz para um sorriso mais branco e radiante",
      categoria: "estetica",
      duracao: "1-2 sessões",
      indicacao: "Dentes manchados ou amarelados"
    },
    {
      id: 4,
      nome: "Tratamento Endodôntico",
      icone: <FaHeartbeat />,
      descricao: "Tratamento de canal especializado para salvar dentes comprometidos com máxima preservação",
      categoria: "restauradora",
      duracao: "1-2 sessões",
      indicacao: "Dores dentárias e infecções"
    },
    {
      id: 5,
      nome: "Ortodontia e Ortopedia Facial",
      icone: <FaTeethOpen />,
      descricao: "Correção de posicionamento dentário e facial com aparelhos fixos e móveis modernos",
      categoria: "ortodontia",
      duracao: "12-24 meses",
      indicacao: "Má oclusão e desalinhamento"
    },
    {
      id: 6,
      nome: "Restaurações Estéticas",
      icone: <FaFillDrip />,
      descricao: "Restaurações estéticas em resina e porcelana para recuperar dentes danificados",
      categoria: "restauradora",
      duracao: "30-60 minutos",
      indicacao: "Cáries e fraturas dentárias"
    },
    {
      id: 7,
      nome: "Odontopediatria",
      icone: <FaBaby />,
      descricao: "Odontopediatria especializada para cuidar da saúde bucal das crianças com carinho",
      categoria: "preventiva",
      duracao: "Consulta de 30-40 min",
      indicacao: "Cuidados odontológicos infantis"
    },
    {
      id: 8,
      nome: "Periodontia",
      icone: <FaTeeth />,
      descricao: "Prevenção e tratamento de doenças gengivais como gengivite e periodontite",
      categoria: "preventiva",
      duracao: "Varia conforme tratamento",
      indicacao: "Sangramento gengival e mobilidade dentária"
    },
    {
      id: 9,
      nome: "Bruxismo e DTM",
      icone: <FaTeethOpen />,
      descricao: "Diagnóstico e tratamento do bruxismo e disfunções da articulação temporomandibular",
      categoria: "restauradora",
      duracao: "Várias sessões",
      indicacao: "Ranger de dentes e dores faciais"
    },
    {
      id: 10,
      nome: "Cirurgias Odontológicas",
      icone: <FaUserInjured />,
      descricao: "Cirurgias bucais incluindo extrações, remoção de cistos e procedimentos complexos",
      categoria: "cirurgia",
      duracao: "Varia conforme complexidade",
      indicacao: "Extrações e cirurgias bucais"
    },
    {
      id: 11,
      nome: "Próteses Dentárias",
      icone: <FaCrown />,
      descricao: "Confecção de próteses fixas e móveis personalizadas para reabilitação bucal",
      categoria: "restauradora",
      duracao: "2-4 sessões",
      indicacao: "Perda parcial ou total de dentes"
    },
    {
      id: 12,
      nome: "Implantes Dentários",
      icone: <FaTooth />,
      descricao: "Implantes de titânio para substituição de dentes perdidos com segurança e durabilidade",
      categoria: "cirurgia",
      duracao: "Tratamento em etapas",
      indicacao: "Substituição de dentes perdidos"
    },
    {
      id: 13,
      nome: "Lentes de Contato Dental",
      icone: <FaSmile />,
      descricao: "Lentes ultrafinas de porcelana para correção estética com mínimo desgaste dental",
      categoria: "estetica",
      duracao: "2-3 sessões",
      indicacao: "Correção de forma, cor e tamanho dos dentes"
    },
    {
      id: 14,
      nome: "Harmonização Orofacial",
      icone: <FaLaugh />,
      descricao: "Procedimentos estéticos faciais complementares ao tratamento odontológico",
      categoria: "estetica",
      duracao: "15-30 minutos",
      indicacao: "Harmonização do sorriso e feições faciais"
    },
    {
      id: 15,
      nome: "Odontologia do Sono",
      icone: <FaTeeth />,
      descricao: "Diagnóstico e tratamento de distúrbios do sono relacionados à saúde bucal",
      categoria: "preventiva",
      duracao: "Avaliação completa",
      indicacao: "Apneia do sono e ronco"
    },
    {
      id: 16,
      nome: "Odontologia Hospitalar",
      icone: <FaCertificate />,
      descricao: "Atendimento odontológico especializado para pacientes hospitalizados",
      categoria: "preventiva",
      duracao: "Varia conforme necessidade",
      indicacao: "Pacientes com condições sistêmicas especiais"
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