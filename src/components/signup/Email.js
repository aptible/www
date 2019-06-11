import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Email.module.css';
import Button from '../buttons/Button';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false,
      marketingConsent: null
    };
  }

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  consentChange = (e) => {
    this.setState({ marketingConsent: e.target.value });
  }

  buttonClick = () => {
    if (this.state.email.length > 0 && this.state.email.indexOf('@') !== -1) {
      this.props.setEmail(this.state.email, this.state.marketingConsent);
    } else {
      this.setState({ invalidEmail: true });
    }
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
            <input
              type="email"
              placeholder="you@yourwork.com"
              spellCheck="false"
              onChange={this.emailChange}
              className={this.state.invalidEmail ? styles.invalidEmail : ''}/>
          </div>

          <div className={styles.button}>
            <Button onClickFn={this.buttonClick}>Next</Button>
          </div>

          <div className={styles.marketingConsent}>
            <label>
              <input type="radio" name="marketing_consent" value="yes" checked={this.state.marketingConsent === 'yes'} onChange={this.consentChange} />
              I consent to receiving Aptible marketing emails. View our
              <a href="/legal/privacy/" target="_blank">Privacy Policy</a>
            </label>

            <label>
              <input type="radio" name="marketing_consent" value="no" checked={this.state.marketingConsent === 'no'} onChange={this.consentChange} />
              No, I don't want to receive marketing emails.
            </label>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Email;
