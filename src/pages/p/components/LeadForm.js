import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import styles from './LeadForm.module.css';
import buttonStyles from '../../../components/buttons/Button.module.css'

export default ({ id }) => {
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

      <div className={styles.leadFormContainer}>
        <form id={id}>
          <input
            required
            className={styles.leadFormInput}
            type="email"
            placeholder="Enter your work email to get started" />
          <button
            className={cn(buttonStyles.button, styles.button)}
            type="submit">
              Get a demo
          </button>
        </form>
      </div>
    </div>
  );
};
