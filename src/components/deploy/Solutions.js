import React from 'react';
import styles from './Solutions.module.css';
import cn from 'classnames';
import zeroConfigImg from '../../images/home/illustrations/solution-devops.svg';
import auditReadyImg from '../../images/home/illustrations/solution-audit-readiness.svg';
import securityImg from '../../images/home/illustrations/solution-security.svg';
import allBadges from '../../images/home/illustrations/all-badges.svg';
import securitySupportingImage from '../../images/home/illustrations/security-supporting-image.png';
import devOpsSupportingImage from '../../images/home/illustrations/devops-supporting-logos.png';

const Solution = ({ id, title, description, primaryImage, supportingImage, features }) => (
  <div className={styles.solution} id={id}>
    <div className={styles.solutionHeading}>
      <div className={styles.solutionTitle}>
        <h1>{title}</h1>
        <p className="XL">{description}</p>
      </div>

      <div className={styles.solutionSupportingImage}>{supportingImage}</div>
    </div>

    <div className={styles.solutionMain}>
      <div className={styles.solutionPrimaryImage}>{primaryImage}</div>
      <div className={styles.solutionFeatures}>
        {features.map(feature =>
          <Feature {...feature} />   
        )}
      </div>
    </div>
  </div>    
)

const Feature = ({ title, description }) => (
  <div className={styles.feature}>
    <h6 className={styles.featureTitle}>{title}</h6>
    <p className={styles.featureDescription}>{description}</p>
  </div>
)

const features = {
  audit: [
    {
      title: 'Ensure Compliance from Day 1',
      description: 'Deploy automates and continuously monitors all of the infrastructure controls required to safely handle sensitive or regulated data. '
    },
    {
      title: 'Built-in Encryption & Audit Logging',
      description: 'Aptible implements everything you need to meet encryption requirements so your Databases, traffic, and certificates are secure.'
    },
    {
      title: 'Automated Business Continuity',
      description: 'You get automatic backups of your data every 24 hours. You can trigger a manual backup at any time, and restore in a few clicks.'
    }
  ],
  security: [
    {
      title: 'Vulnerability Scanning',
      description: 'Networks are scanned each month and the Aptible Security Team remediates any adverse findings without your intervention. Aptible also continuously scans your Docker images for vulnerable system packages.'
    },
    {
      title: 'Network and Host Defense',
      description: 'Aptible host systems are hardened to limit potential attack surfaces.  Aptible also monitors underlying EC2 instances for potential intrusions and the Aptible Security Team responds on your behalf 24/7 as issues arise.'
    },
    {
      title: 'Auditable Access Management',
      description: 'Simple, role-based permissions govern your team’s access to your infrastructure and Aptible’s log drains capture all SSH and platform activity. '
    }
  ],
  devops: [
    {
      title: 'Zero-downtime Deployment',
      description: 'Deploy from a Docker image registry, have Aptible build an image for you from your code, or use the Aptible Terraform provider.'
    },
    {
      title: 'Container Scaling & High Availability',
      description: 'Scale your app and database containers, both horizontally and vertically. Containers are automatically geo-distributed for high availability.'
    },
    {
      title: 'SRE Team Monitoring & Response',
      description: 'The Aptible SRE Team monitors your infrastructure 24/7 and responds to host and network incidents on your behalf.'
    }
  ]
}

export default () => (
  <div className={styles.container} id="solutions">
    <Solution
      id="solution-audit-readiness"
      title="Instant Compliance and Audit-readiness"
      description="Complete audits faster with well-documented controls, clear audit trails for third parties, and all of the security and compliance features you need get certified."
      primaryImage={<img src={auditReadyImg} alt="Aptible Audit Readiness dashboard showing status of HIPAA, HITRUST, SOC 2 Type 2, and ISO 27001 Audit Readiness" />}
      supportingImage={<img src={allBadges} alt="List of target frameworks that Aptible addresses. HIPAA, HITRUST, SOC 2, ISO 27001" />}
      features={features['audit']} />
    <Solution
      id="solution-security-first"
      title="Security-first Cloud Infrastructure"
      description="Get a security operations center out of the box with managed host intrusion detection, vulnerability scanning, network anomaly monitoring, and more."
      primaryImage={<img src={securityImg} alt="Aptible Security Controls dashboard showing status of PaaS Security Controls" />}
      supportingImage={<img src={securitySupportingImage} alt="List of target frameworks that Aptible addresses. HIPAA, HITRUST, SOC 2, ISO 27001" />}
      features={features['security']} />
    <Solution
      id="solution-automated-devops"
      title="Zero-configuration DevOps"
      description="Can’t spend hours a day on DevOps? Aptible automatically manages and monitors infrastructure, scaling up easily as your capacity demands increase."
      primaryImage={<img src={zeroConfigImg} alt="Aptibles Container Dashboard. Horizontal and Vertical scaling of your Docker containers on Aptible." />}
      supportingImage={<img src={devOpsSupportingImage} alt="List of target frameworks that Aptible addresses. HIPAA, HITRUST, SOC 2, ISO 27001" />}
      features={features['devops']} />
  </div>
);
