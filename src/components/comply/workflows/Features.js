import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Features.module.css';
import collabIcon from '../../../images/comply/workflows/icons/collaboration.png';
import delegateIcon from '../../../images/comply/workflows/icons/delegation.png';
import notificationsIcon from '../../../images/comply/workflows/icons/notifications.png';
import peaceIcon from '../../../images/comply/workflows/icons/peace-of-mind.png';
import truthIcon from '../../../images/comply/workflows/icons/truth.png';
import visibilityIcon from '../../../images/comply/workflows/icons/visibility.png';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.automates}>
        <h2>Workflows automates the operation of your Security Management program...</h2>
      </div>

      <div className={styles.firstLeft}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={visibilityIcon} alt="Visibility" />
          </div>
          <h5>Visibility</h5>
          <p>
            Get a simple interface with visibility into your security management
            program. Keep track of what needs to be done, what is being done,
            and the difference.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={notificationsIcon} alt="Reminders & notifications" />
          </div>
          <h5>Reminders & Notification</h5>
          <p>
            Get automatic reminders about everything you have to do on an ongoing
            basis to stay in compliance. It also notifies you if anything is
            missed that could put you out of compliance.
          </p>
        </div>
      </div>

      <div className={styles.firstRight}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={delegateIcon} alt="Delegation" />
          </div>
          <h5>Delegation</h5>
          <p>
            Turn compliance requirements into discrete, assignable tasks with
            owners and deadlines, providing to dos that can be configured and are
            automatically delegated to your team members, who get notified of
            what they need to do.
          </p>
        </div>
      </div>

      <div className={styles.focus}>
        <h2>...so that you can focus on your business.</h2>
      </div>

      <div className={styles.secondLeft}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={truthIcon} alt="Single source of truth" />
          </div>
          <h5>Single Source of Truth</h5>
          <p>
            Aptible Comply is your single source of truth around your compliance
            efforts and provides you with a place to point auditors and can easily
            export documentation to prove your security position and build trust
            with customers and regulators.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={peaceIcon} alt="Peace of mind" />
          </div>
          <h5>Peace of Mind</h5>
          <p>
            Aptible Workflows keeps track of your compliance efforts for you.
            You get notifications for the things you need to do, keeping your
            company in compliance at all times.
          </p>
        </div>
      </div>

      <div className={styles.secondRight}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={collabIcon} alt="collaboration" />
          </div>
          <h5>Collaboration</h5>
          <p>
            Aptible Workflows maps requirements to tasks with easy to understand
            timelines and triggers as well as a master dashboard that every employee
            can access to learn exactly what activities they need to complete.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
