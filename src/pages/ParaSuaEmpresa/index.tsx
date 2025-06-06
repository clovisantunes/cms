import BannerPages from "../../components/BannerPages";
import banner from '../../assets/Group 7.png'
import FilterItems from "../../components/FilterItems";
import Texts from "../../components/UI/Texts";


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

            />
        </>
    )
}