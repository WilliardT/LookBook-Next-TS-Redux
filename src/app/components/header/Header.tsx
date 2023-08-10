import React from 'react';
import styles from './Header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.headerText}>LookBook</h1>
            <h3 className={styles.headerSubText}>Поиск книг</h3>
        </header>
    );
};

export default Header;
