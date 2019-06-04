import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HowItWorks.module.css';

export default () => (
  <div className={styles.container} id="how-it-works">
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
        <p className="XL">
          Step-by-step directions tailored to you, so you can go from zero to
          audit-ready.
        </p>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <h3>Learn</h3>
          <p>
            We show you what it will take to achieve your goals, including the
            process and timelines for getting and staying compliant. We teach
            you what you need to know about the product and your desired security
            framework, so you’re ready to begin your journey.
          </p>
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <h3>Design</h3>
          <p>
            We give you live-support and  baseline policies and procedures to
            help you author your Security Management system by entering specific
            information about your company.
          </p>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <h3>Operate</h3>
          <p>
            We give you an implementation roadmap with tasks that can be delegated
            to teammates or to us, to help you run your Security Management
            system and increase your team’s security awareness.
          </p>
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <h3>Audit</h3>
          <p>
            Our Data Protection Advisors review your Security Management system,
            identify gaps, help you fix them. You also receive guidance to help
            you maintain and prove your security position.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
