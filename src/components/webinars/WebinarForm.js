import React from 'react';
import styles from './WebinarForm.module.css';
import TextInput from '../forms/TextInput';
import Button from '../buttons/Button';
import { submitMarketoForm } from '../../lib/marketo';

class WebinarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      marketingConsent: null,
      finished: false
    };
  }

  fieldChanged = (field, value) => {
    this.setState({ [field]: value });
  }

  submit = () => {
    if (this.state.email.length < 1 || this.state.email.indexOf('@') === -1) {
      return;
    }

    const payload = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.email,
      LeadSource: 'Webinar',
      Contact_Consent__c: this.state.marketingConsent
    };

    submitMarketoForm(this.props.formId, payload, () => {
      this.setState({ finished: true });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {!this.state.finished &&
          <React.Fragment>
            <TextInput labelText="First Name" required="true" value={this.state.firstName} changeFn={(value) => this.fieldChanged('firstName', value)} />
            <TextInput labelText="Last Name" required="true" value={this.state.lastName} changeFn={(value) => this.fieldChanged('lastName', value)} />
            <TextInput labelText="Work Email" required="true" value={this.state.email} changeFn={(value) => this.fieldChanged('email', value)} />

            <div className={styles.marketingConsent}>
              <label>
              <input type="radio" name="marketing_consent" value="yes" checked={this.state.marketingConsent === 'yes'} onChange={(e) => this.fieldChanged('marketingConsent', e.target.value)} />
                <span>
                  I consent to receiving Aptible marketing emails. <br className="desktopOnly" />View our
                  <a href="/legal/privacy/" target="_blank">Privacy Policy</a>
                </span>
              </label>

              <label>
              <input type="radio" name="marketing_consent" value="no" checked={this.state.marketingConsent === 'no'} onChange={(e) => this.fieldChanged('marketingConsent', e.target.value)} />
                <span>No, I don't want to receive marketing emails.</span>
              </label>
            </div>

            <div className={styles.cta}>
              <Button onClickFn={this.submit}>Register For Webinar</Button>
            </div>
          </React.Fragment>
        }

        {this.state.finished &&
          <p>Thank you for registering. Check your email for the webinar details.</p>
        }
      </div>
    );
  }
}

export default WebinarForm;
