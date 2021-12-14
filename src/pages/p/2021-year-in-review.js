import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import Title from './components/Title';
import Video from './components/Video';
import Testimonial from './components/Testimonial';
import LeadForm from '../../components/lead-form';
import WistiaVideo from '../../components/shared/WistiaVideo';

import styles from './VideoLandingPage.module.css';

export default () => {
  return (
    <div>
      <Helmet>
        <title>Aptible | 2021 Year in Review</title>
        <meta
          name="description"
          content="Go from zero to HITRUST-compliant Docker deployment in minutes"
        />
        <meta
          property="og:image"
          content="https://aptible.com/assets/hipaa-readiness-meta.png"
        />
      </Helmet>
      <div className={styles.layout}>
        <div className={classnames(styles.container, styles.textCenter)}>
          <Title
            title="2021 - Year in Review"
            summary="2021 was a big year for Aptible. Check out the video below for a
            review of the past year's highlights and get a sneak peek into what's coming in 2022
            from Aptible CEO, Frank Macreery."
          />

          <Video videoId='rkkz1ahq2q' />
        </div>
      </div>
    </div>
  );
};
