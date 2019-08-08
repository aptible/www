import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Features.module.css';

const visIcon = (
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

const reminderIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 25C31.2091 25 33 23.2091 33 21C33 18.7909 31.2091 17 29 17C26.7909 17 25 18.7909 25 21C25 23.2091 26.7909 25 29 25Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M38 46.0001V35.7251C40.4862 33.6998 42.4193 31.0782 43.6194 28.1046C44.8194 25.1309 45.2473 21.9019 44.8632 18.7183C44.4791 15.5347 43.2955 12.5001 41.4226 9.8972C39.5498 7.29428 37.0486 5.20772 34.1521 3.83187C31.2556 2.45603 28.0579 1.83566 24.8571 2.02855C21.6562 2.22145 18.5562 3.22133 15.8459 4.93507C13.1356 6.6488 10.9031 9.02063 9.35633 11.8296C7.80962 14.6386 6.999 17.7934 7 21.0001V23.0001L3 32.0001L7 34.0001V42.0001C7 43.0609 7.42143 44.0783 8.17157 44.8285C8.92172 45.5786 9.93913 46.0001 11 46.0001H19C20.3132 46.0001 21.6136 45.7414 22.8268 45.2389C24.0401 44.7363 25.1425 43.9997 26.0711 43.0711C26.9997 42.1425 27.7362 41.0402 28.2388 39.8269C28.7413 38.6136 29 37.3133 29 36.0001V25.0001" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M36.0703 28.0707C37.9456 26.1954 38.9992 23.6518 38.9992 20.9997C38.9992 18.3476 37.9456 15.8041 36.0703 13.9287" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M21.9289 13.9287C20.0535 15.8041 19 18.3476 19 20.9997C19 23.6518 20.0535 26.1954 21.9289 28.0707" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const delegationIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 24H44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 10H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 38H32" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M38 18L44 24L38 30" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M12 4L18 10L12 16" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 32L32 38L26 44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const truthIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 24H8V36H20V24Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 24H40" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 30H40" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 36H32" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M8 10H10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M16 10H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M32 10H40" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 16H46" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M46 4H2V44H46V4Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const peaceIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 37L34 39L38 35" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M35 46C39.9706 46 44 41.9706 44 37C44 32.0294 39.9706 28 35 28C30.0294 28 26 32.0294 26 37C26 41.9706 30.0294 46 35 46Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M45 16H3" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M21 42H6C5.20435 42 4.44129 41.6839 3.87868 41.1213C3.31607 40.5587 3 39.7956 3 39V9C3 8.20435 3.31607 7.44129 3.87868 6.87868C4.44129 6.31607 5.20435 6 6 6H42C42.7956 6 43.5587 6.31607 44.1213 6.87868C44.6839 7.44129 45 8.20435 45 9V25.012" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M13 2V10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M35 2V10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const collabIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20H37C41.971 20 46 15.971 46 11C46 6.029 41.971 2 37 2H27" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 38H11C6.029 38 2 33.971 2 29C2 24.029 6.029 20 11 20H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M20 32L26 38L20 44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M18 2H21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.automates}>
        <h2>Workflows automates the operation of your Security Management program...</h2>
      </div>

      <div className={styles.firstLeft}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{visIcon}</div>
          <h5>Visibility</h5>
          <p>
            Get a simple interface with visibility into your security management
            program. Keep track of what needs to be done, what is being done,
            and the difference.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{reminderIcon}</div>
          <h5>Reminders & Notification</h5>
          <p>
            Get automatic reminders about everything you have to do on an ongoing
            basis to stay in compliance. It also notifies you if anything is
            missed that could put you out of compliance.
          </p>
        </div>
      </div>

      <div className={styles.firstRight}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{delegationIcon}</div>
          <h5>Delegation</h5>
          <p>
            Turn compliance requirements into discrete, assignable tasks with
            owners and deadlines, providing to dos that can be configured and are
            automatically delegated to your team members, who get notified of
            what they need to do.
          </p>
        </div>
      </div>

      <div className={styles.focus}>
        <h2>...so that you can focus on your business.</h2>
      </div>

      <div className={styles.secondLeft}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{truthIcon}</div>
          <h5>Single Source of Truth</h5>
          <p>
            Aptible Comply is your single source of truth around your compliance
            efforts and provides you with a place to point auditors and can easily
            export documentation to prove your security position and build trust
            with customers and regulators.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{peaceIcon}</div>
          <h5>Peace of Mind</h5>
          <p>
            Aptible Workflows keeps track of your compliance efforts for you.
            You get notifications for the things you need to do, keeping your
            company in compliance at all times.
          </p>
        </div>
      </div>

      <div className={styles.secondRight}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{collabIcon}</div>
          <h5>Collaboration</h5>
          <p>
            Aptible Workflows maps requirements to tasks with easy to understand
            timelines and triggers as well as a master dashboard that every employee
            can access to learn exactly what activities they need to complete.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
