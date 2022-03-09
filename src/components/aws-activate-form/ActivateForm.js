import * as queryString from 'query-string';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import styles from './ActivateForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { querystring } from '../../lib/util';
import { event } from '../../lib/aptible/analytics';
import { submitHubspotForm, HUBSPOT_FORM_AWS_ACTIVATE } from '../../lib/hubspot.js';

const AWS_ACTIVATE_UNIQUE_CODE = `A3POPC`;

const injectedQueryParams = [
  AWS_ACTIVATE_UNIQUE_CODE,
];

const options = [
  'SOC 2 ',
  'HIPAA',
  'HITRUST',
  'FedRAMP',
  'PCI DSS',
  'ISO 27001',
  'Other Security Framework',
  'None',
];

export const ActivateForm = ({
  id,
  eventName='AWS Activate Application Submitted',
  btnText = 'Submit',
  successText = 'Thanks! Our team will follow up shortly.',
  inputPlaceholder = 'Enter your email',
  offerChoices,
  disclaimer,
  onSuccess = () => {},
  onCancel = () => {},
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [currentHost, setCurrentHost] = useState('');
  const [useCase, setUseCase] = useState('');
  const [error, setError] = useState('');
  const queryParams = queryString.parse(querystring());

  const onSubmit = () => {
    const result = submitHubspotForm(HUBSPOT_FORM_AWS_ACTIVATE, email, true);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    event(eventName, {
      name,
      email,
      company,
      website,
      currentHost,
      useCase
    });
    setSubmitted(true);
    setError('');
    setTimeout(onSuccess, 500);
  };

  return (
    <div>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/20235662.js"
        />
      </Helmet>

      {submitted && (
        <div className={styles.submissionNotification}>{successText}</div>
      )}

      <div
        className={styles.leadFormContainer}
        style={{ opacity: submitted ? 0 : 1 }}
      >
        <div
          id={id}
          className={styles.leadForm}
        >
          <h5>Submit Your Application</h5>

          {injectedQueryParams.map(k => (
            <input hidden name={k} key={k} value={queryParams[k]} />
          ))}

          <p className="">
            Please complete the application form below. Someone from Aptible
            will reach out to discuss next steps once your application has been
            received.
          </p>

          <div className={styles.inputGroup}>
            <label>Your Name:</label>
            <input
              required
              className={styles.leadFormInput}
              onChange={e => setName(e.target.value)}
              name="Name"
              type="text"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Work Email:</label>
            <input
              required
              className={styles.leadFormInput}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="Email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Company Name:</label>
            <input
              required
              className={styles.leadFormInput}
              onChange={e => setCompany(e.target.value)}
              type="text"
              name="Company Name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Company Website:</label>
            <input
              required
              className={styles.leadFormInput}
              onChange={e => setWebsite(e.target.value)}
              type="text"
              name="Company Website"
            />
          </div>

          <div className={cn(styles.inputGroup, styles.verticalInputGroup)}>
            <label>Current Hosting Provider:</label>
            <input
              required
              className={styles.leadFormInput}
              onChange={e => setCurrentHost(e.target.value)}
              type="text"
              name="Current Hosting Provider"
            />
          </div>

          <div className={cn(styles.inputGroup, styles.verticalInputGroup)}>
            <label>What's prompting you to try Aptible?</label>
            <input
              required
              className={styles.leadFormInput}
              onChange={e => setUseCase(e.target.value)}
              type="text"
              name="Use Case"
            />
          </div>

          {offerChoices && (
            <div className={cn(styles.inputGroup, styles.verticalInputGroup)}>
              <label>Which offer are you interested in?</label>
              <div className={styles.options} style={{margin: 0}}>
                {offerChoices.map(oc => (
                  <div className={styles.option}>
                    <input
                      name="offerChoices[]"
                      type="radio"
                      id={oc}
                      value={oc}
                    />
                    <label for={oc}>{oc}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p style={{ marginTop: 0 }}>
            Do you have any compliance and security requirements? Select all
            that apply.
          </p>

          <div className={styles.options}>
            {options.map(option => (
              <div className={styles.option}>
                <input
                  name="complianceRequirements[]"
                  id={option}
                  type="checkbox"
                  value={option}
                />
                <label for={option}>{option}</label>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <button
              className={cn(buttonStyles.button, styles.button)}
              type="submit"
              onClick={onSubmit}
            >
              {btnText}
            </button>

            <button type="cancel" className={styles.cancel} onClick={onCancel}>
              Cancel
            </button>
          </div>

          {disclaimer && (
            <p class="S">{disclaimer}</p>
          )}

        </div>
        <div className={styles.error}>{error ? error : ''}</div>
      </div>
    </div>
  );
};
