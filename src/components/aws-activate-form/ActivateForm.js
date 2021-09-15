import * as queryString from 'query-string';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import styles from './ActivateForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { event, identify, trackOnLinkedIn } from '../../lib/aptible/analytics';
import { querystring } from '../../lib/util';

const AWS_ACTIVATE_UNIQUE_CODE = `A3POPC`;

const injectedQueryParams = [
  'utm_campaign',
  'utm_medium',
  'utm_source',
  'utm_term',
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

const validateEmail = email => {
  if (!email) return { ok: false, message: 'email cannot be empty' };
  return { ok: true, message: '' };
};

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
  const [requirements, setRequirements] = useState('');
  const [currentHost, setCurrentHost] = useState('');
  const [error, setError] = useState('');
  const queryParams = queryString.parse(querystring());

  const onSubmit = () => {
    const result = validateEmail(email);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    identify(email);
    event('Email Collected', { formId: id });
    event(eventName, {
      name,
      email,
      company,
      website,
      requirements,
      currentHost,
    });
    setSubmitted(true);
    setError('');
    trackOnLinkedIn();
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

      <iframe
        name="captureFrame"
        height="0"
        width="0"
        style={{ display: 'none' }}
      />

      {submitted && (
        <div className={styles.submissionNotification}>{successText}</div>
      )}

      <div
        className={styles.leadFormContainer}
        style={{ opacity: submitted ? 0 : 1 }}
      >
        <form
          id={id}
          onSubmit={onSubmit}
          target="captureFrame"
          className={styles.leadForm}
        >
          <h3>Submit Your Application</h3>

          {injectedQueryParams.map(k => (
            <input hidden name={k} key={k} value={queryParams[k]} />
          ))}

          <p className="L">
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

          <button
            className={cn(buttonStyles.button, styles.button)}
            type="submit"
          >
            {btnText}
          </button>

          <button type="cancel" className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>

          {disclaimer && (
            <p class="S">{disclaimer}</p>
          )}

        </form>
        <div className={styles.error}>{error ? error : ''}</div>
      </div>
    </div>
  );
};
