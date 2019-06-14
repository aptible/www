import React from 'react';
import { Grid } from '../grid/Grid';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import styles from './Features.module.css';
import thumbsUpArrow from '../../images/comply/thumbs-up.svg';

const clearPathIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 25L45 3" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M5 4L17 16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M5 16L17 4" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M32 31L44 43" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M32 43L44 31" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M11 45C15.4183 45 19 41.4183 19 37C19 32.5817 15.4183 29 11 29C6.58172 29 3 32.5817 3 37C3 41.4183 6.58172 45 11 45Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M31 3H45V17" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const headStartIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 24H44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 10H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 38H32" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M38 18L44 24L38 30" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M12 4L18 10L12 16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 32L32 38L26 44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const securityIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 25C31.2091 25 33 23.2091 33 21C33 18.7909 31.2091 17 29 17C26.7909 17 25 18.7909 25 21C25 23.2091 26.7909 25 29 25Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M38 46.0001V35.7251C40.4862 33.6998 42.4193 31.0782 43.6194 28.1046C44.8194 25.1309 45.2473 21.9019 44.8632 18.7183C44.4791 15.5347 43.2955 12.5001 41.4226 9.8972C39.5498 7.29428 37.0486 5.20772 34.1521 3.83187C31.2556 2.45603 28.0579 1.83566 24.8571 2.02855C21.6562 2.22145 18.5562 3.22133 15.8459 4.93507C13.1356 6.6488 10.9031 9.02063 9.35633 11.8296C7.80962 14.6386 6.999 17.7934 7 21.0001V23.0001L3 32.0001L7 34.0001V42.0001C7 43.0609 7.42143 44.0783 8.17157 44.8285C8.92172 45.5786 9.93913 46.0001 11 46.0001H19C20.3132 46.0001 21.6136 45.7414 22.8268 45.2389C24.0401 44.7363 25.1425 43.9997 26.0711 43.0711C26.9997 42.1425 27.7362 41.0402 28.2388 39.8269C28.7413 38.6136 29 37.3133 29 36.0001V25.0001" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M36.0703 28.0707C37.9456 26.1954 38.9992 23.6518 38.9992 20.9997C38.9992 18.3476 37.9456 15.8041 36.0703 13.9287" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M21.9289 13.9287C20.0535 15.8041 19 18.3476 19 20.9997C19 23.6518 20.0535 26.1954 21.9289 28.0707" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

export default () => (
  <div className={styles.container} id="features">
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h5>Comply takes you from zero to audit-ready&hellip;</h5>
          <h1>
            Build your Security <br className="desktopOnly" />
            Management <br className="desktopOnly" />
            Program
          </h1>
          <p className="L">
            Achieve your security and compliance goals quicker with clear,
            relevant security management controls, collaboration and delegation
            to lower friction, and incredibly fast, easy results.
          </p>

          <div className={styles.thumbsUp}>
            <img src={thumbsUpArrow} alt="arrow" />
          </div>
        </div>
      </Grid>
    </div>

    <Grid>
      <div className={styles.bullets}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{clearPathIcon}</div>
          <h5>A Clear Path to Compliance</h5>
          <p>
            Aptible Comply makes it easy to understand exactly what you need to
            do, step-by-step, to become and stay compliant.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{headStartIcon}</div>
          <h5>A Head Start</h5>
          <p>
            Comply comes with a huge library of content to bootstrap your
            security program quickly. Implement best practices for DevOps,
            IaaS and SaaS management, HR, IT, and get audit-ready quickly.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{securityIcon}</div>
          <h5>Security and Compliance Expertise</h5>
          <p>
            Augment your team with Aptible's Data Protection Advisory experts.
            We're here via live chat and video to answer all of your security
            and compliance questions.
          </p>
        </div>
      </div>

      <div className={styles.guaranteeContainer}>
        <div className={styles.guarantee}>
          <h2>You'll pass your first audit, guaranteed.</h2>

          <div className={styles.guaranteeList}>
            <CheckmarkUnorderedList>
              <li>Shorter sales cycles</li>
              <li>Higher win rate for enterprise deals</li>
              <li>Quicker vendor security assessments</li>
              <li>Easy to maintain security and compliance documentation</li>
            </CheckmarkUnorderedList>
          </div>
        </div>
      </div>
    </Grid>
  </div>
);
