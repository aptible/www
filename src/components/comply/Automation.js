import React from 'react';
import illustration from '../../images/comply/comply-illustration.svg';
import Button from '../buttons/Button';
import { Grid } from '../grid/Grid';
import styles from './Automation.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.block}>
        <h3>Compliance is all manual work</h3>
        <p className="XL">
          Your compliance, security, sales, product, and engineering teams are
          forced to spend time on manual compliance activities across multiple
          disconnected tools in order to keep track of your ever-growing stack
          of SaaS vendors, assets, devices, and people.
        </p>
        <svg
          className={styles.arrow}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="473"
          height="1024"
          viewBox="0 0 473 1024"
        >
          <path d="M470.834 509.427v-509.427h-25.729v509.427c0 220.247-178.546 398.794-398.794 398.794h-5.146v25.729h5.146c234.457 0 424.523-190.068 424.523-424.523z" />
          <path d="M0 921.080l101.48 102.92h35.589l-91.332-92.628v-20.583l91.332-92.618h-35.589l-101.48 102.909z" />
          <path d="M45.738 910.789v20.583l91.332 92.628h-35.589l-101.48-102.92 101.48-102.909h35.589l-91.332 92.618zM124.77 1018.854l-84.178-85.373v-24.802l84.177-85.362h-21.136l-96.406 97.764 96.406 97.774h21.137z" />
        </svg>
      </div>
    </Grid>

    <Grid>
      <h1 className={styles.heading}>
        Aptible Comply gives your customer trust team superpowers
      </h1>

      <div className={styles.screenshot}>
        <img src={illustration} alt="" />
      </div>

      <div className={styles.content}>
        <p className="XL">
          Automate compliance operations and evidence collection with monitoring
          integrations for your SaaS services.
        </p>
        <p className="XL">
          Gain visibility into your compliance status, control across your
          security program, and build a single picture of controls, people,
          devices, applications, vendors, and risk across your business.
        </p>

        <div className={styles.cta}>
          <Button to="/comply/automation">Learn more about Automation</Button>
        </div>
      </div>
    </Grid>
  </div>
);
