import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './UseCases.module.css';

const items = [
  {
    title: 'Vendor Security Assessments and External Audits',
    content: <p className="L">
      Aptible Comply and Deploy gives you the tools you need to speak fluently
      about your security program to customers and external auditors.
    </p>
  },
  {
    title: 'Audit Readiness for Security Standards',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Audit Readiness for Regulatory Compliance',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Security Competence',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Internal Audits',
    content: <p className="L">Content goes here.</p>
  },
];

export default () => (
  <div className={styles.useCases}>
    <Accordion
      title="Use Cases"
      description="Meet your audit requirements, and build your team's security competence."
      linkText="See All Use Cases"
      linkTo="/use-cases/"
      items={items} />
  </div>
);
