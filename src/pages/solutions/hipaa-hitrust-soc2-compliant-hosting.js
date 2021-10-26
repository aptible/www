import React from 'react';
import cn from 'classnames';
import styles from './Solution.module.css';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Grid } from '../../components/grid/Grid';
import ZeroTo from '../../components/footer/ZeroTo';
import Nav from '../../components/shared/Nav';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import SignupForm from '../../components/signup-form';
import CenteredDemoForm from '../../components/deploy/CenteredDemoForm';
import complianceBadges from '../../images/all-compliance-badges-line.svg';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import hipaaComplianceDashboard from '../../images/solutions/hipaa-compliance-dashboard.svg';
import hipaaBadge from '../../images/solutions/hipaa-badge.svg';
import hitrustBadge from '../../images/solutions/hitrust-badge.svg';
import soc2Badge from '../../images/solutions/soc2-badge.svg';
import rightwayLogo from '../../images/customers/logos/rightway-logo.png';
import rightwayBranded from '../../images/solutions/rightway-branded-panel.png';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import mdsaveBranded from '../../images/solutions/mdsave-branded-panel.png';

const stickyNavItems = [
  { title: 'Deploy a HIPAA-compliant App', ref: '#hipaa' },
  { title: 'Expedite HITRUST Certification', ref: '#hitrust' },
  { title: 'Get SOC 2 Certified', ref: '#soc2' },
];

const LEAD_FORM_ID = 'HIPAA - HITRUST - SOC 2 Compliant App Hosting | Solution';

const hipaaSteps = [
  [
    {
      id: '01',
      title: 'Address the HIPAA Security Rule With Confidence',
      text: (
        <>
          Aptible's HIPAA-compliant infrastructure implements all infrastructure
          requirements of the HIPAA security rule from day one.
          <br />
          <br />
          <Link to="/secured-by-aptible">
            View the full set of security controls provided by Aptible.
          </Link>
        </>
      ),
    },
    {
      id: '02',
      title: 'Run Your App on Dedicated Infrastructure',
      text:
        'Your infrastructure on Aptible is isolated into its own private VPC (called a Dedicated Stack) in order to support stringent requirements for isolation and security.',
    },
    {
      id: '03',
      title: 'Govern and Audit Access to PHI',
      text:
        'Aptible is built from the ground-up to support access governance and auditing. Everything from infrastructure operations to SSH session activity is captured and routed to your logging destination for analysis.',
    },
  ],
  [
    {
      id: '04',
      title: 'Execute a Business Associate Agreement',
      text:
        'As a partner and custodian of your HIPAA-protected health information, Aptible will execute a Business Associate Agreement with your company.',
    },
    {
      id: '05',
      title:
        'Monitor Your HIPAA Compliance in Realtime With Readiness Dashboards',
      text:
        'Aptible provides a continuous summary of your infrastructure compliance which includes helpful tips for improving your security and compliance posture on Aptible',
    },
    {
      id: '06',
      title: 'Build Trust with Stakeholders and Customers',
      text:
        'Aptible makes proving compliance to stakeholders and customers simple by generating Security Summary Reports that detail the design and performance of your infrastructure security controls managed by Aptible.',
    },
  ],
];

const hitrustSteps = [
  [
    {
      id: '01',
      title: 'Run on HITRUST CSF-Certified App and Database Infrastructure',
      text: (
        <>
          The design and operational performance of Aptible’s cloud security
          controls have achieved a HITRUST CSF Validated Assessment. &nbsp;
          <a href="https://www.aptible.com/blog/aptible-enclave-and-gridiron-are-hitrust-csf-certified">
            Learn More
          </a>
          <br />
          <br />
          <a href="https://app.conveyor.com/datarooms/ad352ac5-7d3b-4097-a1ac-894e34b4cba9">
            Download Aptible’s HITRUST CSF Certification Letter
          </a>
        </>
      ),
    },
    {
      id: '02',
      title: 'Expedite Your HITRUST CSF Certification',
      text:
        'Save time on your own HITRUST Certification by inheriting dozens of controls from Aptible’s HITRUST CSF assessment scores.',
    },
    {
      id: '03',
      title: 'Prepare for Your HITRUST CSF Certification',
      text:
        "Aptible saves you time on HITRUST audit prep by providing a Readiness Dashboard that yields continuous evidence of your infrastructure's security and compliance.",
    },
  ],
];

const soc2Steps = [
  [
    {
      id: '01',
      title: 'Run on SOC 2 Type 2 Certified App and Database Infrastructure',
      text: (
        <>
          Aptible has achieved SOC 2 Type 2 compliance for the security and
          availability Trust Service Principles. &nbsp;
          <a href="https://app.conveyor.com/datarooms/ad352ac5-7d3b-4097-a1ac-894e34b4cba9">
            Request a copy of our SOC 2 Type 2 Report.
          </a>
        </>
      ),
    },
    {
      id: '02',
      title: 'Continuous SOC 2 Type 2 Control Monitoring',
      text:
        "Aptible saves you time on SOC 2 Type 2 audit prep by providing a Readiness Dashboard that yields continuous evidence of your infrastructure's security and compliance.",
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
      <title>Aptible | HIPAA, HITRUST, and SOC 2 Compliant App Hosting</title>
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
            Prove Compliance With HIPAA and Pass Security Audits
          </h1>
        </div>

        <div className={styles.heroItem}>
          <img
            src={complianceBadges}
            alt="Aptible is HIPAA-compliant, SOC 2 Compliant, and HITRUST Certified"
          />
        </div>

        <div className={styles.heroItem}>
          <p className="XL">
            Aptible saves you valuable engineering time by implementing and
            managing the operation of all the infrastructure security controls
            required to satisfy a variety of regulations and security frameworks
            such as HIPAA, HITRUST, and SOC 2 Type 2. Using Aptible means you'll
            be compliant and audit-ready from day one.
          </p>
        </div>

        <div className={cn(styles.heroItem, styles.leadContainer)}>
          <SignupForm id={LEAD_FORM_ID} />
        </div>
      </div>
    </Grid>

    <Grid>
      <div className={styles.features}>
        <div className={styles.block} id="hipaa">
          <Feature
            title="Deploy a HIPAA-Compliant App"
            description="Aptible’s HIPAA-compliant App and Database hosting frees your engineering team to focus on innovation--and not compliance--by providing you with all of the security and compliance controls required to safely store or process HIPAA-protected health information."
            smallImage={<img src={hipaaBadge} alt="HIPAA Compliant" />}
            heroImage={
              <img
                src={hipaaComplianceDashboard}
                alt="HIPAA Compliant App & Database Hosting"
              />
            }
            steps={hipaaSteps}
          />
        </div>
        <div className={styles.block}>
          <Testimonial
            quote="Aptible helps me sleep better at night. It handles all the DevOps and
                  offers turnkey HIPAA compliance in the cloud. Aptible allows us to feel
                  confident we're able to use the cloud safely with PHI. Everything we
                  need is automatic."
            author="Ion Feldman"
            title="CTO"
            company="Rightway Health"
            url="https://www.rightwayhealthcare.com/"
            logo={rightwayLogo}
            image={rightwayBranded}
          />
        </div>
        <div className={styles.block} id="hitrust">
          <Feature
            title="Accelerate Your HITRUST CSF Certification"
            description="Get to HITRUST Audit-Readiness faster by hosting your Application and Database on an Aptible dedicated stack. Once deployed on Aptible, your team will save hours on HITRUST audit prep by seamlessly inheriting dozens of security controls from Aptible’s existing HITRUST CSF Validated Assessment."
            smallImage={<img src={hitrustBadge} alt="HIPAA Compliant" />}
            heroImage={null}
            steps={hitrustSteps}
          />
        </div>

        <div className={styles.block}>
          <Testimonial
            quote="Aptible enabled us to develop our application more efficiently and to breeze through hospital security audits, saving us effort and speeding up our sales process."
            author="Ryan Aipperspach"
            title="CTO"
            company="MD Save"
            url="https://www.mdsave.com/"
            logo={mdsaveLogo}
            image={mdsaveBranded}
          />
        </div>

        <CenteredDemoForm
          title="Get started today."
          body="Don't spend another minute building for compliance without first talking to Aptible."
          formId={LEAD_FORM_ID}
        />

        <div className={styles.block} id="soc2">
          <Feature
            title="Get SOC 2 Type 2 Certified"
            description="Accelerate your time to SOC 2 Audit-readiness by using Aptible to host your application and database infrastructure. Once deployed on Aptible, passing your SOC 2 audit is faster than ever as your security team will enjoy easy access to Aptible’s infrastructure control monitoring and evidence."
            smallImage={<img src={soc2Badge} alt="HITRUST Certified" />}
            heroImage={null}
            steps={soc2Steps}
          />
        </div>
      </div>
    </Grid>
    <ZeroTo />
  </AptibleLayout>
);
