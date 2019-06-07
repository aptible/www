import React from 'react';
import styles from './Logos.module.css';
import { Grid, Row } from '../grid/Grid';
import atriumLogo from '../../images/customers/logos/atrium.png';
import cityBlockLogo from '../../images/customers/logos/cityblock.svg';
import fortmaticLogo from '../../images/customers/logos/fortmatic.svg';
import quadpayLogo from '../../images/customers/logos/quadpay.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';

export default () => (
  <Grid>
    <Row>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <img src={atriumLogo} alt="Atrium logo" />
        </div>
        <div className={styles.logo}>
          <img src={cityBlockLogo} alt="Cityblock logo" />
        </div>
        <div className={styles.logo}>
          <img src={fortmaticLogo} alt="Fortmatic logo" />
        </div>
        <div className={styles.logo}>
          <img src={quadpayLogo} alt="Quadpay logo" />
        </div>
        <div className={styles.logo}>
          <img src={pathaiLogo} alt="PathAI logo" />
        </div>
      </div>
    </Row>
  </Grid>
);
