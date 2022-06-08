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
            Heroku Migration Service
          </h1>

          <span className={styles.whiteText}>
            <p className="L">Aptible helps every developer use cloud infrastructure securely. Our PaaS abstracts away cloud security and compliance so our customers can focus on building great software.</p>
            <p className="L">Our team of engineers will help migrate qualified customers from Heroku onto Aptible at no additional cost. Sign up below to get started.</p>
          </span>

          <div className={styles.cta}>
            <SignupButton text="Migrate to Aptible" />
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
