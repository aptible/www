import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Vision.module.css';

export default () => (
  <div className={styles.container} id="vision">
    <Grid>
      <div className={styles.intro}>
        <h1>Our Mission &amp; Strategy</h1>
        <p className="XL">
          Aptible helps developers do their best work by empowering them to use any cloud infrastructure securely.
        </p>
        <p className="XL">
          We intend to deliver the best way for developers to provision, monitor, and test any resource in any cloud environment to ensure their infrastructure always meets rigorous security and compliance requirements.
        </p>
      </div>
    </Grid>
  </div>
);


