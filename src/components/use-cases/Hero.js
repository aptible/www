import React from 'react';
import { Link } from 'gatsby';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import HeroArrow from './HeroArrow';

export default ({ heroBlock }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.text}>
        <h1 className="hero">Use Cases</h1>
        <p className="XL">
          Aptible provides Access, Empowerment, Scalability, and Confidence. We
          know what startups are facing in their businesses right now and are
          solving their problems.
        </p>
      </div>

      <div className={styles.arrow}>
        <HeroArrow />
      </div>

      <div className={styles.nav}>
        <Link to="/">VSAs & External Audits</Link>
        <Link to="/">Security Standard Audit-Readiness</Link>
        <Link to="/">Regulatory Compliance Audit-Readiness</Link>
        <Link to="/">Security Awareness</Link>
        <Link to="/">Internal Audits</Link>
      </div>
    </Grid>
  </div>
);
