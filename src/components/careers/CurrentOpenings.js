import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CurrentOpenings.module.css';

const arrowIcon = (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10.003L10.2324 0.00244098L7.30217 0.00244085L16.093 9.00294L3.42127e-06 9.00294L3.33385e-06 11.0031L16.093 11.0031L7.30217 20.0024L10.2324 20.0024L20 10.003Z" fill="white" fillOpacity="0.5" />
  </svg>
);

export default ({ jobs }) => (
  <div className={styles.container} id="openings">
    <Grid>
      <div className={styles.headline}>
        <h1>Current Openings</h1>
      </div>

      <div className={styles.jobsList}>
        {jobs.map((job, idx) => (
          <div className={styles.job} key={idx}>
            <a href={job.node.hostedUrl} target="_blank" rel="noopener noreferrer">
              <Grid>
                <div className={styles.team}>
                  <h6 className="small">{job.node.categories.team}</h6>
                </div>
                <div className={styles.jobTitle}>
                  <h5>{job.node.text}</h5>
                </div>
                <div className={styles.location}>
                  <h6 className="small">{job.node.categories.location}</h6>
                </div>
                <div className={styles.commitment}>
                  <div className={styles.arrow}>{arrowIcon}</div>
                </div>
              </Grid>
            </a>
          </div>
        ))}
      </div>
    </Grid>
  </div>
);
