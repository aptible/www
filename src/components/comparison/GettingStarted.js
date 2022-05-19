import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Content.module.css';

export default () => (
  <Grid rows="1">
    <div className={styles.container} id="support">
      <h2>
        Getting Started
      </h2>

      <p>Check out our <a href="https://www.aptible.com/blog/heroku-to-aptible-migration-guide">Heroku to Aptible Migration Guide</a> to help with deploying your Heroku-hosted apps and databases on Aptible. Aptible is free to try if you sign up with a company e-mail address, and our <a href="https://deploy-docs.aptible.com/docs/support">support team</a> is ready to help with any questions you have during setup or migration.</p>
    </div>
  </Grid>
);
