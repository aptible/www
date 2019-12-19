import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Company.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        <Link to="/company/">
          <div>About</div>
        </Link>

        <Link to="/blog/">
          <div>Blog</div>
        </Link>

        <Link to="/press/">
          <div>News</div>
        </Link>

        <Link to="/careers/">
          <div>Careers</div>
        </Link>

        {/* @TODO add when ready */}
        {/* <Link to="/owners-manual/">
          <div>Aptible Manual</div>
        </Link> */}
      </div>
    </Grid>
  </div>
);
