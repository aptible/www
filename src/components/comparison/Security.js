import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Content.module.css';

export default () => (
  <Grid rows="1">
    <div className={styles.container} id="security-compliance">
      <h2>
        Security
      </h2>

      <ul>
        <li>
          On Heroku, security is an add-on. Many security and compliance features (or even hard requirements, like a HIPAA BAA) are gated behind their Enterprise plans. On Aptible, security is table-stakes, with the same set of core security and compliance features available to every customer.
        </li>

        <li>
          Aptible's <a href="https://deploy-docs.aptible.com/docs/intro-compliance-dashboard">Security & Compliance Dashboard</a> provides visibility into all the security controls Aptible implements by default, as well as any controls that require customer action to maintain. These controls are mapped to HIPAA and HITRUST requirements.
        </li>

        <li>
          Aptible undergoes <a href="https://hitrustalliance.net/">HITRUST</a> audits every year. As a result, Aptible customers can inherit many of Aptible's controls to reduce the scope of their own HITRUST audit, saving time and money.
        </li>

        <li>
          Aptible offers advanced security features, like <a href="https://www.aptible.com/features/hids/">Host Intrusion Detection</a> and <a href="https://www.aptible.com/features/network-intrusion-detection/">Network Intrusion Detection</a> to provide additional layers of visible security.
        </li>
      </ul>
    </div>
  </Grid>
);
