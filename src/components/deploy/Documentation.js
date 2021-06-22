import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Documentation.module.css';

export default () => (
  <div className={styles.container} id="support">
    <Grid>
      <div className={styles.headline}>
        <h1>Documentation and Support</h1>
      </div>

      <div className={styles.left}>
        <h6 className="small">Usage and Best Practices</h6>
        <a href="/documentation/deploy/reference.html">Reference</a>
        <a href="/documentation/deploy/cli.html">CLI</a>
        <a href="/documentation/deploy/tutorials.html">Tutorials</a>
        <a href="/documentation/deploy/troubleshooting.html">Troubleshooting</a>
      </div>

      <div className={styles.middle}>
        <h6 className="small">Administration</h6>
        <a href="/documentation/admin/organizations.html">Organizations</a>
        <a href="/documentation/admin/billing.html">Billing</a>
        <a href="/documentation/admin/users.html">Users</a>
        <a href="/documentation/admin/roles.html">Roles</a>
      </div>
      <div className={styles.right}>
        <h6 className="small">Support</h6>
        <Link to="/deploy/support">Support Plans</Link>
        <a href="/documentation/support.html#contacting-support">
          Contact Support
        </a>
        <a href="/documentation/support.html#best-practices">Best Practices</a>
        <a href="/documentation/support.html#active-tickets">Active Tickets</a>
      </div>
    </Grid>
  </div>
);
