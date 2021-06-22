import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './HowItWorks.module.css';

export default () => (
  <div className={styles.container} id="how-it-works">
    <Grid rows="6">
      <div className={styles.intro}>
        <h1>How it works</h1>
      </div>

      <div className={styles.one}>
        <div className={styles.step}>
          <h3 className={styles.number}>01</h3>
          <div>
            <p>
              We give you the “instruction manual” for what needs to be done to
              satisfy the requirements of your targeted frameworks. Each
              Workflow is mapped cleanly to your policies out of the box, and
              you can make customizations as needed.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <div>
            <p>
              As events are triggered, the “instruction manual” for that event
              kicks off the activities necessary to satisfy the appropriate
              policies.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <div>
            <p>
              The team responsible for completing the activities will receive an
              email notifying them that there is work to be completed. By
              logging into the app, they can see what needs to be done along
              with specific instructions.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <div>
            <p>
              The required activity is tracked and the assigned team member can
              mark it as complete, creating an audit-ready log of what’s been
              done.
            </p>
          </div>
        </div>
      </div>
    </Grid>
  </div>
);
