import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Introduction.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h2>Resources</h2>
        <p className="XL">
          We help hundreds of the most innovative companies to protect
          sensitive data when the stakes matters most.
        </p>
      </div>
    </Grid>
  </div>
);
