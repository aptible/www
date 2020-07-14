import React from 'react';
import { Grid } from '../grid/Grid';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import styles from './Features.module.css';
import thumbsUpArrow from '../../images/comply/thumbs-up.svg';

const automationIcon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 20H37C41.971 20 46 15.971 46 11C46 6.029 41.971 2 37 2H27"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M26 38H11C6.029 38 2 33.971 2 29C2 24.029 6.029 20 11 20H18"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M20 32L26 38L20 44"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M18 2H21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

const collabIcon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 37L34 39L38 35"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M35 46C39.9706 46 44 41.9706 44 37C44 32.0294 39.9706 28 35 28C30.0294 28 26 32.0294 26 37C26 41.9706 30.0294 46 35 46Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M45 16H3" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M21 42H6C5.20435 42 4.44129 41.6839 3.87868 41.1213C3.31607 40.5587 3 39.7956 3 39V9C3 8.20435 3.31607 7.44129 3.87868 6.87868C4.44129 6.31607 5.20435 6 6 6H42C42.7956 6 43.5587 6.31607 44.1213 6.87868C44.6839 7.44129 45 8.20435 45 9V25.012"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M13 2V10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M35 2V10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const securityIcon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29 25C31.2091 25 33 23.2091 33 21C33 18.7909 31.2091 17 29 17C26.7909 17 25 18.7909 25 21C25 23.2091 26.7909 25 29 25Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M38 46.0001V35.7251C40.4862 33.6998 42.4193 31.0782 43.6194 28.1046C44.8194 25.1309 45.2473 21.9019 44.8632 18.7183C44.4791 15.5347 43.2955 12.5001 41.4226 9.8972C39.5498 7.29428 37.0486 5.20772 34.1521 3.83187C31.2556 2.45603 28.0579 1.83566 24.8571 2.02855C21.6562 2.22145 18.5562 3.22133 15.8459 4.93507C13.1356 6.6488 10.9031 9.02063 9.35633 11.8296C7.80962 14.6386 6.999 17.7934 7 21.0001V23.0001L3 32.0001L7 34.0001V42.0001C7 43.0609 7.42143 44.0783 8.17157 44.8285C8.92172 45.5786 9.93913 46.0001 11 46.0001H19C20.3132 46.0001 21.6136 45.7414 22.8268 45.2389C24.0401 44.7363 25.1425 43.9997 26.0711 43.0711C26.9997 42.1425 27.7362 41.0402 28.2388 39.8269C28.7413 38.6136 29 37.3133 29 36.0001V25.0001"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M36.0703 28.0707C37.9456 26.1954 38.9992 23.6518 38.9992 20.9997C38.9992 18.3476 37.9456 15.8041 36.0703 13.9287"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M21.9289 13.9287C20.0535 15.8041 19 18.3476 19 20.9997C19 23.6518 20.0535 26.1954 21.9289 28.0707"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

export default () => (
  <div className={styles.container} id="features">
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h1>
            Automate <br className="desktopOnly" />
            Security and Compliance
          </h1>
          <p className="L">
            Achieve your security and compliance goals with expert advice,
            automation, and collaborative tooling.
          </p>
        </div>

        <div className={styles.thumbsUp}>
          <img src={thumbsUpArrow} alt="arrow" />
        </div>
      </Grid>
    </div>

    <Grid>
      <div className={styles.bullets}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{securityIcon}</div>
          <h5>Security and Compliance Expertise</h5>
          <p>
            Augment your team with Aptible's Data Protection Advisory experts.
            We're here via live chat and video to answer all of your security
            and compliance questions.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{automationIcon}</div>
          <h5>Automation</h5>
          <p>
            Spend less time managing systems, spreadsheets, and follow-up. We
            provide comprehensive software that maps, automates, and reminds, so
            that your team and your Security Management is more efficient.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{collabIcon}</div>
          <h5>Collaboration and Delegation</h5>
          <p>
            Turn compliance requirements into discrete tasks with owners and
            deadlines. Requirements are mapped to events with easy to understand
            timelines and triggers.
          </p>
        </div>
      </div>

      <div className={styles.guaranteeContainer}>
        <div className={styles.guarantee}>
          <h2>Why it matters</h2>

          <div className={styles.guaranteeList}>
            <CheckmarkUnorderedList>
              <li>Shorter sales cycles</li>
              <li>Higher win rate for enterprise deals</li>
              <li>Breeze through Vendor Security Assessments</li>
              <li>Spend less time on evidence collection for audits</li>
            </CheckmarkUnorderedList>
          </div>
        </div>
      </div>
    </Grid>
  </div>
);
