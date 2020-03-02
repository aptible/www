import React from 'react';
import withComplyIllustration from '../../images/comply/with-comply-illustration.svg';
import withComplyIllustrationMobile from '../../images/comply/with-comply-illustration-mobile.svg';
import { Grid } from '../grid/Grid';
import { GDPR, HIPAA, ISO, SOC } from './Badge';
import styles from './WithComply.module.css';

const data = [
  {
    heading: 'Integrate',
    copy: (
      <>
        <p className="M">
          Bring the compliance status of all your people, devices, assets, and
          vendors into one place through integrations with all of your SaaS
          services.
        </p>
      </>
    ),
  },
  {
    heading: 'Automate',
    copy: (
      <>
        <p className="M">
          Continuously monitor the compliance status of every asset, eliminating
          much of the manual work of compliance. Prevent mistakes, missed
          checks, and automate evidence collection.
        </p>
      </>
    ),
  },
  {
    heading: 'Act',
    copy: (
      <>
        <p className="M">
          Gain visibility into your security posture and control over your
          compliance.
        </p>
        <p className="M">
          Plan and manage all of your compliance work across your team. Schedule
          recurring processes, delegate work across your team, and track
          workflow completion.
        </p>
      </>
    ),
  },
];

export default () => (
  <div className={styles.container} id="with-comply">
    <Grid>
      <div className={styles.intro}>
        <h5>With Comply</h5>
        <h2 className="h1">
          Automate compliance workflows across your entire team
        </h2>

        <p className="XL">
          Aptible Comply integrates with your entire stack to monitor for
          security configurations and changes, giving you visibility into your
          compliance status and control across your security program.
        </p>
      </div>

      <div className={styles.badges}>
        <div className={styles.badge}>
          <ISO />
          ISO 27001
        </div>
        <div className={styles.badge}>
          <SOC />
          SOC 2 Type 2
        </div>
        <div className={styles.badge}>
          <GDPR />
          GDPR
        </div>
        <div className={styles.badge}>
          <HIPAA />
          HIPAA
        </div>
      </div>

      <div className={styles.illustration}>
        <img className={styles.desktop} src={withComplyIllustration} alt="" />
        <img
          className={styles.mobile}
          src={withComplyIllustrationMobile}
          alt=""
        />
      </div>

      <div className={styles.blocks}>
        {data.map(block => (
          <div className={styles.blocksCard} key={block.heading}>
            <div className={styles.beacon} />
            <h6>{block.heading}</h6>
            {block.copy}
          </div>
        ))}
      </div>
    </Grid>
  </div>
);
