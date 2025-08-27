import styles from './styles.module.scss';
import genericBG from '../../assets/generic.png';
import genericBG2 from '../../assets/generic2.png';
import genericBG3 from '../../assets/Group 8.png';
import cartaoImg from '../../assets/card-apf 5.png';
import { FaCheckCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

interface GenericProps {
    backgroundType?: '1' | '2' | '3';
    variant?: 'default' | 'cartao' | 'servicos1' | 'servicos2';
}

export default function Generic({ backgroundType = '1', variant = 'default' }: GenericProps) {
        backgroundType === '2' ? genericBG2 :
            backgroundType === '3' ? genericBG3 :
                genericBG;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    if (variant === 'cartao') {
        return (
            <motion.div
                className={styles.cartaoContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <motion.h2 className={styles.cartaoTitle} variants={itemVariants}>
                    Cartão APF
                </motion.h2>
                <motion.div className={styles.cartaoContent} variants={itemVariants}>
                    <motion.img 
                        src={cartaoImg} 
                        alt="Cartão APF" 
                        className={styles.cartaoImage}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className={styles.cartaoText}>
                        <motion.h3 variants={itemVariants}>Conheça as vantagens do Cartão APF</motion.h3>
                        <motion.p variants={itemVariants}>Atendimento Particular Facilitado</motion.p>
                        <motion.p variants={itemVariants}>Descontos em exames, procedimentos e consultas.</motion.p>
                        <motion.div variants={itemVariants}>
                            <Button
                                children="Peça já o seu"
                                variant='secondary'
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    if (variant === 'servicos1') {
        return (
            <motion.div
                className={styles.servicosContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <motion.div className={styles.servicosContent} variants={itemVariants}>
                    <div className={styles.rightColumn}>
                        <motion.div className={styles.servicoGrupo} variants={containerVariants}>
                            <motion.p variants={itemVariants}><MdKeyboardArrowRight /> NR10 - Treinamento de segurança em instalações e serviços elétricos</motion.p>
                            <motion.p variants={itemVariants}><MdKeyboardArrowRight /> NR06 - EPI - Treinamento do uso de equipamentos de proteção</motion.p>
                            <motion.p variants={itemVariants}><MdKeyboardArrowRight /> NR11 - Treinamento para operador de empilhadeira</motion.p>
                            <motion.p variants={itemVariants}><MdKeyboardArrowRight /> NR23 - Brigada de Incêndio - Primeiros socorros</motion.p>
                            <motion.p variants={itemVariants}><MdKeyboardArrowRight /> CIPA – Curso cipeiros, SIPAT e mapa de riscos</motion.p>
                            <motion.p variants={itemVariants}><MdKeyboardArrowRight /> NR35 - Trabalho em altura</motion.p>
                        </motion.div>
                    </div>
                    <div className={styles.leftColumn}>
                        <motion.div className={styles.servicoBloco} variants={itemVariants}>
                            <motion.h3 variants={itemVariants}>Eficiência e Conformidade</motion.h3>
                            <motion.p variants={itemVariants}>Soluções completas para sua gestão em saúde ocupacional</motion.p>
                            <motion.div variants={itemVariants}>
                                <Button
                                    children="Solicite um Orçamento Aqui"
                                    variant='secondary'
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    if (variant === 'servicos2') {
        return (
            <motion.div
                className={styles.servicosContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <motion.div className={styles.servicosContent} variants={itemVariants}>
                    <div className={styles.rightColumn}>
                        <motion.div className={styles.servicoBloco} variants={itemVariants}>
                            <motion.h3 variants={itemVariants}>Soluções Integradas</motion.h3>
                            <motion.p variants={itemVariants}>Tudo que sua empresa precisa em um só lugar!</motion.p>
                            <motion.div variants={itemVariants}>
                                <Button
                                    children="Solicite um Orçamento Aqui"
                                    variant='secondary'
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className={styles.leftColumn}>
                        <motion.div className={styles.servicoGrupo2} variants={containerVariants}>
                            <motion.p variants={itemVariants}>Gestão do e-Social <FaCheckCircle /> </motion.p>
                            <motion.p variants={itemVariants}>Vacinas para Empresas <FaCheckCircle /></motion.p>
                            <motion.p variants={itemVariants}>Perícias Médicas / Juntas Médicas <FaCheckCircle /></motion.p>
                            <motion.p variants={itemVariants}>Palestras e Campanhas de Conscientização <FaCheckCircle /></motion.p>
                            <motion.p variants={itemVariants}>Emissão do PPP (Perfil Profissiográfico Previdenciário) <FaCheckCircle /></motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className={styles.genericContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        />
    );
}