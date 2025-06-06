import styles from './styles.module.scss';;

interface TextsProps {
    title: string;
    subtitle: string;
}

export default function Texts({ title, subtitle }: TextsProps) {
    return (
        <div className={styles.ourStructureText}>
            <div className={styles.ourStructureTextContainer}>
                <h2>
                    {title}
                </h2>
                <h3>
                    {subtitle}
                </h3>
            </div>
        </div>
    )
}