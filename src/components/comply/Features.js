import React from 'react';
import { Grid } from '../grid/Grid';
import Arrow from '../shared/Arrow';
import styles from './Features.module.css';
import { GDPR, HIPAA, ISO, SOC } from './Badge';

export default () => (
  <div className={styles.container} id="features">
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h4>Features</h4>
          <h1>Automate compliance workflows across your entire team</h1>
          <p className="L">
            Aptible Comply integrates with your entire stack to monitor
            compliance status changes, giving you a complete compliance platform
            to plan and manage compliance work.
          </p>
        </div>

        <div className={styles.badges}>
          <div className={styles.badge}>
            <ISO />
            ISO 27001
          </div>
          <div className={styles.badge}>
            <SOC />
            SOC 2 Type 2
          </div>
          <div className={styles.badge}>
            <GDPR />
            GDPR
          </div>
          <div className={styles.badge}>
            <HIPAA />
            HIPAA
          </div>
        </div>
      </Grid>
    </div>

    {/* <Grid>
      <div className={styles.cards}>
        <div className={styles.card}>
          <a href="#">
            <h3>Integrate</h3>
            <p className="L">
              Bring all of your compliance data and assets into one place
              through integrations with all of your SaaS services
            </p>

            <div className={styles.cardArrow}>
              <Arrow />
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <h3>Automate</h3>
            <p className="L">
              Continuous monitoring for security ocnfigurations and changes
              prevents mistakes and automates evidence collection
            </p>

            <div className={styles.cardArrow}>
              <Arrow />
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <h3>Act</h3>
            <p className="L">
              Workflow delegation, tracking, and analytics give you the
              visibility needed to plan and manage all compliance workflows
              across your team
            </p>

            <div className={styles.cardArrow}>
              <Arrow />
            </div>
          </a>
        </div>
      </div>
    </Grid> */}
  </div>
);
