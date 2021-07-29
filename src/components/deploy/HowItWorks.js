import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HowItWorks.module.css';

export default () => (
  <div className={styles.container} id="how-it-works">
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
        <p className="XL">Get set up in under an hour.</p>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <h3>Deploy Your Code</h3>
          <p>
            Get your code on Aptible. Point the platform at an existing Docker
            image to deploy containers automatically, or let Aptible build
            Docker images for you.
          </p>
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <h3>Provision a Database</h3>
          <p>
            Quickly provision a database by picking a type and footprint and
            letting Aptible do the rest. Get your credentials instantly and
            resize the container and disk anytime.
          </p>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <h3>Configure ENV variables</h3>
          <p>
            Aptible natively supports 12-factor apps: provide Aptible with a
            list of environment variables your app needs and Aptible will
            securely store them and make sure they're available when your
            containers start.
          </p>
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <h3>Create Encrypted Endpoints</h3>
          <p>
            To expose your app on the Internet, add an Endpoint and Aptible will
            provision and configure a load balancer, including SSL termination
            and certificate management. You just need to set up a DNS entry to
            point to the endpoint.
          </p>
        </div>
      </div>

      <div className={styles.five}>
        <div className={styles.step}>
          <h3 className={styles.number}>05</h3>
          <h3>Integrate Logging and Metrics</h3>
          <p>
            Integrate with your existing logging and metrics provider, or choose
            self-hosted options on Aptible, to get full visibility into your app
            and database logs and metrics.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
