import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './UseCases.module.css';

const items = [
  {
    title: 'Vendor Security Assessments and External Audits',
    content: <p className="L">
      Aptible Comply and Deploy give you the tools you need to showcase your
      security program and build trust with customers and external auditors.
    </p>
  },
  {
    title: 'Audit Readiness for Security Standards',
    content: <p className="L">
      Aptible Comply and Deploy offer the most comprehensive solution to ensuring
      that you're prepared for your annual audit.
    </p>
  },
  {
    title: 'Audit Readiness for Regulatory Compliance',
    content: <p className="L">
      Aptible Comply and Deploy give you the tools and guidance you need to
      ensure that you achieve and maintain compliance.
    </p>
  },
  {
    title: 'Security Competence',
    content: <p className="L">
      You can't risk being &ldquo;bad&rdquo; at security&hellip; Aptible Comply and
      Deploy equip your team with the knowledge they need to own your Security
      Management program and build a culture of security.
    </p>
  },
  {
    title: 'Internal Audits',
    content: <p className="L">
      Aptible Comply and Deploy give you the guidance and resources you need to
      be able to test and maintain your security position.
    </p>
  },
];

export default () => (
  <div className={styles.useCases}>
    <Accordion
      title="Use Cases"
      description="Meet your audit requirements and build a true culture of security."
      linkText="See All Use Cases"
      linkTo="/use-cases/"
      items={items} />
  </div>
);
