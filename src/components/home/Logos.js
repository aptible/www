import React from 'react';
import cn from 'classnames';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import vergesenseLogo from '../../images/customers/logos/vergesense.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import cityBlockLogo from '../../images/customers/logos/cityblock.svg';
import simpleCitizenLogo from '../../images/customers/logos/simple-citizen.svg';
import Container from '../container/Container';
import styles from './Logos.module.css';

const Logos = () => (
  <Container className={styles.container}>
    <h3>Companies that trust Aptible</h3>

    <div className={styles.logos}>
      <div className={cn(styles.logo, styles.healthifyLogo)}>
        <img src={healthifyLogo} alt="Healthify logo" />
      </div>
      <div className={styles.logo}>
        <img src={vergesenseLogo} alt="Vergesense logo" />
      </div>
      <div className={styles.logo}>
        <img src={mdsaveLogo} alt="MDSave logo" />
      </div>
      <div className={styles.logo}>
        <img src={cityBlockLogo} alt="Cityblock logo" />
      </div>
      <div className={cn(styles.logo, styles.simpleCitizenLogo)}>
        <img src={simpleCitizenLogo} alt="Simple Citizen logo" />
      </div>
    </div>
  </Container>
);

export default Logos;
