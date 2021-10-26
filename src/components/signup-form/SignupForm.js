import * as queryString from 'query-string';
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SignupForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { event, identify, trackOnLinkedIn } from '../../lib/aptible/analytics';
import { querystring } from '../../lib/util';

const utmKeywords = ['utm_campaign', 'utm_medium', 'utm_source', 'utm_term'];

const validateEmail = email => {
  if (!email) return { ok: false, message: 'email cannot be empty' };
  return { ok: true, message: '' };
};

export const SignupForm = ({
  id,
  btnText = 'Sign Up For Free',
  inputPlaceholder = 'Enter your email',
  onSuccess = () => { },
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
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
    setSubmitted(true);
    setError('');
    trackOnLinkedIn();
    onSuccess();

    // Give time for HubSpot & analytics to fire
    setTimeout(() => {
      window.location = `https://dashboard.aptible.com/signup?email=${email}`;
    }, 250);
  };

  return (
    <div>
      <iframe
        title="Signup Form"
        name="captureFrame"
        height="0"
        width="0"
        style={{ display: 'none' }}
      />

      <div
        className={styles.signupFormContainer}
        style={{ opacity: submitted ? 0 : 1 }}
      >
        <form
          id={id}
          onSubmit={onSubmit}
          target="captureFrame"
          className={styles.signupForm}
        >
          {utmKeywords.map(k => (
            <input hidden readOnly name={k} key={k} value={queryParams[k]} />
          ))}
          <input
            required
            className={styles.signupFormInput}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder={inputPlaceholder}
          />
          <button
            className={cn(buttonStyles.button, styles.button)}
            type="submit"
          >
            {btnText}
          </button>
        </form>
        <div className={styles.error}>{error ? error : ''}</div>
      </div>
    </div>
  );
};
