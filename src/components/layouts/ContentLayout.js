import React from 'react';
import AptibleLayout from '../layouts/AptibleLayout';
import { Grid } from '../grid/Grid';
import styles from './ContentLayout.module.css';

export default ({ title, children }) => (
  <AptibleLayout>
    <Grid>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>

      <div className={styles.sidebar}></div>

      <div className={styles.content}>
        {children}
      </div>
    </Grid>
  </AptibleLayout>
);
