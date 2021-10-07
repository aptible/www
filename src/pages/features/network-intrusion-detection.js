import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import FeaturePageHero from '../../components/deploy/FeaturePageHero';
import FeaturePageFeatureList from '../../components/deploy/FeaturePageFeatureList';
import Feature from '../solutions/components/Feature';
import securityImage from '../../images/solutions/security-controls.svg';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>
        Aptible Managed Network Intrusion Detection
      </title>
      <meta
        name="description"
        content="Protect against suspicious and malicious network activity to and from your hosted apps and databases using Aptible Network Intrusion Detection"
      />
    </Helmet>

    <FeaturePageHero
       h1={
        <h1>
        Network Intrusion Detection <br className="desktopOnly" />
        and Incident Response
        </h1>
      }
      summary={
        <p className="XL">
          Protect against suspicious and malicious network activity to and from your hosted apps and
          databases using Aptible Network Intrusion Detection
        </p>
      }
      leadFormId="Network IDS"
    />
    <FeaturePageFeatureList>
      <Feature
        title="Aptible-managed Network Intrusion Detection"
        description="
          Use Aptible Network Intrusion Detection and Protection service to continuously monitor
          network activity of your hosted environment, analyzing traffic across your
          Docker containers using ML-based security analytics tools that are capable
          of detecting variety of threats. Aptible will work with your engineering team to remediate
          issues and ensure that your applications and databases have the highest level
          of security and reliability."
        smallImage={null}
        heroImage={
          <img
              src={securityImage}
              alt="Security Readiness dashboard on Aptible"
          />
        }
        steps={[
          [
            {
              id: '01',
              title: 'Continuous Network Flow Scanning',
              text:
                `Aptible continuously monitors VPC flow logs emanating from hosted Aptible
                 containers, and through endpoints exposing them, for any malicious or suspicious
                 activity based on up-to-date threat intelligence feeds from AWS, CrowdStrike, and
                 Proofpoint. Continuous monitoring is done using machine -learning-and-behavior-model
                 enabled tools, which are actively triaged by a dedicated Aptible security engineer
                 each week`
            },
            {
              id: '02',
              title: 'Concierge Incident Response',
              text:
                `A security engineer from Aptible will be responsible for analyzing and cataloging all
                findings from continuous network scans enabled on your account every week. Critical
                vulnerabilities are prioritized each week when detected. In the event of any critical
                vulnerability, our team will collaborate with yours on remediation if needed.`,
            },
            {
              id: '03',
              title: 'Network Protection Compliance Reports',
              text:
                `A compliance friendly report is generated every month outlining the scope of the network
                scans, findings and their respective criticality as it pertains to a customer’s account,
                and any remediation efforts that were undergone to fix them.`,
            },
          ]
        ]}
      />
    </FeaturePageFeatureList>
  </AptibleLayout>
);
