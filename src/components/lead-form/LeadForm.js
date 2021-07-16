import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import styles from './LeadForm.module.css';
import buttonStyles from '../buttons/Button.module.css';
import { event, identify, trackOnLinkedIn } from '../../lib/aptible/analytics';

const validateEmail = email => {
  if (!email) return { ok: false, message: 'email cannot be empty' };
  return { ok: true, message: '' };
};

export const LeadForm = ({
  id,
  btnText = 'Get a demo',
  successText = 'Thanks! Our team will contact you to schedule a demo shortly.',
  inputPlaceholder = 'Enter your email',
  onSuccess = () => {},
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    const result = validateEmail(email);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    identify(email);
    event(`Submitted Form: ${id}`);
    setSubmitted(true);
    setError('');
    trackOnLinkedIn();
    onSuccess();
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
        style={{ visibility: 'hidden' }}
      />

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
          <input
            required
            className={styles.leadFormInput}
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

      {submitted && (
        <div className={styles.submissionNotification}>{successText}</div>
      )}
    </div>
  );
};
