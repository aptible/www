import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturesLeft.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.hero}>
        <h3>That leaves just 4 steps for your engineering team&hellip;</h3>
      </div>

      <div className={styles.stepsGrid}>
        <div className={styles.step}>
          <h5>Application-level Controls</h5>
          <p className="L">
            You are responsible for implementing security controls in your app
            business logic, such as authentication, app-level access controls,
            and audit logging.
          </p>
        </div>

        <div className={styles.step}>
          <h5>
            Web App Vulnerability
            <br />
            Scanning and Patching
          </h5>
          <p className="L">
            You are responsible for detecting and mitigating vulnerabilities in
            your Aptible apps.
          </p>
        </div>

        <div className={styles.step}>
          <h5>Web App Dependency Management</h5>
          <p className="L">
            You are responsible for managing your apps' dependencies (e.g.
            package.json, Gemfiles, etc.) and patching vulnerabilities. You may
            use Aptible App Security Scans to detect potential issues with
            system packages installed in your Docker images.
          </p>
        </div>

        <div className={styles.step}>
          <h5>
            Protection of Credentials,
            <br />
            Tokens, Secrets
          </h5>
          <p className="L">
            You are responsible for managing your passwords, API keys, and other
            secrets. You may use Aptible environment variables to store
            sensitive information and configuration.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
