import React from 'react';
import styles from './UseCases.module.css';
import { Grid } from '../grid/Grid';
import Button from '../buttons/Button';

const PARAGRAPH = <div>
  <p className="XL">
    Your information security needs are greater and more confusing than
    ever before... (summary answer to Why This Is Hard)
  </p>

  <p className="XL">
    Aptible Comply and Deploy give you the tools you need to speak fluently
    about your security program to customers and external auditors.
  </p>
</div>

const BULLET_POINTS = <div>
  <h6 className="small">Features</h6>
  <ul>
    <li>This is an example of a feature</li>
    <li>Another example</li>
    <li>One more because it's cool</li>
    <li>And another for good measure</li>
  </ul>

  <h6 className="small">Who It's For</h6>
  <ul>
    <li>Who It's For</li>
    <li>Who Else It's For</li>
    <li>It's Also For These People</li>
  </ul>
</div>

export default () => (
  <div className={styles.container}>
    <Grid rows="2">
      <div className={styles.case}>
        <h1>Vendor Security Assessments<br /> and External Audits</h1>
        {PARAGRAPH}
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionLeft}`}>
        <h5>Aptible Comply</h5>
        {BULLET_POINTS}
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionRight}`}>
        <h5>Aptible Deploy</h5>
        {BULLET_POINTS}
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={styles.case}>
        <h1>Audit-Readiness for Security Standards</h1>
        {PARAGRAPH}
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionLeft}`}>
        <h5>Aptible Comply</h5>
        {BULLET_POINTS}
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionRight}`}>
        <h5>Aptible Deploy</h5>
        {BULLET_POINTS}
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={styles.case}>
        <h1>Audit-Readiness for Regulatory Compliance (HIPAA, GDPR)</h1>
        {PARAGRAPH}
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionLeft}`}>
        <h5>Aptible Comply</h5>
        {BULLET_POINTS}
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionRight}`}>
        <h5>Aptible Deploy</h5>
        {BULLET_POINTS}
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={styles.case}>
        <h1>Security Awareness</h1>
        {PARAGRAPH}
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionLeft}`}>
        <h5>Aptible Comply</h5>
        {BULLET_POINTS}
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionRight}`}>
        <h5>Aptible Deploy</h5>
        {BULLET_POINTS}
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Grid rows="2">
      <div className={styles.case}>
        <h1>Internal Audits</h1>
        {PARAGRAPH}
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionLeft}`}>
        <h5>Aptible Comply</h5>
        {BULLET_POINTS}
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionRight}`}>
        <h5>Aptible Deploy</h5>
        {BULLET_POINTS}
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>
  </div>
);
