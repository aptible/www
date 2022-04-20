import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import Title from './components/Title';
import Video from './components/Video';
import Testimonial from './components/Testimonial';
import SignupForm from '../../components/signup-form';
import styles from './VideoLandingPage.module.css';

export default () => {
  return (
    <div>
      <Helmet>
        <title>Aptible | HIPAA-Readiness in Deploy</title>
        <meta
          name="description"
          content="Go from zero to HIPAA-Compliant docker deployment in minutes"
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
          one. Watch the video below to see how."
          />

          <div className={styles.formWrapper}>
            <SignupForm
              id="HIPAA Readiness Video Campaign - 1"
              inputPlaceholder="Enter your work email"
            />
          </div>

          <Video />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};
