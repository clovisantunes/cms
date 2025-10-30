import GridSection from "../../components/GridSection";
import banner from '../../assets/exames.webp';
import { 
    FaHeartbeat,
    FaAssistiveListeningSystems,
    FaProcedures,
    FaHeart,
    FaXRay,
    FaBrain,
    FaLungs,
    FaVial,
    FaStethoscope,
    FaChartLine,
    FaCamera,
    FaVirus,
} from 'react-icons/fa';

type GridItem = {
    id: number;
    nome: string;
    icone: React.ReactNode;
    descricao: string;
    tag: string;
};

export default function Exames() {
    const exames: GridItem[] = [
        {
            id: 1,
            nome: "Audiometria",
            icone: <FaAssistiveListeningSystems />,
            descricao: "Avaliação completa da capacidade auditiva e diagnóstico de perdas auditivas",
            tag: "DIAGNÓSTICO"
        },
        {
            id: 2,
            nome: "Colonoscopia",
            icone: <FaProcedures />,
            descricao: "Exame endoscópico para avaliação do intestino grosso e prevenção do câncer colorretal",
            tag: "ENDOSCÓPICO"
        },
        {
            id: 3,
            nome: "ECG (Eletrocardiograma)",
            icone: <FaHeartbeat />,
            descricao: "Registro da atividade elétrica do coração para detectar arritmias e outras cardiopatias",
            tag: "CARDIOLÓGICO"
        },
        {
            id: 4,
            nome: "Ecocardiograma",
            icone: <FaHeart />,
            descricao: "Ultrassom do coração para avaliar estrutura, função e fluxo sanguíneo cardíaco",
            tag: "CARDIOLÓGICO"
        },
        {
            id: 5,
            nome: "Ecografia",
            icone: <FaCamera />,
            descricao: "Exame de imagem por ultrassom para avaliação de órgãos internos e tecidos moles",
            tag: "IMAGEM"
        },
        {
            id: 6,
            nome: "EEG em Sono e Vigília",
            icone: <FaBrain />,
            descricao: "Registro da atividade cerebral para diagnóstico de distúrbios neurológicos e do sono",
            tag: "NEUROLÓGICO"
        },
        {
            id: 7,
            nome: "Endoscopia",
            icone: <FaProcedures />,
            descricao: "Exame do trato digestivo superior para diagnóstico de doenças esofágicas e gástricas",
            tag: "ENDOSCÓPICO"
        },
        {
            id: 8,
            nome: "Espirometria",
            icone: <FaLungs />,
            descricao: "Teste de função pulmonar para avaliar capacidade respiratória e diagnosticar doenças",
            tag: "RESPIRATÓRIO"
        },
        {
            id: 9,
            nome: "Holter",
            icone: <FaChartLine />,
            descricao: "Monitoramento contínuo da atividade cardíaca por 24 horas para detectar arritmias",
            tag: "CARDIOLÓGICO"
        },
        {
            id: 10,
            nome: "Exames Laboratoriais",
            icone: <FaVial />,
            descricao: "Análises clínicas completas: sangue, urina, bioquímica, hormonais e sorologias",
            tag: "LABORATORIAL"
        },
        {
            id: 11,
            nome: "Laringoscopia Indireta",
            icone: <FaStethoscope />,
            descricao: "Visualização da laringe e cordas vocais para diagnóstico de alterações laríngeas",
            tag: "OTORRINO"
        },
        {
            id: 12,
            nome: "Mapa 24h",
            icone: <FaChartLine />,
            descricao: "Monitoramento ambulatorial da pressão arterial por 24 horas para controle da hipertensão",
            tag: "CARDIOLÓGICO"
        },
        {
            id: 13,
            nome: "Raio-X Digital",
            icone: <FaXRay />,
            descricao: "Exame de imagem radiográfica digital para avaliação óssea e de estruturas internas",
            tag: "IMAGEM"
        },
        {
            id: 14,
            nome: "Testes Rápidos",
            icone: <FaVirus />,
            descricao: "Testes rápidos para COVID-19, Dengue, Influenza (H1N1) e Leptospirose",
            tag: "INFECTOLOGIA"
        }
    ];

    const stats = [
        { number: "14", label: "Tipos de Exames" },
        { number: "100%", label: "Digitais" },
        { number: "✓", label: "Laudos em 24h" }
    ];

    return (
        <GridSection
            bannerImage={banner}
            pageTitle="Nossos Exames"
            pageSubtitle="Diagnóstico preciso com tecnologia avançada e resultados rápidos"
            sectionTitle="Exames Complementares de Excelência"
            sectionDescription="Realizamos uma ampla gama de exames complementares com equipamentos modernos e profissionais especializados para um diagnóstico preciso e ágil."
            items={exames}
            stats={stats}
            ctaTitle="Precisa agendar um exame?"
            ctaDescription="Nossa equipe está pronta para ajudar no agendamento e tirar todas suas dúvidas"
            primaryButtonText="Agendar Exame"
            secondaryButtonText="(51) 3500-0714"
        />
    );
}