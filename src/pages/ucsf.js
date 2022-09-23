import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import GreatCompany from '../components/customers/GreatCompany';
import Hero from '../components/ucsf/Hero';
import { Grid } from '../components/grid/Grid';
import Feature from '../pages/solutions/components/Feature';
import aptibleIcon from '../images/aptible-favicon-100.png';
import HowAptibleWorks from '../components/deploy/HowAptibleWorks';
import CustomerCards from '../components/ucsf/CustomerCards';
import Faq from '../components/deploy/Faq';
import ZeroTo from '../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | UCSF Health Hub</title>
      <meta name="description" content="Startups part of UCSF Health Hub get $5,000 in free credits to deploy and manage applications and databases on Aptible." />
    </Helmet>
    <Hero />
    <GreatCompany showIntro={false} />
    <Grid>
      <div style={{ gridColumn: '1 / span 7', paddingTop: '50px', paddingBottom: '100px' }}>
        <Feature
          title="UCSF Health Hub + Aptible"
          description={
            <>
              <p className="L">
                Aptible saves you valuable engineering time by automating
                and enforcing all the needed infrastructure security
                controls required to satisfy a variety of regulations and
                security frameworks such as HIPAA, HITRUST, and SOC 2. Using
                Aptible means you'll be compliant and audit-ready from day
                one.
              </p>
              <p className="L">
                Startups part of UCSF Health Hub get $5,000 in free credits to
                deploy and manage applications and databases on Aptible.
              </p>
            </>
          }
          smallImage={<img width="50%" alt="Aptible Icon" src={aptibleIcon} />}
          steps={[]}
        />
      </div>
    </Grid>
    <HowAptibleWorks includeVideo={false} />
    <CustomerCards />
    <Grid>
      <div style={{ gridColumn: '1 / span 7' }}>
        <div
          style={{
            marginLeft: 'calc(100%&1/13)',
            width: 'calc(100%*8/13)',
            marginTop: '128px',
          }}
        >
          <Faq
            title="Frequently Asked Questions"
            questions={[
              {
                title: 'Do these credits expire?',
                question: (
                  <p>
                    The credits expire 45 days from signing up if you’ve not
                    activated an Aptible Dedicated Stack. If a Dedicated
                    Stack is activated within 45 days of signing up, the
                    credits last indefinitely until you exhaust them.
                  </p>
                ),
              },
              {
                title: 'What do these credits go towards?* ',
                question: (
                  <div>
                    <p className="">
                      Aptible is an application development and hosting
                      platform, with a focus on security and compliance. The
                      Aptible pricing model is a pay-as-you-go subscription
                      model primarily based on utilized compute resources,
                      encrypted disk storage, backups and the provisioning
                      of a Dedicated Stack.
                    </p>

                    <p>
                      <a href="/pricing-plans">
                        Learn more about Aptible’s pricing.
                      </a>
                    </p>

                    <p>
                      On average, with $5,000, customers can expect to run
                      their workloads on Aptible for free for 4-6 months.
                      This duration can be longer or shorter depending on
                      the volume of your compute and storage utilization.
                    </p>
                  </div>
                ),
              },
              {
                title: 'What is a Dedicated Stack?',
                question: (
                  <p>
                    A dedicated stack is a deployment environment where you
                    are the sole tenant, to which Aptible automatically
                    applies and maintains the required security
                    configurations and SLAs needed for security, compliance
                    and availability. Each Aptible dedicated Stack runs in
                    its own private VPC. Dedicated Stacks are ideal for when
                    customers want to ingest regulated data like PHI, ensure
                    HIPAA and HITRUST compliance, or have stringent
                    availability and business continuity requirements.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>
    </Grid>
    <ZeroTo />
  </AptibleLayout>
);
