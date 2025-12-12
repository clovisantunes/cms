import GridSection from "../../components/GridSection";
import banner from '../../assets/Group-10.webp';
import {
    FaHeart,
    FaStethoscope,
    FaUserMd,
    FaBaby,
    FaBrain,
    FaTooth,
    FaEye,
    FaBone,
    FaLungs,
    FaUserInjured,
    FaProcedures,
    FaClinicMedical,
    FaHospital,
    FaShieldAlt,
    FaNotesMedical,
    FaAllergies,
    FaTint,
    FaFemale,
    FaWeight,
    FaHistory,
    FaCertificate,
    FaUsers
} from 'react-icons/fa';

type GridItem = {
    id: number;
    nome: string;
    icone: React.ReactNode;
    descricao: string;
    tag: string;
};

export default function Especialidades() {
    const especialidades: GridItem[] = [
        {
            id: 1,
            nome: "Cardiologia",
            icone: <FaHeart />,
            descricao: "Cuidados especializados para a saúde do coração e sistema cardiovascular",
            tag: "CLÍNICA"
        },
        {
            id: 2,
            nome: "Cirurgia Geral",
            icone: <FaProcedures />,
            descricao: "Procedimentos cirúrgicos abdominais e de pequeno a médio porte",
            tag: "CIRÚRGICA"
        },
        {
            id: 3,
            nome: "Cirurgia Plástica",
            icone: <FaUserMd />,
            descricao: "Procedimentos estéticos e reconstrutivos com técnicas modernas",
            tag: "CIRÚRGICA"
        },
        {
            id: 4,
            nome: "Cirurgia Vascular",
            icone: <FaClinicMedical />,
            descricao: "Tratamento de doenças arteriais, venosas e linfáticas",
            tag: "CIRÚRGICA"
        },
        {
            id: 5,
            nome: "Clínica Geral",
            icone: <FaStethoscope />,
            descricao: "Atendimento integral para diagnóstico e tratamento geral",
            tag: "CLÍNICA"
        },
        {
            id: 6,
            nome: "Clínica Geral Integrativa",
            icone: <FaHospital />,
            descricao: "Abordagem holística integrando medicina convencional e complementar",
            tag: "CLÍNICA"
        },
        {
            id: 7,
            nome: "Dermatologia",
            icone: <FaUserInjured />,
            descricao: "Cuidados com a pele, cabelos e unhas",
            tag: "CLÍNICA"
        },
        {
            id: 8,
            nome: "Endocrinologia",
            icone: <FaWeight />,
            descricao: "Tratamento de distúrbios hormonais e metabólicos",
            tag: "CLÍNICA"
        },
        {
            id: 9,
            nome: "Gastroenterologia",
            icone: <FaAllergies />,
            descricao: "Cuidados do sistema digestivo e doenças intestinais",
            tag: "CLÍNICA"
        },
        {
            id: 10,
            nome: "Ginecologia e Obstetrícia",
            icone: <FaFemale />,
            descricao: "Saúde da mulher, gestação e parto",
            tag: "CLÍNICA"
        },
        {
            id: 11,
            nome: "Medicina do Trabalho",
            icone: <FaShieldAlt />,
            descricao: "Saúde ocupacional e medicina laboral",
            tag: "OCUPACIONAL"
        },
        {
            id: 12,
            nome: "Neurologia",
            icone: <FaBrain />,
            descricao: "Diagnóstico e tratamento de doenças do sistema nervoso",
            tag: "CLÍNICA"
        },
        {
            id: 13,
            nome: "Nutrição",
            icone: <FaNotesMedical />,
            descricao: "Orientações nutricionais personalizadas",
            tag: "SAÚDE"
        },
        {
            id: 14,
            nome: "Odontologia",
            icone: <FaTooth />,
            descricao: "Cuidados com a saúde bucal e tratamentos dentários",
            tag: "ODONTOLÓGICA"
        },
        {
            id: 15,
            nome: "Oftalmologia",
            icone: <FaEye />,
            descricao: "Cuidados com a visão e doenças oculares",
            tag: "CLÍNICA"
        },
        {
            id: 16,
            nome: "Ortopedia e Traumatologia",
            icone: <FaBone />,
            descricao: "Tratamento de fraturas e doenças musculoesqueléticas",
            tag: "CIRÚRGICA"
        },
        {
            id: 17,
            nome: "Otorrinolaringologia",
            icone: <FaUserMd />,
            descricao: "Cuidados de ouvido, nariz e garganta",
            tag: "CLÍNICA"
        },
        {
            id: 18,
            nome: "Pediatria",
            icone: <FaBaby />,
            descricao: "Cuidados especializados para crianças e adolescentes",
            tag: "PEDIÁTRICA"
        },
        {
            id: 19,
            nome: "Pneumologia",
            icone: <FaLungs />,
            descricao: "Diagnóstico e tratamento de doenças respiratórias",
            tag: "CLÍNICA"
        },
        {
            id: 20,
            nome: "Cirurgião Proctologista",
            icone: <FaProcedures />,
            descricao: "Cirurgias ambulatoriais sob anestesia local",
            tag: "CIRÚRGICA"
        },
        {
            id: 21,
            nome: "Psicologia",
            icone: <FaBrain />,
            descricao: "Atendimento psicológico para adultos e crianças",
            tag: "SAÚDE MENTAL"
        },
        {
            id: 22,
            nome: "Psiquiatria",
            icone: <FaUserMd />,
            descricao: "Diagnóstico e tratamento de transtornos mentais",
            tag: "SAÚDE MENTAL"
        },
        {
            id: 23,
            nome: "Reumatologia",
            icone: <FaBone />,
            descricao: "Tratamento de doenças reumáticas e autoimunes",
            tag: "CLÍNICA"
        },
        {
            id: 24,
            nome: "Urologia",
            icone: <FaTint />,
            descricao: "Cuidados do trato urinário e sistema reprodutor masculino",
            tag: "CLÍNICA"
        }
    ];



    return (
        <GridSection
        titleItem="Especialidades Médicas"
        bannerStyles="style1"
            bannerImage={banner}
            subTitleItem="Conheça nossa equipe multidisciplinar e encontre o cuidado ideal para sua saúde"
            pageTitle="Nossas Especialidades"
            pageSubtitle="Cuidado integral em mais de 20 áreas médicas com profissionais qualificados"
            sectionTitle="Excelência em Cuidados Médicos"
            sectionDescription="Conheça nossas especialidades médicas e encontre o cuidado ideal para sua saúde. Profissionais qualificados e tecnologia avançada para seu bem-estar."
            items={especialidades}
            ctaTitle="Precisa de ajuda para escolher a especialidade?"
            ctaDescription="Nossa equipe de atendimento pode orientar você sobre o cuidado mais adequado"
            primaryButtonText="Falar com Atendimento"
            secondaryButtonText="(51) 3500-0714"
            features={[
                { icon: <FaHistory />, text: '45+ anos de experiência' },
                { icon: <FaUsers />, text: '30+ Profissionais' },
                { icon: <FaCertificate />, text: '100% Qualificados' }
            ]}
            
        />

    );
}