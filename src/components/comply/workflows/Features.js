import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Features.module.css';
import collabIcon from '../../../images/comply/workflows/icons/collaboration.png';
import delegateIcon from '../../../images/comply/workflows/icons/delegation.png';
import securityIcon from '../../../images/comply/workflows/icons/pre-built-security.png';
import peaceIcon from '../../../images/comply/workflows/icons/peace-of-mind.png';
import truthIcon from '../../../images/comply/workflows/icons/truth.png';
import followUpIcon from '../../../images/comply/workflows/icons/follow-up.png';
import auditsIcon from '../../../images/comply/workflows/icons/audits.png';
import trustIcon from '../../../images/comply/workflows/icons/trust.png';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.automates}>
        <h2>
          Workflows turns your Security Management program into Actions...
        </h2>
      </div>

      <div className={styles.firstLeft}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={securityIcon} alt="Pre-built Security Processes" />
          </div>
          <h5>Pre-built Security Processes</h5>
          <p>
            Aptible Comply Workflows gives you audit-ready processes that make
            it easy to ensure your company is following your security policies.
            Each pre-built Workflow meets the requirements of your targeted
            frameworks by mapping your actions back to your policies and their
            underlying controls.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={collabIcon} alt="Collaboration" />
          </div>
          <h5>Collaboration</h5>
          <p>
            Aptible Comply Workflows maps requirements to tasks with easy to
            understand timelines and triggers as well as a master dashboard that
            every employee can access to learn exactly what activities they need
            to complete.
          </p>
        </div>
      </div>

      <div className={styles.firstRight}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={followUpIcon} alt="Automated Follow-up" />
          </div>
          <h5>Automated Follow-up</h5>
          <p>
            Aptible Comply Workflows measures all security and compliance
            related activities so you can see what <i>needs</i> to be done, what
            is being done, and report on security progress quickly and easily.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={delegateIcon} alt="Delegation" />
          </div>
          <h5>Delegation</h5>
          <p>
            Turn compliance requirements into discrete, assignable tasks with
            owners and deadlines, providing to dos that can be configured and
            are automatically delegated to your team members, who get notified
            of what they need to do.
          </p>
        </div>
      </div>

      <div className={styles.focus}>
        <h2>...so that you can Build Trust and Pass Audits.</h2>
      </div>

      <div className={styles.secondLeft}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={auditsIcon} alt="Streamline Audits" />
          </div>
          <h5>Streamline Audits</h5>
          <p>
            Aptible Comply Workflows showcases the responsibility and
            consistency with which your team is handling security, creating
            documentation that puts all of your security and compliance related
            activities on a silver platter for your auditor, ensuring you pass
            every audit with flying colors.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={trustIcon} alt="Build Trust with your Customers" />
          </div>
          <h5>Build Trust with your Customers</h5>
          <p>
            Aptible Comply Workflows turns everything that should happen around
            security into a Workflow that’s automatically initiated and tracked,
            giving customers visibility into your security progress, making it
            easy to build trust with stakeholders.
          </p>
        </div>
      </div>

      <div className={styles.secondRight}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={truthIcon} alt="Single Source of Truth" />
          </div>
          <h5>Single Source of Truth</h5>
          <p>
            Aptible Comply Workflows is your single source of truth around your
            compliance efforts, tracking all of your security and compliance
            activities and giving you a place to point stakeholders and your
            team to get everyone aligned.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <img src={peaceIcon} alt="Peace of Mind" />
          </div>
          <h5>Peace of Mind</h5>
          <p>
            Aptible Workflows keeps track of your compliance efforts for you so
            that you don’t worry about remembering to complete ad hoc, manual
            processes or reminding team members of their responsibilities. You
            know that everything is being done to keep your company in
            compliance at all times.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
