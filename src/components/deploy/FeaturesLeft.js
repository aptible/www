import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturesLeft.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.hero}>
        <h1>Only four steps left for you&hellip;</h1>
        <p className="XL">
          This intro lets them know that Aptible, Aptible Deploy, and AWS gets
          them 99% of the way there and all they have to do is the last few steps.
        </p>
      </div>

      <div className={styles.stepsGrid}>
        <div className={styles.step}>
          <h3>Application-level Controls</h3>
          <p className="L">
            You are responsible for implementing security controls in your app
            business logic, such as authentication, app-level access controls,
            and audit logging.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Web App Vulnerability<br />Scanning</h3>
          <p className="L">
            You are responsible for detecting and mitigating vulnerabilities in
            your Deploy apps.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Web App Dependency Management</h3>
          <p className="L">
            You are responsible for managing your apps' dependencies (e.g.
            package.json, Gemfiles, etc.) and patching vulnerabilities. You may
            use Deploy App Security Scans to detect potential issues with system
            packages installed in your Docker images.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Protection of Credentials,<br />Tokens, Secrets</h3>
          <p className="L">
            You are responsible for managing your passwords, API keys, and other
            secrets. You may use Deploy environment variables to store sensitive
            information and configuration.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
