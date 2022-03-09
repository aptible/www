import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SignupForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { submitHubspotForm, HUBSPOT_FORM_PRODUCT_SIGNUP } from '../../lib/hubspot.js';

export const SignupForm = ({
  id,
  btnText = 'Sign Up For Free',
  inputPlaceholder = 'Enter your email',
  allowPersonalEmails = true,
  onSuccess = () => { },
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    const result = submitHubspotForm(HUBSPOT_FORM_PRODUCT_SIGNUP, email, allowPersonalEmails);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSubmitted(true);
    setError('');
    onSuccess();

    // Give time for HubSpot & analytics to fire
    setTimeout(() => {
      window.location = `https://dashboard.aptible.com/signup?email=${encodeURIComponent(email)}`;
    }, 250);
  };

  return (
    <div>
      <div
        className={styles.signupFormContainer}
        style={{ opacity: submitted ? 0 : 1 }}
      >
        <div className={styles.signupForm} id={id}>
          <input
            required
            className={styles.signupFormInput}
            onKeyPress={onKeypress}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder={inputPlaceholder}
          />
          <button
            className={cn(buttonStyles.button, styles.button)}
            type="submit"
            onClick={onSubmit}
          >
            {btnText}
          </button>
        </div>
        <div className={styles.error}>{error ? error : ''}</div>
      </div>
    </div>
  );
};
