import React from 'react';
import Accordion from '../shared/Accordion';
import styles from './Values.module.css';

const items = [
  {
    title: 'Commitment to the Team',
    content: <p className="L">
      Aptible Comply and Deploy gives you the tools you need to speak fluently
      about your security program to customers and external auditors.
    </p>
  },
  {
    title: 'Commitment to Each Other',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Commitment to The Mission',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Growth Over Perfection',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Teaching as Learning',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Taking vs Giving Responsibility',
    content: <p className="L">Content goes here.</p>
  },
  {
    title: 'Asking Why',
    content: <p className="L">Content goes here.</p>
  },
];

export default () => (
  <div className={styles.useCases}>
    <Accordion
      title="Our Values"
      description="We operate according to these values. Sound like something you care about?"
      linkText="See Job Openings"
      linkTo="/use-cases/"
      items={items} />
  </div>
);
