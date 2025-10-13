import GridSection from "../../components/GridSection";
import banner from '../../assets/Group 10.png'; // ou use uma imagem específica para odontologia
import { 
    FaTooth, 
    FaSmile, 
    FaSnowflake, 
    FaTeeth, 
    FaTeethOpen, 
    FaBaby,
    FaUserInjured
} from 'react-icons/fa';

type GridItem = {
    id: number;
    nome: string;
    icone: React.ReactNode;
    descricao: string;
    tag: string;
};

export default function Odontologia() {
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

    const stats = [
        { number: "12", label: "Especialidades" },
        { number: "Tecnologia", label: "Avançada" },
        { number: "✓", label: "Qualificados" }
    ];

    return (
        <GridSection
            bannerImage={banner}
            pageTitle="Odontologia"
            pageSubtitle="Cuidado completo para sua saúde bucal com tecnologia e conforto"
            sectionTitle="Excelência em Odontologia"
            sectionDescription="O Centro Médico Sapiranga conta com uma equipe de profissionais especializados em várias áreas da Odontologia, equipamentos modernos e ambiente confortável para proporcionar tratamentos com tranquilidade, rapidez e eficiência."
            items={especialidadesOdontologicas}
            stats={stats}
            ctaTitle="Quer fazer uma avaliação odontológica?"
            ctaDescription="Agende sua consulta para um diagnóstico completo e plano de tratamento personalizado"
            primaryButtonText="Agendar Avaliação"
            secondaryButtonText="(51) 3500-0714"
        />
    );
}