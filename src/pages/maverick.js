import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import GreatCompany from '../components/customers/GreatCompany';
import Hero from '../components/ucsf/Hero';
import { Grid } from '../components/grid/Grid';
import Feature from '../pages/solutions/components/Feature';
import aptibleIcon from '../images/aptible-favicon-100.png';
import HowAptibleWorks from '../components/ucsf/HowAptibleWorks';
import CustomerCards from '../components/ucsf/CustomerCards';
import Faq from '../components/deploy/Faq';
import ZeroTo from '../components/footer/ZeroTo';

const UTM_CAMPAIGN = 'partner_maverick';
const SUBHEADLINE = <>
  Built for teams who would rather focus on product innovation, Aptible’s platform as a service is not only great to start with but also great to scale on. As a Maverick Ventures portfolio company, <strong>you can claim $5,000 in credits to get started&mdash;and scale&mdash;on Aptible.</strong>
</>
const howItWorksSteps = [
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
        <><p className='L'>Your apps and databases are <strong>production ready</strong> from the moment you deploy them. Launch anything, from a static site to your entire backend, without config changes.</p><p className='L'>Secure, isolated infrastructure that meets HIPAA compliance requirements is only a toggle away. (And yes, we sign BAAs.)</p></>,
    },
    {
      id: '03',
      title: 'Scale, without compromises',
      text:
        <><p className='L'>Your app and database is ready for any load with unlimited scale. You pay only for the resources you use.</p><p className='L'>Aptible comes with enterprise-grade reliability, engineering-led support, single tenancy and resource isolation, infrastructure portability*, HITRUST and FedRAMP control inheritance*.</p><p className='L'>* Coming 2023</p></>,
    },
  ],
];

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Maverick Ventures  </title>
      <meta name="description" content="Maverick Ventures portfolio companies get $5,000 in free credits to deploy and manage applications and databases on Aptible." />
    </Helmet>
    <Hero
      headline="Build your ideas, not your infrastructure"
      subHeadline={SUBHEADLINE}
      utmCampaign={UTM_CAMPAIGN}
    />
    <Grid>
      <div style={{ gridColumn: '1 / span 7', paddingTop: '100px', marginBottom: '-150px', textAlign: 'center' }}>
        <p className="L">Hundreds of the fastest growing companies (including 20 digital health unicorns) have started and scaled on Aptible</p>
      </div>
    </Grid>
    <GreatCompany showIntro={false} />
    <Grid>
      <div style={{ gridColumn: '1 / span 7', paddingTop: '50px', paddingBottom: '100px' }}>
        <Feature
          title="Maverick Ventures + Aptible"
          description={
            <>
              <p className="L">Bring your code, Aptible does the rest.</p>
              <p className="L">
                Go from concept to cost-optimized, production-ready app. Aptible
                implements and manages the operation of all your infrastructure,
                security, and compliance. All the needed infrastructure security
                controls required to satisfy a variety of regulations and security
                frameworks&mdash;such as HIPAA, HITRUST, and SOC 2&mdash;are automated
                and enforced. With Aptible, companies can focus on creating value
                for customers, not managing low level infrastructure accounts. 
              </p>
              <p className="L">
                And for Maverick Ventures portfolio companies, we’ll provide $5,000
                in credits to get you started building your apps and databases
                on Aptible.
              </p>
            </>
          }
          smallImage={<img width="50%" alt="Aptible Icon" src={aptibleIcon} />}
          steps={[]}
        />
      </div>
    </Grid>
    <HowAptibleWorks includeVideo={false} steps={howItWorksSteps} />
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
    <ZeroTo headline={<>Focus on your code.<br />Not your infrastructure.</>} subHeadline="Get started in minutes not months." btnText="Redeem Credits Now" overrideParams={{ 'utm_campaign': UTM_CAMPAIGN }} />
  </AptibleLayout>
);
