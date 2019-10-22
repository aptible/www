import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '../../components/grid/Grid';
import ContentLayout from '../../components/layouts/ContentLayout';
import ContentBlock from '../../components/comply/support-standards/ContentBlock';

export default () => (
  <ContentLayout title="Support Standards" fullWidth>
    <Helmet>
      <title>Aptible Comply | Automate Security and Compliance</title>
      <meta
        name="description"
        content="Aptible Comply Workflows automate the management of your company’s security, keeping track of everything you have to do to maintain compliance (and stay secure)."
      />
    </Helmet>

    <Grid>
      <ContentBlock>
        <h3>Aptible Comply Support</h3>

        <p>
          Aptible’s mission is to help your team build trust on the Internet. To
          best support your team in that effort during on-boarding and beyond,
          we have broken down how the Aptible Customer Success Teams can be of
          service to your team.
        </p>

        <h6>Who is supporting you at Aptible?</h6>

        <ul>
          <li>
            <span className="white-text">Customer Success Manager (CSM)⁠</span>
            —paired with your company as soon as you sign on, the CSM will be
            with you for the life of the relationship. Guiding you through
            onboarding, answering system/renewal/general Aptible questions,
            understanding your goals as a company, upgrading you to new
            tools/offerings, and making sure you receive value are just some of
            your CSM’s responsibilities.
          </li>
          <li>
            <span className="white-text">Data Protection Advisors (DPA)</span>
            —during onboarding, you will work closely with our DPAs, who have
            data privacy, security and compliance backgrounds in the protocols
            we support. Questions related to any of the content in Comply is
            best suited for them and your CSM will help coordinate calls and
            emails for assistance.
          </li>
          <li>
            <span className="white-text">Product/Marketing Liaisons</span>
            —this team is in place to understand feedback you have on the
            product and work it into our future roadmaps. They won’t join every
            meeting, but they will be in touch with new feature offerings, for
            product webinars and to understand where the product can provide
            more value.
          </li>
          <li>
            <span className="white-text">Deploy Support Team</span>—if you are a
            Deploy customer in addition to Comply, our Customer and Service
            Reliability Engineers can help—catch them at{' '}
            <a href="mailto:support@aptible.com">support@aptible.com</a>.
          </li>
        </ul>

        <h6>
          How can I get in touch with the Aptible team and what type of response
          time can I expect?
        </h6>

        <p>
          We aim to support and communicate with customers using our customers’
          preferred modes of communication. The details below outline reliable
          ways to get in touch with us, as well as anticipated response times
          for each support method.
        </p>
      </ContentBlock>

      <ContentBlock fullWidth>
        <table className="S table-responsive">
          <thead>
            <tr>
              <th style={{ width: '122px' }}>Method of Support*</th>
              <th style={{ width: '123px' }}>Intended Party</th>
              <th style={{ width: '222px' }}>Standard Response Time</th>
              <th style={{ width: '267px' }}>Ideal Use Scenario</th>
              <th style={{ width: '200px' }}>Examples</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td data-label="Method of Support">Check In Calls</td>
              <td data-label="Intended Party">DPA or CSM</td>
              <td data-label="Standard Response Time">
                Live, 30 minute call with your CSM and a DPA. These are offered
                weekly for the first four weeks of onboarding (though can be
                canceled at your discretion).
              </td>
              <td data-label="Ideal Use Scenario">
                Larger scale questions during onboarding related to designing or
                operating your ISMS or that will warrant a discussion.
              </td>
              <td data-label="Examples">
                How can I implement this control at my company?
                <br />
                What is the audit process like?
              </td>
            </tr>

            <tr>
              <td data-label="Method of Support">Drift Chat (in Comply)</td>
              <td data-label="Intended Party">DPA</td>
              <td data-label="Standard Response Time">
                24 Hours (or end of next business day if on weekends)
              </td>
              <td data-label="Ideal Use Scenario">
                Non-urgent questions regarding designing or operating your ISMS,
                typically when onboarding to Comply.
              </td>
              <td data-label="Examples">
                What does “MDM” stand for?
                <br />
                How can I copy this template?
              </td>
            </tr>

            <tr>
              <td data-label="Method of Support">
                ZenDesk Ticket support@aptible.com
              </td>
              <td data-label="Intended Party">DPA or CSM</td>
              <td data-label="Standard Response Time">2 Business Days</td>
              <td data-label="Ideal Use Scenario">
                Non-urgent questions that can be addressed asynchronously.
              </td>
              <td data-label="Examples">
                Can you send me my most recent contract?
                <br />
                Can you recommend an ISO 27001 auditor?
              </td>
            </tr>

            <tr>
              <td data-label="Method of Support">Direct Email</td>
              <td data-label="Intended Party">DPA or CSM</td>
              <td data-label="Standard Response Time">
                2 Business Days (or sooner, if deemed urgent by Aptible)
              </td>
              <td data-label="Ideal Use Scenario">
                All questions —particularly urgent ones—are welcomed via direct
                email. Also ideal for questions that can be answered
                asynchronously.
              </td>
              <td data-label="Examples">
                When is my renewal date?
                <br />
                Can we set up a call?
                <br />
                How can I add a new user?
                <br />
              </td>
            </tr>
          </tbody>
        </table>

        <p className="S table-footnote">
          <em>
            *Note—we will ultimately respond to you if you contact us via any of
            these methods, however, please note the standard response time on
            each. Some questions/issues may vary depending on the responder’s
            current workload and schedule.
          </em>
        </p>
      </ContentBlock>

      <ContentBlock>
        <h6>What is included in ‘standard Comply Support’?</h6>

        <p>
          This includes weekly support (up to thirty minutes per week of live
          check-ins or meetings) during the first four weeks of onboarding.
        </p>

        <p>
          Whether you are a new customer going through onboarding or have been
          using Aptible for years, we encourage you to connect with us with
          support@aptible.com or via email. Please note our standard response
          times (outlined above) and reach out to your CSM if you have issues or
          concerns.
        </p>

        <h6>What if I have a tight deadline?</h6>

        <p>
          Our goal is to support you based on the deadline you provide us during
          kickoff, but we ask you to keep in mind that we are supporting other
          incoming requests, business initiatives, and customer questions, so we
          will need to schedule accordingly if your deadline requires more than
          our standard support levels.
        </p>

        <h6>What if I need more support than your standard?</h6>

        <p>
          Talk to your Account Executive or CSM on our additional support
          packages.
        </p>
      </ContentBlock>
    </Grid>
  </ContentLayout>
);
