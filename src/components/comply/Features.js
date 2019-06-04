import React from 'react';
import { Grid, Row } from '../grid/Grid';
import styles from './Features.module.css';

export default () => (
  <div className={styles.container} id="features">
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h4>Features</h4>
          <h1>
            Software and Content.
            <br />it's not just Jira
          </h1>
          <p className="L">
            Without having to know you need them. We give you the tools and human
            support to make compliance accessible, and actionable.
          </p>
        </div>
      </Grid>
    </div>

    <Grid>
      <Row>
        <div className={styles.placeholder} />
      </Row>
    </Grid>
  </div>
);
