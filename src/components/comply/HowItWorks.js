import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HowItWorks.module.css';

const BODY_TEXT = (
  <p>
    Short description that talks about this section and provides a little more
    detail. Should be pretty high level I think.
  </p>
);

export default () => (
  <div className={styles.container}>
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
        <p className="XL">
          Step-by-step directions tailored to you, so you can go from zero to
          audit-ready.
        </p>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <h3>Learn</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <h3>Design</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <h3>Operate</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <h3>Audit</h3>
          {BODY_TEXT}
        </div>
      </div>
    </Grid>
  </div>
);
