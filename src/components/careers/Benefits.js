import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Benefits.module.css';

const anywhereIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.57192 7.33008C9.39192 7.93608 10.1319 8.50008 10.9089 9.44208C11.5629 10.2351 12.3459 13.0671 11.2729 14.4551C10.0589 16.0241 6.54492 16.5541 6.54492 18.0001C6.54492 19.0881 8.08592 20.3301 8.90892 21.5451C10.1469 23.3721 9.58392 25.1421 8.90892 26.2721C8.55892 26.8581 7.96392 27.3271 7.34392 27.6991" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.652 15C28.88 15.963 29 16.967 29 18C29 25.18 23.18 31 16 31C8.82 31 3 25.18 3 18C3 10.82 8.82 5 16 5C16.09 5 16.181 5.001 16.271 5.003" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 8C22.5523 8 23 7.55228 23 7C23 6.44772 22.5523 6 22 6C21.4477 6 21 6.44772 21 7C21 7.55228 21.4477 8 22 8Z" fill="#FDB515" />
    <path d="M15.8356 30.9989C13.2426 28.9029 13.1026 22.0079 17.1846 20.4079C19.3506 19.5589 19.9486 23.8269 24.3006 23.1109C25.4536 22.9209 26.6097 23.6249 26.6937 25.3939" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 6.844C28 10.451 22 16 22 16C22 16 16 10.451 16 6.844C16 3.146 19.101 1 22 1C24.899 1 28 3.146 28 6.844Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const vacationIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 25H1" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 21H6" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 29H6" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 17H3" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.40039 6.3999L6.80039 7.7999" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2V4" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5992 6.3999L25.1992 7.7999" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31 17H29" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5992 27.6L25.1992 26.2" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 17C8 12.6 11.6 9 16 9C20.4 9 24 12.6 24 17C24 21.4 20.4 25 16 25" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const parentalIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21H30" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 6V21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6V21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 6H30" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 26V30" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27 26V30" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 6V21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 2V26H30V2" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const medicalIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 1H1V31H31V1Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 13H19V8H13V13H8V19H13V24H19V19H24V13Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const techIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 28H6C5.34339 28 4.69321 27.8707 4.08658 27.6194C3.47995 27.3681 2.92876 26.9998 2.46447 26.5355C1.52678 25.5979 1 24.3261 1 23H31C31 24.3261 30.4732 25.5979 29.5355 26.5355C28.5979 27.4732 27.3261 28 26 28V28Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H25C25.7956 4 26.5587 4.31607 27.1213 4.87868C27.6839 5.44129 28 6.20435 28 7V19" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z" fill="#FDB515" />
  </svg>
);

const travelIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M21 12L17 4H11L15 12" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.5 12H9L6 7H2L5 19H15.6L11 28H17L21.6 19H27.5C29.4 19 31 17.4 31 15.5C31 13.6 29.4 12 27.5 12Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headline}>
        <h1>Benefits</h1>
      </div>

      <div className={styles.benefitGrid}>
        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{anywhereIcon}</div>
          <h6>Work from Anywhere</h6>
          <p>
            Enjoy the flexibility of working from home, your favorite cafe or
            the local co-working space of your choice.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{vacationIcon}</div>
          <h6>Open Vacation Policy</h6>
          <p>
            We encourage you to take the time you need, when you need it&mdash;for
            any holiday or matter of personal importance.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{parentalIcon}</div>
          <h6>Paid Parental Leave</h6>
          <p>
            We offer job-protected Paid Time Off&mdash;12 Weeks, Fully Paid&mdash;for
            all parents to bond with a newly born, adopted, or fostered child.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{medicalIcon}</div>
          <h6>Medical, Dental, and Vision Insurance</h6>
          <p>
            We offer comprehensive health care for employees, with 100% of
            premiums paid by Aptible.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{techIcon}</div>
          <h6>Hardware & Software</h6>
          <p>
            We help you create your ideal home-office setup and provide any
            software you'll need. 
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>{travelIcon}</div>
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
