import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './SupportHero.module.css';

export default () => (
  <div>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Deploy</h5>
        <h1 className="hero">Support Plans</h1>
      </div>
    </Grid>
  </div>
);
