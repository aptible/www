import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import styles from './LeadForm.module.css';
import buttonStyles from '../../../components/buttons/Button.module.css'
import { event, identify, trackOnLinkedIn } from '../../../lib/aptible/analytics'

export default ({ id }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    identify(email)
    event(`Submitted Form: ${id}`);
    setSubmitted(true);
    trackOnLinkedIn();
  }

  return (
    <div>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/20235662.js" />
      </Helmet>
      
      <iframe name="captureFrame" height="0" width="0" style={{visibility: 'hidden'}}></iframe>

      <div className={styles.leadFormContainer} style={{ opacity: submitted ? 0 : 1 }}>
        <form id={id} onSubmit={onSubmit} target="captureFrame">
          <input
            required
            className={styles.leadFormInput}
            onChange={(e) => setEmail(e.target.value) }
            type="email"
            placeholder="Enter your work email to get started" />
          <button
            className={cn(buttonStyles.button, styles.button)}
            type="submit">
              Get a demo
          </button>
        </form>
      </div>

      {submitted &&
        <div className={styles.submissionNotification}>Thanks! Our team will contact you to schedule a demo shortly.</div>
      }
    </div>
  );
};
