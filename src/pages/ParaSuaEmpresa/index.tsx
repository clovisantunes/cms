import BannerPages from "../../components/BannerPages";
import banner from '../../assets/Group-7.webp'
import FilterItems from "../../components/FilterItems";
import Texts from "../../components/UI/Texts";
import BenefitsForCompanies from "./Components/BenefitsForCompanies";
import ServicosTreinamentos from "../../components/Trainings";
import HowToHire from "./Components/CTA";

export default function ParaSuaEmpresa() {
    return (
        <>
         <BannerPages
  backgroundImage={banner}
  title="Para sua Empresa"
  subtitle="Soluções completas em saúde ocupacional"
  description="Mais de 45 anos cuidando da saúde corporativa com excelência e tecnologia"
  specialties={['Medicina Ocupacional', 'Exames Laboratoriais', 'Perícias']}
  buttonText="Solicitar Proposta"
  buttonLink="/contato"
  style="style2"
/>
                 
            <Texts
                title="Tudo o que sua empresa precisa"
                subtitle="Conheça nossas soluções em saúde ocupacional."
            />
            
            <FilterItems
                subtitle="Confira Nossos"
                title="Serviços"
                text="O Centro Médico Sapiranga sempre atendo ás inovações tecnológicas e à legislação, oferece programas relacionados
                 à segurança e medicina do trabalho visando ao cumprimento das Normas Regulamentadoras do Ministério do Trabalho, do INSS e à adequação ao eSocial."
                items={[
                    {
                        id: 1,
                        title: "Assistência Técnica Pericial",
                        description: "Perícias técnicas especializadas para avaliação de condições de trabalho e saúde ocupacional",
                        tag: "Junta Médica e Perícia Médica",
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
                    {
                        id: 13,
                        title: "Gestão de e-Social",
                        description: "Serviço completo de gestão e adequação ao sistema e-Social do governo federal",
                        tag: "DOCUMENTOS TRABALHISTAS",
                }
                ]}
                buttonText="Ver todos os serviços"
                showButton={true}
            />
              <BenefitsForCompanies />
            <ServicosTreinamentos
            />
              <HowToHire />
        </>
    )
}