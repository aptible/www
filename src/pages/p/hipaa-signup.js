import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import Title from './components/Title';
import Video from './components/Video';
import Testimonial from './components/Testimonial';
import SignupForm from '../../components/signup-form';
import ZeroTo from '../../components/footer/ZeroTo';
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
            title="Deploy a Secure, HIPAA-Compliant App From Day One"
            summary="Don’t waste engineering time building compliance into your cloud
          infrastructure. Aptible is a PaaS that lets you be HIPAA-compliant from day
          one. Watch the video below to see how."
          />

          <div className={styles.signupFormWrapper}>
            <SignupForm
              id="Paid - HIPAA Signup"
              inputPlaceholder="Enter your work email"
            />
          </div>

          <Video />
          <Testimonial />
        </div>
      </div>
      <ZeroTo />
    </div>
  );
};
