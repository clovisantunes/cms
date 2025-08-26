import { type ReactNode, type MouseEventHandler } from 'react';
import styles from './styles.module.scss'; 

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary'; 
    icon?: ReactNode;
}

export default function Button({ 
    children, 
    onClick, 
    className = '', 
    type = 'button',
    variant = 'secondary',
    icon
}: ButtonProps) {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`${styles.button} ${styles[variant]} ${className}`}
        >
            {children}{icon}
        </button>
    );
}