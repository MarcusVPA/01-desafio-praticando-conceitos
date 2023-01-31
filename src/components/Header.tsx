import styles from './Header.module.css';
import logoTodo from '../assets/logo-todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logoImage} src={logoTodo} alt="Logo Todo" />
        </header>
    );
}