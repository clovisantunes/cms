import { type ReactNode, type MouseEventHandler } from 'react';
import styles from './styles.module.scss'; // Vamos criar este arquivo

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary'; // Adicione variantes se necessário
}

export default function Button({ 
    children, 
    onClick, 
    className = '', 
    type = 'button',
    variant = 'primary'
}: ButtonProps) {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`${styles.button} ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}