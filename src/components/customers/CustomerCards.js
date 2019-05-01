import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './CustomerCards.module.css';
import Card from '../shared/Card';
import customerPhoto from '../../images/customers/photos/tmp.jpg';
import healthifyLogo from '../../images/customers/logos/healthify.svg';

class CustomerCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid>
          <div className={styles.left}>
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
          </div>

          <div className={styles.right}>
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
    )
  }
}

export default CustomerCards;
