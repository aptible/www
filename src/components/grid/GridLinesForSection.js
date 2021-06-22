import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './GridLinesForSection.module.css';
import styleVars from '../../styles/variables';

export default () => (
  <div className={styles.container}>
    <Grid classOverride={styles.gridLines}>
      {Array.from({ length: styleVars.customProperties['--grid-columns'] }).map(
        (_, i) => (
          <div key={i} className={styles.column} />
        ),
      )}
    </Grid>
  </div>
);
