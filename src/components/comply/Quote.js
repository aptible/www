import React from 'react';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import { Grid } from '../grid/Grid';
import styles from './Quote.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <div className="h3">
          &ldquo;In past roles, I had to manually do what Comply does. It
          standardizes so much of the process of operating a security management
          program. My team stays on the same page and saves a lot of
          work.&rdquo;
        </div>
        <div className={styles.byline}>
          <img src={pathaiLogo} alt="" />
          Joe Adu, Director of Technology
        </div>
      </div>
    </Grid>
  </div>
);
