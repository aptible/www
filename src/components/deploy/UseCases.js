import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './UseCases.module.css';
import ArrowButton from '../buttons/ArrowButton';
import Card from '../shared/Card';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.left}>
        <div className={styles.seeAll}>
          <h3>Satisfy Your<br />Security Requirements</h3>
          <ArrowButton to="/use-cases/" text="See All Use Cases" />
        </div>

        <Card
          bigHeadline="Audit Readiness for Security Standards"
          text="Aptible Deploy offers the most comprehensive solution to achieving information security standards when depoying an application."
          to="/use-cases/#security-standards"
          />

        <Card
          bigHeadline="Security Competence"
          text="You can't risk being &ldquo;bad&rdquo; at security&hellip; Aptible Deploy empowers you with best-in class security controls so you can pass regulatory and customer audits and be confident in your compliance."
          to="/use-cases/#security-awareness"
        />
      </div>

      <div className={styles.right}>
        <Card
          bigHeadline="Vendor Security Assessments and External Audits"
          text="Aptible Deploy gives you the tools you need and the confidence to speak fluently about your security program to customers and external auditors."
          to="/use-cases/#vendor-security-assessments"
        />

        <Card
          bigHeadline="Audit Readiness for Regulatory Compliance"
          text="Aptible Deploy gives you the tools you need to ensure that your application achieves and maintiains compliance."
          to="/use-cases/#regulatory-compliance"
        />

        <Card
          bigHeadline="Internal Audits"
          text="Aptible Deploy gives you the tools and services you need to be able to test and maintain your security position."
          to="/use-cases/#internal-audits"
        />
      </div>
    </Grid>
  </div>
);
