import React from 'react';
import { Grid, Row } from '../grid/Grid';
import styles from './Features.module.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h4>Features</h4>
          <h1>The Security<br /> Question, Solved</h1>
          <p className="L">
            Robust security controls + Platform flexibility =<br /> Progress + Compliance.
            Deploy audit-ready apps and databases and all supporting infrastructure.
        </p>
        </div>
      </Grid>
    </div>

    <Grid>
      <Row>
        <div className={styles.placeholder}></div>
      </Row>
    </Grid>
  </div>
);
