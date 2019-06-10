import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Email.module.css';
import Button from '../buttons/Button';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      validEmail: null,
      marketingConsent: 'no'
    };
  }

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  consentChange = (e) => {
    this.setState({ marketingConsent: e.target.checked ? 'yes' : 'no' });
  }

  buttonClick = () => {
    this.props.setEmail(this.state.email, this.state.marketingConsent);
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid rows="3">
          <div className={styles.getStarted}>
            <h4>Get Started with Aptible</h4>
          </div>

          <div className={styles.register}>
            <p>Register with your work email</p>
          </div>

          <div className={styles.input}>
            <input type="email" placeholder="you@yourwork.com" spellCheck="false" onChange={this.emailChange} />
          </div>

          <div className={styles.button}>
            <Button onClickFn={this.buttonClick}>Next</Button>
          </div>

          <div className={styles.marketingConsent}>
            <input type="checkbox" name="marketingConsent" id="marketingConsent" value="yes" onChange={this.consentChange} />
            <label htmlFor="marketingConsent">
              I consent to receiving Aptible marketing emails. View our
              <a href="/legal/privacy/" target="_blank">Privacy Policy</a>
            </label>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Email;
