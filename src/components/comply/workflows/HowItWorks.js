import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './HowItWorks.module.css';
import image1 from '../../../images/comply/workflows/how-it-works-1.png';
import image2 from '../../../images/comply/workflows/how-it-works-2.png';
import image3 from '../../../images/comply/workflows/how-it-works-3.png';
import image4 from '../../../images/comply/workflows/how-it-works-4.png';

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
              In the Design stage, specify how a given workflow should be conducted.
              This is the “instruction manual” that should be followed every time
              this workflow is conducted.
            </p>
            <img src={image1} alt="How it works #1" />
          </div>
        </div>
      </div>

      <div className={styles.two}>
        <div className={styles.step}>
          <h3 className={styles.number}>02</h3>
          <div>
            <p>
              When you’re in the Operate stage, and it comes time offboard a vendor,
              just trigger the event in Operate panel. Indicate the specific vendor
              to be offboarded here.
            </p>
            <p style={{ marginTop: '20px' }}>
              (Note: Any <i>recurring</i> activities, like monthly Access Control
              Reviews, will be triggered automatically for you.)
            </p>
            <img src={image2} alt="How it works #2" />
          </div>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.step}>
          <h3 className={styles.number}>03</h3>
          <div>
            <p>
              The team responsible for this workflow will receive an email, notifying
              them that there is an activity to be conducted. By logging into the app,
              they can see the specific worklow, with all the instructions that
              you pre-approved.
            </p>
            <img src={image3} alt="How it works #3" />
          </div>
        </div>
      </div>

      <div className={styles.four}>
        <div className={styles.step}>
          <h3 className={styles.number}>04</h3>
          <div>
            <p>
              The assignee conducts the workflow and marks the activity as “Complete”
              in the application, creating an audit-ready log of what’s been done.
            </p>
            <img src={image4} alt="How it works #4" />
          </div>
        </div>
      </div>
    </Grid>
  </div>
);
