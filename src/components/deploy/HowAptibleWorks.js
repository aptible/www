import React from 'react';
import WistiaVideo from '../shared/WistiaVideo';
import styles from './HowAptibleWorks.module.css';
import StepByStep from './StepByStep';

const defaultSteps = [
  [
    {
      id: '01',
      title: 'Deploy Your app',
      text:
        'Point the platform at an existing Docker image to deploy containers automatically, or let Aptible build Docker images for you.',
    },
    {
      id: '02',
      title: 'Provision a Database',
      text:
        'Quickly provision a database by picking a type and footprint and letting Aptible do the rest. Get your credentials instantly and resize the container and disk anytime.',
    },
    {
      id: '03',
      title: 'Configure Your Environment',
      text:
        'Aptible natively supports 12-factor apps—just provide a list of environment variables and Aptible will securely store and make them available.',
    },
  ],
  [
    {
      id: '04',
      title: 'Establish Encrypted Endpoints',
      text:
        'Add an endpoint and Aptible will provision and configure a load balancer that includes SSL termination. You’ll get a hostname back you can use to create a CNAME or send traffic there directly.',
    },
    {
      id: '05',
      title: 'Access Your Logs',
      text:
        'Access your logs in real-time via the Aptible CLI. For long-term storage or more advanced use cases, configure a Log Drain to deliver your logs via Syslog or HTTPS.',
    },
    {
      id: '06',
      title: 'Pass Audits',
      text:
        "Aptible automates the design and operation of all of your infrastructure’s security controls. Evidence of your controls' performance is made available directly in your Aptible Dashboard.",
    },
  ],
];

const defaultTitle = 'How Aptible Works';
const defaultDescription =
  'Aptible is a Docker-based Platform-as-a-Service that helps you go from code to cloud without ever worrying about managing servers.';

export default ({
  steps = defaultSteps,
  title = defaultTitle,
  description = defaultDescription,
  includeVideo = true,
}) => (
  <div className={styles.container} id="how-aptible-works">
    <div className={styles.heading}>
      <div className={styles.intro}>
        <h2>{title}</h2>
        <p className="XL">{description}</p>
      </div>
      {includeVideo && (
        <div className={styles.videoContainer}>
          <WistiaVideo videoId="vesrt04o10" />
        </div>
      )}
    </div>

    <StepByStep steps={steps} />
  </div>
);
