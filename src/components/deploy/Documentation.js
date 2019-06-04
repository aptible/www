import React from 'react';
import { Grid } from '../grid/Grid';
import { Link } from 'gatsby';
import styles from './Documentation.module.css';

export default () => (
  <div className={styles.container} id="support">
    <Grid>
      <div className={styles.headline}>
        <h1>Documentation and Support</h1>
      </div>

      <div className={styles.left}>
        <h6 className="small">Usage and Best Practices</h6>
        <Link to="/">Reference</Link>
        <Link to="/">CLI</Link>
        <Link to="/">Tutorials</Link>
        <Link to="/">Troubleshooting</Link>
      </div>

      <div className={styles.middle}>
        <h6 className="small">Administration</h6>
        <Link to="/">Organizations</Link>
        <Link to="/">Billing</Link>
        <Link to="/">Users</Link>
        <Link to="/">Roles</Link>
      </div>
      <div className={styles.right}>
        <h6 className="small">Support</h6>
        <Link to="/">Contact Support</Link>
        <Link to="/">Best Practices</Link>
        <Link to="/">Active Tickets</Link>
        <Link to="/">FAQs</Link>
      </div>
    </Grid>
  </div>
);
