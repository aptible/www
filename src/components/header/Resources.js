import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Resources.module.css';
import ResourcesLinks from './ResourcesLinks';
import heroImage from '../../images/security-management/sm1.jpg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <Link className={styles.guide} to="/security-management/">
        <img src={heroImage} alt="Introduction to Security Management" />

        <div className={styles.guideText}>
          <h6 className="small">Aptible Guide</h6>
          <h5>Introduction to Security Management</h5>
        </div>
      </Link>
      <div className={styles.links}>
        <ResourcesLinks />
      </div>
    </Grid>
  </div>
);
