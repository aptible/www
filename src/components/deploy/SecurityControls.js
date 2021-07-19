import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './SecurityControls.module.css';
import awsLogo from '../../images/home/illustrations/aws-logo.png';
import LeadForm from '../shared/LeadForm';

export default () => (
  <div id="aptible-vs-aws">
    <Grid rows="3">
      <div className={styles.intro}>
        <h1>Secure, Audit-ready App Deployment in 16 Fewer Steps Than AWS</h1>
        <p className="XL">
          Aptible automates most of the steps to AWS deployment, so you can launch
          without roadblocks or delays.
        </p>
      </div>

      <div className={styles.callout}>
        <div className={styles.calloutStatic}>
          <img src={awsLogo} alt="Amazon web services" className={styles.aws} />
          <h5>
            It takes 19 steps to
            <br />
            deploy on AWS.
          </h5>
        </div>
      </div>

      <div className={styles.steps}>
        <ol>
          <li className={styles.aptible}>Develop your application</li>
          <li className={styles.aptible}>
            Implement app-level security controls
          </li>
          <li>Select an operating system</li>
          <li>Harden the operating system</li>
          <li>Select and implement backend IAM roles</li>
          <li>Define network topology, e.g. VPC + subnets</li>
          <li>Implement NAT</li>
          <li>Select network security controls, security groups</li>
          <li>Set up a deployment pipeline</li>
          <li>Configure auditing, e.g. CloudTrail, and audit for coverage</li>
          <li>Select and implement database encryption at rest</li>
          <li>Select and implement a database backup strategy</li>
          <li>Select and implement encryption at rest for database backups</li>
          <li>Select a load balancing strategy</li>
          <li>Select and configure SSL/TLS endpoints</li>
          <li>Select and configure host-level monitoring, alerting</li>
          <li>Select and implement host-level vulnerability scanning</li>
          <li>Select and implement network vulnerability scanning</li>
          <li className={styles.aptible}>Deploy</li>
        </ol>
      </div>

      <div className={styles.stepsArrow}>
        <svg
          width="312"
          height="766"
          viewBox="0 0 312 766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M292 762V123C292 56.7258 238.274 3 172 3H0"
            stroke="#33C69F"
            strokeWidth="5"
          />
          <path
            d="M293.999 757.612L294.204 757.612L294.35 757.468L311.5 740.558L311.5 746.07L291.999 765.298L272.5 746.07L272.5 740.558L289.648 757.468L289.794 757.612L289.999 757.612L293.999 757.612Z"
            fill="#33C69F"
            stroke="#33C69F"
          />
        </svg>
      </div>

      <div className={styles.useAptible}>
        <h2>Or Use Aptible and Deploy in Just 3 Steps.</h2>
        <LeadForm id="Home Page - Request a Demo" />
      </div>
    </Grid>
  </div>
);
