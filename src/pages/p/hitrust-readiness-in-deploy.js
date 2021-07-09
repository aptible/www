import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import Title from './components/Title';
import Video from './components/Video';
import Testimonial from './components/Testimonial';

import styles from './VideoLandingPage.module.css';


export default () => {
  useEffect(() => {
    /* eslint-disable no-undef */
    hbspt.forms.create({
      region: 'na1',
      portalId: '20235662',
      formId: '7b0b2c16-112d-42e6-a45a-33cb2063a80f',
      target: '#header-form',
    });

    hbspt.forms.create({
      region: 'na1',
      portalId: '20235662',
      formId: '7b0b2c16-112d-42e6-a45a-33cb2063a80f',
      target: '#footer-form',
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Aptible | HITRUST-Readiness in Deploy</title>
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
            title="Go From Zero to HITRUST-Compliant Docker Deployment in Minutes"
            summary="Don’t waste engineering time building compliance into your cloud
            infrastructure. Just use Aptible and be HITRUST-compliant from day
            one." />
          
          <div className={styles.inputGroup} id="header-form" />
          
          <Video />
          <Testimonial />
          
          <div className={styles.footerCta}>
            <h3 className={styles.marginBotSm}>Get a demo today</h3>
            <div className={styles.inputGroup} id="footer-form" />
          </div>
        </div>
      </div>
    </div>
  );
};


