import BannerPages from "../../components/BannerPages";
import banner from '../../assets/Group 7.png'
import FilterItems from "../../components/FilterItems";
import Texts from "../../components/UI/Texts";
import Generic from "../../components/Generic";

export default function ParaSuaEmpresa() {
    return (
        <>
            <BannerPages
                backgroundImage={banner}
                title="Para sua Empresa"
                subtitle="Soluções completas para cuidar da sua equipe e do seu negócio."
            />
            
            <Texts
                title="Tudo o que sua empresa precisa"
                subtitle="Conheça nossas soluções em saúde ocupacional."
            />
            
            <FilterItems
                subtitle="Confira Nossos"
                title="Serviços"
                text="Tudo o que sua empresa precisa para estar em dia com a legislação: laudos técnicos, programas de prevenção e suporte especializado."
                items={[
                    {
                        id: 1,
                        title: "Assistência Técnica Pericial",
                        description: "Perícias técnicas especializadas para avaliação de condições de trabalho e saúde ocupacional",
                        tag: "LAUDOS E PERÍCIAS",
                    },
                    {
                        id: 2,
                        title: "Laudo de Insalubridade e Periculosidade",
                        description: "Avaliação e emissão de laudos técnicos para caracterização de atividades insalubres e perigosas",
                        tag: "LAUDOS E PERÍCIAS",
                    },
                    {
                        id: 3,
                        title: "LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)",
                        description: "Documentação técnica obrigatória para avaliação das condições ambientais do local de trabalho",
                        tag: "DOCUMENTOS TRABALHISTAS",
                    },
                    {
                        id: 4,
                        title: "PGR (Programa de Gerenciamento de Riscos)",
                        description: "Programa completo para identificação, avaliação e controle de riscos ocupacionais",
                        tag: "SEGURANÇA DO TRABALHO",
                    },
                    {
                        id: 5,
                        title: "PCMSO (Programa de Controle Médico de Saúde Ocupacional)",
                        description: "Programa obrigatório para monitoramento da saúde dos trabalhadores conforme NR-7",
                        tag: "SEGURANÇA DO TRABALHO",
                    },
                    {
                        id: 6,
                        title: "PPRA (Programa de Prevenção de Riscos Ambientais)",
                        description: "Programa de prevenção de riscos ambientais conforme estabelecido pela NR-9",
                        tag: "SEGURANÇA DO TRABALHO",
                    },
                    {
                        id: 7,
                        title: "Exames Admissionais e Demissionais",
                        description: "Avaliações médicas obrigatórias para admissão, demissão e mudança de função",
                        tag: "EXAMES OCUPACIONAIS",
                    },
                    {
                        id: 8,
                        title: "Exames Periódicos",
                        description: "Acompanhamento contínuo da saúde dos colaboradores através de exames regulares",
                        tag: "EXAMES OCUPACIONAIS",
                    },
                    {
                        id: 9,
                        title: "Exames de Retorno ao Trabalho",
                        description: "Avaliação médica para colaboradores que retornam após afastamento superior a 30 dias",
                        tag: "EXAMES OCUPACIONAIS",
                    },
                    {
                        id: 10,
                        title: "Exames de Mudança de Função",
                        description: "Avaliação para colaboradores que mudam de atividade com exposição a diferentes riscos",
                        tag: "EXAMES OCUPACIONAIS",
                    },
                    {
                        id: 11,
                        title: "ASO (Atestado de Saúde Ocupacional)",
                        description: "Emissão de documentação obrigatória comprovando a aptidão do trabalhador",
                        tag: "DOCUMENTOS TRABALHISTAS",
                    },
                    {
                        id: 12,
                        title: "PPP (Perfil Profissiográfico Previdenciário)",
                        description: "Documentação técnica para fins previdenciários com histórico de exposição a riscos",
                        tag: "DOCUMENTOS TRABALHISTAS",
                    },
                ]}
                buttonText="Ver todos os serviços"
                showButton={true}
            />
            
            <Texts
                title="Cursos em Saúde Ocupacional"
                subtitle="Capacitação e Segurança para o seu Time"
            />
            
            <Generic
                backgroundType="2"
                variant="servicos1"
            />
            
            <Texts
                title="Demais Serviços"
                subtitle="Soluções completas em saúde ocupacional e segurança do trabalho"
            />
            
            <Generic
                backgroundType="1"
                variant="servicos2"
            />
        </>
    )
}