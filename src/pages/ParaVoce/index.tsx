import BannerPages from "../../components/BannerPages";
import banner from '../../assets/para voce.png'
import Texts from "../../components/UI/Texts";

export default function ParaVoce() {
    return (
        <>
            <BannerPages 
            backgroundImage={banner}
            title='Para Você'
            subtitle="Sua saúde com mais facilidade, agilidade e atenção."

            />
            <Texts 
                title="Tudo o que você precisa para cuidar da sua saúde"
                subtitle="Especialidades dedicadas, tecnologia avançada e atendimento humanizado para cada fase da sua vida."
            
            />
        </>
    )
}