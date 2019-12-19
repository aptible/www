import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Resources.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        <Link to="/resources/">
          <div>Security Management Resources</div>
        </Link>

        <a href="/documentation/index.html">
          <div>Product Documentation</div>
        </a>
      </div>
    </Grid>
  </div>
);
