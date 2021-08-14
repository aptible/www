import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Grid } from '../../components/grid/Grid';
import cn from 'classnames';
import Proof from '../../components/deploy/Proof';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Title from './components/Title';
import buttonStyles from '../../components/buttons/Button.module.css';
import ActivateForm from '../../components/aws-activate-form';
// import styles from './ContentPage.module.css';
import securityImage from '../../images/solutions/security-controls.svg';
import heroStyles from '../../components/deploy/Hero.module.css';
import Feature from '../../pages/solutions/components/Feature';
import Testimonial from '../../pages/solutions/components/Testimonial';
import aptibleIcon from '../../images/aptible-favicon-100.png';
import rightwayLogo from '../../images/customers/logos/rightway-logo.png';
import rightwayBranded from '../../images/solutions/rightway-branded-panel.png';
import Modal, { ModalView } from '../../components/modal';
import Faq from '../../components/deploy/Faq';

const RedeemButton = ({ setShowForm }) => (
  <a onClick={() => setShowForm(true)} className={cn(buttonStyles.button)}>
    Redeem Free Credits Now
  </a>
);

export default () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <AptibleLayout>
        <Helmet>
          <title>Aptible | AWS Activate</title>
          <meta
            name="description"
            content="Instant HIPAA, HITRUST and SOC 2 Compliance with $5,000 in Free Credits"
          />
        </Helmet>

        <Grid rows="2">
          <div style={{ gridColumn: '1 / span 7' }}>
            <h1 className={heroStyles.heroItem}>
              Instant HIPAA, HITRUST and SOC 2 Compliance with $5,000 in Free
              Credits
            </h1>

            <div className={heroStyles.heroItem}>
              <p className="XL">
                Accelerate your startup journey and bring secure, compliant
                applications to market faster by hosting and running them on
                Aptible. With $5,000 in credits, you can run your containerized
                applications and databases for free on Aptible for up to 6
                months.*
              </p>
            </div>

            <div className={heroStyles.heroItem}>
              <RedeemButton setShowForm={setShowForm} />
            </div>

            <div style={{ margin: '128px 0' }}>
              <Proof />
            </div>
          </div>
        </Grid>

        <Grid>
          <div style={{ gridColumn: '1 / span 7' }}>
            <Feature
              title="AWS Activate + Aptible = Budget-Friendly Peace of Mind"
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
                    AWS Activate enrolled startups can avail $5,000 in free
                    credits to deploy and manage applications and databases on
                    the Aptible development platform, so you have the peace of
                    mind knowing your workloads are secure, compliant and
                    reliable with little effort from your teams, at
                    startup-friendly costs.
                  </p>
                </>
              }
              smallImage={<img width="50%" src={aptibleIcon} />}
              heroImage={
                <img
                  src={securityImage}
                  alt="Security Readiness dashboard on Aptible"
                />
              }
              steps={[
                [
                  {
                    title: 'Instant compliance and audit-readiness',
                    text:
                      'Get to HITRUST, HIPAA and SOC 2 faster by hosting your applications and database on Aptible’s fully managed infrastructure with automated and inheritable compliance controls baked in.',
                  },
                  {
                    title:
                      'Secure, resilient host, middleware and network architecture',
                    text:
                      'Remove the work of architecting your infrastructure for secure development, and abstract away the drudgery of constantly scanning and remediating your host and network for vulnerabilities with Aptible’s built-in and fully abstracted network and host vulnerability management.',
                  },
                  {
                    title: 'Reliable, failsafe DevOps without the overhead',
                    text:
                      'Aptible fully manages and monitors your infrastructure, scaling to your needs as you grow so your team can focus on building great products without ever having to think about infrastructure.',
                  },
                ],
                [
                  {
                    title: '24/7 security and SRE support',
                    text:
                      'Have the confidence to quickly develop and launch secure apps and databases with a world-class team of reliability and security engineers offering you support along the way, all the while constantly scanning and remediating any issues in the underlying infrastructure on your behalf.',
                  },
                  { title: null, text: null },
                  { title: null, text: null },
                ],
              ]}
            />

            <div style={{ marginTop: '48px' }}>
              <RedeemButton setShowForm={setShowForm} />
            </div>

            <div style={{ margin: '128px 0' }}>
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
                    title: 'How do I become eligible for these credits?',
                    question: (
                      <p className="">
                        Businesses have to show proof of active AWS Activate
                        membership.
                        <a onClick={() => setShowForm(true)} href="#">
                          Submit your info
                        </a>{' '}
                        and a member of the Aptible team will reach out with
                        more information.
                      </p>
                    ),
                  },
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

            <div style={{ margin: '128px 0' }}>
              <RedeemButton setShowForm={setShowForm} />
            </div>
          </div>
        </Grid>

        {showForm && (
          <Modal>
            <ModalView>
              <ActivateForm
                id="activate-form"
                onSuccess={() => {
                  setShowForm(false);
                }}
                onCancel={() => setShowForm(false)}
              />
            </ModalView>
          </Modal>
        )}
      </AptibleLayout>
    </div>
  );
};
