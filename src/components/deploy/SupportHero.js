import React from 'react';
import { Grid } from '../grid/Grid';
import { Link } from 'gatsby';
import styles from './SupportHero.module.css';

export default () => (
  <div>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible</h5>
        <h1 className="hero">Support Plans</h1>
        <p class="L">
        Aptible is committed to best-in-class uptime for all customers regardless of
        support plan. Aptible will make reasonable efforts to ensure your services running in
        Dedicated Environments are available with a Monthly Uptime Percentage of at least 99.95%.
        This means that we guarantee our customers will experience no more than 21.56 min/month of Unavailability.
        </p>
        <p class="L">
        Unavailability, for app services and databases, is when our customer's service or database is not running or not
        reachable due to Aptible's fault.  Details on our commitment to uptime and company level SLAs can be found <Link to="/legal/service-level-agreement">here</Link>.
        The following Support plans and their associated target response times are for roadblocks that customers may run into
        while Aptible Services are up and running as expected.
        </p>
      </div>
    </Grid>
  </div>
);
