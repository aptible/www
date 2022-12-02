import React from 'react';
import styles from '../deploy/HowAptibleWorks.module.css';
import StepByStep from '../deploy/StepByStep';

const defaultSteps = [
  [
    {
      id: '01',
      title: 'Create, without configuration',
      text:
        'It starts with your ideas, not your infrastructure. Give Aptible your code by integrating your repos or Docker registry and you are up and running in minutes–without configuration or management.',
    },
    {
      id: '02',
      title: 'Launch, without delay',
      text:
        <>Your apps and databases are <strong>production ready</strong> from the moment you deploy them. Launch anything, from a static site to your entire backend, without config changes.</>,
    },
    {
      id: '03',
      title: 'Scale, without compromises',
      text:
        <><p className='L'>Your app and database is ready for any load with unlimited scale. You pay only for the resources you use.</p><p className='L'>Aptible comes with enterprise-grade reliability, engineering-led support, single tenancy and resource isolation, infrastructure portability*, HITRUST and FedRAMP control inheritance*.</p><p className='L'>* Coming 2023</p></>,
    },
  ],
];

const defaultTitle = 'How Aptible Works';
const defaultDescription =
  'Developers love creating apps and databases with Aptible. Companies love scaling with Aptible\'s production-ready, cost-optimized infrastructure.';

export default ({
  steps = defaultSteps,
  title = defaultTitle,
  description = defaultDescription,
}) => (
  <div className={styles.container} id="how-aptible-works">
    <div className={styles.heading}>
      <div className={styles.intro}>
        <h2>{title}</h2>
        <p className="XL">{description}</p>
      </div>
    </div>

    <StepByStep steps={steps} />
  </div>
);
