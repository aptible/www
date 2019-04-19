import React from 'react';
import styles from './Logos.module.css';
import { Grid, Row } from '../grid/Grid';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import vergesenseLogo from '../../images/customers/logos/vergesense.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.png';
import cityBlockLogo from '../../images/customers/logos/cityblock.png';
import simpleCitizenLogo from '../../images/customers/logos/simplecitizen.svg';

export default () => (
  <Grid>
    <Row>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <img src={healthifyLogo} alt="Healthify logo" />
        </div>
        <div className={styles.logo}>
          <img src={vergesenseLogo} alt="Vergesense logo" />
        </div>
        <div className={styles.logo}>
          <img src={mdsaveLogo} alt="MDSave logo" width="100" style={{ marginTop: '-10px' }} />
        </div>
        <div className={styles.logo}>
          <img src={cityBlockLogo} alt="CityBlock logo" width="155" />
        </div>
        <div className={styles.logo}>
          <img src={simpleCitizenLogo} alt="SimpleCitizen logo" />
        </div>
      </div>
    </Row>
  </Grid>
);
