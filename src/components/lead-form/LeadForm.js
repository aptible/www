import React, { useState } from 'react';
import { navigate } from 'gatsby'
import cn from 'classnames';
import styles from './LeadForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { submitHubspotForm, HUBSPOT_FORM_DEMO } from '../../lib/hubspot.js';

export const LeadForm = ({
  id,
  btnText = 'Get a demo',
  successText = 'Thanks! Our team will contact you to schedule a demo shortly.',
  inputPlaceholder = 'Enter your email',
  scheduleDemoOnSubmit = true,
  calendarId = 'skylar-anderson',
  onSuccess = () => {},
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const shouldShowSuccessMessage = !scheduleDemoOnSubmit && submitted;
  
  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    const result = submitHubspotForm(HUBSPOT_FORM_DEMO, email, true);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setSubmitted(true);
    setError('');
    onSuccess();

    if (scheduleDemoOnSubmit) {
      navigate(`/p/schedule-a-demo?calendar=${calendarId}`)
    }
  };

  return (
    <div>
      <div
        className={styles.leadFormContainer}
        style={{ opacity: submitted ? 0 : 1 }}
      >
        <div
          id={id}
          className={styles.leadForm}
        >
          <input
            required
            className={styles.leadFormInput}
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

      {shouldShowSuccessMessage && (
        <div className={styles.submissionNotification}>{successText}</div>
      )}
    </div>
  );
};
