import React, { useState } from 'react';
import styles from './DemandGenSignup.module.css';
import { submitHubspotForm, HUBSPOT_FORM_DEMAND_GEN_Q3 } from '../../../lib/hubspot';

export const DemandGenSignup = ({
  btnText = 'Get started &mdash; free',
  inputPlaceholder = 'you@company.com',
  persona = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const result = submitHubspotForm(HUBSPOT_FORM_DEMAND_GEN_Q3, email, false, persona);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    if (window.aptible) {
      window.aptible.identify(email);
      window.aptible.event('signup', null);
    }

    setSubmitted(true);
    setError('');

    // Give time for HubSpot & analytics to fire
    setTimeout(() => {
      window.location = `https://dashboard.aptible.com/signup?email=${encodeURIComponent(email)}`;
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
        className={styles.heroForm}
        style={{ opacity: submitted ? 0 : 1 }}
      >
        <form
          onSubmit={onSubmit}
          target="captureFrame"
        >
          <input
            required
            type="email"
            placeholder={inputPlaceholder}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className={styles.cta}
            type="submit"
            dangerouslySetInnerHTML={{ __html: btnText }}
           />
        </form>
        <div className={styles.error}>{error ? error : ''}</div>
      </div>
    </div>
  );
};

export default DemandGenSignup;
