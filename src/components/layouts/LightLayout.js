import React from 'react';
import logoImage from '../../images/logos/aptible-logo-dark.svg';
import Footer from '../footer/Footer';
import CookieConsent from '../shared/CookieConsent';
import Analytics from '../shared/Analytics';
import styles from './LightLayout.module.css';

const LightLayout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.header}>
        <img src={logoImage} className={styles.logo} />
      </div>
    </div>
    {children}
    <CookieConsent />

    <div className={styles.footer}>
      <Footer />
    </div>
    <Analytics />
  </div>
);

export default LightLayout;
