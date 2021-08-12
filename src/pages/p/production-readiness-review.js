import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '../../components/grid/Grid';
import cn from 'classnames';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import buttonStyles from '../../components/buttons/Button.module.css';
import PrrForm from '../../components/prr-form';
import heroStyles from '../../components/deploy/Hero.module.css';
import Modal, { ModalView } from '../../components/modal';

const SignupButton = ({ setShowForm }) => (
  <a onClick={() => setShowForm(true)} className={cn(buttonStyles.button)}>
    Start Your Production Readiness Review
  </a>
);

export default props => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <AptibleLayout>
        <Helmet>
          <title>Aptible | AWS Activate</title>
          <meta name="description" content="Production Readiness Reviews" />
        </Helmet>

        <Grid rows="2">
          <div style={{ gridColumn: '1 / span 7' }}>
            <h1 className={heroStyles.heroItem}>
              Production Readiness Reviews
            </h1>

            <div className={heroStyles.heroItem}>
              <p className="XL">
                We want to ensure our customers are set up to maximize
                reliability and cost-savings. That’s why we are committed to
                offering Production Readiness Reviews (PRRs) for all customers
                with a dedicated stack.
              </p>
            </div>

            <div className={heroStyles.heroItem}>
              <SignupButton setShowForm={setShowForm} />
            </div>

            <div
              className={heroStyles.heroItem}
              style={{ marginBottom: '128px' }}
            >
              <h5>What is a PRR?</h5>
              <p className="L">
                A Production Readiness Review (PRR) is a process through which
                you can work with an Aptible CRE to review your application's
                architecture using best practices for reliability that Aptible
                has gathered from our ongoing experience with our customers.
                These best practices will help to proactively avoid disruptive
                issues and will provide you the tools necessary to quickly
                diagnose and remediate problems relating to your application
                thereby ensuring that your applications are ready to provide the
                best experience for your customers.
              </p>

              <h5>What does the PRR cover?</h5>
              <p className="L">
                The PRR covers three stages in your Aptible journey - planning,
                operation and monitoring. In the Planning stage, you will
                receive guidance on managing user access, establishing
                appropriate network boundaries, principles for grouping
                resources, and deployment best practices. In the Operation
                stage, you will receive guidance on configuring apps, scaling
                services, managing endpoints, vulnerability scanning, and
                database management. In the Monitoring stage, you will receive
                guidance for setting up monitoring of common errors and metrics.
              </p>

              <h5>What is the PRR process?</h5>
              <p className="L">
                There are two parts to the PRR process. First, we will share a
                pre-assessment with all the best practices we recommend with an
                explanation for why each one is important. Second, one-on-one
                time with an Aptible Customer Reliability Engineer (CRE), after
                you have completed the pre-assessment, to review the results of
                your assessment and discuss additional recommendations.
              </p>
              <p className="L">
                Upon successful completion of the PRR and CRE approval, Aptible
                will provide you access to Urgent Support at no additional cost.
                You will have 24/7 access for urgent priority requests and an
                Aptible engineer will follow-up within one hour of the request
                being made.
              </p>
            </div>
          </div>
        </Grid>

        {showForm && (
          <Modal>
            <ModalView>
              <PrrForm
                location={props.location}
                id="production-readiness-form"
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
