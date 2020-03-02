import React from 'react';
import acrIllustration from '../../images/comply/automate-acr-illustration.png';
import mdmIllustration from '../../images/comply/automate-mdm-illustration.png';
import ssdIllustration from '../../images/comply/automate-ssd-illustration.png';
import { Grid } from '../grid/Grid';
// import SignupButton from '../signup/SignupButton';
import ArrowButton from '../buttons/ArrowButton';
import styles from './Automate.module.css';

class Automate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'acr',
    };
  }

  openSection = sectionName => {
    this.setState({ openSection: sectionName });
  };

  render() {
    return (
      <div className={styles.container} id="automate">
        <Grid>
          <div className={styles.intro}>
            <h2 className="h1">Automate</h2>
            <p className="XL">
              Automate evidence collection and prevent mistakes by monitoring
              SaaS services for security configurations and changes.
            </p>

            <div className={styles.nav}>
              <button
                onClick={() => this.openSection('acr')}
                className={
                  this.state.openSection === 'acr' ? styles.active : ''
                }
              >
                Access Control Reviews
                <span className={styles.circle} />
              </button>
              <button
                onClick={() => this.openSection('ssd')}
                className={
                  this.state.openSection === 'ssd' ? styles.active : ''
                }
              >
                Secure System Development
                <span className={styles.circle} />
              </button>
              <button
                onClick={() => this.openSection('mdm')}
                className={
                  this.state.openSection === 'mdm' ? styles.active : ''
                }
              >
                Mobile Device Management
                <span className={styles.circle} />
              </button>
            </div>
          </div>

          <div className={styles.illustration}>
            {this.state.openSection === 'acr' && (
              <>
                <img src={acrIllustration} alt="" />
                <p className="L">
                  Monitor security configuration like access controls and 2FA
                  enrollment status across your SaaS apps
                </p>
              </>
            )}

            {this.state.openSection === 'ssd' && (
              <>
                <img src={ssdIllustration} alt="" />
                <p className="L">
                  Automate SDLC evidence gathering with GitHub repo security
                  checks like private/public status, branch protection status,
                  and force push history
                </p>
              </>
            )}

            {this.state.openSection === 'mdm' && (
              <>
                <img src={mdmIllustration} alt="" />
                <p className="L">
                  Automate manual workflows like Okta access control reviews and
                  JAMF device enrollment checks
                </p>
              </>
            )}
          </div>

          <div className={styles.cta}>
            {/* <SignupButton text="Get a demo" product="comply" /> */}
            <ArrowButton
              to="/signup-comply/"
              text="Get a demo and learn more"
            />
          </div>
        </Grid>
      </div>
    );
  }
}

export default Automate;
