import GridSection from "../../components/GridSection";
import banner from '../../assets/Group-10.webp';
import {
    FaTooth,
    FaSmile,
    FaSnowflake,
    FaTeeth,
    FaTeethOpen,
    FaBaby,
    FaUserInjured,
    FaLaptopMedical,
    FaCertificate
} from 'react-icons/fa';

type GridItem = {
    id: number;
    nome: string;
    icone: React.ReactNode;
    descricao: string;
    tag: string;
};
import medicImage from '../../assets/sorrindo-alegre-feminino-gp-fazendo-anotacoes-eletronicas_151013-2668.avif'


export default function Odontologia() {

      const profissionaisOdontologia = [
    {
      id: 1,
      name: "Dr. João Silva",
      specialty: "Ortodontista",
      image: medicImage,
      crm: "12345/SP",
      description: "Especialista em ortodontia com 15 anos de experiência"
    },
    {
      id: 2,
      name: "Dra. Maria Santos",
      specialty: "Periodontista",
      image: medicImage,
      crm: "67890/SP",
      description: "Especialista em tratamento de gengiva e implantes"
    },
  ];

    
    const especialidadesOdontologicas: GridItem[] = [
        {
            id: 1,
            nome: "Clínica Geral Odontológica",
            icone: <FaTooth />,
            descricao: "Atendimento odontológico completo para diagnóstico, prevenção e tratamento geral da saúde bucal",
            tag: "CLÍNICO"
        },
        {
            id: 2,
            nome: "Estética do Sorriso",
            icone: <FaSmile />,
            descricao: "Procedimentos estéticos para harmonização e embelezamento do sorriso com resultados naturais",
            tag: "ESTÉTICO"
        },
        {
            id: 3,
            nome: "Clareamento Dental",
            icone: <FaSnowflake />,
            descricao: "Clareamento dental seguro e eficaz para um sorriso mais branco e radiante",
            tag: "ESTÉTICO"
        },
        {
            id: 4,
            nome: "Tratamento Endodôntico",
            icone: <FaTeeth />,
            descricao: "Tratamento de canal especializado para salvar dentes comprometidos com máxima preservação",
            tag: "ESPECIALIZADO"
        },
        {
            id: 5,
            nome: "Ortodontia e Ortopedia Facial",
            icone: <FaTeethOpen />,
            descricao: "Correção de posicionamento dentário e facial com aparelhos fixos e móveis modernos",
            tag: "ORTO"
        },
        {
            id: 6,
            nome: "Restaurações",
            icone: <FaTooth />,
            descricao: "Restaurações estéticas em resina e porcelana para recuperar dentes danificados",
            tag: "CLÍNICO"
        },
        {
            id: 7,
            nome: "Tratamentos Infantis",
            icone: <FaBaby />,
            descricao: "Odontopediatria especializada para cuidar da saúde bucal das crianças com carinho",
            tag: "INFANTIL"
        },
        {
            id: 8,
            nome: "Tratamento Gengival",
            icone: <FaTeeth />,
            descricao: "Prevenção e tratamento de doenças gengivais como gengivite e periodontite",
            tag: "PERIO"
        },
        {
            id: 9,
            nome: "Bruxismo e Disfunções",
            icone: <FaTeethOpen />,
            descricao: "Diagnóstico e tratamento do bruxismo e disfunções da articulação temporomandibular",
            tag: "ESPECIALIZADO"
        },
        {
            id: 10,
            nome: "Cirurgias Odontológicas",
            icone: <FaUserInjured />,
            descricao: "Cirurgias bucais incluindo extrações, remoção de cistos e procedimentos complexos",
            tag: "CIRÚRGICO"
        },
        {
            id: 11,
            nome: "Próteses Dentárias",
            icone: <FaTeeth />,
            descricao: "Confecção de próteses fixas e móveis personalizadas para reabilitação bucal",
            tag: "PRÓTESE"
        },
        {
            id: 12,
            nome: "Implantes Dentários",
            icone: <FaTooth />,
            descricao: "Implantes de titânio para substituição de dentes perdidos com segurança e durabilidade",
            tag: "IMPLANTE"
        }
    ];


    return (
        <GridSection
            bannerImage={banner}
            titleItem=""
            subTitleItem=" "
            bannerStyles= "style1"
            pageTitle="Odontologia"
            pageSubtitle="Cuidado completo para sua saúde bucal com tecnologia e conforto"
            sectionTitle="Excelência em Odontologia"
            sectionDescription="O Centro Médico Sapiranga conta com uma equipe de profissionais especializados em várias áreas da Odontologia, equipamentos modernos e ambiente confortável para proporcionar tratamentos com tranquilidade, rapidez e eficiência."
            items={especialidadesOdontologicas}
            features={
             [
                { icon: <FaTeeth  />, text: '12 Especialidades' },
                { icon: <FaLaptopMedical  />, text: 'Tecnologia Avançada' },
                { icon: <FaCertificate  />, text: ' Profissionais Qualificados' }
             ]
            }
            ctaTitle="Quer fazer uma avaliação odontológica?"
            ctaDescription="Agende sua consulta para um diagnóstico completo e plano de tratamento personalizado"
            primaryButtonText="Agendar Avaliação"
            secondaryButtonText="(51) 3500-0714"
             showProfessionalsSection={true}
      professionals={profissionaisOdontologia}
        />
    );
}