import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Introduction.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1>Security Management Library</h1>
        <p className="XL">
          Access security management resources to learn best practices for
          growing, improving and communicating your security management program.
        </p>
      </div>
    </Grid>
  </div>
);
