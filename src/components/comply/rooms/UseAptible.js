import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './UseAptible.module.css';

export default () => (
  <div className={styles.container}>
    <Grid rows="3">
      <div className={styles.intro}>
        <h2>Don’t let security documentation requests slow deals down.</h2>
      </div>

      <div className={styles.callout}>
        <h5>
          It takes 10 steps to
          <br />
          fulfill a documentation request&hellip;
        </h5>
      </div>

      <div className={styles.steps}>
        <ol>
          <li className={styles.aptible}>The prospect requests a document</li>
          <li>Sales requests documentation through Salesforce</li>
          <li>The request kicks off an email that notifies the legal team</li>
          <li>
            The legal team loads the info into DocuSign and sends it to sales
          </li>
          <li>Sales sends Docusign link back to customer with NDA</li>
          <li>
            Customer signs NDA and sends to sales who then sends it to legal
          </li>
          <li>A Jira ticket is opened to have the document watermarked</li>
          <li>The watermarked document is sent to sales</li>
          <li>Sales sends the document to the prospect</li>
          <li className={styles.aptible}>The prospect reviews the document</li>
        </ol>
      </div>

      <div className={styles.stepsArrow}>
        <svg
          width="248"
          height="463"
          viewBox="0 0 248 463"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.5H112.103C179.757 0.5 234.603 55.3451 234.603 123V455.353H229.603V123C229.603 58.1065 176.996 5.5 112.103 5.5H0V0.5Z"
            fill="#33C69F"
          />
          <path
            d="M231.999 463L248 445.232L248 439L233.599 454.992L230.399 454.992L216 439L216 445.232L231.999 463Z"
            fill="#33C69F"
          />
        </svg>
      </div>

      <div className={styles.useAptible}>
        <h2>Or you can use Aptible and skip all of these steps.</h2>
      </div>
    </Grid>
  </div>
);
