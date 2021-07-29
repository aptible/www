import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Introduction.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1>Resource Library</h1>
        <p className="XL">
          Learn about compliance best practices and how Aptible helps you follow
          them.
        </p>
      </div>
    </Grid>
  </div>
);
