import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import toSeamlessArrow from '../../images/comply/to-seamless.svg';
import chatIllustration from '../../images/comply/chat.png';
import screenshotIllustration from '../../images/comply/screenshot.png';
import dpaIllustration from '../../images/comply/dpa.png';

const automationIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20H37C41.971 20 46 15.971 46 11C46 6.029 41.971 2 37 2H27" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M26 38H11C6.029 38 2 33.971 2 29C2 24.029 6.029 20 11 20H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M20 32L26 38L20 44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M18 2H21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const collabIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 37L34 39L38 35" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M35 46C39.9706 46 44 41.9706 44 37C44 32.0294 39.9706 28 35 28C30.0294 28 26 32.0294 26 37C26 41.9706 30.0294 46 35 46Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M45 16H3" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M21 42H6C5.20435 42 4.44129 41.6839 3.87868 41.1213C3.31607 40.5587 3 39.7956 3 39V9C3 8.20435 3.31607 7.44129 3.87868 6.87868C4.44129 6.31607 5.20435 6 6 6H42C42.7956 6 43.5587 6.31607 44.1213 6.87868C44.6839 7.44129 45 8.20435 45 9V25.012" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M13 2V10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M35 2V10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const systemIcon = (
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

export default () => (
  <div className={styles.container}>
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h5>&hellip;to seamless, scalable security operations</h5>
          <h1 className={styles.continuousHeadline}>
            Continuously improve your company's security
          </h1>
          <p className="L">
            Software that helps you improve your security by making the operation
            of your Security Management Program repeatable, without sacrificing
            focus on growth.
          </p>

          <div className={styles.toSeamless}>
            <img src={toSeamlessArrow} alt="arrow" />
          </div>
        </div>
      </Grid>
    </div>

    <Grid>
      <div className={styles.bullets}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{systemIcon}</div>
          <h5>Vendors work for you</h5>
          <p>
            Comply enables you to automatically track your Vendor's security
            posture and understand your 3rd party risk exposure.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{collabIcon}</div>
          <h5>Streamline Asset Management</h5>
          <p>
            Comply integrates with your assets and automates the process of
            reporting on their alignment with your policies. You get a real-time
            assessment of your risk exposure.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{automationIcon}</div>
          <h5>Automate Access Control Reviews</h5>
          <p>
            Comply automatically checks your users' access levels against the
            access levels set forth in your policies, notifying you of instances
            that are out of compliance and correcting any anomalies.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{systemIcon}</div>
          <h5>System of Record</h5>
          <p>
            Aptible Comply is the single source of truth for what is supposed to
            happen and what did happen. You have a place to point auditors and
            can easily export documentaton to prove your security position and
            build trust with customers and regulators.
          </p>
        </div>
      </div>

      <div className={styles.screenshots}>
        <img src={chatIllustration} className={styles.chat} alt="chat" />
        <img src={screenshotIllustration} className={styles.screenshot} alt="chat" />
        <img src={dpaIllustration} className={styles.dpa} alt="chat" />
      </div>
    </Grid>
  </div>
);
