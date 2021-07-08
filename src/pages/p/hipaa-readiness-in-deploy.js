import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import styles from './hipaa-readiness-in-deploy.module.css';
import logoImage from '../../images/aptible.svg';

/*
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "na1",
	portalId: "20235662",
	formId: "7b0b2c16-112d-42e6-a45a-33cb2063a80f"
});
</script>
*/

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
      </Helmet>
      <div className={styles.layout}>
        <img className={styles.logo} src={logoImage} alt="Aptible logo" />
        <p
          className={classnames(
            styles.fontLg,
            styles.colorWhite,
            styles.headerText,
          )}
        >
          Go From Zero to HIPAA-Compliant Docker Deployment in Minutes
        </p>
        <p className={classnames(styles.fontSm, styles.headerSubText)}>
          Don’t waste engineering time building compliance into your cloud
          infrastructure. Just use Aptible and be HIPAA-Compliant from day one.
        </p>
        <div className={styles.inputGroup} id="header-form" />
        <div className={styles.videoGroup}>
          <div className={classnames(styles.fontSm, styles.videoText)}>
            Watch the video below to see how Aptible can save your engineers
            time on HIPAA Compliance
          </div>
          <div className={styles.video}>Video placeholder</div>
        </div>
        <div className={styles.testimonial}>
          <div className={classnames(styles.fontMd, styles.colorWhite)}>
            “I'm not sure what we would do without Aptible. We would have to
            hire 3 more people and we still would not have the high level of
            support and tooling that Aptible provides.”
          </div>
          <div className={styles.testimonialImage}>Image placeholder</div>
          <div>Mark Siemers, Software Engineering Manager</div>
        </div>
        <div className={styles.footerCta}>
          <div
            className={classnames(
              styles.fontMd,
              styles.colorWhite,
              styles.marginBotSm,
            )}
          >
            Get a demo today
          </div>
          <div className={styles.inputGroup} id="footer-form" />
        </div>
      </div>
    </div>
  );
};
