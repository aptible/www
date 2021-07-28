import React from 'react';
import cn from 'classnames';
import styles from './Solution.module.css';
import { Helmet } from 'react-helmet';
import ZeroTo from '../../components/footer/ZeroTo';
import { Grid } from '../../components/grid/Grid';
import Nav from '../../components/shared/Nav';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import LeadForm from '../../components/lead-form';
import CenteredDemoForm from '../../components/deploy/CenteredDemoForm';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import securityImage from '../../images/solutions/security-controls.svg';
import pagerLogo from '../../images/customers/logos/pager-logo.png';
import pagerBranded from '../../images/solutions/pager-branded-panel.png';
import healthCatalstLogo from '../../images/customers/logos/health-catalyst.png';
import healthcatalystBranded from '../../images/solutions/health-catalyst-branded-panel.png';
import medicalMemoryLogo from '../../images/customers/logos/medical-memory-logo.png';
import medicalMemoryBranded from '../../images/solutions/medical-memory-branded.png';

const stickyNavItems = [
  { title: 'Automate Host Security', ref: '#host' },
  { title: 'Secure Your Network', ref: '#network' },
  { title: 'Simplify IAM', ref: '#iam' },
  { title: 'Audit Your Infrastructure', ref: '#audit' },
  { title: 'Rest Easy with 24/7 Security and SRE Support', ref: '#support' },
];

const LEAD_FORM_ID =
  'Fully-Managed Security for Your Cloud Infrastructure | Solution';

const vulnSteps = [
  [
    {
      id: '01',
      title: 'Managed Kernel Patching',
      text:
        'The Aptible Security Team patches kernel vulnerabilities and other host- and network-level issues on your behalf.',
    },
    {
      id: '02',
      title: 'Host Hardening',
      text:
        'Aptible host operating systems are hardened to disable unnecessary services and limit surface area for attacks.',
    },
    {
      id: '03',
      title: 'Managed Host Vulnerability Scans',
      text:
        'The Aptible Security Team scans a master reference stack each month and remediates adverse findings on your behalf.',
    },
  ],
  [
    {
      id: '04',
      title: 'Docker Image Vulnerability Scans',
      text:
        'The Aptible Platform proactively scans your Docker images for vulnerable system packages and alerts you of any addressable vulnerabilities.',
    },
    {
      id: null,
      title: null,
      text: null,
    },
    {
      id: null,
      title: null,
      text: null,
    },
  ],
];

const networkSteps = [
  [
    {
      id: '01',
      title: 'Secure Network Architecture',
      text:
        'Network access to public-facing EC2 instances is configured via Security Group rules that are reviewed and enforced by the Aptible Security Team on a regular basis.',
    },
    {
      id: '02',
      title: 'Segregation of Networks',
      text:
        'Your infrastructure on Aptible is isolated to its own private VPC.',
    },
    {
      id: '03',
      title: 'DDoS Protection',
      text:
        'Aptible network architecture ensures that the EC2 instances running your applications are not accessible from the Internet, and cannot be targeted directly by a DDoS attack.',
    },
  ],
  [
    {
      id: '04',
      title: 'Endpoint IP Filtering',
      text:
        'Aptible makes it easy to restrict access to your apps and databases to a set of whitelisted IP addresses or networks, and block other incoming traffic.',
    },
    {
      id: '05',
      title: 'Managed VPNs',
      text:
        'Aptible can help you integrate with partners or connect privately to your Aptible dedicated stacks using Managed IPsec VPNs.',
    },
    {
      id: '06',
      title: 'VPC Peering',
      text:
        'Connect your Aptible dedicated stack to other AWS VPCs in the same region.',
    },
  ],
];

const iamSteps = [
  [
    {
      id: '01',
      title: 'Simplified Identity and Access Management (IAM)',
      text:
        'Aptible simplifies infrastructure identity and access management by providing simple role-based permissioning to your stack.',
    },
    {
      id: '02',
      title: 'Multi-factor Authentication',
      text:
        'Aptible supports protecting your accounts with both token-based 2FA or FIDO U2F security keys.',
    },
    {
      id: '03',
      title: 'Single Sign-on',
      text:
        "Seamlessly manage your team's access to your Aptible account by enrolling Aptible with your SSO provider.",
    },
  ],
];

const auditSteps = [
  [
    {
      id: '01',
      title: 'Managed Host Intrusion Detection',
      text:
        'The Aptible Security Team monitors the underlying EC2 instances in your stack for potential intrusions and responds on your behalf 24/7.',
    },
    {
      id: '02',
      title: 'SSH Activity Logging',
      text:
        'The Aptible Security Team monitors the underlying EC2 instances in your stack for potential intrusions and responds on your behalf 24/7.',
    },
    {
      id: '03',
      title: 'Operation Activity Logging',
      text:
        'The Aptible Security Team monitors the underlying EC2 instances in your stack for potential intrusions and responds on your behalf 24/7.',
    },
  ],
  [
    {
      id: '04',
      title: 'Configuration Drift Protection',
      text:
        'Aptible ensures that the configuration of your environment is hardened to avoid unintentional or unapproved configuration changes.',
    },
  ],
];

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>
        Aptible | Fully-Managed Security for your Cloud Infrastructure
      </title>
      <meta
        name="description"
        content="Aptible saves your engineering team time and
                 effort by automating the design and operation
                 of all of the infrastructure controls required
                 to satisfy a variety of regulations and security
                 frameworks such as HIPAA, HITRUST, and SOC 2
                 Type 2."
      />
    </Helmet>
    
    <Nav items={stickyNavItems} />

    <Grid>
      <div className={styles.container}>
        <div className={styles.heroItem}>
          <h4>Why Aptible</h4>
          <h1 className="hero">
            Fully-Managed Security for Your Cloud Infrastructure
          </h1>
        </div>

        <div className={styles.heroItem}>
          <p className="XL">
            Deliver digital products in the fastest time possible while keeping
            your sensitive data safe, secure, and available—24x7 through
            fully-managed infrastructure security controls.
          </p>
        </div>

        <div className={cn(styles.heroItem, styles.leadContainer)}>
          <LeadForm id={LEAD_FORM_ID} />
        </div>

        <div className={styles.heroItem}>
          <img
            src={securityImage}
            alt="Security Readiness dashboard on Aptible"
          />
        </div>
      </div>
    </Grid>

    <Grid>
      <div className={styles.features}>
        <div className={styles.block} id="host">
          <Feature
            title="Automate Vulnerability Management of Your Cloud Infrastructure"
            description="Remove the work of architecting your infrastructure for secure
                         development, and abstract away the drudgery of constantly
                         scanning and remediating your host and network for vulnerabilities
                         with Aptible’s built-in and fully managed network and host
                         vulnerability management."
            smallImage={null}
            heroImage={null}
            steps={vulnSteps}
          />
        </div>

        <div className={styles.block} id="network">
          <Feature
            title="Harden Your Network Security"
            description="Develop and launch applications in a network that’s fully protected
                         through a series of mechanisms and controls thoughtfully implemented for defense-in-depth network security."
            smallImage={null}
            heroImage={null}
            steps={networkSteps}
          />
        </div>

        <div className={styles.block}>
          <Testimonial
            quote="Aptible provides us a robust and secure platform to build our technology on--it's saved us tons of money and time."
            author="Sameer Khanna"
            title="VP of Engineering"
            company="Pager"
            url="https://pager.com/"
            logo={pagerLogo}
            image={pagerBranded}
          />
        </div>

        <div className={styles.block} id="iam">
          <Feature
            title="Simplify Identity and Access Management (IAM) for Your Infrastructure"
            description="Aptible minimizes access issues by simplifying access management of your infrastructure."
            smallImage={null}
            heroImage={null}
            steps={iamSteps}
          />
        </div>

        <div className={styles.block} id="iam">
          <Testimonial
            quote={
              <>
                I rely on the experts at Aptible to ensure the system is secure.
                I've even had potential clients start their security review with
                "who is your hosting provider?" and when we answer "Aptible"
                they respond "Oh yes, that's a good start.
              </>
            }
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
            title="Don't reinvent infrastructure security--use Aptible instead."
            body="See how using Aptible can help get your product to market faster without
                  compromising on security."
            leadFormId={LEAD_FORM_ID}
          />
        </div>

        <div className={styles.block} id="audit">
          <Feature
            title="Audit Your Cloud Infrastructure with Confidence"
            description="Aptible's Security Team monitors your infrastructure for and responds to potential
                         threats so you don't have to and your team's operational and SSH
                         activity is streamed to your logging service for additional analysis."
            smallImage={null}
            heroImage={null}
            steps={auditSteps}
          />
        </div>

        <div className={styles.block}>
          <Testimonial
            quote="I'm not sure what we would do without Aptible. We would have to hire 3 more
                   people and we still would not have the high level of support and tooling
                   that Aptible provides."
            author="Mark Siemers"
            title="Software Engineering Manager"
            company="Health Catalyst"
            url="https://www.healthcatalyst.com/"
            logo={healthCatalstLogo}
            image={healthcatalystBranded}
          />
        </div>

        <div className={styles.block}>
          <CenteredDemoForm
            title="Don't reinvent infrastructure security--use Aptible instead."
            body="See how using Aptible can help get your product to market faster
                  without compromising on security."
            leadFormId={LEAD_FORM_ID}
          />
        </div>

        <div className={styles.block} id="support">
          <Feature
            title="Gain Peace of Mind With Aptible's Security and SRE Support 24/7"
            description="Have the confidence to quickly develop and launch secure apps
                        and databases with a world-class team of reliability and security engineers
                        offering you support along the way, all the while constantly
                        scanning and remediating any issues in the underlying infrastructure on your behalf."
            smallImage={null}
            heroImage={null}
            steps={[]}
          />
        </div>
      </div>
    </Grid>
    <ZeroTo />
  </AptibleLayout>
);
