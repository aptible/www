import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './HelloBar.module.css';

const closeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1L1.32993 18.9924M18.6841 19L1 1.02118" stroke="white" strokeOpacity="0.7" strokeWidth="2" />
  </svg>
)

export default ({ callout, text, to }) => (
  <div className={styles.container}>
    <Grid>
      <Link className={styles.content} to={to}>
        <p>
          <span>{callout}</span>
          {text}
        </p>
      </Link>

      <div className={styles.close}>
        {closeIcon}
      </div>
    </Grid>
  </div>
);
