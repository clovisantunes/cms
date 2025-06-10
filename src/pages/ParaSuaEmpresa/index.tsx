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
                items={
                    [
                        {
                            id: 1,
                            title: "Assistência Técnica Pericial",
                            priceInfo: "Consulte valores para perícias técnicas especializadas",
                            healthCardPrice: "Atendimento sob consulta",
                            tag: "LAUDOS E PERÍCIAS",
                        },
                        {
                            id: 2,
                            title: "Laudo de Insalubridade e Periculosidade",
                            priceInfo: "A partir de R$ 450,00 conforme complexidade",
                            healthCardPrice: "Valor promocional mediante convênio ou contrato",
                            tag: "LAUDOS E PERÍCIAS",
                        },
                        {
                            id: 3,
                            title: "LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)",
                            priceInfo: "R$ 600,00 para pagamento Cartões ou PIX",
                            healthCardPrice: "R$ 550,00 para empresas conveniadas",
                            tag: "DOCUMENTOS TRABALHISTAS",
                        },
                        {
                            id: 4,
                            title: "PGR (Programa de Gerenciamento de Riscos)",
                            priceInfo: "A partir de R$ 700,00 conforme o porte da empresa",
                            healthCardPrice: "Desconto exclusivo para clientes recorrentes",
                            tag: "SEGURANÇA DO TRABALHO",
                        },
                        {
                            id: 5,
                            title: "PCMSO (Programa de Controle Médico de Saúde Ocupacional)",
                            priceInfo: "R$ 500,00 para pequenas empresas",
                            healthCardPrice: "Pacotes especiais para empresas conveniadas",
                            tag: "SEGURANÇA DO TRABALHO",
                        },
                        {
                            id: 6,
                            title: "PPRA (Programa de Prevenção de Riscos Ambientais)",
                            priceInfo: "R$ 450,00 via Cartões ou PIX",
                            healthCardPrice: "R$ 400,00 para contratos anuais",
                            tag: "SEGURANÇA DO TRABALHO",
                        },
                    ]}
                buttonText="Tenho Interesse"
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