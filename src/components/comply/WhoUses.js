import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './WhoUses.module.css';
import Card from '../shared/Card';

export default () => (
  <div className={styles.container} id="who-uses-comply">
    <Grid rows="3">
      <div className={styles.intro}>
        <h1>Who Uses Comply?</h1>
        <p className="XL">
          B2B SaaS companies that have recognized the importance of investing in
          security and compliance, especially to build trust with their own
          customers.
        </p>
        <p className="XL">
          After attempting to run a compliance program using the current "state
          of the art" (spreadsheets and disconnected point solutions), customers
          turn to Aptible Comply to get a unified view of compliance, to
          automate much of the manual work, and control compliance activity.
        </p>
      </div>

      <div className={styles.customersLeft}>
        <Card customer="ableHealth" />
      </div>

      <div className={styles.customersRight}>
        <Card customer="riffyn" />
      </div>
    </Grid>
  </div>
);
