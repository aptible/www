import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Introduction.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1>Training Library</h1>
        <p className="XL">
          Free and <a href="https://github.com/aptible/training">open-source</a> security and compliance training.
        </p>
      </div>
    </Grid>
  </div>
);
