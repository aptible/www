import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HowItWorks.module.css';

export default () => (
  <div className={styles.container}>
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
        <p className="XL">
          A simple developer workflow that scales, so you can go from zero to
          deploying an audit-ready app.
        </p>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <h3>Deploy Your App</h3>
          <p>
            If you've used Docker to build and host your own images, simply
            point Deploy at an existing Docker image to deploy containers on
            Deploy. Alternatively, let Deploy build Docker images for you:
            prepare a Dockerfile, then git push your app source code to Deploy
            to deploy.
          </p>
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <h3>Provision a Database</h3>
          <p>
            Deploying a database is fast and easy: pick a database type and a
            footprint, and Aptible Deploy will deploy a database container for
            you and return the credentials you need to access it. As you grow,
            you can resize the container and disk at any time.
          </p>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <h3>Configure an Environment</h3>
          <p>
            Deploy natively supports 12-factor apps: provide Deploy with a list
            of environment variables your app needs and Deploy will securely
            store them and make sure they're available when your containers start.
          </p>
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <h3>Establish Encrypted Endpoints</h3>
          <p>
            To expose a web app on the Internet, add an Endpoint and Deploy will
            provision and configure a load balancer, including SSL termination.
            You get a hostname back. Use it to create a CNAME or send your
            traffic there directly.
          </p>
        </div>
      </div>

      <div className={styles.five}>
        <div className={styles.step}>
          <h3 className={styles.number}>05</h3>
          <h3>Access Logs</h3>
          <p>
            Access your logs in real-time via the CLI. For long-term storage or
            more advanced use cases, configure a Log Drain to deliver your logs
            via Syslog or HTTPS.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
