import React from 'react';
import styles from './Quote.module.css';
import { Grid } from '../grid/Grid';
import healthifyLogo from '../../images/customers/logos/healthify.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.quote}>
        <img src={healthifyLogo} alt="healthify" className={styles.logo} />
        <h2>
          <span className={styles.quoteStart}>&ldquo;</span>
          When we told them we used Aptible, he told us that he told us that he
          was very familiar with Aptible and didn't need the SOC 2 Report anymore.&rdquo;
        </h2>
        <div className={styles.author}>Firstname Lastname, CTO</div>
      </div>
      <div className={styles.image}>
        <div className={styles.placeholderImage} />
      </div>
    </Grid>
  </div>
);
