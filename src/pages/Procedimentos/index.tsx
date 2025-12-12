import GridSection from "../../components/GridSection";
import banner from '../../assets/Group 10.png';
import { 
    FaProcedures, 
    FaUserMd, 
    FaCar, 
    FaUserInjured, 
    FaFemale, 
    FaMagic,
    FaEye,
    FaTint,
} from 'react-icons/fa';

type GridItem = {
    id: number;
    nome: string;
    icone: React.ReactNode;
    descricao: string;
    tag: string;
};

export default function Procedimentos() {
    const procedimentos: GridItem[] = [
        {
            id: 1,
            nome: "Cirurgia Geral",
            icone: <FaProcedures />,
            descricao: "Procedimentos cirúrgicos abdominais e de pequeno a médio porte com segurança e precisão",
            tag: "CIRÚRGICO"
        },
        {
            id: 2,
            nome: "Cirurgia Plástica",
            icone: <FaUserMd />,
            descricao: "Procedimentos estéticos e reconstrutivos realizados por equipe especializada",
            tag: "ESTÉTICO"
        },
        {
            id: 3,
            nome: "Procedimentos Otorrinolaringológicos",
            icone: <FaCar />,
            descricao: "Cirurgias e tratamentos para ouvido, nariz e garganta com tecnologia avançada",
            tag: "ESPECIALIZADO"
        },
        {
            id: 4,
            nome: "Procedimentos Dermatológicos",
            icone: <FaUserInjured />,
            descricao: "Tratamentos para pele, cabelos e unhas com técnicas modernas e eficazes",
            tag: "CLÍNICO"
        },
        {
            id: 5,
            nome: "Procedimentos Ginecológicos",
            icone: <FaFemale />,
            descricao: "Cirurgias e tratamentos especializados para a saúde da mulher",
            tag: "ESPECIALIZADO"
        },
        {
            id: 6,
            nome: "Medicina Estética",
            icone: <FaMagic />,
            descricao: "Procedimentos estéticos minimamente invasivos para rejuvenescimento e harmonização",
            tag: "ESTÉTICO"
        },
        {
            id: 7,
            nome: "Procedimentos Oftalmológicos",
            icone: <FaEye />,
            descricao: "Cirurgias e tratamentos oculares com equipamentos de última geração",
            tag: "ESPECIALIZADO"
        },
        {
            id: 8,
            nome: "Procedimentos Urológicos",
            icone: <FaTint />,
            descricao: "Diagnóstico e tratamento de doenças do trato urinário e sistema reprodutor masculino",
            tag: "ESPECIALIZADO"
        }
    ];


    return (
        <GridSection
            bannerImage={banner}
            pageTitle="Nossos Procedimentos"
            pageSubtitle="Cirurgias e tratamentos especializados com segurança e excelência"
            sectionTitle="Procedimentos Médicos Especializados"
            sectionDescription="Conheça nossa gama completa de procedimentos cirúrgicos e tratamentos realizados por equipe qualificada em ambiente seguro e tecnológico."
            items={procedimentos}
            bannerStyles="style2"
            titleItem=""
            ctaTitle="Tem dúvidas sobre algum procedimento?"
            ctaDescription="Nossa equipe pode esclarecer todas as suas dúvidas sobre indicações, preparo e recuperação"
            primaryButtonText="Tirar Dúvidas"
            secondaryButtonText="(51) 3500-0714"
        />
    );
}