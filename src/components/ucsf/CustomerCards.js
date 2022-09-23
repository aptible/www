import React from 'react';
import styles from './CustomerCards.module.css';
import { Grid } from '../grid/Grid';
import Card from '../shared/Card';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.left}>
        <Card customer="hims_hers" />
      </div>
      <div className={styles.right}>
        <Card customer="rightwayHealthcare" />
      </div>
    </Grid>
  </div>
);
