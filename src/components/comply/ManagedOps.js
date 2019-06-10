import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './ManagedOps.module.css';

const supportIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M20.354 14.6973L11.541 5.88428" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.88281 11.541L14.6968 20.354" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.3027 20.354L42.1157 11.541" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36.4575 5.88428L27.6445 14.6983" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.6445 33.3032L36.4575 42.1162" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42.1148 36.459L33.3008 27.646" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6958 27.646L5.88281 36.459" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.541 42.1162L20.354 33.3022" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39.5553 39.5562C48.1468 30.9647 48.1468 17.0353 39.5553 8.4438C30.9639 -0.147651 17.0344 -0.147651 8.44292 8.4438C-0.148534 17.0353 -0.148534 30.9647 8.44292 39.5562C17.0344 48.1477 30.9639 48.1477 39.5553 39.5562Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.0704 31.071C34.9756 27.1658 34.9756 20.8342 31.0704 16.929C27.1652 13.0238 20.8336 13.0238 16.9284 16.929C13.0232 20.8342 13.0232 27.1658 16.9284 31.071C20.8336 34.9762 27.1652 34.9762 31.0704 31.071Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const opsIcon = (
  <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 22H42" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M0 22H26" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M32 16H26V28H32V16Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M4 7H0" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M42 7H16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M16 1H10V13H16V1Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M4 37H0" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M42 37H16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M16 31H10V43H16V31Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const handsIcon = (
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33 10L21 2L9 10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 38H1V10H41V19.071" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M9 20H23" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M9 28H17" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M43 31.292V44L37 41L31 44V31.292" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M37 34C41.4183 34 45 30.4183 45 26C45 21.5817 41.4183 18 37 18C32.5817 18 29 21.5817 29 26C29 30.4183 32.5817 34 37 34Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
)

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.intro}>
        <h5>Outsource your security operations to a data protection expert</h5>
        <h1>Aptible Managed Ops</h1>
        <p className="L">
          Help where and when you need it. Comply provides you with the type of
          assistance you need to achieve best-in-class security, whether that's
          coordinating a few activities or being your virtual Security Officer.
        </p>
      </div>

      <div className={styles.left}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{supportIcon}</div>
          <h5>Operational Support</h5>
          <p>
            We walk you through the process of assigning responsibilities, setting
            timelines, and determining activities that meet your compliance goals.
            We keep track of your operations for you so you don't have to worry
            about mantaining compliance.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{opsIcon}</div>
          <h5>Hassle-free Operations</h5>
          <p>
            Security and Compliance operations are completely taken care of by
            us. We put them in place and carry them out so that you have
            best-in-class security.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{handsIcon}</div>
          <h5>Hands-off Audits</h5>
          <p>
            We walk you through the process of assigning responsibilities,
            setting timelines, and determining activities that meet your
            compliance goals. We keep track of your operations for you so you
            don't have to worry about mantaining compliance. 
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
