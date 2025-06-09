import styles from './styles.module.scss';
import genericBG from '../../assets/generic.png';
import genericBG2 from '../../assets/generic2.png';
import genericBG3 from '../../assets/Group 8.png';
import cartaoImg from '../../assets/card-apf 5.png';
import { FaCheckCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Button from '../UI/Button';

interface GenericProps {
    backgroundType?: '1' | '2' | '3';
    variant?: 'default' | 'cartao' | 'servicos1' | 'servicos2';
}

export default function Generic({ backgroundType = '1', variant = 'default' }: GenericProps) {
    const backgroundImage =
        backgroundType === '2' ? genericBG2 :
            backgroundType === '3' ? genericBG3 :
                genericBG;


    if (variant === 'cartao') {
        return (
            <div
                className={styles.cartaoContainer}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h2 className={styles.cartaoTitle}>Cartão APF</h2>
                <div className={styles.cartaoContent}>

                    <img src={cartaoImg} alt="Cartão APF" className={styles.cartaoImage} />
                    <div className={styles.cartaoText}>
                        <h3>Conheça as vantagens do Cartão APF</h3>
                        <p>Atendimento Particular Facilitado</p>
                        <p>Descontos em exames, procedimentos e consultas.</p>
                        <Button
                            children="Peça ja o seu"
                            variant='secondary'
                        />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'servicos1') {
        return (
            <div
                className={styles.servicosContainer}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className={styles.servicosContent}>


                    <div className={styles.rightColumn}>
                        <div className={styles.servicoGrupo}>
                            <p><MdKeyboardArrowRight /> NR10 - Treinamento de segurança em instalações e serviços elétricos</p>
                            <p><MdKeyboardArrowRight /> NR06 - EPI - Treinamento do uso de equipamentos de proteção</p>
                            <p><MdKeyboardArrowRight /> NR11 - Treinamento para operador de empilhadeira</p>
                            <p><MdKeyboardArrowRight /> NR23 - Brigada de Incêndio - Primeiros socorros</p>
                            <p><MdKeyboardArrowRight /> CIPA – Curso cipeiros, SIPAT e mapa de riscos</p>
                            <p><MdKeyboardArrowRight /> NR35 - Trabalho em altura</p>
                        </div>
                    </div>
                    <div className={styles.leftColumn}>
                        <div className={styles.servicoBloco}>
                            <h3>Eficiência e Conformidade</h3>
                            <p>Soluções completas para sua gestão em saúde ocupacional</p>
                            <Button
                                children="Solicite um Orçamento Aqui"
                                variant='secondary'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'servicos2') {
        return (
            <div
                className={styles.servicosContainer}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className={styles.servicosContent}>
                    <div className={styles.rightColumn}>
                        <div className={styles.servicoBloco}>
                            <h3>Soluções Integradas</h3>
                            <p>Tudo que sua empresa precisa em um só lugar!</p>
                            <Button
                                children="Solicite um Orçamento Aqui"
                                variant='secondary'
                            />
                        </div>
                    </div>
                    <div className={styles.leftColumn}>
                        <div className={styles.servicoGrupo2}>
                            <p>Gestão do e-Social <FaCheckCircle /> </p>
                            <p>Vacinas para Empresas <FaCheckCircle /></p>
                            <p>Perícias Médicas / Juntas Médicas <FaCheckCircle /></p>
                            <p>Palestras e Campanhas de Conscientização <FaCheckCircle /></p>
                            <p>Emissão do PPP (Perfil Profissiográfico Previdenciário) <FaCheckCircle /></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={styles.genericContainer}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    );
}
