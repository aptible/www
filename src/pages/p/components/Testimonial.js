import React from 'react';

import healthCatalystLogo from '../../../images/customers/logos/health-catalyst-color.png';
import styles from '../VideoLandingPage.module.css';

export default () => {
  return (
    <div className={styles.testimonial}>
      <h3>
        “I'm not sure what we would do without Aptible. We would have to hire 3
        more people and we still would not have the high level of support and
        tooling that Aptible provides.”
      </h3>
      <img src={healthCatalystLogo} alt="Health Catalyst logo" className={styles.testimonialImage} />
      <div>Mark Siemers, Software Engineering Manager</div>
    </div>
  );
};
