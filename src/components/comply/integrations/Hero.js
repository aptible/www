import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Hero.module.css';

export default ({ title, heading }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>{title}</h5>
        <h1 className="hero">{heading}</h1>
      </div>
    </Grid>
  </div>
);
