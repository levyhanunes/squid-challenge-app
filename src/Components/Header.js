import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Squid App - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/dashboard">
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;
