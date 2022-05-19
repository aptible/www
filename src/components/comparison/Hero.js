import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import styles from './Hero.module.css';
import proofStyles from '../deploy/Proof.module.css';
import devopsTerminal from '../../images/solutions/devops-deploy-terminal.svg';
import himsHersLogo from '../../images/customers/logos/hims-hers-logo.png';
import rightwayLogo from '../../images/customers/logos/rightway-logo.png';
import aidinLogo from '../../images/customers/logos/aidin-logo.png';
import glidianLogo from '../../images/customers/logos/glidian-logo.png';
import medialMemoryLogo from '../../images/customers/logos/medical-memory-logo.png';
import pagerLogo from '../../images/customers/logos/pager-logo.png';


export default () => (
  <Grid rows="1">
    <div className={styles.container}>
      <Grid>
        <div className={styles.intro}>
          <h1 className="hero">
            Aptible vs. Heroku
          </h1>

          <p className="L">Aptible was founded in 2013 to help every developer use cloud infrastructure securely. Inspired by Heroku, who had simplified cloud deployment by building an opinionated PaaS with great DX, we chose to take a similar approach — but focused on abstracting away cloud security and compliance so our customers could focus on building great software.</p>
          <p className="L">The result is a PaaS that feels like Heroku at its core, but extends Heroku's functionality to meet the rigorous needs of companies that work with sensitive data or in regulated industries. This page summarizes why hundreds of the most successful digital health companies trust Aptible for secure infrastructure.</p>

          <div className={styles.cta}>
            <SignupButton text="Sign up for free" />
            <span>or read our <Link to="/blog/heroku-to-aptible-migration-guide/">Heroku Migration Guide</Link>
            </span>
          </div>
        </div>

        <div className={styles.screenshot}>
          <img
            src={devopsTerminal}
            alt="Result of running Aptible Deploy command"
          />
        </div>
      </Grid>

      <div className={styles.proof}>
        <p className={proofStyles.proofTitle}>
          Hundreds of digital health companies
          &mdash; <Link to="/customers/">including 20+ unicorns 🦄</Link> &mdash;
          build on Aptible:
        </p>
        <div className={proofStyles.logoBar}>
          <img height="24" src={himsHersLogo} alt="hims & hers" />
          <img height="24" src={rightwayLogo} alt="Rightway" />
          <img height="40" src={aidinLogo} alt="Aidin" />
          <img height="40" src={glidianLogo} alt="Glidian" />
          <img height="24" src={medialMemoryLogo} alt="Medical Memory" />
          <img height="35" src={pagerLogo} alt="pager" />
        </div>
      </div>
    </div>
  </Grid>
);
