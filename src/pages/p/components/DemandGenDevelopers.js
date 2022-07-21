import React from 'react';
import styles from './DemandGenDevelopers.module.css';
import lightStyles from '../../../components/layouts/LightLayout.module.css';
import Console from '../../../components/deploy/Console';

export default () => (
  <div className={styles.developers}>
    <div className={lightStyles.content}>
      <div className={styles.developersContent}>
        <h6>Built for developers</h6>
        <h2>World-class developer experience</h2>
        <p>Aptible has a familiar PaaS workflow&mdash;just extended to meet the rigorous needs of companies that work with sensitive data or in regulated industries.</p>
        <p><a className={styles.developersCta} href="https://deploy-docs.aptible.com/docs" target="_blank">Read the docs &rarr;</a></p>

        <span>
          <h6>Deploy a demo app</h6>
          <p>Get up and running quickly by deploying a demo web app into your new Aptible account.</p>
          <p><a href="https://deploy-docs.aptible.com/docs/deploy-demo-app" target="_blank">Demo app tutorial</a></p>
        </span>

        <span>
          <h6>The Aptible CLI</h6>
          <p>Use our CLI to deploy and manage apps, read logs, and securely SSH into your containers.</p>
          <p><a href="https://deploy-docs.aptible.com/docs/cli" target="_blank">Install the CLI</a></p>
        </span>
      </div>

      <div className={styles.console}>
        <Console />
      </div>
    </div>
  </div>
);
