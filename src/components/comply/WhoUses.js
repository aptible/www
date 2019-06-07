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
          Small companies, operating in the cloud, who need to prove their
          security and compliance, whose deals are held up by Vendor Security
          Assessments; and/or who must comply with regulations like HIPAA/GDPR
          to go to market.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaOne}`}>
        <h6>Cloud-native Companies</h6>
        <p className="L">
          Small companies operating in the cloud.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaTwo}`}>
        <h6>That collect customer data</h6>
        <p className="L">
          New regulations like GDPR make it a company's responsibility to
          protect nearly any personal data it collects.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaThree}`}>
        <h6>And want to go Beyond Compliance</h6>
        <p className="L">
          Showing customers you’re investing in security increases conversion
          rate and decreases your sales cycle, especially with the enterprise.
        </p>
      </div>

      <div className={styles.customersLeft}>
        <Card customer="fortmatic" />
        <Card customer="ableHealth" />
      </div>

      <div className={styles.customersRight}>
        <Card customer="atrium" />
        <Card customer="snaps" />
        <Card customer="pathAI" />
      </div>
    </Grid>
  </div>
);
