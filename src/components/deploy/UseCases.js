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
          <ArrowButton to="/" text="See All Use Cases" />
        </div>

        <Card
          bigHeadline="Audit Readiness for Security Standards"
          text="Aptible Comply and Deploy offer the most comprehensive solution to achieving information security standards."
          to="/"
          />

        <Card
          bigHeadline="Security Competence"
          text="You can't risk being 'bad' at security... Aptible Comply and Deploy empower your existing workforce to take ownership over your security management program."
          to="/"
        />
      </div>

      <div className={styles.right}>
        <Card
          bigHeadline="Vendor Security Assessments and External Audits"
          text="Aptible Comply and Deploy offer the most comprehensive solution to achieving information security standards."
          to="/"
        />

        <Card
          bigHeadline="Audit Readiness for Regulatory Compliance"
          text="You can't risk being 'bad' at security... Aptible Comply and Deploy empower your existing workforce to take ownership over your security management program."
          to="/"
        />

        <Card
          bigHeadline="Internal Audits"
          text="You can't risk being 'bad' at security... Aptible Comply and Deploy empower your existing workforce to take ownership over your security management program."
          to="/"
        />
      </div>
    </Grid>
  </div>
);
