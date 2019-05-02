import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './WhoUses.module.css';
import Card from '../shared/Card';
import customerPhoto from '../../images/customers/photos/tmp.jpg';
import healthifyLogo from '../../images/customers/logos/healthify.svg';

export default () => (
  <div className={styles.container}>
    <Grid rows="3">
      <div className={styles.intro}>
        <h1>Who Uses Comply?</h1>
        <p className="XL">
          Small companies, operating in the cloud, forced to response to long
          vendor security assessments; and/or dealing with regulations like
          HIPAA/GDPR to go to market.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaOne}`}>
        <h6>Persona Number One</h6>
        <p className="L">
          Small companies operating in the cloud who care about security in some
          way.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaTwo}`}>
        <h6>Persona Number Two</h6>
        <p className="L">
          Small companies operating in the cloud who care about security in some
          way.
        </p>
      </div>

      <div className={`${styles.persona} ${styles.personaThree}`}>
        <h6>Persona Number Three</h6>
        <p className="L">
          Small companies operating in the cloud who care about security in some
          way.
        </p>
      </div>

      <div className={styles.customersLeft}>
        <Card
          logo={healthifyLogo}
          headline="Aptible's secure, compliant cloud platform allowed UCSF to launch The Pride Study in less than 6 weeks, for 90% less than the cost of a traditional IT solution."
          text="&ldquo;Aptible provides a seamless PaaS and compliance tool for health IT companies, lowering barriers to entry and speeding up product development. This infrastructure is a huge benefit for the industry.&rdquo;"
          author="Firstname Lastname, CTO"
          readMore="true"
        />
        <Card
          logo={healthifyLogo}
          headline="Aptible's secure, compliant cloud platform allowed UCSF to launch The Pride Study in less than 6 weeks, for 90% less than the cost of a traditional IT solution."
          text="&ldquo;Aptible provides a seamless PaaS and compliance tool for health IT companies, lowering barriers to entry and speeding up product development. This infrastructure is a huge benefit for the industry.&rdquo;"
          author="Firstname Lastname, CTO"
          readMore="true"
        />
      </div>

      <div className={styles.customersRight}>
        <Card
          logo={healthifyLogo}
          image={customerPhoto}
          headline="Aptible's secure, compliant cloud platform allowed UCSF to launch The Pride Study in less than 6 weeks, for 90% less than the cost of a traditional IT solution."
          text="&ldquo;Aptible provides a seamless PaaS and compliance tool for health IT companies, lowering barriers to entry and speeding up product development. This infrastructure is a huge benefit for the industry.&rdquo;"
          author="Firstname Lastname, CTO"
          tags="health"
          videoLength="2:53"
          readMore="true"
        />
        <Card
          logo={healthifyLogo}
          headline="Aptible's secure, compliant cloud platform allowed UCSF to launch The Pride Study in less than 6 weeks, for 90% less than the cost of a traditional IT solution."
          text="&ldquo;Aptible provides a seamless PaaS and compliance tool for health IT companies, lowering barriers to entry and speeding up product development. This infrastructure is a huge benefit for the industry.&rdquo;"
          author="Firstname Lastname, CTO"
          readMore="true"
        />
      </div>
    </Grid>
  </div>
);
