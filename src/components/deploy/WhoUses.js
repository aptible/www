import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './WhoUses.module.css';
import Card from '../shared/Card';

export default () => (
  <div className={styles.container} id="who-uses-deploy">
    <Grid rows="3">
      <div className={styles.intro}>
        <h1>Who Uses Deploy?</h1>
        <p className="XL">
          Small companies who need to focus on development goals, achieve
          regulatory compliance, get audit ready without the benefit of a
          security and compliance expert.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaOne}`}>
        <h6>Teams that would rather not try to DIY on AWS.</h6>
      </div>

      <div className={`${styles.persona} ${styles.personaTwo}`}>
        <h6>Small dev teams with no secirity expert.</h6>
      </div>

      <div className={`${styles.persona} ${styles.personaThree}`}>
        <h6>Teams that need to focus on development and still get compliant.</h6>
      </div>

      <div className={styles.customersLeft}>
        <Card customer="vergesense" />
        <Card customer="mdsave" />
      </div>

      <div className={styles.customersRight}>
        <Card customer="virta" />
        <Card customer="healthify" />
      </div>
    </Grid>
  </div>
);
