import * as queryString from 'query-string';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import styles from '../aws-activate-form/ActivateForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { event, identify, trackOnLinkedIn } from '../../lib/aptible/analytics';
import { querystring } from '../../lib/util';

const injectedQueryParams = [
  'utm_campaign',
  'utm_medium',
  'utm_source',
  'utm_term',
];

const validateEmail = email => {
  if (!email) return { ok: false, message: 'email cannot be empty' };
  return { ok: true, message: '' };
};

export const PrrForm = ({
  id,
  btnText = 'Submit',
  successText = 'Thanks! Our team will follow up shortly.',
  onSuccess = () => {},
  onCancel = () => {},
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
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
    event('PRR Form Submitted', { name, email, company });
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
        title="Form Submission"
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
          <h3>Start Your Production Readiness Review</h3>

          {injectedQueryParams.map(k => (
            <input hidden name={k} key={k} value={queryParams[k]} />
          ))}

          <p className="L">
            Please complete the application form below. Someone from Aptible
            will reach out to discuss next steps once your application has been
            received.
          </p>

          <input
            required
            className={styles.leadFormInput}
            onChange={e => setName(e.target.value)}
            name="Name"
            type="text"
            placeholder={'Your Name'}
          />

          <input
            required
            className={styles.leadFormInput}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="Email"
            placeholder={'Your Company Email'}
          />

          <input
            required
            className={styles.leadFormInput}
            onChange={e => setCompany(e.target.value)}
            type="text"
            name="Company Name"
            placeholder={'Company Name'}
          />

          <button
            className={cn(buttonStyles.button, styles.button)}
            type="submit"
          >
            {btnText}
          </button>

          <button type="cancel" className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
        </form>
        <div className={styles.error}>{error ? error : ''}</div>
      </div>
    </div>
  );
};
