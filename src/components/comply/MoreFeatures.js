import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './MoreFeatures.module.css';

export default () => (
  <div className={styles.container} id="more-features">
    <Grid>
      <div className={styles.icon}>ICON</div>

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
          Live one-on-one sessions to teach you about complex security tasks
          and topics.
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
    </Grid>
  </div>
);
