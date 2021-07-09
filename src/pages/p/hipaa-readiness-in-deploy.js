import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';


import { Grid } from '../../components/grid/Grid';
import styles from './hipaa-readiness-in-deploy.module.css';
import logoImage from '../../images/aptible.svg';
import healthCatalystLogo from '../../images/customers/logos/health-catalyst-color.png';

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
        <title>Aptible | HIPAA Readiness in Deploy</title>
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
          
          <img className={styles.logo} src={logoImage} alt="Aptible logo" />
          <h1 className={styles.headerText}>
            Go From Zero to HIPAA-Compliant Docker Deployment in Minutes
          </h1>

          <p className={classnames("XL", styles.headerSubText)}>
            Don’t waste engineering time building compliance into your cloud
            infrastructure. Just use Aptible and be HIPAA-compliant from day one.
          </p>
          
          <div className={styles.inputGroup} id="header-form" />
          <div className={styles.videoGroup}>
            <div className={classnames('L', styles.videoText)}>
              Watch the video below to see how Aptible can save your engineers
              time on HIPAA-compliance.
            </div>
            <div className={styles.video}>Video placeholder</div>
          </div>
          <div className={styles.testimonial}>
            <h3 className={classnames()}>
              “I'm not sure what we would do without Aptible. We would have to
              hire 3 more people and we still would not have the high level of
              support and tooling that Aptible provides.”
            </h3>
            <img src={healthCatalystLogo} className={styles.testimonialImage} />
            <div>Mark Siemers, Software Engineering Manager</div>
          </div>
          <div className={styles.footerCta}>
            <h3
              className={styles.marginBotSm}>
              Get a demo today
            </h3>
            <div className={styles.inputGroup} id="footer-form" />
          </div>
        </div>
      </div>
    </div>
  );
};
