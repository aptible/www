import React from 'react';
import styles from './UseCases.module.css';
import { Grid } from '../grid/Grid';
import Button from '../buttons/Button';
import Quote from './Quote';

export default () => (
  <div className={styles.container}>
    <Grid rows="3">
      <div className={styles.case} id="vendor-security-assessments">
        <h1>
          Vendor Security Assessments
          <br /> and External Audits
        </h1>
        <p className="XL">
          Early stage companies are now seeing deals delayed becasue they have
          to answer long VSAs and prove their security position to prospective
          customers  rather than focusing resources on growing their business.
        </p>
        <p className="XL">
          Aptible Comply and Deploy give you the tools you need to speak
          fluently about your security program to customers and external
          auditors. 
        </p>
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopLeft}`}>
        <h5>Aptible Comply</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>Exportable documents</li>
          <li>Gap assessments</li>
          <li>Operational guidance</li>
          <li>Support from compliance experts</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomLeft}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies who need to answer VSAs</li>
          <li>Startups without a security team</li>
          <li>Companies who need to prove compliance</li>
        </ul>
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopRight}`}>
        <h5>Aptible Deploy</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>Automated Regulatory Compliance</li>
          <li>Automated Audit Reports</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomRight}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies who need to answer VSAs</li>
          <li>Startups who need to focus on development</li>
          <li>Companies without a security team</li>
        </ul>
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Quote />

    <Grid rows="2">
      <div className={styles.case} id="security-standards">
        <h1>Audit-Readiness for Security Standards</h1>
        <p className="XL">
          You need more time and expertise than you have to ensure audit-readiness.
          Devoting resources to security distracts from development and growth
          efforts.
        </p>
        <p className="XL">
          Aptible Comply and Deploy offer the most comprehensive solution to
          achieving information security standards.
        </p>
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopLeft}`}>
        <h5>Aptible Comply</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>Security program and policy design</li>
          <li>ISO 27001 & SOC 2 frameworks</li>
          <li>Automated mapping</li>
          <li>Support from compliance experts</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomLeft}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Startups who need to prove their security position</li>
          <li>Companies looking to shorten their sales cycle</li>
          <li>Teams trying to protect customer data</li>
        </ul>
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopRight}`}>
        <h5>Aptible Deploy</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>ISO 27001 & SOC 2 Compliance</li>
          <li>2-Factor Authentication</li>
          <li>Role-based Access Controls</li>
          <li>SRE Team Monitoring and Response</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomRight}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Startups who need to deploy audit-ready apps</li>
          <li>Companies that need to focus on development and sales</li>
          <li>Startups who need to pass audits without a security team</li>
        </ul>
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Quote />

    <Grid rows="2">
      <div className={styles.case} id="regulatory-compliance">
        <h1>Audit-Readiness for Regulatory Compliance (HIPAA, GDPR)</h1>
        <p className="XL">
          You have to be able to show proof that you're in compliance with
          regulations which can be a time consuming and complex process that
          requires a fair amount of compliance knowledge.
        </p>
        <p className="XL">
          Aptible Comply and Deploy give you the tools you need to speak fluently
          about your security program to customers and external auditors.
        </p>
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopLeft}`}>
        <h5>Aptible Comply</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>HIPAA & GDPR frameworks</li>
          <li>Complete audit preparation</li>
          <li>Bespoke training and support</li>
          <li>Document Exports</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomLeft}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies selling into a regluated industry</li>
          <li>Companies selling to customers doing business in the EU</li>
          <li>Companies looking to protect customer data</li>
        </ul>
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopRight}`}>
        <h5>Aptible Deploy</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>HIPAA & GDPR compliance</li>
          <li>Audit Logging</li>
          <li>Business Associate Agreements</li>
          <li>Industry-standard PHI safeguards.</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomRight}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies selling to customers in Healthcare</li>
          <li>Companies dealing with senstive data</li>
          <li>Startups building apps that collect customer data</li>
        </ul>
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Quote />

    <Grid rows="2">
      <div className={styles.case} id="security-awareness">
        <h1>Security Awareness</h1>
        <p className="XL">
          You can't risk being &ldquo;bad&rdquo; at security. It hurts customer
          trust and puts sensitive data at risk.
        </p>
        <p className="XL">
          Aptible comply and deploy empower your existing workforce to take
          ownership over your security management program.
        </p>
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopLeft}`}>
        <h5>Aptible Comply</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>Built-in training</li>
          <li>Live Workshops</li>
          <li>Security Reviews</li>
          <li>Risk Management</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomLeft}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies searching for thier first security hire</li>
          <li>Startups trying to enhance their security</li>
          <li>Companies looking to train their workforce on security and compliance</li>
        </ul>
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopRight}`}>
        <h5>Aptible Deploy</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomRight}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies without a security team</li>
          <li>Companies dealing with senstive data</li>
          <li>Startups building apps that collect customer data</li>
        </ul>
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Quote />

    <Grid rows="2">
      <div className={styles.case} id="internal-audits">
        <h1>Internal Audits</h1>
        <p className="XL">
          It can be hard to know exactly what to do to improve. Internal audits
          are critical to understanding and addressing vulnerabilities.
        </p>
        <p className="XL">
          Aptible Comply and Deploy empower your existing workforce to take
          ownership over your security management program.
        </p>
        <hr />
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopLeft}`}>
        <h5>Aptible Comply</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>Implementation roadmap</li>
          <li>Operational guidance</li>
          <li>Advice from compliance experts</li>
          <li>Exportable documentation</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomLeft}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies looking to pass their first audit</li>
          <li>Startups looking to sell to regulated industries</li>
          <li>Companies needing help running a security management program</li>
        </ul>
        <Button to="/comply/">Learn More</Button>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionTopRight}`}>
        <h5>Aptible Deploy</h5>
        <h6 className="small">Features</h6>
        <ul>
          <li>Audit Reports</li>
          <li>Log Collection and Backup</li>
          <li>Vulnerabliltiy Scanning</li>
          <li>Host-based Intrusion Detection and Incident response</li>
        </ul>
      </div>

      <div className={`${styles.caseSolution} ${styles.caseSolutionBottomRight}`}>
        <h6 className="small">Who It's For</h6>
        <ul>
          <li>Companies that need to achieve and maintain security and compliance</li>
          <li>Startups who need to prove their security position</li>
        </ul>
        <Button to="/deploy/">Learn More</Button>
      </div>
    </Grid>

    <Quote />
  </div>
);
