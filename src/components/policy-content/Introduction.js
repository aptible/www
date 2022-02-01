import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Introduction.module.css';
import Subnav from './Subnav';

export default ({ pages }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.header}>
        <h1>Open Source Policy Content</h1>
      </div>

      <div className={styles.content}>
        <p className="XL">
          Free and open-source policy content. Use the menu on the right to
          view the policies and controls,
          or <a href="https://github.com/aptible/policy-content">fork the repo</a> and
          edit to make them your own.
        </p>
      </div>

      <div className={styles.sidebar}>
        <Subnav pages={pages} />
      </div>
    </Grid>
  </div>
);
