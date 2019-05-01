import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HowItWorks.module.css';

const BODY_TEXT = <p>
  If you've used Docker to build and host your own images, simply point
  Deploy at an existing Docker image to deploy containers on Deploy.
  Alternatively, let Deploy build Docker images for you: prepare a
  Dockerfile, then git push your app source code to Deploy to deploy it.
        </p>

export default () => (
  <div className={styles.container}>
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
        <p className="XL">
          Step-by-step directions tailored to you, so you can go from zero to audit-ready.
      </p>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <h3>Deploy Your App</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <h3>Provision a Database</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <h3>Configure an Environment</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <h3>Establish Encrypted Endpoints</h3>
          {BODY_TEXT}
        </div>
      </div>

      <div className={styles.five}>
        <div className={styles.step}>
          <h3 className={styles.number}>05</h3>
          <h3>Access Logs</h3>
          {BODY_TEXT}
        </div>
      </div>
    </Grid>
  </div>
);
