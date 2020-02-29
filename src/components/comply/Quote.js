import React from 'react';
import atriumLogo from '../../images/customers/logos/atrium.png';
import { Grid } from '../grid/Grid';
import styles from './Quote.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <div className="h3">
          “We needed a system that made it easy to operate a Security Management
          program, that tracked our efforts and helped us share our position
          with customers&hellip;with Aptible we’ve done that.”
        </div>
        <div className={styles.byline}>
          <img src={atriumLogo} alt="" />
          Justin Kan, Co-founder & CEO
        </div>
      </div>
    </Grid>
  </div>
);
