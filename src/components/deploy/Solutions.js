import React from 'react';
import styles from './Solutions.module.css';
import { Link } from 'gatsby';
import zeroConfigImg from '../../images/home/illustrations/solution-devops.svg';
import auditReadyImg from '../../images/home/illustrations/solution-audit-readiness.svg';
import securityImg from '../../images/home/illustrations/solution-security.svg';
import allBadges from '../../images/home/illustrations/all-badges.svg';
import securitySupportingImage from '../../images/home/illustrations/security-supporting-image.png';
import devOpsSupportingImage from '../../images/home/illustrations/devops-supporting-logos.png';
import buttonStyles from '../buttons/Button.module.css';

const Solution = ({
  id,
  title,
  description,
  primaryImage,
  supportingImage,
  features,
  learnMore,
}) => (
  <div className={styles.solution} id={id}>
    <div className={styles.solutionHeading}>
      <div className={styles.solutionTitle}>
        <h1>{title}</h1>
        <p className="XL">{description}</p>
      </div>

      <div className={styles.solutionSupportingImage}>{supportingImage}</div>
    </div>

    <div className={styles.solutionMain}>
      <div className={styles.solutionPrimaryImage}>
        {primaryImage}
        <div className={styles.learnMore}>
          <Link className={buttonStyles.button} to={`/solutions/${learnMore}`}>
            Learn More
          </Link>
        </div>
      </div>
      <div className={styles.solutionFeatures}>
        {features.map(feature => (
          <Feature {...feature} />
        ))}
      </div>
    </div>
  </div>
);

const Feature = ({ title, description }) => (
  <div className={styles.feature}>
    <h6 className={styles.featureTitle}>{title}</h6>
    <p className={styles.featureDescription}>{description}</p>
  </div>
);

const features = {
  audit: [
    {
      title: 'Deploy a HIPAA-Compliant App',
      description:
        'Aptible’s HIPAA-compliant App and Database hosting frees your engineering team to focus on innovation--and not compliance--by providing you with all of the security and compliance controls required to safely store or process HIPAA-protected health information.',
    },
    {
      title: 'Accelerate Your HITRUST CSF Certification',
      description:
        'Get to HITRUST Audit-Readiness faster by hosting your Application and Database on an Aptible dedicated stack. Once deployed on Aptible, your team will save hours on HITRUST audit prep by seamlessly inheriting dozens of security controls from Aptible’s own HITRUST CSF Validated Assessment.',
    },
    {
      title: 'Get SOC 2 Type 2 Certified',
      description:
        'Accelerate your time to SOC 2 Audit-readiness by using Aptible to host your application and database infrastructure. Once deployed on Aptible, passing your SOC 2 audit is faster than ever as your security team will enjoy easy access to Aptible’s infrastructure control monitoring and evidence.',
    },
  ],
  security: [
    {
      title: 'Automate Vulnerability Management',
      description:
        'Remove the work of architecting your infrastructure for secure development, and abstract away the drudgery of constantly scanning and remediating your host and network for vulnerabilities with Aptible’s built-in and fully managed network and host vulnerability management.',
    },
    {
      title: 'Harden Your Network Security',
      description:
        'Develop and launch applications in a network that’s fully protected through a series of mechanisms and controls thoughtfully implemented for defense-in-depth network security.',
    },
    {
      title: 'Simplify Identity and Access Management (IAM)',
      description:
        'Aptible minimizes access issues and protects user accounts by simplifying access management of your infrastructure.',
    },
  ],
  devops: [
    {
      title: 'Reliably Deploy your Docker App Without Risk or Downtime',
      description:
        'Choose the deployment option that works best for you, be it having Aptible build a Docker image from your code to run, or deploying from an existing image registry like AWS ECR and DockerHub.',
    },
    {
      title: 'Monitor and Scale Your App On-Demand',
      description:
        "As your App's usage grows, Aptible scales with you. Aptible helps you to monitor container metrics and scale your infrastructure on-demand without ever having to worry about any underlying configurations or constraints.",
    },
    {
      title: 'Minimize Downtime And Deliver High Availability',
      description:
        'Ensure your end users never have to experience a moment of downtime with Aptible providing you with all the required features to ensure high availability, with a guaranteed SLA of 99.95%',
    },
  ],
};

export default () => (
  <div className={styles.container} id="solutions">
    <Solution
      id="solution-audit-readiness"
      title="Prove Compliance With HIPAA and Pass Security Audits"
      description="Aptible saves you valuable engineering time by implementing and managing the operation of all the infrastructure security controls required to satisfy a variety of regulations and security frameworks such as HIPAA, HITRUST, and SOC 2 Type 2. Using Aptible means you'll be compliant and audit-ready from day one."
      primaryImage={
        <img
          src={auditReadyImg}
          alt="Aptible Audit Readiness dashboard showing status of HIPAA, HITRUST, and SOC 2 Type 2 Audit Readiness"
        />
      }
      supportingImage={
        <img
          src={allBadges}
          alt="List of target frameworks that Aptible addresses. HIPAA, HITRUST, and SOC 2 Type 2"
        />
      }
      learnMore="hipaa-hitrust-soc2-compliant-hosting"
      features={features['audit']}
    />
    <Solution
      id="solution-security-first"
      title={<>Get To Market Faster Without Compromising on Security</>}
      description="Deliver digital products in the fastest time possible while keeping your sensitive data safe, secure, and available—24x7 through fully-managed infrastructure security controls."
      primaryImage={
        <img
          src={securityImg}
          alt="Aptible Security Controls dashboard showing status of PaaS Security Controls"
        />
      }
      supportingImage={
        <img
          src={securitySupportingImage}
          alt="List of target frameworks that Aptible addresses. HIPAA, HITRUST, and SOC 2 Type 2"
        />
      }
      learnMore="secure-cloud-infrastructure"
      features={features['security']}
    />
    <Solution
      id="solution-automated-devops"
      title="Enjoy Reliable, Failsafe DevOps Without the Overhead"
      description="Aptible fully manages and monitors your infrastructure, scaling to your needs as you grow so your team can focus on building great products without ever having to think about infrastructure."
      primaryImage={
        <img
          src={zeroConfigImg}
          alt="Aptibles Container Dashboard. Horizontal and Vertical scaling of your Docker containers on Aptible."
        />
      }
      supportingImage={
        <img
          src={devOpsSupportingImage}
          alt="List of target frameworks that Aptible addresses. HIPAA, HITRUST, and SOC 2 Type 2"
        />
      }
      learnMore="reliable-devops"
      features={features['devops']}
    />
  </div>
);
