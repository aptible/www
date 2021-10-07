import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturePageFeatureList.module.css';

export default ({ children }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        {children}
      </div>
    </Grid>
  </div>
);
