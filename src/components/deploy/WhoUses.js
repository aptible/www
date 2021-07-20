import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './WhoUses.module.css';
import Card from '../shared/Card';

export default () => (
  <div className={styles.container} id="who-uses-deploy">
    <Grid rows="3">
      <div className={styles.intro}>
        <h1>Who uses Aptible?</h1>
        <p className="XL">
          Aptible is built for engineers who would rather focus on product
          innovation rather than building compliant cloud infrastructure.
          Engineers choose Aptible because it's the fastest and safest way to
          bring a new product to market.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaOne}`}>
        <h6>Teams that would rather not try to DIY on AWS.</h6>
      </div>

      <div className={`${styles.persona} ${styles.personaTwo}`}>
        <h6>Dev teams with no security expert.</h6>
      </div>

      <div className={`${styles.persona} ${styles.personaThree}`}>
        <h6>
          Teams that need to focus on development and still get compliant.
        </h6>
      </div>

      <div className={styles.customersLeft}>
        <Card customer="healthCatalyst" />
        <Card customer="projectBeacon" />
      </div>

      <div className={styles.customersRight}>
        <Card customer="healthify" />
        <Card customer="mdsave" />
      </div>
    </Grid>
  </div>
);
