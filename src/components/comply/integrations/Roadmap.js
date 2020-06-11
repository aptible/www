import React from 'react';
import { Grid } from '../../grid/Grid';
import ArrowButton from '../../buttons/ArrowButton';
import styles from './Roadmap.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h2>Track our integration roadmap</h2>
        <p>
          We’re continuously adding new integrations to our library. Stay
          up-to-date and suggest your own integrations on Comply’s Integration
          Roadmap.
        </p>
        <ArrowButton to="/TODO" text="See Comply’s Integration Roadmap" />
      </div>
    </Grid>
  </div>
);
