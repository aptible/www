import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import Title from './components/Title';
import Video from './components/Video';
import Testimonial from './components/Testimonial';
import LeadForm from './components/LeadForm';
import styles from './VideoLandingPage.module.css';

export default () => {
  return (
    <div>
      <Helmet>
        <title>Aptible | HIPAA-Readiness in Deploy</title>
        <meta
          name="description"
          content="Go from zero to HIPAA-compliant docker deployment in minutes"
        />
        <meta
          property="og:image"
          content="https://aptible.com/assets/hipaa-readiness-meta.png"
        />
      </Helmet>
      <div className={styles.layout}>
        <div className={classnames(styles.container, styles.textCenter)}>
          <Title
          title="Go From Zero to HIPAA-Compliant Docker Deployment in Minutes"
          summary="Don’t waste engineering time building compliance into your cloud
          infrastructure. Just use Aptible and be HIPAA-compliant from day
          one. Watch the video below to see how." />

          <LeadForm id="HIPAA Readiness Video Campaign - 1" />

          <Video />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};
