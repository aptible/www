import React from 'react';
import cn from 'classnames';
import styles from './Solution.module.css';
import { Helmet } from 'react-helmet';
import { Grid } from '../../components/grid/Grid';
import Nav from '../../components/shared/Nav';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import LeadForm from '../../components/lead-form';
import CenteredDemoForm from '../../components/deploy/CenteredDemoForm';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import devOpsImg from '../../images/solutions/devops.svg';
import vidscripLogo from '../../images/customers/logos/vidscip-logo.png';
import vidscripBranded from '../../images/solutions/vidscrip-branded-panel.png';
import glidianLogo from '../../images/customers/logos/glidian-logo.png';
import glidianBranded from '../../images/solutions/gildian-branded-panel.png';
import medicalMemoryLogo from '../../images/customers/logos/medical-memory-logo.png';
import medicalMemoryBranded from '../../images/solutions/medical-memory-branded.png';
import devopsTerminal from '../../images/solutions/devops-deploy-terminal.svg';
import devopsPartners from '../../images/solutions/devops-partners.png';
import devopsUptime from '../../images/solutions/devops-uptime.svg';

const stickyNavItems = [
  { title: 'Deploy With Ease', ref: '#deploy' },
  { title: 'Scale On Demand', ref: '#scale' },
  { title: 'Minimize Downtime', ref: '#availability' },
];

const LEAD_FORM_ID = 'Reliable DevOps Without the Overhead | Solution';

const deploySteps = [
  [
    {
      id: '01',
      title: 'Flexible Deployment Options',
      text:
        'Choose the deployment option that works best for you, be it having Aptible build a Docker image from your code to run, or deploying from an existing image registry like AWS ECR and DockerHub.',
    },
    {
      id: '02',
      title: 'Safely Rollback Deployments When You Need To',
      text:
        'When encountering a failure during a deployment operation, Aptible automatically restores your architecture to the last known good state.',
    },
    {
      id: '03',
      title: 'Integrate Aptible With Your Existing CI/CD',
      text:
        'Automate deployment and resource management in your CI/CD pipelines through developer-friendly CLI commands or by using the Aptible Terraform provider for infrastructure-as-code management.',
    },
  ],
  [
    {
      id: '04',
      title: 'Deploy with Zero Downtime',
      text:
        'Aptible Deployments are optimized for availability by ensuring new containers only go live after passing health checks.',
    },
    {
      id: '05',
      title: 'Provision Major OSS Databases In a Single Click',
      text:
        'Instantly provision and scale Elasticsearch, MongoDB, MySQL, PostgreSQL, RabbitMQ, Redis, or SFTP containers on Aptible.',
    },
    {
      id: null,
      title: null,
      text: null,
    },
  ],
];

const scaleSteps = [
  [
    {
      id: '01',
      title: 'One-click Vertical and Horizontal Container Scaling',
      text:
        'Easily scale your app and database containers, both horizontally and vertically without having to ever worry about capacity availability.',
    },
    {
      id: '02',
      title: 'Zero-configuration Container Metrics',
      text:
        'Easily view container performance metrics like memory and CPU load, database IOPS, and disk usage in the dashboard, or aggregate and analyze them in third-party monitoring tools like Datadog.',
    },
    {
      id: '03',
      title: 'One-click Logging Setup',
      text:
        'Route container logs to logging destinations either in Aptible or externally to third-party providers for review, alerting, and archiving.',
    },
  ],
  [
    {
      id: '04',
      title: 'Deploy with Zero Downtime',
      text:
        'Aptible Deployments are optimized for availability by ensuring new containers only go live after passing health checks.',
    },
    {
      id: '05',
      title: 'Resource-aware Container Scheduling',
      text:
        'As you scale up, Aptible ensures containers are allocated efficiently across your EC2 instances.',
    },
    {
      id: null,
      title: null,
      text: null,
    },
  ],
];

const availabilitySteps = [
  [
    {
      id: '01',
      title: 'High Availability (HA) Container Distribution',
      text:
        'Contaienrs for horizontally-scaled Apps and Databases are automatically deployed across separate AWS Availability Zones, maximizing the availability of your application.',
    },
    {
      id: '02',
      title: 'Automatic Cross-Region Backups',
      text:
        'Aptible takes automatic daily backups of your databases, and distributes those backups across geographically separate regions.',
    },
    {
      id: '03',
      title: 'Simplified Database Replication',
      text:
        'Aptible makes Database replication (PostgreSQL, MySQL, Redis) or clustering (MongoDB) for high-availability setups painless.',
    },
  ],
  [
    {
      id: '04',
      title: 'Automatic Container Recovery',
      text:
        'Containers that exit unexpectedly are restarted automatically, ensuring uptime even if your app crashes.',
    },
    {
      id: '05',
      title: 'Automatic Intermediate Backups',
      text:
        'Aptible automatically enables data integrity controls for database types that support it (e.g. PostgreSQL write-ahead logs; MySQL binary logging; Redis RDB backups; MongoDB journaling, etc).',
    },
    {
      id: null,
      title: null,
      text: null,
    },
  ],
];

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Reliable DevOps Without the Overhead</title>
      <meta
        name="description"
        content="Aptible fully manages and monitors your infrastructure,
                scaling to your needs as you grow so your team can focus
                on building great products without ever having to think about
                infrastructure."
      />
    </Helmet>

    <Nav items={stickyNavItems} />

    <Grid>
      <div className={styles.container}>
        <div className={styles.heroItem}>
          <h4>Why Aptible</h4>
          <h1 className="hero">Reliable DevOps Without the Overhead</h1>
        </div>

        <div className={styles.heroItem}>
          <p className="XL">
            Aptible fully manages and monitors your infrastructure, scaling to
            your needs as you grow so your team can focus on building great
            products without ever having to think about infrastructure.
          </p>
        </div>

        <div className={cn(styles.heroItem, styles.leadContainer)}>
          <LeadForm id={LEAD_FORM_ID} />
        </div>

        <div className={styles.heroItem}>
          <img
            src={devOpsImg}
            alt="Container Management Dashboard in Aptible"
          />
        </div>
      </div>
    </Grid>

    <Grid>
      <div className={styles.features}>
        <div className={styles.block} id="deploy">
          <Feature
            title="Deploy and Manage Your Dockerized App With Ease"
            description="Aptible makes deploying and configuring your Docker app easy and painless."
            smallImage={null}
            heroImage={
              <img
                src={devopsTerminal}
                alt="Result of running Aptible Deploy command"
              />
            }
            steps={deploySteps}
          />
        </div>
        <div className={styles.block}>
          <Testimonial
            quote="Aptible has made it easy for us to manage our infrastructure.
                   We are able to scale and upgrade our app without needing to worry
                   about configuration details and downtime."
            author="Solomon Liu"
            title="Principal Software Engineer"
            company="Glidian Inc"
            url="https://www.glidian.com/"
            logo={glidianLogo}
            image={glidianBranded}
          />
        </div>
        <div className={styles.block} id="scale">
          <Feature
            title="Monitor and Scale Your App On-Demand"
            description="As your App's usage grows, Aptible scales with you. Aptible helps you to monitor container metrics and scale your infrastructure on-demand without ever having to worry about any underlying configurations or constraints."
            smallImage={null}
            heroImage={<img src={devopsPartners} alt="DevOps Partners" />}
            steps={scaleSteps}
          />
        </div>

        <div className={styles.block}>
          <Testimonial
            quote="We literally wouldn't be in business without Aptible. Aptible handles almost 90% of my DevOps requirements. This frees precious developer resources so that they can do what they love to do - develop great software."
            author="Bruce White"
            title="CTO"
            company="Medical Memory"
            url="https://www.themedicalmemory.com/"
            logo={medicalMemoryLogo}
            image={medicalMemoryBranded}
          />
        </div>

        <div className={styles.block}>
          <CenteredDemoForm
            title="Deploy and scale your App on Aptible."
            body="Don't spend another minute building for compliance without first talking to Aptible."
            leadFormId={LEAD_FORM_ID}
          />
        </div>

        <div className={styles.block} id="availability">
          <Feature
            title="Minimize Downtime And Deliver High Availability"
            description="Ensure your end users never have to experience a moment of downtime with Aptible providing you with all the required features to ensure high availability, with a guaranteed SLA of 99.95%"
            smallImage={null}
            heroImage={<img src={devopsUptime} alt='99.95% Uptime dashboard for apps deployed on Aptible'/> }
            steps={availabilitySteps}
          />
        </div>

        <div className={styles.block}>
          <Testimonial
            quote="We've used Aptible to host our application for ~3 years now. During this time we've scaled flexibly, experienced zero down time, and have been privy to tremendous, timely support when we've needed it."
            author="Brian Kuyath"
            title="CTO"
            company="Vidscrip"
            url="https://www.vidscrip.com/"
            logo={vidscripLogo}
            image={vidscripBranded}
          />
        </div>
      </div>
    </Grid>
  </AptibleLayout>
);
