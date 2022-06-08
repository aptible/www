import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import HerokuMigrationHero from '../../components/comparison/HerokuMigrationHero';
import Features from '../../components/comparison/Features';
import Security from '../../components/comparison/Security';
import Support from '../../components/comparison/Support';
import Pricing from '../../components/comparison/Pricing';

import ZeroTo from '../../components/footer/ZeroTo';
import styles from './VideoLandingPage.module.css';

export default () => {
  return (
    <div>
      <Helmet>
        <title>Aptible | Heroku Migration Service</title>
        <meta
          name="description"
          content="We can help you move your apps from Heroku to Aptible"
        />
      </Helmet>
      <div className={styles.layout}>
        <div className={classnames(styles.container, styles.extraPadding)}>
          <HerokuMigrationHero />
        </div>
      </div>
      <Features />
      <Security />
      <Support />
      <Pricing />
      <ZeroTo />
    </div>
  );
};
