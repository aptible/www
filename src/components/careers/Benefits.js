import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Benefits.module.css';

const tempIcon = (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.5 0.5H0.5V30.5H30.5V0.5Z" stroke="#33C69F" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M23.5 12.5H18.5V7.5H12.5V12.5H7.5V18.5H12.5V23.5H18.5V18.5H23.5V12.5Z" stroke="#33C69F" strokeMiterlimit="10" strokeLinecap="square" />
  </svg>
)

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headline}>
        <h1>Benefits</h1>
      </div>

      <div className={styles.benefitGrid}>
        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{tempIcon}</div>
          <h6>Work from Anywhere</h6>
          <p>
            Enjoy the flexibility of working from home, your favorite cafe or
            the local co-working space of your choice.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{tempIcon}</div>
          <h6>Open Vacation Policy</h6>
          <p>
            We encourage you to take the time you need, when you need it&mdash;for
            any holiday or matter of personal importance.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{tempIcon}</div>
          <h6>Paid Parental Leave</h6>
          <p>
            We offer job-protected Paid Time Off&mdash;12 Weeks, Fully Paid&mdash;for
            all parents to bond with a newly born, adopted, or fostered child.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{tempIcon}</div>
          <h6>Medical, Dental, and Vision Insurance</h6>
          <p>
            We offer comprehensive health care for employees, with 100% of
            premiums paid by Aptible.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{tempIcon}</div>
          <h6>Hardware & Software</h6>
          <p>
            We help you create your ideal home-office setup and provide any
            software you'll need. 
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{tempIcon}</div>
          <h6>Company Travel</h6>
          <p>
            We come together in-person one to three times per year, in locations
            around the globe.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
