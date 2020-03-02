import React from 'react';
import classNames from 'classnames';
import metricsIllustration from '../../images/comply/act-metrics-illustration.png';
import onboardingIllustration from '../../images/comply/act-onboarding-illustration.png';
import { Grid } from '../grid/Grid';
import SignupArrowButton from '../signup/SignupArrowButton';
import styles from './Act.module.css';

class Act extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'metrics',
    };
  }

  openSection = sectionName => {
    this.setState({ openSection: sectionName });
  };

  render() {
    return (
      <div className={styles.container} id="act">
        <Grid>
          <div className={styles.intro}>
            <h2 className="h1">Act</h2>
            <p className="XL">
              Gain visibility into your compliance status and control across
              your security program.
            </p>

            <div className={styles.nav}>
              <button
                onClick={() => this.openSection('metrics')}
                className={
                  this.state.openSection === 'metrics' ? styles.active : ''
                }
              >
                Objectives & Metrics
                <span className={styles.circle} />
              </button>
              <button
                onClick={() => this.openSection('onboarding')}
                className={
                  this.state.openSection === 'onboarding' ? styles.active : ''
                }
              >
                Employee Onboarding
                <span className={styles.circle} />
              </button>
            </div>

            <div className={classNames(styles.cta, styles.desktop)}>
              <SignupArrowButton
                text="Get a demo and learn more"
                product="comply"
              />
            </div>
          </div>

          <div className={styles.illustration}>
            {this.state.openSection === 'metrics' && (
              <>
                <img src={metricsIllustration} alt="" />
              </>
            )}

            {this.state.openSection === 'onboarding' && (
              <>
                <img src={onboardingIllustration} alt="" />
                <p className="L">
                  Track workflow completion, evidence collection, and audit
                  readiness analytics. Understand how you’re doing in real time.
                </p>
              </>
            )}
          </div>

          <div className={classNames(styles.cta, styles.mobile)}>
            <SignupArrowButton
              text="Get a demo and learn more"
              product="comply"
            />
          </div>
        </Grid>
      </div>
    );
  }
}

export default Act;
