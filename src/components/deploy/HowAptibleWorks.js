import React from 'react';
import WistiaVideo from '../shared/WistiaVideo';
import styles from './HowAptibleWorks.module.css';
import cn from 'classnames';

const steps = [
  [
    {
      id: '01',
      title: 'Deploy Your app',
      text: 'Point the platform at an existing Docker image to deploy containers automatically, or let Aptible build Docker images for you.'
    },
    {
      id: '02',
      title: 'Provision a Database',
      text: 'Quickly provision a database by picking a type and footprint and letting Aptible do the rest. Get your credentials instantly and resize the container and disk anytime.'
    },
    {
      id: '03',
      title: 'Configure Your Environment',
      text: 'Aptible natively supports 12-factor apps—just provide a list of environment variables and Aptible will securely store and make them available.'
    }
  ],
  [
    {
      id: '04',
      title: 'Establish Encrypted Endpoints',
      text: 'Add an endpoint and Aptible will provision and configure a load balancer that includes SSL termination. You’ll get a hostname back you can use to create a CNAME or send traffic there directly.'
    },
    {
      id: '05',
      title: 'Access Your Logs',
      text: 'Access your logs in real-time via the Aptible CLI. For long-term storage or more advanced use cases, configure a Log Drain to deliver your logs via Syslog or HTTPS.'
    },
    {
      id: '06',
      title: 'Pass Audits',
      text: 'Aptible automates the design and operation of all of your infrastructure’s security controls. Evidence of your controls\' performance is made available directly in your Aptible Dashboard.'
    }
  ]
]


const Step = ({ id, title, text }) => (
  <div className={styles.step}>
    <p className={cn('L-bold', styles.stepId)}>{id}</p>
    <p className={cn('L-bold', styles.stepTitle)}>{title}</p>
    <p className={cn('L', styles.stepDescription)}>{text}</p>
  </div>
)

export default () => (
  <div className={styles.container} id="how-aptible-works">
    <div className={styles.heading}>
      <div className={styles.intro}>
        <h2>How Aptible Works</h2>
        <p className='XL'>Aptible is a Docker-based Platform-as-a-Service that helps you go from code to cloud without ever worrying about managing servers.</p>
      </div>
      <div className={styles.videoContainer}>
        <WistiaVideo videoId="somm4d44rt" />
      </div>
    </div>

    <div className={styles.steps}>
      {steps.map((stepRow, i) => (
        <div key={`step-row-${i}`} className={styles.stepRow}>
          {stepRow.map((step, k) => (
            <Step key={`step-${i}-${k}`} {...step} />
          ))}
        </div>
      ))}
    </div>
  </div>
);
