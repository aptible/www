import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './MoreFeatures.module.css';

const icon = (
  <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.00008H32C33.1833 0.995182 34.3558 1.22463 35.4499 1.67519C36.5441 2.12575 37.5382 2.7885 38.3749 3.6252C39.2116 4.46191 39.8743 5.456 40.3249 6.55014C40.7754 7.64428 41.0049 8.81681 41 10.0001V10.0001C41.0049 11.1833 40.7754 12.3559 40.3249 13.45C39.8743 14.5442 39.2116 15.5382 38.3749 16.375C37.5382 17.2117 36.5441 17.8744 35.4499 18.325C34.3558 18.7755 33.1833 19.005 32 19.0001H10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M32.0001 43.0001H10.0001C8.81681 43.005 7.64428 42.7755 6.55014 42.325C5.456 41.8744 4.46191 41.2117 3.6252 40.375C2.7885 39.5382 2.12575 38.5441 1.67519 37.45C1.22463 36.3559 0.995182 35.1833 1.00008 34.0001V34.0001C0.995182 32.8168 1.22463 31.6443 1.67519 30.5501C2.12575 29.456 2.7885 28.4619 3.6252 27.6252C4.46191 26.7885 5.456 26.1257 6.55014 25.6752C7.64428 25.2246 8.81681 24.9952 10.0001 25.0001H32.0001" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M32 43C36.9706 43 41 38.9706 41 34C41 29.0294 36.9706 25 32 25C27.0294 25 23 29.0294 23 34C23 38.9706 27.0294 43 32 43Z" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

export default () => (
  <div className={styles.container} id="more-features">
    <Grid>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.headline}>
        <h2>Additional Features</h2>
      </div>

      <div className={styles.description}>
        <p className="XL">
          Going Beyond Compliance means focusing on what you need after your
          Security Management system is built. We're here to help with that too.
        </p>
      </div>

      <div className={`${styles.feature} ${styles.gapAssessments}`}>
        <h6>Gap Assessments</h6>
        <p className="L">
          A roadmap of your progress towards compliance so you see what still
          needs to be addressed.
        </p>
      </div>

      <div className={`${styles.feature} ${styles.workshops}`}>
        <h6>Workshops</h6>
        <p className="L">
          In-depth webinars to teach you about complex security tasks and
          topics.
        </p>
      </div>

      <div className={`${styles.feature} ${styles.training}`}>
        <h6>Built-in Training</h6>
        <p className="L">
          Educate your team with built-in training content and background
          materials that provide insight into security best practices.
        </p>
      </div>

      <div className={`${styles.feature} ${styles.exports}`}>
        <h6>Exports</h6>
        <p className="L">
          Easily show auditors, customers, and internal audiences your security
          position with PDFs of your ISMS.
        </p>
      </div>

      <div className={`${styles.feature} ${styles.userManagement}`}>
        <h6>User Management</h6>
        <p className="L">
          Assign users to roles, groups, and policies and procedures in a couple
          of clicks.
        </p>
      </div>

      <div className={`${styles.feature} ${styles.support}`}>
        <h6>Included Support</h6>
        <p className="L">
          Our team is here to help you succeed. See more details on what’s
          included <Link to="/comply/support">here</Link>.
        </p>
      </div>
    </Grid>
  </div>
);
