import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HidsHowItWorks.module.css';
import Button from '../buttons/Button';

export default () => (
  <div className={styles.container} id="how-it-works">
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <h3>Event Collection & Monitoring</h3>
          <p>
            Security events are collected using OSSEC, a leading open source
            intrusion detection system. The Aptible Security Team monitors
            these events.
          </p>
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <h3>Investigation & Response Process</h3>
          <p>
            The Aptible Security Team actively reviews each security event using
            our ISO 27001 certified security review process. The Security Team
            classifies each as either legitimate or indicative of potential attack.
          </p>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <h3>Aptible Security Team Resolution</h3>
          <p>
            The Aptible Security Team immediately resolves any underlying issues
            related to detected anomalous activity on your behalf and notifies
            you of the actions taken.
          </p>
        </div>
      </div>

      <div className={styles.sample}>
        <h1>Sample HIDS Compliance Report</h1>
        <p className="XL">
          Provide your customers and auditors with evidence that your host-based
          intrusion detection system is monitoring activity and potential threats
          are resolved.
        </p>

        <Button href="/assets/Enclave-Intrusion-Detection-Report_shared-us-west-1_2017-11-06.pdf">Download Sample Report</Button>
      </div>
    </Grid>
  </div>
);
