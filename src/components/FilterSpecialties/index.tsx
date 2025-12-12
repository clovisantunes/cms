import FilterItems from "../../components/FilterItems";

export default function FilterSpecialties() {
    return (
        <>            
            <FilterItems
                subtitle="Mais de 20 Especialidades"
                title="Cuidado Médico Completo para Você"
                text="Oferecemos todas as especialidades médicas que você e sua família precisam. Consultas, exames e tratamentos especializados em um só lugar, com qualidade e atendimento humanizado."
                items={[
                    {
                        id: 1,
                        title: "Cardiologia",
                        description: "Cuide do seu coração com especialistas em prevenção e tratamento de doenças cardiovasculares.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 2,
                        title: "Ortopedia e Traumatologia",
                        description: "Diagnóstico e tratamento de lesões ósseas, articulares e musculares. Recuperação funcional completa.",
                        tag: "CIRÚRGICA",
                    },
                    {
                        id: 3,
                        title: "Clínica Geral",
                        description: "Atendimento clínico abrangente. Avaliação completa e encaminhamento adequado quando necessário.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 4,
                        title: "Pediatria",
                        description: "Cuidado especializado para crianças e adolescentes. Acompanhamento de crescimento e desenvolvimento.",
                        tag: "PEDIÁTRICA",
                    },
                    {
                        id: 5,
                        title: "Ginecologia e Obstetrícia",
                        description: "Saúde integral da mulher, exames preventivos e acompanhamento de gestação.",
                        tag: "MULHER",
                    },
                    {
                        id: 6,
                        title: "Psicologia",
                        description: "Atendimento terapêutico individual para saúde mental, autoconhecimento e bem-estar.",
                        tag: "MENTAL",
                    },
                    {
                        id: 7,
                        title: "Dermatologia",
                        description: "Tratamento de doenças da pele, unhas e cabelos, além de procedimentos dermatológicos.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 8,
                        title: "Oftalmologia",
                        description: "Consultas e exames para avaliação da visão e tratamento de doenças oculares.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 9,
                        title: "Neurologia",
                        description: "Avaliação e tratamento de doenças do sistema nervoso central e periférico.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 10,
                        title: "Gastroenterologia",
                        description: "Cuidados completos para o sistema digestivo. Exames e tratamentos especializados.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 11,
                        title: "Endocrinologia",
                        description: "Tratamento de diabetes, distúrbios hormonais e condições metabólicas.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 12,
                        title: "Otorrinolaringologia",
                        description: "Atendimento especializado para ouvido, nariz e garganta.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 13,
                        title: "Urologia",
                        description: "Saúde do trato urinário e sistema reprodutor masculino.",
                        tag: "HOMEM",
                    },
                    {
                        id: 14,
                        title: "Pneumologia",
                        description: "Diagnóstico e tratamento de doenças respiratórias como asma e bronquite.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 15,
                        title: "Psiquiatria",
                        description: "Acompanhamento e tratamento especializado de transtornos mentais.",
                        tag: "MENTAL",
                    },
                    {
                        id: 16,
                        title: "Reumatologia",
                        description: "Tratamento de doenças reumáticas e autoimunes que afetam articulações e músculos.",
                        tag: "CLÍNICA",
                    },
                    {
                        id: 17,
                        title: "Nutrição",
                        description: "Consultas nutricionais personalizadas para saúde, bem-estar e controle de peso.",
                        tag: "SAÚDE",
                    },
                    {
                        id: 18,
                        title: "Odontologia",
                        description: "Atendimento odontológico completo: prevenção, restaurações, estética e reabilitação.",
                        tag: "ODONTOLOGIA",
                    },
                    {
                        id: 19,
                        title: "Cirurgia Geral",
                        description: "Procedimentos cirúrgicos de pequeno e médio porte com equipe qualificada.",
                        tag: "CIRÚRGICA",
                    },
                    {
                        id: 20,
                        title: "Cirurgia Plástica",
                        description: "Cirurgia estética e reconstrutiva com avaliação especializada.",
                        tag: "CIRÚRGICA",
                    },
                    {
                        id: 21,
                        title: "Medicina do Trabalho",
                        description: "Exames ocupacionais e serviços especializados para empresas e colaboradores.",
                        tag: "OCUPACIONAL",
                    },
                    {
                        id: 22,
                        title: "Cirurgia Vascular",
                        description: "Diagnóstico e tratamento de doenças das veias e artérias.",
                        tag: "CIRÚRGICA",
                    },
                    {
                        id: 23,
                        title: "Mastologia",
                        description: "Prevenção, diagnóstico e tratamento das doenças da mama.",
                        tag: "MULHER",
                    },
                    {
                        id: 24,
                        title: "Proctologia Clínica",
                        description: "Tratamento de doenças do intestino grosso, reto e ânus.",
                        tag: "CLÍNICA",
                    },
                ]}
                buttonText="Agendar Consulta com Especialista"
                showButton={true}
            />
        </>
    )
}
