import React from 'react';
import { Grid } from '../grid/Grid';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import styles from './HidsFeatures.module.css';

const monitoringIcon = (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47.1338 29.1069L54 35.5" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M9 38L14.6713 31L18.7222 36L25.2037 25L32.4954 35L37 28.534" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M54 6H9V51H54V6Z" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M42 38V51" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M42 6V20" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M42 32C45.3137 32 48 29.3137 48 26C48 22.6863 45.3137 20 42 20C38.6863 20 36 22.6863 36 26C36 29.3137 38.6863 32 42 32Z" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
  </svg>
);

const responseIcon = (
  <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12V24H33" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M3.083 44.328L0 33L11.642 34.511L3.083 44.328Z" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M6.22055e-09 24C-0.000116855 19.1969 1.6463 14.5389 4.66472 10.8026C7.68314 7.06639 11.8911 4.47779 16.587 3.46845C21.2829 2.45911 26.1829 3.09003 30.47 5.25602C34.757 7.42202 38.172 10.9922 40.1455 15.3712C42.119 19.7501 42.5318 24.6733 41.3149 29.3198C40.098 33.9662 37.3251 38.0551 33.4586 40.9047C29.592 43.7542 24.8654 45.1922 20.067 44.9788C15.2686 44.7654 10.6884 42.9136 7.09 39.732" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const reportIcon = (
  <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37 1.5708H1V37.0227H37V1.5708Z" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M31 6.40527H7V15.2682H31V6.40527Z" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M7 20.9082H31" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M7 26.5483H31" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M7 32.1885H18" stroke="#FFB607" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
  </svg>
);

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.intro}>
        <h2>
          The Aptible Security Team Monitors, Investigates, Responds to, and
          Resolves Security Events
        </h2>
        <p className="L">
          Your host-based intrusion detection system (HIDS) is an important tool
          to manage your stack's security.
        </p>
      </div>
      <div className={styles.bullets}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{monitoringIcon}</div>
          <h5>Continuous Host Activity Monitoring</h5>
          <p>
            Your infrastructure generates a constant stream of events relevant
            to the security of your data. Aptible Deploy HIDS is installed on
            each host that runs your containers by default and will detect
            potential intrusions and other anomalous activities.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{responseIcon}</div>
          <h5>Immediate Security Team Response</h5>
          <p>
            The Aptible Security Team monitors and investigates each event to
            determine the legitimacy of all activity. Crucially, the Aptible
            Security Team immediately responds to and resolves any issues that
            are discovered through investigation of anomalous activity and will
            notify you of any remediation steps taken.
          </p>
        </div>

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>{reportIcon}</div>
          <h5>HIDS Compliance Report</h5>
          <p>
            You can optionally subscribe to the Deploy HIDS Compliance Report
            to provide your customers and auditors evidence that you are using
            HIDS to monitor, analyze, and remediate security events.
          </p>
        </div>
      </div>
      <div className={styles.eventsContainer}>
        <div className={styles.events}>
          <h5>Events Collected</h5>
          <CheckmarkUnorderedList>
            <li>File integrity change</li>
            <li>Rootkit check</li>
            <li>Malware scanning</li>
            <li>System integrity check</li>
            <li>Privilege escalation</li>
            <li>SSH login</li>
            <li>User or group modification</li>
          </CheckmarkUnorderedList>
        </div>
      </div>
    </Grid>
  </div>
);
