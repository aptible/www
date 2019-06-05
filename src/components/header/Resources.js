import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Resources.module.css';
import ResourcesLinks from './ResourcesLinks';

export default () => (
  <div className={styles.container}>
    <Grid>

      <div className={styles.links}>
        <ResourcesLinks />
      </div>
    </Grid>
  </div>
);
