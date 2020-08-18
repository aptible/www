import React from 'react';
import { Grid } from '../grid/Grid';
import Card from '../shared/Card';
import styles from './CustomerCards.module.css';

const CustomerCards = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.left}>
        <Card customer="vergesense" />
        <Card customer="snaps" />
      </div>

      <div className={styles.right}>
        <Card customer="fortmatic" />
      </div>
    </Grid>
  </div>
);

export default CustomerCards;
