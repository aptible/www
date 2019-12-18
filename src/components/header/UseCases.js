import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './UseCases.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        <Link to="/use-cases/">
          <div>Vendor Management</div>
        </Link>

        <Link to="/use-cases/">
          <div>Access Control Reviews</div>
        </Link>

        <Link to="/use-cases/">
          <div>Identity and Access Management</div>
        </Link>

        <Link to="/use-cases/">
          <div>Human Resources Security</div>
        </Link>
      </div>
    </Grid>
  </div>
);
