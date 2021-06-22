import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Email.module.css';
import Button from '../buttons/Button';
import Checkbox from '../shared/Checkbox';

const PersonaOption = ({ answer, clickFn, currentAnswer }) => (
  <div className={styles.personaOption} onClick={() => clickFn(answer)}>
    <Checkbox checked={answer === currentAnswer} />
    <span>{answer}</span>
  </div>
);

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false,
      personaAnswer: '',
      marketingConsent: null,
    };
  }

  emailChange = e => {
    this.setState({ email: e.target.value });
  };

  consentChange = e => {
    this.setState({ marketingConsent: e.target.value });
  };

  personaChange = persona => {
    if (persona === this.state.personaAnswer) {
      this.setState({ personaAnswer: '' });
    } else {
      this.setState({ personaAnswer: persona });
    }
  };

  isFreeEmail = () => {
    return this.state.email.match(/(gmail|yahoo|hotmail|aol|icloud)/);
  };

  buttonClick = () => {
    if (this.state.email.length > 0 && this.state.email.indexOf('@') !== -1) {
      if (
        this.props.signupState.product === 'comply' &&
        this.state.personaAnswer === ''
      ) {
        alert("Please tell us what's most important to you right now");
        return;
      }

      if (this.props.signupState.product !== 'deploy' && this.isFreeEmail()) {
        alert('Please use your work email address');
        return;
      }

      this.props.setEmail(
        this.state.email,
        this.state.marketingConsent,
        this.state.personaAnswer,
      );
    } else {
      this.setState({ invalidEmail: true });
    }
  };

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

          {this.props.signupState.product === 'comply' && (
            <div className={styles.persona}>
              <h6>What’s most important to you right now?</h6>

              <div className={styles.personaOptions}>
                <PersonaOption
                  answer="Putting basic policies in place"
                  clickFn={this.personaChange}
                  currentAnswer={this.state.personaAnswer}
                />

                <PersonaOption
                  answer="Preparing for our first audit"
                  clickFn={this.personaChange}
                  currentAnswer={this.state.personaAnswer}
                />

                <PersonaOption
                  answer="Streamlining our existing security/compliance processes"
                  clickFn={this.personaChange}
                  currentAnswer={this.state.personaAnswer}
                />

                <PersonaOption
                  answer="Other"
                  clickFn={this.personaChange}
                  currentAnswer={this.state.personaAnswer}
                />
              </div>
            </div>
          )}

          <div className={styles.input}>
            <input
              type="email"
              placeholder="you@yourwork.com"
              spellCheck="false"
              onChange={this.emailChange}
              className={this.state.invalidEmail ? styles.invalidEmail : ''}
            />
          </div>

          <div className={styles.button}>
            <Button onClickFn={this.buttonClick}>Next</Button>
          </div>

          <div className={styles.marketingConsent}>
            <label>
              <input
                type="radio"
                name="marketing_consent"
                value="yes"
                checked={this.state.marketingConsent === 'yes'}
                onChange={this.consentChange}
              />
              I consent to receiving Aptible marketing emails. View our
              <a href="/legal/privacy/" target="_blank">
                Privacy Policy
              </a>
            </label>

            <label>
              <input
                type="radio"
                name="marketing_consent"
                value="no"
                checked={this.state.marketingConsent === 'no'}
                onChange={this.consentChange}
              />
              No, I don't want to receive marketing emails.
            </label>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Email;
