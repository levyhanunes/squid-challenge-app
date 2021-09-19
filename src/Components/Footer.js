import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as Squid} from '../Assets/logo.svg'

const Footer = () => {
  return <footer className={styles.footer}>
    
  <Squid />
  <p>Squid Challenge App</p>
  </footer>;
};

export default Footer;
