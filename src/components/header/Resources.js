import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Resources.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.documentation}>
        <Link to="/">Documentation</Link>
        <Link to="/" className={styles.subLink}>Comply</Link>
        <Link to="/" className={styles.subLink}>Deploy</Link>
        <Link to="/" className={styles.subLink}>CLI</Link>
      </div>
      <div className={styles.blog}>
        <Link to="/">Blog</Link>
        <Link to="/" className={styles.subLink}>Product Updates</Link>
        <Link to="/" className={styles.subLink}>Webinar Recap</Link>
        <Link to="/" className={styles.subLink}>Newsletter</Link>
      </div>
      <div className={styles.guides}>
        <h6 className="small">Compliance Guides</h6>
        <Link to="/">HIPAA</Link>
        <Link to="/">GDPR</Link>
      </div>
      <div className={styles.support}>
        <h6 className="small">Support</h6>
        <Link to="/">Open a Ticket</Link>
        <Link to="/">Status</Link>
      </div>
    </Grid>
  </div>
);
